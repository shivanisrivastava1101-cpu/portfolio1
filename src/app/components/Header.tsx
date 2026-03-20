import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full px-8 py-5">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left side - Name/Title */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span
              className="text-sm tracking-wide text-slate-300"
              style={{ fontWeight: 500 }}
            >
              Product & UX Designer
            </span>
          </motion.div>

          {/* Right side - Navigation */}
          <motion.nav
            className="flex items-center gap-10 text-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="text-slate-300 hover:text-white transition-colors relative group"
              style={{ fontWeight: 500 }}
            >
              Work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-sky-400 group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-300 hover:text-white transition-colors relative group"
              style={{ fontWeight: 500 }}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-sky-400 group-hover:w-full transition-all duration-300" />
            </button>
          </motion.nav>
        </div>
      </div>
    </motion.header>
  );
}
