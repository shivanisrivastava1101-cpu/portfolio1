import { Linkedin, Heart, Figma } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-700 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.05),transparent_50%)]"></div>
      <div className="max-w-6xl mx-auto px-6 py-16 relative">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-2 text-slate-300 text-lg">
            <span>© Designed with</span>
            <Heart className="w-5 h-5 fill-emerald-500 text-emerald-500 animate-pulse" />
            <span className="font-semibold text-white">by Shivani Srivastava</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/shivani-sri/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 font-medium"
            >
              <Linkedin className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
