import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://radar-tech-ob2f.vercel.app"),
  title: {
    default: "Radar Tech",
    template: "%s | Radar Tech",
  },
  description:
    "Notícias sobre tecnologia, inteligência artificial, celulares, hardware, games e robótica.",
  keywords: [
    "tecnologia",
    "inteligência artificial",
    "celulares",
    "hardware",
    "games",
    "robótica",
    "notícias tech",
    "Radar Tech",
  ],
  authors: [{ name: "Radar Tech" }],
  creator: "Radar Tech",
  publisher: "Radar Tech",
  verification: {
    google: "yS-sA5993o9PsX-Kk4sVv_jhg87Hl1cx46ezyGR4J74",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://radar-tech-ob2f.vercel.app",
    siteName: "Radar Tech",
    title: "Radar Tech",
    description:
      "Notícias sobre tecnologia, inteligência artificial, celulares, hardware, games e robótica.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Radar Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radar Tech",
    description:
      "Notícias sobre tecnologia, inteligência artificial, celulares, hardware, games e robótica.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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