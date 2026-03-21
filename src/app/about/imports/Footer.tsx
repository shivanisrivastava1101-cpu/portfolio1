import svgPaths from "./svg-9mi1snkspb";

function Paragraph() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[389.594px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative size-full text-[#cad5e2] text-[16px] text-center whitespace-nowrap">
        <p className="-translate-x-1/2 absolute left-[195px] top-[-1px]">Designed with ❤️ by</p>
        <p className="-translate-x-1/2 absolute left-[194.33px] top-[23px]">{` Shivani Srivastava`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[389.594px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[8.33%_8.33%_12.5%_8.33%]" data-name="Group">
      <div className="absolute inset-[33.33%_8.33%_12.5%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-7.69%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6666 12.5">
            <path d={svgPaths.p2970a140} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-[8.33%] right-3/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 11.6667">
            <path d={svgPaths.p395b7a00} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[8.33%] right-3/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d={svgPaths.pec37d00} id="Vector" stroke="var(--stroke-0, #CAD5E2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[32px] not-italic text-[#cad5e2] text-[16px] text-center top-[-1px] whitespace-nowrap">LinkedIn</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[91.344px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container3 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[88px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-center pt-[50px] px-6 md:px-[173px] relative w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#1d293d] border-solid border-t inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}