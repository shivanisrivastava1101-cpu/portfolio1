import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useInView } from "./useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "Unified Trading Experience",
    description:
      "Redesigning a complex trading platform to create a seamless, intuitive experience for both novice and expert traders.",
    image:
      "https://images.unsplash.com/photo-1723785735443-16ffd373f398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0cmFkaW5nJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwODg2NjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenge:
      "Traders were overwhelmed by cluttered interfaces and struggled to execute trades quickly during critical market moments.",
    solution:
      "I conducted extensive user research, created information architecture that prioritized critical functions, and designed a customizable dashboard that adapts to different trading styles. The new interface reduces cognitive load while maintaining access to advanced features.",
    impact: [
      "42% reduction in average trade execution time",
      "65% increase in user satisfaction scores",
      "30% decrease in support tickets related to platform navigation",
    ],
    navigateUrl: "/casestudy1",
  },
  {
    id: 2,
    title: "Terraso App Story Map Feature",
    description:
      "Designing an interactive story map feature that helps communities visualize and share their land restoration journeys.",
    image:
      "https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtYXAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwODg2NjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenge:
      "Community groups needed a way to document and share their environmental restoration efforts, but existing tools were too technical for non-expert users.",
    solution:
      "I designed an intuitive story map builder with drag-and-drop functionality, visual timeline elements, and multimedia integration. The interface guides users through storytelling while automatically organizing geographic and temporal data.",
    impact: [
      "Over 200 community stories created in the first 3 months",
      "88% of users successfully created their first story without assistance",
      "Featured in environmental education programs across 5 countries",
    ],
    navigateUrl: "/caseStudy2",
  },
  {
    id: 3,
    title: "iOS Design Enhancements",
    description:
      "Modernizing an iOS app's design system to align with latest platform standards while maintaining brand identity.",
    image:
      "https://images.unsplash.com/photo-1758770478140-e45dac838d40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpT1MlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwODg2NjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenge:
      "The app felt outdated compared to modern iOS apps and didn't take advantage of new platform capabilities, leading to declining user engagement.",
    solution:
      "I led a comprehensive design refresh that incorporated iOS design patterns, introduced haptic feedback, optimized for accessibility features, and created a flexible component system that scales across device sizes and supports dark mode.",
    impact: [
      "App Store rating improved from 3.2 to 4.7 stars",
      "45% increase in daily active users within 2 months of launch",
      "Accessibility score increased to 95/100 on industry audits",
    ],
    navigateUrl: "/casestudy3",
  },
];

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const navigate = useNavigate();

  const handleProjectClick = (projectUrl: string) => {
    if (projectUrl.startsWith("/")) {
      navigate(projectUrl);
    } else {
      console.warn(`External URL navigation is not implemented: ${projectUrl}`);
    }
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="scroll-mt-24 py-32 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl md:text-6xl mb-6 tracking-tight text-slate-900"
            style={{ fontWeight: 600, letterSpacing: "-0.02em" }}
          >
            Selected Work
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Strategic design solutions for complex enterprise challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => handleProjectClick(project.navigateUrl)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleProjectClick(project.navigateUrl);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-slate-200/50">
                <motion.div
                  className="aspect-[4/3] overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-slate-900/10 cursor-pointer"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3
                    className="text-2xl mb-3 text-white"
                    style={{ fontWeight: 600, letterSpacing: "-0.01em" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-200 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <motion.div
                  className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-2xl text-slate-900">→</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
