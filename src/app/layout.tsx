import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ventanas PVC Termopanel Santiago | CDC SPA – Cotiza Gratis",
  description:
    "Ventanas PVC termopanel desde $180.000 en Santiago. Instalación en Lo Barnechea, Las Condes, Vitacura y RM. Reemplazamos ventanas de aluminio por PVC. Visita técnica gratuita. +200 proyectos. Cumplimos RT 2025.",
  keywords: [
    "ventanas PVC Santiago precio",
    "instalación ventanas PVC Lo Barnechea",
    "reemplazo ventanas aluminio por PVC",
    "ventanas PVC termopanel Santiago",
    "cotizar ventanas PVC Santiago",
    "precio ventanas PVC Chile 2025",
    "ventanas PVC Las Condes",
    "ventanas PVC Vitacura",
    "ventanas PVC Providencia",
    "ventanas termopanel Chile",
    "ventanas oscilobatientes Santiago",
    "ventanas correderas PVC Santiago",
    "ventanas abatibles PVC Chile",
    "instalación ventanas PVC RM",
    "ventanas PVC folio nogal",
    "ventanas PVC antracita",
    "termopanel Santiago",
    "ahorro energético ventanas PVC",
    "reglamentación térmica 2025 ventanas",
    "CDC SPA cierres de cristal",
  ],
  authors: [{ name: "CDC SPA – Cierres de Cristal" }],
  creator: "CDC SPA",
  publisher: "CDC SPA",
  metadataBase: new URL("https://cdcspa.cl"),
  alternates: {
    canonical: "https://cdcspa.cl",
  },
  openGraph: {
    title: "Ventanas PVC Termopanel Santiago | CDC SPA – Cotiza Gratis",
    description:
      "Ventanas PVC termopanel desde $180.000 en Santiago. Instalación en Lo Barnechea, Las Condes, Vitacura y RM. Visita técnica gratuita. +200 proyectos ejecutados.",
    url: "https://cdcspa.cl",
    siteName: "CDC SPA – Cierres de Cristal",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://cdcspa.cl/images/og-cdcspa.jpg",
        width: 1200,
        height: 630,
        alt: "CDC SPA – Ventanas PVC Termopanel Santiago Chile, instalación profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ventanas PVC Termopanel Santiago | CDC SPA",
    description:
      "Ventanas PVC termopanel desde $180.000 en Santiago. Instalación profesional en RM. Cotiza gratis, sin compromiso.",
    images: ["https://cdcspa.cl/images/og-cdcspa.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "REEMPLAZAR_CON_TU_CODIGO_GSC",
  },
  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/images/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/images/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/images/favicon.ico",
  },
};

// JSON-LD LocalBusiness
const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://cdcspa.cl/#organization",
  name: "CDC SPA – Cierres de Cristal",
  alternateName: "CDC SPA",
  description:
    "Fabricamos e instalamos ventanas PVC termopanel de alta calidad en Santiago y Chile. Especialistas en sistemas oscilobatientes, correderas, abatibles y fijas. Reemplazo de ventanas de aluminio por PVC.",
  url: "https://cdcspa.cl",
  telephone: "+56966879910",
  email: "ventas@cdcspa.cl",
  foundingDate: "2014",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 10 },
  areaServed: [
    { "@type": "City", name: "Santiago" },
    { "@type": "City", name: "Lo Barnechea" },
    { "@type": "City", name: "Las Condes" },
    { "@type": "City", name: "Vitacura" },
    { "@type": "AdministrativeArea", name: "Región Metropolitana" },
    { "@type": "Country", name: "Chile" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.4489,
    longitude: -70.6693,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: ["https://www.instagram.com/iruzspa.cl/"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sistemas de Ventanas PVC",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ventana PVC Corredera Santiago",
          description: "Sistema de cierre paralelo al muro. Ideal para espacios donde la ventana no puede proyectarse hacia afuera. Instalación en toda la RM.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ventana PVC Oscilobatiente Santiago",
          description: "Combina apertura abatible lateral y oscilación desde la parte superior. El sistema premium del mercado. Reemplaza ventanas de aluminio.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ventana PVC Abatible Santiago",
          description: "Apertura lateral con bisagras. Alta hermeticidad y apertura total del vano. Instalación profesional en Santiago.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ventana PVC Fija Termopanel Santiago",
          description: "Sin apertura. Máxima luminosidad y vistas panorámicas con aislación térmica superior. Cumple RT 2025.",
        },
      },
    ],
  },
};

// JSON-LD BreadcrumbList
const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://cdcspa.cl",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Ventanas PVC Termopanel Santiago",
      item: "https://cdcspa.cl/#productos",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Cotizar Ventanas PVC Santiago",
      item: "https://cdcspa.cl/#cotizar",
    },
  ],
};

// JSON-LD FAQPage
const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuestan las ventanas PVC en Santiago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio de ventanas PVC termopanel en Santiago parte desde $180.000 según el tamaño y sistema elegido. Ofrecemos cotización gratuita con visita técnica sin compromiso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto demora la instalación de ventanas PVC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La instalación de ventanas PVC toma entre 1 y 3 días hábiles dependiendo de la cantidad de vanos. Trabajamos en Santiago y toda la Región Metropolitana.",
      },
    },
    {
      "@type": "Question",
      name: "¿Pueden reemplazar mis ventanas de aluminio por PVC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, somos especialistas en el reemplazo de ventanas de aluminio por sistemas PVC termopanel. El cambio mejora el aislamiento térmico y acústico hasta un 68%.",
      },
    },
    {
      "@type": "Question",
      name: "¿Las ventanas PVC cumplen la Reglamentación Térmica 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, todos nuestros sistemas PVC con doble vidriado hermético (DVH) cumplen con la Reglamentación Térmica 2025 exigida en Chile.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hacen instalaciones en Lo Barnechea, Las Condes y Vitacura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, instalamos ventanas PVC en toda la Región Metropolitana, incluyendo Lo Barnechea, Las Condes, Vitacura, Providencia, La Reina y comunas aledañas.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
