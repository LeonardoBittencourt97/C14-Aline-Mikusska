import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { OFFICE_INFO, LAWYER_PROFILE } from "@/lib/data";
import { MessageSquare, Globe, MapPin, ShieldCheck, ArrowUpRight, Scale, Briefcase, Award } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aline-mikusska-advocacia.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Canais Oficiais & Links | Aline Pacheco Mikusska Advocacia",
  description:
    "Acesse rapidamente o WhatsApp oficial da Dra. Aline Pacheco Mikusska, Instagram, localização no Bairro Alto em Curitiba/PR e website institucional.",
  alternates: {
    canonical: `${siteUrl}/links`,
  },
  openGraph: {
    title: "Canais Oficiais & Links | Aline Pacheco Mikusska Advocacia",
    description: "Atendimento acolhedor, ágil e estratégico em Família, Cível, Criminal e Previdenciário em Curitiba/PR.",
    url: `${siteUrl}/links`,
    images: [{ url: "/og-image_optimized_300.jpeg", width: 1200, height: 630 }],
  },
};

export default function LinksPage() {
  const quickLinks = [
    {
      id: "whatsapp",
      title: "Atendimento WhatsApp Direto",
      subtitle: "(41) 98494-0372 • Fale com a Dra. Aline Mikusska",
      href: OFFICE_INFO.whatsappUrl,
      icon: MessageSquare,
      highlight: true,
    },
    {
      id: "website",
      title: "Website Oficial Institucional",
      subtitle: "Conheça nossas áreas de atuação, sede e artigos",
      href: "/",
      icon: Globe,
      highlight: false,
    },
    {
      id: "instagram",
      title: "Instagram Oficial",
      subtitle: "@alinepachecomikusska • Conteúdo jurídico diário",
      href: OFFICE_INFO.instagramUrl,
      icon: InstagramIcon,
      highlight: false,
    },
    {
      id: "linkedin",
      title: "Conectar no LinkedIn",
      subtitle: "Perfil profissional da Dra. Aline Pacheco Mikusska",
      href: OFFICE_INFO.linkedinUrl,
      icon: LinkedinIcon,
      highlight: false,
    },
    {
      id: "maps",
      title: "Localização da Sede / GPS",
      subtitle: "R. José de Oliveira Franco, 708 - Bairro Alto, Curitiba/PR",
      href: "https://maps.google.com/?q=R.+Jos%C3%A9+de+Oliveira+Franco,+708+-+Bairro+Alto,+Curitiba+-+PR,+82820-110",
      icon: MapPin,
      highlight: false,
    },
  ];

  const specialties = [
    "Direito de Família",
    "Direito Cível & Contratos",
    "Direito Criminal & Custódia",
    "Direito Previdenciário (INSS)",
  ];

  return (
    <main className="min-h-[100dvh] lg:h-screen lg:max-h-screen lg:overflow-hidden w-screen max-w-full bg-[#FFFFFF] text-[#000000]">
      {/* ===================== VERSÃO DESKTOP (Split Screen 50/50 - Sem Scroll) ===================== */}
      <div className="hidden lg:grid lg:grid-cols-2 h-full w-full overflow-hidden">
        
        {/* LADO ESQUERDO: Fundo Escuro com Logo e Identidade Visual */}
        <div className="relative bg-[#1A1A1A] text-white flex flex-col justify-between p-8 xl:p-12 h-full overflow-hidden border-r border-[#8D359E]/30">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-links-desktop" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#8D359E" strokeWidth="0.75" />
                  <circle cx="0" cy="0" r="1.5" fill="#8D359E" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-links-desktop)" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8D359E]/40 bg-white/5 backdrop-blur-md text-xs font-heading tracking-wider text-[#D68CE8]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D68CE8]" />
              <span>Mais de 9 Anos de Prática Jurídica</span>
            </div>
            <span className="text-[0.6875rem] font-heading uppercase tracking-widest text-[#D68CE8]">
              Curitiba - PR
            </span>
          </div>

          <div className="relative z-10 my-auto py-4 flex flex-col items-center text-center w-full">
            <div className="relative w-full max-w-[340px] h-36 xl:h-40 mb-4">
              <Image
                src="/logo_sem_fundo_usarnomodoescuro.png"
                alt={OFFICE_INFO.name}
                fill
                priority
                className="object-contain drop-shadow-lg"
                sizes="(min-width: 1024px) 340px, 260px"
              />
            </div>

            <p className="text-sm xl:text-base text-gray-300 font-body max-w-md mx-auto leading-relaxed mt-2">
              {OFFICE_INFO.tagline}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-lg">
              {specialties.map((spec, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 font-body"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs text-gray-400 font-body pt-4 border-t border-white/10">
            <p>{OFFICE_INFO.addressShort}</p>
            <p className="text-[0.6875rem] text-[#D68CE8]">Provimento 205/2021 CFOAB</p>
          </div>
        </div>

        {/* LADO DIREITO: Links Rápidos */}
        <div className="bg-[#FFFFFF] flex flex-col justify-between p-6 xl:p-8 h-full overflow-y-auto">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#380D3D] font-heading font-bold block">
                  Acesso Imediato
                </span>
                <h1 className="text-2xl font-heading font-bold text-[#000000]">
                  Canais Oficiais
                </h1>
              </div>
              <Link
                href="/"
                className="text-xs font-heading text-[#380D3D] hover:text-[#4E1455] transition-colors flex items-center gap-1 font-bold"
              >
                <span>Acessar Site</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`group flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
                      item.highlight
                        ? "bg-[#380D3D] text-white border-[#380D3D] shadow-md hover:bg-[#4E1455] hover:scale-[1.01]"
                        : "bg-[#FBFBF9] hover:bg-[#F4EEF5] border-gray-200 text-[#000000] hover:border-[#380D3D]/30"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${
                          item.highlight ? "bg-white/20 text-white" : "bg-white border border-gray-200 text-[#380D3D]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="font-heading font-bold text-sm tracking-wide leading-tight">
                          {item.title}
                        </h2>
                        <p
                          className={`text-xs mt-0.5 font-body ${
                            item.highlight ? "text-white/90" : "text-gray-500"
                          }`}
                        >
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        item.highlight ? "text-white" : "text-gray-400 group-hover:text-[#380D3D]"
                      }`}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500 font-body">
              © {new Date().getFullYear()} {OFFICE_INFO.name} • Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>

      {/* ===================== VERSÃO MOBILE (100% Fit Sem Scroll + Linhas Geométricas) ===================== */}
      <div className="lg:hidden relative flex flex-col justify-between h-[100dvh] max-h-[100dvh] w-full px-4 py-3 sm:py-4 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FAF6FB] to-[#F5ECF7]">
        {/* Linhas Geométricas em Roxo Claro de Fundo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="purpleGeomGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C897CE" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#D8AFD9" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#C897CE" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id="purpleGeomGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C897CE" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#A56FA8" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Linhas Diagonais Intersectantes em Roxo Claro */}
            <line x1="-15%" y1="12%" x2="115%" y2="38%" stroke="url(#purpleGeomGrad1)" strokeWidth="1.25" />
            <line x1="-15%" y1="42%" x2="115%" y2="18%" stroke="url(#purpleGeomGrad2)" strokeWidth="1" />
            <line x1="-15%" y1="78%" x2="115%" y2="58%" stroke="url(#purpleGeomGrad1)" strokeWidth="1.25" />
            <line x1="-15%" y1="92%" x2="115%" y2="72%" stroke="url(#purpleGeomGrad2)" strokeWidth="0.75" />

            {/* Linhas Geométricas de Precisão Tracejadas */}
            <line x1="18%" y1="-10%" x2="82%" y2="110%" stroke="url(#purpleGeomGrad1)" strokeWidth="0.75" strokeDasharray="5 5" />
            <line x1="88%" y1="-10%" x2="12%" y2="110%" stroke="url(#purpleGeomGrad2)" strokeWidth="0.75" strokeDasharray="6 4" />

            {/* Círculos Geométricos Concêntricos em Roxo Claro */}
            <circle cx="88%" cy="16%" r="80" fill="none" stroke="#C897CE" strokeWidth="1" strokeOpacity="0.25" />
            <circle cx="88%" cy="16%" r="130" fill="none" stroke="#C897CE" strokeWidth="0.75" strokeOpacity="0.15" strokeDasharray="4 4" />
            <circle cx="12%" cy="84%" r="90" fill="none" stroke="#C897CE" strokeWidth="1" strokeOpacity="0.25" />
            <circle cx="12%" cy="84%" r="150" fill="none" stroke="#C897CE" strokeWidth="0.75" strokeOpacity="0.15" strokeDasharray="5 5" />

            {/* Formas Geométricas Arquiteturais Sutis */}
            <rect x="75%" y="45%" width="60" height="60" fill="none" stroke="#C897CE" strokeWidth="0.75" strokeOpacity="0.2" transform="rotate(45 300 300)" />
            <rect x="10%" y="30%" width="45" height="45" fill="none" stroke="#C897CE" strokeWidth="0.75" strokeOpacity="0.18" transform="rotate(45 50 200)" />
          </svg>
        </div>

        {/* Topo Mobile - Logo no tamanho e posição originais */}
        <div className="relative z-10 w-full flex flex-col items-center text-center pt-2 pb-1">
          <div className="relative h-20 w-48 mb-2 sm:mb-2.5">
            <Image
              src="/logo_sem_fundo_usarnomodoclaro.png"
              alt={OFFICE_INFO.name}
              fill
              priority
              className="object-contain"
              sizes="200px"
            />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-[#C897CE]/40 text-xs font-heading text-[#380D3D] mb-1.5 font-bold shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#380D3D]" />
            <span>Mais de 9 Anos de Prática Jurídica</span>
          </div>
          <p className="text-xs text-gray-600 font-body max-w-xs mx-auto leading-tight line-clamp-1">
            {OFFICE_INFO.tagline}
          </p>
        </div>

        {/* Links Mobile - Distribuídos harmoniosamente ocupando o espaço sem folgas mortas */}
        <div className="relative z-10 w-full flex-1 flex flex-col justify-between py-1.5 sm:py-2.5 max-w-md mx-auto">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center justify-between px-3.5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border transition-all duration-200 active:scale-[0.98] ${
                  item.highlight
                    ? "bg-[#380D3D] text-white border-[#380D3D] shadow-md"
                    : "bg-white/90 backdrop-blur-xs hover:bg-white border-[#C897CE]/35 text-[#000000] shadow-2xs"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      item.highlight ? "bg-white/20 text-white" : "bg-[#F8F2F9] border border-[#C897CE]/30 text-[#380D3D]"
                    }`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-heading font-bold text-xs sm:text-sm leading-tight truncate">{item.title}</h2>
                    <p
                      className={`text-[0.6875rem] font-body truncate mt-0.5 ${
                        item.highlight ? "text-white/85" : "text-gray-500"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-current flex-shrink-0 ml-2" />
              </a>
            );
          })}
        </div>

        {/* Especialidades & Rodapé no Mobile (Sem espaço ocioso com os botões) */}
        <div className="relative z-10 w-full max-w-md mx-auto pt-1 pb-1 space-y-1.5 sm:space-y-2">
          {/* Card Áreas de Atuação */}
          <div className="p-2 sm:p-2.5 rounded-xl bg-white/90 backdrop-blur-xs border border-[#C897CE]/35 text-center shadow-2xs">
            <span className="text-[0.625rem] sm:text-[0.6875rem] font-heading uppercase tracking-widest text-[#380D3D] font-bold block mb-1">
              Áreas de Atuação
            </span>
            <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5">
              {specialties.map((spec, i) => (
                <span
                  key={i}
                  className="text-[0.625rem] sm:text-[0.6875rem] px-2.5 py-0.5 rounded-full bg-[#FAF6FB] text-[#380D3D] font-body border border-[#C897CE]/30 font-medium"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Rodapé Mobile Compacto */}
          <div className="text-center text-[0.625rem] sm:text-[0.6875rem] text-gray-500 font-body">
            <p>{OFFICE_INFO.addressShort} • © {new Date().getFullYear()} {OFFICE_INFO.name}</p>
          </div>
        </div>
      </div>
    </main>
  );
}