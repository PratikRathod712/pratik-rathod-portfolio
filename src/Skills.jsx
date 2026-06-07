import { motion } from "framer-motion";
import {
  FaReact,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiDotnet,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiVite,
} from "react-icons/si";

function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#0a0a0a] text-white py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-20 top-40 w-[400px] h-[400px] bg-blue-500/10 blur-[180px] rounded-full" />
      <div className="absolute right-20 bottom-20 w-[400px] h-[400px] bg-purple-500/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[0.4em] text-blue-400 text-sm mb-4">
            Technologies
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            My Tech
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Stack
            </span>
          </h2>

          <p className="mt-8 text-zinc-400 max-w-2xl mx-auto text-lg">
            The technologies I use to build modern web applications,
            scalable backends, and data-driven systems.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[180px]">

          {/* React */}
          <TechCard
            className="md:col-span-3"
            icon={<FaReact />}
            title="React"
            description="Modern frontend applications"
          />

          {/* ASP.NET */}
          <TechCard
            className="md:col-span-3"
            icon={<SiDotnet />}
            title="ASP.NET Core"
            description="Enterprise backend development"
          />

          {/* PHP */}
          <TechCard
            className="md:col-span-2"
            icon={<FaPhp />}
            title="PHP"
            description="Business applications"
          />

          {/* SQL */}
          <TechCard
            className="md:col-span-2"
            icon={<FaDatabase />}
            title="SQL Server"
            description="Relational databases"
          />

          {/* PostgreSQL */}
          <TechCard
            className="md:col-span-2"
            icon={<SiPostgresql />}
            title="PostgreSQL"
            description="Scalable data storage"
          />

          {/* Mongo */}
          <TechCard
            className="md:col-span-3"
            icon={<SiMongodb />}
            title="MongoDB"
            description="Flexible NoSQL databases"
          />

          {/* JS */}
          <TechCard
            className="md:col-span-3"
            icon={<SiJavascript />}
            title="JavaScript"
            description="Interactive web experiences"
          />

          {/* Tailwind */}
          <TechCard
            className="md:col-span-2"
            icon={<SiTailwindcss />}
            title="Tailwind CSS"
            description="Rapid UI development"
          />

          {/* Git */}
          <TechCard
            className="md:col-span-2"
            icon={<FaGitAlt />}
            title="Git"
            description="Version control"
          />

          {/* Tools */}
          <TechCard
            className="md:col-span-2"
            icon={<FaGithub />}
            title="GitHub & Vite"
            description="Modern workflow"
          />
        </div>
      </div>
    </section>
  );
}

function TechCard({
  icon,
  title,
  description,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        group
        rounded-3xl
        border border-zinc-800
        bg-zinc-900/50
        backdrop-blur-sm
        p-8
        overflow-hidden
        relative
        ${className}
      `}
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />

      <div className="relative z-10">
        <div className="text-5xl text-blue-400 mb-6">
          {icon}
        </div>

        <h3 className="text-2xl font-black mb-3">
          {title}
        </h3>

        <p className="text-zinc-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default Skills;