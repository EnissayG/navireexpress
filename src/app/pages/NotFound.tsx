import { Link } from "react-router";
import { ArrowLeft, Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-lg">
        {/* Big 404 */}
        <div
          className="mb-6 select-none"
          style={{ fontSize: "clamp(100px, 20vw, 180px)", fontWeight: 900, letterSpacing: "-0.06em", lineHeight: 1, color: "#E84B1B", opacity: 0.12 }}
          aria-hidden
        >
          404
        </div>

        {/* Actual 404 label */}
        <div className="flex items-center justify-center gap-3 mb-6 -mt-4">
          <div className="w-6 h-px bg-[#E84B1B]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E84B1B]">Page introuvable</span>
          <div className="w-6 h-px bg-[#E84B1B]" />
        </div>

        <h1 className="text-4xl font-bold text-[#111] mb-4" style={{ letterSpacing: "-0.03em" }}>
          Cette page a déménagé<br />sans nous prévenir
        </h1>
        <p className="text-[#666] mb-10 leading-relaxed">
          La page que vous cherchez n'existe pas ou a été déplacée. Retournez à l'accueil pour continuer.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#E84B1B] text-white px-7 py-3.5 rounded-full font-medium hover:bg-[#d04016] transition-colors"
          >
            <Home className="w-4 h-4" />
            Accueil
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-[#444] border border-[#e0e0e0] px-7 py-3.5 rounded-full font-medium hover:border-[#2B4FCB] hover:text-[#2B4FCB] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-[#e8e8e8]">
          <p className="text-xs text-[#aaa] mb-3 uppercase tracking-widest">Pages disponibles</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { to: "/services", label: "Services" },
              { to: "/about", label: "À Propos" },
              { to: "/testimonials", label: "Témoignages" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-xs px-4 py-2 rounded-full border border-[#e8e8e8] text-[#444] hover:border-[#2B4FCB] hover:text-[#2B4FCB] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
