"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const windowTypes = [
  {
    name: "Corredera",
    description:
      "Sistema de cierre paralelo al muro. La ventana se desliza sobre un riel con suavidad. Ideal para espacios donde la ventana no puede proyectarse hacia afuera.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop",
    tags: ["Más vendida", "Fácil uso"],
    color: "from-blue-600/80",
  },
  {
    name: "Abatible",
    description:
      "Sistema de apertura lateral con bisagras. Aprovecha al máximo la abertura y proporciona una hermeticidad superior al sistema corredera.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
    tags: ["Alta hermeticidad"],
    color: "from-emerald-700/80",
  },
  {
    name: "Oscilobatiente",
    description:
      "Combina dos sistemas en uno: abre de forma abatible lateral y también oscila desde la parte superior. El sistema más versátil del mercado.",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80&auto=format&fit=crop",
    tags: ["2 en 1", "Premium"],
    color: "from-purple-700/80",
  },
  {
    name: "Proyectante",
    description:
      "Apertura desde la parte inferior hacia el exterior, con regulación de abertura. Perfecta para baños, cocinas y espacios que requieren ventilación controlada.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80&auto=format&fit=crop",
    tags: ["Ventilación controlada"],
    color: "from-orange-700/80",
  },
  {
    name: "Oscilante",
    description:
      "Abre desde la parte superior hacia el interior. Permite ventilación sin riesgo de lluvia y es ideal para habitaciones con poco espacio.",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80&auto=format&fit=crop",
    tags: ["Anti-lluvia"],
    color: "from-teal-700/80",
  },
  {
    name: "Fija",
    description:
      "Ventana sin sistema de apertura, desde piso a cielo o media altura. Maximiza la luminosidad y las vistas panorámicas sin comprometer el aislamiento.",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80&auto=format&fit=crop",
    tags: ["Máxima luz", "Panorámica"],
    color: "from-slate-700/80",
  },
];

export function WindowTypes() {
  const handleCotizar = () => {
    const el = document.querySelector("#cotizar");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="productos"
      className="py-20 md:py-28 bg-white"
      aria-label="Tipos de ventanas disponibles"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="max-w-xl">
            <span className="inline-block bg-brand-blue/10 text-brand-blue text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Nuestros Productos
            </span>
            <h2 className="section-title">
              6 sistemas de ventanas para cada espacio
            </h2>
          </div>
          <p className="text-brand-gray-mid max-w-sm md:text-right leading-relaxed">
            Todos fabricados con perfiles PVC de calidad europea y disponibles en 6+ colores
            foliados. Personalizamos cada proyecto.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {windowTypes.map((type, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300"
              onClick={handleCotizar}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleCotizar()}
              aria-label={`Ver más sobre ventana ${type.name}`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={type.image}
                  alt={`Ventana PVC tipo ${type.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${type.color} to-transparent opacity-60`}
                />
                {/* Tags */}
                <div className="absolute top-3 left-3 flex gap-1.5">
                  {type.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/90 text-brand-blue text-xs font-semibold px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 bg-white">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-brand-blue text-lg">
                    {type.name}
                  </h3>
                  <ArrowRight
                    size={18}
                    className="text-brand-gray-light group-hover:text-brand-accent group-hover:translate-x-1 transition-all duration-300 mt-0.5 shrink-0"
                  />
                </div>
                <p className="text-brand-gray-mid text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-brand-gray-mid mb-5">
            ¿No sabes cuál sistema necesitas? Te asesoramos sin costo.
          </p>
          <button onClick={handleCotizar} className="btn-secondary">
            Cotiza el sistema ideal para ti
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
