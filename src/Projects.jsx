import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Industrial Monitoring Dashboard",
    description:
      "Real-time manufacturing dashboard built using ASP.NET Core and SQL Server. Features live data monitoring, charts, filtering, and production analytics.",
    tech: ["ASP.NET Core", "SQL Server", "Chart.js"],
    image: "/projects/dashboard.jpg",
  },
  {
    number: "02",
    title: "eCourts eFiling System",
    description:
      "Contributed to the government-scale eFiling platform. Worked on PHP, AJAX, PostgreSQL and workflow-driven features used across the judicial ecosystem.",
    tech: ["PHP", "AJAX", "PostgreSQL"],
    image: "/projects/dashboard.jpg",
  },
  {
    number: "03",
    title: "Portfolio Website",
    description:
      "Modern portfolio built with React, Tailwind CSS and Framer Motion. Designed for performance, responsiveness and visual impact.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "/projects/dashboard.jpg",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] text-white py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
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
            Real projects, real challenges, real solutions.
          </p>
        </motion.div>

        {projects.map((project, index) => (
          <div
            key={project.number}
            className="mb-40 last:mb-0"
          >
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Text */}
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

                <div className="mt-10 flex gap-4">
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition">
                    View Project
                  </button>

                  <button className="px-6 py-3 border border-zinc-700 hover:border-blue-500 rounded-xl transition">
                    Source Code
                  </button>
                </div>
              </motion.div>

              {/* Image */}
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
                <div className="relative group">

                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full object-cover group-hover:scale-105 transition duration-700"
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