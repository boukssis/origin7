import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/Reveal";
import { awards, site } from "@/lib/site";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", weight: ["500", "600", "700"] });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Origin7 — BIM & Digital Construction Consultancy | Northern Ireland & Ireland",
    template: "%s | Origin7",
  },
  description: site.description,
  applicationName: "Origin7",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Origin7",
    title: "Origin7 — BIM & Digital Construction Consultancy",
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots:
    process.env.SITE_LAUNCHED === "true"
      ? { index: true, follow: true }
      : { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export const viewport: Viewport = {
  themeColor: "#f9f8fc",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legalName,
  description: site.description,
  url: site.url,
  email: site.email,
  foundingDate: String(site.founded),
  areaServed: [
    { "@type": "Place", name: "Northern Ireland" },
    { "@type": "Country", name: "Ireland" },
  ],
  address: { "@type": "PostalAddress", addressLocality: "Magherafelt", addressRegion: "County Londonderry", addressCountry: "GB" },
  founder: {
    "@type": "Person",
    name: "Melanie Dawson",
    honorificSuffix: "FICE",
    jobTitle: "Founder & Managing Director",
    sameAs: [site.founderLinkedin],
  },
  sameAs: [site.linkedin, site.academy],
  award: awards.map((a) => `${a.programme} ${a.year} — ${a.category} (${a.result})`),
  knowsAbout: ["Building Information Modelling", "ISO 19650", "Information management", "Common Data Environment", "COBie", "Digital construction", "Laser scanning"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth" className={`${display.variable} ${sans.variable} ${mono.variable} scroll-smooth`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
