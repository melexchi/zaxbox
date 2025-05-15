"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { useEffect } from "react";

export default function TiptapEditor({
  content,
  onChange,
}: {
  content: string;
  onChange: (value: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        inline: false,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  const addImageByUrl = () => {
    const url = window.prompt("Enter image URL");
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  };

  const addImageFromLocal = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (res.ok && data.url) {
      editor?.chain().focus().setImage({ src: data.url }).run();
    } else {
      alert(data.error || "Failed to upload image");
    }

    event.target.value = ""; // reset input
  };

  return (
    <div className="border rounded p-2">
      <div className="mb-2 flex gap-2 flex-wrap">
        <button
          type="button"
          className="bg-gray-200 px-2 py-1 rounded"
          onClick={() => editor?.chain().focus().toggleBold().run()}
        >
          Bold
        </button>
        <button
          type="button"
          className="bg-gray-200 px-2 py-1 rounded"
          onClick={() => editor?.chain().focus().toggleItalic().run()}
        >
          Italic
        </button>
        <button
          type="button"
          className="bg-gray-200 px-2 py-1 rounded"
          onClick={addImageByUrl}
        >
          Add Image by URL
        </button>

        <label className="bg-gray-200 px-2 py-1 rounded cursor-pointer">
          Upload Image
          <input
            type="file"
            accept="image/*"
            onChange={addImageFromLocal}
            className="hidden"
          />
        </label>
      </div>

      <EditorContent editor={editor} className="min-h-[150px]" />
    </div>
  );
}
