
// import Footer from "@/components/footer/Footer";
// import { div } from "framer-motion/client";
// import { ArrowUpRight } from "lucide-react";

// const blogs = [
//   {
//     title: "Which Programming Language Should You Learn First?",
//     description:
//       "A practical guide for first-year engineering students choosing between C, C++, Java, and Python.",
//     date: "August 2026",
//     readTime: "6 min read",
//     tags: ["Programming", "Career", "Beginner"],
//     link: "https://medium.com/@pavanpawar9923100/stop-wasting-months-choosing-between-c-c-java-and-python-48d3f7b2acf8?postPublishedType=initial",
//   },

//   {
//     title: "How Beginners Can Start Web Development in 2026",
//     description:
//       "Learning web development doesn’t have to be confusing. Focus on one step at a time, build projects consistently, and you’ll gradually become a confident full-stack developer.",
//     date: "August 2026",
//     readTime: "5 min read",
//     tags: ["Web Development"],
//     link: "https://medium.com/@pavanpawar9923100/how-beginners-can-start-web-development-in-2026-a-simple-roadmap-272f3d8aa401?postPublishedType=initial",
//   },

//   {
//     title: "How I Built My AI Interview Platform",
//     description:
//       "Architecture, tech stack, and lessons learned while building an AI-powered interview platform.",
//     date: "Coming Soon",
//     readTime: "10 min read",
//     tags: ["AI", "React", "Spring Boot"],
//     link: "#",
//   },
// ];

// export function BlogSection() {
//   return (
//     <div className="relative mx-auto w-full max-w-6xl">

//     <section
//       id="blog"
//       className="py-28 px-6 sm:px-10 lg:px-16"
//     >
//       <p className="font-mono text-sm text-gray-500">
//         ~/blog
//       </p>

//       <h2 className="mt-3 text-4xl font-bold">
//         Latest Articles
//       </h2>

//       <p className="mt-4 max-w-2xl text-gray-500">
//         I enjoy sharing what I learn about software engineering,
//         AI, web development, and career growth.
//       </p>

//       <div className="mt-12 grid gap-8">
//         {blogs.map((blog) => (
//           <a
//             key={blog.title}
//             href={blog.link}
//             target="_blank"
//             rel="noreferrer"
//             className="group rounded-2xl border border-gray-800 p-6 transition hover:border-white"
//           >
//             <div className="flex items-center justify-between">
//               <h3 className="text-2xl font-semibold">
//                 {blog.title}
//               </h3>

//               <ArrowUpRight
//                 className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//                 size={22}
//               />
//             </div>

//             <p className="mt-3 text-gray-400">
//               {blog.description}
//             </p>

//             <div className="mt-5 flex flex-wrap gap-2">
//               {blog.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-200"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             <div className="mt-6 flex justify-between text-sm text-gray-500">
//               <span>{blog.date}</span>
//               <span>{blog.readTime}</span>
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>

//     <Footer/>
    
//     </div>
//   );
// }





import Footer from "@/components/footer/Footer";
import { div } from "framer-motion/client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
  title: "From a Small Village to Software Engineering: My Journey",
  description:
    "A personal story of growing up in a small village, overcoming challenges, learning technology, and taking my first steps toward becoming a software engineer.",
  date: "September 2026",
  readTime: "6 min read",
  tags: ["My Journey", "Career", "Software Engineering"],
  link: "https://medium.com/@pavanpawar9923100/from-a-small-village-to-software-engineering-my-journey-9d3a6299009c?sharedUserId=pavanpawar9923100",
},
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
    title: "How Beginners Can Start Web Development in 2026",
    description:
      "Learning web development doesn’t have to be confusing. Focus on one step at a time, build projects consistently, and you’ll gradually become a confident full-stack developer.",
    date: "August 2026",
    readTime: "5 min read",
    tags: ["Web Development"],
    link: "https://medium.com/@pavanpawar9923100/how-beginners-can-start-web-development-in-2026-a-simple-roadmap-272f3d8aa401?postPublishedType=initial",
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
    <div className="relative mx-auto w-full max-w-6xl">

      <section
        id="blog"
        className="relative overflow-hidden py-28 px-6 sm:px-10 lg:px-16"
      >

        {/* Very subtle background glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
        </motion.div>

        {/* ================= BLOGS ================= */}

        <div className="mt-12 grid gap-8">

          {blogs.map((blog, index) => (
            <motion.a
              key={blog.title}
              href={blog.link}
              target="_blank"
              rel="noreferrer"

              /* Entrance animation */
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: "easeOut",
              }}

              /* Hover animation */
              whileHover={{
                y: -6,
              }}

              className="group relative overflow-hidden rounded-2xl border border-gray-800 p-6 transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-primary/5"
            >

              {/* ================= HOVER SHINE ================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -left-[120%]
                  top-0
                  h-full
                  w-[80%]
                  rotate-12
                  bg-gradient-to-r
                  from-transparent
                  via-white/[0.04]
                  to-transparent
                  transition-all
                  duration-1000
                  group-hover:left-[130%]
                "
              />

              {/* ================= SOFT GLOW ================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-2xl
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  bg-gradient-to-br
                  from-primary/[0.04]
                  via-transparent
                  to-transparent
                "
              />

              {/* ================= CONTENT ================= */}

              <div className="relative z-10">

                <div className="flex items-center justify-between gap-5">

                  <motion.h3
                    className="text-2xl font-semibold"
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    {blog.title}
                  </motion.h3>

                  <motion.div
                    initial={{ x: 0, y: 0 }}
                    whileHover={{ x: 4, y: -4 }}
                    className="shrink-0"
                  >
                    <ArrowUpRight
                      className="text-gray-400 transition-colors duration-300 group-hover:text-white"
                      size={22}
                    />
                  </motion.div>

                </div>

                <p className="mt-3 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  {blog.description}
                </p>

                {/* ================= TAGS ================= */}

                <div className="mt-5 flex flex-wrap gap-2">

                  {blog.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{
                        opacity: 0.8,
                      }}
                      whileHover={{
                        y: -2,
                        scale: 1.04,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors duration-300 dark:bg-gray-800 dark:text-gray-200 group-hover:bg-gray-200 dark:group-hover:bg-gray-700"
                    >
                      {tag}
                    </motion.span>
                  ))}

                </div>

                {/* ================= META ================= */}

                <div className="mt-6 flex justify-between text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>

              </div>
            </motion.a>
          ))}

        </div>
      </section>

      <Footer />

    </div>
  );
}

