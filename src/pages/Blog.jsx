import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";

const Blog = () => {
  const [posts, setPosts] = useState(blogPosts);
  const [postToDelete, setPostToDelete] = useState(null);
  const { toast } = useToast();

  const handleDelete = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
    toast({
      title: "Post deleted",
      description: "The blog post has been successfully deleted.",
    });
    setPostToDelete(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Blog Posts</h1>
        <Button variant="primary" href="/add-blog-post">
          New Post
        </Button>
      </div>
      {posts.map((post) => (
        <Card key={post.id} className="mb-6">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>{post.title}</CardTitle>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" onClick={() => setPostToDelete(post)}>
                    Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete the blog post.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDelete(post.id)}>
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <p className="text-sm text-gray-500">{post.date}</p>
          </CardHeader>
          <CardContent>
            <p>{post.description}</p>
          </CardContent>
        </Card>
      ))}
      <div className="flex justify-center mt-8">
        <Button variant="outline" className="mr-2">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        <Button variant="outline">
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    date: "2023-03-15",
    description: "Learn the basics of React and start building your first application. This post covers components, state, and props.",
  },
  {
    id: 2,
    title: "The Power of Tailwind CSS",
    date: "2023-03-10",
    description: "Discover how Tailwind CSS can streamline your web development process and make your projects more maintainable.",
  },
  {
    id: 3,
    title: "Mastering JavaScript ES6",
    date: "2023-03-05",
    description: "Explore the new features in ES6 and how they can improve your code. Learn about arrow functions, destructuring, and more.",
  },
  {
    id: 4,
    title: "Building RESTful APIs with Node.js",
    date: "2023-02-28",
    description: "A comprehensive guide to creating robust and scalable RESTful APIs using Node.js and Express.",
  },
  {
    id: 5,
    title: "Introduction to TypeScript",
    date: "2023-02-20",
    description: "Learn why TypeScript is becoming increasingly popular and how it can help you write better JavaScript code.",
  },
];

export default Blog;