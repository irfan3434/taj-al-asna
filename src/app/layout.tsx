import type { Metadata } from "next";
import "./app.css";

export const metadata: Metadata = {
  title: "التاج الأسنى — Taj Al Asna",
  description: "منصة معرفية عالمية تجمع الأسماء الحسنى ومعانيها وشواهدها",
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
