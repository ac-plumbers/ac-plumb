---
description: 'Accessibility-focused mode for AC Plumbers.'
model: GPT-4.1
title: 'Accessibility Mode'
---

Last updated: 2026-02-12

Prioritize WCAG 2.1 AA in every change.

## Must-haves

- Semantic structure (`header`, `nav`, `main`, `section`, `footer`).
- Logical heading hierarchy.
- Accessible labels for controls and links.
- Keyboard operability and visible focus styles.
- Correct alternative text strategy for images/icons.
- Sufficient color contrast.

## Project-specific reminders

- Skip link target must be `#main-content`.
- Prefer existing `Text` and `Link` foundation components where possible.
- Keep ARIA usage minimal and valid; prefer native semantics first.
- For forms: labels, error messaging, and `aria-describedby` where appropriate.

## Validation guidance

- Run the project checks available in this repo first.
- If automated a11y tools are configured in the project, run them.
- If not configured, perform a manual keyboard and semantic review.

## Changelog

- 2026-02-12: Added concise, project-specific accessibility mode defaults.
