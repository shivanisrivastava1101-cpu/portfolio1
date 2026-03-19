"use client";

import { useEffect, useState } from "react";
import { FileText, AlertCircle, Briefcase, TrendingUp, Lock } from "lucide-react";

const sections = [
  { id: "overview", label: "Overview", icon: FileText },
  { id: "problem-space", label: "Problem", icon: AlertCircle },
  { id: "work-description", label: "My Work", icon: Briefcase },
  { id: "impact", label: "Outcomes", icon: TrendingUp },
  { id: "nda", label: "NDA Note", icon: Lock },
];

export function SidebarNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll active tab into view
  useEffect(() => {
    if (activeSection) {
      const activeButton = document.querySelector(`button[data-section="${activeSection}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    }
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -160;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-[48px] left-0 right-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-start gap-1 sm:gap-2 overflow-x-auto py-2 scrollbar-hide bg-white">
          {sections.map(({ id, label, icon: Icon }, index) => (
            <div key={id} className="flex items-center flex-shrink-0">
              <button
                onClick={() => scrollToSection(id)}
                className={`group flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 transition-all duration-200 whitespace-nowrap ${
                  activeSection === id
                    ? "text-blue-700 border-b-2 border-blue-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
                data-section={id}
              >
                <span className="text-xs sm:text-sm font-medium">
                  {label}
                </span>
              </button>
              {index < sections.length - 1 && (
                <div className="w-4 sm:w-8 h-[2px] border-t-2 border-dashed border-slate-300 mx-1 sm:mx-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}