import { getBlogPosts } from '@/sanity/sanity.query';
import BlogCard from '../blog';
import { PostType } from '@/types';

interface BlogPost {
   posts: PostType[];
  // Add other properties as needed
}
export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
       
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
        {posts.map((post: PostType) => (
          <BlogCard key={post._id} posts={posts} />
        ))}
      </div>
    </div>
  );
}

