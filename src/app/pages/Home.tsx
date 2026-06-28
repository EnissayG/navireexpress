import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Phone, Truck, Building2, PackageCheck, Users } from "lucide-react";
import { TruckScene } from "../components/TruckScene";
import { Reveal } from "../components/Reveal";
import truckImg from "../../imports/truck.png";

// ── Ticker de quartiers ───────────────────────────────────────────────────────
const NEIGHBORHOODS = [
  "Plateau Mont-Royal","Rosemont","Verdun","Centre-Ville","Laval",
  "Westmount","Outremont","Côte-des-Neiges","Ville-Marie","Rive-Sud",
  "Saint-Laurent","Ahuntsic","Mercier","Hochelaga","NDG",
];

function Ticker() {
  return (
    <div className="overflow-hidden border-b border-[#f0f0f0] bg-white py-3 select-none">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
      >
        {[...NEIGHBORHOODS, ...NEIGHBORHOODS].map((n, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#aaa]"
          >
            <span className="w-1 h-1 rounded-full bg-[#E84B1B] flex-shrink-0" />
            {n}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ── Séparateurs ───────────────────────────────────────────────────────────────
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
        <path
          d="M0,40 Q240,8 480,34 Q720,60 960,26 Q1200,4 1440,34 L1440,60 L0,60 Z"
          fill="#2B4FCB"
        />
      </svg>
    </div>
  );
}

// ── Services ──────────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: Truck,        title: "Résidentiel",    desc: "Du studio à la grande maison, on s'adapte à votre réalité." },
  { icon: Building2,   title: "Commercial",     desc: "Bureaux et commerces déplacés avec le moins d'interruption possible." },
  { icon: PackageCheck, title: "Emballage",     desc: "On amène le matériel, on emballe, on étiquette. Vous n'avez rien à faire." },
  { icon: Users,        title: "Main-d'œuvre",  desc: "Besoin de bras? On loue notre équipe à l'heure, sans contrat." },
];

export function Home() {
  return (
    <div>

      {/* ── Ticker ─────────────────────────────────────────────────────────── */}
      <Ticker />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col bg-white overflow-hidden">

        {/* Watermark local */}
        <div
          className="absolute left-[-6%] top-1/2 -translate-y-[55%] select-none pointer-events-none z-0"
        >
          <span
            className="font-black leading-none text-[#f0f0f0]"
            style={{ fontSize: "clamp(160px, 26vw, 400px)", letterSpacing: "-0.05em" }}
          >
            MTL
          </span>
        </div>

        {/* Camion, partiellement hors écran à droite */}
        <div
          className="absolute pointer-events-none select-none z-[1]
            bottom-[-2%] right-0
            lg:top-1/2 lg:bottom-auto lg:-translate-y-[42%]"
          aria-hidden
        >
          <img
            src={truckImg}
            alt=""
            className="h-auto block w-[min(145vw,1040px)] translate-x-[24%] sm:translate-x-[22%] lg:translate-x-[18%]"
            style={{
              filter:
                "drop-shadow(-12px 24px 48px rgba(43,79,203,0.12)) drop-shadow(0 20px 40px rgba(0,0,0,0.08))",
            }}
          />
        </div>

        {/* Contenu principal */}
        <div className="flex-1 relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex items-center py-16 pb-52 sm:pb-44 lg:pb-16">
          <div className="max-w-lg sm:max-w-xl lg:max-w-2xl">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-5 h-px bg-[#E84B1B]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#888]">
                  Montréal · Depuis 2020
                </span>
              </div>

              <h1
                className="text-[#111] leading-[1.02]"
                style={{ fontSize: "clamp(44px, 7.5vw, 96px)" }}
              >
                Un service de
                <br />
                déménagement fiable.
              </h1>

              <p
                className="text-[#555] leading-relaxed mt-8 mb-10 max-w-md"
                style={{ fontSize: "clamp(15px, 1.4vw, 18px)" }}
              >
                Résidentiel et commercial. Devis clair, équipe ponctuelle, joignable 7 jours sur 7.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:5148390212"
                  className="inline-flex items-center gap-2 bg-[#E84B1B] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#d04016] transition-all hover:shadow-xl hover:shadow-[#E84B1B]/25 active:scale-[0.97]"
                >
                  <Phone className="w-4 h-4" />
                  (514) 839-0212
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-[#111] border border-[#ddd] px-8 py-4 rounded-full font-bold text-sm hover:border-[#2B4FCB] hover:text-[#2B4FCB] transition-colors"
                >
                  Devis gratuit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip en bas du hero */}
        <div className="relative z-10 border-t border-[#ececec] bg-white/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#ececec]">
              {[
                { n: "Local", label: "Équipe montréalaise", color: "#E84B1B" },
                { n: "2020", label: "Depuis",              color: "#2B4FCB" },
                { n: "0",    label: "Frais cachés",        color: "#E84B1B" },
                { n: "24h",  label: "Réponse devis",       color: "#2B4FCB" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="py-7 px-6 text-center"
                >
                  <div className="font-black mb-0.5" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", color: s.color, letterSpacing: "-0.03em" }}>
                    {s.n}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-[#aaa]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Séparateur + Animation ─────────────────────────────────────────── */}
      <PillSep label="Le processus" />
      <TruckScene />

      {/* ── Séparateur + Services ─────────────────────────────────────────── */}
      <PillSep label="Nos services" />

      <section className="pt-4 pb-44 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E84B1B] mb-4">Ce qu'on fait</p>
              <h2 className="font-bold text-[#111]" style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.025em" }}>
                Quatre services,<br />une équipe.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-[#2B4FCB] font-semibold hover:gap-3 transition-all"
            >
              Voir les détails <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <Reveal
                key={i}
                delay={i * 0.06}
                className="group p-8 border border-[#e8e8e8] rounded-2xl hover:border-[#2B4FCB]/40 hover:shadow-xl hover:shadow-[#2B4FCB]/6 transition-all bg-white"
              >
                <div className="w-11 h-11 rounded-xl bg-[#eef2ff] flex items-center justify-center mb-6 group-hover:bg-[#2B4FCB] transition-colors">
                  <s.icon className="w-5 h-5 text-[#2B4FCB] group-hover:text-white transition-colors" />
                </div>
                <p className="font-bold text-[#111] mb-3">{s.title}</p>
                <p className="text-sm text-[#666] leading-relaxed">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Séparateur diagonal blanc → gris ──────────────────────────────── */}
      <DiagDown />

      {/* ── Valeurs ───────────────────────────────────────────────────────── */}
      <section className="pt-20 pb-44 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E84B1B] mb-4">Pourquoi nous</p>
            <h2 className="font-bold text-[#111]" style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.025em" }}>
              Ce qu'on fait<br />différemment.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e4e4e4]">
            {[
              { num: "01", title: "On arrive à l'heure. Point final.",    body: "Votre temps est précieux. Chaque retard vous coûte en stress, en argent, en organisation. Depuis 5 ans, la ponctualité n'est pas une option pour nous." },
              { num: "02", title: "Votre facture ressemble à votre devis.", body: "Pas de frais « découverts en route ». On calcule tout à l'avance, on vous explique, et on s'y tient. C'est aussi simple que ça." },
              { num: "03", title: "On prend le temps de bien faire.",     body: "Piano au 4ᵉ sans ascenseur? Gros meuble serré? On n'a pas tout vu, mais on ne se précipite pas. Chaque déménagement, on le prépare comme si c'était le nôtre." },
              { num: "04", title: "Joignables quand ça compte.",            body: "Pas de boîte vocale sans fin. Un vrai humain au (514) 839-0212. On vous rappelle vite, même en soirée ou le week-end si c'est urgent." },
            ].map((item, i) => (
              <Reveal
                key={i}
                delay={i * 0.05}
                distance={8}
                className="bg-white p-10 lg:p-12 group hover:bg-[#2B4FCB] transition-colors duration-300"
              >
                <p className="text-[11px] font-bold text-[#E84B1B] uppercase tracking-widest mb-4">{item.num}</p>
                <h3 className="font-bold text-[#111] group-hover:text-white mb-4 transition-colors" style={{ fontSize: "clamp(17px, 1.8vw, 22px)" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-[#555] group-hover:text-white/70 leading-relaxed transition-colors">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vague gris → bleu + CTA ───────────────────────────────────────── */}
      <WaveUp />

      <section className="bg-[#2B4FCB] pt-12 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <Reveal className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E84B1B] mb-3">Sans engagement</p>
              <h2 className="font-bold text-white" style={{ fontSize: "clamp(26px, 3.5vw, 40px)", letterSpacing: "-0.025em" }}>
                Prêt à déménager?
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
            <a
              href="tel:5148390212"
              className="inline-flex items-center gap-2 bg-[#E84B1B] text-white px-7 py-4 rounded-full font-bold text-sm hover:bg-[#d04016] transition-colors"
            >
              <Phone className="w-4 h-4" />
              (514) 839-0212
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-4 rounded-full font-bold text-sm hover:bg-white/10 transition-colors"
            >
              Formulaire en ligne
            </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
