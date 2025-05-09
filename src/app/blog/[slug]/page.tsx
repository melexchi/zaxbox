

import Image from 'next/image';
import { notFound } from 'next/navigation';

const blogPosts = {
  "my-first-blog-post": {
    title: "My First Blog Post",
    content: "This is the full content for my first blog post.",
     image:'https://placehold.co/600x400'
  },
  "my-second-blog-post": {
    title: "My Second Blog Post",
    content: "This is the full content for my second blog post.",
     image:'https://placehold.co/600x400'
  },
  "my-third-blog-post": {
    title: "My Third Blog Post",
    content: "This is the full content for my third blog post.",
     image:'https://placehold.co/600x400'
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  if (!post) return notFound();

  return (
    <div>
        <Image
        src={post.image}
        alt={post.title}
        width={600} 
        height={400}
        />

<img src="https://placehold.co/600x400" alt="Test image" />

      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
