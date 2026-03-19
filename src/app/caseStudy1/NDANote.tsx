import { Lock } from "lucide-react";

export function NDANote() {
  return (
    <section className="mb-24">
      <div className="max-w-4xl">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900 font-bold">
            NDA Note
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-slate-500 to-slate-700 rounded-full"></div>
        </div>

        <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-300 rounded-2xl p-8 shadow-lg">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-slate-500 to-slate-700 rounded-l-2xl"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-slate-200 opacity-30 rounded-full -mr-20 -mt-20"></div>
          <div className="relative flex items-start gap-5">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-slate-200 rounded-xl flex items-center justify-center shadow-sm">
                <Lock className="w-7 h-7 text-slate-700" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Confidential Work</h3>
              <p className="text-slate-700 leading-relaxed text-base">
                Due to NDA restrictions, detailed design artifacts and internal processes 
                cannot be shared publicly. I'd be happy to walk through my design approach, 
                challenges, and decision-making in a live conversation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
