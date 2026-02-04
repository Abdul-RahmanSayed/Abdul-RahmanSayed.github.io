# Abdul-Rahman Sayed - Portfolio Website

## Overview
This is a personal portfolio website for Abdul-Rahman Sayed, a Computer Science student at Georgia Institute of Technology. The site showcases work experience, technical skills, and resume information using a modern Vue.js framework.

## Purpose
Professional portfolio website featuring:
- Personal introduction and academic focus areas (Intelligence and Media concentrations)
- Comprehensive work experience timeline
- Interactive technical skills showcase
- Embedded resume viewer with download capability

## Current State
**Production Ready** - Vue.js 3 single-page application with multi-route navigation, responsive design, and modern component architecture.

## Technology Stack
- **Framework**: Vue.js 3 with Options API
- **Build Tool**: Vite 7.2.2
- **Routing**: Vue Router 4
- **Styling**: Scoped CSS with CSS custom properties
- **Dev Server**: Vite dev server on port 5000
- **Runtime**: Node.js 20

## Project Architecture

### Directory Structure
```
├── src/
│   ├── main.js              # Vue application entry point
│   ├── App.vue              # Root component with navigation and layout
│   ├── style.css            # Global styles and CSS custom properties
│   ├── router/
│   │   └── index.js         # Vue Router configuration
│   ├── components/
│   │   ├── Navigation.vue   # Top navigation bar with dropdown
│   │   └── Footer.vue       # Footer with LinkedIn link
│   ├── views/
│   │   ├── Home.vue         # Home page with hero and concentrations
│   │   ├── Experience.vue   # Work experience timeline
│   │   ├── Skills.vue       # Skills carousel (4 cards at a time)
│   │   └── Resume.vue       # PDF viewer with download
│   └── assets/
│       ├── images/          # Profile photos, logos, icons
│       └── pdfs/            # Resume PDF files
├── public/                  # Static assets served directly
├── index.html               # Vite HTML entry point
├── vite.config.js           # Vite configuration with @assets alias
└── package.json             # Dependencies and scripts
```

### Color Palette
The site uses a consistent color scheme defined as CSS custom properties:
- **Deep Blue** (#3d5a80) - Navigation, headings
- **Sky Blue** (#98c1d9) - Accents, borders
- **Ice Blue** (#e0fbfc) - Background, highlights
- **Coral** (#ee6c4d) - CTAs, hover states
- **Navy** (#293241) - Text, dark elements

### Key Components

#### Navigation (Navigation.vue)
- Sticky header with dropdown menu
- "About" dropdown containing Experience and Skills links
- Click/touch support for mobile devices + hover for desktop
- Accessible with ARIA attributes
- Click-outside-to-close behavior

#### Skills Carousel (Skills.vue)
- Shows 4 technical skill cards at a time
- Circular navigation with left/right arrows
- Skills: Java, HTML/CSS/JS, Git/GitHub, Unix, LaTeX
- Responsive grid layout

#### Experience Timeline (Experience.vue)
- Card-based layout with company logos
- 4 work experiences with full descriptions
- Hover effects and transitions
- Responsive stacking on mobile

#### Resume Viewer (Resume.vue)
- Embedded PDF viewer
- Download button for 2025 resume
- Responsive sizing

## Running the Project

### Development
```bash
npm run dev
```
Starts Vite dev server on http://localhost:5000

### Production Build
```bash
npm run build
npm run preview
```

### Deployment
The project is configured for autoscale deployment:
- Build command: `npm run build`
- Run command: `npx vite preview --host 0.0.0.0 --port 5000`

## Recent Changes

### 2025-11-07: Home Page Update
- Update front page Introduction to reflect 2025 status.

### 2025-11-07: Vue.js 3 Complete Rebuild
- **Migration**: Completely rebuilt site from static HTML/CSS/JS to Vue.js 3 + Vite
- **Framework Setup**: Installed Vue 3, Vue Router, and Vite build tooling
- **Component Architecture**: Created modular components (Navigation, Footer) and views
- **Routing**: Implemented multi-page routing with /, /experience, /skills, /resume
- **Design System**: Applied consistent color palette throughout with CSS custom properties
- **Responsive Design**: Mobile-first approach with breakpoints for tablet/desktop
- **Navigation Enhancement**: Fixed dropdown to work on both hover (desktop) and click/touch (mobile)
- **Asset Migration**: Moved all images and PDFs to src/assets with Vite @assets alias
- **Accessibility**: Added proper ARIA attributes and keyboard navigation support
- **Deployment Config**: Configured autoscale deployment with Vite preview server
- **Cleanup**: Removed old static HTML files (experience.html, skills.html, resume.html) and Python server

### 2025-11-07: Skills Carousel Fix (Pre-Vue)
- Fixed carousel JavaScript logic for proper circular sliding window
- Carousel cycles through all 5 skills, displaying 4 at a time

### 2025-11-07: Resume and Experience Updates
- Updated resume to 2025 version
- Added 4 current work experience entries

## User Preferences
- **Design**: Modern card-based layout with shadows and hover effects
- **Colors**: Specific palette (#3d5a80, #98c1d9, #e0fbfc, #ee6c4d, #293241)
- **Structure**: Multi-page navigation with dropdown for About section
- **Skills Display**: Carousel showing 4 cards at a time with arrow navigation

## Features
- ✅ Responsive navigation with accessible dropdown menu
- ✅ Interactive skills carousel (4 cards visible, circular navigation)
- ✅ Embedded PDF resume viewer with download option
- ✅ Timeline-style work experience cards
- ✅ Smooth transitions and hover effects
- ✅ Mobile-optimized touch interactions
- ✅ LinkedIn integration in footer
- ✅ Professional design with consistent branding
