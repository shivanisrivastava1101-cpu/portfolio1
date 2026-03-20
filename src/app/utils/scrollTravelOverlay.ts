export const SCROLL_TRAVEL_EVENT = "app:scroll-travel";

type ScrollTravelAction = "show" | "hide";

export type ScrollTravelDetail = {
  message?: string;
  action?: ScrollTravelAction;
};

export function showScrollTravelOverlay(detail: ScrollTravelDetail = {}) {
  window.dispatchEvent(
    new CustomEvent<ScrollTravelDetail>(SCROLL_TRAVEL_EVENT, {
      detail: {
        ...detail,
        action: "show",
      },
    }),
  );
}

export function hideScrollTravelOverlay() {
  window.dispatchEvent(
    new CustomEvent<ScrollTravelDetail>(SCROLL_TRAVEL_EVENT, {
      detail: { action: "hide" },
    }),
  );
}
