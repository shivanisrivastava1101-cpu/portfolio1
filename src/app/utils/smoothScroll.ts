let activeAnimationFrame: number | null = null;
let cleanupInterruptionListeners: (() => void) | null = null;
let activeResolve: ((result: SmoothScrollResult) => void) | null = null;
let restoreScrollBehavior: (() => void) | null = null;

export type SmoothScrollResult = "completed" | "interrupted";
const SETTLE_TOLERANCE = 2;
const SETTLE_FRAME_COUNT = 2;

function easeInOutSilky(progress: number) {
  return progress * progress * progress * (progress * (progress * 6 - 15) + 10);
}

function getDuration(start: number, target: number) {
  const distance = Math.abs(target - start);
  return Math.min(950, Math.max(420, distance * 0.48));
}

function getMaxScrollTop() {
  const scrollingElement =
    document.scrollingElement ?? document.documentElement;
  return Math.max(0, scrollingElement.scrollHeight - window.innerHeight);
}

function getScrollingElement() {
  return document.scrollingElement ?? document.documentElement;
}

function setScrollTop(top: number) {
  getScrollingElement().scrollTop = top;
}

function suspendNativeSmoothScroll() {
  const html = document.documentElement;
  const body = document.body;
  const previousHtmlScrollBehavior = html.style.scrollBehavior;
  const previousBodyScrollBehavior = body.style.scrollBehavior;

  html.style.scrollBehavior = "auto";
  body.style.scrollBehavior = "auto";

  return () => {
    html.style.scrollBehavior = previousHtmlScrollBehavior;
    body.style.scrollBehavior = previousBodyScrollBehavior;
  };
}

function stopActiveAnimation(result: SmoothScrollResult = "interrupted") {
  if (activeAnimationFrame !== null) {
    window.cancelAnimationFrame(activeAnimationFrame);
    activeAnimationFrame = null;
  }

  if (cleanupInterruptionListeners) {
    cleanupInterruptionListeners();
    cleanupInterruptionListeners = null;
  }

  if (restoreScrollBehavior) {
    restoreScrollBehavior();
    restoreScrollBehavior = null;
  }

  if (activeResolve) {
    const resolve = activeResolve;
    activeResolve = null;
    resolve(result);
  }
}

function bindInterruptionListeners(onInterrupt: () => void) {
  const controller = new AbortController();
  const options = { signal: controller.signal };

  window.addEventListener("wheel", onInterrupt, options);
  window.addEventListener("touchstart", onInterrupt, options);
  window.addEventListener("keydown", onInterrupt, options);
  window.addEventListener("mousedown", onInterrupt, options);

  return () => controller.abort();
}

export function smoothScrollTo(targetTop: number, duration?: number) {
  return new Promise<SmoothScrollResult>((resolve) => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const clampedTargetTop = Math.max(
      0,
      Math.min(targetTop, getMaxScrollTop()),
    );

    if (reducedMotion) {
      setScrollTop(clampedTargetTop);
      resolve("completed");
      return;
    }

    stopActiveAnimation();
    activeResolve = resolve;
    restoreScrollBehavior = suspendNativeSmoothScroll();

    const startTop = window.scrollY;
    const distance = clampedTargetTop - startTop;

    if (Math.abs(distance) < SETTLE_TOLERANCE) {
      setScrollTop(clampedTargetTop);
      stopActiveAnimation("completed");
      return;
    }

    const animationDuration =
      duration ?? getDuration(startTop, clampedTargetTop);
    const startTime = performance.now();

    cleanupInterruptionListeners = bindInterruptionListeners(() => {
      stopActiveAnimation("interrupted");
    });

    const finishWhenSettled = () => {
      let settledFrames = 0;

      const verifySettled = () => {
        const currentTop = window.scrollY;

        if (Math.abs(currentTop - clampedTargetTop) <= SETTLE_TOLERANCE) {
          settledFrames += 1;
        } else {
          settledFrames = 0;
          setScrollTop(clampedTargetTop);
        }

        if (settledFrames >= SETTLE_FRAME_COUNT) {
          stopActiveAnimation("completed");
          return;
        }

        activeAnimationFrame = window.requestAnimationFrame(verifySettled);
      };

      activeAnimationFrame = window.requestAnimationFrame(verifySettled);
    };

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
      const easedProgress = easeInOutSilky(progress);
      const nextTop = startTop + distance * easedProgress;

      setScrollTop(nextTop);

      if (progress < 1) {
        activeAnimationFrame = window.requestAnimationFrame(step);
        return;
      }

      setScrollTop(clampedTargetTop);
      finishWhenSettled();
    };

    activeAnimationFrame = window.requestAnimationFrame(step);
  });
}
