'use client';

import { useState } from "react";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Loader2, X, Upload } from "lucide-react";

const TiptapEditor = dynamic(() => import("@/components/TiptapEditor"), {
  ssr: false,
});

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("<p></p>");
  const [image, setImage] = useState("");
  const [published, setPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

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

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setUploading(true);
    setUploadProgress(10);

    const formData = new FormData();
    formData.append("image", file);

    try {
      
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 100);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      clearInterval(progressInterval);
      setUploadProgress(100);
      
      if (res.ok && data.url) {
        setImage(data.url);
        toast.success("Image uploaded successfully");
      } else {
        toast.error(data.error || "Image upload failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Image upload error");
    } finally {
      setTimeout(() => {
        setUploading(false);
        setUploadProgress(0);
      }, 500);
      
      e.target.value = "";
    }
  };

  const removeImage = () => {
    setImage("");
  };

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>Create New Post</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Post Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="editor">Content</Label>
            <div className="min-h-[200px] border rounded-md overflow-hidden">
              <TiptapEditor content={content} onChange={setContent} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Thumbnail Image (optional)</Label>
            
            {!image && !uploading ? (
              <div className="flex items-center justify-center w-full">
                <Label 
                  htmlFor="dropzone-file" 
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-2 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
                  </div>
                  <Input
                    id="dropzone-file"
                    type="file"
                    accept="image/*"
                    onChange={uploadImage}
                    disabled={uploading}
                    className="hidden"
                  />
                </Label>
              </div>
            ) : null}
            
            {uploading && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Uploading image...</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>
            )}
            
            {image && !uploading && (
              <div className="relative">
                <img 
                  src={image} 
                  alt="Uploaded" 
                  className="max-h-48 rounded-md object-contain bg-gray-50 p-2 w-full"
                />
                <Button 
                  type="button" 
                  onClick={removeImage}
                  variant="outline" 
                  size="icon" 
                  className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox 
              id="published" 
              checked={published}
              onCheckedChange={(checked) => setPublished(checked as boolean)}
            />
            <Label htmlFor="published" className="cursor-pointer">Publish immediately</Label>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className={loading ? "bg-gray-400" : "bg-[#E1C771] hover:bg-black"}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}