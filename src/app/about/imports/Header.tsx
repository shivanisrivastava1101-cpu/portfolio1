function Link() {
  return (
    <div className="h-[20px] relative shrink-0 w-[152.531px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-white top-[0.33px] whitespace-nowrap">{`Product & UX Designer`}</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-[39.479px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[20px] not-italic text-[#d1d5dc] text-[16px] text-center top-[-1px] whitespace-nowrap">Work</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[46.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[23.5px] not-italic text-white text-[16px] text-center top-[-1px] whitespace-nowrap underline decoration-2 underline-offset-4">About</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[24px] relative shrink-0 w-[117.792px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex items-center justify-between pb-[0.667px] px-[24px] relative size-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#1d293d] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Link />
      <Container />
    </div>
  );
}