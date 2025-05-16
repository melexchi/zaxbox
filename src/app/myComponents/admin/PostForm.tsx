'use client';

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Loader2, X, Upload, Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const TiptapEditor = dynamic(() => import("@/components/TiptapEditor"), {
  ssr: false,
});




type Category = {
  id: string;
  name: string;
};

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("<p></p>");
  const [image, setImage] = useState("");
  const [published, setPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [multipleCategories, setMultipleCategories] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [fetchingCategories, setFetchingCategories] = useState(false);

 
  const router = useRouter()


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setFetchingCategories(true);

        const response = await fetch('/api/categories');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
        toast.error("Error loading categories");
      } finally {
        setFetchingCategories(false);

      }
    };
    
    fetchCategories();
  }, []);






  const resetForm = () => {
    setTitle("");
    setContent("<p></p>");
    setImage("");
    setPublished(false);
    setSelectedCategories([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedCategories.length === 0) {
      toast.error("Please select at least one category");
      return;
    }

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
          categoryIds: selectedCategories,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Post Created Successfully");
        resetForm();
        router.push("/admin");
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

  const handleCategorySelect = (categoryId: string) => {
    if (multipleCategories) {
      
      setSelectedCategories(current => 
        current.includes(categoryId)
          ? current.filter(id => id !== categoryId)
          : [...current, categoryId]
      );
    } else {
      
      setSelectedCategories([categoryId]);
      setCategoriesOpen(false);
    }
  };

  const removeCategorySelection = (categoryId: string) => {
    setSelectedCategories(current => current.filter(id => id !== categoryId));
  };

  
  const toggleMultipleCategories = (checked: boolean) => {
    setMultipleCategories(checked);

    if (!checked && selectedCategories.length > 1) {
      setSelectedCategories([selectedCategories[0]]);
    }
  };

  const getCategoryNameById = (id: string) => {
    return categories.find(category => category.id === id)?.name || "";
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
            <div className="flex justify-between items-center">
              <Label>Categories</Label>
              <div className="flex items-center space-x-2">
                <Label htmlFor="multi-category" className="text-sm text-gray-500">
                  {multipleCategories ? "Multiple Categories" : "Single Category"}
                </Label>
                <Switch
                  id="multi-category"
                  checked={multipleCategories}
                  onCheckedChange={toggleMultipleCategories}
                />
              </div>
            </div>
            
            <Popover open={categoriesOpen} onOpenChange={setCategoriesOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={categoriesOpen}
                    className="w-full justify-between"
                  >
                    {selectedCategories.length > 0 
                      ? (multipleCategories
                          ? `${selectedCategories.length} categories selected`
                          : getCategoryNameById(selectedCategories[0]))
                      : "Select category..."}
                    {fetchingCategories && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0 text-black bg-white" align="start">
                  <Command className="rounded-lg border shadow-md text-black bg-white">
                    <CommandInput placeholder="Search category..." className="h-9 text-black" />
                    <CommandEmpty className="text-black">No category found</CommandEmpty>
                    <CommandGroup className="bg-white">
                      <ScrollArea className="h-60 w-full rounded-md">
                        {categories.map((category) => (
                          <CommandItem
                            key={category.id}
                            value={category.name}
                            onSelect={() => handleCategorySelect(category.id)}
                            className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4 text-gray-900",
                                selectedCategories.includes(category.id) ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {category.name}
                          </CommandItem>
                        ))}
                      </ScrollArea>
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            
            {selectedCategories.length > 0 && multipleCategories && (
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedCategories.map(categoryId => (
                  <Badge 
                    key={categoryId} 
                    variant="secondary"
                    className="pr-1"
                  >
                    {getCategoryNameById(categoryId)}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-5 w-5 p-0 ml-1"
                      onClick={() => removeCategorySelection(categoryId)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
            )}
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
            disabled={loading || selectedCategories.length === 0}
            className={loading || selectedCategories.length === 0 ? "bg-gray-400" : "bg-[#E1C771] hover:bg-black"}
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