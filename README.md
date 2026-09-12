# TrendLama

TrendLama is a modern e-commerce storefront built with Next.js. The app lets shoppers browse products, filter by category, view product details, add items to a persistent cart, and complete a multi-step checkout flow.

## Features

- Product browsing with category-based filtering
- Search bar and storefront product listing
- Product detail pages with size and color selection
- Add-to-cart and buy-now flows
- Persistent cart state using Zustand + localStorage
- Cart review and removal controls
- Shipping and payment checkout forms with validation
- Toast notifications for cart actions
- Responsive storefront layout for desktop and mobile

## Tech Stack

- [Next.js 15](https://nextjs.org/) with App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/) for state management
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) for form validation
- [React Toastify](https://fkhadra.github.io/react-toastify/) for notifications
- [Lucide React](https://lucide.dev/) for UI icons

## Project Structure

```text
.
├── README.md
├── client/
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── stores/
│   │   ├── types.ts
│   │   └── ...
│   ├── package.json
│   ├── pnpm-lock.yaml
│   └── README.md
└── ...
```

## Getting Started

The full app lives in the `client/` directory.

```bash
cd client
pnpm install
pnpm dev
```

Then open http://localhost:3000 in your browser.

## Available Scripts

```bash
pnpm dev     # Start the development server
pnpm build   # Create a production build
pnpm start   # Run the production server
pnpm lint    # Run ESLint checks
```

## Notes

- Product data is currently mock/demo content defined in the frontend.
- Cart data is persisted in the browser so items remain available after refresh.
- This project is a front-end storefront experience focused on shopping flow and UI.

## Status

The storefront is currently in active frontend development and includes the main browsing, cart, and checkout experience.
