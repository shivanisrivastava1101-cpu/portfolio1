import { motion } from "motion/react";
import { Linkedin, Mail } from "lucide-react";
import { useInView } from "./useInView";

export function Footer() {
  const [ref, isInView] = useInView({ threshold: 0.5 });

  return (
    <footer
      id="contact"
      ref={ref}
      className="relative py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl mb-6 text-white tracking-tight"
            style={{ fontWeight: 600, letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Let's Collaborate
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Open to new opportunities and exciting projects.
          </motion.p>
        </div>

        {/* Contact Section */}
        <motion.div
          className="flex flex-col items-center gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="mailto:shivani.srivastava1101@gmail.com"
            className="group relative inline-flex items-center gap-4 px-10 py-6 rounded-2xl text-lg md:text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-6 h-6" />
            <span style={{ fontWeight: 600 }}>
              shivani.srivastava1101@gmail.com
            </span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/shivani-sri/"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-400/50 hover:bg-white/10 transition-all"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5 text-sky-400" />
            <span
              className="text-slate-300 group-hover:text-white transition-colors"
              style={{ fontWeight: 500 }}
            >
              Connect on LinkedIn
            </span>
          </motion.a>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-10 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span>© 2026 Shivani Srivastava · Senior Product Designer</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-600">·</span>
              <span>Available for global projects</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
