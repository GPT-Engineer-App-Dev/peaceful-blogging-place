import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <Card>
        <CardContent className="flex flex-col md:flex-row items-center p-6">
          <img
            src="/placeholder.svg"
            alt="Author"
            className="w-48 h-48 rounded-full object-cover mb-6 md:mb-0 md:mr-8"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">John Doe</h2>
            <p className="text-lg mb-4">
              Hi there! I'm John, a passionate web developer and tech enthusiast. I created this blog to share my
              knowledge and experiences in the world of web development, with a focus on modern JavaScript frameworks
              and best practices.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or enjoying a good cup of coffee while reading tech blogs. I believe in continuous learning and hope
              that through this blog, we can learn and grow together.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;