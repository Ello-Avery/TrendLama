# TrendLama

An e-commerce storefront built with Next.js. This is a work-in-progress project for browsing products by category, viewing product details (sizes, colors, images), and searching — the front-end shopping experience for an online clothing/accessories store.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) for icons

## Project Structure

```
client/
├── public/            # Static assets (logo, product images, payment icons)
└── src/
    ├── app/            # Next.js App Router pages and global styles
    ├── components/     # UI components (NavBar, ProductList, ProductCard, Categories, SearchBar, Footer)
    └── types.ts        # Shared TypeScript types
```

## Getting Started

The app lives in the `client/` directory.

```bash
cd client
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Other scripts

```bash
pnpm build   # Production build
pnpm start   # Start the production server
pnpm lint    # Run ESLint
```

## Status

This project is under active development. Product data is currently hard-coded in [`ProductList.tsx`](client/src/components/ProductList.tsx) as placeholder content; category filtering, search, cart, and authentication are being built out incrementally.
