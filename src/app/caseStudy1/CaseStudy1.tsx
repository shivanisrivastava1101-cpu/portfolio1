import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PortfolioHero } from "./PortfolioHero";
import { ProjectOverview } from "./ProjectOverview";
import { ProblemSpace } from "./ProblemSpace";
import { WorkDescription } from "./WorkDescription";
import { ProjectVisual } from "./ProjectVisual";
import { ImpactOutcomes } from "./ImpactOutcomes";
import { NDANote } from "./NDANote";
import { SidebarNav } from "./SidebarNav";
import { Footer } from "./Footer";

export default function CaseStudy1() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Back navigation */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <span className="text-sm font-medium text-slate-500">Case Study 1</span>
        </div>
      </header>

      {/* Main layout: sidebar + content */}
      <div className="mx-auto max-w-7xl px-6 py-10 lg:flex lg:gap-12">
        {/* Sticky sidebar */}
        <aside className="hidden lg:block lg:w-56 shrink-0">
          <div className="sticky top-24">
            <SidebarNav />
          </div>
        </aside>

        {/* Page content */}
        <main className="flex-1 min-w-0">
          <PortfolioHero />

          <section id="overview">
            <ProjectOverview />
          </section>

          <section id="problem-space">
            <ProblemSpace />
          </section>

          <section id="work-description">
            <WorkDescription />
            <ProjectVisual />
          </section>

          <section id="impact">
            <ImpactOutcomes />
          </section>

          <section id="nda">
            <NDANote />
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
