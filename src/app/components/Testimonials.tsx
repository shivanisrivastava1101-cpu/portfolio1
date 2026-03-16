import { motion } from "motion/react";
import { useState } from "react";
import { Quote } from "lucide-react";
import { useInView } from "./useInView";

const testimonials = [
  {
    id: 1,
    quote: "Shivani is a creative, observant, and human-centered product designer with a broad and versatile skill set. I enjoyed working with her at Tech Matters and was consistently impressed by how quickly she grew in her role. Her strong work ethic, go-getter mindset, and passion for lifelong learning were both inspiring and energizing. I highly recommend Shivani to any organization seeking an outstanding product designer.",
    author: "Hana Hyunju Lee",
    role: "Principal UX Designer, Tech Matters, Seattle",
    company: "Tech Matters"
  },
  {
    id: 2,
    quote: "I had the pleasure of meeting Shivani during our time at UCLA Extension for UX Design, where we worked on multiple team projects together. Shivani brought strong problem-solving skills, a deep empathy for users, and exceptional visual design skills. Whether we were brainstorming ideas or refining wireframes, she consistently communicated her ideas and reasoning behind every decision. She was a really valuable teammate and it's been inspiring to see her continued growth as a designer.",
    author: "Kyra Keh",
    role: "UX/UI Designer, Phonexa, California",
    company: "Phonexa"
  },
  {
    id: 3,
    quote: "Highly adaptable to workplace, shivani would be an asset to any team. We have worked together on 3-4 projects. She is motivated, creative, tenacious and a complete pleasure to work with.",
    author: "Shweta Jain",
    role: "Principal Architect and Founder, Studio Jade Architects, New Delhi",
    company: "Studio Jade Architects"
  }
];

export function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl mb-6 tracking-tight text-slate-900" style={{ fontWeight: 600, letterSpacing: "-0.02em" }}>
            Testimonials
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            What colleagues and collaborators say
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-10 flex flex-col cursor-pointer border border-slate-200/50 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              onClick={() => setIsExpanded(!isExpanded)}
              layout
            >
              <Quote className="w-12 h-12 text-indigo-400 mb-6" />
              
              <p className={`text-slate-700 mb-8 leading-relaxed ${isExpanded ? '' : 'line-clamp-4'}`}>
                "{testimonial.quote}"
              </p>

              <div className="mt-auto">
                <p className="text-lg mb-1 text-slate-900" style={{ fontWeight: 600 }}>
                  {testimonial.author}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {testimonial.role}
                </p>
              </div>

              <button className="mt-6 text-indigo-600 hover:text-indigo-700 text-sm self-start" style={{ fontWeight: 500 }}>
                {isExpanded ? '← Show less' : 'Read more →'}
              </button>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}