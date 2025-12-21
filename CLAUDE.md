# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal portfolio website built with Next.js 13, TypeScript, and Tailwind CSS. The site showcases professional work, contributions, tutorials, and packages, deployed on Vercel.

## Development Commands

### Running the Development Server
```bash
npm run dev
# or
yarn dev
```
The dev server runs on port 3002 (configured in package.json).

### Building for Production
```bash
npm run build
# or
yarn build
```

### Running Production Server
```bash
npm start
# or
yarn start
```

### Linting
```bash
npm run lint
# or
yarn lint
```

## Technology Stack

- **Framework**: Next.js 13.1.6 (Pages Router)
- **Language**: TypeScript 4.9.5
- **Styling**: Tailwind CSS 3.2.4 with custom dark mode configuration
- **UI Libraries**: React Icons, React Type Animation, React Markdown
- **Node Version**: Requires Node.js >= 20.0.0

## Architecture

### Page Structure (Pages Router)

The application uses Next.js Pages Router with the following structure:

- `src/pages/_app.tsx` - Root application component that wraps all pages with Layout and applies Montserrat font
- `src/pages/index.tsx` - Home page featuring hero section, about, work samples, skills, contributions, and contact
- `src/pages/work/index.tsx` - Full portfolio/work showcase
- `src/pages/contributions/index.tsx` - Open source contributions
- `src/pages/packages/index.tsx` - NPM packages
- `src/pages/tutorials/index.tsx` - Tutorial content
- `src/pages/talks/index.tsx` - Presentations and talks
- `src/pages/api/hello.ts` - API route example

### Layout System

The Layout component (src/layout/index.tsx) wraps all pages and includes:
- **Navbar**: Fixed navigation with hamburger menu and social icons sidebar (desktop only)
- **Footer**: Site footer
- **Children**: Page content

### Data Management

Content is managed through static data files in the `/data` directory:
- `data/projects.js` - Portfolio projects with metadata (title, description, tech stack, links)
- `data/contributions.js` - Open source contributions
- `data/packages.js` - NPM packages
- `data/logos.js` - Logo design work

Each data file exports arrays of objects using the `uid` library for unique IDs.

### Styling Approach

- **Global Styles**: `src/styles/globals.css` contains base styles and Tailwind directives
- **Module CSS**: `src/styles/Home.module.css` for component-specific styles
- **Dark Mode**: Configured in `tailwind.config.js` with `darkMode: 'class'`. The app wrapper in `_app.tsx` has a hardcoded `className="dark"` div, meaning the site is always in dark mode
- **Custom Font**: Montserrat font loaded via `@next/font/google` and applied through CSS variables

### Key Components

- **WorkItem** (`src/components/WorkItem.tsx`) - Reusable component for displaying project cards
- **Skills** (`src/components/Skills.tsx`) - Skills showcase section
- **Navbar** (`src/layout/Navbar/Navbar.tsx`) - Navigation with mobile menu and social links

## Configuration Notes

- **Next.js Config**: `reactStrictMode: true`, `optimizeFonts: false`
- **Tailwind**: JIT mode enabled, configured for src directory
- **Port**: Development server runs on port 3002 (not default 3000)

## Deployment

The site is deployed on Vercel and available at jonathansanchez.dev.

## Important Patterns

1. **Content Updates**: When adding new projects, contributions, or packages, update the corresponding data file in `/data` directory
2. **Image Assets**: Store images in `/public/img` with subdirectories for organization (icons, tech-icons, etc.)
3. **Navigation**: The Navbar component includes both a mobile hamburger menu and a desktop social icons sidebar that slides in from the left
4. **Routing**: Uses Next.js Link component for client-side navigation with anchor links for same-page sections (e.g., `/#about`, `/#skills`)
