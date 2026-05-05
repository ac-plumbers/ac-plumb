# Accessibility TODO — AC Plumb

> **Standard:** WCAG 2.2 Level AA · **Audited:** 2026-05-05
> Check off each item as it is merged. Re-run axe + VoiceOver after all P1s are done.

---

## 🔴 Priority 1 — Critical (fix before next release)

### 1.1 · Autoplay carousel — no pause control

> **WCAG 2.2.2 Pause, Stop, Hide — Level A**

- [x] In [src/components/home/Carousel.vue](src/components/home/Carousel.vue) add `stopOnMouseEnter: true` to the Autoplay plugin so hovering pauses it
- [x] In [src/components/home/Testimonials.astro](src/components/home/Testimonials.astro) add a visible **Pause / Play** button below the carousel
- [x] Button must toggle `aria-pressed="true/false"` and call `autoplay.stop()` / `autoplay.play()` via the embla API
- [x] Screen reader must announce the state change when toggled
- [x] Carousel must **not** auto-resume after the user has manually paused it

---

### 1.2 · FAQ buttons — invisible keyboard focus

> **WCAG 2.4.7 Focus Visible — Level AA**
> File: [src/components/home/Faq.astro](src/components/home/Faq.astro) line 144

- [x] Remove bare `focus:outline-none` from the `.faq-toggle` button class
- [x] Add `focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-inset` in its place
- [ ] Verify: tabbing to a FAQ button shows a teal ring; mouse click does not

---

### 1.3 · Service hero — wrong `role="banner"` on `<section>`

> **WCAG 4.1.2 Name, Role, Value — Level AA**
> File: [src/components/services/ServiceHeroSection.astro](src/components/services/ServiceHeroSection.astro) line 37

- [x] Delete `role='banner'` from the `<section>` element (keep `aria-labelledby` and `id`)
- [ ] Verify in VoiceOver Rotor: only **one** banner landmark appears (the site header)
- [ ] The service hero should now appear as a **region** landmark

---

### 1.4 · FAQ & gallery JS breaks after View Transitions

> **WCAG 4.1.2 — functional failure on client-side navigation**

- [x] In [src/components/home/Faq.astro](src/components/home/Faq.astro) line 181: replace `DOMContentLoaded` with `astro:page-load`
- [x] Wrap the init logic in a named function; clone toggle nodes before re-attaching to avoid duplicate listeners
- [x] In [src/pages/gallery.astro](src/pages/gallery.astro) line 220: apply the same `astro:page-load` fix
- [x] Test: navigate home → about → home; FAQ toggles must still work and update `aria-expanded`

---

## 🟡 Priority 2 — Medium (next sprint)

### 2.1 · AnimatedNumber — floods screen readers with every tick

> **WCAG 4.1.3 Status Messages**
> File: [src/components/ui/AnimatedNumber.astro](src/components/ui/AnimatedNumber.astro)

- [ ] Add `aria-hidden="true"` to the visual `<span>` so the animation is hidden from AT
- [ ] Add a sibling `<span class="sr-only" aria-live="polite">` that receives only the **final** value at animation end
- [ ] Reset the sr-only span to empty string before each re-animation (on scroll out)
- [ ] Verify VoiceOver announces the number once, not on every frame

---

### 2.2 · Carousel region — no accessible name

> **WCAG 4.1.2 Name, Role, Value**
> Files: [src/components/ui/carousel/Carousel.vue](src/components/ui/carousel/Carousel.vue) · [src/components/home/Carousel.vue](src/components/home/Carousel.vue)

- [ ] Add an `ariaLabel` prop to `ui/carousel/Carousel.vue` and bind it as `:aria-label="props.ariaLabel || 'Carousel'"`
- [ ] Pass `aria-label="Customer testimonials"` at the usage site in `home/Carousel.vue`
- [ ] Verify VoiceOver announces **"Customer testimonials, carousel"** on entry

---

### 2.3 · Footer agency link — missing new-tab notice

> **WCAG 2.4.4 Link Purpose**
> File: [src/components/global/Footer.astro](src/components/global/Footer.astro) line 229

- [ ] Add `<span class="sr-only">(opens in new tab)</span>` inside the `agencyga.es` link
- [ ] Change `rel="noopener"` → `rel="noopener noreferrer"`
- [ ] No visual change expected

---

## ⚪ Priority 3 — Low (good practice)

### 3.1 · Dead script in Hero.astro

> File: [src/components/home/Hero.astro](src/components/home/Hero.astro) lines 100–158

- [ ] Delete the entire `<script>` block — it references `#open-menu-button` etc. which no longer exist
- [ ] Confirm no console errors on home page after removal

---

### 3.2 · Buttons/links using `focus:ring` instead of `focus-visible:ring`

> Files: [src/components/quote/QuoteForm.vue](src/components/quote/QuoteForm.vue) · [src/components/about/AboutContactCTA.astro](src/components/about/AboutContactCTA.astro) · [src/components/fundations/elements/Breadcrumb.astro](src/components/fundations/elements/Breadcrumb.astro)

- [ ] On **buttons and links only**, change `focus:ring-*` → `focus-visible:ring-*` (leave form inputs as-is — ring on all focus is correct there)
- [ ] Verify: mouse click on a button no longer shows a ring; Tab to the same button does

---

### 3.3 · Services dropdown — invalid `<li role="separator">`

> File: [src/components/global/headerBits/HeaderDesktopNav.vue](src/components/global/headerBits/HeaderDesktopNav.vue) line 122

- [ ] Change `<li role="separator" aria-hidden="true">` to `<li role="presentation"><hr class="border-gray-200" aria-hidden="true" /></li>`
- [ ] Visual divider must look identical

---

## ✅ Testing checklist (run after all P1 + P2 fixes)

### Automated tools

- [ ] [axe DevTools](https://www.deque.com/axe/) — run on: home, any service page, contact, quote, FAQ
- [ ] [WAVE](https://wave.webaim.org/) — same pages
- [ ] [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) — check any new/changed elements

### Keyboard only

- [ ] Tab through the entire home page — every interactive element shows a visible focus ring
- [ ] Open + close mobile menu with keyboard (Enter → Escape → focus returns to hamburger)
- [ ] Open + close each FAQ item — `aria-expanded` toggles correctly in DevTools
- [ ] Tab through the desktop services dropdown (Enter to open, Escape to close)
- [ ] Complete both forms (contact + quote) using keyboard only

### VoiceOver (macOS + Safari)

- [ ] Landmarks Rotor (`⌃ + ⌥ + U`): one banner, one main, one navigation, one contentinfo
- [ ] Service page: no duplicate banner in Rotor
- [ ] FAQ page: accordion buttons announce "collapsed / expanded"
- [ ] Testimonials: announces "Customer testimonials, carousel"
- [ ] Stats section: AnimatedNumber announces final value once only

### NVDA (Windows + Chrome)

- [ ] Landmark list (Insert + F7) matches expectations above
- [ ] FAQ accordion works and announces state

---

## 🟢 Already correct — do not change

| What | Where |
| --- | --- |
| Skip link (`#main-content`) | `Header.vue` |
| Mobile menu focus trap + Escape key | `HeaderMobileMenu.vue` |
| `role="dialog" aria-modal` on mobile menu | `HeaderMobileMenu.vue` |
| `aria-current="page"` on active nav links | Desktop + mobile nav |
| `aria-expanded` on hamburger button | `Header.vue` |
| `aria-hidden` on all decorative SVGs + images | Sitewide |
| `(opens in new tab)` on WhatsApp mobile link | `HeaderMobileMenu.vue` |
| `lang="en-GB"` on `<html>` | `BaseLayout.astro` |
| `id="main-content"` on `<main>` | `BaseLayout.astro` |
| Labels + `for`/`id` on all form inputs | `FormContact.astro`, `QuoteForm.vue` |
| `aria-required` + `autocomplete` on required inputs | `FormContact.astro` |

---

*Last updated: 2026-05-05 · Re-audit recommended after all P1 and P2 items are closed.*
