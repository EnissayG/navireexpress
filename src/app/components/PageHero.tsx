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
    <section className="relative bg-white border-b border-[#e8e8e8] overflow-hidden">
      {/* Bande douce derrière l'illustration */}
      <div
        className="absolute inset-y-0 right-0 w-full lg:w-[52%] bg-[#f6f7fb] hidden sm:block"
        aria-hidden
      />
      <div
        className="absolute top-8 right-[8%] w-px h-[calc(100%-4rem)] bg-[#e8eaf0] hidden lg:block"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-5 relative z-10">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-px bg-[#E84B1B]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#888]">
                {label}
              </span>
            </div>

            <h1
              className="text-[#111] mb-6 leading-[1.08]"
              style={{ fontSize: "clamp(36px, 5vw, 58px)" }}
            >
              {title}
            </h1>

            {description && (
              <p className="text-[#555] leading-relaxed max-w-md text-[17px]">
                {description}
              </p>
            )}

            {children}
          </div>

          <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center min-h-[260px] sm:min-h-[300px] lg:min-h-[340px]">
            <div className="relative w-full max-w-[480px] lg:max-w-[540px] lg:mr-[-2%]">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto object-contain"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
