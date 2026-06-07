import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
<section
  id="hero"
  className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white overflow-hidden px-6 pt-24 pb-20"
>
      {/* Background Glow */}
      <motion.div
        className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full" />

      {/* Huge Background Text */}
      <motion.h1
        className="absolute top-20 text-[8rem] md:text-[12rem] lg:text-[16rem] font-black uppercase tracking-widest text-white/[0.04] select-none"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        INTRO
      </motion.h1>


      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mt-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >

        {/* Small Heading */}
        <p className="uppercase tracking-[0.4em] text-blue-400 text-sm mb-8">
          Full Stack Developer • Pune, India
        </p>

        {/* Name */}
        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
        >
          PRATIK
          <br />
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 text-transparent bg-clip-text">
            D RATHOD
          </span>
        </motion.h2>

        {/* Animated Roles */}
        <div className="mt-4 text-xl md:text-3xl font-medium text-zinc-300 h-12">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              ".NET Developer",
              2000,
              "React Developer",
              2000,
              "PHP Developer",
              2000,
              "Freelance Web Developer",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* Bio */}
        <p className="mt-5 text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          I build fast, modern, and user-focused web applications that help
          businesses grow and stand out online. Passionate about clean code,
          beautiful interfaces, and transforming ideas into powerful digital
          experiences.
        </p>

        {/* Buttons */}
        <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold shadow-lg shadow-blue-500/20"
          >
            View Projects
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="px-8 py-3 border border-zinc-700 hover:border-blue-500 hover:bg-zinc-900 rounded-xl font-semibold"
          >
            Contact Me
          </motion.button>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-wrap justify-center gap-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <h3 className="text-3xl font-bold text-blue-400">10+</h3>
            <p className="text-zinc-500">Projects</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
          >
            <h3 className="text-3xl font-bold text-blue-400">4+</h3>
            <p className="text-zinc-500">Years Coding</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
          >
            <h3 className="text-3xl font-bold text-blue-400">100%</h3>
            <p className="text-zinc-500">Commitment</p>
          </motion.div>
        </div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
  className="absolute bottom-8 left-1/2 -translate-x-1/2"
  animate={{
    y: [0, 10, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
        <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;