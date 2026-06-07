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
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
            <div
                className="
        flex items-center gap-2
        px-3 py-3
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
                px-5 py-2
                rounded-full
                bg-gradient-to-r
                from-blue-500
                to-purple-500
                font-bold
                shadow-lg
                shadow-blue-500/30
                "
                >
                    PR
                </a>

                {/* Links */}
                <a
                    href="#about"
                    className="px-4 py-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                    About
                </a>

                <a
                    href="#skills"
                    className="px-4 py-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                    Skills
                </a>

                <a
                    href="#projects"
                    className="px-4 py-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                    Projects
                </a>

                <a
                    href="#contact"
                    className="px-4 py-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition"
                >
                    Contact
                </a>
            </div>
        </motion.nav>
    );
}

export default Navbar;