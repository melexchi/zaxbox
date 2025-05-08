

const blogPosts = [
  {
    title: "My First Blog Post",
    slug: "my-first-blog-post",
    excerpt: "This is the excerpt for my first blog post.",
  },
  {
    title: "My Second Blog Post",
    slug: "my-second-blog-post",
    excerpt: "This is the excerpt for my second blog post.",
  },
  {
    title: "My Third Blog Post",
    slug: "my-third-blog-post",
    excerpt: "This is the excerpt for my third blog post.",
  },
];

export default function BlogPage() {
  return (
    <div className="w-full px-2 xl:px-10 h-auto mb-5">
      <h1>Blogs</h1>
      {blogPosts.map((blog) => (
        <div key={blog.slug} className="blog-post flex ">
          <h2>{blog.title}</h2>
          <p>{blog.excerpt}</p>
          <a href={`/blog/${blog.slug}`}>Read more</a>
        </div>
      ))}
    </div>
  );
}2