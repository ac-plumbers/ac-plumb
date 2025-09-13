# AC Plumb AI Assistant Instructions

## Overview

You are an AI assistant for the AC Plumbers website project. Your purpose is to help developers and designers maintain, extend, and improve this codebase. The project is built with Astro, TypeScript, and Tailwind CSS v4, and emphasizes accessibility, semantic HTML, and a consistent component-driven approach.

## Key Principles

- **Accessibility First:** Always use semantic HTML, correct heading hierarchy, ARIA attributes when needed, and ensure keyboard/screen reader usability.
- **Component-Driven:** Use and extend the Text and Link components for all text and links. Prefer creating or reusing components over inline HTML.
- **Consistent Design System:** Follow the color, spacing, and typography scales defined in `src/styles/global.css` (Tailwind v4 with OKLCH colors).
- **Responsive/Mobile-First:** Use Tailwind’s responsive utilities; test on multiple screen sizes.
- **Modern Web Standards:** Use TypeScript, Prettier, and Astro conventions.

## Project Structure

```
src/
  components/
    global/         # Site-wide components (Header, Footer, etc.)
    fundations/
      elements/     # Core UI atoms (Text, Link, etc.)
    test/           # Page-specific or experimental components
  content/
    services/       # Markdown: one file per service
  layouts/          # Page layouts
  pages/            # Astro route pages
  styles/
    global.css      # Tailwind v4 theme and customizations
  images/           # Static assets
```

## Components & Usage

- **Text:** Use for all headings, paragraphs, and inline text. Always specify the semantic HTML tag via `tag` prop. Use the correct `variant` for size/hierarchy.
  ```astro
  <Text tag="h2" variant="displayLG" class="font-semibold text-primary-600">
    Section Title
  </Text>
  ```
- **Link:** Use for all navigation and external links. Add ARIA attributes and visually hidden text for clarity if needed.
- **BaseLayout:** Wrap all pages for consistent structure.

### Text Variants (examples)

| Variant    | Tailwind Classes Example                         | Usage          |
| ---------- | ------------------------------------------------ | -------------- |
| display6XL | text-4xl sm:text-7xl md:text-9xl lg:text-[12rem] | Hero headlines |
| displayLG  | text-3xl sm:text-3xl md:text-4xl lg:text-5xl     | Section titles |
| textBase   | text-base                                        | Body text      |
| textXS     | text-xs                                          | Fine print     |

**Always maintain heading hierarchy:** h1 (page title) → h2 (section) → h3 (subsection).

### Color System

- **Primary:** Blue shades (primary-700 for dark, primary-100 for light)
- **Accent:** Yellow/orange (accent-600 for dark, accent-00 for light)
- **Text:** Neutral tones (text-00 for dark, text-50 for medium)
- **Background:** Near-white (background-00)
- **Neutral:** Grays for borders/dividers

**Icons:** Use `fill="currentColor"` and Tailwind text color classes to match headings.

### Responsive Patterns

- Mobile-first, using Tailwind’s `sm:`, `md:`, `lg:` prefixes.
- Use grid utilities for layouts: e.g., `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.

## Accessibility Checklist

- Use semantic HTML elements.
- Maintain proper heading order.
- Add alt text to images.
- Use ARIA labels/roles for interactive elements.
- Provide visible focus states.
- Ensure color contrast meets WCAG AA.
- Use clear, descriptive link text.

## Code Quality

- Use Prettier with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`.
- Configuration in `.prettierrc.json`.
- Style imports and theme in `src/styles/global.css`.
- Write/extend TypeScript interfaces where relevant.

## Content Guidelines

- **Services:** Markdown files in `src/content/services` with metadata (title, description, image).
- **Landing/Home:** Hero, service highlights (with icons), benefits, contact form, FAQ.

## Common Patterns

- **Service Card:**
  ```astro
  <div class="rounded-xl border border-primary-300 bg-background-00 p-6">
    <div class="flex items-start">
      <div class="rounded-lg bg-primary-100 p-3">
        <Icon class="h-6 w-6 text-primary-600" />
      </div>
      <div class="ml-4">
        <Text tag="h3" class="text-xl font-bold text-primary-800"
          >Service Title</Text
        >
        <Text tag="p" class="text-text-50">Service description</Text>
      </div>
    </div>
  </div>
  ```
- **Contact Form:** Use labels, ARIA attributes, keyboard navigation, and clear error messages.

## Workflow

1. `npm run dev` to start
2. Format code with Prettier
3. Test accessibility in browser and with screen readers
4. Check responsive layouts
5. Deploy via Netlify (push to main branch)

## Troubleshooting

- **Prettier:** Check plugin installation and `.prettierrc.json`. Restart VS Code if needed.
- **Contrast:** Use WebAIM Contrast Checker. Prefer 600+ color shades for text on light backgrounds.

## AI Assistant Guidance

When writing code, reviewing PRs, or answering questions:

1. Prioritize accessibility and semantic HTML.
2. Use Text and Link components (never raw `<h*>` or `<a>`).
3. Follow the color system from `src/styles/global.css`.
4. Use correct heading hierarchy.
5. Suggest mobile-first, responsive solutions.
6. Check for WCAG compliance.
7. Prefer component-based solutions.
8. Use TypeScript where possible.
9. Use `fill="currentColor"` and appropriate color classes for SVG icons.
10. Include ARIA attributes for all interactive elements.
11. Follow the established code style and patterns.

## Project Reference

- **Company:** AC Plumbers, Brighton & Hove, UK
- **Phone:** 01273 123 456
- **Services:** Plumbing, heating, gas safety, boilers, heat pumps
- **Audience:** Homeowners, landlords
- **Colors:** Blue primary, yellow/orange accent
- **Style:** Modern, professional, accessible
