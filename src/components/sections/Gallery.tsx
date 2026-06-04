"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const projects = [
  {
    src: "/images/VENTANAS_1.jpeg",
    alt: "Sistema corredera PVC folio nogal – terraza penthouse",
    location: "Lo Barnechea, RM",
    type: "Corredera – Sistema completo terraza",
  },
  {
    src: "/images/VENTANAS_2.jpeg",
    alt: "Ventanas correderas PVC vista panorámica ciudad",
    location: "Providencia, RM",
    type: "Corredera – Vista panorámica",
  },
  {
    src: "/images/VENTANAS_1V1.jpeg",
    alt: "Sistema de ventanas PVC folio nogal en penthouse",
    location: "Las Condes, RM",
    type: "Sistema completo – Obra nueva",
  },
  {
    src: "/images/SISTEMA_2_Y_VENTANAS_JO.jpeg",
    alt: "Instalación sistema de cierres y ventanas PVC",
    location: "Vitacura, RM",
    type: "Mixto – Cierres y ventanas",
  },
  {
    src: "/images/VENTANA_ABATIBLE.jpeg",
    alt: "Ventana abatible PVC antracita instalada",
    location: "Ñuñoa, RM",
    type: "Abatible – Color antracita",
  },
  {
    src: "/images/VENTANA_BANO_2.jpeg",
    alt: "Ventana PVC folio nogal en baño con jardín interior",
    location: "La Reina, RM",
    type: "Fija – Baño con jardín",
  },
  {
    src: "/images/VENTANA_BANO_FUERA.jpeg",
    alt: "Vista exterior ventana PVC folio nogal en jardín",
    location: "La Reina, RM",
    type: "Vista exterior – Folio nogal",
  },
  {
    src: "/images/SHOWER.jpeg",
    alt: "Ventana PVC oscilobatiente en baño con ducha",
    location: "Las Condes, RM",
    type: "Oscilobatiente – Baño",
  },
  {
    src: "/images/ESPEJO_1.jpeg",
    alt: "Instalación vidrio espejo y ventana en baño premium",
    location: "Providencia, RM",
    type: "Espejo + Ventana – Baño premium",
  },
];

export function Gallery() {
  return (
    <section
      id="proyectos"
      className="py-20 md:py-28 bg-[#F5F5F7]"
      aria-label="Galería de proyectos reales"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <span className="inline-block border border-[#1A3C5E]/20 text-[#1A3C5E] text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            Nuestros proyectos
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-5xl font-black text-[#1A3C5E] leading-tight">
              Proyectos reales,<br />
              <span className="text-[#1A3C5E]/50">resultados reales.</span>
            </h2>
            <p className="text-[#4A4A4A] text-sm max-w-xs leading-relaxed">
              Cada ventana instalada tiene detrás una familia o empresa que confió en CDC SPA.
            </p>
          </div>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {projects.map((project, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer"
              aria-label={project.alt}
            >
              <img
                src={project.src}
                alt={project.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-semibold text-sm">{project.type}</p>
                <p className="flex items-center gap-1 text-white/60 text-xs mt-0.5">
                  <MapPin size={10} aria-hidden /> {project.location}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-14"
        >
          <button
            onClick={() => document.querySelector("#cotizar")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 border border-[#1A3C5E]/30 text-[#1A3C5E] hover:bg-[#1A3C5E] hover:text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-sm"
          >
            Cotiza tu proyecto hoy →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
