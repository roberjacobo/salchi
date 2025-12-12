# Salchi Frontend Structure Plan

## Overview

This document outlines the component-based architecture for the Salchi landing page, an informational site about Dachshunds.

## Architecture Approach

- **Framework**: Angular 21 with standalone components
- **Styling**: Tailwind CSS utility-first approach
- **Routing**: Single-page layout (no routing needed initially)
- **State Management**: Angular signals for reactive state
- **Component Pattern**: Smart/Presentational component pattern where applicable

## Folder Structure

```
src/app/
├── app.ts                      # Root component (shell)
├── app.html                    # Main layout template
├── app.css                     # Root component styles
├── app.config.ts              # App configuration
├── app.routes.ts              # Routes (empty for now)
│
├── core/                      # Core functionality (future: services, guards)
│   └── services/              # Shared services
│
├── shared/                    # Shared/reusable components
│   ├── components/
│   │   ├── button/           # Reusable button component
│   │   └── card/             # Reusable card component
│   └── models/               # TypeScript interfaces/types
│
└── features/                  # Feature-specific components
    └── landing/              # Landing page feature
        ├── landing.ts        # Landing page container component
        ├── landing.html
        ├── landing.css
        └── components/       # Landing page sections
            ├── hero/
            │   ├── hero.ts
            │   ├── hero.html
            │   └── hero.css
            ├── about/
            │   ├── about.ts
            │   ├── about.html
            │   └── about.css
            ├── breed-types/
            │   ├── breed-types.ts
            │   ├── breed-types.html
            │   └── breed-types.css
            ├── care-tips/
            │   ├── care-tips.ts
            │   ├── care-tips.html
            │   └── care-tips.css
            ├── gallery/
            │   ├── gallery.ts
            │   ├── gallery.html
            │   └── gallery.css
            └── footer/
                ├── footer.ts
                ├── footer.html
                └── footer.css
```

## Component Breakdown

### 1. Root Component (app.ts)
**Purpose**: Application shell
**Contains**:
- Router outlet (for future routing)
- Landing page component

### 2. Landing Container (features/landing/landing.ts)
**Purpose**: Main landing page container
**Contains**: All section components in order
**Responsibilities**:
- Layout composition
- Pass data to child components if needed

### 3. Section Components

#### Hero Component
**Purpose**: Eye-catching introduction
**Content**:
- Main heading: "Everything Dachshund"
- Tagline/subtitle
- Background image or gradient
- Call-to-action (optional)

#### About Component
**Purpose**: General information about Dachshunds
**Content**:
- Origin and history
- Personality traits
- Why they're special
- Key characteristics

#### Breed Types Component
**Purpose**: Different Dachshund varieties
**Content**:
- Standard vs Miniature
- Coat types: Smooth, Long-haired, Wire-haired
- Size/weight information
- Visual differences

#### Care Tips Component
**Purpose**: Essential care information
**Content**:
- Exercise requirements
- Grooming needs
- Health considerations (back care!)
- Nutrition basics

#### Gallery Component
**Purpose**: Visual showcase
**Content**:
- Grid of Dachshund images
- Captions (optional)
- Responsive layout

#### Footer Component
**Purpose**: Site footer
**Content**:
- Copyright info
- Social links (if applicable)
- Contact information
- Additional resources

### 4. Shared Components

#### Button Component
**Purpose**: Reusable button with consistent styling
**Props**:
- variant (primary, secondary, outline)
- size (small, medium, large)
- disabled state

#### Card Component
**Purpose**: Reusable card container
**Props**:
- title
- content
- image (optional)

## Implementation Steps

### Phase 1: Setup & Structure
1. Create folder structure
2. Clean up starter template in app.html
3. Create Landing container component
4. Set up basic routing (if needed)

### Phase 2: Core Sections
1. Create Hero component
2. Create About component
3. Create Breed Types component
4. Wire up components in Landing container

### Phase 3: Additional Sections
1. Create Care Tips component
2. Create Gallery component
3. Create Footer component

### Phase 4: Shared Components
1. Create Button component
2. Create Card component
3. Refactor existing components to use shared components

### Phase 5: Polish
1. Add animations/transitions
2. Optimize images
3. Add meta tags for SEO
4. Test responsive design
5. Add accessibility features (ARIA labels, etc.)

## Styling Strategy

### Tailwind CSS Approach
- Use utility classes directly in templates
- Create component-specific styles in .css files only when needed
- Use Tailwind's `@apply` directive sparingly
- Maintain consistent spacing scale (4, 8, 16, 24, 32, 48, 64px)

### Color Palette (Example)
```css
Primary: Dachshund brown tones
- Brown: #8B4513 (saddle brown)
- Tan: #D2B48C (tan)
- Black: #1A1A1A (for text)

Accent colors:
- Warm: #F4A460 (sandy brown)
- Background: #FFF8E7 (cream)
```

### Typography
- Headings: Bold, clear hierarchy
- Body: Readable, comfortable line-height (1.6-1.8)
- Font: System fonts or Google Fonts

## Data Management

### Initial Approach
- Hard-coded content in component TypeScript files
- Use signals for reactive data

### Future Enhancements
- Move content to JSON files
- Create a content service
- Add CMS integration (Contentful, Strapi, etc.)
- Add i18n for multiple languages

## Responsiveness

### Breakpoints (Tailwind defaults)
- sm: 640px (mobile landscape)
- md: 768px (tablet)
- lg: 1024px (desktop)
- xl: 1280px (large desktop)
- 2xl: 1536px (extra large)

### Mobile-First Approach
- Design for mobile first
- Progressively enhance for larger screens
- Test on real devices

## Performance Considerations

- Lazy load images (use `loading="lazy"`)
- Optimize images (WebP format, proper sizing)
- Use Angular's built-in change detection (signals)
- Keep bundle size small (check with `ng build --stats-json`)

## Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Alt text for all images

## Testing Strategy

- Unit tests for components (Vitest)
- Visual regression testing (future)
- Manual testing on different devices
- Lighthouse performance audits

## Next Steps

1. Review this plan and confirm approach
2. Start with Phase 1: Create folder structure
3. Implement components one by one
4. Test and iterate
