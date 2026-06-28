import { Outlet, Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { Phone, Menu, X, Instagram, Globe } from "lucide-react";
import logoImg from "../../imports/logo.png";

const NAV_LINKS = [
  { path: "/", label: "Accueil" },
  { path: "/services", label: "Services" },
  { path: "/about", label: "À Propos" },
  { path: "/testimonials", label: "Témoignages" },
  { path: "/contact", label: "Contact" },
];

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

export function Layout() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Navbar ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid #e8e8e8" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between" style={{ height: 72 }}>

          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center gap-2.5 group flex-shrink-0">
            <img
              src={logoImg}
              alt="Navire Express"
              className="w-10 h-10 object-contain"
            />
            <div className="hidden sm:block leading-none">
              <div className="text-[15px] font-bold text-[#111] tracking-tight">Navire Express</div>
              <div className="text-[11px] text-[#999] mt-0.5 tracking-wide">Déménagement · Montréal</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={scrollToTop}
                className={`relative text-[13px] pb-0.5 transition-colors ${
                  isActive(link.path)
                    ? "text-[#E84B1B] font-semibold"
                    : "text-[#444] hover:text-[#111]"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[#E84B1B]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="tel:5148390212"
              className="hidden md:flex items-center gap-2 bg-[#E84B1B] text-white px-5 py-2.5 rounded-full text-[13px] font-semibold hover:bg-[#d04016] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              (514) 839-0212
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-[#333] hover:text-[#E84B1B] transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white border-t border-[#e8e8e8]"
            >
              <nav className="px-5 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => {
                      scrollToTop();
                      setMenuOpen(false);
                    }}
                    className={`py-3 px-4 rounded-xl text-sm transition-colors ${
                      isActive(link.path)
                        ? "bg-[#fff1ec] text-[#E84B1B] font-semibold"
                        : "text-[#444] hover:bg-[#f7f7f7]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="tel:5148390212"
                  className="mt-3 flex items-center justify-center gap-2 bg-[#E84B1B] text-white px-5 py-3.5 rounded-full text-sm font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  (514) 839-0212
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Content ── */}
      <main className="flex-1 pt-[72px]">
        <Outlet />
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-[#e8e8e8] bg-white mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 mb-4">
                <img src={logoImg} alt="Navire Express" className="w-10 h-10 object-contain" />
                <span className="font-bold text-[#111] text-[15px]">Navire Express</span>
              </Link>
              <p className="text-sm text-[#666] leading-relaxed">
                Service professionnel de déménagement à Montréal. Résidentiel, commercial, emballage. Depuis 2020.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#999] mb-4">Navigation</p>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} onClick={scrollToTop} className="text-sm text-[#444] hover:text-[#E84B1B] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#999] mb-4">Nous joindre</p>
              <ul className="space-y-3">
                <li>
                  <a href="tel:5148390212" className="text-sm text-[#444] hover:text-[#E84B1B] transition-colors flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                    (514) 839-0212
                  </a>
                </li>
                <li>
                  <a href="mailto:Nikolayivanov1704@gmail.com" className="text-sm text-[#444] hover:text-[#E84B1B] transition-colors break-all">
                    Nikolayivanov1704@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://NavireExpress.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#444] hover:text-[#E84B1B] transition-colors flex items-center gap-2"
                  >
                    <Globe className="w-3.5 h-3.5 flex-shrink-0" />
                    NavireExpress.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#999] mb-4">Suivez-nous</p>
              <a
                href="https://instagram.com/Navire_Expres"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-[#444] hover:text-[#E84B1B] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#f7f7f7] group-hover:bg-[#fff1ec] flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                @Navire_Expres
              </a>
              <p className="text-xs text-[#bbb] mt-3">Montréal, Québec</p>
            </div>
          </div>

          <div className="border-t border-[#e8e8e8] mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-[#bbb]">© {new Date().getFullYear()} Navire Express. Tous droits réservés.</p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/Navire_Expres" target="_blank" rel="noopener noreferrer" className="text-[#bbb] hover:text-[#E84B1B] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://NavireExpress.com" target="_blank" rel="noopener noreferrer" className="text-[#bbb] hover:text-[#E84B1B] transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
