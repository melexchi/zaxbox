

import { notFound } from 'next/navigation';

const blogPosts = {
  "my-first-blog-post": {
    title: "My First Blog Post",
    content: "This is the full content for my first blog post.",
  },
  "my-second-blog-post": {
    title: "My Second Blog Post",
    content: "This is the full content for my second blog post.",
  },
  "my-third-blog-post": {
    title: "My Third Blog Post",
    content: "This is the full content for my third blog post.",
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  if (!post) return notFound();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
