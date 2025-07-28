import reviewsData from '../data/reviews.json';

console.log('Reviews data loaded:', reviewsData);
console.log('Number of reviews:', reviewsData.reviews?.length || 0);

if (reviewsData.reviews && reviewsData.reviews.length > 0) {
  console.log('First review:', reviewsData.reviews[0]);
  console.log('✅ JSON import successful!');
} else {
  console.log('❌ No reviews found in JSON data');
}
