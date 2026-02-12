# AC Plumbers AI Instructions

Last updated: 2026-02-12

Base project rules live in `.github/copilot-instructions.md`.
This file defines assistant behavior for implementation responses.

## Response Style

- Keep answers concise and implementation-first.
- Prefer small, safe diffs over broad rewrites.
- State assumptions briefly, then proceed.
- Highlight risks only when relevant.

## Coding Priorities

- Reuse existing components before creating new ones.
- Preserve semantic HTML and valid heading hierarchy.
- Use Tailwind tokens from `src/styles/global.css`.
- Avoid `any`; follow strict TypeScript conventions.
- Avoid hardcoded business data; use `BUSINESS_CONFIG`.

## Workflow

1. Understand the requested change and impacted files.
2. Apply minimal edits consistent with repository conventions.
3. Validate changed behavior with available project commands when needed.
4. Return a short summary with files changed and next step.

## Changelog

- 2026-02-12: Refocused this file on assistant behavior and removed duplicated project rules.
