# Brandon Tinder BookStore

A starter independent author bookstore for listing books, linking to sales pages, and letting visitors ask questions about the books.

## What this site includes

- A polished bookstore homepage
- A searchable and filterable book catalog
- Editable book data in `books.js`
- Buy / preorder buttons for each book
- A built-in book assistant that answers from the catalog and FAQ data
- Mobile-friendly design
- No build step required

## How to add or edit books

Open `books.js` and edit the `BOOKS` array.

Each book supports:

```js
{
  id: 'unique-book-id',
  title: 'Book Title',
  subtitle: 'Book subtitle',
  series: 'Series Name',
  category: 'Historical Fiction',
  status: 'Available now',
  price: '$14.99',
  ageRange: 'Ages 10+',
  cover: 'images/my-cover.jpg',
  buyLink: 'https://your-real-purchase-link.com',
  sampleLink: '#ask',
  description: 'Short sales description.',
  themes: ['family', 'faith', 'adventure'],
  questions: ['What is this book about?', 'Who is this book for?']
}
```

## How selling works

The current site is set up for direct purchase links. This is the fastest way to start selling.

Good options for `buyLink`:

- Amazon KDP paperback or Kindle page
- Stripe Payment Link
- PayPal checkout link
- Gumroad product page
- Shopify product page
- Etsy listing
- A custom order form

When a book is ready, replace `buyLink: '#contact'` with the real checkout URL.

## How the book assistant works

The assistant in `script.js` reads from:

- `BOOKS`
- `STORE_FAQ`

To improve answers, add stronger descriptions, themes, questions, and FAQ entries in `books.js`.

## Future upgrade: real AI chat

The current assistant is safe and simple because it runs completely in the browser. Later, it can be upgraded to a real AI assistant that searches:

- Full manuscripts
- Book summaries
- Sample chapters
- Character sheets
- Bible study notes
- Customer support FAQ

Recommended future architecture:

1. Keep public book metadata in `books.js` or a CMS.
2. Store deeper book notes in a private knowledge base.
3. Add a serverless API route through Netlify, Cloudflare Workers, or Vercel.
4. Connect the API route to an AI model.
5. Return answers only from approved book/source material.

## Suggested next files to add

```text
/images/                Book covers and author photos
/excerpts/              Sample chapter PDFs or HTML pages
/admin-notes/           Private planning notes, not for public deployment
```

## Deploying

This is a static site. You can deploy it with:

- GitHub Pages
- Netlify
- Cloudflare Pages
- Vercel

For GitHub Pages, set the Pages source to the `main` branch and root folder.
