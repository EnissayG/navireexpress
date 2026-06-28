import { Link } from "react-router";
import { Star, Phone } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { PageHero } from "../components/PageHero";
import temoignageHeroImg from "../../imports/temoignage.jpg";

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

function WaveUp() {
  return (
    <div className="overflow-hidden bg-[#f5f5f5] leading-none" style={{ height: 60 }}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full">
        <path d="M0,40 Q240,8 480,34 Q720,60 960,26 Q1200,4 1440,34 L1440,60 L0,60 Z" fill="#2B4FCB" />
      </svg>
    </div>
  );
}

const TESTIMONIALS = [
  {
    name: "Marie Dubois",
    location: "Plateau Mont-Royal",
    text: "Service impeccable du début à la fin. L'équipe était ponctuelle, professionnelle et a pris grand soin de nos meubles. Je recommande sans hésiter!",
    date: "Mars 2026",
  },
  {
    name: "Jean Tremblay",
    location: "Centre-Ville",
    text: "Excellent rapport qualité-prix. Les déménageurs sont arrivés à l'heure, ont tout emballé avec soin et ont terminé plus vite que prévu.",
    date: "Février 2026",
  },
  {
    name: "Sophie Lavoie",
    location: "Rosemont",
    text: "Mon appartement 4½ déménagé en quelques heures seulement. Communication claire, équipe sympathique. Parfait!",
    date: "Janvier 2026",
  },
  {
    name: "Pierre Gagnon",
    location: "Westmount",
    text: "Déménagement de bureau réussi sans aucune interruption de nos activités. Service commercial de qualité supérieure.",
    date: "Décembre 2025",
  },
  {
    name: "Isabelle Martin",
    location: "Laval",
    text: "Avec trois enfants à gérer, le déménagement se serait pu être chaotique. L'équipe de Navire Express a tout simplifié. Merci!",
    date: "Novembre 2025",
  },
  {
    name: "Marc Côté",
    location: "Verdun",
    text: "Prix transparent, estimation respectée, aucun frais caché. Les gars sont efficaces et de bonne humeur. Je les rappellerai.",
    date: "Octobre 2025",
  },
  {
    name: "Catherine Roy",
    location: "Outremont",
    text: "Déménagement de dernière minute géré parfaitement. Flexibilité et professionnalisme au rendez-vous. Bravo!",
    date: "Septembre 2025",
  },
  {
    name: "François Bélanger",
    location: "Rive-Sud",
    text: "De la prise en charge à la livraison, tout s'est déroulé sans accroc. Je recommande Navire Express à tous mes proches.",
    date: "Août 2025",
  },
  {
    name: "Julie Moreau",
    location: "Côte-des-Neiges",
    text: "Première expérience de déménagement et Navire Express a tout rendu facile. Conseils utiles, emballage parfait, tarif honnête.",
    date: "Juillet 2025",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// Deterministic "random" color per index
const AVATAR_COLORS = [
  { bg: "#fff1ec", text: "#E84B1B" },
  { bg: "#eef2ff", text: "#2B4FCB" },
  { bg: "#fff1ec", text: "#E84B1B" },
  { bg: "#eef2ff", text: "#2B4FCB" },
  { bg: "#fff8f6", text: "#c83e15" },
  { bg: "#f0f4ff", text: "#2340aa" },
  { bg: "#fff1ec", text: "#E84B1B" },
  { bg: "#eef2ff", text: "#2B4FCB" },
  { bg: "#fff1ec", text: "#E84B1B" },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-[#E84B1B] text-[#E84B1B]" />
      ))}
    </div>
  );
}

function QuoteMark() {
  return (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true">
      <path
        d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 6.4 7.2 10.4H12V24H0zm16 0V14.4C16 6.4 20.8 1.6 30.4 0L32 2.4C26.4 3.6 23.6 6.4 23.2 10.4H28V24H16z"
        fill="#E84B1B"
        fillOpacity="0.12"
      />
    </svg>
  );
}

export function Testimonials() {
  return (
    <div>

      <PageHero
        label="Témoignages"
        title={
          <>
            Ce que disent
            <br />
            nos clients.
          </>
        }
        image={temoignageHeroImg}
        imageAlt="Nouvelle maison, clés en main"
      >
        <div className="flex flex-wrap gap-0 mt-2">
          {[
            { n: "Local", label: "Clients montréalais", color: "#E84B1B" },
            { n: "Réels", label: "Avis authentiques", color: "#2B4FCB" },
            { n: "2020", label: "Depuis", color: "#E84B1B" },
          ].map((s, i) => (
            <div
              key={i}
              className="pr-12 mr-12 last:pr-0 last:mr-0 border-r last:border-r-0 border-[#e8e8e8]"
            >
              <div
                className="font-black mb-1 leading-none"
                style={{ fontSize: "clamp(28px, 3.5vw, 42px)", color: s.color, letterSpacing: "-0.04em" }}
              >
                {s.n}
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#888]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </PageHero>

      <PillSep label="Témoignages" />

      {/* ── Testimonials masonry grid ── */}
      <section className="py-32 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {TESTIMONIALS.map((t, i) => {
              const avatarColor = AVATAR_COLORS[i % AVATAR_COLORS.length];
              return (
                <Reveal
                  key={i}
                  delay={(i % 3) * 0.05}
                  className="break-inside-avoid bg-white rounded-2xl border border-[#e8e8e8] p-8 hover:shadow-lg transition-all group"
                >
                  {/* Quote mark decoration */}
                  <div className="mb-4">
                    <QuoteMark />
                  </div>

                  {/* Stars */}
                  <Stars />

                  {/* Text */}
                  <p className="mt-4 mb-6 text-[#444] text-[14px] leading-relaxed">
                    {t.text}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-[#f0f0f0] pt-5 flex items-center gap-4">
                    {/* Avatar initials circle */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
                      style={{ backgroundColor: avatarColor.bg, color: avatarColor.text }}
                    >
                      {getInitials(t.name)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[#111] leading-tight">{t.name}</p>
                      <p className="text-[11px] text-[#888] mt-0.5">{t.location}</p>
                    </div>
                    <p className="text-[11px] text-[#ccc] flex-shrink-0">{t.date}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Trust / Engagements ── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E84B1B] mb-4">Pourquoi nous faire confiance</p>
            <h2
              className="font-bold text-[#111]"
              style={{ fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.025em" }}
            >
              Nos engagements
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "💰",
                title: "Prix transparents",
                desc: "Estimation gratuite, pas de frais cachés, ce qui est annoncé est respecté.",
              },
              {
                icon: "🤝",
                title: "Service personnalisé",
                desc: "Chaque déménagement est unique. Nous adaptons notre approche à votre situation.",
              },
              {
                icon: "✅",
                title: "Garantie satisfaction",
                desc: "Nous ne sommes pas satisfaits tant que vous ne l'êtes pas. Simple.",
              },
            ].map((item, i) => (
              <Reveal
                key={i}
                delay={i * 0.06}
                className="bg-white rounded-2xl border border-[#e8e8e8] p-8 hover:shadow-lg transition-all text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E84B1B] to-[#2B4FCB] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />
                <div className="text-3xl mb-5">{item.icon}</div>
                <h3
                  className="font-bold text-[#111] mb-3"
                  style={{ fontSize: "clamp(16px, 1.5vw, 19px)", letterSpacing: "-0.01em" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WaveUp />

      {/* ── CTA ── */}
      <section className="bg-[#2B4FCB] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 mb-5">Rejoignez nos clients satisfaits</p>
            <h2
              className="font-bold text-white mb-4 leading-tight"
              style={{ fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.025em" }}
            >
              Prêt à vivre la<br />différence Navire?
            </h2>
            <p className="text-white/60 mb-10 text-[15px]">Estimation gratuite · Sans engagement · Réponse en 24h</p>
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
