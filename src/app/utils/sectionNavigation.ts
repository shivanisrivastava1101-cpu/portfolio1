import type { NavigateFunction } from "react-router-dom";
import { smoothScrollTo } from "./smoothScroll";
import {
  hideScrollTravelOverlay,
  showScrollTravelOverlay,
} from "./scrollTravelOverlay";
import { isPageTransitionActive } from "./pageTransition";

const PENDING_SECTION_SCROLL_KEY = "pendingSectionScroll";
const LONG_SCROLL_THRESHOLD = 900;
const TRAVEL_OVERLAY_FADE_IN = 200;
const TRAVEL_OVERLAY_VISIBLE_HOLD = 520;
const TRAVEL_SCROLL_DURATION = 1050;
const TRAVEL_OVERLAY_FADE_OUT_BUFFER = 120;

let activeTravelSequence = 0;

type ScrollOptions = {
  offsetSelectors?: string[];
  extraOffset?: number;
  duration?: number;
};

type PendingSectionScroll = {
  targetPath: string;
  sectionId?: string;
  offsetSelectors?: string[];
  extraOffset?: number;
  duration?: number;
  scrollToTop?: boolean;
};

function wait(duration: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, duration);
  });
}

async function runLongDistanceScroll(
  targetTop: number,
  sequenceId: number,
  duration?: number,
) {
  showScrollTravelOverlay({ message: "Traveling to section…" });

  await wait(TRAVEL_OVERLAY_FADE_IN + TRAVEL_OVERLAY_VISIBLE_HOLD);

  if (sequenceId !== activeTravelSequence) {
    return;
  }

  await smoothScrollTo(targetTop, duration ?? TRAVEL_SCROLL_DURATION);

  if (sequenceId !== activeTravelSequence) {
    return;
  }

  await wait(TRAVEL_OVERLAY_FADE_OUT_BUFFER);

  if (sequenceId !== activeTravelSequence) {
    return;
  }

  hideScrollTravelOverlay();
}

function normalizePath(pathname: string) {
  return pathname.replace(/\/+$/, "") || "/";
}

function getCombinedOffset(
  selectors: string[] = ["[data-global-header='true']"],
  extraOffset = 12,
) {
  const uniqueElements = new Set<Element>();

  selectors.forEach((selector) => {
    const element = document.querySelector(selector);
    if (element) {
      uniqueElements.add(element);
    }
  });

  const combinedHeight = Array.from(uniqueElements).reduce((sum, element) => {
    return sum + element.getBoundingClientRect().height;
  }, 0);

  return combinedHeight + extraOffset;
}

export function scrollToSectionById(
  sectionId: string,
  options: ScrollOptions = {},
) {
  const element = document.getElementById(sectionId);

  if (!element) {
    return false;
  }

  const offset = getCombinedOffset(
    options.offsetSelectors,
    options.extraOffset,
  );
  const targetTop =
    element.getBoundingClientRect().top + window.scrollY - offset;

  const distance = Math.abs(targetTop - window.scrollY);
  activeTravelSequence += 1;
  const sequenceId = activeTravelSequence;

  if (isPageTransitionActive()) {
    void smoothScrollTo(targetTop, options.duration);
    return true;
  }

  if (distance >= LONG_SCROLL_THRESHOLD) {
    void runLongDistanceScroll(targetTop, sequenceId, options.duration);

    return true;
  }

  hideScrollTravelOverlay();
  void smoothScrollTo(targetTop, options.duration);
  return true;
}

export function smoothScrollToTop(duration?: number) {
  void smoothScrollTo(0, duration);
}

export function navigateToPathOrSection({
  navigate,
  pathname,
  targetPath,
  sectionId,
  offsetSelectors,
  extraOffset,
  duration,
  scrollToTop,
}: {
  navigate: NavigateFunction;
  pathname: string;
  targetPath: string;
  sectionId?: string;
  offsetSelectors?: string[];
  extraOffset?: number;
  duration?: number;
  scrollToTop?: boolean;
}) {
  const currentPath = normalizePath(pathname);
  const destinationPath = normalizePath(targetPath);

  if (currentPath === destinationPath) {
    if (scrollToTop) {
      smoothScrollToTop(duration);
      return;
    }

    if (sectionId) {
      scrollToSectionById(sectionId, {
        offsetSelectors,
        extraOffset,
        duration,
      });
    }
    return;
  }

  const payload: PendingSectionScroll = {
    targetPath: destinationPath,
    sectionId,
    offsetSelectors,
    extraOffset,
    duration,
    scrollToTop,
  };

  sessionStorage.setItem(PENDING_SECTION_SCROLL_KEY, JSON.stringify(payload));
  navigate(destinationPath);
}

export function consumePendingSectionScroll(pathname: string) {
  const currentPath = normalizePath(pathname);
  const rawPayload = sessionStorage.getItem(PENDING_SECTION_SCROLL_KEY);

  if (!rawPayload) {
    return null;
  }

  try {
    const payload = JSON.parse(rawPayload) as PendingSectionScroll;
    if (normalizePath(payload.targetPath) !== currentPath) {
      return null;
    }

    sessionStorage.removeItem(PENDING_SECTION_SCROLL_KEY);
    return payload;
  } catch {
    sessionStorage.removeItem(PENDING_SECTION_SCROLL_KEY);
    return null;
  }
}
