import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectVisual() {
  return (
    <section className="mb-20">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <ImageWithFallback
          src="https://www.simcorp.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fsimcorp1-simcorp-pc2b-5212%2Fmedia%2FProject%2FSimCorp%2FSimCorpCom%2FWebsite-sections%2FSolutions%2F06-Image-1080x810--TRADINGCOMPLIANCE-1.jpg%3Fh%3D810%26iar%3D0%26w%3D1080&w=1920&q=75"
          alt="Trading platform dashboard interface"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
      </div>
      <p className="text-sm text-slate-500 mt-4 text-center italic">
        Image source: SimCorp Official Website - Trading Compliance Solution
        Page
      </p>
    </section>
  );
}
