import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Users } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import svgPaths from "./imports/svg-qyn6hla94m";
import navSvgPaths from "./imports/svg-erpmt3msaq";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useScrollToTop } from "../useScrollToTop";
import {
  navigateToPathOrSection,
  scrollToSectionById,
} from "../utils/sectionNavigation";
import { usePendingSectionScroll } from "../hooks/usePendingSectionScroll";
import { Footer } from "../components/Footer";

// Header Component
function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div
      data-case-study-2-header="true"
      className="bg-[#1a1a1a] border-b border-[#1d293d] border-solid w-full py-[12px] px-[24px] flex items-center justify-between fixed top-0 left-0 right-0 z-50"
    >
      <button
        type="button"
        onClick={() =>
          navigateToPathOrSection({
            navigate,
            pathname,
            targetPath: "/",
            scrollToTop: true,
            duration: 700,
          })
        }
        className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-white text-[14px] hover:text-[#93c5fd] transition-colors cursor-pointer"
      >
        Product & UX Designer
      </button>
      <div className="flex gap-[32px]">
        <button
          type="button"
          onClick={() =>
            navigateToPathOrSection({
              navigate,
              pathname,
              targetPath: "/",
              sectionId: "projects",
              offsetSelectors: ["[data-global-header='true']"],
              extraOffset: 12,
            })
          }
          className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#d1d5dc] text-[16px] text-center cursor-pointer hover:text-white transition-colors"
        >
          Work
        </button>
        <button
          type="button"
          onClick={() =>
            navigateToPathOrSection({
              navigate,
              pathname,
              targetPath: "/",
              sectionId: "about",
              offsetSelectors: ["[data-global-header='true']"],
              extraOffset: 12,
            })
          }
          className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#d1d5dc] text-[16px] text-center cursor-pointer hover:text-white transition-colors"
        >
          About
        </button>
      </div>
    </div>
  );
}

// Side Navigation Component
function OverviewIcon({ isActive }: { isActive: boolean }) {
  const strokeColor = isActive ? "#155DFC" : "#62748E";
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g>
          <path
            d={navSvgPaths.p3713e00}
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={navSvgPaths.pd2076c0}
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M8.33333 7.5H6.66667"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M13.3333 10.8333H6.66667"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M13.3333 14.1667H6.66667"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function ProblemIcon({ isActive }: { isActive: boolean }) {
  const strokeColor = isActive ? "#155DFC" : "#62748E";
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g clipPath="url(#clip0_2_277)">
          <path
            d={navSvgPaths.p14d24500}
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M10 6.66667V10"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M10 13.3333H10.0083"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_277">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RoleIcon({ isActive }: { isActive: boolean }) {
  const strokeColor = isActive ? "#155DFC" : "#62748E";
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g>
          <path
            d={navSvgPaths.pe6b10c0}
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={navSvgPaths.p4c21d00}
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function ApproachIcon({ isActive }: { isActive: boolean }) {
  const strokeColor = isActive ? "#155DFC" : "#62748E";
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g>
          <path
            d={navSvgPaths.p3c797180}
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={navSvgPaths.p3ac0b600}
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function ImpactIcon({ isActive }: { isActive: boolean }) {
  const strokeColor = isActive ? "#155DFC" : "#62748E";
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g>
          <path
            d={navSvgPaths.p2566d000}
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={navSvgPaths.p1bf79e00}
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function InitialDesignIcon({ isActive }: { isActive: boolean }) {
  const strokeColor = isActive ? "#155DFC" : "#62748E";
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g>
          <path
            d="M11.6667 1.66667H5C4.55797 1.66667 4.13405 1.84226 3.82149 2.15482C3.50893 2.46738 3.33334 2.89131 3.33334 3.33334V16.6667C3.33334 17.1087 3.50893 17.5326 3.82149 17.8452C4.13405 18.1577 4.55797 18.3333 5 18.3333H15C15.442 18.3333 15.866 18.1577 16.1785 17.8452C16.4911 17.5326 16.6667 17.1087 16.6667 16.6667V6.66667L11.6667 1.66667Z"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M11.6667 1.66667V6.66667H16.6667"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M13.3333 10.8333H6.66667"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M13.3333 14.1667H6.66667"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M8.33333 7.5H7.5H6.66667"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function WhyFailedIcon({ isActive }: { isActive: boolean }) {
  const strokeColor = isActive ? "#155DFC" : "#62748E";
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g>
          <path
            d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M12.5 7.5L7.5 12.5"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M7.5 7.5L12.5 12.5"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function DesignSolutionIcon({ isActive }: { isActive: boolean }) {
  const strokeColor = isActive ? "#155DFC" : "#62748E";
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g>
          <path
            d="M10 1.66667V4.16667"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M10 15.8333V18.3333"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M3.51666 3.51667L5.34166 5.34167"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M14.6583 14.6583L16.4833 16.4833"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M1.66666 10H4.16666"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M15.8333 10H18.3333"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M3.51666 16.4833L5.34166 14.6583"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M14.6583 5.34167L16.4833 3.51667"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M10 13.3333C11.841 13.3333 13.3333 11.841 13.3333 10C13.3333 8.15905 11.841 6.66667 10 6.66667C8.15905 6.66667 6.66667 8.15905 6.66667 10C6.66667 11.841 8.15905 13.3333 10 13.3333Z"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function WhyWorksIcon({ isActive }: { isActive: boolean }) {
  const strokeColor = isActive ? "#155DFC" : "#62748E";
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g>
          <path
            d="M16.6667 5L7.50001 14.1667L3.33334 10"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </g>
      </svg>
    </div>
  );
}

function TopNavigation({
  activeSection,
  setActiveSection,
  isScrollingRef,
}: {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isScrollingRef: React.MutableRefObject<boolean>;
}) {
  const navRef = useRef<HTMLDivElement>(null);
  const sections = [
    { id: "overview", label: "Overview", Icon: OverviewIcon },
    { id: "problem", label: "Problem", Icon: ProblemIcon },
    { id: "users", label: "Users", Icon: RoleIcon },
    { id: "approach", label: "Insights", Icon: ApproachIcon },
    { id: "initial-design", label: "Initial Design", Icon: InitialDesignIcon },
    { id: "why-failed", label: "Why This Failed", Icon: WhyFailedIcon },
    {
      id: "design-solution",
      label: "Design Solution",
      Icon: DesignSolutionIcon,
    },
    { id: "why-works", label: "Why This Works", Icon: WhyWorksIcon },
    { id: "outcome", label: "Outcome", Icon: ImpactIcon },
  ];

  // Scroll active tab into view when activeSection changes
  useEffect(() => {
    if (navRef.current) {
      const activeButton = navRef.current.querySelector(
        `[data-section="${activeSection}"]`,
      );
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeSection]);

  return (
    <div
      ref={navRef}
      data-case-study-2-nav="true"
      className="w-full sticky top-[49px] z-50 bg-white overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:h-[6px] [&::-webkit-scrollbar-track]:bg-[#f1f5f9] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#bedbff] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-[#93c5fd] [&::-webkit-scrollbar-thumb]:transition-colors scrollbar-thin"
    >
      <div className="bg-white w-full content-stretch flex items-center md:justify-center px-[24px] py-[16px] relative z-50 border-b border-[#e2e8f0] border-solid min-w-max md:min-w-0">
        <div className="flex flex-row gap-[8px] items-center relative">
          {sections.map((section, index) => {
            const isActive = activeSection === section.id;
            const isCompleted =
              sections.findIndex((s) => s.id === activeSection) > index;
            return (
              <div key={section.id} className="flex items-center gap-[8px]">
                <button
                  data-section={section.id}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(section.id);
                    if (element) {
                      // Set flag to prevent scroll tracking during programmatic scroll
                      isScrollingRef.current = true;

                      scrollToSectionById(section.id, {
                        offsetSelectors: [
                          "[data-case-study-2-header='true']",
                          "[data-case-study-2-nav='true']",
                        ],
                        extraOffset: 12,
                      });

                      // Update active section immediately
                      setActiveSection(section.id);

                      // Re-enable scroll tracking after scrolling is complete
                      setTimeout(() => {
                        isScrollingRef.current = false;
                      }, 1000);
                    }
                  }}
                  type="button"
                  className={`relative px-[16px] cursor-pointer group ${isActive ? "h-[38px] pb-[2px]" : "h-[36px]"}`}
                >
                  {isActive && (
                    <div
                      aria-hidden="true"
                      className="absolute border-[#155dfc] border-b-2 border-solid inset-0 pointer-events-none"
                    />
                  )}
                  <div className="content-stretch flex items-center relative size-full">
                    <p
                      className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[14px] whitespace-nowrap transition-all duration-300 ${
                        isActive
                          ? "text-[#1447e6]"
                          : "text-[#45556c] group-hover:text-[#1447e6]"
                      }`}
                    >
                      {section.label}
                    </p>
                  </div>
                </button>
                {index < sections.length - 1 && (
                  <div className="h-[2px] w-[32px] relative">
                    <div
                      aria-hidden="true"
                      className="absolute border-[#cad5e2] border-dashed border-t-2 inset-0 pointer-events-none"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Header Section Components
function RoleBadge() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[12px] flex-wrap w-full">
      <div className="bg-gradient-to-r from-[#0468B1] to-[#0080D7] border border-[#0468B1] border-solid h-[38px] rounded-[33554400px] w-full sm:w-fit px-[16px] flex items-center shadow-lg shadow-blue-200">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-white text-[14px]">
          UX Designer (Feature Lead)
        </p>
      </div>
      <div className="bg-white border border-[#e2e8f0] border-solid min-h-[38px] rounded-[33554400px] w-full sm:w-fit px-[16px] py-[8px] sm:py-0 flex items-start sm:items-center gap-[8px]">
        <span className="text-[16px]">🌍</span>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] sm:leading-[20px] not-italic text-[#0468B1] text-[13px] sm:text-[14px] whitespace-normal break-words">
          Tech for Good · Supported by IKEA Foundation, USAID, USDA, and Skoll
          Foundation
        </p>
      </div>
    </div>
  );
}

function PageTitle() {
  return (
    <div className="w-full">
      <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[64px] not-italic text-[#0f172b] text-[56px] tracking-[-0.02em]">
        Story Map Creation Tool
        <span className="block mt-[8px] font-['Inter:Medium',sans-serif] font-medium text-[28px] leading-[36px] bg-gradient-to-r from-[#0468B1] to-[#059669] bg-clip-text text-transparent">
          Empowering Communities to Share Their Stories
        </span>
      </h1>
    </div>
  );
}

function PageDescription() {
  return (
    <div className="w-full max-w-[800px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[42px] not-italic text-[#475569] text-[26px]">
        Enabling non-technical communities to create map-based stories for
        global impact
      </p>
    </div>
  );
}

// Quick Info Section
function InfoLabel({ text }: { text: string }) {
  return (
    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[#62748e] text-[14px] tracking-[0.7px] uppercase">
      {text}
    </p>
  );
}

function InfoValue({ text }: { text: string }) {
  return (
    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#0f172b] text-[16px]">
      {text}
    </p>
  );
}

function InfoCard({
  label,
  value,
  gridCol,
}: {
  label: string;
  value: string;
  gridCol: string;
}) {
  return (
    <div className={`${gridCol} flex flex-col gap-[12px] items-start`}>
      <InfoLabel text={label} />
      <InfoValue text={value} />
    </div>
  );
}

function QuickInfoSection() {
  return (
    <div className="w-full bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-[20px] border border-[#e2e8f0] p-[40px] shadow-sm">
      <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(3,minmax(0,1fr))] w-full">
        <InfoCard
          label="Role"
          value="UX Designer (Feature Lead)"
          gridCol="col-1"
        />
        <InfoCard label="Timeline" value="1 month" gridCol="col-2" />
        <InfoCard
          label="Team"
          value="Hana Lee, Jose Buitron, Derek Caelin"
          gridCol="col-3"
        />
      </div>
    </div>
  );
}

// Problem Space Section
function SectionHeading({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-[16px] mb-[8px]">
      <div className="w-[6px] h-[40px] bg-gradient-to-b from-[#0468B1] to-[#0080D7] rounded-full"></div>
      <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[44px] not-italic text-[#0f172b] text-[40px] tracking-[-0.01em]">
        {text}
      </h2>
    </div>
  );
}

function ProblemIcon1() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full">
      <div className="absolute inset-[8.33%]">
        <div className="absolute inset-[-5%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 22 22"
          >
            <path
              d={svgPaths.pb60700}
              stroke="var(--stroke-0, #45556C)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[33.33%]">
        <div className="absolute inset-[-25%_-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 2 6"
          >
            <path
              d="M1 1V5"
              stroke="var(--stroke-0, #45556C)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[33.33%] left-1/2 right-[49.96%] top-[66.67%]">
        <div className="absolute inset-[-1px_0_-1px_-25%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 2 2"
          >
            <path
              d="M1 1H1.01"
              stroke="var(--stroke-0, #45556C)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProblemIcon2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full">
      <div className="absolute inset-[8.33%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
            stroke="var(--stroke-0, #45556C)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M10 6V10L13 11"
            stroke="var(--stroke-0, #45556C)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

function ProblemIcon3() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full">
      <div className="absolute inset-[8.33%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 20 20"
        >
          <path
            d="M2 5L10 13L18 5"
            stroke="var(--stroke-0, #45556C)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

function ProblemCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="content-stretch flex flex-col h-[232px] items-start pb-px pt-[25px] px-[25px] rounded-[14px] border border-[#e2e8f0] border-solid">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="relative shrink-0 size-[24px]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
            {icon}
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px min-w-px relative">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
            <div className="h-[28px] relative shrink-0 w-full">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic text-[#0f172b] text-[18px]">
                {title}
              </p>
            </div>
            <div className="relative shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic text-[#45556c] text-[16px]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemSpaceSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start w-full">
      <SectionHeading text="Problem" />

      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic text-[#314158] text-[16px] max-w-[768px]">
        Communities working in sustainability and conservation rely on
        storytelling to share knowledge and mobilize support. While users deeply
        understand their landscapes, most lack the technical skills to create
        interactive story maps.
      </p>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        {/* What They Have */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#ecfdf5] via-[#f0fdf4] to-[#d1fae5] border-2 border-[#059669] rounded-[16px] p-[36px] shadow-lg shadow-green-100">
          <div className="absolute -top-8 -right-8 w-[120px] h-[120px] bg-[#059669]/10 rounded-full blur-2xl"></div>
          <div className="relative">
            <div className="flex items-center gap-[12px] mb-[24px]">
              <div className="bg-[#059669] rounded-full size-[40px] flex items-center justify-center">
                <span className="text-[20px]">🌱</span>
              </div>
              <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#14532d] text-[20px]">
                What they bring
              </h3>
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-start gap-[12px]">
                <div className="bg-[#059669] rounded-full size-[24px] flex items-center justify-center shrink-0 mt-[2px]">
                  <span className="text-white text-[14px]">✓</span>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[26px] text-[#166534] text-[16px] flex-1">
                  Rich understanding of their landscapes
                </p>
              </div>
              <div className="flex items-start gap-[12px]">
                <div className="bg-[#059669] rounded-full size-[24px] flex items-center justify-center shrink-0 mt-[2px]">
                  <span className="text-white text-[14px]">✓</span>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[26px] text-[#166534] text-[16px] flex-1">
                  Meaningful stories worth sharing
                </p>
              </div>
              <div className="flex items-start gap-[12px]">
                <div className="bg-[#059669] rounded-full size-[24px] flex items-center justify-center shrink-0 mt-[2px]">
                  <span className="text-white text-[14px]">✓</span>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[26px] text-[#166534] text-[16px] flex-1">
                  Field documentation and imagery
                </p>
              </div>
              <div className="flex items-start gap-[12px]">
                <div className="bg-[#059669] rounded-full size-[24px] flex items-center justify-center shrink-0 mt-[2px]">
                  <span className="text-white text-[14px]">✓</span>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[26px] text-[#166534] text-[16px] flex-1">
                  Strong desire to communicate impact
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What They Have Trouble With */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#fff1f2] via-white to-[#fef2f2] border-2 border-[#f87171] rounded-[16px] p-[36px] shadow-lg shadow-red-100">
          <div className="absolute -top-8 -right-8 w-[120px] h-[120px] bg-[#ef4444]/10 rounded-full blur-2xl"></div>
          <div className="relative">
            <div className="flex items-center gap-[12px] mb-[24px]">
              <div className="bg-[#ef4444] rounded-full size-[40px] flex items-center justify-center">
                <span className="text-[20px]">⚠️</span>
              </div>
              <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#7f1d1d] text-[20px]">
                What's holding them back
              </h3>
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-start gap-[12px]">
                <div className="bg-[#ef4444] rounded-full size-[24px] flex items-center justify-center shrink-0 mt-[2px]">
                  <span className="text-white text-[14px] font-bold">×</span>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[26px] text-[#991b1b] text-[16px] flex-1">
                  Lack advanced technical skills for code and complex tasks
                </p>
              </div>
              <div className="flex items-start gap-[12px]">
                <div className="bg-[#ef4444] rounded-full size-[24px] flex items-center justify-center shrink-0 mt-[2px]">
                  <span className="text-white text-[14px] font-bold">×</span>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[26px] text-[#991b1b] text-[16px] flex-1">
                  Existing tools require technical expertise to create and host
                </p>
              </div>
              <div className="flex items-start gap-[12px]">
                <div className="bg-[#ef4444] rounded-full size-[24px] flex items-center justify-center shrink-0 mt-[2px]">
                  <span className="text-white text-[14px] font-bold">×</span>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[26px] text-[#991b1b] text-[16px] flex-1">
                  Must manually determine coordinates for each story point
                </p>
              </div>
              <div className="flex items-start gap-[12px]">
                <div className="bg-[#ef4444] rounded-full size-[24px] flex items-center justify-center shrink-0 mt-[2px]">
                  <span className="text-white text-[14px] font-bold">×</span>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[26px] text-[#991b1b] text-[16px] flex-1">
                  Must customize configuration files for each chapter
                </p>
              </div>
              <div className="flex items-start gap-[12px]">
                <div className="bg-[#ef4444] rounded-full size-[24px] flex items-center justify-center shrink-0 mt-[2px]">
                  <span className="text-white text-[14px] font-bold">×</span>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[26px] text-[#991b1b] text-[16px] flex-1">
                  Must independently host websites
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-[#dbeafe] via-[#e0f2fe] to-[#bfdbfe] rounded-[20px] border-2 border-[#0468B1] p-[36px] w-full shadow-xl shadow-blue-200/50 mt-[16px]">
        <div className="absolute top-0 left-0 w-[180px] h-[180px] bg-gradient-to-br from-white/40 to-transparent rounded-full blur-3xl"></div>
        <div className="relative flex items-start gap-[20px]">
          <div className="bg-gradient-to-br from-[#0468B1] to-[#0080D7] rounded-[16px] size-[56px] flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-[28px]">💡</span>
          </div>
          <div>
            <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f172b] text-[20px] mb-[12px]">
              Design Challenge
            </h4>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] text-[#1e3a8a] text-[18px]">
              Design a story creation experience that removes technical
              complexity while supporting real-world constraints — enabling
              communities to independently create and share map-based
              narratives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// User Testimonial
function UserTestimonialSection() {
  return (
    <div className="w-full mb-[64px] mt-[48px]">
      <div className="relative rounded-[24px] p-[56px] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] border-2 border-[#475569] shadow-[0_20px_60px_rgb(0,0,0,0.3)] overflow-hidden">
        {/* Decorative background patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[10%] left-[5%] w-[200px] h-[200px] bg-gradient-to-br from-[#3b82f6] to-transparent rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[15%] right-[8%] w-[250px] h-[250px] bg-gradient-to-br from-[#22c55e] to-transparent rounded-full blur-[100px]"></div>
          <div className="absolute top-[40%] right-[20%] w-[180px] h-[180px] bg-gradient-to-br from-[#f59e0b] to-transparent rounded-full blur-[100px]"></div>
        </div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="relative z-10">
          {/* Section heading with accent */}
          <div className="flex flex-col items-center mb-[48px]">
            <div className="flex items-center gap-[12px] mb-[16px]">
              <div className="w-[40px] h-[2px] bg-gradient-to-r from-transparent via-[#3b82f6] to-[#3b82f6]"></div>
              <span className="text-[#93c5fd] text-[14px] font-['Inter:Medium',sans-serif] font-medium uppercase tracking-[2px]">
                Testimonials
              </span>
              <div className="w-[40px] h-[2px] bg-gradient-to-l from-transparent via-[#3b82f6] to-[#3b82f6]"></div>
            </div>
            <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[#ffffff] text-[32px] mb-[12px]">
              What Users Say
            </h3>
            <p className="font-['Inter:Regular',sans-serif] text-[#94a3b8] text-[16px] text-center max-w-[600px]">
              Real feedback from communities using Story Maps to share their
              narratives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {/* Quote 1 - Madhuri Mandava */}
            <div className="relative bg-gradient-to-br from-[#ffffff] via-[#fefefe] to-[#f8fafc] rounded-[16px] p-[36px] border border-[#e2e8f0] shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden group hover:shadow-[0_12px_40px_rgb(0,0,0,0.18)] hover:scale-[1.02] transition-all duration-300">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-gradient-to-br from-[#dbeafe] to-transparent rounded-full blur-[60px] opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-[120px] h-[120px] bg-gradient-to-tr from-[#eff6ff] to-transparent rounded-full blur-[50px] opacity-30"></div>

              {/* Quote mark with icon background */}
              <div className="absolute top-[16px] left-[16px] w-[48px] h-[48px] bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-full flex items-center justify-center shadow-lg opacity-90">
                <div className="text-white text-[24px] leading-[1] font-serif">
                  "
                </div>
              </div>

              <div className="relative z-10 pt-[32px]">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] text-[#1e293b] text-[15px] mb-[28px]">
                  I went to Felt, I went to ArcGIS, they wanted so much money.
                  I'm just a nonprofit trying to tell a story. But when I showed
                  my team what I could do with Terraso for{" "}
                  <span className="font-['Inter:Bold',sans-serif] font-bold text-[#2563eb] bg-[#dbeafe] px-[6px] py-[2px] rounded-[4px]">
                    free
                  </span>
                  , they were so{" "}
                  <span className="font-['Inter:Bold',sans-serif] font-bold text-[#2563eb] bg-[#dbeafe] px-[6px] py-[2px] rounded-[4px]">
                    impressed
                  </span>
                  .
                </p>

                <div className="flex items-center gap-[12px] pt-[20px] border-t-2 border-[#e0e7ff]">
                  <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-[#3b82f6] to-[#2563eb] flex items-center justify-center text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] shadow-md">
                    M
                  </div>
                  <div className="flex flex-col">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f172a] text-[14px]">
                      Madhuri Mandava
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-[#64748b] text-[13px]">
                      Paani Earth
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote 2 - Anonymous */}
            <div className="relative bg-gradient-to-br from-[#ffffff] via-[#fefefe] to-[#f8fafc] rounded-[16px] p-[36px] border border-[#e2e8f0] shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden group hover:shadow-[0_12px_40px_rgb(0,0,0,0.18)] hover:scale-[1.02] transition-all duration-300">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-gradient-to-br from-[#dcfce7] to-transparent rounded-full blur-[60px] opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-[120px] h-[120px] bg-gradient-to-tr from-[#f0fdf4] to-transparent rounded-full blur-[50px] opacity-30"></div>

              {/* Quote mark with icon background */}
              <div className="absolute top-[16px] left-[16px] w-[48px] h-[48px] bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-full flex items-center justify-center shadow-lg opacity-90">
                <div className="text-white text-[24px] leading-[1] font-serif">
                  "
                </div>
              </div>

              <div className="relative z-10 pt-[32px]">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] text-[#1e293b] text-[15px] mb-[28px]">
                  By integrating mapping, data collection, and storytelling,
                  I've been able to promote{" "}
                  <span className="font-['Inter:Bold',sans-serif] font-bold text-[#16a34a] bg-[#dcfce7] px-[6px] py-[2px] rounded-[4px]">
                    regenerative farming
                  </span>
                  , foster community ownership, and support data-driven
                  decisions for resilience and sustainable impact.
                </p>

                <div className="flex items-center gap-[12px] pt-[20px] border-t-2 border-[#dcfce7]">
                  <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] shadow-md">
                    A
                  </div>
                  <div className="flex flex-col">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f172a] text-[14px]">
                      Anonymous user
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote 3 - Damian Fernandes */}
            <div className="relative bg-gradient-to-br from-[#ffffff] via-[#fefefe] to-[#f8fafc] rounded-[16px] p-[36px] border border-[#e2e8f0] shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden group hover:shadow-[0_12px_40px_rgb(0,0,0,0.18)] hover:scale-[1.02] transition-all duration-300">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-gradient-to-br from-[#ffedd5] to-transparent rounded-full blur-[60px] opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-[120px] h-[120px] bg-gradient-to-tr from-[#fff7ed] to-transparent rounded-full blur-[50px] opacity-30"></div>

              {/* Quote mark with icon background */}
              <div className="absolute top-[16px] left-[16px] w-[48px] h-[48px] bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center shadow-lg opacity-90">
                <div className="text-white text-[24px] leading-[1] font-serif">
                  "
                </div>
              </div>

              <div className="relative z-10 pt-[32px]">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] text-[#1e293b] text-[15px] mb-[28px]">
                  Story Maps is a{" "}
                  <span className="font-['Inter:Bold',sans-serif] font-bold text-[#ea580c] bg-[#ffedd5] px-[6px] py-[2px] rounded-[4px]">
                    turning point
                  </span>{" "}
                  in how we tell stories… offering something deeply{" "}
                  <span className="font-['Inter:Bold',sans-serif] font-bold text-[#ea580c] bg-[#ffedd5] px-[6px] py-[2px] rounded-[4px]">
                    transformational
                  </span>{" "}
                  for countries like mine.
                </p>

                <div className="flex items-center gap-[12px] pt-[20px] border-t-2 border-[#ffedd5]">
                  <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] shadow-md">
                    D
                  </div>
                  <div className="flex flex-col">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f172a] text-[14px]">
                      Damian Fernandes
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-[#64748b] text-[13px]">
                      Conservation International Guyana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Platform Visual Reference
function ContextSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start w-full">
      <div className="flex items-center gap-[16px] mb-[8px]">
        <div className="w-[6px] h-[40px] bg-gradient-to-b from-[#0468B1] to-[#0080D7] rounded-full"></div>
        <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[44px] not-italic text-[#0f172b] text-[40px] tracking-[-0.01em]">
          Context
        </h3>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic text-[#314158] text-[17px]">
        Terraso is a platform developed by Tech Matters to support agricultural
        and conservation communities in planning and financing sustainable
        futures. It provides tools for mapping, data collection, and
        collaboration across landscapes.
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic text-[#314158] text-[17px]">
        As part of this ecosystem, Story Maps was introduced to help communities
        share place-based narratives using maps, images, and video.
      </p>
      <div className="relative overflow-hidden bg-gradient-to-r from-[#dbeafe] to-[#bfdbfe] rounded-[16px] p-[28px] border-2 border-[#0468B1] shadow-lg">
        <div className="absolute top-0 left-0 w-[150px] h-[150px] bg-white/30 rounded-full blur-2xl"></div>
        <div className="relative flex items-start gap-[16px]">
          <div className="bg-gradient-to-br from-[#0468B1] to-[#0080D7] rounded-[12px] size-[44px] flex items-center justify-center shrink-0">
            <span className="text-[22px]">🎯</span>
          </div>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] text-[#1e3a8a] text-[18px]">
            My responsibility was to lead the UX design of the Story Map
            creation experience.
          </p>
        </div>
      </div>
    </div>
  );
}

function DesignGoalSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#ecfdf5] w-full rounded-[20px] border-2 border-[#0468B1] border-solid shadow-[0px_8px_24px_0px_rgba(4,104,177,0.15)] p-[40px]">
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-br from-[#0468B1]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="relative flex items-start gap-[20px]">
        <div className="bg-gradient-to-br from-[#0468B1] to-[#0080D7] rounded-[16px] size-[56px] flex items-center justify-center shrink-0 shadow-lg">
          <span className="text-[28px]">🎯</span>
        </div>
        <div>
          <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic text-[#0f172b] text-[22px] mb-[12px]">
            The Result
          </h4>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic text-[#334155] text-[18px]">
            A streamlined creation tool that removes technical barriers while
            giving users full creative control over their map-based narratives.
          </p>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 15 14"
    >
      <path
        d={svgPaths.p38669a00}
        stroke="var(--stroke-0, #193CB8)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function RoleBulletPoint({ text }: { text: string }) {
  return (
    <div className="flex gap-[12px] items-start w-full">
      <div className="relative shrink-0 size-[20px] mt-[4px]">
        <CheckIcon />
      </div>
      <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic text-[#314158] text-[16px]">
        {text}
      </p>
    </div>
  );
}

// Impact Metric Cards
function ImpactMetricCard({
  emoji,
  emojiColor,
  value,
  title,
  description,
  gradient,
  border,
  gridPosition,
}: {
  emoji: string;
  emojiColor: string;
  value?: string;
  title: string;
  description: string;
  gradient?: string;
  border?: string;
  gridPosition: string;
}) {
  return (
    <div
      className={`${gridPosition} justify-self-stretch relative rounded-[14px] self-stretch p-[25px] min-h-[287px] flex flex-col ${border || "border border-[#e2e8f0] border-solid"} shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]`}
      style={
        gradient ? { backgroundImage: gradient } : { backgroundColor: "white" }
      }
    >
      <div
        className={`${emojiColor} rounded-[10px] size-[48px] flex items-center justify-center mb-[32px]`}
      >
        <span className="text-[24px]">{emoji}</span>
      </div>
      {value && (
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic text-[#0f172b] text-[36px] mb-[8px]">
          {value}
        </p>
      )}
      <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic text-[#0f172b] text-[18px] mb-[8px]">
        {title}
      </h4>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] not-italic text-[#45556c] text-[14px]">
        {description}
      </p>
    </div>
  );
}

// Solution Section
function SolutionSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start w-full">
      <SectionHeading text="Solution" />

      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic text-[#314158] text-[16px] max-w-[768px]">
        We created an intuitive story creation experience that abstracts
        technical complexity while preserving the power of map-based
        storytelling.
      </p>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {/* Feature 1 */}
        <div className="group bg-white border-2 border-[#e2e8f0] rounded-[20px] p-[32px] shadow-lg hover:shadow-2xl hover:border-[#0468B1] transition-all duration-300 hover:-translate-y-1">
          <div className="bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe] rounded-[16px] w-[56px] h-[56px] flex items-center justify-center mb-[24px] group-hover:scale-110 transition-transform duration-300">
            <span className="text-[28px]">🎨</span>
          </div>
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f172b] text-[20px] mb-[14px]">
            Visual Story Builder
          </h3>
          <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#64748b] text-[15px]">
            Drag-and-drop interface for creating chapters, adding media, and
            arranging narrative flow
          </p>
        </div>

        {/* Feature 2 */}
        <div className="group bg-white border-2 border-[#e2e8f0] rounded-[20px] p-[32px] shadow-lg hover:shadow-2xl hover:border-[#059669] transition-all duration-300 hover:-translate-y-1">
          <div className="bg-gradient-to-br from-[#dcfce7] to-[#bbf7d0] rounded-[16px] w-[56px] h-[56px] flex items-center justify-center mb-[24px] group-hover:scale-110 transition-transform duration-300">
            <span className="text-[28px]">📍</span>
          </div>
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f172b] text-[20px] mb-[14px]">
            Flexible Mapping
          </h3>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[26px] text-[#64748b] text-[16px]">
            Add locations manually or through media geotags — no coordinates
            required
          </p>
        </div>

        {/* Feature 3 */}
        <div className="group bg-white border-2 border-[#e2e8f0] rounded-[20px] p-[32px] shadow-lg hover:shadow-2xl hover:border-[#f59e0b] transition-all duration-300 hover:-translate-y-1">
          <div className="bg-gradient-to-br from-[#fef3c7] to-[#fde68a] rounded-[16px] w-[56px] h-[56px] flex items-center justify-center mb-[24px] group-hover:scale-110 transition-transform duration-300">
            <span className="text-[28px]">⚡</span>
          </div>
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f172b] text-[20px] mb-[14px]">
            One-Click Publishing
          </h3>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[26px] text-[#64748b] text-[16px]">
            Stories go live instantly without requiring technical setup or
            developer support
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-[#ecfdf5] via-[#d1fae5] to-[#a7f3d0] rounded-[20px] border-2 border-[#059669] p-[36px] w-full shadow-lg shadow-green-200/50 mt-[16px]">
        <div className="absolute -bottom-8 -left-8 w-[180px] h-[180px] bg-gradient-to-br from-white/30 to-transparent rounded-full blur-3xl"></div>
        <div className="relative flex items-start gap-[20px]">
          <div className="bg-gradient-to-br from-[#059669] to-[#047857] rounded-[16px] size-[56px] flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-[28px]">💚</span>
          </div>
          <div>
            <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f172b] text-[20px] mb-[12px]">
              Design Philosophy
            </h4>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] text-[#065f46] text-[18px]">
              The interface was designed to feel familiar — like creating a
              presentation — while seamlessly handling the technical complexity
              of spatial storytelling behind the scenes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Container
function ContentContainer() {
  const sliderRef = useRef<{ slickNext: () => void } | null>(null);

  return (
    <div className="w-full max-w-[1104px] mx-auto px-[24px] py-[128px] flex flex-col gap-[80px]">
      <div id="overview" className="flex flex-col gap-[64px] scroll-mt-[110px]">
        <div className="flex flex-col">
          <RoleBadge />
          <div className="mt-[24px]">
            <PageTitle />
          </div>
          <div className="mt-[24px]">
            <PageDescription />
          </div>
        </div>

        <QuickInfoSection />

        {/* Decorative Divider */}

        <figure className="w-full overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/664cb8d6b706e50aa8ec9a23/Risaralda-story-map/960x0.png?format=png&width=1440"
            alt="Risaralda story map created on the Terraso platform"
            className="block w-full h-auto object-contain"
            loading="eager"
          />
          <figcaption className="px-[20px] py-[16px] bg-[#f8fafc] border-t border-[#e2e8f0]">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[20px] text-[#475569]">
              Landscape managers in Risaralda, Colombia created this story map
              on the open-source Terraso platform for internal and external
              communications and fundraising.
            </p>
            <p className="mt-[6px] font-['Inter:Medium',sans-serif] font-medium text-[12px] leading-[18px] uppercase tracking-[0.08em] text-[#64748b]">
              Tech Matters
            </p>
          </figcaption>
        </figure>

        <ContextSection />
      </div>

      <div
        id="problem"
        className="relative flex flex-col gap-[32px] scroll-mt-[110px] bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] py-[72px] -mx-[24px] px-[24px] rounded-[24px] overflow-hidden border border-[#cbd5e1]"
      >
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[#dbeafe]/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-gradient-to-tr from-[#fecaca]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <ProblemSpaceSection />
        </div>
      </div>

      <div id="solution" className="flex flex-col gap-[32px] scroll-mt-[110px]">
        <SolutionSection />
      </div>

      <UserTestimonialSection />

      <div id="users" className="flex flex-col gap-[40px] scroll-mt-[110px]">
        <div className="flex flex-col gap-[24px]">
          <SectionHeading text="Understanding Our Users" />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic text-[#314158] text-[16px] max-w-[768px]">
            To keep the team aligned around real user needs, we developed two
            primary personas: Luis and Pia. These personas helped ground design
            decisions in everyday workflows, motivations, and constraints —
            ensuring we built for people, not assumptions.
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic text-[#314158] text-[16px] max-w-[768px]">
            They were shared across product and engineering to maintain a
            user-centered perspective throughout the project.
          </p>

          <div className="w-full mt-[32px] max-w-[768px]">
            <div className="flex items-center justify-between mb-[12px]">
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[#475569] text-[14px]">
                User Personas (2)
              </p>
              <p className="font-['Inter:Regular',sans-serif] text-[#64748b] text-[13px]">
                ← Use arrows to navigate →
              </p>
            </div>
            <div className="relative">
              <Slider
                ref={sliderRef}
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                arrows={true}
                className="persona-carousel"
              >
                <div className="px-[8px]">
                  <div className="rounded-[12px] overflow-hidden shadow-lg relative">
                    <ImageWithFallback
                      src="https://static.wixstatic.com/media/9ce191_91b3781129ac4c2e98d57f7cdae3af18~mv2.jpg/v1/fill/w_779,h_447,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/pia.jpg"
                      alt="User research and persona development"
                      className="w-full h-auto"
                    />
                    <button
                      onClick={() => sliderRef.current?.slickNext()}
                      className="absolute right-[20px] top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-[16px] shadow-xl hover:bg-white hover:scale-110 transition-all cursor-pointer"
                      aria-label="Next persona"
                    >
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-[8px]">
                  <div className="rounded-[12px] overflow-hidden shadow-lg">
                    <ImageWithFallback
                      src="https://static.wixstatic.com/media/9ce191_88b5c1df008a43a4ac170b239b3f2b8c~mv2.jpg/v1/fill/w_782,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Luis.jpg"
                      alt="Luis persona"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        {/* Luis Persona Card */}

        {/* Pia Persona Card */}

        {/* Design Implication */}
        <div className="bg-[#f0f9ff] rounded-[14px] border-l-4 border-[#3b82f6] p-[32px]">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f172b] text-[22px] mb-[8px]">
            What we uncovered in the user research
          </h3>
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[#475569] text-[15px] mb-[24px]">
            User Stories
          </p>

          {/* Key Research Findings */}
          <div className="bg-white rounded-[12px] p-[24px] mb-[24px] shadow-sm border border-[#bfdbfe]">
            <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f172b] text-[17px] mb-[16px]">
              Key Challenges
            </h4>
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-start gap-[12px]">
                <div className="bg-[#3b82f6] rounded-full size-[24px] flex items-center justify-center flex-shrink-0 mt-[2px]">
                  <span className="text-white text-[12px] font-bold">1</span>
                </div>
                <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#314158] text-[15px]">
                  Users have{" "}
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">
                    limited network connectivity
                  </span>{" "}
                  and are working with communities to document traditional
                  stories. They need to{" "}
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">
                    load content offline
                  </span>{" "}
                  and upload it later when internet access is available.
                </p>
              </div>

              <div className="flex items-start gap-[12px]">
                <div className="bg-[#3b82f6] rounded-full size-[24px] flex items-center justify-center flex-shrink-0 mt-[2px]">
                  <span className="text-white text-[12px] font-bold">2</span>
                </div>
                <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#314158] text-[15px]">
                  Users want to{" "}
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">
                    collect location data
                  </span>{" "}
                  but don't always have it at hand. They need{" "}
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">
                    offline-friendly tools for media capture
                  </span>{" "}
                  and want to capture data directly on a phone, including
                  sensitive data that remains stored only on the device.
                </p>
              </div>

              <div className="flex items-start gap-[12px]">
                <div className="bg-[#3b82f6] rounded-full size-[24px] flex items-center justify-center flex-shrink-0 mt-[2px]">
                  <span className="text-white text-[12px] font-bold">3</span>
                </div>
                <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#314158] text-[15px]">
                  Users want to capture{" "}
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">
                    geo-referenced videos and photos
                  </span>{" "}
                  but feel limited by their current equipment. They seek{" "}
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">
                    higher-quality audio and images
                  </span>{" "}
                  than what their phone provides.
                </p>
              </div>
            </div>
          </div>

          {/* User Stories */}
          <div className="bg-gradient-to-br from-white to-[#f8fafc] rounded-[12px] p-[28px] border border-[#cbd5e1]">
            <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f172b] text-[17px] mb-[20px]">
              As a Creator, I want to...
            </h4>
            <div className="flex flex-wrap gap-[14px]">
              <div className="bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-full px-[20px] py-[12px] shadow-[0px_4px_12px_0px_rgba(59,130,246,0.25)] hover:shadow-[0px_6px_16px_0px_rgba(59,130,246,0.35)] hover:scale-105 transition-all">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] text-white text-[14px]">
                  Compose a storymap defining narrative at a location
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] rounded-full px-[20px] py-[12px] shadow-[0px_4px_12px_0px_rgba(139,92,246,0.25)] hover:shadow-[0px_6px_16px_0px_rgba(139,92,246,0.35)] hover:scale-105 transition-all">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] text-white text-[14px]">
                  Share stories publicly with my community
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#06b6d4] to-[#0891b2] rounded-full px-[20px] py-[12px] shadow-[0px_4px_12px_0px_rgba(6,182,212,0.25)] hover:shadow-[0px_6px_16px_0px_rgba(6,182,212,0.35)] hover:scale-105 transition-all">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] text-white text-[14px]">
                  Control access at landscape/group level
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full px-[20px] py-[12px] shadow-[0px_4px_12px_0px_rgba(16,185,129,0.25)] hover:shadow-[0px_6px_16px_0px_rgba(16,185,129,0.35)] hover:scale-105 transition-all">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] text-white text-[14px]">
                  Associate storymaps with my group/landscape
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: From Insights to Experience */}
      <div id="approach" className="flex flex-col gap-[32px] scroll-mt-[110px]">
        <SectionHeading text="From Insights to Experience" />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic text-[#314158] text-[16px] max-w-[768px]">
          Using insights from Luis and Pia, I translated user stories into
          assumptions, triggers, and workflow requirements. This helped define a
          simplified creation flow — focusing on how non-technical users could
          move from content to published story maps with minimal friction.
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic text-[#314158] text-[16px] max-w-[768px]">
          I began by mapping Luis's storytelling journey — from gathering
          content to sharing stories with donors. This clarified key steps such
          as uploading media, associating locations, structuring chapters, and
          publishing.
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic text-[#314158] text-[16px] max-w-[768px]">
          These flows informed both low- and high-fidelity wireframes, which
          were reviewed frequently with product and engineering to balance user
          needs with technical constraints.
        </p>

        {/* Workflow diagrams and page flows */}
        <div className="w-full">
          {/* Page Flow Section */}
          <div className="mb-[48px]">
            <h4 className="font-['Inter:SemiBold',sans-serif] font-semibold text-[#1e293b] text-[18px] mb-[24px]">
              Page Flow based on the user workflow
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mb-[16px]">
              <div className="bg-white rounded-[12px] shadow-lg overflow-hidden border border-[#e2e8f0] hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src="https://static.wixstatic.com/media/9ce191_11d147bed4264404b07939e68cc31e04~mv2.png/v1/fill/w_289,h_280,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9ce191_11d147bed4264404b07939e68cc31e04~mv2.png"
                  alt="Page flow wireframe 1"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white rounded-[12px] shadow-lg overflow-hidden border border-[#e2e8f0] hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src="https://static.wixstatic.com/media/9ce191_70457502ed9e44fe86f188cee7fbb705~mv2.png/v1/fill/w_289,h_532,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9ce191_70457502ed9e44fe86f188cee7fbb705~mv2.png"
                  alt="Page flow wireframe 2"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white rounded-[12px] shadow-lg overflow-hidden border border-[#e2e8f0] hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src="https://static.wixstatic.com/media/9ce191_645f51827c074e269f1e81325f41c12f~mv2.png/v1/fill/w_300,h_223,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9ce191_645f51827c074e269f1e81325f41c12f~mv2.png"
                  alt="Page flow wireframe 3"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Early Wireframes Section */}
          <div>
            <h4 className="font-['Inter:SemiBold',sans-serif] font-semibold text-[#1e293b] text-[18px] mb-[24px]">
              Early wireframes
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mb-[16px]">
              <div className="bg-white rounded-[12px] shadow-lg overflow-hidden border border-[#e2e8f0] hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src="https://static.wixstatic.com/media/9ce191_081038920a1546529751063fb02f43d8~mv2.png/v1/crop/x_0,y_0,w_1610,h_1135/fill/w_600,h_423,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot_20221127_071955.png"
                  alt="Dashboard wireframe"
                  className="w-full h-auto"
                />
                <div className="px-[16px] py-[12px] bg-[#f8fafc] border-t border-[#e2e8f0]">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[#475569] text-[14px]">
                    Dashboard
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-[12px] shadow-lg overflow-hidden border border-[#e2e8f0] hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src="https://static.wixstatic.com/media/9ce191_95dc3d323c954612bd5415786b98dccd~mv2.png/v1/crop/x_0,y_0,w_1544,h_1240/fill/w_600,h_482,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot_20221127_091311.png"
                  alt="Layout exploration wireframe"
                  className="w-full h-auto"
                />
                <div className="px-[16px] py-[12px] bg-[#f8fafc] border-t border-[#e2e8f0]">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[#475569] text-[14px]">
                    Edit Screen: Create Story Map
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Initial Design */}
      <div
        id="initial-design"
        className="relative flex flex-col gap-[32px] scroll-mt-[110px] bg-gradient-to-br from-[#fef2f2] via-[#fef2f2] to-[#fee2e2] py-[72px] -mx-[24px] px-[24px] rounded-[24px] overflow-hidden border border-[#fecaca]"
      >
        <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-gradient-to-br from-[#fee2e2]/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[220px] h-[220px] bg-gradient-to-tl from-[#fecaca]/30 to-transparent rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <SectionHeading text="Initial Design" />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic text-[#314158] text-[16px] max-w-[768px] mb-0">
            The first iteration reused Terraso's existing data map patterns to
            reduce development effort.
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic text-[#314158] text-[16px] max-w-[768px]">
            This approach offered clarity and faster implementation, but
            introduced experience trade-offs.
          </p>

          {/* Placeholder for first design images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
            <div className="flex flex-col gap-[12px]">
              <div className="bg-white rounded-[12px] shadow-lg overflow-hidden border border-[#e2e8f0] hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src="https://static.wixstatic.com/media/9ce191_32110b86f42947df92b51f416a5f74d1~mv2.png/v1/crop/x_0,y_26,w_5760,h_5482/fill/w_1200,h_1142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Story%20map_%20Draft%20mode_%20Intro%20chapter.png"
                  alt="Story map Draft mode - Intro chapter"
                  className="w-full h-auto"
                />
              </div>
              <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#64748b] text-center">
                Draft mode: Set Intro Page
              </p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="bg-white rounded-[12px] shadow-lg overflow-hidden border border-[#e2e8f0] hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src="https://static.wixstatic.com/media/9ce191_b5fb9665f120469983ec23918bfa2aec~mv2.png/v1/fill/w_1200,h_1142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Chapter2%2B3_%20when%20all%20fields%20info%20is%20provided.png"
                  alt="Chapter 2+3 when all fields info is provided"
                  className="w-full h-auto"
                />
              </div>
              <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#64748b] text-center">
                Draft mode: Setting Chapter 2 Page
              </p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="bg-white rounded-[12px] shadow-lg overflow-hidden border border-[#e2e8f0] hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src="https://static.wixstatic.com/media/9ce191_1a1b01c1b0d3479d83e4401a68ac2607~mv2.png/v1/fill/w_1200,h_862,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Set%20background%20map.png"
                  alt="Set background map"
                  className="w-full h-auto"
                />
              </div>
              <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#64748b] text-center">
                Draft mode: Set background map
              </p>
            </div>
          </div>

          {/* Pros */}
          <div className="bg-gradient-to-br from-[#f0fdf4] to-white rounded-[14px] border border-[#bbf7d0] p-[24px]">
            <div className="flex items-center gap-[10px] mb-[16px]">
              <div className="bg-[#22c55e] rounded-[8px] size-[32px] flex items-center justify-center">
                <span className="text-white text-[16px]">✓</span>
              </div>
              <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f172b] text-[17px]">
                What worked
              </h4>
            </div>
            <ul className="flex flex-col gap-[10px]">
              <li className="font-['Inter:Regular',sans-serif] leading-[22px] text-[#314158] text-[14px] flex items-start gap-[10px]">
                <span className="text-[#22c55e] text-[16px] mt-[1px] font-bold">
                  •
                </span>
                <span>
                  Reused familiar Terraso layouts, reducing development overhead
                </span>
              </li>
              <li className="font-['Inter:Regular',sans-serif] leading-[22px] text-[#314158] text-[14px] flex items-start gap-[10px]">
                <span className="text-[#22c55e] text-[16px] mt-[1px] font-bold">
                  •
                </span>
                <span>Clear process for setting background maps</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 3: Why This Failed */}
      <div
        id="why-failed"
        className="flex flex-col gap-[32px] scroll-mt-[110px]"
      >
        <SectionHeading text="Why This Failed" />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic text-[#314158] text-[16px] max-w-[768px]">
          While technically efficient, the design created significant friction
          in the storytelling experience.
        </p>

        {/* Cons */}
        <div className="bg-gradient-to-br from-[#fef2f2] to-white rounded-[14px] border border-[#fecaca] p-[24px]">
          <div className="flex items-center gap-[10px] mb-[16px]">
            <div className="bg-[#ef4444] rounded-[8px] size-[32px] flex items-center justify-center">
              <span className="text-white text-[16px]">×</span>
            </div>
            <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f172b] text-[17px]">
              Key issues
            </h4>
          </div>
          <ul className="flex flex-col gap-[10px]">
            <li className="font-['Inter:Regular',sans-serif] leading-[22px] text-[#314158] text-[14px] flex items-start gap-[10px]">
              <span className="text-[#ef4444] text-[16px] mt-[1px] font-bold">
                ×
              </span>
              <span>Storytelling felt fragmented</span>
            </li>
            <li className="font-['Inter:Regular',sans-serif] leading-[22px] text-[#314158] text-[14px] flex items-start gap-[10px]">
              <span className="text-[#ef4444] text-[16px] mt-[1px] font-bold">
                ×
              </span>
              <span>Users had to switch between Intro and Chapters</span>
            </li>
            <li className="font-['Inter:Regular',sans-serif] leading-[22px] text-[#314158] text-[14px] flex items-start gap-[10px]">
              <span className="text-[#ef4444] text-[16px] mt-[1px] font-bold">
                ×
              </span>
              <span>Navigation was less discoverable</span>
            </li>
            <li className="font-['Inter:Regular',sans-serif] leading-[22px] text-[#314158] text-[14px] flex items-start gap-[10px]">
              <span className="text-[#ef4444] text-[16px] mt-[1px] font-bold">
                ×
              </span>
              <span>Overall experience lacked immersion</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-[#fef3c7] to-[#fef9c3] rounded-[14px] border-l-4 border-[#f59e0b] p-[24px]">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[26px] text-[#92400e] text-[16px]">
            This version surfaced an important insight: efficiency alone wasn't
            enough — narrative flow mattered.
          </p>
        </div>
      </div>

      {/* Section 4: Design Solution */}
      <div
        id="design-solution"
        className="relative flex flex-col gap-[32px] scroll-mt-[110px] bg-gradient-to-br from-[#ecfdf5] via-[#f0fdf4] to-[#dcfce7] py-[72px] -mx-[24px] px-[24px] rounded-[24px] overflow-hidden border border-[#86efac]"
      >
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[#86efac]/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-gradient-to-tr from-[#bbf7d0]/25 to-transparent rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <SectionHeading text="Design Solution" />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic text-[#314158] text-[16px] max-w-[768px]">
            Based on usability feedback and stakeholder discussions, we decided
            to move away from a technically efficient layout toward a more
            narrative-driven experience.
          </p>

          <div className="bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] rounded-[14px] border-l-4 border-[#3b82f6] p-[28px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] text-[#1e40af] text-[17px] mb-[16px]">
              Our users weren't creating datasets — they were telling stories.
            </p>
            <p className="font-['Inter:Regular',sans-serif] leading-[26px] text-[#1e40af] text-[16px]">
              This led to a shift toward a chapter-based model inspired by
              familiar tools like PowerPoint and Google Slides, prioritising:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            <div className="bg-white rounded-[12px] p-[20px] border border-[#bfdbfe] shadow-sm">
              <div className="flex items-start gap-[12px]">
                <div className="bg-[#3b82f6] rounded-[6px] size-[6px] mt-[8px] shrink-0"></div>
                <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#314158] text-[15px]">
                  Linear storytelling
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[12px] p-[20px] border border-[#bfdbfe] shadow-sm">
              <div className="flex items-start gap-[12px]">
                <div className="bg-[#3b82f6] rounded-[6px] size-[6px] mt-[8px] shrink-0"></div>
                <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#314158] text-[15px]">
                  Clear chapter progression
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[12px] p-[20px] border border-[#bfdbfe] shadow-sm">
              <div className="flex items-start gap-[12px]">
                <div className="bg-[#3b82f6] rounded-[6px] size-[6px] mt-[8px] shrink-0"></div>
                <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#314158] text-[15px]">
                  Embedded media
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[12px] p-[20px] border border-[#bfdbfe] shadow-sm">
              <div className="flex items-start gap-[12px]">
                <div className="bg-[#3b82f6] rounded-[6px] size-[6px] mt-[8px] shrink-0"></div>
                <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#314158] text-[15px]">
                  Full-screen preview
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[12px] p-[20px] border border-[#bfdbfe] shadow-sm md:col-span-2">
              <div className="flex items-start gap-[12px]">
                <div className="bg-[#3b82f6] rounded-[6px] size-[6px] mt-[8px] shrink-0"></div>
                <p className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#314158] text-[15px]">
                  Reduced navigation friction
                </p>
              </div>
            </div>
          </div>

          {/* Placeholder for final design images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
            <div className="flex flex-col gap-[12px]">
              <div className="bg-white rounded-[12px] shadow-lg overflow-hidden border border-[#e2e8f0] hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src="https://static.wixstatic.com/media/9ce191_ad49cd1e633f49f393398fe12d55deb8~mv2.png/v1/fill/w_1200,h_860,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Chapter%20title%20added.png"
                  alt="Chapter title added"
                  className="w-full h-auto"
                />
              </div>
              <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#64748b] text-center">
                Draft Mode: Add Chapters
              </p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="bg-white rounded-[12px] shadow-lg overflow-hidden border border-[#e2e8f0] hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src="https://static.wixstatic.com/media/9ce191_5efeb4af527a430a83c4100077d4895f~mv2.png/v1/fill/w_1200,h_860,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Add%20media.png"
                  alt="Add media"
                  className="w-full h-auto"
                />
              </div>
              <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#64748b] text-center">
                Draft Mode: Add Media to your chapters
              </p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="bg-white rounded-[12px] shadow-lg overflow-hidden border border-[#e2e8f0] hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src="https://static.wixstatic.com/media/9ce191_9accc60e6475488ca0ee458bde3027b7~mv2.png/v1/fill/w_1200,h_860,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Published%20story%20map-%20Auth.png"
                  alt="Published story map - Auth"
                  className="w-full h-auto"
                />
              </div>
              <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#64748b] text-center">
                Preview Mode in Full Screen
              </p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="bg-white rounded-[12px] shadow-lg overflow-hidden border border-[#e2e8f0] hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src="https://static.wixstatic.com/media/9ce191_f466847b2df04dafa328a0071a7267cf~mv2.png/v1/fill/w_1200,h_860,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/SHARE%20dialog.png"
                  alt="SHARE dialog"
                  className="w-full h-auto"
                />
              </div>
              <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#64748b] text-center">
                Share Story Map
              </p>
            </div>
          </div>

          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic text-[#0f172b] text-[24px] mt-[16px]">
            Final Experience
          </h3>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic text-[#314158] text-[16px] max-w-[768px]">
            The final Story Map experience allows users to:
          </p>

          <div className="bg-white rounded-[14px] border border-[#e2e8f0] p-[32px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]">
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-start gap-[16px]">
                <div className="bg-[#dcfce7] rounded-full size-[28px] flex items-center justify-center shrink-0">
                  <span className="text-[#16a34a] text-[16px]">✓</span>
                </div>
                <p className="font-['Inter:Regular',sans-serif] leading-[26px] text-[#314158] text-[16px]">
                  Create chapters visually
                </p>
              </div>
              <div className="flex items-start gap-[16px]">
                <div className="bg-[#dcfce7] rounded-full size-[28px] flex items-center justify-center shrink-0">
                  <span className="text-[#16a34a] text-[16px]">✓</span>
                </div>
                <p className="font-['Inter:Regular',sans-serif] leading-[26px] text-[#314158] text-[16px]">
                  Add media directly to each section
                </p>
              </div>
              <div className="flex items-start gap-[16px]">
                <div className="bg-[#dcfce7] rounded-full size-[28px] flex items-center justify-center shrink-0">
                  <span className="text-[#16a34a] text-[16px]">✓</span>
                </div>
                <p className="font-['Inter:Regular',sans-serif] leading-[26px] text-[#314158] text-[16px]">
                  Associate locations without manual coordinates
                </p>
              </div>
              <div className="flex items-start gap-[16px]">
                <div className="bg-[#dcfce7] rounded-full size-[28px] flex items-center justify-center shrink-0">
                  <span className="text-[#16a34a] text-[16px]">✓</span>
                </div>
                <p className="font-['Inter:Regular',sans-serif] leading-[26px] text-[#314158] text-[16px]">
                  Preview stories in full screen
                </p>
              </div>
              <div className="flex items-start gap-[16px]">
                <div className="bg-[#dcfce7] rounded-full size-[28px] flex items-center justify-center shrink-0">
                  <span className="text-[#16a34a] text-[16px]">✓</span>
                </div>
                <p className="font-['Inter:Regular',sans-serif] leading-[26px] text-[#314158] text-[16px]">
                  Share stories via links with landscapes or groups
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#eff6ff] to-[#dbeafe] rounded-[14px] border-l-4 border-[#155DFC] p-[24px]">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[26px] text-[#1e40af] text-[17px]">
              The experience was intentionally designed to feel like creating a
              slide deck, adapted for map-based storytelling.
            </p>
          </div>
        </div>
      </div>

      {/* Section 5: Why This Works */}
      <div
        id="why-works"
        className="flex flex-col gap-[32px] scroll-mt-[110px]"
      >
        <SectionHeading text="Why This Works" />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic text-[#314158] text-[16px] max-w-[768px]">
          This approach reduced cognitive load for non-technical users and
          supported real-world constraints such as low connectivity and
          field-based content creation.
        </p>
        <div className="bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-[14px] border-l-4 border-[#0ea5e9] p-[28px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] text-[#0c4a6e] text-[17px]">
            More importantly, it allowed communities to focus on their stories —
            not the tooling.
          </p>
        </div>
      </div>

      <div id="outcome" className="flex flex-col gap-[56px] scroll-mt-[110px]">
        <div className="flex flex-col gap-[24px]">
          <SectionHeading text="Outcome" />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic text-[#314158] text-[17px] max-w-[768px]">
            Story Maps enabled communities to independently create and publish
            map-based narratives, demonstrating global adoption and measurable
            impact across diverse use cases.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {/* Metric 1 - Authors */}
          <div className="relative bg-gradient-to-br from-[#dbeafe] via-[#eff6ff] to-[#f8fafc] rounded-[20px] border-2 border-[#0468B1] p-[40px] shadow-xl shadow-blue-200/40 overflow-hidden group hover:shadow-2xl hover:shadow-blue-300/50 transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-gradient-to-br from-[#60a5fa]/20 to-transparent rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-[100px] h-[100px] bg-gradient-to-tr from-[#93c5fd]/15 to-transparent rounded-tr-full"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div
                className="bg-gradient-to-br from-[#0468B1] to-[#0080D7] rounded-full size-[64px] flex items-center justify-center mb-[20px] shadow-lg"
                role="img"
                aria-label="Authors icon"
              >
                <Users className="text-white" size={32} strokeWidth={2} />
              </div>
              <div className="text-[56px] font-['Inter:Bold',sans-serif] font-bold bg-gradient-to-br from-[#0468B1] to-[#1e40af] bg-clip-text text-transparent mb-[12px] leading-[1]">
                100+
              </div>
              <div className="text-[17px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f172b] mb-[10px]">
                Story Map Authors
              </div>
              <p className="text-[15px] font-['Inter:Medium',sans-serif] font-medium text-[#64748b] leading-[22px]">
                Actively creating and publishing map-based narratives
              </p>
            </div>
          </div>

          {/* Metric 2 - Countries */}
          <div className="relative bg-gradient-to-br from-[#d1fae5] via-[#ecfdf5] to-[#f8fafc] rounded-[20px] border-2 border-[#059669] p-[40px] shadow-xl shadow-green-200/40 overflow-hidden group hover:shadow-2xl hover:shadow-green-300/50 transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-gradient-to-br from-[#34d399]/20 to-transparent rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-[100px] h-[100px] bg-gradient-to-tr from-[#6ee7b7]/15 to-transparent rounded-tr-full"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div
                className="bg-gradient-to-br from-[#059669] to-[#047857] rounded-full size-[64px] flex items-center justify-center mb-[20px] shadow-lg"
                role="img"
                aria-label="Global reach icon"
              >
                <span className="text-[32px]" aria-hidden="true">
                  🌍
                </span>
              </div>
              <div className="text-[56px] font-['Inter:Bold',sans-serif] font-bold bg-gradient-to-br from-[#059669] to-[#15803d] bg-clip-text text-transparent mb-[12px] leading-[1]">
                26+
              </div>
              <div className="text-[17px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f172b] mb-[10px]">
                Countries
              </div>
              <p className="text-[15px] font-['Inter:Medium',sans-serif] font-medium text-[#64748b] leading-[22px]">
                Demonstrating global adoption across diverse communities
              </p>
            </div>
          </div>

          {/* Metric 3 - Viewers */}
          <div className="relative bg-gradient-to-br from-[#fed7aa] via-[#fff7ed] to-[#f8fafc] rounded-[20px] border-2 border-[#f97316] p-[40px] shadow-xl shadow-orange-200/40 overflow-hidden group hover:shadow-2xl hover:shadow-orange-300/50 transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-gradient-to-br from-[#fb923c]/20 to-transparent rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-[100px] h-[100px] bg-gradient-to-tr from-[#fdba74]/15 to-transparent rounded-tr-full"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div
                className="bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full size-[64px] flex items-center justify-center mb-[20px] shadow-lg"
                role="img"
                aria-label="Viewers icon"
              >
                <span className="text-[32px]" aria-hidden="true">
                  👁️
                </span>
              </div>
              <div className="text-[56px] font-['Inter:Bold',sans-serif] font-bold bg-gradient-to-br from-[#f97316] to-[#c2410c] bg-clip-text text-transparent mb-[12px] leading-[1]">
                24K+
              </div>
              <div className="text-[17px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f172b] mb-[10px]">
                Unique Viewers
              </div>
              <p className="text-[15px] font-['Inter:Medium',sans-serif] font-medium text-[#64748b] leading-[22px]">
                Engaging with Story Maps content worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          <div className="bg-white rounded-[14px] border border-[#e2e8f0] p-[28px] shadow-[0_2px_12px_rgb(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.08)] transition-shadow">
            <div className="flex flex-col items-center text-center gap-[12px]">
              <div
                className="w-[56px] h-[56px] rounded-full bg-gradient-to-br from-[#a855f7] to-[#9333ea] flex items-center justify-center shadow-lg"
                role="img"
                aria-label="Zero-code workflow icon"
              >
                <span className="text-[28px]" aria-hidden="true">
                  ⚡
                </span>
              </div>
              <div className="text-[32px] font-['Inter:Bold',sans-serif] font-bold text-[#0f172b] leading-[1]">
                0-code
              </div>
              <p className="text-[14px] font-['Inter:Regular',sans-serif] text-[#64748b] leading-[20px]">
                Workflow introduced, eliminating manual configuration files
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[14px] border border-[#e2e8f0] p-[28px] shadow-[0_2px_12px_rgb(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.08)] transition-shadow">
            <div className="flex flex-col items-center text-center gap-[12px]">
              <div
                className="w-[56px] h-[56px] rounded-full bg-gradient-to-br from-[#06b6d4] to-[#0891b2] flex items-center justify-center shadow-lg"
                role="img"
                aria-label="Global use cases icon"
              >
                <span className="text-[28px]" aria-hidden="true">
                  🌍
                </span>
              </div>
              <div className="text-[32px] font-['Inter:Bold',sans-serif] font-bold text-[#0f172b] leading-[1]">
                3+
              </div>
              <p className="text-[14px] font-['Inter:Regular',sans-serif] text-[#64748b] leading-[20px]">
                New use cases beyond conservation: civic mapping, flood
                response, cultural storytelling
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[14px] border border-[#e2e8f0] p-[28px] shadow-[0_2px_12px_rgb(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.08)] transition-shadow">
            <div className="flex flex-col items-center text-center gap-[12px]">
              <div
                className="w-[56px] h-[56px] rounded-full bg-gradient-to-br from-[#ec4899] to-[#db2777] flex items-center justify-center shadow-lg"
                role="img"
                aria-label="Unified creation flow icon"
              >
                <span className="text-[28px]" aria-hidden="true">
                  ✨
                </span>
              </div>
              <div className="text-[32px] font-['Inter:Bold',sans-serif] font-bold text-[#0f172b] leading-[1]">
                1
              </div>
              <p className="text-[14px] font-['Inter:Regular',sans-serif] text-[#64748b] leading-[20px]">
                Unified creation flow consolidating media upload, geolocation,
                preview, and publishing
              </p>
            </div>
          </div>
        </div>

        {/* Case Studies */}

        {/* Reflection */}
        <div className="bg-gradient-to-br from-[#fef9e7] to-[#fef3c7] rounded-[14px] border-2 border-[#fbbf24] p-[32px]">
          <div className="flex items-start gap-[20px]">
            <div
              className="bg-[#fbbf24] rounded-[12px] size-[48px] flex items-center justify-center shrink-0"
              role="img"
              aria-label="Key insight icon"
            >
              <span className="text-white text-[24px]" aria-hidden="true">
                💡
              </span>
            </div>
            <div className="flex-1">
              <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] text-[#78350f] text-[18px] mb-[12px]">
                Reflection
              </h4>
              <p className="font-['Inter:Regular',sans-serif] leading-[26px] text-[#92400e] text-[16px] mb-[16px]">
                This project reinforced the importance of designing for
                real-world constraints.
              </p>
              <p className="font-['Inter:Regular',sans-serif] leading-[26px] text-[#92400e] text-[16px] mb-[20px]">
                By reducing technical complexity and focusing on familiar
                interaction patterns, we made storytelling accessible to users
                who previously depended on developers or external tools.
              </p>
              <div className="bg-white/70 rounded-[10px] p-[20px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] text-[#78350f] text-[18px]">
                  The key takeaway for me: Good UX does not add features — it
                  removes barriers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudy2() {
  const [activeSection, setActiveSection] = useState("overview");
  const isScrollingRef = useRef(false);
  useScrollToTop();
  usePendingSectionScroll();

  useEffect(() => {
    const handleScroll = () => {
      // Skip scroll tracking if we're programmatically scrolling
      if (isScrollingRef.current) return;

      const sections = [
        "overview",
        "problem",
        "users",
        "approach",
        "initial-design",
        "why-failed",
        "design-solution",
        "why-works",
        "outcome",
      ];

      // Get the current scroll position
      const scrollY =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop;

      // Use a smaller offset from the top of the viewport to determine active section
      const offset = 200;

      let foundSection = "overview"; // default

      // Check each section to see which one is currently in view
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionBottom = rect.bottom;

          // Section is active if its top is above the offset point and bottom is below it
          // OR if we're at the bottom of the page and this is the last section
          if (sectionTop <= offset && sectionBottom > offset) {
            foundSection = sectionId;
            break;
          }

          // Special case: if we're near the bottom of the page, activate the last section
          if (sectionId === "outcome" && sectionTop <= window.innerHeight / 2) {
            foundSection = "outcome";
          }
        }
      }

      if (activeSection !== foundSection) {
        setActiveSection(foundSection);
      }
    };

    // Run immediately on mount to set initial active section
    handleScroll();

    // Throttle scroll events for better performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    document.addEventListener("scroll", scrollListener, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollListener);
      document.removeEventListener("scroll", scrollListener);
    };
  }, [activeSection]);

  return (
    <div className="bg-white w-full min-h-screen pt-[49px]">
      <Header />
      <TopNavigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isScrollingRef={isScrollingRef}
      />
      <ContentContainer />
      <Footer />
    </div>
  );
}
