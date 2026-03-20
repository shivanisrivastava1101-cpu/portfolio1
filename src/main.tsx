import { createRoot } from "react-dom/client";
import { useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import App from "./app/App.tsx";
import CaseStudy1 from "./app/caseStudy1/CaseStudy1";
import CaseStudy2 from "./app/caseStudy2/CaseStudy2";
import CaseStudy3 from "./app/casestudy3/ThunderCaseStudy";
import "./styles/index.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return null;
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/casestudy1" element={<CaseStudy1 />} />
      <Route path="/caseStudy2" element={<CaseStudy2 />} />
      <Route path="/casestudy3" element={<CaseStudy3 />} />
    </Routes>
  </BrowserRouter>,
);
