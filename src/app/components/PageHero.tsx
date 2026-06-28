import type { ReactNode } from "react";

type PageHeroProps = {
  label: string;
  title: ReactNode;
  description?: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
};

export function PageHero({ label, title, description, image, imageAlt, children }: PageHeroProps) {
  return (
    <section className="bg-white border-b border-[#e8e8e8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] items-center gap-10 lg:gap-12">
          <div className="max-w-xl lg:max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#E84B1B]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E84B1B]">
                {label}
              </span>
            </div>

            <h1
              className="font-bold text-[#111] mb-7 leading-[1.05]"
              style={{ fontSize: "clamp(38px, 5.5vw, 68px)", letterSpacing: "-0.03em" }}
            >
              {title}
            </h1>

            {description && (
              <p className="text-[#555] leading-relaxed" style={{ fontSize: "clamp(15px, 1.5vw, 18px)" }}>
                {description}
              </p>
            )}

            {children}
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={image}
              alt={imageAlt}
              className="w-full max-w-[440px] sm:max-w-[500px] lg:max-w-none lg:w-[105%] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
