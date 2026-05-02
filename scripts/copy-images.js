// Runs automatically as the "prebuild" step before every `astro build` (local and Netlify).
// See IMAGES.md for full documentation on the image pipeline.
//
// What this script does:
//   1. Copies src/images/services/ → public/images/services/  (source of truth)
//   2. Generates WebP 400w variants → public/images/services/optimized/
//      These optimized variants are used ONLY by ServiceHeroSection.astro for hero backgrounds.
//      All other components (galleries, listings, about page) use the originals from step 1.

import fs from "fs-extra";
import sharp from "sharp";
import path from "path";

// src/images/services/ is the source of truth — never edit public/ directly
const srcDir = "src/images/services";
const destDir = "public/images/services";
const optimizedDir = "public/images/services/optimized";

// Step 1: copy originals to public/ (overwrite so deletions in src/ are reflected)
fs.copySync(srcDir, destDir, { overwrite: true });
console.log(`✅ Images copied from ${srcDir} to ${destDir}`);

// Step 2: generate WebP 400w variants for use by ServiceHeroSection.astro
await fs.ensureDir(optimizedDir);

const files = await fs.readdir(destDir);
const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

console.log(`\n🔄 Optimizing ${imageFiles.length} images...`);

for (const file of imageFiles) {
  const inputPath = path.join(destDir, file);
  // Output pattern: gas-boiler-installation.jpeg → gas-boiler-installation-400w.webp
  const outputFileName = file.replace(/\.(jpg|jpeg|png)$/i, "-400w.webp");
  const outputPath = path.join(optimizedDir, outputFileName);

  try {
    await sharp(inputPath)
      .resize(400, null, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`✅ ${outputFileName}`);
  } catch (error) {
    console.error(`❌ Failed: ${file} - ${error.message}`);
  }
}

console.log("\n✨ All done!");
