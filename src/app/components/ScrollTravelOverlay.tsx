import { Plane } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  SCROLL_TRAVEL_EVENT,
  type ScrollTravelDetail,
} from "../utils/scrollTravelOverlay";

const EXIT_DURATION = 220;

type OverlayPhase = "hidden" | "visible" | "exiting";

export function ScrollTravelOverlay() {
  const [phase, setPhase] = useState<OverlayPhase>("hidden");
  const [message, setMessage] = useState("Scrolling…");
  const timeoutRef = useRef<number | null>(null);
  const phaseRef = useRef<OverlayPhase>("hidden");

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    const handleScrollTravel = (event: Event) => {
      const customEvent = event as CustomEvent<
        ScrollTravelDetail & { action?: "show" | "hide" }
      >;
      const nextMessage = customEvent.detail?.message ?? "Scrolling…";
      const action = customEvent.detail?.action ?? "show";

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      if (action === "hide") {
        if (phaseRef.current === "hidden") {
          return;
        }

        setPhase("exiting");
        timeoutRef.current = window.setTimeout(() => {
          setPhase("hidden");
          timeoutRef.current = null;
        }, EXIT_DURATION);
        return;
      }

      setMessage(nextMessage);
      setPhase("hidden");
      requestAnimationFrame(() => {
        setPhase("visible");
      });
    };

    window.addEventListener(SCROLL_TRAVEL_EVENT, handleScrollTravel);

    return () => {
      window.removeEventListener(SCROLL_TRAVEL_EVENT, handleScrollTravel);
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (phase === "hidden") {
    return null;
  }

  return (
    <div
      className="scroll-travel-overlay"
      data-state={phase}
      aria-hidden="true"
    >
      <div className="scroll-travel-overlay__backdrop" />
      <div className="scroll-travel-overlay__card">
        <div className="scroll-travel-overlay__track">
          <div className="scroll-travel-overlay__track-line" />
          <Plane className="scroll-travel-overlay__plane" />
        </div>
        <p className="scroll-travel-overlay__message">{message}</p>
      </div>
    </div>
  );
}
