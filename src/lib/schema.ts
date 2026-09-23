import { OFFICE_INFO, LAWYER_PROFILE } from "./data";

export function getLegalServiceSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aline-mikusska-advocacia.vercel.app";

  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteUrl}/#legalservice`,
    name: OFFICE_INFO.name,
    alternateName: OFFICE_INFO.shortName,
    description:
      "Advocacia especializada em Direito de Família, Direito Cível, Direito Criminal e Direito Previdenciário no Bairro Alto, Curitiba/PR. Mais de 9 anos de prática jurídica e atendimento humanizado.",
    url: siteUrl,
    telephone: `+${OFFICE_INFO.whatsapp}`,
    priceRange: "$$",
    image: `${siteUrl}/og-image_optimized_300.jpeg`,
    logo: `${siteUrl}/logo_sem_fundo_usarnomodoclaro.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. José de Oliveira Franco, 708 - Bairro Alto",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      postalCode: "82820-110",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.4057,
      longitude: -49.2155,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday"],
        opens: "09:00",
        closes: "12:00",
      },
    ],
    sameAs: [
      OFFICE_INFO.instagramUrl,
      OFFICE_INFO.linkedinUrl,
    ],
    employee: [
      {
        "@type": "Person",
        name: LAWYER_PROFILE.name,
        jobTitle: LAWYER_PROFILE.role,
        description: `${LAWYER_PROFILE.experience}, ${LAWYER_PROFILE.graduation}`,
      },
    ],
  };
}