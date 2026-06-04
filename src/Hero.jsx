import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full" />

      {/* Huge Background Text */}
      <h1 className="absolute top-10 text-[8rem] md:text-[12rem] lg:text-[9rem] font-black uppercase tracking-widest text-white/[0.04] select-none">
        INTRODUCTION
      </h1>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl">

        {/* Small Heading */}
        <p className="uppercase tracking-[0.4em] text-blue-400 text-sm mb-6">
          Welcome To My Portfolio
        </p>

        {/* Name */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
          PRATIK
          <br />
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 text-transparent bg-clip-text">
            D RATHOD
          </span>
        </h2>

        {/* Animated Roles */}
        <div className="mt-6 text-xl md:text-3xl font-medium text-zinc-300 h-12">
          <TypeAnimation
            sequence={[
              "Freelancer Developer",
              2000,
              "FullStack Developer",
              2000,
              "React Developer",
              2000,
              "UI/UX Enthusiast",
              2000,
              "Tech Consultant",
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
        <p className="mt-8 text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          I build fast, modern, and user-focused web applications that help
          businesses grow and stand out online. Passionate about clean code,
          beautiful interfaces, and transforming ideas into powerful digital
          experiences.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition duration-300 shadow-lg shadow-blue-500/20">
            View Projects
          </button>

          <button className="px-8 py-3 border border-zinc-700 hover:border-blue-500 rounded-xl font-semibold transition duration-300">
            Contact Me
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-400">10+</h3>
            <p className="text-zinc-500">Projects</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-400">2+</h3>
            <p className="text-zinc-500">Years Experience</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-400">100%</h3>
            <p className="text-zinc-500">Commitment</p>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

    </section>
  );
}

export default Hero;