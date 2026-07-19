import type { Metadata } from "next";
import "./app.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://taj-al-asna.vercel.app"),
  title: "التاج الأسنى — Taj Al Asna",
  description: "منصة معرفية عالمية تجمع الأسماء الحسنى ومعانيها وشواهدها",
  openGraph: {
    title: "التاج الأسنى — Taj Al Asna",
    description:
      "منصة معرفية عالمية تجمع الأسماء الحسنى ومعانيها وشواهدها — The 99 Beautiful Names of Allah",
    url: "/",
    siteName: "Taj Al Asna",
    locale: "ar",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
