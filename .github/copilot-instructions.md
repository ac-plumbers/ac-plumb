# AC Plumbers Copilot Instructions

Last updated: 2026-02-12

Use this as the primary repository-level instruction source.

## Stack

- Astro 5 + Vue 3 islands + TypeScript + Tailwind CSS v4.
- Netlify deployment.
- Canonical site: `https://acplumb.co.uk`.

## Conventions

- Prefer existing foundation components in `src/components/fundations/`.
- Use `Text` and `Link` components for consistent UI patterns.
- Keep semantic HTML, heading order, and accessibility intact.
- Use color/spacing tokens from `src/styles/global.css`.
- Avoid hardcoded business/contact data; use `src/utils/businessConfig.ts`.

## Paths and aliases

- `@/*` -> `src/*`
- `@components/*` -> `src/components/*`
- `@assets/*` -> `src/assets/*`
- `@styles/*` -> `src/styles/*`
- `@layouts/*` -> `src/layouts/*`

## Notes

- Repository intentionally uses `fundations` spelling in paths.
- Keep skip-link target as `#main-content`.

## Changelog

- 2026-02-12: Added last-updated marker, streamlined wording, and unified repo guidance.
