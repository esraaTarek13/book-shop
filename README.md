# Bookshop — User Portal

Customer-facing storefront for **Bookshop**: browse books, manage cart & wishlist, checkout, and track orders.

**Live Demo:** [book-shop-rgho.vercel.app](https://book-shop-rgho.vercel.app/)

> This is a standalone project. The admin dashboard (`bookshop-admin`) is a **separate repository** with its own codebase, build, and deployment — the two do not share code or a build pipeline, only the same backend API.

## Tech Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **State Management:** Zustand (auth, UI state) + TanStack React Query (server state / caching)
- **Forms:** Formik + Yup
- **HTTP Client:** Axios
- **Carousel:** Splide (`@splidejs/react-splide`)
- **Notifications:** Sonner

## Architecture

The project follows **Atomic Design**:

    components/
      atoms/        → smallest building blocks (Button, Text, Avatar, Badge...)
      molecules/    → small compositions of atoms (FormField, BookRating, CartActions...)
      organisms/    → self-contained sections with their own data/logic (Navbar, BookCard, GetInTouch...)
      templates/    → page-level layout, composes organisms, owns data fetching

Key conventions:

- **Forms** live in `organisms/` (not `molecules/`) — any component wrapping Formik + validation + mutation logic is treated as an organism.
- **Templates** only orchestrate — no hardcoded content or business logic; static section content (text, constants) lives inside the organism itself, not passed down as props, unless the same organism is reused with genuinely different content.
- **API calls** live in `api/`, wrapped by React Query hooks in `hooks/`. Components never call `axiosInstance` directly.
- **Auth token** is stored in a cookie (not localStorage), since `proxy.ts` (middleware) needs server-side access to protect routes.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Environment Variables

Create a `.env.local` file in the project root with the required `NEXT_PUBLIC_` prefixed variables (e.g. `NEXT_PUBLIC_API_URL`).

## Related Projects

| Project          | Description                     |
| ---------------- | ------------------------------- |
| `bookshop-user`  | This repo — customer storefront |
| `bookshop-admin` | Admin dashboard (separate repo) |
