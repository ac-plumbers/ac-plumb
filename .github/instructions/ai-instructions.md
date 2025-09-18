# AC Plumbers AI Assistant Instructions

## Quick Checklist (Lintable Rules)

- ✅ Use **Text** for all headings/paragraphs, **Link** for all links.
- ✅ Maintain correct heading hierarchy (h1 → h2 → h3).
- ✅ No raw `<h*>` or `<a>` in components/pages.
- ✅ Tailwind tokens only from `src/styles/global.css` (no ad‑hoc colors).
- ✅ Mobile‑first, responsive (`sm:` `md:` `lg:`).
- ✅ Semantic HTML and accessibility checks (labels, ARIA, focus states).
- ✅ No inline styles (use Tailwind or theme tokens).
- ✅ TypeScript only; no `any`.
- ✅ Keep functions/components descriptive and camelCase.

## Overview

You are an AI assistant for the AC Plumbers Ltd. website project. Your purpose is to help developers and designers maintain, extend, and improve this codebase. The project is built with Astro, TypeScript, and Tailwind CSS v4, and emphasizes accessibility, semantic HTML, and a consistent component-driven approach.
Help me ship fast with **Astro + Vue 3 `<script setup lang="ts">` + TailwindCSS + Supabase**.
Prefer **small, safe, diff-style edits** over big rewrites.

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
    foundations/
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
| displayLG  | text-3xl sm:text-4xl md:text-5xl lg:text-6xl     | Section titles |
| textBase   | text-base                                        | Body text      |
| textXS     | text-xs                                          | Fine print     |

**Always maintain heading hierarchy:** h1 (page title) → h2 (section) → h3 (subsection).

### Color System

- **Primary:** `text-primary-700`, `bg-primary-700`, `bg-primary-100`
- **Accent:** `text-accent-600`, `bg-accent-600`, `bg-accent-100`
- **Text:** `text-text-900` (default), `text-text-600` (medium), `text-text-50` (light)
- **Background:** `bg-background-50` (light), `bg-background-100` (base)
- **Neutral:** `border-neutral-200`, `text-neutral-700`

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
  <div class="rounded-xl border border-primary-300 bg-background-100 p-6">
    <div class="flex items-start">
      <div class="rounded-lg bg-primary-100 p-3">
        <Icon class="h-6 w-6 text-primary-600" />
      </div>
      <div class="ml-4">
        <Text
          tag="h3"
          variant="displayLG"
          class="text-xl font-bold text-primary-800"
        >
          Service Title
        </Text>
        <Text tag="p" variant="textBase" class="text-text-50"
          >Service description</Text
        >
      </div>
    </div>
  </div>
  ```

## Stack & Conventions

- **Language:** TypeScript everywhere; no `any`.

- **Vue:** Always use `<script setup lang="ts">` followed by a `<template>` Composition API, emits/props typed.
- Script block comes **first**, template comes **after**.
- ✅ Example Vue 3 Component

```vue
<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
function increment() {
  count.value++;
}
</script>

<template>
  <button class="rounded bg-blue-500 px-4 py-2 text-white" @click="increment">
    Count is: {{ count }}
  </button>
</template>
```

- **Astro:** Vue islands for interactivity; keep pages lean.
- ✅ Example 2: Astro Component with Props

---

const { title, description } = Astro.props;
import Text from "@components/foundations/elements/Text.vue";

---

<section>
  <Text tag="h2" variant="displayLG" class="text-primary-700">{title}</Text>
  <Text tag="p" variant="textBase" class="text-text-50">{description}</Text>
</section>

- **Styling:** Tailwind utilities with tokens from `src/styles/global.css`. No inline styles.
- **Data/Auth:** Supabase JS client. Assume RLS on. Use typed queries and narrow selects.
- **Testing:** Vitest + Vue Test Utils when asked.
- **Contact Form:** Use labels, ARIA attributes, keyboard navigation, and clear error messages.

## Output Rules

- Be **concise**: bullets over prose, max one short paragraph before code.
- Prefer **patches/diffs** or **minimal code blocks**. Explain risky changes in 1–2 bullets.
- If assumptions are needed, **state them in one line**, then proceed.

## Accessibility & UX

- Label form controls, manage focus, and provide keyboard support.
- Use semantic HTML; avoid div soup.

## Performance

- Avoid heavy deps; propose lightweight first.
- Tree-shakable imports; defer non-critical JS.

## Tailwind

- Consolidate classes; avoid duplicates.
- Suggest reusable patterns (variants/util classes) based on existing tokens.

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

- **Company:** AC Plumbers Ltd., Brighton & Hove, UK
- **Phone:** 01273 123 456
- **Services:** Plumbing, heating, gas safety, boilers, heat pumps
- **Audience:** Homeowners, landlords
- **Colors:** Blue primary, yellow/orange accent
- **Style:** Modern, professional, accessible

## 🚫 Constraints

- Do not use legacy Vue options API.
- Avoid inline styles unless necessary.
- Keep function and component names **descriptive** and **camelCase**.
- Avoid hardcoded values; use props or config instead.
- Code should follow **DRY (Don't Repeat Yourself)** and **KISS (Keep It Simple, Stupid)** principles.
