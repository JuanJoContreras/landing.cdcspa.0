import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CDC SPA | Ventanas de PVC Premium – Fabricación e Instalación en Chile",
  description:
    "Fabricamos e instalamos ventanas de PVC de alta calidad con sistemas PVC Premium. Ahorra hasta 68% en energía. Cotiza gratis hoy. Atendemos Santiago y todo Chile.",
  keywords: [
    "ventanas PVC Chile",
    "ventanas PVC Santiago",
    "instalación ventanas PVC",
    "ventanas termopanel",
    "PVC Premium Chile",
    "CDC SPA",
    "cierres de cristal",
    "ventanas correderas",
    "ventanas oscilobatientes",
    "ahorro energético ventanas",
  ],
  authors: [{ name: "CDC SPA - Cierres de Cristal" }],
  openGraph: {
    title: "CDC SPA | Ventanas de PVC Premium",
    description:
      "Fabricamos e instalamos ventanas de PVC de alta calidad. Ahorra hasta 68% en energía. Cotiza gratis.",
    url: "https://cdcspa.cl",
    siteName: "CDC SPA",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CDC SPA | Ventanas de PVC Premium",
    description: "Fabricamos e instalamos ventanas de PVC de alta calidad en Chile.",
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
    <html lang="es-CL">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
