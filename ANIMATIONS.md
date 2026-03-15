# Animation Reference — AC Plumbers

A complete map of every animation in the project: where it lives, what it does, and exactly how to change it.

---

## Table of Contents

1. [View Transitions (page navigation)](#1-view-transitions)
2. [CSS Transitions — Buttons](#2-css-transitions--buttons)
3. [CSS Transitions — Navigation & Header](#3-css-transitions--navigation--header)
4. [CSS Transitions — Cards & Hover States](#4-css-transitions--cards--hover-states)
5. [CSS Transitions — FAQ Accordion](#5-css-transitions--faq-accordion)
6. [Keyframe Animations — Buttons](#6-keyframe-animations--buttons)
7. [Keyframe Animations — Testimonial Cards](#7-keyframe-animations--testimonial-cards)
8. [Vue Transitions — Sticky Call Button](#8-vue-transitions--sticky-call-button)
9. [Scroll-Triggered Animations](#9-scroll-triggered-animations)
10. [Carousel Autoplay](#10-carousel-autoplay)
11. [Global Animation Settings](#11-global-animation-settings)

---

## 1. View Transitions

Controls the animated navigation between pages (enabled by Astro's `ClientRouter`).

### Setup — `src/layouts/BaseLayout.astro`

```astro
import { ClientRouter } from 'astro:transitions';
...
<ClientRouter />  {/* line 57 — enables page transitions globally */}
```

To **disable** view transitions entirely, remove `<ClientRouter />`.

---

### Header persistence — `src/layouts/BaseLayout.astro`

```astro
<HeaderVue client:load currentPath={currentPath} transition:persist />
```

`transition:persist` keeps the header Vue island alive across navigations so it never re-mounts or flashes. Remove the directive to let the header re-render on every navigation.

---

### Service title morph — `src/components/services/ServicesGrid.astro` & `src/components/services/ServiceHeroSection.astro`

When navigating from the services grid to a service detail page, the title element morphs from its card position into the hero heading.

**Grid card (outgoing element):**
```astro
<!-- src/components/services/ServicesGrid.astro -->
<Text
  tag="h3"
  ...
  transition:name={`service-title-${service.slug}`}>
```

**Hero heading (incoming element):**
```astro
<!-- src/components/services/ServiceHeroSection.astro -->
<Text
  tag="h1"
  ...
  transition:name={slug ? `service-title-${slug}` : undefined}>
```

The slug-based name (e.g. `service-title-gas-boiler-installation`) ensures each service has its own unique transition — if the same name appeared on multiple elements simultaneously the browser would ignore the transition.

**To change the animation style**, add `transition:animate` to either element:
```astro
{/* Built-in presets */}
transition:animate="fade"        {/* cross-fade only, no morph */}
transition:animate="slide"       {/* slides in from the side */}
transition:animate="none"        {/* instant cut */}

{/* Custom — import and define your own */}
import { fade } from 'astro:transitions';
transition:animate={fade({ duration: '0.4s' })}
```

---

### Reduced-motion safety — `src/styles/global.css`

```css
/* lines 281–287 */
@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(*),
  ::view-transition-old(*),
  ::view-transition-new(*) {
    animation: none !important;
  }
}
```

This disables **all** view transition animations for users who have requested reduced motion in their OS settings. Do not remove this block.

---

## 2. CSS Transitions — Buttons

### `src/components/fundations/elements/Button.astro`

All button variants share a base transition. The variant determines what else changes.

| Variant | Classes | Effect |
|---------|---------|--------|
| `default` | `transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0` | Lifts slightly on hover |
| `accent` | `transition-all duration-300 hover:scale-105 active:scale-95` | Scales up on hover, down on click |
| `muted` | `transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0` | Same as default |
| `outline` | `transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0` | Same as default |

**To change hover lift distance:** find `hover:-translate-y-0.5` and change to `hover:-translate-y-1` (more) or remove it entirely.

**To change transition speed:** replace `duration-300` with any Tailwind duration value:
- `duration-150` — snappy
- `duration-200` — fast
- `duration-300` — default (300ms)
- `duration-500` — slow

---

### `src/components/fundations/elements/GetAQuote.astro` and `GetAQuote.vue`

Both the Astro and Vue versions use identical transition classes:

```html
<!-- Astro: line ~141 | Vue: line ~139 -->
transition-all duration-300 hover:scale-105 active:scale-95
```

**To change hover scale:** replace `hover:scale-105` with:
- `hover:scale-[1.03]` — subtle
- `hover:scale-110` — strong
- remove entirely — no scale effect

**To change press feedback:** replace `active:scale-95` with `active:scale-[0.97]` or remove it.

---

### `src/components/fundations/elements/CallButton.astro`

```html
{/* line ~109 */}
transition-all duration-300 hover:scale-105 active:scale-95
```

Same settings as GetAQuote. This component also supports animation modes — see [Section 6](#6-keyframe-animations--buttons).

---

### `src/components/fundations/elements/Link.astro`

```html
{/* standard link variant — line ~90 */}
transition-colors duration-200

{/* button-style link variant — line ~106 */}
duration-300
```

`transition-colors` restricts the transition to colour properties only, which is more performant than `transition-all`. To animate other properties (e.g. transform), change to `transition-all`.

---

### `src/components/global/StickyCallButton.vue`

```html
{/* line 13 */}
transition-all duration-200 hover:scale-105 hover:bg-primary-700
```

**Faster than other buttons** (200ms vs 300ms) — intentional because it's a floating element. To match other buttons change to `duration-300`.

---

## 3. CSS Transitions — Navigation & Header

### `src/components/global/Header.vue`

```html
{/* header element — line 9 */}
transition-all duration-300
```

Fires when the `scrolled` ref changes (at `window.scrollY > 50`). Controls how quickly the header shadow and border appear on scroll.

**To change the scroll threshold** (when the header style change triggers):
```js
// Header.vue — line ~452
const handleScroll = () => {
  scrolled.value = window.scrollY > 50;  // change 50 to any pixel value
};
```

**Navigation link hover transitions:**
```html
{/* desktop links — lines 56, 74 */}
transition-colors duration-200

{/* mobile links — lines 159, 170 */}
transition-colors duration-200
```

**Mobile menu panel slide:**
```html
{/* line 239 */}
transition-transform duration-300
```

Changes how fast the mobile drawer slides in and out. `duration-200` is snappier, `duration-400` is slower.

**WhatsApp/contact button:**
```html
{/* line 189 */}
transition-colors duration-200
```

---

## 4. CSS Transitions — Cards & Hover States

### Service card — `src/components/services/ServicesGrid.astro`

```html
{/* article wrapper — line 18 */}
transition-all duration-300
{/* hover effects applied: hover:shadow-lg hover:border-primary-300 */}

{/* card image — line 26 */}
transition-transform duration-300 group-hover:scale-105
```

**To change image zoom on hover:** replace `group-hover:scale-105` with `group-hover:scale-110` (more zoom) or remove it.

**To slow down the card border/shadow transition:** change `duration-300` on the article to `duration-500`.

---

### Testimonial card — `src/components/global/TestimonialsCard.astro`

```html
{/* card wrapper — line 17 */}
transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl

{/* star icons — line 80 */}
transition-transform duration-200 group-hover:scale-110
```

**To change card scale on hover:** edit `hover:scale-[1.03]`. Use bracket notation for precise values (e.g. `hover:scale-[1.02]` for subtler, `hover:scale-[1.05]` for stronger).

**Stars scale independently** from the card scale. To disable: remove `group-hover:scale-110` from the star elements.

---

### Area/coverage cards — `src/components/areas/`

```html
{/* HeroAreas.astro — lines 101, 122, 143 */}
transition-all hover:bg-[color]

{/* CoveragesAreasList.astro / ExtendedCoverageList.astro — lines 82, 84 */}
transition-all hover:shadow-xl
```

No explicit `duration-*` is set on these — they use Tailwind's default (150ms). Add `duration-300` to slow them down.

---

### About section CTAs — `src/components/about/AboutHero.astro` & `AboutContactCTA.astro`

```html
{/* lines ~40, ~138 */}
transition-colors duration-200
```

---

## 5. CSS Transitions — FAQ Accordion

### `src/components/home/Faq.astro`

```html
{/* FAQ item wrapper — line 140 */}
transition-all duration-200

{/* toggle button — line 144 */}
transition   {/* Tailwind default, ~150ms */}

{/* chevron arrow icon — line 149 */}
transition-transform   {/* no duration, uses default */}
```

The chevron rotation is driven by JavaScript toggling a class. The `transition-transform` makes the rotation animate.

**To slow down accordion open/close:** change `duration-200` to `duration-300` on the item wrapper.

**To add a custom duration to the chevron:** add `duration-200` alongside `transition-transform`.

---

## 6. Keyframe Animations — Buttons

### `src/components/fundations/elements/GetAQuote.astro` and `GetAQuote.vue`

```css
/* lines 215–227 (Astro) / lines 206–218 (Vue) */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.5; }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

Activated by passing `pulse={true}` prop to the component.

**To change pulse speed:** edit `2s` — e.g. `1.5s` is faster, `3s` is slower.

**To change pulse depth:** edit the `50% { opacity: 0.5; }` value — `0.3` makes it more pronounced.

---

### `src/components/fundations/elements/CallButton.astro`

This component has three independent animation modes, activated via the `animation` prop:

```astro
<CallButton animation="pulse" />   {/* fades opacity */}
<CallButton animation="bounce" />  {/* bobs up and down */}
<CallButton animation="ring" />    {/* ripple glow ring */}
```

#### Pulse — `cb-pulse-kf`
```css
/* lines 176–182 */
@keyframes cb-pulse-kf {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.5; }
}
animation: cb-pulse-kf 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
```

**To change speed:** edit `2s`.

#### Bounce — `cb-bounce-kf`
```css
/* lines 185–191 */
@keyframes cb-bounce-kf {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-4px); }
}
animation: cb-bounce-kf 1.2s ease-in-out infinite;
```

**To change bounce height:** edit `-4px` (e.g. `-6px` for more travel).

**To change bounce speed:** edit `1.2s`.

#### Ring/Ripple — `cb-ring-kf`
```css
/* lines 194–201 */
@keyframes cb-ring-kf {
  0%   { box-shadow: 0 0 0 0 rgba(var(--primary-400), 0.6); }
  70%  { box-shadow: 0 0 0 10px rgba(var(--primary-400), 0); }
  100% { box-shadow: 0 0 0 0 rgba(var(--primary-400), 0); }
}
animation: cb-ring-kf 1.8s ease-out infinite;
```

**To change ring spread:** edit `10px` in the `70%` keyframe — larger value = wider ripple.

**To change ring colour opacity:** edit `0.6` in the `0%` keyframe.

**To change ring speed:** edit `1.8s`.

---

## 7. Keyframe Animations — Testimonial Cards

### `src/components/global/TestimonialsCard.astro`

```css
/* lines 104–108 */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: none; }
}
.fade-in-card {
  animation: fadeInUp 0.7s cubic-bezier(0.4, 2, 0.3, 1) both;
}
```

Cards fade in from 20px below when they enter the viewport.

**To change animation duration:** edit `0.7s`.

**To change slide distance:** edit `translateY(20px)` — `translateY(40px)` gives more travel.

**To change easing:** edit the `cubic-bezier(0.4, 2, 0.3, 1)` values. The second argument being `> 1` creates a slight overshoot/elastic effect. Use `ease-out` for a plain deceleration.

---

## 8. Vue Transitions — Sticky Call Button

### `src/components/global/StickyCallButton.vue`

The floating call button uses a Vue `<Transition>` component that controls its appear/disappear animation.

```html
<!-- lines 2–8 -->
<Transition
  enter-active-class="transition-all duration-300"
  enter-from-class="opacity-0 scale-75 translate-y-4"
  enter-to-class="opacity-100 scale-100 translate-y-0"
  leave-active-class="transition-all duration-200"
  leave-from-class="opacity-100 scale-100 translate-y-0"
  leave-to-class="opacity-0 scale-75 translate-y-4"
>
```

| Stage | Class | Effect |
|-------|-------|--------|
| Enter duration | `duration-300` | 300ms to appear |
| Enter start | `opacity-0 scale-75 translate-y-4` | Starts small, low, invisible |
| Enter end | `opacity-100 scale-100 translate-y-0` | Full size, in position |
| Leave duration | `duration-200` | 200ms to disappear (faster) |
| Leave end | `opacity-0 scale-75 translate-y-4` | Returns to start state |

**To change appear speed:** edit `duration-300` in `enter-active-class`.

**To change disappear speed:** edit `duration-200` in `leave-active-class`.

**To change starting scale:** edit `scale-75` — `scale-90` is a subtler pop-in.

**To change starting offset:** edit `translate-y-4` — `translate-y-8` means it slides up from further below.

**Scroll threshold** that triggers the button:
```js
// StickyCallButton.vue — line 39
const handleScroll = () => {
  showButton.value = window.scrollY > 300;  // change 300 to any px value
};
```

---

## 9. Scroll-Triggered Animations

### Animated number counter — `src/components/ui/AnimatedNumber.astro`

Counts a number from 0 to its target value when the element scrolls into view.

```js
/* lines 34–44 — IntersectionObserver setup */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) startAnimation();
    else resetAnimation();   // resets when element leaves viewport
  });
});
```

Duration is set via a data attribute on the element:
```html
<AnimatedNumber value={250} data-duration="1200" />
```

**To change count duration:** edit `data-duration` value in milliseconds (default `1200`).

**To disable reset on scroll out:** remove the `else resetAnimation()` block.

**Colour transition on the number:**
```css
/* line 55 */
transition: color 0.3s;
```

---

### Header scroll detection — `src/components/global/Header.vue`

```js
/* line 452 */
const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};
```

At 50px scroll, `scrolled` becomes `true`, which triggers the `transition-all duration-300` on the header element (see [Section 3](#3-css-transitions--navigation--header)).

---

## 10. Carousel Autoplay

### `src/components/home/Carousel.vue`

```js
/* line 10 */
import Autoplay from "embla-carousel-autoplay";

/* line 68 */
:plugins="[Autoplay({ delay: 3000 })]"
```

The carousel (testimonials) auto-advances every 3 seconds. The slide transition animation itself is handled internally by Embla.

**To change autoplay interval:** edit `delay: 3000` (value is in milliseconds).

**To disable autoplay:** remove the `:plugins` prop or pass an empty array.

**To change slide transition speed:** Embla's default transition is ~300ms. Override via:
```js
Autoplay({ delay: 3000, speed: 10 })  // higher = slower slide
```

---

## 11. Global Animation Settings

### Animation library — `src/styles/global.css`

```css
/* line 2 */
@import "tw-animate-css";
```

`tw-animate-css` (v1.3.7) is available globally and provides ready-to-use Tailwind animation classes. Currently used: `animate-pulse`. The full class list is available at the [tw-animate-css docs](https://github.com/jamiebuilds/tailwindcss-animate).

---

### Adding animation delays

None of the current animations use `delay-*`. To stagger animations across a list (e.g. service cards), add:

```html
<article class="... delay-100">...</article>
<article class="... delay-200">...</article>
```

Tailwind delay values: `delay-75`, `delay-100`, `delay-150`, `delay-200`, `delay-300`, `delay-500`, `delay-700`, `delay-1000`.

---

### Changing easing globally

All `transition-*` classes use Tailwind's default easing (`cubic-bezier(0.4, 0, 0.2, 1)` — equivalent to `ease-in-out`). To override on specific elements, add an easing class:

```html
ease-linear     /* constant speed */
ease-in         /* starts slow */
ease-out        /* ends slow */
ease-in-out     /* default */
```

---

### Disabling all transitions for testing

Add this to `src/styles/global.css` temporarily:

```css
*, *::before, *::after {
  transition: none !important;
  animation: none !important;
}
```

> Remove before deploying.
