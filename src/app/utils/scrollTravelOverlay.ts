export const SCROLL_TRAVEL_EVENT = "app:scroll-travel";

export type ScrollTravelDetail = {
  message?: string;
};

export function showScrollTravelOverlay(detail: ScrollTravelDetail = {}) {
  window.dispatchEvent(
    new CustomEvent<ScrollTravelDetail>(SCROLL_TRAVEL_EVENT, {
      detail: {
        ...detail,
        action: "show",
      } as ScrollTravelDetail & { action: "show" },
    }),
  );
}

export function hideScrollTravelOverlay() {
  window.dispatchEvent(
    new CustomEvent<ScrollTravelDetail & { action: "hide" }>(
      SCROLL_TRAVEL_EVENT,
      {
        detail: { action: "hide" },
      },
    ),
  );
}
