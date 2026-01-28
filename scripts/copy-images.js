import fs from "fs-extra";
import sharp from "sharp";
import path from "path";

// Source and destination folders
const srcDir = "src/images/services";
const destDir = "public/images/services";
const optimizedDir = "public/images/services/optimized";

// Copy all images recursively, overwriting existing files
fs.copySync(srcDir, destDir, { overwrite: true });
console.log(`✅ Images copied from ${srcDir} to ${destDir}`);

// Ensure optimized directory exists
await fs.ensureDir(optimizedDir);

// Get all image files from destination
const files = await fs.readdir(destDir);
const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

console.log(`\n🔄 Optimizing ${imageFiles.length} images...`);

for (const file of imageFiles) {
  const inputPath = path.join(destDir, file);
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
