import { useEffect, useState } from "react";
import { PortfolioHero } from "./PortfolioHero";
import { ProjectOverview } from "./ProjectOverview";
import { ProblemSpace } from "./ProblemSpace";
import { WorkDescription } from "./WorkDescription";
import { ProjectVisual } from "./ProjectVisual";
import { ImpactOutcomes } from "./ImpactOutcomes";
import { NDANote } from "./NDANote";
import { SidebarNav } from "./SidebarNav";
import { useScrollToTop } from "../useScrollToTop";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function CaseStudy1() {
  useScrollToTop();
  const [topOffset, setTopOffset] = useState(160);

  useEffect(() => {
    const updateOffsets = () => {
      const topChrome = document.querySelector(
        "[data-top-chrome='case-study-1']",
      );
      const topChromeHeight = topChrome?.getBoundingClientRect().height ?? 0;
      const combinedOffset = topChromeHeight + 12;

      if (combinedOffset > 0) {
        setTopOffset(combinedOffset);
      }
    };

    const previousScrollPaddingTop =
      document.documentElement.style.scrollPaddingTop;
    updateOffsets();
    const frame = window.requestAnimationFrame(updateOffsets);

    window.addEventListener("resize", updateOffsets);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateOffsets);
      document.documentElement.style.scrollPaddingTop =
        previousScrollPaddingTop;
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollPaddingTop = `${topOffset}px`;
  }, [topOffset]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div
        data-top-chrome="case-study-1"
        className="fixed top-0 left-0 right-0 z-[70]"
      >
        <Header fixed={false} />
        <SidebarNav />
      </div>

      {/* Main layout: sidebar + content */}
      <div
        className="mx-auto max-w-7xl px-6 pb-10"
        style={{ paddingTop: `${topOffset}px` }}
      >
        {/* Page content */}
        <main
          className="flex-1 min-w-0"
          style={{ ["--case-study-top-offset" as string]: `${topOffset}px` }}
        >
          <PortfolioHero />

          <section
            id="overview"
            className="scroll-mt-[var(--case-study-top-offset)]"
          >
            <ProjectOverview />
          </section>

          <section
            id="problem-space"
            className="scroll-mt-[var(--case-study-top-offset)]"
          >
            <ProblemSpace />
          </section>

          <section
            id="work-description"
            className="scroll-mt-[var(--case-study-top-offset)]"
          >
            <WorkDescription />
            <ProjectVisual />
          </section>

          <section
            id="impact"
            className="scroll-mt-[var(--case-study-top-offset)]"
          >
            <ImpactOutcomes />
          </section>

          <section
            id="nda"
            className="scroll-mt-[var(--case-study-top-offset)]"
          >
            <NDANote />
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
