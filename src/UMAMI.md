# Umami Analytics — Event Reference

**Script:** `src/components/fundations/scripts/Umami.astro`
**Website ID:** `abf1bd09-1500-4532-88c6-474adb412c11`
**Dashboard:** https://cloud.umami.is
**Domains:** `acplumb.co.uk`, `www.acplumb.co.uk`

---

## Event Naming Convention

| Prefix | Meaning |
|---|---|
| `lead_*` | Conversion actions (calls, forms, emails) |

All events use `data-umami-event` on the HTML element and `data-umami-event-placement` to identify where on the site the action occurred.

---

## Tracked Events

### `lead_call_click`
Fires when a user clicks any phone `tel:` link.

| Placement | Element | File |
|---|---|---|
| `header` | Desktop header call button | `src/components/global/Header.astro` |
| `mobile-menu` | Mobile menu phone link | `src/components/global/headerBits/HeaderMobileMenu.vue` |
| `sticky_button` | Floating sticky call button | `src/components/global/StickyCallButton.vue` |
| `inline_cta` | `<CallButton>` reusable component | `src/components/fundations/elements/CallButton.astro` |
| `service_cta` | "Call Now" on service page CTA section | `src/components/services/ServiceCallToAction.astro` |
| `contact_block` | Phone link in contact/legal block | `src/components/contact/ContactBlock.astro` |
| `coming_soon` | Phone link on coming soon page | `src/pages/index.astro` |

---

### `lead_whatsapp_click`
Fires when a user clicks the WhatsApp link.

| Placement | Element | File |
|---|---|---|
| `header` | Desktop header WhatsApp button | `src/components/global/Header.astro` |
| `mobile-menu` | Mobile menu WhatsApp button | `src/components/global/headerBits/HeaderMobileMenu.vue` |
| `header` | Desktop CTA area | `src/components/global/headerBits/HeaderDesktopCta.vue` |

---

### `lead_quote_click`
Fires when a user clicks a "Get a Free Quote" CTA button.

| Placement | Element | File |
|---|---|---|
| `home_hero` | Hero section CTA | `src/components/home/Hero.astro` |
| `home_hero` | Hero carousel CTA | `src/components/home/HeroNew.astro` |
| `header` | Desktop header quote button | `src/components/global/headerBits/HeaderDesktopCta.vue` |
| `cta_center_page` | Mid-page CTA block | `src/components/ContactSupportCTA.astro` |
| `cta_center_page` | Post-testimonials CTA | `src/components/home/ServiceReviewCta.astro` |
| `reviews_section` | Testimonials section CTA | `src/components/home/Testimonials.astro` |

---

### `lead_form_submit`
Fires when a user submits a contact or notification form.

| Placement | Element | File |
|---|---|---|
| `contact_section` | Home page contact form | `src/components/forms/FormHome.astro` |
| `contact_page` | Contact page form | `src/components/forms/FormContact.astro` |
| `launch_notification` | Coming soon email notify form | `src/pages/index.astro` |

---

### `lead_email_click`
Fires when a user clicks a `mailto:` email link.

| Placement | Element | File |
|---|---|---|
| `contact_block` | Email link in contact/legal block | `src/components/contact/ContactBlock.astro` |
| `coming_soon` | Email link on coming soon page | `src/pages/index.astro` |

---

## Not Yet Tracked

| Interaction | Suggested Event | Priority |
|---|---|---|
| Checkatrade / Google review links | `review_link_click` | Low |
| FAQ accordion open/close | `faq_open` | Low |

> FAQ tracking requires `window.umami.track()` in JavaScript — cannot use a simple `data-umami-event` attribute on a non-clickable element.
