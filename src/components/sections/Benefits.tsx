"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Thermometer,
  Volume2,
  Shield,
  Leaf,
  Wrench,
  Palette,
} from "lucide-react";

const benefits = [
  {
    icon: Thermometer,
    color: "bg-orange-50 text-orange-600",
    title: "Aislamiento Térmico Superior",
    description:
      "Reduce hasta el 68% en costos de climatización. Nuestras ventanas PVC Premium mantienen la temperatura ideal durante todo el año.",
    highlight: "Ahorra hasta 68%",
  },
  {
    icon: Volume2,
    color: "bg-blue-50 text-blue-600",
    title: "Control Acústico",
    description:
      "Reduce el ruido exterior hasta 45 dB. Vive en un ambiente de paz y tranquilidad sin importar lo que pase afuera.",
    highlight: "Hasta 45 dB menos ruido",
  },
  {
    icon: Shield,
    color: "bg-green-50 text-green-600",
    title: "Seguridad Reforzada",
    description:
      "Vidrio termopanel y herrajes de alta seguridad. Protege a tu familia con sistemas resistentes a la intrusión.",
    highlight: "Herrajes certificados",
  },
  {
    icon: Leaf,
    color: "bg-emerald-50 text-emerald-600",
    title: "100% Libre de Mantención",
    description:
      "El PVC no se oxida, no necesita pintura y es resistente a la humedad y los agentes atmosféricos.",
    highlight: "Cero mantención",
  },
  {
    icon: Wrench,
    color: "bg-purple-50 text-purple-600",
    title: "Instalación Profesional",
    description:
      "Equipo técnico certificado con más de 15 años de experiencia. Proyectos residenciales y comerciales en todo Chile.",
    highlight: "+15 años de experiencia",
  },
  {
    icon: Palette,
    color: "bg-amber-50 text-amber-600",
    title: "Diseño Personalizado",
    description:
      "Más de 6 colores y texturas foliadas disponibles. Adaptamos cada ventana a la arquitectura única de tu proyecto.",
    highlight: "+6 colores disponibles",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="beneficios"
      className="py-20 md:py-28 bg-[#F5F5F7]"
      aria-label="Beneficios de nuestras ventanas"
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
            ¿Por qué ventanas PVC?
          </span>
          <h2 className="section-title mb-4">
            Más confort, menos gastos. Siempre.
          </h2>
          <p className="section-subtitle">
            Las ventanas de PVC no son solo estética. Son una inversión que se
            paga sola con el ahorro energético y cero costos de mantención.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.article
                key={i}
                variants={cardVariants}
                className="card group cursor-default"
                aria-label={benefit.title}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${benefit.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="font-bold text-brand-blue text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-brand-gray-mid text-sm leading-relaxed mb-4">
                  {benefit.description}
                </p>
                <span className="inline-block text-xs font-semibold text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
                  ✓ {benefit.highlight}
                </span>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
