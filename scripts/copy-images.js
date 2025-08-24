import fs from "fs-extra";

// Source and destination folders
const srcDir = "src/images/services";
const destDir = "public/images/services";

// Copy all images recursively, overwriting existing files
fs.copySync(srcDir, destDir, { overwrite: true });

console.log(`✅ Images copied from ${srcDir} to ${destDir}`);
