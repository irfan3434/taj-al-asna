import type { Metadata } from "next";
import "./app.css";
import { LanguageProvider } from "@/i18n/language";
import AppFrame from "@/components/AppFrame";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "التاج الأسنى — Taj Al Asna",
  description: "منصة معرفية عالمية تجمع الأسماء الحسنى ومعانيها وشواهدها",
  alternates: {
    canonical: "/",
    languages: {
      "ar-SA": "/",
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "التاج الأسنى — Taj Al Asna",
    description:
      "منصة معرفية عالمية تجمع الأسماء الحسنى ومعانيها وشواهدها — The 99 Beautiful Names of Allah",
    url: "/",
    siteName: SITE_NAME,
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "التاج الأسنى — Taj Al Asna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "التاج الأسنى — Taj Al Asna",
    description:
      "منصة معرفية عالمية تجمع الأسماء الحسنى ومعانيها وشواهدها",
    images: ["/og-image.png"],
  },
};

// Site-level structured data (appears on every page for search-engine discovery).
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "التاج الأسنى — Taj Al Asna",
      description:
        "A global knowledge platform for the 99 Beautiful Names of Allah — meanings, evidence, and reflection.",
      inLanguage: ["ar", "en"],
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/names?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo.webp`,
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${SITE_URL}/#names`,
      name: "The 99 Beautiful Names of Allah — أسماء الله الحسنى",
      url: `${SITE_URL}/`,
      inLanguage: "ar",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <LanguageProvider>
          <AppFrame>
            <Header />
            {children}
            <Footer />
          </AppFrame>
        </LanguageProvider>
      </body>
    </html>
  );
}
