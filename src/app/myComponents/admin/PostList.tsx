"use client"

import { title } from "process";
import { useEffect, useState } from "react"
import { toast } from "react-toastify";


interface Post {
  id: number;
  title: string;
  content?: string;
  image?: string;
  published: boolean;
  categories: Category[];
  createdAt: string;
}


interface Category{
    id:number
    name:string
}


export default function Postlist(){
    const [posts, setPosts]=  useState<Post[]>([]);
    const [categories, setCategories] = useState<Category[]>([])
    const [editingPost, setEditingPost] = useState<Post | null>(null);
    const [formData, setFormData] = useState<Partial<Post> & { imageFile?: File }>({
    title: "",
    content: "",
    published: false,
    categories: [],
    });


    const [newCategoryName, setNewCategoryName]= useState("");
    const [showCategoryModal, setShowCategoryModal]=useState(false)






    const fetchPosts = async ()=>{
        try{
            const [postsRes, categoriesRes]= await Promise.all([
                fetch("/api/posts"),
                fetch("/api/categories")
            ])
            const postsData = await postsRes.json()
            const categoriesData = await categoriesRes.json()


            setPosts(postsData)
            setCategories(categoriesData)

        }catch(err){
            toast.error("Failed to fetch post")
        }
    };


    const handleEditClick=(post:Post)=>{
        setEditingPost(post);
        setFormData({
            title:post.title,
            published: post.published,
            categories:post.categories
        });
    };


    const handleInputChange=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        const inputType = target.type;
        const checked = inputType === 'checkbox' && target instanceof HTMLInputElement ? target.checked : false;

        setFormData(prev=>({
            ...prev,
            [name]: inputType === 'checkbox' ? checked : value
        }))
    }


    // to toggle category

    const toggleCategory=(category:Category)=>{

        setFormData(prev =>{
            const currentCategories = prev.categories ||[]
            const isSelected = currentCategories.some(cat=> cat.id === category.id)

            return{
                ...prev,
                categories:isSelected? currentCategories.filter(cat=>cat.id !== category.id):[...currentCategories, category]
            }
        })
    }



    const createCategory = async () => {
    if (!newCategoryName.trim()) return

    try {
      const res = await fetch("/api/categories", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCategoryName })
      })

      if (!res.ok) throw new Error("Failed to create category")

      const newCategory = await res.json()
      setCategories(prev => [...prev, newCategory])
      setNewCategoryName("") 
      setShowCategoryModal(false) 
      toast.success("Category created successfully")
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Error creating category")
    }
  }

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingPost) return

    try {
      const form = new FormData()
      form.append("title", formData.title || "")
      form.append("content", formData.content || "")
      form.append("published", String(formData.published))
      form.append("categoryIds", JSON.stringify(formData.categories?.map((cat) => cat.id) || []))
      form.append("updatedAt", new Date().toISOString())

      if (formData.imageFile) {
        form.append("image", formData.imageFile)
      }

      const updateRes = await fetch(`/api/posts/${editingPost.id}`, {
        method: "PATCH",
        body: form,
      })

      if (!updateRes.ok) {
        throw new Error((await updateRes.json()).error || "Update failed")
      }

      toast.success("Post updated successfully")
      setEditingPost(null)
      fetchPosts()
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Update failed")
    }
  }

  const deletePost = async (id: number) => {
    if (confirm("Are you sure?")) {
      await fetch(`/api/posts/${id}`, { method: "DELETE" })
      fetchPosts()
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-semibold">All Posts</h2>
      
      {/* Category Management */}
      <div className="mb-6 flex justify-end">
        <button 
          onClick={() => setShowCategoryModal(true)}
          className="px-4 py-2 bg-[#E1C771] text-white rounded cursor-pointer text-sm"
        >
          New Category
        </button>
      </div>

      {/* Category Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="font-bold text-lg mb-4">Create New Category</h3>
            <div className="flex space-x-2">
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="Category name"
                className="flex-1 p-2 border rounded"
                onKeyDown={(e) => e.key === 'Enter' && createCategory()} 
              />
              <button
                onClick={createCategory}
                className="px-4 py-2 bg-[#E1C771] text-white rounded cursor-pointer"
              >
                Add
              </button>
              <button
                onClick={() => {
                  setNewCategoryName("") 
                  setShowCategoryModal(false) 
                }}
                className="px-4 py-2 border rounded cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Post Modal */}
      {editingPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="font-bold text-lg mb-4">Edit Post</h3>
            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4">
                <label className="block mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  name="published"
                  id="published"
                  checked={formData.published || false}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label htmlFor="published">Published</label>
              </div>
              
              <div className="mb-4">
                <label className="block mb-2">Categories</label>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`category-${category.id}`}
                        checked={formData.categories?.some(c => c.id === category.id) || false}
                        onChange={() => toggleCategory(category)}
                        className="mr-2"
                      />
                      <label htmlFor={`category-${category.id}`}>{category.name}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setEditingPost(null)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Posts List */}
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.id} className="border p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{post.title}</h3>
                <p className="text-sm text-gray-600">
                  Created: {new Date(post.createdAt).toLocaleString()}
                </p>
                <p className="text-sm">
                  Status: {post.published ? "Published" : "Draft"}
                </p>
                {post.categories?.length > 0 && (
                  <div className="mt-2">
                    <span className="text-sm font-medium">Categories: </span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {post.categories.map(category => (
                        <span 
                          key={category.id} 
                          className="px-2 py-1 bg-gray-100 rounded-full text-xs"
                        >
                          {category.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditClick(post)}
                  className="px-3 py-1 bg-blue-100 text-[#796d45] rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deletePost(post.id)}
                  className="px-3 py-1 bg-red-100 text-red-600 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )




}