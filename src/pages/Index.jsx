import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-xl">Exploring ideas, sharing experiences, and learning together.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
          {recentPosts.map((post) => (
            <Card key={post.id} className="mb-6">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{post.description}</p>
                <Button asChild>
                  <Link to={`/blog/${post.id}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-6">Categories</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <Link to={`/category/${category.toLowerCase()}`} className="text-blue-600 hover:underline">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const recentPosts = [
  { id: 1, title: "Getting Started with React", description: "Learn the basics of React and start building your first application." },
  { id: 2, title: "The Power of Tailwind CSS", description: "Discover how Tailwind CSS can streamline your web development process." },
  { id: 3, title: "Mastering JavaScript ES6", description: "Explore the new features in ES6 and how they can improve your code." },
];

const categories = ["Web Development", "JavaScript", "React", "CSS", "Node.js"];

export default Index;