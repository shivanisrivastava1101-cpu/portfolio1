import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [lines, setLines] = useState<Array<{ x1: number; y1: number; x2: number; y2: number; delay: number }>>([]);

  useEffect(() => {
    const lineCount = 15;
    const newLines = Array.from({ length: lineCount }, (_, i) => ({
      x1: Math.random() * 100,
      y1: Math.random() * 100,
      x2: Math.random() * 100,
      y2: Math.random() * 100,
      delay: i * 0.2,
    }));
    setLines(newLines);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {lines.map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="currentColor"
            strokeWidth="0.1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0, 0.6, 0],
              x1: [line.x1, line.x1 + (Math.random() - 0.5) * 20],
              y1: [line.y1, line.y1 + (Math.random() - 0.5) * 20],
            }}
            transition={{
              pathLength: { duration: 3, delay: line.delay, repeat: Infinity, repeatDelay: 2 },
              opacity: { duration: 3, delay: line.delay, repeat: Infinity, repeatDelay: 2 },
              x1: { duration: 8, delay: line.delay, repeat: Infinity, repeatType: "reverse" },
              y1: { duration: 8, delay: line.delay, repeat: Infinity, repeatType: "reverse" },
            }}
          />
        ))}
      </svg>
    </div>
  );
}
