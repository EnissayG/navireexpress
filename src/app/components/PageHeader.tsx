import type { ReactNode } from "react";

type PageHeaderProps = {
  label: string;
  title: ReactNode;
  description?: string;
  /** Filigrane décoratif en arrière-plan */
  watermark: string;
  children?: ReactNode;
};

export function PageHeader({ label, title, description, watermark, children }: PageHeaderProps) {
  return (
    <section className="relative bg-[#fafafa] border-b border-[#e8e8e8] overflow-hidden">
      {/* Accent vertical (orange → bleu) */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#E84B1B] via-[#E84B1B]/80 to-[#2B4FCB]"
        aria-hidden
      />

      {/* Filigrane */}
      <div
        className="absolute right-[-1%] top-1/2 -translate-y-[52%] pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="font-black leading-none text-[#ececec]"
          style={{ fontSize: "clamp(100px, 18vw, 260px)", letterSpacing: "-0.05em" }}
        >
          {watermark}
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl pl-2 lg:pl-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-5 h-px bg-[#E84B1B]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#888]">
              {label}
            </span>
          </div>

          <h1
            className="text-[#111] leading-[1] font-extrabold mb-6"
            style={{ fontSize: "clamp(36px, 5.5vw, 62px)", letterSpacing: "-0.04em" }}
          >
            {title}
          </h1>

          {description && (
            <p
              className="text-[#555] leading-relaxed max-w-xl"
              style={{ fontSize: "clamp(15px, 1.4vw, 18px)" }}
            >
              {description}
            </p>
          )}

          {children && <div className="mt-10">{children}</div>}
        </div>
      </div>

      {/* Séparation diagonale vers le contenu */}
      <div className="overflow-hidden leading-none" style={{ height: 40 }}>
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full">
          <polygon points="0,0 1440,0 0,40" fill="#fafafa" />
          <polygon points="1440,0 1440,40 0,40" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

/** Ligne d'intro plus légère + punchline en gras (même couleur) */
export function HeroLeadMain({ lead, main }: { lead: string; main: string }) {
  return (
    <>
      <span className="block text-[0.58em] font-semibold text-[#555] tracking-[-0.02em] leading-[1.15] mb-2">
        {lead}
      </span>
      <span className="block">{main}</span>
    </>
  );
}

/** Deuxième ligne en italique, même teinte */
export function HeroItalicTail({ line, tail }: { line: string; tail: string }) {
  return (
    <>
      {line}
      <br />
      <span className="italic font-bold">{tail}</span>
    </>
  );
}

/** Trait orange sous le titre, pas de deuxième couleur */
export function HeroRuleTitle({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block border-b-[3px] border-[#E84B1B] pb-3">{children}</span>
  );
}

/** Mot-clé encadré discrètement */
export function HeroMark({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      <span
        className="absolute inset-x-[-0.08em] bottom-[0.12em] h-[0.38em] bg-[#E84B1B]/12 -z-10 rounded-sm"
        aria-hidden
      />
      {children}
    </span>
  );
}
