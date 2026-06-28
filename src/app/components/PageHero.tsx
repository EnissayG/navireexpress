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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          <div className="flex-1 min-w-0 max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#E84B1B]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#888]">
                {label}
              </span>
            </div>

            <h1
              className="font-bold text-[#111] mb-6 leading-[1.05]"
              style={{ fontSize: "clamp(34px, 5vw, 60px)", letterSpacing: "-0.03em" }}
            >
              {title}
            </h1>

            {description && (
              <p className="text-[#555] leading-relaxed max-w-lg" style={{ fontSize: "clamp(15px, 1.4vw, 17px)" }}>
                {description}
              </p>
            )}

            {children}
          </div>

          <div className="flex-shrink-0 flex justify-center lg:justify-end">
            <img
              src={image}
              alt={imageAlt}
              width={480}
              height={320}
              className="w-auto h-auto max-w-[260px] sm:max-w-[300px] lg:max-w-[340px] max-h-[160px] sm:max-h-[180px] lg:max-h-[200px] object-contain object-center"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
