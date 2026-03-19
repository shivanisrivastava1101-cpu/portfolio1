export function PortfolioHero({ className = "" }: { className?: string }) {
  return (
    <header className={`mb-20 md:mb-28 ${className}`}>
      <div className="relative w-full h-72 md:h-[28rem] bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 rounded-2xl mb-10 mt-4 flex items-center justify-center overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1579226905180-636b76d96082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMGNoYXJ0cyUyMGZpbmFuY2lhbHxlbnwxfHx8fDE3NzE3NTM3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Stock market financial charts"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-emerald-900/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="relative z-10 px-6 text-center max-w-5xl">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full">
            <span className="text-emerald-300 text-sm font-medium tracking-wide">3 YEARS OF TRADING PLATFORM DESIGN</span>
          </div>
          <h1 className="text-5xl md:text-7xl text-white font-bold leading-tight mb-4">
            Cloud-based Trading Platform
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
      </div>
      <p className="text-xl md:text-2xl text-slate-700 max-w-4xl leading-relaxed">
        Designed a unified trading experience enabling traders to execute, monitor, 
        and manage orders seamlessly across asset classes — supporting <span className="text-emerald-600 font-semibold">frictionless trading</span> 
        and <span className="text-blue-600 font-semibold">real-time compliance</span> within a single cloud-native platform.
      </p>
    </header>
  );
}