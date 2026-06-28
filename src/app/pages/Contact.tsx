import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Instagram, Globe } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { PageHero } from "../components/PageHero";
import contactHeroImg from "../../imports/contact.png";

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

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  const inputClass =
    "w-full px-4 py-4 rounded-xl border border-[#e8e8e8] bg-white text-[#111] text-sm placeholder-[#bbb] focus:outline-none focus:border-[#2B4FCB] focus:ring-2 focus:ring-[#2B4FCB]/10 transition-all";

  const labelClass = "block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#888] mb-2";

  return (
    <div>

      <PageHero
        label="Nous joindre"
        title={
          <>
            Parlons de votre
            <br />
            déménagement.
          </>
        }
        description="Estimation gratuite, réponse rapide. Un vrai humain vous rappelle, pas un bot."
        image={contactHeroImg}
        imageAlt="Service à la clientèle Navire Express"
      />

      <PillSep label="Nous joindre" />

      {/* ── Contact info strip ── */}
      <section className="py-12 bg-[#f8f8f8] border-b border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Phone, label: "Téléphone", value: "(514) 839-0212", link: "tel:5148390212", accent: "#E84B1B", accentBg: "#fff1ec" },
              { icon: Mail, label: "Email", value: "Nikolayivanov1704@gmail.com", link: "mailto:Nikolayivanov1704@gmail.com", accent: "#2B4FCB", accentBg: "#eef2ff" },
              { icon: Globe, label: "Site web", value: "NavireExpress.com", link: "https://NavireExpress.com", accent: "#2B4FCB", accentBg: "#eef2ff" },
              { icon: Clock, label: "Disponibilité", value: "7 jours sur 7", link: undefined, accent: "#E84B1B", accentBg: "#fff1ec" },
            ].map((item, i) => (
              <Reveal
                key={i}
                delay={i * 0.05}
                className="bg-white rounded-2xl border border-[#e8e8e8] p-6 hover:shadow-md hover:border-transparent transition-all group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: item.accentBg }}
                >
                  <item.icon className="w-4 h-4" style={{ color: item.accent }} />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#888] mb-1.5">{item.label}</p>
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#111] hover:underline transition-colors break-all leading-snug block"
                    style={{ color: "#111" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = item.accent)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#111")}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-[#111] leading-snug">{item.value}</p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + sidebar ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">

            {/* ── Form ── */}
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E84B1B] mb-4">Devis gratuit</p>
              <h2
                className="font-bold text-[#111] mb-10 leading-tight"
                style={{ fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.025em" }}
              >
                Envoyez-nous<br />un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Nom *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Votre nom complet"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Téléphone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(514) XXX-XXXX"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Adresse courriel *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Type de service</label>
                  <div className="relative">
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none pr-10`}
                    >
                      <option value="">Sélectionnez un service</option>
                      <option>Déménagement résidentiel</option>
                      <option>Déménagement commercial</option>
                      <option>Service d'emballage</option>
                      <option>Location de main-d'œuvre</option>
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                        <path d="M1 1l5 5 5-5" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet : adresses, date souhaitée, particularités..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#E84B1B] text-white px-7 py-4 rounded-full font-semibold text-sm hover:bg-[#d04016] transition-all hover:shadow-lg hover:shadow-[#E84B1B]/25 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    Envoyer le message
                  </button>
                  <p className="text-xs text-[#bbb]">Réponse garantie sous 24h</p>
                </div>

                {sent && (
                  <div className="p-5 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm flex items-center gap-3">
                    <span className="text-lg">✅</span>
                    <div>
                      <p className="font-semibold">Message envoyé!</p>
                      <p className="text-green-700/70 text-xs mt-0.5">On vous revient dans les 24 prochaines heures.</p>
                    </div>
                  </div>
                )}
              </form>
            </Reveal>

            {/* ── Sidebar ── */}
            <Reveal delay={0.08} className="space-y-5">
              {/* Call card — bolder */}
              <div className="bg-[#2B4FCB] rounded-2xl p-8 text-white relative overflow-hidden">
                {/* Decorative circle */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#E84B1B]/20" />
                <div className="relative">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E84B1B] block mb-3">
                    Appel direct
                  </span>
                  <h3
                    className="font-bold text-white mb-5 leading-tight"
                    style={{ fontSize: "clamp(20px, 2vw, 26px)", letterSpacing: "-0.02em" }}
                  >
                    On répond<br />vraiment.
                  </h3>
                  <a
                    href="tel:5148390212"
                    className="font-black text-white hover:text-[#ffd0c0] transition-colors block leading-none mb-2"
                    style={{ fontSize: "clamp(24px, 2.8vw, 34px)", letterSpacing: "-0.03em" }}
                  >
                    (514) 839-0212
                  </a>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                    <p className="text-white/60 text-xs">Réponse sous 24h</p>
                  </div>
                </div>
              </div>

              {/* Online presence card */}
              <div className="bg-white rounded-2xl border border-[#e8e8e8] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#888] mb-5">Présence en ligne</p>
                <div className="space-y-4">
                  <a
                    href="https://instagram.com/Navire_Expres"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-[#444] hover:text-[#E84B1B] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#f7f7f7] group-hover:bg-[#fff1ec] flex items-center justify-center transition-colors flex-shrink-0 border border-[#f0f0f0]">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-[13px]">@Navire_Expres</div>
                      <div className="text-[11px] text-[#aaa]">Instagram</div>
                    </div>
                  </a>
                  <a
                    href="https://NavireExpress.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-[#444] hover:text-[#2B4FCB] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#f7f7f7] group-hover:bg-[#eef2ff] flex items-center justify-center transition-colors flex-shrink-0 border border-[#f0f0f0]">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-[13px]">NavireExpress.com</div>
                      <div className="text-[11px] text-[#aaa]">Site officiel</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-sm text-[#444]">
                    <div className="w-9 h-9 rounded-xl bg-[#f7f7f7] flex items-center justify-center flex-shrink-0 border border-[#f0f0f0]">
                      <MapPin className="w-4 h-4 text-[#888]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[13px]">Montréal & environs</div>
                      <div className="text-[11px] text-[#aaa]">Zone de service</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick FAQs */}
              <div className="space-y-3">
                {[
                  { q: "Délai de réponse?", a: "Généralement dans la journée." },
                  { q: "L'estimation est gratuite?", a: "Oui, sans engagement." },
                  { q: "Vous êtes assurés?", a: "Couverture complète incluse." },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl border border-[#e8e8e8] p-5 hover:border-[#2B4FCB]/20 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E84B1B] flex-shrink-0 mt-2" />
                      <div>
                        <p className="text-sm font-semibold text-[#111] mb-0.5">{item.q}</p>
                        <p className="text-sm text-[#666]">{item.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
