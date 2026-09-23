import type { Metadata } from "next";
import { Arima, Mulish } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getLegalServiceSchema } from "@/lib/schema";

const arima = Arima({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aline-mikusska-advocacia.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aline Pacheco Mikusska | Advocacia e Consultoria Jurídica - Curitiba PR",
    template: "%s | Aline Pacheco Mikusska Advocacia",
  },
  description:
    "Advocacia especializada em Direito de Família, Direito Cível, Criminal e Previdenciário no Bairro Alto, Curitiba/PR. Mais de 9 anos de prática jurídica com acolhimento e atuação estratégica.",
  keywords: [
    "advogada curitiba",
    "advogada bairro alto curitiba",
    "aline pacheco mikusska advocacia",
    "advogado familia curitiba",
    "divorcio e pensao curitiba",
    "advogado criminalista curitiba",
    "audiencia de custodia curitiba",
    "inss e auxilio doenca curitiba",
    "direito civil curitiba pr",
  ],
  authors: [{ name: "Dra. Aline Pacheco Mikusska" }],
  creator: "Dra. Aline Pacheco Mikusska",
  publisher: "Aline Pacheco Mikusska Advocacia e Consultoria Jurídica",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Aline Pacheco Mikusska | Advocacia e Consultoria Jurídica - Curitiba PR",
    description:
      "Acolhimento na escuta, precisão técnica na estratégia e firmeza na defesa dos seus direitos. Mais de 9 anos de prática jurídica em Curitiba e região.",
    siteName: "Aline Pacheco Mikusska Advocacia",
    images: [
      {
        url: "/og-image_optimized_300.jpeg",
        width: 1200,
        height: 630,
        alt: "Aline Pacheco Mikusska Advocacia e Consultoria Jurídica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aline Pacheco Mikusska | Advocacia e Consultoria Jurídica - Curitiba PR",
    description:
      "Acolhimento na escuta, precisão técnica na estratégia e firmeza na defesa dos seus direitos. Mais de 9 anos de prática jurídica em Curitiba/PR.",
    images: ["/og-image_optimized_300.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/Favicon-android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/Favicon-android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/Favicon-apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon-apple-touch-icon_180x180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getLegalServiceSchema();

  return (
    <html
      lang="pt-BR"
      className={`${arima.variable} ${mulish.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body selection:bg-[var(--accent)] selection:text-[#000000]">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}