# Brandon Tinder BookStore

A starter independent author bookstore for listing books, linking to sales pages, and letting visitors ask questions about the books.

## What this site includes

- A polished bookstore homepage
- A searchable and filterable book catalog
- Editable book data in `books.js`
- Buy / preorder buttons for each book
- A built-in book assistant that answers from the catalog and FAQ data
- Mobile-friendly design
- Cloudflare Pages-ready static deployment
- No build step required

## Cloudflare Pages setup

This repository is ready for Cloudflare Pages.

Use these settings when creating the Cloudflare Pages project:

```text
Framework preset: None
Build command: Leave blank
Build output directory: /
Root directory: /
Production branch: main
```

Included Cloudflare files:

```text
wrangler.toml   Cloudflare project metadata
_headers        Basic browser/security/cache headers
_redirects      Fallback route to index.html
```

Because this is a plain static website, Cloudflare does not need to run npm, install dependencies, or build anything.

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

## Future upgrade: real AI chat on Cloudflare

The current assistant is safe and simple because it runs completely in the browser. Later, it can be upgraded to a real AI assistant that searches:

- Full manuscripts
- Book summaries
- Sample chapters
- Character sheets
- Bible study notes
- Customer support FAQ

Recommended Cloudflare architecture:

1. Keep public book metadata in `books.js` or a CMS.
2. Store deeper book notes in Cloudflare D1, R2, Workers KV, or Vectorize.
3. Add a Cloudflare Pages Function or Worker API route.
4. Connect the API route to Workers AI, OpenAI, Anthropic, or another model.
5. Return answers only from approved book/source material.

## Suggested next files to add

```text
/images/                Book covers and author photos
/excerpts/              Sample chapter PDFs or HTML pages
/admin-notes/           Private planning notes, not for public deployment
/functions/api/chat.js  Future Cloudflare Pages Function for real AI chat
```

## Deploying

Recommended deployment: Cloudflare Pages.

You can also deploy this static site with GitHub Pages, Netlify, or Vercel, but the repository is now configured primarily for Cloudflare Pages.
