import { motion } from "motion/react";
import {
  Search,
  Figma,
  Sparkles,
  Layers,
  ClipboardCheck,
  Eye,
  Network,
  Layout,
  MousePointer,
  Palette,
  Grid3x3,
  Compass,
  Map,
  Shield,
  Users,
  Brain,
  Heart,
  Cloud,
  Building2,
  Banknote,
  ArrowRight,
} from "lucide-react";
import { useInView } from "./useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";
// Use the image URL directly as a string
const profilePhoto =
  "https://static.wixstatic.com/media/9ce191_d6e2e7b2ec454e028c0a2e274068c5ae~mv2.jpg/v1/crop/x_80,y_21,w_820,h_820/fill/w_289,h_290,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_20200516_235406_110.jpg";
const skills = [
  { icon: Search, label: "User Research", level: 95 },
  { icon: ClipboardCheck, label: "Usability Testing", level: 95 },
  { icon: Eye, label: "Accessibility", level: 90 },
  { icon: Map, label: "Journey Mapping", level: 90 },
  { icon: Network, label: "Information Architecture", level: 90 },
  { icon: Layout, label: "Wireframing", level: 90 },
  { icon: Figma, label: "Prototyping", level: 85 },
  { icon: Compass, label: "Continuous Discovery", level: 85 },
  { icon: Users, label: "Service Design", level: 80 },
  { icon: Cloud, label: "SaaS UX", level: 85 },
  { icon: Building2, label: "Enterprise UX", level: 80 },
  { icon: MousePointer, label: "Interaction Design", level: 70 },
  { icon: Palette, label: "Visual Design", level: 70 },
  { icon: Grid3x3, label: "Design Systems", level: 70 },
  { icon: Shield, label: "Heuristics", level: 70 },
  { icon: Brain, label: "AI in Design", level: 60 },
  { icon: Banknote, label: "Fintech", level: 55 },
];

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative scroll-mt-24 py-32 px-6 bg-gradient-to-b from-purple-50/50 via-cyan-50/30 to-white overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section with Profile */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12 mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-sky-400 rounded-full blur-xl opacity-30" />
            <img
              src={profilePhoto}
              alt="Shivani Srivastava"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-2xl"
            />
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-slate-800"
              style={{ fontWeight: 600, letterSpacing: "-0.02em" }}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Design Philosophy
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-slate-700 mb-4 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I bridge strategic design thinking with execution
              excellence—transforming complex enterprise workflows into
              intuitive, delightful experiences that drive measurable business
              impact.
            </motion.p>

            <motion.p
              className="text-lg text-slate-600 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              With a foundation in research-led design and data-informed
              decision-making, I collaborate with cross-functional teams across
              continents to deliver scalable, accessible solutions that balance
              user needs with business objectives.
            </motion.p>
          </div>
        </motion.div>

        {/* Featured Article */}
        <motion.article
          className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200/50 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-100 to-sky-100 rounded-full blur-3xl opacity-30 -z-10" />

          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <img
                src={profilePhoto}
                alt="Shivani Srivastava"
                className="w-14 h-14 rounded-full object-cover border-2 border-indigo-200"
              />
              <div>
                <div
                  className="text-base mb-1 text-slate-900"
                  style={{ fontWeight: 600 }}
                >
                  Shivani Srivastava
                </div>
                <div className="text-sm text-slate-500">
                  7 min read · Featured Article
                </div>
              </div>
            </div>
            <div
              className="text-base px-4 py-2 bg-gradient-to-r from-indigo-50 to-sky-50 rounded-full text-indigo-900 border border-indigo-200/50"
              style={{ fontWeight: 600, letterSpacing: "-0.02em" }}
            >
              Medium
            </div>
          </div>

          <h3
            className="text-2xl md:text-3xl lg:text-4xl mb-6 tracking-tight leading-tight text-slate-900"
            style={{ fontWeight: 600, letterSpacing: "-0.02em" }}
          >
            Continuous Discovery in Enterprise Products: How We Kept Learning
            Without a Dedicated Research Team
          </h3>

          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            In my years designing enterprise and consumer products across global
            markets, I've learned that the most impactful solutions emerge when
            we deeply understand not just what users do, but why they do it.
            This article explores my framework for integrating continuous
            discovery into product development even without dedicated research
            resources.
          </p>

          <motion.a
            href="https://medium.com/@shivani.srivastava1101/continuous-discovery-in-enterprise-products-how-we-kept-learning-without-a-dedicated-research-team-f52cb183a263"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl hover:shadow-lg transition-all duration-300"
            style={{ fontWeight: 600 }}
            whileHover={{ scale: 1.02, x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            Read Full Article
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.article>
      </div>
    </section>
  );
}
