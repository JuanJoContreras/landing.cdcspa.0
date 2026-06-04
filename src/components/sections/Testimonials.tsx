"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rodrigo Fuentes",
    location: "Las Condes, Santiago",
    rating: 5,
    project: "Reemplazo 8 ventanas casa",
    text: "Excelente servicio de principio a fin. Vinieron a medir, me explicaron todo el proceso y en dos semanas ya tenía las ventanas instaladas. El ahorro en la calefacción ha sido notable desde el primer invierno. 100% recomendados.",
    initials: "RF",
    color: "bg-brand-blue",
  },
  {
    name: "Claudia Morales",
    location: "Ñuñoa, Santiago",
    rating: 5,
    project: "Ventanas oscilobatientes departamento",
    text: "Contraté CDC para el departamento completo, 6 ventanas oscilobatientes. La diferencia en ruido es increíble, vivimos cerca de una calle transitada y ahora prácticamente no se escucha nada. El equipo de instalación fue muy profesional y ordenado.",
    initials: "CM",
    color: "bg-brand-accent",
  },
  {
    name: "Cristián Sepúlveda",
    location: "Vitacura, Santiago",
    rating: 5,
    project: "Obra nueva 15 ventanas",
    text: "Usamos CDC para la construcción de nuestra casa nueva. Nos asesoraron muy bien en los sistemas según la orientación de cada habitación. El resultado final superó nuestras expectativas tanto en estética como en funcionalidad.",
    initials: "CS",
    color: "bg-purple-700",
  },
  {
    name: "Andrea Valdés",
    location: "La Florida, Santiago",
    rating: 5,
    project: "Reemplazo ventanas de aluminio antiguas",
    text: "Tenía ventanas de aluminio de los 90 y el cambio fue impresionante. Mi papá notó de inmediato que ya no hay corrientes de aire en invierno. Además, el folio en color nogal quedó precioso con los muebles. Muy satisfecha con CDC.",
    initials: "AV",
    color: "bg-orange-600",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-20 md:py-28 bg-white"
      aria-label="Testimonios de clientes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block bg-brand-blue/10 text-brand-blue text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Lo dicen nuestros clientes
          </span>
          <h2 className="section-title mb-4">
            Más de 500 familias ya transformaron su hogar
          </h2>
          <div className="flex items-center justify-center gap-1.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={22}
                className="fill-amber-400 text-amber-400"
                aria-hidden
              />
            ))}
            <span className="ml-2 text-brand-gray-mid font-semibold">
              4.9 / 5
            </span>
          </div>
          <p className="text-brand-gray-light text-sm">
            Basado en más de 200 evaluaciones reales
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card relative"
              aria-label={`Testimonio de ${t.name}`}
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="text-brand-blue/10 mb-4 fill-brand-blue/10"
                aria-hidden
              />

              {/* Stars */}
              <div
                className="flex gap-0.5 mb-4"
                role="img"
                aria-label={`${t.rating} de 5 estrellas`}
              >
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-amber-400 text-amber-400"
                    aria-hidden
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-brand-gray-mid text-sm leading-relaxed mb-6 italic">
                &quot;{t.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}
                  aria-hidden
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-brand-blue text-sm">
                    {t.name}
                  </p>
                  <p className="text-brand-gray-light text-xs">{t.location}</p>
                  <p className="text-brand-accent text-xs font-medium mt-0.5">
                    ✓ {t.project}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
