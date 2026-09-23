"use client";

import { useRef } from "react";
import { Award, UserCheck, Scale, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function InstitutionalPillars() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Linha conectora Lilás Lavanda superior que se desenha ao entrar na tela
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // Revelação em cascata dos 4 pilares institucionais
      const pillarItems = gridRef.current?.querySelectorAll(".pillar-item");
      if (pillarItems && pillarItems.length > 0) {
        gsap.fromTo(
          pillarItems,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 88%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        // Contador numérico dinâmico ativado pelo scroll
        const counters = gridRef.current ? gridRef.current.querySelectorAll(".metric-counter") : [];
        counters.forEach((el) => {
          const targetValue = parseFloat(el.getAttribute("data-target") || "0");
          const prefix = el.getAttribute("data-prefix") || "";
          const suffix = el.getAttribute("data-suffix") || "";
          const isDecimal = el.getAttribute("data-decimal") === "true";

          const counterObj = { val: 0 };
          gsap.to(counterObj, {
            val: targetValue,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 88%",
              once: true,
            },
            onUpdate: () => {
              const formatted = isDecimal ? counterObj.val.toFixed(1) : Math.round(counterObj.val).toString();
              el.textContent = `${prefix}${formatted}${suffix}`;
            },
          });
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="pilares"
      ref={sectionRef}
      className="w-full border-b border-[var(--border-subtle)]/30 bg-[var(--bg-secondary)]/50 py-10 sm:py-14 relative shadow-2xs overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/25 mb-8 text-[var(--text-muted)]">
          {/* Linha Lilás Lavanda desenhada pelo scroll */}
          <div
            ref={lineRef}
            className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#A56FA8] via-[#C897CE] to-transparent will-change-transform"
          />
          <div className="flex items-center gap-2.5">
            <Scale className="w-4 h-4 text-[#A56FA8]" />
            <span className="font-heading uppercase text-xs tracking-widest font-bold text-[var(--text-main)]">
              Pilares Institucionais de Atuação
            </span>
          </div>
          <span className="font-heading text-xs tracking-wider text-[var(--text-muted)] hidden sm:inline">
            Curitiba - PR • Bairro Alto • Atendimento Presencial e Online
          </span>
        </div>

        {/* Grade com os 4 Pilares */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-subtle)]/30"
        >
          {/* 1. Solidez & Prática Forense */}
          <div className="pillar-item flex flex-col items-start px-0 sm:px-6 pt-6 sm:pt-0 first:pt-0 will-change-transform">
            <div className="flex items-center gap-2 mb-2 text-[#A56FA8]">
              <Award className="w-5 h-5 text-[#A56FA8]" />
              <span
                className="metric-counter font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
                data-target="9"
                data-prefix="+"
                data-suffix=" Anos"
              >
                +9 Anos
              </span>
            </div>
            <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
              Prática Jurídica Sólida
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Atuação jurídica contínua e estratégica, com sólida experiência em bancas corporativas e sede própria desde 2020.
            </p>
          </div>

          {/* 2. Acolhimento Antes de Tudo */}
          <div className="pillar-item flex flex-col items-start px-0 sm:px-6 pt-6 sm:pt-0 will-change-transform">
            <div className="flex items-center gap-2 mb-2 text-[#A56FA8]">
              <UserCheck className="w-5 h-5 text-[#A56FA8]" />
              <span
                className="metric-counter font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
                data-target="100"
                data-prefix=""
                data-suffix="%"
              >
                100%
              </span>
            </div>
            <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
              Acolhimento & Escuta Ativa
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Atendimento pessoal direto com a Dra. Aline. Sem intermediários, com empatia real e total sigilo em cada orientação.
            </p>
          </div>

          {/* 3. Resoluções Pacíficas & Ágeis */}
          <div className="pillar-item flex flex-col items-start px-0 sm:px-6 pt-6 sm:pt-0 will-change-transform">
            <div className="flex items-center gap-2 mb-2 text-[#A56FA8]">
              <Scale className="w-5 h-5 text-[#A56FA8]" />
              <span className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]">
                Pacificação
              </span>
            </div>
            <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
              Resoluções Práticas
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Priorizamos acordos rápidos e inteligentes que evitam desgastes emocionais e financeiros desnecessários.
            </p>
          </div>

          {/* 4. Confiança Comprovada */}
          <div className="pillar-item flex flex-col items-start px-0 sm:px-6 pt-6 sm:pt-0 will-change-transform">
            <div className="flex items-center gap-2 mb-2 text-[#A56FA8]">
              <ShieldCheck className="w-5 h-5 text-[#A56FA8]" />
              <span
                className="metric-counter font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
                data-target="5.0"
                data-prefix=""
                data-suffix=" ★"
                data-decimal="true"
              >
                5.0 ★
              </span>
            </div>
            <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
              Confiança Comprovada
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Avaliação máxima e depoimentos públicos no Google Reviews pelo atendimento competente, dedicado e humanizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}