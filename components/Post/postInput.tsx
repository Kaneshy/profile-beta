'use client'

import { useState, useCallback, useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Upload } from "lucide-react"
import { handlenewPost } from '@/actions/posts/newPost'

const PostInput = () => {
  const [option, setOption] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [PostCount, setPostCount] = useState<string[]>([]);

  const [postValues, setPostValues] = useState(
    PostCount.map(() => ({ title: '', description: '' })) // Initialize state for each post
  );

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setImage(acceptedFiles[0])
    }
  }, [])

  useEffect(() => {
    console.log(PostCount)
  }, [PostCount])
  

  interface PostInfo {
    option: string;
    title: string;
    description: string;
    image: string | null; // Update to accept null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Assuming image is of type File | null from an input field
    let imageUrl: string | null = null;

    if (image instanceof File) {
      // Convert File to a URL or base64 string if needed
      // For example, use a file reader or upload it to a server and get the URL
      imageUrl = URL.createObjectURL(image); // This will create a temporary URL
    }

    const info: PostInfo = {
      option,
      title,
      description,
      image: imageUrl, // Use the converted image URL or null
    };

    await handlenewPost(info);

  };

  const handleTitleChange = (index: number, newTitle: string) => {
    const updatedPosts = [...postValues];
    updatedPosts[index].title = newTitle;
    setPostValues(updatedPosts);
  };

  const handleDescriptionChange = (index: number, newDescription: string) => {
    const updatedPosts = [...postValues];
    updatedPosts[index].description = newDescription;
    setPostValues(updatedPosts);
  };
  const handleChange = () => {
    setPostCount((prev) => [...prev, 'x']);
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <div>
        <Label htmlFor="option">Choose an option</Label>
        <Select onValueChange={setOption} value={option}>
          <SelectTrigger id="option">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="image">Upload Image</Label>
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-gray-400 transition-colors"
          onDrop={(e) => {
            e.preventDefault()
            onDrop(Array.from(e.dataTransfer.files))
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          <Input
            id="image"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => onDrop(Array.from(e.target.files || []))}
          />
          <Label htmlFor="image" className="cursor-pointer">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <span className="mt-2 block text-sm font-medium text-gray-900">
              {image ? image.name : "Drag and drop an image, or click to select"}
            </span>
          </Label>
        </div>
      </div>


      {PostCount && PostCount.map((x, index) => (
        <div key={index}>
          <div>
            <Label htmlFor={`title-${index}`}>Title</Label>
            <Input
              id={`title-${index}`}
              placeholder="Enter title"
              value={postValues[index]?.title}
              onChange={(e) => handleTitleChange(index, e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor={`description-${index}`}>Description</Label>
            <Textarea
              id={`description-${index}`}
              placeholder="Enter description"
              value={postValues[index]?.description}
              onChange={(e) => handleDescriptionChange(index, e.target.value)}
            />
          </div>
        </div>
      ))}

      <div>
        <Button
          className='w-full'
          id="description"
          value={description}
          onClick={() => setPostCount((prev) => [...prev, 'x'])}
        >+</Button>
      </div>

      <Button type="submit" className="w-full">Submit</Button>
    </form>
  )
}

export default PostInput