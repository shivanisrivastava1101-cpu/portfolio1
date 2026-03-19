import { TrendingUp, AlertCircle, Target } from "lucide-react";

export function ProblemSpace() {
  const cards = [
    {
      icon: TrendingUp,
      title: "Slow & Inefficient Workflows",
      description: "Too many steps to execute, monitor, and manage orders — slowing decision-making and increasing overhead."
    },
    {
      icon: AlertCircle,
      title: "Too Much Manual Work",
      description: "Repetitive tasks without automation create friction and waste time on actions that could be streamlined."
    },
    {
      icon: Target,
      title: "Fragmented & Inconsistent Experience",
      description: "Disconnected modules and inconsistent patterns reduce productivity and make it hard to build muscle memory."
    }
  ];

  return (
    <section className="mb-24">
      <div>
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900 font-bold">
            Problem Space
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const gradients = [
              'from-red-500 to-orange-500',
              'from-orange-500 to-amber-500',
              'from-amber-500 to-yellow-500'
            ];
            const bgColors = [
              'bg-red-50/50',
              'bg-orange-50/50',
              'bg-amber-50/50'
            ];
            const iconBgs = [
              'bg-red-100',
              'bg-orange-100',
              'bg-amber-100'
            ];
            const iconColors = [
              'text-red-600',
              'text-orange-600',
              'text-amber-600'
            ];
            return (
              <div 
                key={index} 
                className={`relative p-7 bg-white border-2 border-slate-200 rounded-2xl hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden group`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradients[index]} opacity-5 rounded-full -mr-16 -mt-16`}></div>
                <div className="relative flex flex-col items-start gap-5">
                  <div className={`${iconBgs[index]} p-3.5 rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                    <Icon className={`w-7 h-7 ${iconColors[index]}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
