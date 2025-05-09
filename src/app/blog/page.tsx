

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
    <> 
    <h1 className="pt-2 flex justify-center  md:justify-start px-2 xl:px-20">Blogs</h1>
    <div className="w-auto px-2 xl:px-20 h-auto mb-5 border-2 border-t-0 border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-5">
      
      {blogPosts.map((blog) => (
        <div key={blog.slug} className=" pt-5 w-full grid-cols-subgrid"> 
        <div  className="pt-5 w-full h-[400px] bg-white shadow-md rounded-lg p-4 mb-4 ">
          <h2>{blog.title}</h2>
          <p>{blog.excerpt}</p>
          <a href={`/blog/${blog.slug}`}>Read more</a>
        </div>
        </div>
      ))}
    </div>






    </>
  );
}2