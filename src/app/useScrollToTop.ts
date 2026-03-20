import { useLayoutEffect } from "react";
import { smoothScrollTo } from "./utils/smoothScroll";
import { isPageTransitionActive } from "./utils/pageTransition";

export function useScrollToTop() {
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (isPageTransitionActive()) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      smoothScrollTo(0, 800);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);
}
