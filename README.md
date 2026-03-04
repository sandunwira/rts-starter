# RTS Starter Template

A modern starter template for building web applications using the **RTS Stack**:  
**React + Tailwind + Supabase**, powered by **Vite**.

---

## Features

- ⚡️ **Vite** for fast development and build
- ⚛️ **React 19** with HMR and React Router
- 🎨 **Tailwind CSS 4** for utility-first styling
- 🟩 **Supabase** integration for backend/database/auth
- 🧹 Pre-configured **ESLint** for code quality
- 🗂️ Clean, minimal file structure

---

## Getting Started

### 1. Use The Template

Begin by creating a new project using this template. You can do this directly on GitHub.

### 2. Clone the Repository

After creating your project, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/rts-starter.git
cd rts-starter
```

Or use this as a template on GitHub.

### 3. Install Dependencies

```bash
npm install
# or
yarn install
```

### 4. Configure Environment Variables

Copy the example environment file and set your Supabase credentials:

```bash
cp .env.example .env
```

Edit `.env` and set:

```bash
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your-supabase-publishable-key
```

You can find these in your [Supabase project settings](https://supabase.com).

### 5. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:5173](http://localhost:5173) to view your app.

---

## Project Structure

```
rts-starter/
├── public/
├── src/
│   ├── assets/              # Static assets (images, etc.)
│   ├── components/          # Reusable React components
│   ├── pages/               # Page components (routed)
│   ├── utils/               # Utility modules (e.g., Supabase client)
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind CSS import & global styles
├── .env                     # Environment variables
├── .env.example             # Example environment variables
├── package.json
├── vite.config.js
└── README.md
```

---

## Usage

- **React**: Write components in `src/components` and pages in `src/pages`.
- **Routing**: Add routes in `src/App.jsx` using React Router.
- **Styling**: Use Tailwind utility classes in your JSX.
- **Supabase**: Use the pre-configured client in `src/utils/Supabase.jsx` for database/auth/storage. Update `.env` with your Supabase credentials.

---

## Linting

Run ESLint to check code quality:

```bash
npm run lint
# or
yarn lint
```

---

## Building for Production

```bash
npm run build
# or
yarn build
```

Preview the production build:

```bash
npm run preview
# or
yarn preview
```

---

## Customization

- **Fonts**: Uses [DM Sans](https://fonts.google.com/specimen/DM+Sans) by default (see `index.html` and `index.css`).
- **Environment Variables**: All Supabase credentials are loaded from `.env` using Vite's `import.meta.env`.
- **ESLint**: Configured for React and hooks best practices.

---

## Deployment

You can deploy the production build (`dist/`) to any static hosting service (Vercel, Netlify, Cloudflare Pages, etc).

---

## Resources

- [Vite Documentation](https://vite.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Supabase Documentation](https://supabase.com)

---
