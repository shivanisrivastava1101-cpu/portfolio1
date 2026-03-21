import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, Plane, Heart, Palette } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion } from "motion/react";
import { useScrollToTop } from "../useScrollToTop";
import { usePendingSectionScroll } from "../hooks/usePendingSectionScroll";

export default function AboutPage() {
  useScrollToTop();
  usePendingSectionScroll();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-16 items-start mb-20">
          {/* Image */}
          <motion.div
            className="w-full md:w-80 flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl transform rotate-3"
                animate={{ rotate: [3, 5, 3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <ImageWithFallback
                src="https://static.wixstatic.com/media/9ce191_3960c6d5c5f24e5c8a33a6293efa6f5e~mv2.jpg/v1/crop/x_0,y_340,w_686,h_684/fill/w_568,h_566,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b3516d68-3897-4a40-a209-44b4a5696ab1.jpg"
                alt="Profile"
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            className="flex-1 pt-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <span className="text-blue-600 uppercase tracking-wider text-sm">
                Portfolio
              </span>
            </motion.div>
            <motion.h1
              className="text-6xl mb-6 text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              About Me
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              UX Designer with a background in architecture, passionate about
              creating meaningful experiences for global audiences.
            </motion.p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl">
          {/* First Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-4xl text-gray-900">A little about me</h2>
            </div>
            <motion.div
              className="space-y-6 text-lg text-gray-700 leading-relaxed bg-white/60 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-gray-100"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                I'm a Product & UX Designer with 5 years of experience in UX and
                8+ years across design, creating user-centered, data-informed
                products for global audiences across enterprise SaaS, edtech,
                and social impact.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                I enjoy working at the intersection of design strategy, product
                thinking, and usability, translating complex workflows into
                intuitive and engaging experiences that support both user needs
                and business goals.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                My strength lies in connecting research insights with thoughtful
                design execution to improve product engagement and deliver
                meaningful outcomes. I collaborate closely with product and
                engineering teams to design scalable solutions that make
                everyday work simpler, smarter, and more human.
              </motion.p>
            </motion.div>
          </motion.section>

          {/* Second Section */}
          <motion.section
            className="pb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Heart className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-4xl text-gray-900">
                What I do in my free time
              </h2>
            </div>
            <motion.div
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-gray-100"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.p
                className="text-lg text-gray-700 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Outside of work, I enjoy creating cozy spaces, traveling,
                practicing yoga, and spending time at my craft table. I also
                love visiting my sister and niece in Amsterdam — the small
                moments that keep me grounded, curious, and inspired.
              </motion.p>

              {/* Activities Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <motion.div
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Palette className="w-6 h-6 text-purple-600" />
                  <span className="text-sm text-gray-700">Crafting</span>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-pink-50 to-orange-50 border border-pink-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Plane className="w-6 h-6 text-orange-600" />
                  <span className="text-sm text-gray-700">Traveling</span>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-green-50 to-teal-50 border border-green-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Sparkles className="w-6 h-6 text-teal-600" />
                  <span className="text-sm text-gray-700">Yoga</span>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Heart className="w-6 h-6 text-pink-600" />
                  <span className="text-sm text-gray-700">Family Time</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
