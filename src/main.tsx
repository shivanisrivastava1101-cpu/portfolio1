import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app/App.tsx";
import CaseStudy1 from "./app/caseStudy1/CaseStudy1";
import CaseStudy2 from "./app/caseStudy2/CaseStudy2";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/casestudy1" element={<CaseStudy1 />} />
      <Route path="/caseStudy2" element={<CaseStudy2 />} />
    </Routes>
  </BrowserRouter>,
);
