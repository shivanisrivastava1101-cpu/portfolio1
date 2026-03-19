import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectVisual() {
  return (
    <section className="mb-20">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761850167081-473019536383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwcGxhdGZvcm0lMjBkYXNoYm9hcmQlMjBmaW5hbmNpYWx8ZW58MXx8fHwxNzcwOTk0ODUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Trading platform dashboard interface"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
      </div>
      <p className="text-sm text-slate-500 mt-4 text-center italic">
        Image source: Representative trading platform interface
      </p>
    </section>
  );
}
