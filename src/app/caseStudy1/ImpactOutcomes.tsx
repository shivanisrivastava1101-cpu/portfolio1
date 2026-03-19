import { Check, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export function ImpactOutcomes() {
  const outcomes = [
    "Onboarded 2 enterprise clients onto the new cloud-based trading platform",
    "Led experience design for multi-asset trading and order management workflows",
    "Enabled real-time visibility into order status and execution through simplified UX patterns",
    "Reduced workflow fragmentation by aligning interactions across modules",
    "Established shared UX foundations to support long-term design system scalability",
    "Worked closely with PMs, clients, and engineering teams to deliver foundational platform capabilities"
  ];

  return (
    <section className="mb-24">
      <div className="max-w-full">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900 font-bold">
            Impact & Outcomes
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
            <p className="text-sm text-slate-500 italic">
              Early-stage product — metrics reflect design delivery and initial adoption
            </p>
          </div>
        </div>

        {/* Outcome Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Primary Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 border-2 border-emerald-400 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            <div className="relative">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl mb-4 shadow-md">
                  <span className="text-3xl">🎯</span>
                </div>
              </div>
              <div className="text-6xl font-bold text-white mb-3 tracking-tight">
                2
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Enterprise Clients Onboarded
              </h4>
              <p className="text-emerald-50 text-sm leading-relaxed">
                Early adoption of the cloud-based trading platform
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative bg-white border-2 border-slate-200 rounded-2xl p-7 shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-300 overflow-hidden group hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="mb-5">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <TrendingUp className="w-7 h-7 text-blue-600" />
                </div>
              </div>
              <div className="mb-4">
                <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  20–30%
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  Making Trader Tasks Faster and Easier
                </h4>
              </div>
              <p className="text-slate-600 leading-relaxed">Aim for reduction in the time it takes to complete the top 3 trading workflows.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white border-2 border-slate-200 rounded-2xl p-7 shadow-lg hover:shadow-2xl hover:border-purple-400 transition-all duration-300 overflow-hidden group hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="mb-5">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                  30%
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  Reducing Manual Work Through Automation
                </h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Reduce manual actions in areas where automated rules or workflows are available.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative bg-white border-2 border-slate-200 rounded-2xl p-7 shadow-lg hover:shadow-2xl hover:border-emerald-400 transition-all duration-300 overflow-hidden group hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500 to-emerald-600 opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="mb-5">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                Helping Build the Company's First Design System
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Order Manager became the first place where many reusable interface elements were created, because the team needed new layouts, buttons, panels, and interactions for the NextGen UI.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative bg-white border-2 border-slate-200 rounded-2xl p-7 shadow-lg hover:shadow-2xl hover:border-amber-400 transition-all duration-300 overflow-hidden group hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500 to-amber-600 opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="mb-5">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                  </svg>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
                  6+
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  Cross-Functional Collaboration
                </h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Collaborated with 6 engineering teams + 1 design system team + multiple product teams to deliver shared platform features.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative bg-white border-2 border-slate-200 rounded-2xl p-7 shadow-lg hover:shadow-2xl hover:border-indigo-400 transition-all duration-300 overflow-hidden group hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500 to-indigo-600 opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="mb-5">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <svg className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">
                  70%+
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  Positive User Feedback
                </h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Achieved in a Copenhagen focus group with 30 clients, leading to <span className="font-semibold text-slate-900">10–15</span> design improvements directly informed by user insights.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 rounded-full"></div>
          <div className="pl-8 py-5 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-r-2xl shadow-sm">
            <p className="text-slate-700 leading-relaxed text-base">
              The product is currently in early adoption. Usage and performance metrics will continue to evolve as rollout progresses.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
