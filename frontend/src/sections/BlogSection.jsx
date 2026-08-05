import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    title: "Which Programming Language Should You Learn First?",
    description:
      "A practical guide for first-year engineering students choosing between C, C++, Java, and Python.",
    date: "August 2026",
    readTime: "6 min read",
    tags: ["Programming", "Career", "Beginner"],
    link: "https://medium.com/@pavanpawar9923100/stop-wasting-months-choosing-between-c-c-java-and-python-48d3f7b2acf8?postPublishedType=initial",
  },

  {
    title: "DSA Roadmap for Java Developers",
    description:
      "Complete roadmap to master Data Structures and Algorithms using Java for placements and interviews.",
    date: "Coming Soon",
    readTime: "8 min read",
    tags: ["Java", "DSA"],
    link: "#",
  },

  {
    title: "How I Built My AI Interview Platform",
    description:
      "Architecture, tech stack, and lessons learned while building an AI-powered interview platform.",
    date: "Coming Soon",
    readTime: "10 min read",
    tags: ["AI", "React", "Spring Boot"],
    link: "#",
  },
];

export function BlogSection() {
  return (
    <section
      id="blog"
      className="py-28 px-6 sm:px-10 lg:px-16"
    >
      <p className="font-mono text-sm text-gray-500">
        ~/blog
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        Latest Articles
      </h2>

      <p className="mt-4 max-w-2xl text-gray-500">
        I enjoy sharing what I learn about software engineering,
        AI, web development, and career growth.
      </p>

      <div className="mt-12 grid gap-8">
        {blogs.map((blog) => (
          <a
            key={blog.title}
            href={blog.link}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-gray-800 p-6 transition hover:border-white"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">
                {blog.title}
              </h3>

              <ArrowUpRight
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                size={22}
              />
            </div>

            <p className="mt-3 text-gray-400">
              {blog.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-800 px-3 py-1 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex justify-between text-sm text-gray-500">
              <span>{blog.date}</span>
              <span>{blog.readTime}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}