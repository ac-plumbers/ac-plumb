import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read and parse the reviews JSON file
const reviewsPath = join(__dirname, 'reviews.json');
const reviewsData = JSON.parse(readFileSync(reviewsPath, 'utf8'));

export default reviewsData;
