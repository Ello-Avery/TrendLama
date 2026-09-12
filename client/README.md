# TrendLama Client

This is the frontend for TrendLama, a responsive e-commerce storefront built with Next.js.

## Overview

The app includes:

- Product listing pages and category filters
- Search functionality
- Product detail screens with size and color selection
- Cart state management with Zustand
- Checkout flow with shipping and payment form validation
- Toast notifications and responsive UI design

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Zustand
- React Hook Form + Zod
- Lucide React

## Getting Started

From the `client` directory:

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 to view the app.

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Project Layout

```text
src/
├── app/
│   ├── cart/
│   ├── products/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── stores/
├── types.ts
└── ...
```

## Notes

- The storefront uses mock product data and browser-persisted cart state.
- This is a frontend-only shopping experience.
