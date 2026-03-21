import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  navigateToPathOrSection,
  smoothScrollToTop,
} from "../utils/sectionNavigation";
import { startPageTransition } from "../utils/pageTransition";

type HeaderProps = {
  fixed?: boolean;
};

export function Header({ fixed = true }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    navigateToPathOrSection({
      navigate,
      pathname,
      targetPath: "/",
      sectionId: id,
      offsetSelectors: ["[data-global-header='true']"],
      extraOffset: 12,
    });
  };

  const navigateToHome = () => {
    navigateToPathOrSection({
      navigate,
      pathname,
      targetPath: "/",
      scrollToTop: true,
      duration: 700,
    });
  };

  const navigateToHomeSection = (id: string) => {
    scrollToSection(id);
  };

  const navigateToAbout = () => {
    const currentPath = pathname.replace(/\/+$/, "") || "/";
    if (currentPath === "/about") {
      smoothScrollToTop();
      return;
    }
    startPageTransition("Going to About…");
    navigate("/about");
  };

  return (
    <motion.header
      data-global-header="true"
      className={`${
        fixed ? "fixed top-0 left-0 right-0 z-50" : "relative z-10"
      } transition-all duration-300 ${
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
            <button
              type="button"
              onClick={navigateToHome}
              className={`text-sm tracking-wide transition-colors ${
                isScrolled
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-900 hover:text-slate-800"
              }`}
              style={{ fontWeight: 500 }}
            >
              Product & UX Designer
            </button>
          </motion.div>

          {/* Right side - Navigation */}
          <motion.nav
            className="flex items-center gap-10 text-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={() => navigateToHomeSection("projects")}
              className={`transition-colors relative group ${
                isScrolled
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-900 hover:text-slate-800"
              }`}
              style={{ fontWeight: 500 }}
            >
              Work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-sky-400 group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={navigateToAbout}
              className={`transition-colors relative group ${
                isScrolled
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-900 hover:text-slate-800"
              }`}
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
