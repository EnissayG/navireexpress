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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-5 h-px bg-[#E84B1B]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#888]">
                {label}
              </span>
            </div>

            <h1
              className="text-[#111] leading-[0.98] font-extrabold mb-6"
              style={{ fontSize: "clamp(36px, 5.5vw, 64px)", letterSpacing: "-0.04em" }}
            >
              {title}
            </h1>

            {description && (
              <p
                className="text-[#555] leading-relaxed max-w-md"
                style={{ fontSize: "clamp(15px, 1.4vw, 18px)" }}
              >
                {description}
              </p>
            )}

            {children && <div className="mt-8">{children}</div>}
          </div>

          <div className="relative w-full lg:justify-self-end">
            <div className="rounded-2xl overflow-hidden border border-[#ececec] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <img
                src={image}
                alt={imageAlt}
                className="w-full aspect-[4/3] object-cover"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
