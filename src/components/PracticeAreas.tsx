"use client";

import { useState, useRef } from "react";
import { PRACTICE_AREAS, OFFICE_INFO } from "@/lib/data";
import { CheckCircle2, ArrowUpRight, Scale, HeartHandshake, ShieldAlert, Award, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function PracticeAreas() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Estado para acordeão no modelo Mobile
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);

  const toggleMobileExpand = (id: string) => {
    setExpandedMobileId((prev) => (prev === id ? null : id));
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  };

  useGSAP(
    () => {
      // 1. Animação do cabeçalho
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. Animação em cascata dos cards
      const cards = gridRef.current?.querySelectorAll(".practice-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const getAreaIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5" />;
      case "Scale":
        return <Scale className="w-5 h-5" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5" />;
      case "Award":
        return <Award className="w-5 h-5" />;
      default:
        return <Scale className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="atuacao"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-secondary)]/40 editorial-border-b w-full relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[#C897CE]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[#A56FA8] font-bold">
                02 / Especialidades Jurídicas
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-semibold">
              Áreas de Atuação
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Atuação técnica individualizada, estratégica e acolhedora para proteger seu patrimônio, sua família e sua liberdade.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MODELO DESKTOP (MD+): GRADE 2x2 ELEGANTE COM CARDS COMPLETOS             */}
        {/* ========================================================================= */}
        <div ref={gridRef} className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
          {PRACTICE_AREAS.map((area, idx) => (
            <div
              key={area.id}
              className="practice-card h-full p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-sm hover:border-[#C897CE] hover:shadow-lg flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-2xl font-bold text-[#A56FA8]">
                    0{idx + 1}.
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[#A56FA8] group-hover:bg-[#C897CE] group-hover:text-white transition-colors duration-300 shadow-2xs">
                    {getAreaIcon(area.iconName)}
                  </div>
                </div>

                <span className="font-heading text-xs uppercase tracking-wider text-[#A56FA8] font-semibold block mb-1">
                  Especialidade Prática
                </span>

                <h3 className="font-heading text-2xl font-bold text-[var(--text-main)] mb-3 leading-snug">
                  {area.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-5">
                  {area.casesSummary}
                </p>

                <div className="space-y-2 pt-4 border-t border-[var(--border-subtle)]/20">
                  {area.coverageList.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[var(--text-main)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C897CE] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--border-subtle)]/25 flex items-center justify-between">
                <a
                  href={`https://wa.me/5541984940372?text=Ol%C3%A1%2C%20Dra.%20Aline.%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20${encodeURIComponent(area.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[#A56FA8] hover:text-[var(--text-main)] transition-colors group/link cursor-pointer"
                >
                  <span>Consultar sobre este tema</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* MODELO MOBILE (< MD): ACORDEÕES RESUMIDOS SEM CORTAR INFORMAÇÕES          */}
        {/* ========================================================================= */}
        <div className="block md:hidden space-y-3">
          {PRACTICE_AREAS.map((area, idx) => {
            const isExpanded = expandedMobileId === area.id;

            return (
              <div
                key={area.id}
                className={`rounded-2xl border transition-all duration-300 bg-[var(--bg-card)] overflow-hidden ${
                  isExpanded ? "border-[#C897CE] shadow-md" : "border-[var(--border-subtle)]/35 shadow-2xs"
                }`}
              >
                {/* Linha Resumida Clicável */}
                <button
                  type="button"
                  onClick={() => toggleMobileExpand(area.id)}
                  className="w-full p-4 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3 pr-2">
                    <span className="font-heading text-lg font-bold text-[#A56FA8]">
                      0{idx + 1}.
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold text-[var(--text-main)] leading-snug">
                        {area.title}
                      </h3>
                      <p className="text-[0.6875rem] text-[var(--text-muted)] font-body line-clamp-1 mt-0.5">
                        {area.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center flex-shrink-0 text-[#A56FA8]">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? "rotate-180 text-[#C897CE]" : "rotate-0"
                      }`}
                    />
                  </div>
                </button>

                {/* Conteúdo Expansível com Detalhes */}
                {isExpanded && (
                  <div className="px-4 pb-5 pt-1 border-t border-[var(--border-subtle)]/20 animate-fade-in-down">
                    <p className="text-xs text-[var(--text-muted)] font-body leading-relaxed mb-4">
                      {area.casesSummary}
                    </p>

                    <div className="space-y-2 mb-5">
                      {area.coverageList.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs font-body text-[var(--text-main)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C897CE] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={`https://wa.me/5541984940372?text=Ol%C3%A1%2C%20Dra.%20Aline.%20Gostaria%20de%20orienta%C3%A7%C3%A3o%20sobre%20${encodeURIComponent(area.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill bg-[#C897CE] text-white w-full py-2.5 text-xs font-semibold shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Falar no WhatsApp sobre {area.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}