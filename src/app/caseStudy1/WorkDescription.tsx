import { Check } from "lucide-react";

export function WorkDescription() {
  const contributions = [
    "Designing unified OMS workflows supporting trade execution, monitoring, and lifecycle management",
    "Driving UX consistency across multiple modules and touchpoints",
    "Supporting delivery of new core trading capabilities within a cloud-native platform",
    "Collaborating cross-functionally to align product goals with real user needs"
  ];

  return (
    <section className="mb-24">
      <div className="max-w-4xl">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900 font-bold">
            My Role
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 border border-slate-200 rounded-2xl p-8 mb-8 shadow-sm">
          <p className="text-slate-700 leading-relaxed text-lg mb-6">
            As the <span className="font-semibold text-slate-900">lead designer</span>, I partnered closely with product managers, product owners, 
            clients, and distributed engineering teams to shape the end-to-end order management 
            experience.
          </p>

          <p className="text-slate-700 leading-relaxed text-lg">
            My work focused on <span className="text-emerald-600 font-semibold">simplifying complex trading workflows</span>, improving usability 
            across modules, and establishing <span className="text-blue-600 font-semibold">consistent interaction patterns</span> to support 
            scalable product growth.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-6">
          Key contributions included:
        </h3>

        <div className="space-y-4">
          {contributions.map((contribution, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 group">
              <div className="mt-0.5 flex-shrink-0">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300">
                  <Check className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed text-base pt-1">
                {contribution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
