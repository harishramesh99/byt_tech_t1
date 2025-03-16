// components/BlogPost.tsx
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { PostType } from '@/types';

interface BlogPostProps {
    post: PostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <Link 
        href="/blog" 
        className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-8"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Blog
      </Link>

      {/* Hero Section */}
      {post.mainImage && (
        <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden mb-8">
          <Image
            src={post.mainImage.image}
            alt={post.mainImage.alt || post.title}
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Post Header */}
      <header className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          {/* Date */}
          <time className="text-gray-400">
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-xl text-gray-300 leading-relaxed">
            {post.excerpt}
          </p>
        )}
      </header>

      {/* Main Content */}
      <div className="prose prose-lg prose-invert max-w-none">
        <PortableText 
          value={post.body}
          components={{
            types: {
              image: ({ value }) => (
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={value.asset.url}
                    alt={value.alt || ''}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ),
            },
          }}
        />
      </div>

      {/* Share Section */}
      
    </article>
  );
}