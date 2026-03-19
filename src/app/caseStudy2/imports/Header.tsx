function Link() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-white top-0">{`Product & UX Designer`}</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start left-0 pr-[0.609px] pt-px top-0 w-[153.141px]" data-name="Container">
      <Link />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-[0.26px] top-[-1px] w-[39.484px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[20px] not-italic text-[#d1d5dc] text-[16px] text-center top-[-1px]">Work</p>
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-gradient-to-b from-[#ad46ff] h-[2px] left-0 to-[#f6339a] top-[22px] w-0" data-name="Container" />;
}

function Container3() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[40.297px]" data-name="Container">
      <Paragraph />
      <Container4 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-[0.34px] top-[-1px] w-[46.313px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[23.5px] not-italic text-[#d1d5dc] text-[16px] text-center top-[-1px]">About</p>
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-gradient-to-b from-[#ad46ff] h-[2px] left-0 to-[#f6339a] top-[22px] w-0" data-name="Container" />;
}

function Container5() {
  return (
    <div className="absolute h-[24px] left-[72.3px] top-0 w-[45.969px]" data-name="Container">
      <Paragraph1 />
      <Container6 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[24px] left-[1283.73px] top-0 w-[118.266px]" data-name="Container">
      <Container3 />
      <Container5 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-start pb-px pt-[24px] px-[24px] relative size-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#1d293d] border-b border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}