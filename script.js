const bookGrid = document.querySelector('#books');
const searchInput = document.querySelector('#searchInput');
const categoryFilter = document.querySelector('#categoryFilter');
const chatForm = document.querySelector('#chatForm');
const chatInput = document.querySelector('#chatInput');
const chatLog = document.querySelector('#chatLog');
const bookCount = document.querySelector('#bookCount');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();
bookCount.textContent = BOOKS.length;

function uniqueCategories() {
  return [...new Set(BOOKS.map((book) => book.category))].sort();
}

function buildCategoryOptions() {
  uniqueCategories().forEach((category) => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

function bookMatches(book, searchTerm, category) {
  const searchableText = [
    book.title,
    book.subtitle,
    book.series,
    book.category,
    book.status,
    book.ageRange,
    book.description,
    ...book.themes
  ]
    .join(' ')
    .toLowerCase();

  const matchesSearch = !searchTerm || searchableText.includes(searchTerm.toLowerCase());
  const matchesCategory = category === 'all' || book.category === category;
  return matchesSearch && matchesCategory;
}

function renderBooks() {
  const searchTerm = searchInput.value.trim();
  const category = categoryFilter.value;
  const books = BOOKS.filter((book) => bookMatches(book, searchTerm, category));

  if (!books.length) {
    bookGrid.innerHTML = `
      <article class="book-card">
        <div class="book-body">
          <h3>No books found</h3>
          <p class="book-description">Try a different search term or category.</p>
        </div>
      </article>
    `;
    return;
  }

  bookGrid.innerHTML = books
    .map(
      (book) => `
        <article class="book-card">
          <div class="cover">
            ${
              book.cover
                ? `<img src="${book.cover}" alt="Cover for ${book.title}" />`
                : `<div class="cover-title">${book.title}</div>`
            }
          </div>
          <div class="book-body">
            <div class="meta-row">
              <span class="badge">${book.category}</span>
              <span class="badge">${book.status}</span>
            </div>
            <div>
              <h3>${book.title}</h3>
              <p class="book-description"><strong>${book.subtitle}</strong></p>
            </div>
            <p class="book-description">${book.description}</p>
            <div class="meta-row">
              <span class="badge">${book.ageRange}</span>
              <span class="badge">${book.price}</span>
            </div>
            <div class="tags">
              ${book.themes.map((theme) => `<span class="tag">${theme}</span>`).join('')}
            </div>
            <div class="book-actions">
              <a class="button primary" href="${book.buyLink}">Buy / preorder</a>
              <button class="button ghost ask-about-book" type="button" data-title="${book.title}">Ask about this</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  document.querySelectorAll('.ask-about-book').forEach((button) => {
    button.addEventListener('click', () => {
      const title = button.dataset.title;
      askQuestion(`Tell me about ${title}`);
      document.querySelector('#ask').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function scoreBook(book, question) {
  const normalizedQuestion = normalize(question);
  const fields = [
    book.title,
    book.subtitle,
    book.series,
    book.category,
    book.status,
    book.ageRange,
    book.description,
    ...book.themes,
    ...book.questions
  ].map(normalize);

  let score = 0;
  fields.forEach((field) => {
    if (!field) return;
    if (normalizedQuestion.includes(field) || field.includes(normalizedQuestion)) score += 6;
    field.split(' ').forEach((word) => {
      if (word.length > 3 && normalizedQuestion.includes(word)) score += 1;
    });
  });
  return score;
}

function findFaqAnswer(question) {
  const normalizedQuestion = normalize(question);
  return STORE_FAQ.find((faq) => faq.triggers.some((trigger) => normalizedQuestion.includes(normalize(trigger))));
}

function answerQuestion(question) {
  const faq = findFaqAnswer(question);
  const rankedBooks = BOOKS
    .map((book) => ({ book, score: scoreBook(book, question) }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score);

  if (faq && !rankedBooks.length) {
    return faq.answer;
  }

  if (rankedBooks.length) {
    const best = rankedBooks[0].book;
    const related = rankedBooks
      .slice(1, 4)
      .map((result) => result.book.title)
      .join(', ');

    return [
      `${best.title} is probably the closest match. ${best.description}`,
      `Category: ${best.category}. Age range: ${best.ageRange}. Status: ${best.status}. Price: ${best.price}.`,
      best.themes.length ? `Themes: ${best.themes.join(', ')}.` : '',
      related ? `Related titles you may also want to look at: ${related}.` : '',
      faq ? `Also: ${faq.answer}` : ''
    ]
      .filter(Boolean)
      .join(' ');
  }

  return [
    'I do not have an exact answer for that yet, but I can answer from the current book catalog.',
    'Try asking about a title, age range, theme, reading order, buying options, Gold Rush, Bible study, children’s books, or The Cube Chronicles.',
    'To make me smarter, add more book notes, FAQs, sample chapters, and manuscript summaries into books.js.'
  ].join(' ');
}

function appendMessage(role, text) {
  const message = document.createElement('div');
  message.className = `message ${role === 'user' ? 'user-message' : 'assistant-message'}`;
  message.innerHTML = `<strong>${role === 'user' ? 'You' : 'Book Assistant'}</strong><p>${text}</p>`;
  chatLog.appendChild(message);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function askQuestion(question) {
  const trimmed = question.trim();
  if (!trimmed) return;
  appendMessage('user', trimmed);
  const answer = answerQuestion(trimmed);
  window.setTimeout(() => appendMessage('assistant', answer), 250);
}

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  askQuestion(chatInput.value);
  chatInput.value = '';
});

document.querySelectorAll('[data-question]').forEach((button) => {
  button.addEventListener('click', () => askQuestion(button.dataset.question));
});

searchInput.addEventListener('input', renderBooks);
categoryFilter.addEventListener('change', renderBooks);

buildCategoryOptions();
renderBooks();
