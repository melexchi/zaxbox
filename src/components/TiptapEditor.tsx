"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { useEffect } from "react";
import Link from "@tiptap/extension-link";

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
      Link.configure({ openOnClick: false }),
      
    ],
    content:`
        <p>Click the button to open the link popover.</p>
        <p><a href="https://www.tiptap.dev">Tiptap</a></p>
        `,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    
    immediatelyRender: false,
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

  return (
    <div className="border rounded p-2 flex flex-col h-full">
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
      </div>

     <EditorContent
        editor={editor}
        onClick={() => editor?.commands.focus()} 
        className="flex-grow border rounded p-4 min-h-[200px] max-h-[400px] overflow-auto  cursor-text border-none shadow-none"
        style={{ whiteSpace: "pre-wrap" }}
        
/>
    </div>
  );
}
