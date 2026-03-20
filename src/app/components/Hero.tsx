import { motion } from "motion/react";
import {
  ChevronDown,
  Globe,
  GraduationCap,
  Award,
  Briefcase,
} from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Refined gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)",
        }}
        animate={{
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <AnimatedBackground />

      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-sky-500 rounded-full opacity-10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Main headline - more refined typography */}
            <div>
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <span className="text-lg text-slate-400">
                  Hi, I am Shivani Srivastava👋
                </span>
              </motion.div>
              <motion.h1
                className="text-5xl md:text-6xl xl:text-7xl tracking-tight leading-[1.1] mb-6 text-white"
                style={{ fontWeight: 600, letterSpacing: "-0.03em" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Senior Product Designer{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  Crafting Intuitive Experiences
                </span>
              </motion.h1>
            </div>

            <motion.p
              className="text-xl text-slate-300 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              5 years specializing in UX, 8+ years in design—transforming
              complex enterprise systems into elegant, user-centered solutions
              across SaaS, fintech, and social impact.
            </motion.p>
          </motion.div>

          {/* Right side - Refined info cards */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative w-full aspect-square">
              {/* Card 1: Experience Level */}
              <motion.div
                className="absolute top-0 right-4 w-64 h-44 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-slate-200/50"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-sky-500 p-6 flex flex-col justify-center">
                  <Award className="w-14 h-14 text-white/90 mb-3" />
                  <div
                    className="text-6xl text-white mb-1"
                    style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
                  >
                    5
                  </div>
                  <div className="text-base text-white/90">Years in UX</div>
                  <div className="text-sm text-white/70 mt-1 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    Senior Level
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Total Design Experience */}
              <motion.div
                className="absolute top-12 left-0 w-60 h-44 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-slate-200/50"
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 p-6 flex flex-col justify-center">
                  <Briefcase className="w-13 h-13 text-white/90 mb-3" />
                  <div
                    className="text-6xl text-white mb-1"
                    style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
                  >
                    8+
                  </div>
                  <div className="text-base text-white/90">Years in Design</div>
                </div>
              </motion.div>

              {/* Card 3: Education */}
              <motion.div
                className="absolute bottom-36 right-8 w-56 h-48 bg-white backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-slate-200/50"
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 p-6 flex flex-col justify-center items-center text-center">
                  <GraduationCap className="w-14 h-14 text-white/90 mb-3" />
                  <div
                    className="text-base text-white mb-1"
                    style={{ fontWeight: 600 }}
                  >
                    NUS, Singapore (MAUD)
                  </div>
                  <div
                    className="text-base text-white"
                    style={{ fontWeight: 600 }}
                  >
                    UCLA, Los Angeles (UX)
                  </div>
                  <div className="text-sm text-white/70 mt-2">
                    Graduate Education
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Global Experience */}
              <motion.div
                className="absolute bottom-0 left-16 w-64 h-40 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-slate-200/50"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-sky-500 to-indigo-500 p-6 flex flex-col justify-center items-center text-center">
                  <Globe className="w-13 h-13 text-white/90 mb-2" />
                  <div
                    className="text-base text-white mb-1"
                    style={{ fontWeight: 600 }}
                  >
                    Global Experience
                  </div>
                  <div className="text-sm text-white/80"></div>
                  <div className="text-sm text-white/80">
                    India · USA · Singapore
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Refined scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 0.6 },
            y: { delay: 1.5, duration: 2, repeat: Infinity },
          }}
        >
          <ChevronDown className="w-8 h-8 text-slate-500" />
        </motion.div>
      </div>
    </section>
  );
}
