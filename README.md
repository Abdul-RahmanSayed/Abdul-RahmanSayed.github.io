# Portfolio Website

A modern, production-quality static SPA portfolio for Abdul-Rahman Sayed — a Georgia Tech Computer Science graduate specializing in Front-End Development and Software Engineering.

## Tech Stack

- React 19 + TypeScript
- Vite build pipeline
- Tailwind CSS v4
- Framer Motion (animations)
- Wouter (client-side routing)
- pnpm workspaces

## Project Structure

```
artifacts/
  portfolio/        # Main portfolio SPA
    src/
      components/   # All UI components
        ui/         # Base shadcn/ui components
      pages/        # Page-level components
      assets/       # Static assets
```

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server (set PORT and optionally BASE_PATH)
PORT=5173 pnpm --filter @workspace/portfolio run dev
```

## Building for Production

```bash
# Build the portfolio
pnpm --filter @workspace/portfolio run build
```

Output is placed in `artifacts/portfolio/dist/public/`.

## Deployment

This portfolio is configured for static deployment. To deploy to GitHub Pages, set the `BASE_PATH` environment variable to your repository sub-path (e.g. `/portfolio/`) during build, or leave it as `/` for a root-level deployment.

```bash
BASE_PATH=/ PORT=5173 pnpm --filter @workspace/portfolio run build
```

## Personal Information

**Abdul-Rahman Sayed**
- Email: abdulsayed9@gmail.com
- LinkedIn: https://linkedin.com/in/abdul-sayed-84643513a/
- GitHub: https://github.com/Abdul-RahmanSayed
- Location: Atlanta, GA
