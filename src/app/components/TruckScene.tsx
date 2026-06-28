import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import truckImg from "../../imports/truck.png";
import houseImg from "../../imports/house.png";

const ORANGE = "#E84B1B";
const BLUE   = "#2B4FCB";

// Couleurs cartonnage
const BOX_BODY  = "#D4A870";
const BOX_DARK  = "#B8894A";
const BOX_MID   = "#C89A5A";
const BOX_TAPE  = "#E8C87E";

// ── Maison PNG ────────────────────────────────────────────────────────────────
function House({ flip = false }: { flip?: boolean }) {
  return (
    <img
      src={houseImg}
      alt=""
      className="w-[150px] sm:w-[210px] lg:w-[270px] h-auto"
      style={{
        display: "block",
        flexShrink: 0,
        transform: flip ? "scaleX(-1)" : undefined,
        marginBottom: "-18px",
      }}
    />
  );
}

// ── Carton (beige cartonnage) ─────────────────────────────────────────────────
function Box({ s = 30 }: { s?: number }) {
  return (
    <svg
      viewBox="0 0 36 32"
      fill="none"
      style={{ width: s, height: s * 0.89, display: "block", flexShrink: 0 }}
    >
      {/* Corps */}
      <rect x="0.5" y="9.5" width="35" height="22" rx="1.5" fill={BOX_BODY} />
      {/* Rabat gauche (dessus) */}
      <path d="M0.5,9.5 L18,9.5 L16.5,1 L0.5,1 Z" fill={BOX_DARK} />
      {/* Rabat droit (dessus) */}
      <path d="M18,9.5 L35.5,9.5 L35.5,1 L19.5,1 Z" fill={BOX_MID} />
      {/* Jointure du dessus */}
      <line x1="18" y1="1" x2="18" y2="9.5" stroke={BOX_DARK} strokeWidth="0.8" />
      {/* Bande adhésive */}
      <rect x="14.5" y="0" width="7" height="32" fill={BOX_TAPE} fillOpacity="0.6" />
      {/* Pli horizontal */}
      <line x1="0.5" y1="19" x2="35.5" y2="19" stroke={BOX_DARK} strokeWidth="0.6" opacity="0.4" />
      {/* Contour */}
      <rect x="0.5" y="9.5" width="35" height="22" rx="1.5" stroke={BOX_DARK} strokeWidth="0.8" fill="none" />
    </svg>
  );
}


// ── Collines lointaines ───────────────────────────────────────────────────────
// width="150%" évite que le bord droit soit visible en fin de parallaxe
function Hills() {
  return (
    <svg viewBox="0 0 2160 100" fill="none" preserveAspectRatio="none"
      style={{ width: "150%", height: "100%", display: "block" }}>
      <path
        d="M0,72 Q180,18 360,54 Q540,90 720,28 Q900,-10 1080,48
           Q1260,100 1440,68 Q1620,30 1800,52 Q1980,86 2160,58
           L2160,100 L0,100 Z"
        fill="#f3f3f3"
      />
    </svg>
  );
}

// ── Silhouette urbaine ────────────────────────────────────────────────────────
// width="170%" évite que le bord droit soit visible en fin de parallaxe
function CityLine() {
  const bldgs: [number, number, number][] = [
    [0,28,62],[32,18,44],[54,36,94],[94,16,48],[114,44,78],
    [162,24,118],[190,38,68],[232,16,52],[252,56,88],[312,28,138],
    [344,34,72],[382,44,98],[430,18,58],[452,50,124],[506,24,86],
    [534,38,62],[576,30,108],[610,22,48],[636,56,92],[696,26,76],
    [726,34,115],[764,18,52],[786,46,88],[836,26,130],[866,22,60],
    // continuation pour couvrir jusqu'à 170 % de viewport
    [920,30,74],[958,22,50],[982,42,96],[1030,18,60],[1054,48,110],
    [1108,26,80],[1138,36,130],[1180,20,52],[1204,54,90],[1264,28,70],
  ];
  return (
    <svg viewBox="0 0 1440 145" fill="none" preserveAspectRatio="none"
      style={{ width: "170%", height: "100%", display: "block" }}>
      {bldgs.map(([x, w, h], i) => (
        <rect key={i} x={x} y={145 - h} width={w} height={h} fill="#ebebeb" rx="1" />
      ))}
    </svg>
  );
}

// ── Nuage ─────────────────────────────────────────────────────────────────────
function CloudSvg({ w = 120, opacity = 0.5 }: { w?: number; opacity?: number }) {
  return (
    <svg viewBox="0 0 200 80" fill="none" style={{ width: w, display: "block", opacity }}>
      <ellipse cx="100" cy="58" rx="94" ry="26" fill="#f0f0f0" />
      <ellipse cx="72"  cy="46" rx="50" ry="34" fill="#f0f0f0" />
      <ellipse cx="128" cy="42" rx="55" ry="36" fill="#f0f0f0" />
      <ellipse cx="100" cy="32" rx="38" ry="28" fill="#f4f4f4" />
    </svg>
  );
}

// ── Oiseau ────────────────────────────────────────────────────────────────────
function BirdSvg({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 22 10" fill="none" style={{ width: size, display: "block" }}>
      <path d="M0,5 Q5.5,0 11,5 Q16.5,0 22,5" stroke="#d4d4d4" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// ── Scène principale ──────────────────────────────────────────────────────────
export function TruckScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 18,
    mass: 0.2,
    restDelta: 0.001,
  });

  // Scène départ : part assez à gauche pour ne jamais chevaucher le camion centré
  const depX       = useTransform(smooth, [0, 1], ["5vw",   "-44vw"]);
  // Scène arrivée : entre depuis la droite, s'arrête juste à droite du camion
  const arrX       = useTransform(smooth, [0, 1], ["112vw", "72vw"]);
  const hillX      = useTransform(smooth, [0, 1], ["0vw",   "-12vw"]);
  const cityX      = useTransform(smooth, [0, 1], ["0vw",   "-28vw"]);
  const cloud1X    = useTransform(smooth, [0, 1], ["8vw",   "-30vw"]);
  const cloud2X    = useTransform(smooth, [0, 1], ["45vw",  "-10vw"]);
  const cloud3X    = useTransform(smooth, [0, 1], ["-4vw",  "-50vw"]);
  const dashX      = useTransform(smooth, [0, 1], ["0%",    "-55%"]);
  const warmO      = useTransform(smooth, [0, 0.28, 0.55],  [0.06, 0.03, 0]);
  const coolO      = useTransform(smooth, [0.45, 0.72, 1],  [0, 0.03, 0.06]);

  // ── Soleil : arc de gauche à droite avec légère courbe ──
  const sunX       = useTransform(smooth, [0, 1], ["6vw",  "88vw"]);
  const sunY       = useTransform(smooth, [0, 0.5, 1], ["20%", "10%", "20%"]);
  const sunO       = useTransform(smooth, [0, 0.07, 0.93, 1], [0, 1, 1, 0]);

  // ── Lignes de vitesse (phase de transit) ──
  const speedO     = useTransform(smooth, [0.28, 0.40, 0.60, 0.72], [0, 1, 1, 0]);

  // ── Barre de progression du trajet ──
  const journeyW   = useTransform(smooth, [0, 1], ["0%", "100%"]);
  // Scène départ : fade complet avant que la maison atteigne le camion
  const depSceneO  = useTransform(smooth, [0, 0.06, 0.20, 0.28], [0, 1, 1, 0]);
  const depBoxO    = useTransform(smooth, [0, 0.06, 0.16, 0.22], [1, 1, 0.4, 0]);
  // Scène arrivée : fade in
  const arrSceneO  = useTransform(smooth, [0.60, 0.74, 1], [0, 1, 1]);
  const arrBoxO    = useTransform(smooth, [0.70, 0.84, 1], [0, 1, 1]);
  const t1O = useTransform(smooth, [0, 0.10, 0.28, 0.38], [0, 1, 1, 0]);
  const t1Y = useTransform(smooth, [0, 0.10, 0.28, 0.38], [12, 0, 0, -12]);
  const t2O = useTransform(smooth, [0.38, 0.47, 0.60, 0.70], [0, 1, 1, 0]);
  const t2Y = useTransform(smooth, [0.38, 0.47, 0.60, 0.70], [12, 0, 0, -12]);
  const t3O = useTransform(smooth, [0.70, 0.78, 0.92, 1], [0, 1, 1, 0]);
  const t3Y = useTransform(smooth, [0.70, 0.78, 0.92, 1], [12, 0, 0, -12]);
  const tOs    = [t1O, t2O, t3O];
  const tYs    = [t1Y, t2Y, t3Y];
  const sceneO = useTransform(smooth, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const indH   = useTransform(smooth, [0, 1], ["0%", "100%"]);

  const PHASES = [
    { num: "01", title: "On charge",   sub: "Emballage professionnel, prise en charge complète" },
    { num: "02", title: "On livre",    sub: "Ponctuel et assuré à travers Montréal" },
    { num: "03", title: "On installe", sub: "Livraison dans votre nouveau chez-vous" },
  ];

  const BIRDS = [
    { delay: 0,  top: "11%", duration: 17, size: 14 },
    { delay: 6,  top: "7%",  duration: 22, size: 18 },
    { delay: 11, top: "17%", duration: 15, size: 12 },
    { delay: 16, top: "13%", duration: 20, size: 16 },
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-[480vh]"
      aria-label="Notre processus de déménagement"
    >
      <motion.div
        className="sticky top-0 h-screen overflow-hidden bg-white"
        style={{ opacity: sceneO }}
      >
        {/* Ambiance chromatique */}
        <motion.div className="absolute inset-0 pointer-events-none" style={{
          opacity: warmO, zIndex: 1,
          background: "radial-gradient(ellipse 110% 80% at 14% 38%, #E84B1B, transparent)",
        }} />
        <motion.div className="absolute inset-0 pointer-events-none" style={{
          opacity: coolO, zIndex: 1,
          background: "radial-gradient(ellipse 110% 80% at 86% 38%, #2B4FCB, transparent)",
        }} />

        {/* Fondu bords */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white to-transparent z-40 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent z-40 pointer-events-none" />

        {/* ── Soleil (arc scroll-driven gauche → droite) ── */}
        <motion.div
          className="absolute pointer-events-none"
          style={{ x: sunX, top: sunY, opacity: sunO, zIndex: 4 }}
        >
          <svg viewBox="0 0 48 48" fill="none" style={{ width: 48, display: "block" }}>
            {/* Halo */}
            <circle cx="24" cy="24" r="22" fill="#FEB84A" fillOpacity="0.12" />
            {/* Rayons */}
            {[0,45,90,135,180,225,270,315].map((a, i) => {
              const r = a * Math.PI / 180;
              return <line key={i}
                x1={24 + 15*Math.cos(r)} y1={24 + 15*Math.sin(r)}
                x2={24 + 21*Math.cos(r)} y2={24 + 21*Math.sin(r)}
                stroke="#FEB84A" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />;
            })}
            {/* Corps */}
            <circle cx="24" cy="24" r="10" fill="#FEB84A" fillOpacity="0.9" />
            <circle cx="24" cy="24" r="7"  fill="#FFCF5C" />
          </svg>
        </motion.div>

        {/* Nuages */}
        <motion.div className="absolute pointer-events-none" style={{ x: cloud1X, top: "7%",  left: 0, zIndex: 4 }}><CloudSvg w={160} opacity={0.52} /></motion.div>
        <motion.div className="absolute pointer-events-none" style={{ x: cloud2X, top: "4%",  left: 0, zIndex: 4 }}><CloudSvg w={110} opacity={0.42} /></motion.div>
        <motion.div className="absolute pointer-events-none" style={{ x: cloud3X, top: "14%", left: 0, zIndex: 4 }}><CloudSvg w={135} opacity={0.48} /></motion.div>

        {/* ── Lignes de vitesse (transit) ── */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ opacity: speedO, zIndex: 5 }}
        >
          {[12, 22, 34, 44, 56].map((pct, i) => (
            <motion.div
              key={i}
              className="absolute h-px"
              style={{
                top: `${pct}%`,
                left: 0,
                right: 0,
                background: `linear-gradient(to right, transparent 0%, rgba(180,180,180,${0.18 - i * 0.02}) 40%, transparent 100%)`,
              }}
              animate={{ x: ["0%", "-40%"] }}
              transition={{ repeat: Infinity, duration: 0.18 + i * 0.04, ease: "linear" }}
            />
          ))}
        </motion.div>

        {/* Oiseaux */}
        {BIRDS.map((b, i) => (
          <motion.div key={i} className="absolute pointer-events-none"
            style={{ top: b.top, left: "-5%", zIndex: 5 }}
            animate={{ x: ["0vw", "120vw"] }}
            transition={{ repeat: Infinity, duration: b.duration, ease: "linear", delay: b.delay }}
          >
            <BirdSvg size={b.size} />
          </motion.div>
        ))}

        {/* Collines */}
        <motion.div className="absolute pointer-events-none"
          style={{ x: hillX, bottom: "30%", left: 0, right: 0, height: "22%", zIndex: 2 }}>
          <Hills />
        </motion.div>

        {/* Ville */}
        <motion.div className="absolute pointer-events-none"
          style={{ x: cityX, bottom: "30%", left: 0, right: 0, height: "18%", zIndex: 3 }}>
          <CityLine />
        </motion.div>

        {/* Route */}
        <div className="absolute inset-x-0 bottom-0 bg-[#f1f1f1]" style={{ height: "30%", zIndex: 6 }}>
          <div className="absolute top-0 inset-x-0 h-[2px] bg-[#e0e0e0]" />
          <motion.div className="absolute flex items-center"
            style={{ x: dashX, top: "42%", left: 0, width: "220%", gap: 32 }}>
            {Array.from({ length: 70 }).map((_, i) => (
              <div key={i} className="flex-shrink-0 rounded-full bg-white" style={{ width: 38, height: 5, opacity: 0.85 }} />
            ))}
          </motion.div>
        </div>

        {/* Scène départ — zIndex 6, derrière le camion (7)
            depSceneO fait disparaître toute la scène avant qu'elle atteigne le camion */}
        <motion.div className="absolute bottom-[30%] flex items-end gap-2 pointer-events-none"
          style={{ x: depX, left: 0, zIndex: 6, opacity: depSceneO }}>
          <House />
          <motion.div className="flex items-end gap-1.5 pb-1" style={{ opacity: depBoxO }}>
            <Box s={28} /><Box s={40} /><Box s={24} />
          </motion.div>
        </motion.div>

        {/* Scène arrivée — zIndex 6, derrière le camion (7) */}
        <motion.div className="absolute bottom-[30%] flex items-end gap-2 pointer-events-none"
          style={{ x: arrX, left: 0, zIndex: 6, opacity: arrSceneO }}>
          <motion.div className="flex items-end gap-1.5 pb-1" style={{ opacity: arrBoxO }}>
            <Box s={24} /><Box s={40} /><Box s={28} />
          </motion.div>
          <House flip />
        </motion.div>

        {/* Camion (centré, fixe — la caméra le suit)
            marginBottom compense l'espace blanc bas du PNG Adobe Express */}
        <div className="absolute" style={{
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "28%",
          zIndex: 7,
        }}>
          <motion.div
            className="relative"
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
            style={{ marginBottom: "-52px" }}
          >
            <img
              src={truckImg}
              alt="Navire Express"
              className="w-[240px] sm:w-[340px] lg:w-[480px] h-auto"
              style={{ display: "block" }}
            />
          </motion.div>
        </div>

        {/* Textes phases */}
        <div className="absolute top-0 inset-x-0 flex items-center justify-center pointer-events-none select-none"
          style={{ height: "44%", zIndex: 25 }}>
          {PHASES.map((p, i) => (
            <motion.div key={i} className="absolute text-center w-full px-6"
              style={{ opacity: tOs[i], y: tYs[i] }}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E84B1B] mb-4">{p.num}</p>
              <p className="font-bold text-[#111] leading-tight"
                style={{ fontSize: "clamp(32px, 5.5vw, 66px)", letterSpacing: "-0.036em" }}>
                {p.title}
              </p>
              <p className="text-[#bbb] mt-3 max-w-xs mx-auto"
                style={{ fontSize: "clamp(13px, 1.4vw, 16px)" }}>
                {p.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Barre de trajet Départ → Arrivée ── */}
        <div
          className="absolute pointer-events-none select-none"
          style={{ bottom: 28, left: "50%", transform: "translateX(-50%)", width: "min(320px, 80vw)", zIndex: 35 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] uppercase tracking-[0.28em] text-[#bbb]">Départ</span>
            <span className="text-[9px] uppercase tracking-[0.28em] text-[#bbb]">Arrivée</span>
          </div>
          <div className="relative h-px bg-[#e4e4e4]">
            <motion.div
              className="absolute left-0 top-0 h-full bg-[#E84B1B]"
              style={{ width: journeyW }}
            />
            {/* Camion curseur */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2"
              style={{ left: journeyW, x: "-50%" }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#E84B1B] border-2 border-white shadow-sm" />
            </motion.div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
