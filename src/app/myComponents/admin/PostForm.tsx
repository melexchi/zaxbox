'use client';

import { useState } from "react";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";

const TiptapEditor = dynamic(() => import("@/components/TiptapEditor"), {
  ssr: false,
});

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("<p></p>");
  const [image, setImage] = useState("");
  const [published, setPublished] = useState(false);
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setTitle("");
    setContent("<p></p>");
    setImage("");
    setPublished(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          image: image.trim() || null,
          published,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Post Created Successfully");
        resetForm();
      } else {
        toast.error(data.error || "Error creating post");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded max-w-xl mx-auto">
      <h2 className="text-xl font-semibold">Create New Post</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 border rounded"
        required
      />

      <TiptapEditor content={content} onChange={setContent} />

      <input
        type="url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Thumbnail image URL (optional)"
        className="w-full p-2 border rounded"
      />

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
        />
        <span>Publish immediately</span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className={`px-4 py-2 text-white rounded cursor-pointer${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#E1C771] hover:bg-black"
        }`}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
