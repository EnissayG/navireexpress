import { Link } from "react-router";
import { Phone } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { PageHero } from "../components/PageHero";
import aproposHeroImg from "../../imports/apropos.jpg";

function PillSep({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-10 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex items-center gap-4 w-full">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#e4e4e4]" />
        <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#e8e8e8]">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E84B1B]" />
          {label && <span className="text-[9px] uppercase tracking-[0.32em] text-[#bbb]">{label}</span>}
          <div className="w-1.5 h-1.5 rounded-full bg-[#2B4FCB]" />
        </div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#e4e4e4]" />
      </div>
    </div>
  );
}

function DiagDown() {
  return (
    <div className="overflow-hidden bg-white leading-none" style={{ height: 56 }}>
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-full">
        <polygon points="0,0 1440,0 0,56" fill="white" />
        <polygon points="1440,0 1440,56 0,56" fill="#f5f5f5" />
      </svg>
    </div>
  );
}

function WaveUp() {
  return (
    <div className="overflow-hidden bg-[#f5f5f5] leading-none" style={{ height: 60 }}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full">
        <path d="M0,40 Q240,8 480,34 Q720,60 960,26 Q1200,4 1440,34 L1440,60 L0,60 Z" fill="#2B4FCB" />
      </svg>
    </div>
  );
}

const MILESTONES = [
  { year: "2020", title: "On démarre", desc: "Navire Express naît d'une idée simple : faire un déménagement correctement, sans stress inutile et sans mauvaises surprises sur la facture." },
  { year: "2021", title: "Premiers clients", desc: "Quelques déménagements résidentiels dans le Plateau et Rosemont. Le bouche-à-oreille commence à faire son effet." },
  { year: "2023", title: "On apprend en faisant", desc: "Plus de types de logements, premiers commerces. Chaque déménagement nous rend un peu plus efficaces, sans couper les coins." },
  { year: "2025", title: "Aujourd'hui", desc: "Une petite équipe soudée, des clients qui reviennent et nous recommandent à leurs proches. C'est comme ça qu'on préfère grandir." },
];

const STATS = [
  { n: "2020", label: "Lancé à Montréal", color: "#E84B1B" },
  { n: "Local", label: "Équipe montréalaise", color: "#2B4FCB" },
  { n: "0", label: "Frais cachés", color: "#E84B1B" },
  { n: "Sur mesure", label: "Chaque déménagement", color: "#2B4FCB" },
];

const DIFFERENTIATORS = [
  {
    title: "Une équipe, pas une franchise.",
    body: "Pas de sous-traitants mystères. Quand vous réservez Navire Express, c'est notre équipe qui se présente à votre porte, les mêmes que vous avez eu au téléphone.",
  },
  {
    title: "On vous dit non quand c'est non.",
    body: "Votre date ne se cale pas dans notre agenda? On vous le dit clairement, pas dans trois jours. Le respect, ça commence avant le jour du déménagement.",
  },
  {
    title: "L'expérience s'entend dans les détails.",
    body: "On sait dans quel ordre démonter un lit. On sait envelopper un miroir. On sait quelle boîte aller en dernier dans le camion. Ça s'apprend en faisant.",
  },
];

export function About() {
  return (
    <div>

      <PageHero
        label="À propos"
        title={
          <>
            On déménage des gens,
            <br />
            pas des boîtes.
          </>
        }
        description="Il y a une différence entre transporter des meubles et accompagner quelqu'un dans un moment de vie important. On a choisi la deuxième option."
        image={aproposHeroImg}
        imageAlt="Équipe de déménageurs au travail"
      />

      <PillSep label="Notre histoire" />

      {/* ── Story + Stats ── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            {/* Story */}
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E84B1B] mb-5">Notre histoire</p>
              <h2
                className="font-bold text-[#111] mb-8 leading-tight"
                style={{ fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.025em" }}
              >
                Né d'une frustration,<br />bâti sur la confiance.
              </h2>
              <div className="space-y-5 text-[#555] leading-relaxed text-[15px]">
                <p>
                  Montréal, 2020. Trop de déménagements ratés autour de nous : retards, casses, surprises sur la facture. On a décidé qu'on pouvait faire mieux.
                </p>
                <p>
                  Pas de discours marketing. Juste une équipe qui arrive à l'heure, qui traite vos affaires avec respect, et qui vous remet les clés sans drama.
                </p>
                <p>
                  Quelques années plus tard, une poignée de familles et de commerces de Montréal nous ont fait confiance. Pas des centaines, mais chaque déménagement compte, et la plupart viennent aujourd'hui par recommandation.
                </p>
              </div>
            </Reveal>

            {/* Stats grid */}
            <Reveal delay={0.08} className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <Reveal
                  key={i}
                  delay={0.1 + i * 0.05}
                  className="bg-white rounded-2xl border border-[#e8e8e8] p-8 hover:shadow-lg transition-all group"
                >
                  <div
                    className="font-black mb-2 leading-none"
                    style={{ fontSize: "clamp(36px, 4vw, 52px)", color: s.color, letterSpacing: "-0.04em" }}
                  >
                    {s.n}
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#888]">
                    {s.label}
                  </div>
                  <div
                    className="w-0 group-hover:w-8 h-0.5 mt-4 rounded-full transition-all duration-300"
                    style={{ backgroundColor: s.color }}
                  />
                </Reveal>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <PillSep label="Ce qu'on est" />
      <DiagDown />

      {/* ── Differentiators ── */}
      <section className="py-32 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E84B1B] mb-4">Ce qu'on est vraiment</p>
            <h2
              className="font-bold text-[#111]"
              style={{ fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.025em" }}
            >
              Pas de superlatifs.<br />Des faits.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map((item, i) => (
              <Reveal
                key={i}
                delay={i * 0.06}
                className="bg-white rounded-2xl border border-[#e8e8e8] p-8 hover:shadow-lg transition-all group relative overflow-hidden"
              >
                {/* Orange accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E84B1B] to-[#ff7043] rounded-t-2xl" />
                {/* Number watermark */}
                <div
                  className="absolute top-4 right-5 font-black text-[#f0f0f0] select-none pointer-events-none leading-none"
                  style={{ fontSize: "72px", letterSpacing: "-0.05em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative">
                  <h3
                    className="font-bold text-[#111] mb-4 leading-snug"
                    style={{ fontSize: "clamp(16px, 1.5vw, 19px)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#666] leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E84B1B] mb-4">Parcours</p>
            <h2
              className="font-bold text-[#111]"
              style={{ fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.025em" }}
            >
              Quelques années à bâtir
            </h2>
          </Reveal>

          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#E84B1B] via-[#e8e8e8] to-[#e8e8e8]" />

            <div className="space-y-0">
              {MILESTONES.map((m, i) => (
                <Reveal
                  key={i}
                  delay={i * 0.06}
                  className="flex gap-8 items-start pb-12 last:pb-0"
                >
                  {/* Dot + year */}
                  <div className="flex-shrink-0 flex flex-col items-center z-10">
                    <div
                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
                      style={{
                        backgroundColor: i === MILESTONES.length - 1 ? "#E84B1B" : "#fff",
                        borderColor: i === MILESTONES.length - 1 ? "#E84B1B" : "#e8e8e8",
                      }}
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: i === MILESTONES.length - 1 ? "#fff" : "#E84B1B" }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    {/* Year badge */}
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span
                        className="px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.1em]"
                        style={{
                          backgroundColor: i === MILESTONES.length - 1 ? "#E84B1B" : "#f0f4ff",
                          color: i === MILESTONES.length - 1 ? "#fff" : "#2B4FCB",
                        }}
                      >
                        {m.year}
                      </span>
                    </div>
                    <h3
                      className="font-bold text-[#111] mb-2"
                      style={{ fontSize: "clamp(16px, 1.6vw, 20px)", letterSpacing: "-0.01em" }}
                    >
                      {m.title}
                    </h3>
                    <p className="text-sm text-[#666] leading-relaxed max-w-xl">{m.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WaveUp />

      {/* ── CTA ── */}
      <section className="bg-[#2B4FCB] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 mb-5">Prêt à commencer?</p>
            <h2
              className="font-bold text-white mb-5 leading-tight"
              style={{ fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.025em" }}
            >
              Faites confiance à l'équipe<br />qui dit ce qu'elle fait.
            </h2>
            <p className="text-white/60 mb-10 text-[15px]">Estimation gratuite · Réponse en moins de 24h · Aucun engagement</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:5148390212"
                className="inline-flex items-center gap-2 bg-[#E84B1B] text-white px-7 py-4 rounded-full font-semibold text-sm hover:bg-[#d04016] transition-all hover:shadow-lg hover:shadow-[#E84B1B]/30 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                (514) 839-0212
              </a>
              <Link
                to="/contact"
                className="border border-white/30 text-white px-7 py-4 rounded-full font-semibold text-sm hover:bg-white/10 transition-all"
              >
                Nous écrire
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
