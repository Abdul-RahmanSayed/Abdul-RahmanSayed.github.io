# Portfolio Codebase Guide

Last verified against the production source: August 12, 2026.

## 1. Executive summary

This repository is a pnpm workspace whose production deliverable is a static React portfolio site. The live application is in `artifacts/portfolio`, and `.github/workflows/deploy.yml` builds that package and publishes its generated files to GitHub Pages.

The repository also contains:

- an older, root-level Vue portfolio in `src/`;
- a small Express API scaffold with one health-check endpoint;
- an OpenAPI specification and generated React Query/Zod code;
- an empty PostgreSQL/Drizzle database layer;
- a component mockup sandbox;
- a large set of reusable shadcn/Radix UI primitives; and
- historical images and resume files.

Those supporting and legacy areas are not part of the deployed website. This distinction matters: a folder existing in the repository does not mean the production site imports, runs, or deploys it.

### Production status at a glance

| Concern | Current implementation |
| --- | --- |
| Production frontend | React 19 + TypeScript in `artifacts/portfolio` |
| Build system | Vite 7 |
| Styling | Tailwind CSS 4, CSS custom properties, and shadcn-style primitives |
| Motion | Framer Motion plus CSS animations |
| Routing | Wouter; `/` plus a client-side catch-all page |
| Data source | Hardcoded arrays and text inside React components |
| Backend usage | FormSubmit AJAX endpoint for contact delivery; repository API remains unused |
| Database usage | None |
| Contact form | AJAX submission through FormSubmit with inline success/error feedback |
| Deployment | GitHub Actions to GitHub Pages on pushes to `master` |
| Automated tests | None currently present |

## 2. Repository map

```text
.
├── .github/workflows/deploy.yml       # Production GitHub Pages pipeline
├── .vscode/settings.json              # Uses the workspace-installed TypeScript SDK
├── artifacts/
│   ├── portfolio/                     # Production React SPA
│   ├── api-server/                    # Undeployed Express API scaffold
│   └── mockup-sandbox/                # Local component-preview tool
├── attached_assets/                   # Production images plus historical resume/source assets
├── lib/
│   ├── api-spec/                      # OpenAPI source and Orval configuration
│   ├── api-client-react/              # Generated React Query client + custom fetch
│   ├── api-zod/                       # Generated Zod response schemas
│   └── db/                            # Drizzle/PostgreSQL scaffold; schema is empty
├── scripts/                           # Minimal workspace utility package
├── src/                               # Legacy Vue portfolio, not deployed
├── README.md                          # Current React-project setup summary
├── CHANGELOG.md                       # Older Vue-project documentation
├── package.json                       # Workspace-level scripts and pnpm enforcement
├── pnpm-workspace.yaml                # Packages, dependency catalog, security policy
└── tsconfig*.json                     # Shared TypeScript settings/project references
```

## 3. What happens when the production site loads

The main runtime path is:

```text
artifacts/portfolio/index.html
    ↓ loads /src/main.tsx
React createRoot(...).render(<App />)
    ↓
QueryClientProvider
    ↓
TooltipProvider
    ↓
Wouter router
    ├── path "/" → Home
    │                ├── Navbar
    │                ├── Hero
    │                ├── About
    │                ├── Skills
    │                ├── Projects
    │                ├── Experience
    │                ├── Resume
    │                ├── Contact
    │                └── Footer
    └── anything else → NotFound

Toaster is mounted beside the router, but no current feature creates a toast.
```

`main.tsx` mounts React into `<div id="root">` and imports the global stylesheet. There is no server rendering, hydration, global application store, or boot-time API call.

`App.tsx` creates one TanStack Query `QueryClient`, adds global tooltip/toast providers, and gives Wouter a base path derived from Vite's `BASE_URL`. The query provider is ready for generated API hooks, but the current portfolio never calls one.

`Home.tsx` is the page composition layer. It renders every portfolio section in a fixed order. Navigation between portfolio content uses URL hash links such as `#projects`; these are sections on one page, not separate routes.

## 4. User-facing features and how they work

### 4.1 Navigation and section tracking

File: `artifacts/portfolio/src/components/Navbar.tsx`

The navbar is fixed above the page and owns four pieces of React state:

| State | Purpose |
| --- | --- |
| `isScrolled` | Becomes `true` after 20 pixels of vertical scroll and enables the frosted background, border, compact padding, and shadow. |
| `isMobileMenuOpen` | Controls whether the animated mobile menu is rendered. |
| `activeSection` | Selects the highlighted navigation link. |
| `isDark` | Controls the `.dark` class and the displayed sun/moon icon. |

On mount, the component registers a window scroll listener. A second effect adds or removes `.dark` on the root `<html>` element and writes `theme=dark|light` to `localStorage`. If the visitor has no stored preference, dark mode is the default.

A third effect creates one `IntersectionObserver` per section (`hero`, `about`, `skills`, `projects`, `experience`, `resume`, and `contact`). When at least 30% of a section intersects the viewport, that section becomes active. Cleanup disconnects every observer when the navbar unmounts.

Desktop navigation appears at Tailwind's `md` breakpoint (768px). Below that width, a menu icon toggles a vertically stacked menu. Framer Motion's `AnimatePresence` animates the mobile panel in and out, and choosing a link closes it.

All links are hash anchors. Global `scroll-behavior: smooth` makes section changes scroll rather than jump.

### 4.2 Hero section

File: `artifacts/portfolio/src/components/HeroSection.tsx`

The hero fills at least one viewport and presents:

- the availability badge;
- Abdul-Rahman's name;
- an animated job-title line;
- a short tagline;
- project, resume, and contact calls to action;
- GitHub, LinkedIn, and email links; and
- a circular headshot with a purple-to-teal border and glow.

The rotating role list currently contains Full-Stack Developer, Software Engineer, Applied AI Developer, and Georgia Tech Graduate. The accompanying tagline broadens the positioning beyond front-end work to web applications, backend systems, APIs, and AI-powered tools.

The typewriter effect uses three state values: the current role index, the visible substring, and whether text is being deleted. It adds one character every 100ms, holds the completed role for roughly two seconds, deletes one character every 50ms, and advances with modulo arithmetic so the four roles loop forever.

The background effect is CSS-only: two large, blurred color circles use the pulse animation. The entrance of the text and photo uses Framer Motion.

The headshot is imported through the `@assets` alias. Vite resolves that alias to the repository-level `attached_assets` directory and turns the imported image into a built asset URL. The resume link instead uses the same versioned Cloudinary PDF URL as the Resume section. Its anchor includes a `download` attribute, although cross-origin browser behavior determines whether the PDF is downloaded directly or opened first.

### 4.3 About section

File: `artifacts/portfolio/src/components/AboutSection.tsx`

The About section is static content arranged as one column on smaller screens and two columns on large screens. It includes:

- a second use of the headshot;
- a professional summary;
- Georgia Tech degree, thread, and honors details;
- the Azure Fundamentals certification; and
- a full-stack software engineering career statement that also calls out APIs, data, and applied AI.

The professional summary positions Abdul-Rahman's experience across full-stack software development, AI evaluation and instruction, Salesforce platform development, and controls engineering. It emphasizes practical, maintainable systems built across interfaces, backend services, APIs, data workflows, automation, and AI-assisted tools.

The image begins in grayscale and transitions to color on hover. The image and text columns use separate scroll-triggered entrance animations. There is no data request or component state; editing the JSX changes the displayed content directly.

### 4.4 Skills grid

File: `artifacts/portfolio/src/components/SkillsSection.tsx`

`skillsData` is a hardcoded array of eight categories. The component maps categories into cards and maps each category's skills into badges. Cards animate into view once, with a small delay based on their array index.

The grid changes from one column to two at `md` and four at `lg`. Hovering a card lifts it by one Tailwind spacing step, adds a subtle purple glow, and strengthens its border.

There is no filtering, sorting, or carousel in the production React version.

### 4.5 Projects grid

File: `artifacts/portfolio/src/components/ProjectsSection.tsx`

`projectsData` contains four static project records:

1. Portfolio Website
2. GAN-Based Image Colorization & Upscaling
3. Interactive Parallel Coordinate Plot
4. Jim's Dungeon: Dungeon Crawler

Each object supplies the title, date, summary, technology badges, accomplishments, GitHub URL, optional live URL, and color classes. The render loop turns those values into a responsive one-column/two-column card grid.

Every card has a gradient header, stack badges, accomplishment bullets, and action buttons. The shared `Button` component can render its child anchor through Radix `Slot`, which preserves button styling while keeping correct link behavior.

The Portfolio Website record describes the actual React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion implementation. It also documents the Cloudinary resume, FormSubmit contact form, theme system, and deployment on pushes to `master`. Its GitHub button links directly to this repository. The remaining project cards still link to the general GitHub profile.

When `live` is absent, the Live Demo control renders as a disabled button with a `No Demo` label.

### 4.6 Experience timeline

File: `artifacts/portfolio/src/components/ExperienceSection.tsx`

`experienceData` contains six roles: iD Tech, SkillStorm, ProAutomated, Invisible Technologies, MessageGears, and Georgia Institute of Technology. Each entry provides the employer, role, dates, location, resume-derived impact bullets, technology tags, and an optional logo asset.

Every current entry has a dedicated company logo. When a future entry omits `logo`, the renderer automatically uses `attached_assets/experience-default.svg`; no current card uses that fallback. Logos are imported through `@assets`, rendered inside a fixed white logo panel with `object-contain`, and lazy-loaded. Dedicated logos receive company-specific alternate text; the generic fallback is decorative because the adjacent card already names the employer.

The desktop layout is a vertical stack of cards with the company image beside the content. The layout stacks the logo above the content on narrow screens, where each entry also receives an absolute-positioned line and dot to create a timeline. Cards animate once as they enter the viewport, with later entries receiving slightly longer delays.

All professional content is local JSX data. "Present" and other dates do not update automatically.

### 4.7 Resume viewer and downloads

File: `artifacts/portfolio/src/components/ResumeSection.tsx`

The section uses the same versioned Cloudinary resume URL as the hero and offers a prominent download button. Beneath it, an `<object type="application/pdf">` displays the PDF in a fixed 600px-tall panel.

If the browser cannot embed PDFs, the nested fallback content explains the limitation and offers another download link. The decorative title bar above the viewer is part of the page, not part of the PDF viewer.

The production resume is `https://res.cloudinary.com/dyd2wkozw/image/upload/v1785798732/Sayed_AbdulRahman_Resume_072426a.pdf`. That URL is currently duplicated as a constant in `HeroSection.tsx` and `ResumeSection.tsx`, so both must be updated when the resume changes. PDFs under `attached_assets` and `src/assets/pdfs` are historical files and are not imported by the production React site.

### 4.8 Contact section

File: `artifacts/portfolio/src/components/ContactSection.tsx`

Three contact cards open email, LinkedIn, and GitHub. External web links open a new tab and include `rel="noopener noreferrer"`; email uses a `mailto:` link.

The section also contains uncontrolled name, email, and message fields. Each field has a form `name`, is required, and has a maximum length; the name and email fields also provide browser autocomplete hints. The email input uses `type="email"`, so the browser blocks malformed addresses before the submit handler runs. A visually hidden `_honey` field acts as a spam honeypot.

`handleSubmit` reads the fields through `FormData`, trims their values, and posts JSON to FormSubmit's cross-origin AJAX endpoint for `abdulsayed9@gmail.com`. The payload includes the visitor's name, reply email, message, a custom subject, the table email template, the honeypot value, and the page URL. FormSubmit forwards successful submissions to the portfolio owner's mailbox; the visitor's email field supplies the reply address. `VITE_CONTACT_FORM_ENDPOINT` can override the endpoint for local or staging tests without changing source code.

The component tracks idle, submitting, success, and error states. While a request is in progress, it disables the fields and button, changes the button label, shows a spinner, and exposes `aria-busy` on the form. Requests are aborted after 15 seconds. Successful requests reset the fields and show an inline confirmation; errors show an accessible alert and retain a direct `mailto:` fallback link.

The Express scaffold remains unused and undeployed. FormSubmit is the form backend, so contact details leave the site and are processed by that service. The current destination was activated and successful delivery was confirmed on August 12, 2026. Replacing the destination email would require activating the new address before forwarding begins.

### 4.9 Footer

File: `artifacts/portfolio/src/components/Footer.tsx`

The footer repeats the three social/contact links and calculates the copyright year at runtime with `new Date().getFullYear()`. Unlike experience dates, the copyright year therefore updates without a code change.

### 4.10 Not-found page

File: `artifacts/portfolio/src/pages/not-found.tsx`

Wouter sends unmatched client-side paths to a compact 404 card. The card uses the shared `Card` primitive and a Lucide alert icon.

Because GitHub Pages is static hosting, an unknown URL requested directly from the server may be handled by GitHub Pages before React loads. The component is reliable for client-side unmatched locations once the SPA entry document has loaded; no custom `404.html` deployment step is currently configured.

## 5. Cross-cutting frontend systems

### 5.1 Theme and design tokens

File: `artifacts/portfolio/src/index.css`

Tailwind CSS 4 is loaded directly from CSS. `@theme inline` maps semantic Tailwind names such as `bg-background`, `text-foreground`, and `border-border` to HSL custom properties.

`:root` defines the light palette. `.dark` replaces the same variables with the dark palette. The main brand colors are purple (`--primary`) and teal (`--secondary`). This semantic approach lets components use the same class names in both themes.

The main fonts are Inter for regular text and JetBrains Mono for technical labels. The HTML document loads Inter, while the stylesheet also imports Inter and JetBrains Mono from Google Fonts.

Global base rules provide:

- smooth anchor scrolling;
- consistent border color;
- font smoothing;
- background and foreground colors; and
- a 300ms body color transition during theme changes.

### 5.2 Responsive behavior

The site is built with Tailwind breakpoints rather than a shared JavaScript layout state. Common changes include:

- navigation switching at `md`;
- hero changing from stacked to side-by-side at `md`;
- About changing at `lg`;
- skills moving from 1 to 2 to 4 columns; and
- projects moving from 1 to 2 columns at `xl`.

`hooks/use-mobile.tsx` also exposes a JavaScript media-query hook for widths below 768px, but no production portfolio component currently imports it.

### 5.3 Motion

Framer Motion handles initial page entrances, scroll reveals, stagger delays, and the mobile menu. Most section animations use `whileInView` with `viewport={{ once: true }}`, so they do not replay on every scroll.

CSS handles smooth scrolling, color transitions, hover transforms, the hero's blinking cursor, and its blurred pulse background.

There is currently no `prefers-reduced-motion` branch to disable or simplify animation for visitors who request it.

### 5.4 Icons and reusable UI

Lucide React supplies all visible icons. The production pages directly use these shared UI primitives:

| Primitive | Current use |
| --- | --- |
| `Button` | Hero, Projects, Resume, and Contact |
| `Card` / `CardContent` | Not-found page |
| `Toast` / `Toaster` | Provider is mounted, but no feature emits a toast |
| `TooltipProvider` | Provider is mounted, but no current section renders a tooltip |

`components/ui` contains many more shadcn/Radix primitives—dialogs, menus, tables, charts, forms, sidebars, and others. They are reusable inventory, not active features. Vite only bundles modules reachable from the application entry, so unused source files do not automatically become browser code, although their packages remain part of dependency installation.

`lib/utils.ts` exports `cn()`, which first normalizes conditional class names with `clsx` and then resolves conflicting Tailwind classes with `tailwind-merge`.

### 5.5 Toast state

`hooks/use-toast.ts` implements a small module-level store and reducer with add, update, dismiss, and remove actions. Subscribers are ordinary React state setters kept in a listener array. It permits one visible toast at a time. Dismissed toasts remain queued for removal for a very long delay (`1,000,000ms`) after their open state becomes false.

This system is wired into `App.tsx` through `<Toaster />`, but it has no current caller.

### 5.6 Assets and external resources

Production-local assets:

- `attached_assets/Headshot3_1778170238565.jpg`
- `attached_assets/idTechLogo.png`
- `attached_assets/skillstormLogo.jpg`
- `attached_assets/proautomatedLogo.png`
- `attached_assets/invisibleTechLogo.png`
- `attached_assets/messageGearsLogo.jpg`
- `attached_assets/Georgia-Tech-New-logo-f.png`
- `attached_assets/experience-default.svg`
- `artifacts/portfolio/public/favicon.svg`
- `artifacts/portfolio/public/opengraph.jpg`

The headshot and experience images are imported and emitted with build-managed URLs. The generic experience image is available but is not assigned to a current role. Files in `public` are copied to the output root without import processing. The displayed resume is hosted externally by Cloudinary rather than emitted by the Vite build.

`opengraph.jpg` is present but is not referenced by an Open Graph meta tag. The favicon is referenced as the public asset `/favicon.svg`; if the deployment strategy changes, built asset URLs should be rechecked with the configured Vite base.

The production site also depends on Google Fonts at page load. The contact form posts visitor-provided contact data to FormSubmit. Social links, standalone email links, and the live portfolio project link are external navigation only; the application does not fetch their data.

### 5.7 Test hooks and accessibility

Important controls include `data-testid` attributes, which make future browser tests easier to target. No test suite currently consumes them.

The code uses semantic sections, headings, labels, buttons, anchors, alternate image text, and safe external-link attributes. The contact form also uses native required/email validation, `aria-busy`, a polite live status region, and an alert for submission failures. Some icon-only links and mobile controls do not have explicit accessible names, and animation does not yet respect reduced-motion preferences. Those are current gaps, not hidden framework behavior.

## 6. Production frontend file responsibilities

| File or directory | Responsibility |
| --- | --- |
| `artifacts/portfolio/index.html` | Browser document, root mount element, title, favicon, and Google Font link |
| `artifacts/portfolio/vite.config.ts` | React/Tailwind plugins, aliases, base path, dev server, PDF handling, and output directory |
| `artifacts/portfolio/tsconfig.json` | Browser/React TypeScript settings and API-client project reference |
| `artifacts/portfolio/components.json` | shadcn component-generator conventions and aliases |
| `src/main.tsx` | React entry point |
| `src/App.tsx` | Global providers and route selection |
| `src/pages/Home.tsx` | Section composition/order |
| `src/pages/not-found.tsx` | Client-side fallback page |
| `src/components/*Section.tsx` | User-facing portfolio sections and their local data |
| `src/components/Navbar.tsx` | Navigation, active-section tracking, responsive menu, and theme persistence |
| `src/components/Footer.tsx` | Copyright and social links |
| `src/components/ui/` | Generated/reusable UI primitive library |
| `src/hooks/` | Toast store and currently unused mobile media-query hook |
| `src/lib/utils.ts` | Tailwind-aware class-name composition |
| `src/index.css` | Tailwind entry, theme tokens, fonts, and global base styling |
| `public/` | Static files copied as-is to the build root |

## 7. Supporting workspace packages

### 7.1 Express API scaffold

Directory: `artifacts/api-server`

This is a separate Node/Express application. It is not started by the portfolio, included in the static frontend build, or deployed by the GitHub Pages workflow.

Runtime flow:

1. `src/index.ts` requires a valid positive `PORT` environment variable.
2. It imports the configured Express application and starts listening.
3. `src/app.ts` adds Pino request logging, open CORS, JSON parsing, and URL-encoded form parsing.
4. It mounts the router at `/api`.
5. `src/routes/health.ts` responds to `GET /api/healthz` with `{ "status": "ok" }`.
6. Zod validates that response before Express serializes it.

The logger removes authorization, cookie, and set-cookie values from structured logs. Development logs use `pino-pretty`; production logs remain machine-readable JSON.

`build.mjs` deletes the API's own `dist` folder, bundles the TypeScript entry with esbuild, emits ESM as `dist/index.mjs`, adds source maps, and externalizes native or dynamically loaded packages that are unsafe to bundle.

The API package declares the database package as a dependency but never imports it. The only route is the health check.

### 7.2 OpenAPI source and code generation

Directory: `lib/api-spec`

`openapi.yaml` is the contract source. It currently describes only `GET /healthz` under the `/api` server base and a `HealthStatus` object containing a required string `status`.

Running the package's `codegen` script invokes Orval. `orval.config.ts` generates two families of code:

- a React Query client in `lib/api-client-react/src/generated`; and
- Zod validators/types in `lib/api-zod/src/generated`.

Generated files explicitly say not to edit them manually. Contract changes should begin in `openapi.yaml`, followed by code generation and typechecking.

### 7.3 Generated React API client

Directory: `lib/api-client-react`

The generated portion exposes:

- `healthCheck()` for direct calls;
- `getHealthCheckUrl()` and a stable query key;
- React Query options; and
- `useHealthCheck()` for React components.

`custom-fetch.ts` is the handwritten transport layer. It can prepend a configured base URL, attach a bearer token from a registered getter, merge headers, reject GET/HEAD requests with bodies, infer response types, parse JSON/text/blob data, and throw structured `ApiError` or `ResponseParseError` objects.

The production portfolio references this package in its TypeScript/project dependencies and mounts a Query client, but imports none of these functions at runtime.

### 7.4 Zod API package

Directory: `lib/api-zod`

This package exports Orval-generated TypeScript types and Zod response schemas. The API health route calls `HealthCheckResponse.parse(...)`, so a response shape that violates the contract fails before being sent.

### 7.5 Database scaffold

Directory: `lib/db`

The database package is prepared for PostgreSQL through `pg` and Drizzle ORM. Importing `lib/db/src/index.ts` requires `DATABASE_URL`, creates a connection pool, and passes the exported schema to Drizzle.

The schema directory currently exports nothing. There are no tables, migrations, queries, or production database calls. `drizzle.config.ts` powers schema push commands and also requires `DATABASE_URL`.

### 7.6 Mockup sandbox

Directory: `artifacts/mockup-sandbox`

This is a local React/Vite component-preview utility, not part of the portfolio runtime.

Its Vite plugin scans `src/components/mockups/**/*.tsx`, excludes files/directories whose names begin with `_`, and writes a generated dynamic-import map. The development watcher refreshes that map when mockup files are added or removed.

The app supports:

- a gallery/instruction page at the sandbox root; and
- individual component previews at `/preview/<component-path>` beneath its configured base path.

It resolves an exported component by preferring `default`, then `Preview`, then an export matching the filename, then the last function export. It renders readable errors when a component is missing or fails to load.

There are currently no mockup components, so the generated module map is empty.

### 7.7 Scripts package

Directory: `scripts`

The TypeScript package currently has one `hello` command that prints a message. `post-merge.sh` is a Bash helper intended to reinstall locked dependencies and push the database schema after a merge. It is not automatically registered as a Git hook by code in this repository.

## 8. The legacy Vue application

Directory: root `src/`

This was the previous production portfolio. It uses Vue 3's Options API, Vue Router, scoped component CSS, and a root-level Vite configuration.

Its routes are:

- `/` → profile/about page;
- `/experience` → job cards with company logos;
- `/skills` → a circular five-item carousel displaying four indices at a time; and
- `/resume` → an externally hosted PDF embed.

The legacy navbar includes a hover/click About dropdown, delayed mouse-leave closing, click-outside closing, and route-aware link styles. Most content assets are loaded from Cloudinary, while `src/assets` retains local copies and historical resumes.

This Vue application is not the current deploy target:

- the root `package.json` has no Vue dependencies;
- it has no root `dev` script for the Vue app;
- the GitHub Actions workflow explicitly builds `@workspace/portfolio`; and
- the workflow uploads `artifacts/portfolio/dist/public`, not root `dist`.

`CHANGELOG.md`, root `vite.config.js`, root `index.html`, and `deploy-gh-pages.js` primarily describe or support this older generation. `deploy-gh-pages.js` only writes `.nojekyll` into a root `dist` directory and is not called by the active workflow.

## 9. Build and deployment

### 9.1 Package management

The workspace requires pnpm. The root `preinstall` script rejects other package managers and removes npm/yarn lockfiles during installation. `pnpm-workspace.yaml` defines all packages, centralizes shared versions in a catalog, disables automatic peer installation, and enforces a 24-hour minimum npm package age as a supply-chain precaution.

The repository does not track `package-lock.json`; `pnpm-lock.yaml` is the authoritative lockfile.

CI uses Node 20 and pnpm 10. Those are the safest local versions to mirror.

The tracked `.vscode/settings.json` points VS Code's JavaScript/TypeScript service at `node_modules/typescript/lib`, keeping editor diagnostics aligned with the workspace TypeScript version after dependencies are installed.

### 9.2 Production frontend commands

Install all workspace dependencies:

```bash
pnpm install --frozen-lockfile
```

Run the portfolio development server on its default port (5173):

```bash
pnpm --filter @workspace/portfolio run dev
```

Typecheck and build only the portfolio:

```bash
pnpm --filter @workspace/portfolio run typecheck
pnpm --filter @workspace/portfolio run build
```

Preview the production bundle:

```bash
pnpm --filter @workspace/portfolio run serve
```

The production output is `artifacts/portfolio/dist/public`.

`PORT` changes the development/preview port. `BASE_PATH` changes Vite's public base and Wouter's client base. `VITE_CONTACT_FORM_ENDPOINT` optionally replaces the production FormSubmit URL, primarily for mocked local or staging tests. The current deployment uses `/` because the repository is hosted as a user/organization GitHub Pages site.

The root `pnpm run build` is broader: it typechecks workspace libraries and artifacts, then builds every artifact that exposes a build script, including the API and mockup sandbox.

### 9.3 GitHub Pages pipeline

File: `.github/workflows/deploy.yml`

The workflow runs on a manual dispatch or a push to `master`:

1. check out the repository;
2. install pnpm 10;
3. install Node 20 and enable pnpm caching;
4. install the frozen workspace lockfile;
5. build only `@workspace/portfolio` with `BASE_PATH=/`;
6. upload `artifacts/portfolio/dist/public`; and
7. deploy the uploaded static artifact to GitHub Pages.

The API server and database are not deployed by this workflow. GitHub Pages cannot run them because it serves static files only.

## 10. Where to make common changes

| Goal | Primary file(s) |
| --- | --- |
| Change the section order | `artifacts/portfolio/src/pages/Home.tsx` |
| Edit hero roles or tagline | `components/HeroSection.tsx` |
| Edit summary, education, certification | `components/AboutSection.tsx` |
| Add or remove a skill category | `components/SkillsSection.tsx` → `skillsData` |
| Add or update a project | `components/ProjectsSection.tsx` → `projectsData` |
| Add or update a job | `components/ExperienceSection.tsx` → `experienceData` |
| Replace the production headshot | update `@assets` imports in Hero and About |
| Replace the production resume | update the Cloudinary URL constants in Hero and Resume |
| Change contact/social URLs | Hero, Contact, and Footer components |
| Change theme colors or fonts | `artifacts/portfolio/src/index.css` |
| Change responsive layout | Tailwind classes in the affected component |
| Add a real routed page | add a page component and a Wouter `<Route>` in `App.tsx` |
| Add an API endpoint | OpenAPI spec, generated code, API route, and deployment infrastructure |
| Change contact-form delivery or feedback | `artifacts/portfolio/src/components/ContactSection.tsx` |
| Replace FormSubmit | change `FORM_ENDPOINT` and adapt the request/response handling, or deploy a backend endpoint |
| Change GitHub Pages behavior | `.github/workflows/deploy.yml` and possibly `vite.config.ts` |

When replacing the headshot, the least disruptive approach is to keep the imported variable name and change only the `@assets` file path in Hero and About. When replacing the resume, update the duplicated Cloudinary URL constants in Hero and Resume. Avoid editing generated API files directly.

## 11. Current limitations and maintenance risks

These are statements about current behavior, not hypothetical future concerns:

1. **Contact delivery depends on FormSubmit.** The form requires network access, a one-time destination activation, and continued third-party service availability; delivery failures fall back to a direct email link.
2. **The frontend does not use the API.** React Query and the generated client are prepared but idle.
3. **The API is not deployed.** The GitHub Pages workflow can only publish static files.
4. **The database is empty and unused.** There are no schema models or application queries.
5. **Portfolio content is hardcoded.** Updating work history, projects, or skills requires a code change and rebuild.
6. **Only one real frontend route exists.** Portfolio navigation is hash-based section scrolling.
7. **There are no automated tests.** The `data-testid` attributes are unused preparation, not test coverage.
8. **The repository contains two site generations.** The React README and Vue CHANGELOG describe different architectures, which can mislead maintainers.
9. **SEO metadata is incomplete.** The document has a title and favicon, but no meta description or Open Graph tags; the existing `opengraph.jpg` is unused.
10. **Accessibility work remains.** Several icon-only links/controls need explicit accessible names, and motion has no reduced-motion path.
11. **Some requested performance work is absent.** Experience logos use lazy loading, but the headshot does not, sections are eagerly imported, and Google Fonts are referenced from both HTML and CSS.
12. **Many UI components and dependencies are currently unused.** Tree shaking protects the browser bundle, but installation and maintenance still include the larger dependency surface.

## 12. Recommended source-of-truth rules

To avoid future confusion:

- Treat `artifacts/portfolio` as the website source of truth.
- Treat `.github/workflows/deploy.yml` as the deployment source of truth.
- Treat the versioned Cloudinary URL shared by `HeroSection.tsx` and `ResumeSection.tsx` as the currently displayed resume.
- Treat `lib/api-spec/openapi.yaml` as the API contract source of truth.
- Treat generated API files as disposable build products.
- Treat root `src/`, `CHANGELOG.md`, and root Vite/deploy helpers as legacy until they are deliberately removed or restored.
- Verify visible career facts in the React section components; there is no shared content model or CMS.

That is the operative architecture: a polished static React portfolio at the center, surrounded by useful but mostly dormant full-stack scaffolding and one retained Vue ancestor quietly haunting the root directory.
