import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radar Tech",
  description: "Tecnologia sem enrolação",

  verification: {
    google: "yS-sA5993o9PsX-Kk4sVv_jhg87Hl1cx46ezyGR4J74",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}