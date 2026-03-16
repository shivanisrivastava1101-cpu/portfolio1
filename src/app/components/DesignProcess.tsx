import { motion } from "motion/react";
import { Search, PenTool, Smartphone, FlaskConical, Sparkles } from "lucide-react";
import { useInView } from "./useInView";

const processSteps = [
  {
    icon: Search,
    title: "Research",
    description: "Deep dive into user needs, behaviors, and pain points through interviews, surveys, and analytics.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: PenTool,
    title: "Wireframes",
    description: "Transform insights into low-fidelity sketches and wireframes to explore multiple solutions.",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: Smartphone,
    title: "Prototypes",
    description: "Create high-fidelity interactive prototypes that bring the design vision to life.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: FlaskConical,
    title: "Testing",
    description: "Validate designs with real users, gather feedback, and iterate based on findings.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Sparkles,
    title: "Final Designs",
    description: "Deliver polished, developer-ready designs with comprehensive documentation.",
    color: "from-violet-500 to-violet-600"
  }
];

export function DesignProcess() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight" style={{ fontWeight: 600 }}>
            Design Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A systematic approach to creating exceptional user experiences
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-300 via-cyan-300 to-violet-300 -translate-y-1/2" />
          
          <div className="relative flex justify-between items-center">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex flex-col items-center w-48"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-6 relative z-10`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-xl mb-2 text-center" style={{ fontWeight: 600 }}>
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className="flex gap-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                  whileHover={{ scale: 1.1 }}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>
                {index < processSteps.length - 1 && (
                  <div className="w-1 h-full bg-gradient-to-b from-purple-300 to-cyan-300 mt-4" />
                )}
              </div>

              <div className="flex-1 pb-8">
                <h3 className="text-xl mb-2" style={{ fontWeight: 600 }}>
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
