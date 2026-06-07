import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0a0a0a] text-white py-32 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="uppercase tracking-[0.4em] text-blue-400 text-sm mb-4">
            About Me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              I BUILD
              <br />
              SOFTWARE
              <br />
              THAT SOLVES
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 text-transparent bg-clip-text">
                REAL PROBLEMS.
              </span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
  I'm <span className="text-white font-semibold">Pratik Rathod</span>, a
  passionate <span className="text-blue-400 font-semibold">Full Stack Developer</span>
  {" "}based in <span className="text-white font-semibold">Pune, India</span>,
  focused on building modern web applications that combine performance,
  usability, and clean design.
</p>

<p className="text-zinc-400 text-lg leading-relaxed mb-6">
  My expertise spans
  {" "}
  <span className="text-white font-medium">ASP.NET Core</span>,
  {" "}
  <span className="text-white font-medium">PHP</span>,
  {" "}
  <span className="text-white font-medium">React</span>,
  {" "}
  <span className="text-white font-medium">SQL Server</span>,
  {" "}
  <span className="text-white font-medium">PostgreSQL</span>,
  and modern frontend technologies.
  I enjoy transforming complex requirements into
  {" "}
  <span className="text-blue-400 font-medium">
    scalable, maintainable, and user-friendly solutions
  </span>.
</p>

<p className="text-zinc-400 text-lg leading-relaxed mb-6">
  Over the years, I've worked on
  {" "}
  <span className="text-white font-medium">
    dashboards, business applications, management systems,
    and custom web platforms
  </span>,
  helping turn ideas into reliable software that delivers
  real value.
</p>

<p className="text-zinc-400 text-lg leading-relaxed">
  Beyond coding, I'm constantly exploring new technologies,
  refining my craft, and looking for opportunities to build
  products that make a meaningful impact.
</p>
          </motion.div>

        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24"
        >

          <div className="text-center">
            <h3 className="text-4xl font-black text-blue-400">
              10+
            </h3>
            <p className="text-zinc-500 mt-2">
              Projects
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-black text-blue-400">
              4+
            </h3>
            <p className="text-zinc-500 mt-2">
              Years Coding
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-black text-blue-400">
              3
            </h3>
            <p className="text-zinc-500 mt-2">
              Core Stacks
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-black text-blue-400">
              100%
            </h3>
            <p className="text-zinc-500 mt-2">
              Commitment
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;