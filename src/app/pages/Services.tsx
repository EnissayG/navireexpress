import { Link } from "react-router";
import { Truck, Building2, PackageCheck, Users, Phone } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { PageHeader, HeroLeadMain } from "../components/PageHeader";

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

const SERVICES = [
  {
    icon: Truck,
    number: "01",
    title: "Déménagement Résidentiel",
    tagline: "Du studio à la grande maison",
    description:
      "Que vous déménagiez un studio ou une maison familiale, notre équipe s'adapte à vos besoins. Nous gérons chaque étape avec professionnalisme.",
    features: [
      "Studios et appartements",
      "Maisons unifamiliales & condos",
      "Emballage et déballage disponibles",
      "Protection de meubles incluse",
      "Démontage et remontage de meubles",
    ],
  },
  {
    icon: Building2,
    number: "02",
    title: "Déménagement Commercial",
    tagline: "Bureaux et commerces",
    description:
      "Nous planifions chaque déménagement d'entreprise pour minimiser l'interruption de vos activités, souvent après les heures d'ouverture.",
    features: [
      "Bureaux et espaces de travail",
      "Commerces et restaurants",
      "Déménagement hors heures d'ouverture",
      "Installation de mobilier de bureau",
      "Gestion d'inventaire",
    ],
  },
  {
    icon: PackageCheck,
    number: "03",
    title: "Service d'Emballage",
    tagline: "Professionnel et sécuritaire",
    description:
      "Nous apportons tout le matériel nécessaire pour emballer vos effets avec le plus grand soin, des fragiles aux plus volumineux.",
    features: [
      "Matériel d'emballage fourni",
      "Objets fragiles et d'art",
      "Boîtes spécialisées",
      "Étiquetage et inventaire",
      "Déballage et rangement",
    ],
  },
  {
    icon: Users,
    number: "04",
    title: "Location de Main-d'œuvre",
    tagline: "Flexibilité à la carte",
    description:
      "Besoin d'aide ponctuelle? Louez notre équipe à l'heure pour le chargement, déchargement ou toute autre tâche physique.",
    features: [
      "Tarif horaire flexible",
      "Chargement et déchargement",
      "Montage et démontage",
      "Port de charges lourdes",
      "Service sur demande",
    ],
  },
];

const AREAS = [
  "Plateau Mont-Royal", "Centre-Ville", "Rosemont", "Verdun",
  "Laval", "Rive-Sud", "Westmount", "Outremont",
  "Côte-des-Neiges", "Ville-Marie",
];

export function Services() {
  return (
    <div>

      <PageHeader
        label="Nos services"
        watermark="04"
        title={<HeroLeadMain lead="Des solutions pour" main="chaque situation." />}
        description="De la boîte de carton à la clé du nouveau domicile, Navire Express couvre l'ensemble du processus de déménagement."
      />

      {/* ── Services cards ── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          {SERVICES.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 0.05}
              className="group grid grid-cols-1 lg:grid-cols-[340px_1fr] bg-white rounded-2xl border border-[#e8e8e8] overflow-hidden hover:shadow-lg transition-all hover:border-[#2B4FCB]/30"
            >
              {/* Left panel */}
              <div className="relative bg-[#f8f8f8] group-hover:bg-[#f0f4ff] transition-colors p-10 flex flex-col justify-between overflow-hidden">
                {/* Number watermark */}
                <div
                  className="absolute -bottom-4 -left-3 font-black text-[#e8e8e8] group-hover:text-[#dde6ff] select-none pointer-events-none leading-none transition-colors"
                  style={{ fontSize: "140px", letterSpacing: "-0.06em" }}
                >
                  {s.number}
                </div>
                <div className="relative z-10">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E84B1B] mb-6 block">
                    Service {s.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#e8e8e8] flex items-center justify-center mb-6 group-hover:border-[#2B4FCB]/20 transition-colors">
                    <s.icon className="w-5 h-5 text-[#2B4FCB]" />
                  </div>
                  <h2
                    className="font-bold text-[#111] mb-2 leading-tight"
                    style={{ fontSize: "clamp(18px, 2vw, 24px)", letterSpacing: "-0.02em" }}
                  >
                    {s.title}
                  </h2>
                  <p className="text-sm text-[#888]">{s.tagline}</p>
                </div>
              </div>

              {/* Right panel */}
              <div className="p-10">
                <p className="text-[#555] leading-relaxed mb-8 text-[15px]">{s.description}</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#888] mb-5">Ce qui est inclus</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {s.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-sm text-[#444]">
                      {/* Custom checkmark */}
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#fff1ec] flex items-center justify-center mt-0.5">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4l2.5 2.5L9 1" stroke="#E84B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <DiagDown />

      {/* ── Coverage areas ── */}
      <section className="py-32 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E84B1B] mb-4">Zone de service</p>
              <h2
                className="font-bold text-[#111] mb-5"
                style={{ fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.025em" }}
              >
                Nous desservons<br />tout Montréal
              </h2>
              <p className="text-[#666] text-[15px] leading-relaxed">
                De l'île à la Rive-Sud, notre équipe se déplace partout dans la région métropolitaine.
              </p>
            </Reveal>

            <Reveal delay={0.06} className="flex flex-wrap gap-3">
              {AREAS.map((area, i) => (
                <Reveal
                  key={i}
                  delay={i * 0.03}
                  className="group flex items-center gap-2 px-5 py-3 bg-white border border-[#e8e8e8] rounded-full text-sm text-[#444] hover:border-[#2B4FCB] hover:text-[#2B4FCB] hover:shadow-md transition-all cursor-default"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#E84B1B] group-hover:bg-[#2B4FCB] transition-colors flex-shrink-0"
                  />
                  {area}
                </Reveal>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <WaveUp />

      {/* ── CTA ── */}
      <section className="bg-[#2B4FCB] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 mb-5">Prêt à déménager?</p>
            <h2
              className="font-bold text-white mb-4 leading-tight"
              style={{ fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.025em" }}
            >
              Un projet? Parlons-en.
            </h2>
            <p className="text-white/60 mb-10 text-[15px]">Estimation gratuite et sans engagement sous 24h</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:5148390212"
                className="inline-flex items-center gap-2 bg-[#E84B1B] text-white px-7 py-4 rounded-full font-semibold text-sm hover:bg-[#d04016] transition-all hover:shadow-lg hover:shadow-[#E84B1B]/30 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                514 839-0212
              </a>
              <Link
                to="/contact"
                className="border border-white/30 text-white px-7 py-4 rounded-full font-semibold text-sm hover:bg-white/10 transition-all"
              >
                Écrire un message
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
