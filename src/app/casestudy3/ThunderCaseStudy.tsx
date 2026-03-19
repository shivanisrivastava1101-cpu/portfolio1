import svgPaths from "./imports/svg-uirpa0tbl5";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

// Header Component
function Header() {
  return (
    <div className="bg-gradient-to-r from-[#0a0f1f] via-[#1a1447] to-[#0a0f1f] w-full sticky top-0 z-[60]">
      <div className="max-w-[1450px] mx-auto px-6 py-3 flex items-center justify-between">
        <motion.div 
          className="text-white text-lg bg-gradient-to-r from-[#8b5cf6] to-[#6BB8FF] bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Product & UX Designer
        </motion.div>
        <div className="flex gap-8">
          <motion.a 
            href="#" 
            className="text-[#cbd5e1] hover:text-[#8b5cf6] transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Work
          </motion.a>
          <motion.a 
            href="#" 
            className="text-[#cbd5e1] hover:text-[#8b5cf6] transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </motion.a>
        </div>
      </div>
    </div>
  );
}

// Navigation Header
function Navigation({ activeSection }: { activeSection: string }) {
  const sections = [
    { label: "Overview", id: "overview" },
    { label: "Problem Space", id: "problem-space" },
    { label: "Research & Key Insights", id: "research" },
    { label: "From Insights to Experience", id: "insights-to-experience" },
    { label: "What We Built", id: "what-we-built" },
    { label: "Impact & Outcomes", id: "impact" },
    { label: "Reflection", id: "reflection" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Auto-scroll active tab into view for mobile
  useEffect(() => {
    const activeIndex = sections.findIndex(s => s.id === activeSection);
    if (activeIndex !== -1) {
      const tabElement = document.querySelector(`[data-tab-id="${activeSection}"]`);
      if (tabElement) {
        tabElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    }
  }, [activeSection]);

  return (
    <div className="bg-gradient-to-r from-[#0a0f1f] via-[#1a1447] to-[#0a0f1f] border-b border-[#8b5cf6]/30 shadow-lg shadow-[#8b5cf6]/20 fixed top-[52px] left-0 right-0 z-50">
      {/* Desktop Navigation - centered, all items visible */}
      <div className="hidden lg:block">
        <div className="max-w-[1450px] mx-auto px-6">
          <div className="flex items-center justify-center gap-2 py-2">
            {sections.map((section, idx) => (
              <motion.button
                key={idx}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeSection === section.id
                    ? "text-[#8b5cf6] border-b-2 border-[#8b5cf6] shadow-[0_2px_8px_rgba(139,92,246,0.4)]"
                    : "text-[#94a3b8] hover:bg-white/5 hover:text-white"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {section.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Navigation - horizontal scroll with partial visibility */}
      <div className="lg:hidden relative">
        <div className="overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth">
          <div className="flex items-center gap-4 px-[24px] py-[0px]" style={{ width: 'max-content' }}>
            {sections.map((section, idx) => (
              <motion.button
                key={idx}
                data-tab-id={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeSection === section.id
                    ? "text-[#8b5cf6] border-b-2 border-[#8b5cf6] shadow-[0_2px_8px_rgba(139,92,246,0.4)]"
                    : "text-[#94a3b8] hover:text-white"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.label}
              </motion.button>
            ))}
            <div className="w-6 flex-shrink-0" />
          </div>
        </div>
        {/* Fade gradient on right edge to indicate scrollability */}
        <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-[#0F1C3F] to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <div className="pt-8 pb-16 relative overflow-hidden">
      {/* Decorative glow effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#8b5cf6]/20 via-[#6BB8FF]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#7ED957]/10 via-[#8b5cf6]/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="w-full px-6 relative z-10">
        <div className="flex flex-col gap-6">
          <motion.div 
            className="inline-block rounded-full bg-gradient-to-r from-[#8b5cf6]/20 to-[#6BB8FF]/20 border border-[#8b5cf6]/30 px-4 py-2 w-fit"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#8b5cf6] text-sm font-bold">🎯 Lead Product Designer</p>
          </motion.div>
          
          <motion.h1 
            className="text-white text-3xl md:text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-[#8b5cf6]/80 to-white bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Enhancing iOS App Design experience for Thunder Rewards and Thunderstand
          </motion.h1>
          
          <motion.p 
            className="text-[#cbd5e1] text-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Maintaining user engagement while improving the UX of our soon-to-be-launched app
          </motion.p>
        </div>

        {/* Project Info Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div 
            className="flex flex-col gap-3 p-6 bg-gradient-to-br from-[#8b5cf6]/10 to-[#6BB8FF]/10 border border-[#8b5cf6]/20 rounded-xl hover:border-[#8b5cf6]/40 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <p className="text-[#8b5cf6] text-sm font-bold tracking-wider uppercase flex items-center gap-2">
              <span className="text-xl">👤</span> Role
            </p>
            <p className="text-white font-medium">Lead Product Designer</p>
          </motion.div>
          <motion.div 
            className="flex flex-col gap-3 p-6 bg-gradient-to-br from-[#6BB8FF]/10 to-[#7ED957]/10 border border-[#6BB8FF]/20 rounded-xl hover:border-[#6BB8FF]/40 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <p className="text-[#6BB8FF] text-sm font-bold tracking-wider uppercase flex items-center gap-2">
              <span className="text-xl">⏱️</span> Timeline
            </p>
            <p className="text-white font-medium">3 weeks</p>
          </motion.div>
          <motion.div 
            className="flex flex-col gap-3 p-6 bg-gradient-to-br from-[#7ED957]/10 to-[#8b5cf6]/10 border border-[#7ED957]/20 rounded-xl hover:border-[#7ED957]/40 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <p className="text-[#7ED957] text-sm font-bold tracking-wider uppercase flex items-center gap-2">
              <span className="text-xl">👥</span> Team
            </p>
            <p className="text-white font-medium">Issam Khalloufi, Leina Zoutine, Myself</p>
          </motion.div>
        </motion.div>

        {/* Container-width image */}
        <div className="hidden md:block overflow-hidden px-0 md:px-[52px] py-0 md:py-[29px]">
          <img 
            src="https://static.wixstatic.com/media/9ce191_7c76d5e1ee2f409d87912662556e69e9~mv2.png/v1/fill/w_1954,h_834,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/thunder%20rewards.png" 
            alt="Thunder Rewards project overview" 
            className="w-full h-[400px] object-contain rounded-lg py-0 mx-[-14px] my-[25px]"
          />
        </div>
      </div>
    </div>
  );
}

// Overview Section
function OverviewSection() {
  return (
    <div id="overview" className="bg-[#0F1C3F] max-w-[1056px] mx-auto px-6 py-16">
      <div className="">
        <motion.div 
          className="flex flex-col gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-4xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#6BB8FF] bg-clip-text text-transparent">
            Overview
          </h2>
          
          <motion.p 
            className="text-[#cbd5e1] leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            At Zeta Learning, a California-based startup, I worked as the sole UX Designer and Researcher across two connected iOS products: Thunder Rewards and Thunderstand.
          </motion.p>
          
          <motion.p 
            className="text-[#cbd5e1] leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Thunder Rewards used incentive-based engagement, while Thunderstand was a new personalised learning app preparing for launch. My responsibility was to maintain engagement in Thunder Rewards while improving usability in Thunderstand — under tight time and resource constraints.
          </motion.p>
          
          <motion.div 
            className="inline-block bg-gradient-to-r from-[#7ED957]/20 to-[#6BB8FF]/20 border-l-4 border-[#7ED957] rounded-lg p-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-[#7ED957] leading-relaxed text-lg font-semibold">
              🎓 Both apps serve students aged 13–19
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// Problem Space Section
function KeyFindingsSection() {
  return (
    <div id="problem-space" className="bg-gradient-to-b from-[#0F1C3F] via-[#1a1447] to-[#1a2847] py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-[#ef4444]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-tr from-[#6BB8FF]/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-[1056px] mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-10">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white text-4xl font-bold mb-4 bg-gradient-to-r from-[#ef4444] via-[#8b5cf6] to-[#6BB8FF] bg-clip-text text-transparent">
              Problem Space
            </h2>
            <p className="text-[#cbd5e1] text-lg leading-relaxed">
              ⚡ Two product challenges emerged simultaneously.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Thunder Rewards Card */}
            <motion.div 
              className="group relative bg-gradient-to-br from-[#1a2847] to-[#2B1E5A] border-2 border-[#ff6b6b]/40 rounded-2xl p-8 shadow-2xl hover:shadow-[#ff6b6b]/30 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02, y: -8 }}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#ff6b6b] to-[#ff5252] rounded-l-2xl shadow-lg shadow-[#ff6b6b]/50"></div>
              <div className="flex items-start gap-4 mb-4">
                <motion.div 
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#ff6b6b] to-[#ff5252] rounded-xl flex items-center justify-center shadow-lg shadow-[#ff6b6b]/60"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-[#ff6b6b] text-2xl font-bold mb-2">🎁 Thunder Rewards</h3>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-[#ff6b6b] to-transparent rounded-full"></div>
                </div>
              </div>
              <p className="text-[#cbd5e1] leading-relaxed text-base pl-1">
                Shipping physical rewards had become resource-intensive. With Thunderstand's launch approaching, we needed to delay shipments by one month without damaging user trust or engagement.
              </p>
            </motion.div>

            {/* Thunderstand Card */}
            <motion.div 
              className="group relative bg-gradient-to-br from-[#1a2847] to-[#2B1E5A] border-2 border-[#6BB8FF]/40 rounded-2xl p-8 shadow-2xl hover:shadow-[#6BB8FF]/30 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -8 }}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#6BB8FF] to-[#3b82f6] rounded-l-2xl shadow-lg shadow-[#6BB8FF]/50"></div>
              <div className="flex items-start gap-4 mb-4">
                <motion.div 
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#6BB8FF] to-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg shadow-[#6BB8FF]/60"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-[#6BB8FF] text-2xl font-bold mb-2">💡 Thunderstand</h3>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-[#6BB8FF] to-transparent rounded-full"></div>
                </div>
              </div>
              <p className="text-[#cbd5e1] leading-relaxed text-base pl-1">
                Usability testing revealed friction in onboarding and task completion. The pre-interaction stage felt long and cognitively heavy. With launch approaching, we had to prioritise improvements that were achievable within three weeks.
              </p>
            </motion.div>
          </motion.div>

          {/* Constraints */}
          <motion.div 
            className="relative bg-gradient-to-br from-[#1a2847] to-[#2B1E5A] border-2 border-[#a78bfa]/40 rounded-2xl p-10 mt-4 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div 
              className="absolute -top-5 left-8 bg-gradient-to-r from-[#ff6b6b] to-[#ff5252] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-[#ff6b6b]/60"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.7 }}
            >
              ⚠️ Constraints
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <motion.div 
                className="flex items-start gap-4 bg-gradient-to-br from-[#8b5cf6]/10 to-[#c084fc]/10 rounded-xl p-5 border-2 border-[#8b5cf6]/30 shadow-lg hover:border-[#8b5cf6]/50 hover:shadow-[#8b5cf6]/20 transition-all"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8b5cf6] to-[#c084fc] rounded-lg flex items-center justify-center shadow-md shadow-[#8b5cf6]/40">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white font-bold mb-1">Small Team</p>
                  <p className="text-[#94a3b8] text-sm">Limited headcount</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 bg-gradient-to-br from-[#6BB8FF]/10 to-[#3b82f6]/10 rounded-xl p-5 border-2 border-[#6BB8FF]/30 shadow-lg hover:border-[#6BB8FF]/50 hover:shadow-[#6BB8FF]/20 transition-all"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#6BB8FF] to-[#3b82f6] rounded-lg flex items-center justify-center shadow-md shadow-[#6BB8FF]/40">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white font-bold mb-1">Dev Capacity</p>
                  <p className="text-[#94a3b8] text-sm">Limited resources</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 bg-gradient-to-br from-[#7ED957]/10 to-[#10b981]/10 rounded-xl p-5 border-2 border-[#7ED957]/30 shadow-lg hover:border-[#7ED957]/50 hover:shadow-[#7ED957]/20 transition-all"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#7ED957] to-[#10b981] rounded-lg flex items-center justify-center shadow-md shadow-[#7ED957]/40">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white font-bold mb-1">Fixed Timeline</p>
                  <p className="text-[#94a3b8] text-sm">Strict deadline</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Research Section
function ResearchSection() {
  return (
    <div id="research" className="bg-[#0F1C3F] max-w-[1056px] mx-auto px-6 py-16">
      <div className="flex flex-col gap-12">
        <motion.div 
          className="bg-gradient-to-br from-[#1a2847] via-[#1a1447] to-[#2B1E5A] rounded-2xl p-10 border-2 border-[#8b5cf6]/30 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#8b5cf6]/20 to-transparent rounded-full blur-2xl"></div>
          <h2 className="text-white text-4xl font-bold mb-4 bg-gradient-to-r from-[#8b5cf6] to-[#6BB8FF] bg-clip-text text-transparent relative z-10">
            🔍 Research & Key Insights
          </h2>
          <p className="text-[#cbd5e1] leading-relaxed relative z-10">
            I conducted Instagram polls, Google surveys, and in-depth interviews with <span className="text-[#7ED957] font-bold">10 students</span> across the US and UK to understand their perspectives on reward delays and the Thunderstand beta experience.
          </p>
        </motion.div>
        
        {/* Key Findings Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Thunder Rewards Card 1 */}
          <motion.div 
            className="bg-gradient-to-br from-[#1a2847] to-[#2B1E5A] border-2 border-[#6BB8FF]/40 rounded-xl p-6 hover:shadow-2xl hover:shadow-[#6BB8FF]/30 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="flex items-start gap-4">
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-[#6BB8FF] to-[#3b82f6] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#6BB8FF]/40"
                whileHover={{ rotate: 12, scale: 1.1 }}
              >
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </motion.div>
              <div>
                <h4 className="text-[#6BB8FF] font-bold mb-2 text-lg">☀️ Summer Activity Drop</h4>
                <p className="text-[#cbd5e1] text-sm leading-relaxed">App usage decreased significantly during school breaks, revealing seasonal engagement patterns.</p>
              </div>
            </div>
          </motion.div>

          {/* Thunder Rewards Card 2 */}
          <motion.div 
            className="bg-gradient-to-br from-[#1a2847] to-[#2B1E5A] border-2 border-[#6BB8FF]/40 rounded-xl p-6 hover:shadow-2xl hover:shadow-[#6BB8FF]/30 transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="flex items-start gap-4">
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-[#6BB8FF] to-[#3b82f6] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#6BB8FF]/40"
                whileHover={{ rotate: 12, scale: 1.1 }}
              >
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </motion.div>
              <div>
                <h4 className="text-[#6BB8FF] font-bold mb-2 text-lg">💬 Proactive Communication Works</h4>
                <p className="text-[#cbd5e1] text-sm leading-relaxed">Premium users responded positively to advance notice about shipping delays.</p>
              </div>
            </div>
          </motion.div>

          {/* Thunder Rewards Card 3 */}
          <motion.div 
            className="bg-gradient-to-br from-[#1a2847] to-[#2B1E5A] border-2 border-[#6BB8FF]/40 rounded-xl p-6 hover:shadow-2xl hover:shadow-[#6BB8FF]/30 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="flex items-start gap-4">
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-[#6BB8FF] to-[#3b82f6] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#6BB8FF]/40"
                whileHover={{ rotate: 12, scale: 1.1 }}
              >
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </motion.div>
              <div>
                <h4 className="text-[#6BB8FF] font-bold mb-2 text-lg">🎁 Bonus Rewards Drive Engagement</h4>
                <p className="text-[#cbd5e1] text-sm leading-relaxed">Small incentives significantly increased motivation during the delay period.</p>
              </div>
            </div>
          </motion.div>

          {/* Thunderstand Card 1 */}
          <motion.div 
            className="bg-gradient-to-br from-[#1a2847] to-[#2B1E5A] border-2 border-[#8b5cf6]/40 rounded-xl p-6 hover:shadow-2xl hover:shadow-[#8b5cf6]/30 transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="flex items-start gap-4">
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-[#8b5cf6] to-[#c084fc] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#8b5cf6]/40"
                whileHover={{ rotate: 12, scale: 1.1 }}
              >
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </motion.div>
              <div>
                <h4 className="text-[#8b5cf6] font-bold mb-2 text-lg">📋 Onboarding Too Long</h4>
                <p className="text-[#cbd5e1] text-sm leading-relaxed">11-screen onboarding overwhelmed users, causing abandonment before completion.</p>
              </div>
            </div>
          </motion.div>

          {/* Thunderstand Card 2 */}
          <motion.div 
            className="bg-gradient-to-br from-[#1a2847] to-[#2B1E5A] border-2 border-[#8b5cf6]/40 rounded-xl p-6 hover:shadow-2xl hover:shadow-[#8b5cf6]/30 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="flex items-start gap-4">
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-[#8b5cf6] to-[#c084fc] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#8b5cf6]/40"
                whileHover={{ rotate: 12, scale: 1.1 }}
              >
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
              <div>
                <h4 className="text-[#8b5cf6] font-bold mb-2 text-lg">⚡ Show Value Faster</h4>
                <p className="text-[#cbd5e1] text-sm leading-relaxed">Users needed immediate clarity on how the app helps them study.</p>
              </div>
            </div>
          </motion.div>

          {/* Thunderstand Card 3 */}
          <motion.div 
            className="bg-gradient-to-br from-[#1a2847] to-[#2B1E5A] border-2 border-[#8b5cf6]/40 rounded-xl p-6 hover:shadow-2xl hover:shadow-[#8b5cf6]/30 transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <div className="flex items-start gap-4">
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-[#8b5cf6] to-[#c084fc] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#8b5cf6]/40"
                whileHover={{ rotate: 12, scale: 1.1 }}
              >
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </motion.div>
              <div>
                <h4 className="text-[#8b5cf6] font-bold mb-2 text-lg">🎯 Focus on Quick Wins</h4>
                <p className="text-[#cbd5e1] text-sm leading-relaxed">Small UI refinements could improve task completion within the 3-week timeline.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Business Constraints */}
        <motion.div 
          className="bg-gradient-to-r from-[#fbbf24]/20 via-[#f59e0b]/20 to-[#d97706]/20 border-l-4 border-[#fbbf24] rounded-xl p-6 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#fbbf24]/20 to-transparent rounded-full blur-xl"></div>
          <h4 className="text-[#fbbf24] font-bold mb-2 text-lg flex items-center gap-2 relative z-10">
            ⚠️ Business Constraints
          </h4>
          <p className="text-[#cbd5e1] text-sm leading-relaxed relative z-10">
            Limited resources and a tight timeline meant we needed to delay reward shipping without compromising engagement, while quickly iterating Thunderstand for launch.
          </p>
        </motion.div>

        {/* Opportunity Statements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-white text-4xl font-bold mb-6 bg-gradient-to-r from-[#7ED957] to-[#10b981] bg-clip-text text-transparent">
            🎯 Opportunity
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-gradient-to-br from-[#ff6b6b]/10 to-[#ff5252]/10 border-l-4 border-[#ff6b6b] rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-[#ff6b6b]/20 transition-all"
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <h3 className="text-[#ff6b6b] text-lg font-bold mb-3 flex items-center gap-2">
                🎁 Thunder Rewards
              </h3>
              <p className="text-[#cbd5e1] text-sm leading-relaxed italic">
                "How might we delay reward delivery and still maintain premium member engagement?"
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-[#6BB8FF]/10 to-[#3b82f6]/10 border-l-4 border-[#6BB8FF] rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-[#6BB8FF]/20 transition-all"
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <h3 className="text-[#6BB8FF] text-lg font-bold mb-3 flex items-center gap-2">
                💡 Thunderstand
              </h3>
              <p className="text-[#cbd5e1] text-sm leading-relaxed italic">
                "How might we identify achievable UI improvements before launch to ensure better user experience?"
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// User Stories Section
function UserStoriesSection() {
  return (
    <div id="insights-to-experience" className="py-16">
      <div className="max-w-[1056px] mx-auto px-6">
        <div className="flex flex-col gap-8">
          <h2 className="text-white text-4xl font-bold">From Insights to Experience</h2>
          <p className="text-[#6BB8FF] text-lg leading-relaxed font-medium">
            Understanding the end user's perspective
          </p>
          <p className="text-[#cbd5e1] leading-relaxed">
            In order to ensure our team remained focused on creating user-centered products, I took the initiative to create user stories that helped us deeply understand the value of what we were building. By sharing these user stories with the team, we were able to keep the user at the forefront of our decision-making process.
          </p>

          {/* Thunder Rewards Stories */}
          <div className="mt-8">
            <h3 className="text-white text-2xl font-semibold mb-6">Thunder Rewards</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="group relative bg-gradient-to-br from-[#1a2847] to-[#2B1E5A] rounded-2xl shadow-2xl hover:shadow-[#fbbf24]/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-white/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#fbbf24]/20 to-[#f59e0b]/20 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#fbbf24]/10 to-transparent rounded-tr-full"></div>
                <div className="relative p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#fbbf24]/50 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">👦</span>
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-[#fbbf24]/20 text-[#fbbf24] text-xs font-semibold rounded-full mb-3 border border-[#fbbf24]/30">
                        USER STORY
                      </div>
                    </div>
                  </div>
                  <p className="text-[#6BB8FF] italic leading-relaxed mb-6 text-lg font-medium">
                    "I want to navigate to the new app that is supposed to be my bonus reward real quick, so I don't have to waste time searching for it on the app store."
                  </p>
                  <div className="pt-6 border-t-2 border-[#fbbf24]/30">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-[#fbbf24] mt-1">💡</span>
                      <span className="text-[#fbbf24] font-semibold text-sm">SOLUTION</span>
                    </div>
                    <p className="text-[#cbd5e1] leading-relaxed">
                      Implement easy-to-find breadcrumbs within our app that lead directly to the newly launched app, allowing users to quickly access their bonus reward.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-[#1a2847] to-[#2B1E5A] rounded-2xl shadow-2xl hover:shadow-[#06b6d4]/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-white/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#06b6d4]/20 to-[#0891b2]/20 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#06b6d4]/10 to-transparent rounded-tr-full"></div>
                <div className="relative p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#06b6d4] to-[#0891b2] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#06b6d4]/50 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">👧</span>
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-[#06b6d4]/20 text-[#06b6d4] text-xs font-semibold rounded-full mb-3 border border-[#06b6d4]/30">
                        USER STORY
                      </div>
                    </div>
                  </div>
                  <p className="text-[#6BB8FF] italic leading-relaxed mb-6 text-lg font-medium">
                    "I just want to know ahead of time if there are any reward delays, so I don't feel like I'm getting blindsided."
                  </p>
                  <div className="pt-6 border-t-2 border-[#06b6d4]/30">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-[#06b6d4] mt-1">💡</span>
                      <span className="text-[#06b6d4] font-semibold text-sm">SOLUTION</span>
                    </div>
                    <p className="text-[#cbd5e1] leading-relaxed">
                      Proactively notify users of potential reward shipping delays and offer a bonus reward as appreciation for their continued engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thunderstand Stories */}
          <div className="mt-8">
            <h3 className="text-white text-2xl font-semibold mb-6">Thunderstand</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="group relative bg-gradient-to-br from-[#1a2847] to-[#2B1E5A] rounded-2xl shadow-2xl hover:shadow-[#a78bfa]/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-white/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#a78bfa]/20 to-[#c084fc]/20 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#a78bfa]/10 to-transparent rounded-tr-full"></div>
                <div className="relative p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#a78bfa] to-[#c084fc] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#a78bfa]/50 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">👨‍🎓</span>
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-[#a78bfa]/20 text-[#c084fc] text-xs font-semibold rounded-full mb-3 border border-[#a78bfa]/30">
                        USER STORY
                      </div>
                    </div>
                  </div>
                  <p className="text-[#6BB8FF] italic leading-relaxed mb-6 text-lg font-medium">
                    "I want to quickly learn how the app can help me study better so that I don't waste too much time figuring out what it does."
                  </p>
                  <div className="pt-6 border-t-2 border-[#a78bfa]/30">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-[#c084fc] mt-1">💡</span>
                      <span className="text-[#c084fc] font-semibold text-sm">SOLUTION</span>
                    </div>
                    <p className="text-[#cbd5e1] leading-relaxed">
                      Condense the 11-screen onboarding into 3-4 screens that effectively communicate the app's value proposition, reducing cognitive load and improving retention.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-[#1a2847] to-[#2B1E5A] rounded-2xl shadow-2xl hover:shadow-[#7ED957]/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-white/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7ED957]/20 to-[#10b981]/20 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#7ED957]/10 to-transparent rounded-tr-full"></div>
                <div className="relative p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#7ED957] to-[#10b981] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#7ED957]/50 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">👩‍🎓</span>
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-[#7ED957]/20 text-[#7ED957] text-xs font-semibold rounded-full mb-3 border border-[#7ED957]/30">
                        USER STORY
                      </div>
                    </div>
                  </div>
                  <p className="text-[#6BB8FF] italic leading-relaxed mb-6 text-lg font-medium">
                    "I want to be able to easily complete tasks and understand what the app is doing for me as I go through the flow so that I can feel confident and in control while using the app."
                  </p>
                  <div className="pt-6 border-t-2 border-[#7ED957]/30">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-[#7ED957] mt-1">💡</span>
                      <span className="text-[#7ED957] font-semibold text-sm">SOLUTION</span>
                    </div>
                    <p className="text-[#cbd5e1] leading-relaxed">
                      Optimize value propositions and enhance task completion by identifying minor changes that improve user effectiveness and confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Design Section
function DesignSection() {
  return (
    <div id="what-we-built" className="bg-[#0F1C3F] max-w-[1056px] mx-auto px-6 py-16">
      <div className="flex flex-col gap-8">
        <h2 className="text-white text-4xl font-bold">What We Built...</h2>
        <p className="text-[#6BB8FF] text-lg leading-relaxed font-medium -mt-2">
          Building out the Experience
        </p>
        <p className="text-[#cbd5e1] leading-relaxed">
          I used the user stories as a basis for creating both low-fidelity and high-fidelity wireframes. Throughout the design process, I conducted frequent testing sessions with all stakeholders. The objective was to find the optimal balance between user needs and project constraints in order to achieve the best possible product outcomes.
        </p>

        {/* Thunder Rewards Design */}
        <div className="mt-12">
          <h3 className="text-white text-3xl font-semibold mb-6">Thunder Rewards</h3>
          <h4 className="text-[#6BB8FF] text-xl font-semibold mb-6">Improving Engagement through Compelling Content Strategy</h4>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="rounded-2xl p-8 overflow-hidden bg-white shadow-2xl border border-white/10">
              <img 
                src="https://static.wixstatic.com/media/9ce191_efc0d3347feb493fb433646ab7b1e646~mv2.png/v1/crop/x_1,y_0,w_577,h_768/fill/w_577,h_768,al_c,q_90,enc_avif,quality_auto/Frame%2017.png" 
                alt="Iteration 1: Pop-up on the Home Screen" 
                className="w-full max-w-sm h-auto mx-auto block rounded-lg"
              />
              <p className="text-[#64748b] text-center text-sm mt-4">Iteration 1: Pop-up on the Home Screen</p>
            </div>

            <div className="bg-gradient-to-br from-[#6BB8FF]/10 to-[#3b82f6]/10 border border-[#6BB8FF]/30 rounded-xl p-6 flex items-center shadow-lg">
              <p className="text-[#cbd5e1] leading-relaxed">
                Although the first iteration provided the necessary information to users, it failed to engage them. The goal was to create compelling content that serves as a breadcrumb trail, guiding users to discover and explore the new app. To achieve this objective, we need to implement an effective content strategy that not only informs but also motivates users to take advantage of their "bonus reward."
              </p>
            </div>
          </div>

          {/* Final Design Solution */}
          <div className="mt-12 bg-gradient-to-br from-[#7ED957]/10 to-[#10b981]/10 border border-[#7ED957]/30 rounded-2xl p-8 shadow-2xl">
            <h4 className="text-[#7ED957] text-2xl font-semibold mb-4">Final Design Solution</h4>
            <p className="text-[#cbd5e1] leading-relaxed mb-6">
              Creating a transition experience from normal mode to summer break mode by hinting at what's coming next.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <img 
                      src="https://static.wixstatic.com/media/9ce191_062c32b1405443d19b3a9a42c8eba9df~mv2.jpg/v1/crop/x_20,y_0,w_1041,h_2039/fill/w_616,h_1206,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled.jpg" 
                      alt="Pop-up variation left" 
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-[#64748b] text-center text-sm mt-2">Home Screen (Before)</p>
                  </div>
                  <div>
                    <img 
                      src="https://static.wixstatic.com/media/9ce191_8bee76ad42d044f7ad0820e36a00d946~mv2.png/v1/crop/x_41,y_0,w_1531,h_2304/fill/w_804,h_1204,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2016.png" 
                      alt="Pop-up on Home Screen" 
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-[#64748b] text-center text-sm mt-2">Pop-up on Home Screen</p>
                    <p className="text-[#64748b] text-center text-sm">Released 15 days before Summer mode</p>
                  </div>
                  <div>
                    <img 
                      src="https://static.wixstatic.com/media/9ce191_6afd4b95343e417481378f709c476ad0~mv2.png/v1/crop/x_157,y_5,w_1162,h_2299/fill/w_616,h_1204,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2015.png" 
                      alt="Pop-up variation right" 
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-[#64748b] text-center text-sm mt-2">Summer Break Mode Pop-up on Home Screen</p>
                  </div>
                </div>
                
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <img 
                      src="https://static.wixstatic.com/media/9ce191_6afd4b95343e417481378f709c476ad0~mv2.png/v1/crop/x_1864,y_5,w_1147,h_2299/fill/w_614,h_1222,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2015.png" 
                      alt="Home Screen Summer Break Mode" 
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-[#64748b] text-center text-sm mt-2">Home Screen</p>
                    <p className="text-[#64748b] text-center text-sm">(Summer Break Mode)</p>
                  </div>
                  <div>
                    <img 
                      src="https://static.wixstatic.com/media/9ce191_68c0b2a0bc0c4b23869dab5a3d50f525~mv2.png/v1/crop/x_1654,y_0,w_1262,h_2242/fill/w_672,h_1196,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2022.png" 
                      alt="Summer Break Mode Announcement Screen" 
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-[#64748b] text-center text-sm mt-2">Summer Break Mode Announcement Screen</p>
                  </div>
                  <div>
                    <img 
                      src="https://static.wixstatic.com/media/9ce191_68c0b2a0bc0c4b23869dab5a3d50f525~mv2.png/v1/crop/x_3444,y_0,w_1261,h_3597/fill/w_672,h_1918,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2022.png" 
                      alt="Download app button" 
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-[#64748b] text-center text-sm mt-2">The 'download app' button takes the user to the 'Thunderstand' product on the app store.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thunderstand Design */}
        <div className="mt-16">
          <h3 className="text-white text-3xl font-semibold mb-6">Thunderstand</h3>
          <h4 className="text-[#6BB8FF] text-xl font-semibold mb-6">Streamlining the Onboarding process</h4>
          
          <p className="text-[#cbd5e1] leading-relaxed mb-8">
            To achieve this, we can aim to provide users with quick insights into the app benefits within the first 3-4 screens, while also incorporating a user progress indicator to guide them through the flow and build their confidence in the product. By implementing these strategies, we can create a positive user experience that encourages continued engagement with our app.
          </p>

          <div className="grid grid-cols-1 gap-8 mb-8">
            <div className="rounded-xl p-6">
              <p className="text-[#ef4444] font-medium mb-2 text-lg">Before</p>
              <div className="bg-white rounded-lg p-4 shadow-2xl">
                <img 
                  src="https://static.wixstatic.com/media/9ce191_384548f6fe844fa7a797ba01f489294e~mv2.png/v1/crop/x_176,y_2885,w_7719,h_2488/fill/w_1750,h_564,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/old_onboarding.png" 
                  alt="Before onboarding" 
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-[#64748b] text-center text-sm mt-3">11 onboarding screens</p>
              </div>
            </div>
            
            <div className="rounded-xl p-6">
              <p className="text-[#7ED957] font-medium mb-2 text-lg">After</p>
              <div className="bg-white rounded-lg p-4 shadow-2xl">
                <img 
                  src="https://static.wixstatic.com/media/9ce191_829c9af7190345f5b5837dde0d4f0291~mv2.jpg/v1/crop/x_0,y_0,w_4716,h_2134/fill/w_1940,h_878,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/onboard.jpg" 
                  alt="After onboarding" 
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-[#7ED957] font-medium text-center text-sm mt-3">3-4 concise screens with progress indicator</p>
              </div>
            </div>
          </div>

          {/* Learn and Pivot */}
          <div className="mt-8 bg-gradient-to-r from-[#fbbf24]/20 to-[#f59e0b]/20 border border-[#fbbf24]/30 rounded-xl p-6 shadow-lg">
            <h4 className="text-[#fbbf24] text-lg font-semibold mb-4">Learn and Pivot: Categorizing and grouping the assessment questions into buckets</h4>
            <p className="text-[#cbd5e1] leading-relaxed mb-4">
              Our current questionnaire comprises 23 questions, which may overwhelm users and make the task seem insurmountable. To address this, we can break down the big task into smaller ones to make the work more manageable and less intimidating. This approach will help users feel in control at every step and achieve "quick wins" as they progress through each category.
            </p>
            
            <div className="mt-6 bg-white rounded-xl p-6 shadow-2xl">
              <div className="space-y-8">
                <div>
                  <p className="text-[#0F1C3F] font-semibold mb-2">Before</p>
                  <img 
                    src="https://static.wixstatic.com/media/9ce191_53509d604338411595231ae2d683def1~mv2.jpg/v1/fill/w_1450,h_1140,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/questions-2.jpg" 
                    alt="Before" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div>
                  <img 
                    src="https://static.wixstatic.com/media/9ce191_5ec8510179714ff29d481b7d5064e450~mv2.jpg/v1/fill/w_2058,h_1160,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/questions-1.jpg" 
                    alt="After" 
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-[#0F1C3F] font-semibold mt-2">After</p>
                </div>
              </div>
              <p className="text-[#64748b] mt-6 text-center">The 23 questions were organized into five buckets based on their content.</p>
            </div>
            
            <p className="text-[#94a3b8] text-sm italic mt-4">
              Note: This section of the design was delayed for development due to time constraints and low priority
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Impact & Outcomes Section
function ImpactOutcomesSection() {
  const metrics = [
    {
      value: "60%",
      label: "of tested users",
      description: "discovered Thunderstand via the bonus reward pathway",
      subtext: "(6/10 users)"
    },
    {
      value: "100%",
      label: "usability preference",
      description: "of participants preferred the simplified onboarding",
      subtext: "(10/10 users)"
    },
    {
      value: "~65%",
      label: "reduction",
      description: "in onboarding length, from 11 screens to 3–4",
      subtext: ""
    },
    {
      value: "2",
      label: "new memberships",
      description: "acquired despite delayed physical rewards",
      subtext: ""
    }
  ];

  return (
    <div id="impact" className="py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#7ED957]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#8b5cf6]/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-[1056px] mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-8">
          <motion.h2 
            className="text-white text-4xl font-bold bg-gradient-to-r from-[#7ED957] via-[#6BB8FF] to-[#8b5cf6] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            🏆 Impact & Outcomes
          </motion.h2>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {metrics.map((metric, idx) => (
              <motion.div 
                key={idx} 
                className="bg-gradient-to-br from-[#7ED957]/20 via-[#10b981]/10 to-[#1a2847] border-2 border-[#7ED957]/40 rounded-2xl p-8 shadow-2xl hover:shadow-[#7ED957]/30 transition-all relative overflow-hidden group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                {/* Achievement badge */}
                <div className="absolute top-4 right-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-full flex items-center justify-center shadow-lg shadow-[#fbbf24]/50"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-2xl">⭐</span>
                  </motion.div>
                </div>
                
                <div className="text-[#7ED957] text-6xl font-black mb-2 drop-shadow-[0_0_10px_rgba(126,217,87,0.5)]">
                  {metric.value}
                </div>
                <p className="text-white text-lg font-bold mb-3 uppercase tracking-wide">{metric.label}</p>
                <p className="text-[#cbd5e1] leading-relaxed">
                  {metric.description}
                  {metric.subtext && <span className="block text-sm mt-2 text-[#7ED957] font-semibold">{metric.subtext}</span>}
                </p>
                
                {/* Decorative glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#7ED957]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="bg-gradient-to-r from-[#6BB8FF]/20 to-[#8b5cf6]/20 border-2 border-[#6BB8FF]/40 rounded-xl p-6 mt-4 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-[#6BB8FF] text-sm italic font-medium flex items-center gap-2">
              ℹ️ All metrics reflect early-stage usability testing and short-term product signals.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Retrospective Section
function RetrospectiveSection() {
  return (
    <div id="reflection" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#8b5cf6]/10 via-[#6BB8FF]/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-[1056px] mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-8">
          {/* Header with decorative element */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -left-4 top-0 w-1.5 h-20 bg-gradient-to-b from-[#8b5cf6] via-[#6BB8FF] to-[#7ED957] rounded-full shadow-lg shadow-[#8b5cf6]/50"></div>
            <h2 className="text-white text-4xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#6BB8FF] bg-clip-text text-transparent">
              💭 Reflection
            </h2>
          </motion.div>
          
          {/* Main content with visual card */}
          <motion.div 
            className="bg-gradient-to-br from-[#1a2847] via-[#1a1447] to-[#2B1E5A] rounded-2xl p-10 border-2 border-[#8b5cf6]/30 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#8b5cf6]/20 to-transparent rounded-full blur-2xl"></div>
            <p className="text-[#cbd5e1] text-lg leading-relaxed mb-4">
              This project reinforced the importance of prioritisation under constraints.
            </p>

            <p className="text-[#cbd5e1] leading-relaxed relative z-10">
              Instead of attempting large-scale redesigns, we focused on small, high-impact changes that were realistic within three weeks.
            </p>
          </motion.div>

          {/* Key Learnings */}
          <div className="mt-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6BB8FF] to-[#a78bfa] rounded-lg flex items-center justify-center shadow-lg shadow-[#6BB8FF]/50">
                <span className="text-white text-xl">💡</span>
              </div>
              <h3 className="text-white text-2xl font-semibold">Key learnings</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group bg-gradient-to-br from-[#1a2847] to-[#2B1E5A] border-l-4 border-[#6BB8FF] rounded-xl p-8 shadow-2xl hover:shadow-[#6BB8FF]/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6BB8FF] to-[#3b82f6] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#6BB8FF]/50 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg font-bold">01</span>
                  </div>
                  <h4 className="text-white text-lg font-semibold">Transparent Communication</h4>
                </div>
                <p className="text-[#cbd5e1] leading-relaxed">
                  Transparent communication maintains trust during operational changes
                </p>
              </div>

              <div className="group bg-gradient-to-br from-[#1a2847] to-[#2B1E5A] border-l-4 border-[#a78bfa] rounded-xl p-8 shadow-2xl hover:shadow-[#a78bfa]/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#a78bfa] to-[#c084fc] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#a78bfa]/50 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg font-bold">02</span>
                  </div>
                  <h4 className="text-white text-lg font-semibold">Reduce Cognitive Load</h4>
                </div>
                <p className="text-[#cbd5e1] leading-relaxed">
                  Reducing cognitive load can significantly improve perceived usability
                </p>
              </div>

              <div className="group bg-gradient-to-br from-[#1a2847] to-[#2B1E5A] border-l-4 border-[#7ED957] rounded-xl p-8 shadow-2xl hover:shadow-[#7ED957]/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7ED957] to-[#10b981] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#7ED957]/50 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg font-bold">03</span>
                  </div>
                  <h4 className="text-white text-lg font-semibold">Incremental Improvements</h4>
                </div>
                <p className="text-[#cbd5e1] leading-relaxed">
                  Incremental UX improvements can meaningfully influence engagement
                </p>
              </div>

              <div className="group bg-gradient-to-br from-[#1a2847] to-[#2B1E5A] border-l-4 border-[#fbbf24] rounded-xl p-8 shadow-2xl hover:shadow-[#fbbf24]/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#fbbf24]/50 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg font-bold">04</span>
                  </div>
                  <h4 className="text-white text-lg font-semibold">Agile Prioritisation</h4>
                </div>
                <p className="text-[#cbd5e1] leading-relaxed">
                  Agile prioritisation is critical in startup environments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <div className="bg-[#0a0f1f] border-t border-[#6BB8FF]/20 py-12 shadow-2xl shadow-[#6BB8FF]/10">
      <div className="max-w-[1450px] mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-[#cbd5e1]">
            <p>© Designed with</p>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path
                d={svgPaths.p13f2e300}
                fill="#FB2C36"
                stroke="#FB2C36"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.33333"
              />
            </svg>
            <p>by Shivani Srivastava</p>
          </div>
          
          <a href="#" className="flex items-center gap-2 text-[#cbd5e1] hover:text-[#6BB8FF] transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
              <path
                d={svgPaths.peba4c00}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.67"
              />
              <path
                d="M5 7.5H1.66667V17.5H5V7.5Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.67"
              />
              <path
                d={svgPaths.p25677470}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.67"
              />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function ThunderCaseStudy() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "overview",
        "problem-space",
        "research",
        "insights-to-experience",
        "what-we-built",
        "impact",
        "reflection"
      ];

      // Find which section is currently most visible in the viewport
      let currentSection = sections[0];
      let closestDistance = Infinity;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Distance from top of viewport (accounting for sticky header)
          const distanceFromTop = Math.abs(rect.top - 100);
          
          // If this section is closer to the top of viewport and actually visible
          if (rect.top <= 300 && rect.bottom > 100 && distanceFromTop < closestDistance) {
            closestDistance = distanceFromTop;
            currentSection = sectionId;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0F1C3F] min-h-screen">
      <Header />
      <div className="relative">
        <Navigation activeSection={activeSection} />
        <div className="lg:ml-[240px] pt-[112px]">
          <HeroSection />
          <OverviewSection />
          <KeyFindingsSection />
          <ResearchSection />
          <UserStoriesSection />
          <DesignSection />
          <ImpactOutcomesSection />
          <RetrospectiveSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
