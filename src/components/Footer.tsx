"use client";

import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { ShieldCheck, MessageSquare, ArrowUp } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#1A1A1A] text-white border-t border-[#8D359E]/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Topo do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Coluna 1: Logo e Apresentação (5 colunas) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-12 w-36">
              <Image
                src="/logo_sem_fundo_usarnomodoescuro.png"
                alt={OFFICE_INFO.name}
                fill
                className="object-contain object-left"
                sizes="150px"
              />
            </div>
            
            <p className="font-body text-xs sm:text-sm text-gray-300 max-w-sm leading-relaxed">
              Atuação personalizada, estratégica e acolhedora nas áreas de Direito de Família, Cível, Criminal e Previdenciário. Atendimento ético e direto com a titular no Bairro Alto, Curitiba/PR.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#8D359E]/40 bg-white/5 text-xs font-heading text-[#D68CE8]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D68CE8]" />
              <span>{OFFICE_INFO.lawyer} • Mais de 9 Anos de Prática</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (3 colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#D68CE8] font-bold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-heading text-gray-300">
              <li>
                <Link href="#inicio" className="hover:text-white transition-colors">Início</Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-white transition-colors">A Advogada</Link>
              </li>
              <li>
                <Link href="#pilares" className="hover:text-white transition-colors">Pilares Institucionais</Link>
              </li>
              <li>
                <Link href="#atuacao" className="hover:text-white transition-colors">Áreas de Atuação</Link>
              </li>
              <li>
                <Link href="#como-atuamos" className="hover:text-white transition-colors">Como Funciona</Link>
              </li>
              <li>
                <Link href="#avaliacoes" className="hover:text-white transition-colors">Avaliações no Google</Link>
              </li>
              <li>
                <Link href="#educativo" className="hover:text-white transition-colors">Conteúdo Educativo</Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-white transition-colors">Contato & Localização</Link>
              </li>
              <li>
                <Link href="/links" className="text-[#D68CE8] hover:underline font-semibold">Link-in-Bio (/links)</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos e Redes (4 colunas) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#D68CE8] font-bold">
              Canais Oficiais
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm font-body text-gray-300">
              <p><strong className="text-white font-heading">Endereço:</strong> {OFFICE_INFO.address}</p>
              <p><strong className="text-white font-heading">WhatsApp:</strong> {OFFICE_INFO.phone}</p>
              <p><strong className="text-white font-heading">Horários:</strong> {OFFICE_INFO.schedule.weekdays}</p>
              <p><strong className="text-white font-heading">Terça-feira:</strong> {OFFICE_INFO.schedule.tuesday}</p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={OFFICE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Dra. Aline Pacheco Mikusska"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#4E1455] flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={OFFICE_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Dra. Aline Pacheco Mikusska"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#4E1455] flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Dra. Aline Pacheco Mikusska"
                className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#20ba59] flex items-center justify-center text-white transition-colors cursor-pointer shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Rodapé Ético OAB + Direitos Autorais */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[0.6875rem] text-gray-400 font-body">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} {OFFICE_INFO.name}. Todos os direitos reservados.
            </p>
            <p className="text-gray-400">
              Este website possui caráter exclusivamente informativo e educativo, em estrita observância à Lei nº 8.906/1994, ao Código de Ética e Disciplina da OAB e ao Provimento nº 205/2021 do CFOAB.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 hover:border-[#D68CE8] text-gray-300 hover:text-white transition-colors flex-shrink-0 cursor-pointer text-xs font-heading"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}