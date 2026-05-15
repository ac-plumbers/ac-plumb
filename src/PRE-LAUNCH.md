# Pre-Launch Checklist — acplumb.co.uk

---

## 🚨 Blockers (must fix before launch)

- [ ] **Fix robots.txt** — currently `Disallow: /` blocks ALL crawlers
  - File: `public/robots.txt`
  - Change `Disallow: /` → `Allow: /`

- [ ] **Fix Umami analytics domain** — wrong domain will prevent tracking
  - File: `src/components/fundations/scripts/Umami.astro` line 27
  - Change `data-domains='acplumbers.co.uk,www.acplumbers.co.uk'`
  - To `data-domains='acplumb.co.uk,www.acplumb.co.uk'`

---

## ⚠️ High Priority

- [ ] **Fix web manifest placeholder names** — shown when users add site to home screen
  - File: `public/site.webmanifest`
  - Change `"name": "MyWebSite"` → `"name": "AC Plumbers Ltd."`
  - Change `"short_name": "MySite"` → `"short_name": "AC Plumb"`

- [ ] **Add social links to footer** — social section exists but is empty
  - File: `src/components/global/Footer.astro` line 104–106
  - Add Instagram: `https://www.instagram.com/ac_plumbing_heating_bathrooms/`
  - Optionally add Checkatrade: `https://www.checkatrade.com/trades/ACPlumbingAndHeatingServices`

- [ ] **Delete `indexx.astro` duplicate page** — gets built and deployed as `/indexx/`
  - File: `src/pages/indexx.astro`

---

## 📋 Medium Priority (before or shortly after launch)

- [ ] **Add Google Business Profile URL to schema `sameAs` array**
  - File: `src/components/fundations/head/Schema.astro`
  - Add GBP URL once listing is claimed/verified

- [ ] **Verify site in Google Search Console**
  - Add `google-site-verification` meta tag to `src/components/fundations/head/BaseHead.astro`
  - Then submit sitemap: `https://acplumb.co.uk/sitemap-index.xml`

---

## 📊 Umami Analytics — Missing Events

### What's already tracked
| Event | Where |
|---|---|
| `lead_quote_click` | Hero, header CTA, 3× mid-page CTAs |
| `lead_call_click` | Mobile menu only ⚠️ |
| `lead_whatsapp_click` | Header + mobile menu (4 spots) |
| `lead_form_submit` | `FormHome.astro` only ⚠️ |

### High priority gaps to fix

- [ ] **Sticky call button — no tracking at all** (highest-traffic conversion element)
  - File: `src/components/global/StickyCallButton.vue`
  - Add: `data-umami-event="lead_call_click"` + `data-umami-event-placement="sticky_button"`

- [ ] **`CallButton.astro` reusable component — no tracking**
  - File: `src/components/fundations/elements/CallButton.astro`
  - Add: `data-umami-event="lead_call_click"` + `data-umami-event-placement="inline_cta"`
  - This will automatically cover all pages that use `<CallButton />`

- [ ] **Contact page form submit — not tracked**
  - File: `src/components/forms/FormContact.astro`
  - Add: `data-umami-event="lead_form_submit"` + `data-umami-event-placement="contact_page"` to the submit button

- [ ] **Phone links in contact/service areas — not tracked**
  - Files: `src/components/Contact.astro`, `src/components/contact/ContactBlock.astro`, `src/components/services/ServiceCallToAction.astro`
  - Add: `data-umami-event="lead_call_click"` with appropriate placement per file

### Low priority gaps (post-launch)

- [ ] External review link clicks (Checkatrade, Google)
  - File: `src/components/home/Testimonials.astro`
  - Add: `data-umami-event="review_link_click"`

- [ ] FAQ accordion open/close
  - File: `src/components/home/Faq.astro`
  - Requires `window.umami.track(...)` call in Vue/JS — not a simple attribute

---

## ℹ️ Low Priority (post-launch)

- [ ] **Run `npm audit fix`** — 16 vulnerabilities found (4 high, mostly in netlify-cli dev tooling)
  - Upgrade Astro past 6.1.10 to patch GHSA-xr5h-phrj-8vxv (low risk on static output)

- [ ] **Postcode field in QuoteForm** — collected but not used
  - File: `src/components/quote/QuoteForm.vue`

---

## Verification Steps

1. `robots.txt` — visit `https://acplumb.co.uk/robots.txt` and confirm `Allow: /`
2. Umami — deploy to staging, open DevTools Network, confirm request fires to `cloud.umami.is`
3. `indexx.astro` — run `npm run build` locally, confirm no `/indexx/` in `dist/`
4. Web manifest — run Lighthouse PWA audit, confirm correct app name
5. GSC — submit sitemap and confirm 0 crawl errors after indexing begins
