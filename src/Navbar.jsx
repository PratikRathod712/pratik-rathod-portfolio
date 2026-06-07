import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-fit max-w-[95vw]"
    >
      <div
        className="
          flex items-center
          gap-1 md:gap-2
          px-2 md:px-3
          py-2
          rounded-full
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          shadow-2xl
        "
      >
        {/* Logo */}
        <a
          href="#hero"
          className="
            px-3 md:px-5
            py-2
            rounded-full
            bg-gradient-to-r
            from-blue-500
            to-purple-500
            font-bold
            text-sm md:text-base
            shadow-lg
            shadow-blue-500/30
            whitespace-nowrap
          "
        >
          PR
        </a>

        {/* About */}
        <a
          href="#about"
          className="
            px-2 md:px-4
            py-2
            text-xs sm:text-sm md:text-base
            rounded-full
            text-zinc-300
            hover:text-white
            hover:bg-white/10
            transition
            whitespace-nowrap
          "
        >
          About
        </a>

        {/* Skills */}
        <a
          href="#skills"
          className="
            px-2 md:px-4
            py-2
            text-xs sm:text-sm md:text-base
            rounded-full
            text-zinc-300
            hover:text-white
            hover:bg-white/10
            transition
            whitespace-nowrap
          "
        >
          Skills
        </a>

        {/* Projects */}
        <a
          href="#projects"
          className="
            px-2 md:px-4
            py-2
            text-xs sm:text-sm md:text-base
            rounded-full
            text-zinc-300
            hover:text-white
            hover:bg-white/10
            transition
            whitespace-nowrap
          "
        >
          Work
        </a>

        {/* Contact */}
        <a
          href="#contact"
          className="
            px-2 md:px-4
            py-2
            text-xs sm:text-sm md:text-base
            rounded-full
            text-zinc-300
            hover:text-white
            hover:bg-white/10
            transition
            whitespace-nowrap
          "
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
