import { smoothScrollTo } from "./smoothScroll";
import {
  hideScrollTravelOverlay,
  showScrollTravelOverlay,
} from "./scrollTravelOverlay";

const STABLE_AT_TOP_MS = 190;
const STABLE_TOLERANCE = 2;
const SCROLL_TOP_DURATION = 920;
const MAX_WAIT_MS = 2800;

let activeTransitionToken = 0;
let hasActivePageTransition = false;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function waitForStableScrollAtTarget(targetTop: number) {
  return new Promise<void>((resolve) => {
    const startTime = performance.now();
    let lastY = window.scrollY;
    let lastChangeTime = startTime;

    const step = (now: number) => {
      const currentY = window.scrollY;

      if (Math.abs(currentY - lastY) > STABLE_TOLERANCE) {
        lastY = currentY;
        lastChangeTime = now;
      }

      const nearTarget = Math.abs(currentY - targetTop) <= STABLE_TOLERANCE;
      const stableLongEnough = now - lastChangeTime >= STABLE_AT_TOP_MS;
      const timedOut = now - startTime >= MAX_WAIT_MS;

      if ((nearTarget && stableLongEnough) || timedOut) {
        resolve();
        return;
      }

      window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  });
}

export function isPageTransitionActive() {
  return hasActivePageTransition;
}

export function startPageTransition(message = "Opening project…") {
  activeTransitionToken += 1;
  hasActivePageTransition = true;
  showScrollTravelOverlay({ message });
  return activeTransitionToken;
}

export async function endPageTransitionWhenStable(token?: number) {
  if (!hasActivePageTransition) {
    return;
  }

  const expectedToken = token ?? activeTransitionToken;
  const reducedMotion = prefersReducedMotion();

  if (reducedMotion) {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  } else {
    await smoothScrollTo(0, SCROLL_TOP_DURATION);
  }

  if (expectedToken !== activeTransitionToken) {
    return;
  }

  await waitForStableScrollAtTarget(0);

  if (expectedToken !== activeTransitionToken) {
    return;
  }

  hasActivePageTransition = false;
  hideScrollTravelOverlay();
}
