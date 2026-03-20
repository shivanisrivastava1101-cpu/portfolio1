import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  consumePendingSectionScroll,
  scrollToSectionById,
  smoothScrollToTop,
} from "../utils/sectionNavigation";

export function usePendingSectionScroll() {
  const location = useLocation();

  useEffect(() => {
    const pending = consumePendingSectionScroll(location.pathname);

    if (!pending) {
      return;
    }

    let timeoutId: number | null = null;
    let frameId: number | null = null;
    let attempts = 0;

    const tryScroll = () => {
      if (pending.scrollToTop) {
        smoothScrollToTop(pending.duration);
        return;
      }

      if (!pending.sectionId) {
        return;
      }

      const didScroll = scrollToSectionById(pending.sectionId, {
        offsetSelectors: pending.offsetSelectors,
        extraOffset: pending.extraOffset,
        duration: pending.duration,
      });

      if (didScroll || attempts >= 6) {
        return;
      }

      attempts += 1;
      timeoutId = window.setTimeout(() => {
        frameId = window.requestAnimationFrame(tryScroll);
      }, 70);
    };

    frameId = window.requestAnimationFrame(tryScroll);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [location.pathname]);
}
