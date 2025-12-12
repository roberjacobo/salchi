# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Salchi** is an AI-powered hub for everything Dachshund, built with Angular 21 and Server-Side Rendering (SSR). The application uses Angular's standalone components architecture with SSR capabilities via Express.

## Tech Stack

- **Framework**: Angular 21.0.0 (standalone components)
- **SSR**: Angular SSR with Express server
- **Styling**: Tailwind CSS 4.1.12
- **Testing**: Vitest 4.0.8
- **Language**: TypeScript 5.9.2 with strict mode
- **Package Manager**: npm 10.9.2

## Common Commands

### Development
```bash
# Start development server (http://localhost:4200/)
npm start
# or
ng serve

# Watch mode for development builds
npm run watch
```

### Building
```bash
# Production build (outputs to dist/)
npm run build

# The build creates both browser and server bundles for SSR
```

### Testing
```bash
# Run unit tests with Vitest
npm test
# or
ng test
```

### SSR Server
```bash
# Run the SSR server (after building)
npm run serve:ssr:salchi

# Server runs on port 4000 by default (configurable via PORT env var)
```

## Architecture

### SSR Configuration

The application is configured for Server-Side Rendering:

- **Browser Entry**: `src/main.ts` - bootstraps the Angular application
- **Server Entry**: `src/main.server.ts` - SSR-specific bootstrapping
- **Express Server**: `src/server.ts` - handles SSR requests and static file serving
- **Output Mode**: Server mode (generates both browser and server bundles)

The Express server:
- Serves static files from `/browser` with 1-year caching
- Handles Angular SSR via `AngularNodeAppEngine`
- Listens on port 4000 (or `PORT` env variable)
- Supports PM2 deployment

### Application Structure

```
salchi/                         # Repository root
├── src/
│   ├── app/
│   │   ├── app.ts              # Root component
│   │   ├── app.config.ts       # Client-side app configuration
│   │   ├── app.config.server.ts # SSR-specific configuration
│   │   ├── app.routes.ts       # Client routes
│   │   └── app.routes.server.ts # Server routes
│   ├── main.ts                 # Client entry point
│   ├── main.server.ts          # Server entry point
│   └── server.ts               # Express SSR server
├── public/                     # Static assets
├── dist/                       # Build output
│   └── salchi/
│       ├── browser/            # Client-side bundle
│       └── server/             # SSR bundle
├── angular.json                # Angular CLI configuration
├── package.json                # Dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

### TypeScript Configuration

The project uses strict TypeScript settings:
- Strict mode enabled
- No implicit overrides, returns, or fallthrough cases
- Experimental decorators enabled
- Target: ES2022

Angular compiler options enforce:
- Strict injection parameters
- Strict input access modifiers
- Strict templates

### Styling

Tailwind CSS 4.1.12 is configured with:
- PostCSS integration via `@tailwindcss/postcss`
- Global styles in `src/styles.css`

### Code Formatting

Prettier is configured with:
- Print width: 100 characters
- Single quotes
- Angular parser for HTML files

## Component Prefix

All Angular components use the `app` prefix (e.g., `app-component-name`).

## Performance Budgets

Production builds enforce:
- Initial bundle: 500kB warning, 1MB error
- Component styles: 4kB warning, 8kB error
- Give the instructions and explanation to the user unless he ask you to do it.