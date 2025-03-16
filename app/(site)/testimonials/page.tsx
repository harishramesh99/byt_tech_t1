// app/(site)/reviews/page.tsx
import { reviewsQuery } from '@/sanity/sanity.query';
import { Review } from '@/types';
import ReviewCarousel from '@/app/(site)/testimonials/ReviewCarousel';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Reviews',
  description: 'See what our clients say about our services'
};

export const revalidate = 3600; // Revalidate every hour

export default async function ReviewsPage() {
  const reviews: Review[] = await reviewsQuery();

  // Check if we have reviews
  if (!reviews?.length) {
    return (
      <div className="min-h-[700px] bg-gray-950 py-24 flex items-center justify-center">
        <p className="text-gray-400">No reviews available yet.</p>
      </div>
    );
  }

  return (
    <ReviewCarousel 
      reviews={reviews} 
      googleReviewUrl={process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || '#'}
    />
  );
}