import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Radar Tech",
  description:
    "Notícias sobre tecnologia, inteligência artificial, celulares, hardware, games e robótica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}