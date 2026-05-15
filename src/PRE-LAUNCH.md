# Pre-Launch Checklist — acplumb.co.uk

---

## 🚨 Blockers (must fix before launch)

- [ ] **Fix robots.txt** — currently `Disallow: /` blocks ALL crawlers
  - File: `public/robots.txt`
  - Change `Disallow: /` → `Allow: /`

---

## ⚠️ High Priority

- [ ] **Add social links to footer** — social section exists but is empty
  - File: `src/components/global/Footer.astro` line 104–106
  - Add Instagram: `https://www.instagram.com/ac_plumbing_heating_bathrooms/`
  - Optionally add Checkatrade: `https://www.checkatrade.com/trades/ACPlumbingAndHeatingServices`

- [ ] **Delete `indexx.astro` duplicate page** — gets built and deployed as `/indexx/`
  - File: `src/pages/indexx.astro`

---

---

## Verification Steps

1. `robots.txt` — visit `https://acplumb.co.uk/robots.txt` and confirm `Allow: /`

2. `indexx.astro` — run `npm run build` locally, confirm no `/indexx/` in `dist/`
3. Web manifest — run Lighthouse PWA audit, confirm correct app name
4. GSC — submit sitemap and confirm 0 crawl errors after indexing begins
