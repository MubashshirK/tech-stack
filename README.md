# Tech Stack

A full-stack e-commerce application built with Next.js, Sanity CMS, Clerk authentication, Stripe payments, and Zustand state management.

## Tech Stack

| Layer            | Technology                                    |
| ---------------- | --------------------------------------------- |
| Framework        | Next.js 15.4 (App Router, Turbopack)          |
| Language         | TypeScript 5                                  |
| React            | React 19.1                                    |
| Styling          | Tailwind CSS v4 + `tailwindcss-animate`       |
| UI Components    | shadcn/ui (new-york style) + Radix UI         |
| CMS              | Sanity v4 (headless, embedded studio)         |
| Auth             | Clerk v6 (middleware-based)                   |
| State Management | Zustand v5 (persisted to localStorage)        |
| Payments         | Stripe v18 (checkout sessions + webhooks)     |
| Animations       | Motion (Framer Motion)                        |
| Icons            | Lucide React + React Icons                    |
| Fonts            | Poppins                                       |
| Notifications    | react-hot-toast                               |

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- A [Sanity](https://www.sanity.io/) account and project
- A [Clerk](https://clerk.com/) account and application
- A [Stripe](https://stripe.com/) account with API keys

### Installation

```bash
git clone <repository-url>
cd tech-stack
npm install
```

### Environment Variables

Create a `.env` file in the project root with the following variables:

```env
# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-08-07
SANITY_API_READ_TOKEN=your_sanity_read_token
SANITY_API_TOKEN=your_sanity_write_token

# Stripe Payments
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app. The Sanity Studio is available at [http://localhost:3000/studio](http://localhost:3000/studio).

### Available Scripts

| Script            | Description                                     |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Start the development server with Turbopack     |
| `npm run build`   | Create a production build                       |
| `npm run start`   | Start the production server                     |
| `npm run lint`    | Run ESLint                                      |
| `npm run typegen` | Generate TypeScript types from Sanity schemas   |

## Project Structure

```
├── actions/
│   └── createCheckoutSession.ts    # Stripe checkout server action
├── app/
│   ├── globals.css                 # Tailwind v4 + custom theme
│   ├── layout.tsx                  # Root layout (Toaster)
│   ├── not-found.tsx               # Custom 404 page
│   ├── (client)/                   # Route group with Clerk auth
│   │   ├── layout.tsx              # Client layout (Header, Footer, ClerkProvider)
│   │   ├── page.tsx                # Home page
│   │   ├── api/webhook/route.ts    # Stripe webhook handler
│   │   ├── blog/                   # Blog listing & detail pages
│   │   ├── brand/[slug]/           # Brand page
│   │   ├── cart/                   # Shopping cart
│   │   ├── category/[slug]/        # Products by category
│   │   ├── deal/                   # Hot deals
│   │   ├── orders/                 # User order history
│   │   ├── product/[slug]/         # Product detail
│   │   ├── shop/                   # Shop with filters
│   │   ├── success/                # Order confirmation
│   │   └── wishlist/               # User wishlist
│   └── studio/                     # Sanity Studio (CMS admin)
├── components/
│   ├── ui/                         # shadcn/ui components
│   └── *.tsx                       # Application components
├── constants/
│   └── data.ts                     # Navigation, links, categories
├── hooks/
│   └── index.ts                    # useOutsideClick hook
├── lib/
│   ├── stripe.ts                   # Stripe client initialization
│   └── utils.ts                    # cn() utility (clsx + tailwind-merge)
├── sanity/
│   ├── env.ts                      # Sanity environment config
│   ├── structure.ts                # Sanity Studio structure
│   ├── lib/                        # Sanity clients & helpers
│   ├── queries/                    # GROQ queries & fetch functions
│   └── schemaTypes/                # Sanity document schemas
├── store.ts                        # Zustand store (cart + favorites)
├── sanity.config.ts                # Sanity Studio configuration
├── next.config.ts                  # Next.js configuration
└── tsconfig.json                   # TypeScript configuration
```

## Features

### Customer-Facing

- **Home Page** — Hero banner, featured product grid, categories, shop by brands, latest blog posts
- **Shop** — Browse products with sidebar filters (category, brand, price range)
- **Product Detail** — Image gallery, pricing with discounts, add to cart, add to wishlist
- **Category Pages** — Products filtered by category
- **Deals** — Hot deals of the week
- **Blog** — Blog listing and individual posts with rich text content
- **Cart** — Add/remove items, select shipping address, proceed to Stripe checkout
- **Wishlist** — Save favorite products (persisted in localStorage)
- **Order History** — View past orders after checkout

### Authentication & Payments

- **Clerk Auth** — Sign in/sign up with middleware-based route protection
- **Stripe Checkout** — Secure payment processing via checkout sessions
- **Stripe Webhooks** — Order creation triggered by payment events
- **User-Scoped Orders** — Orders linked to authenticated Clerk user IDs

### CMS (Sanity Studio)

Access the Sanity Studio at `/studio` to manage:

- **Products** — Name, slug, images, description, price, discount, categories, stock, brand, status, variant, featured flag
- **Categories** — Title, slug, description, price range, featured flag, image
- **Brands** — Title, slug, description, image
- **Orders** — Order number, invoice, Stripe session/payment IDs, customer info, products, totals, status
- **Blog Posts** — Title, slug, author, main image, categories, published date, body content
- **Authors** — Name, slug, image, bio
- **Addresses** — User shipping addresses with default flag
- **Blog Categories** — Blog post classifications

### Sanity Schema Types (9)

| Type           | Description                          |
| -------------- | ------------------------------------ |
| `product`      | Product catalog documents            |
| `category`     | Product categories                   |
| `brand`        | Product brands                       |
| `order`        | Customer order records               |
| `blog`         | Blog post documents                  |
| `blogcategory` | Blog post classifications            |
| `author`       | Blog post authors                    |
| `address`      | User shipping addresses              |
| `blockContent` | Rich text content (portable text)    |

## State Management

The Zustand store (`store.ts`) manages:

- **Cart** — Add, remove, delete items; quantity tracking; subtotal/total price calculation; persisted to `localStorage` as `cart-store`
- **Favorites** — Toggle products in wishlist; persisted alongside cart data

## API Routes

| Route                        | Method | Description                     |
| ---------------------------- | ------ | ------------------------------- |
| `/api/webhook`               | POST   | Stripe webhook handler          |

## Server Actions

| Action                       | Description                     |
| ---------------------------- | ------------------------------- |
| `createCheckoutSession`      | Creates a Stripe checkout session for cart items |

## Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm run start
```

Deploy to [Vercel](https://vercel.com) for automatic CI/CD with zero configuration.
