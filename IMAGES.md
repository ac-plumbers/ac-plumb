# Image Reference — AC Plumbers

A complete map of every image folder in the project: where images live, how they're processed, which components use which folder, and how to add new ones.

---

## Table of Contents

1. [Folder Structure](#1-folder-structure)
2. [Build Pipeline](#2-build-pipeline)
3. [Which Components Use Which Folder](#3-which-components-use-which-folder)
4. [How to Add a New Service Image](#4-how-to-add-a-new-service-image)
5. [Known Issues & Limitations](#5-known-issues--limitations)

---

## 1. Folder Structure

| Folder | Files | Size | Role |
|--------|-------|------|------|
| `src/images/services/` | 39 | ~15 MB | **Source of truth** — edit images here, never in `public/` |
| `src/images/logo/` | 17 | ~668 KB | Logo source files |
| `src/images/brands/` | 18 | ~420 KB | Brand logos and SVG variants |
| `src/images/antonio/` | 3 | ~3.7 MB | Founder photos |
| `src/images/team/` | 2 | ~1.7 MB | Team photos |
| `src/images/lavori/` | 41 | ~10 MB | Portfolio photos — not yet deployed (no copy step) |
| `src/images/areas/` | 0 | — | Empty placeholder for area-specific images |
| `public/images/services/` | 53 | ~20 MB | **Auto-generated at build** — do not edit directly |
| `public/images/services/optimized/` | 37 | ~776 KB | **Auto-generated at build** — WebP 400w variants |
| `public/images/logo/` | 16 | ~424 KB | Manually kept in sync with `src/images/logo/` |

> **Rule:** Never add or edit images in `public/images/services/`. Always work from `src/images/services/` — the build script copies them across automatically.

---

## 2. Build Pipeline

The `prebuild` script (`scripts/copy-images.js`) runs automatically before every `astro build`, both locally and on Netlify.

```
npm run build
  ↓ triggers prebuild first
  node scripts/copy-images.js
```

### Step 1 — Copy originals

```js
// scripts/copy-images.js — line 11
fs.copySync(srcDir, destDir, { overwrite: true });
// src/images/services/ → public/images/services/
```

All JPEG, PNG, and other files are copied as-is. The `public/` copy is what Netlify deploys and what the browser downloads.

### Step 2 — Generate optimized WebP variants

```js
// scripts/copy-images.js — lines 23–41
await sharp(inputPath)
  .resize(400, null, { fit: 'inside', withoutEnlargement: true })
  .webp({ quality: 80 })
  .toFile(outputPath);
// → public/images/services/optimized/{name}-400w.webp
```

Each original image gets a 400px-wide WebP version at 80% quality. Output naming pattern:

```
gas-boiler-installation.jpeg  →  gas-boiler-installation-400w.webp
```

> Note: only `.jpg`, `.jpeg`, and `.png` files are optimized. `.webp` files already in `src/` are copied to `public/` but do not get a second optimized variant generated.

### Full flow

```
src/images/services/
  gas-boiler-installation.jpeg        ← edit this
        ↓ copy-images.js (prebuild)
public/images/services/
  gas-boiler-installation.jpeg        ← served as fallback / used by most components
  optimized/
    gas-boiler-installation-400w.webp ← served as WebP source by ServiceHeroSection only
```

---

## 3. Which Components Use Which Folder

| Component | Path referenced | Optimized? | Method |
|-----------|----------------|------------|--------|
| `src/components/services/ServiceHeroSection.astro` | `/images/services/optimized/` (WebP 400w) | ✅ | Manual path rewrite at build time |
| `src/components/home/HeroNew.astro` | `@/images/services/` | ✅ | Astro `<Image>` component |
| `src/components/about/AboutFounderStory.astro` | `@/images/services/` | ✅ | Astro `<Image>` component |
| `src/components/services/ServicesHero.astro` | `@/images/services/` | ✅ | Astro `<Image>` component |
| `src/components/about/AboutTeam.astro` | `/images/services/` (hardcoded) | ❌ | Raw `<img>` tag |
| `src/components/about/AboutContactCTA.astro` | `/images/services/` (hardcoded) | ❌ | Raw `<img>` tag |
| Service page galleries (frontmatter `gallery:`) | `/images/services/` | ❌ | Raw path from markdown |
| Service card listings (frontmatter `image:`) | `/images/services/` | ❌ | Raw path from markdown |

### How `ServiceHeroSection.astro` picks the optimized version

```astro
<!-- src/components/services/ServiceHeroSection.astro — lines 33–35 -->
<source
  srcset={image
    .replace('/images/services/', '/images/services/optimized/')
    .replace(/\.(jpg|jpeg|png)$/i, '-400w.webp')}
  type='image/webp'
/>
<img src={image} ... />  <!-- fallback: original image -->
```

The `<picture>` element tries the WebP variant first; if the browser doesn't support WebP it falls back to the original. This transformation only happens inside this one component.

---

## 4. How to Add a New Service Image

1. **Add the source file** to `src/images/services/`:
   ```
   src/images/services/my-new-service.jpeg
   ```
   Use a descriptive, lowercase, hyphenated filename with location keywords where relevant (e.g. `vaillant-boiler-installation-brighton.jpeg`).

2. **Reference it in the service markdown** frontmatter:
   ```yaml
   image: "/images/services/my-new-service.jpeg"
   imageHero: "/images/services/my-new-service.jpeg"
   ```

3. **Run the build** (locally or push to trigger Netlify):
   ```bash
   npm run build
   ```
   The script copies the file to `public/images/services/` and generates `public/images/services/optimized/my-new-service-400w.webp` automatically.

4. **For gallery images**, add to the `gallery:` array in the same markdown:
   ```yaml
   gallery:
     - src: "/images/services/my-new-service.jpeg"
       alt: "Descriptive alt text with keywords"
   ```

> Do not add images directly to `public/images/services/` — they will be overwritten on the next build.

---

## 5. Known Issues & Limitations

### Orphan files in `public/images/services/`
There are 14 files in `public/images/services/` that do not exist in `src/images/services/`. These were added directly to `public/` and bypass the copy script. They will not be overwritten on build, but they're also not source-of-truth backed.

### Gallery and listing images are not optimized
Images referenced in markdown frontmatter (`image:`, `imageHero:`, `gallery:`) are served as raw JPEG/PNG. Only the hero background in `ServiceHeroSection.astro` uses the WebP variant. Gallery images are a candidate for future optimization.

### Broken filename in `optimized/`
`boiler-pcb-control-board-fault-diagnosis-brighton-ac-plumbers.jpg-400w.webp` — the source file had `.jpg` embedded in the middle of its name. The script's regex only strips the final extension, producing a malformed output name. Fix: rename the source file in `src/images/services/` to remove the embedded `.jpg`.

### `src/images/lavori/` is unreachable
41 portfolio photos (10 MB) live in `src/images/lavori/` but the copy script only processes `src/images/services/`. They are never deployed and cannot be served. Either wire them up with a gallery page or delete them.

### Logo duplication
`src/images/logo/` and `public/images/logo/` both carry the same logo files. Unlike service images, there is no script keeping them in sync — the `public/` copies are manual. Any logo update must be applied in both places until a copy step is added.
