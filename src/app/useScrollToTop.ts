import { useLayoutEffect } from "react";
import { smoothScrollTo } from "./utils/smoothScroll";

export function useScrollToTop() {
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const frame = window.requestAnimationFrame(() => {
      smoothScrollTo(0, 800);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);
}
