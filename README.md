## 🛒 store-ts
A feature-rich, modern e-commerce web application built using the latest web technologies:

Next.js (App Router)

TypeScript

## Supabase (PostgreSQL & Auth)

Prisma (ORM)

Clerk (Authentication)

Stripe (Payment Gateway)

React Query (Data fetching & caching)

ShadCN UI (Components & design system)

## 🚀 Features
Secure user authentication (via Clerk)

Admin & customer dashboards

Product listings with dynamic filtering

Shopping cart and checkout flow

Stripe integration for payments

Realtime database support via Supabase

Clean and customizable UI with ShadCN

🧰 Stack
Tech	Usage
Next.js	App routing & SSR
TypeScript	Static typing
Prisma	ORM for PostgreSQL
Supabase	Database & hosting
Clerk	User management & sessions
Stripe	Payment processing
React Query	Data fetching & caching
ShadCN UI	Accessible UI components

## 🛠️ Setup
bash
Copy
Edit
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env
# Fill in values for Supabase, Clerk, Stripe, etc.

# 3. Push Prisma schema to database
npx prisma db push

# 4. Start dev server
npm run dev
📦 Scripts
npm run dev – Start development server

npx prisma db push – Sync schema with DB

npx prisma generate – Generate Prisma client