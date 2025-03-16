// components/BlogCarousel.tsx
'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PostType } from '@/types';

export default function BlogCarousel({ posts }: { posts: PostType[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((current) => 
      current === posts.length - 1 ? 0 : current + 1
    );
  }, [posts.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((current) => 
      current === 0 ? posts.length - 1 : current - 1
    );
  }, [posts.length]);

  return (
    <div className="relative w-full">
      
      {/* Main Slide */}
      <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden">
        <Link href={`/blog/${posts[currentSlide].slug}`}>
          <div className="relative h-full group">
            <Image
              src={posts[currentSlide].mainImage.image}
              alt={posts[currentSlide].mainImage.alt || posts[currentSlide].title}
              fill
              priority
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="text-sm text-gray-300 mb-2">
                {new Date(posts[currentSlide].publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {posts[currentSlide].title}
              </h3>
              <p className="text-gray-200 line-clamp-2">
                {posts[currentSlide].excerpt}
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}