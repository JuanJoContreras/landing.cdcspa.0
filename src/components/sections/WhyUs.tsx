"use client";

import { motion } from "framer-motion";
import { Award, Zap, Clock, Star, ShieldCheck, Headphones } from "lucide-react";

const trustPoints = [
  {
    icon: Award,
    title: "Especialistas en PVC Premium",
    description: "Trabajamos con los mejores perfiles PVC del mercado. Calidad europea con instalación y soporte 100% local.",
  },
  {
    icon: Zap,
    title: "Ahorro Real en Energía",
    description: "Nuestros clientes reducen entre 45% y 68% su gasto en calefacción y climatización.",
  },
  {
    icon: Clock,
    title: "+10 Años de Experiencia",
    description: "Más de 200 proyectos residenciales y comerciales ejecutados en Chile. Conocemos cada detalle.",
  },
  {
    icon: Star,
    title: "Proyectos a Medida",
    description: "Fabricamos cualquier forma y tamaño. Arcos, trapezoides, panorámicas piso a cielo — sin límites.",
  },
  {
    icon: ShieldCheck,
    title: "Garantía en Instalación",
    description: "5 años de garantía formal por escrito en cada instalación. Si algo falla, lo resolvemos sin costo.",
  },
  {
    icon: Headphones,
    title: "Atención Personalizada",
    description: "Un ejecutivo dedicado desde la visita técnica hasta la entrega. Sin call centers.",
  },
];

export function WhyUs() {
  return (
    <section
      id="nosotros"
      className="py-20 md:py-28 bg-[#0A0A0A] relative overflow-hidden"
      aria-label="Por qué elegir CDC SPA"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <span className="inline-block border border-white/15 text-white/50 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            Por qué elegirnos
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-xl">
            No somos solo una ventana.
            <span className="block text-green-400 mt-1">
              Somos una inversión inteligente.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {trustPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-[#0A0A0A] p-7 hover:bg-white/[0.03] transition-colors duration-300 group"
              >
                <Icon size={20} className="text-green-400 mb-4" aria-hidden />
                <h3 className="font-bold text-white text-base mb-2">{point.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{point.description}</p>
              </motion.article>
            );
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 border border-white/10 rounded-2xl p-7 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-white font-bold text-lg mb-1">Visita técnica gratuita, sin compromiso</p>
            <p className="text-white/45 text-sm">Medimos, asesoramos y cotizamos. Todo sin costo inicial.</p>
          </div>
          <button
            onClick={() => document.querySelector("#cotizar")?.scrollIntoView({ behavior: "smooth" })}
            className="shrink-0 inline-flex items-center gap-2 bg-white text-[#0A0A0A] font-bold px-7 py-3.5 rounded-full hover:bg-white/90 transition-all duration-200 whitespace-nowrap"
          >
            Quiero una cotización →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
