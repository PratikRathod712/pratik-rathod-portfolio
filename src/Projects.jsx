import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Industrial Monitoring Dashboard",

    description:
      "Real-time industrial monitoring dashboard developed for production environments. The application provided live process visibility, operational insights, data visualization, and production tracking powered by SQL Server.",

    tech: [
      "ASP.NET Core",
      "SQL Server",
      "Chart.js",
      "Bootstrap",
    ],

    image: "/projects/dashboard.jpg",

    badge: "Real Client Project",
  },

  {
    number: "02",
    title: "Production Analytics & Reporting Platform",

    description:
      "Advanced reporting and analytics platform featuring historical analysis, batch-wise filtering, date-range reporting, graphical trends, and production insights for data-driven decision making.",
    tech: [
      "ASP.NET Core",
      "SQL Server",
      "Reporting",
      "Analytics",
    ],

    image: "/projects/project2ss1.png",

    badge: "Real Client Project",
  },

  {
    number: "03",
    title: "Developer Portfolio",

    description:
      "A modern portfolio website built using React, Tailwind CSS, and Framer Motion. Designed to showcase projects, skills, and experience through a premium and interactive user experience.",

    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Netlify",
    ],

    image: "/projects/portfolio_ss1.png",

    badge: "Personal Project",
  },

  {
    number: "04",
    title: "Next Big Project",

    description:
      "Currently planning and designing a larger full-stack application focused on scalable architecture, authentication, APIs, database design, and modern software development practices.",

    tech: [
      "ASP.NET Core",
      "React",
      "SQL Server",
    ],

    image: "/projects/dashboard.jpg",

    badge: "In Development",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#0a0a0a] text-white py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-40 w-[400px] h-[400px] bg-blue-500/10 blur-[180px] rounded-full" />
      <div className="absolute right-0 bottom-40 w-[400px] h-[400px] bg-purple-500/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-28"
        >
          <p className="uppercase tracking-[0.4em] text-blue-400 text-sm mb-4">
            Featured Work
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            Selected{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-8 text-zinc-400 max-w-2xl mx-auto text-lg">
            Real projects, real challenges, and practical solutions.
          </p>
        </motion.div>

        {projects.map((project, index) => (
          <div key={project.number} className="mb-40 last:mb-0">
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
                }`}
            >
              {/* Text Side */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="block text-[6rem] md:text-[8rem] font-black leading-none text-white/5">
                  {project.number}
                </span>

                <h3 className="text-4xl md:text-6xl font-black leading-tight -mt-6">
                  {project.title}
                </h3>

                <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <span
                    className={`
      inline-flex
      items-center
      px-4 py-2
      rounded-full
      border
      ${project.badge === "Real Client Project"
                        ? "bg-green-500/10 text-green-400 border-green-500/20"
                        : project.badge === "In Development"
                          ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                          : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                      }
    `}
                  >
                    {project.badge}
                  </span>
                </div>
              </motion.div>

              {/* Image Side */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? 100 : -100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

