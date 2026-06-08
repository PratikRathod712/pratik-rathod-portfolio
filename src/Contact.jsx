import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#0a0a0a] text-white py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[180px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.4em] text-blue-400 text-sm mb-4">
            Get In Touch
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            Let's Build
            <br />
            Something
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Amazing
            </span>
          </h2>

          <p className="mt-8 text-zinc-400 text-lg max-w-2xl mx-auto">
            Have a project idea, freelance opportunity, or just want to connect?
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-3">
                  Ready to work together?
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  Whether you need a business website, dashboard, custom web
                  application, or technical consultation, let's discuss how I
                  can help bring your ideas to life.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-zinc-500 text-sm uppercase tracking-widest">
                    Email
                  </p>

                  <a
                    href="mailto:pratikrathod.dev@gmail.com"
                    className="text-xl font-medium hover:text-blue-400 transition"
                  >
                    pratikrathod.dev@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm uppercase tracking-widest">
                    Phone
                  </p>

                  <a
                    href="tel:+918421126150"
                    className="text-xl font-medium hover:text-blue-400 transition"
                  >
                    +91 8421126150
                  </a>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm uppercase tracking-widest">
                    Location
                  </p>

                  <p className="text-xl font-medium">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              name="contact"
              method="POST"
              action="/success.html"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-6"
            >
              {/* Netlify Required */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Spam Protection */}
              <p className="hidden">
                <label>
                  Don't fill this out:
                  <input name="bot-field" />
                </label>
              </p>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 resize-none focus:outline-none focus:border-blue-500 transition"
              />

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-zinc-800">
          <div className="text-center">
            <h3 className="text-2xl font-bold">
              Pratik Rathod
            </h3>

            <p className="mt-2 text-zinc-400">
              .NET Developer • React Developer • PHP Developer
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-8 text-zinc-500">
              <div className="mt-8 flex justify-center gap-4">

                <a
                  href="https://github.com/PratikRathod712"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 hover:border-white hover:-translate-y-1 transition-all duration-300"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/pratikrathoddev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <FaLinkedin size={20} />
                </a>

              </div>
            </div>

            <div className="mt-20 relative">
              <h2 className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-black uppercase tracking-widest text-white/[0.03] select-none">
                PRATIK
              </h2>
            </div>

            <p className="-mt-4 text-zinc-600 text-sm">
              © {new Date().getFullYear()} Pratik Rathod. Built with React,
              Tailwind CSS & Framer Motion.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Contact;