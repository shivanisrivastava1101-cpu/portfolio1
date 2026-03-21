import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import App from "./app/App.tsx";
import CaseStudy1 from "./app/caseStudy1/CaseStudy1";
import CaseStudy2 from "./app/caseStudy2/CaseStudy2";
import CaseStudy3 from "./app/casestudy3/ThunderCaseStudy";
import AboutPage from "./app/about/about";
import { ScrollTravelOverlay } from "./app/components/ScrollTravelOverlay";
import {
  endPageTransitionWhenStable,
  isPageTransitionActive,
} from "./app/utils/pageTransition";
import "./styles/index.css";

function RouteTransitionHandler() {
  const location = useLocation();

  useEffect(() => {
    if (!isPageTransitionActive()) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      void endPageTransitionWhenStable();
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [location.pathname]);

  return null;
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/portfolio1">
    <ScrollTravelOverlay />
    <RouteTransitionHandler />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/casestudy1" element={<CaseStudy1 />} />
      <Route path="/caseStudy2" element={<CaseStudy2 />} />
      <Route path="/casestudy3" element={<CaseStudy3 />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </BrowserRouter>,
);
