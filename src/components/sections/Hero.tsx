"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

const trustBadges = [
  "Especialistas en ventanas PVC premium",
  "Instalación profesional certificada",
  "+200 proyectos en Chile",
];

export function Hero() {
  const handleCotizar = () => {
    document.querySelector("#cotizar")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/VENTANAS_1.jpeg"
          alt="Proyecto ventanas PVC CDC SPA"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3C5E]/90 via-[#1A3C5E]/70 to-[#1A3C5E]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C5E]/60 via-transparent to-transparent" />
      </div>

      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#16A34A]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-[#16A34A]/20 border border-[#16A34A]/40 text-[#4ade80] px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Zap size={14} className="fill-[#4ade80]" aria-hidden />
              Especialistas en ventanas PVC premium
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display font-black text-white leading-[0.95] tracking-tight mb-6"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              Ventanas de PVC
              <span className="block text-[#16A34A] mt-1">que transforman</span>
              tu hogar.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/75 text-base leading-relaxed mb-5 max-w-lg"
            >
              Fabricamos e instalamos sistemas de PVC con aislación térmica superior para proyectos residenciales y comerciales en todo Chile.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-x-5 gap-y-2 mb-8"
            >
              {trustBadges.map((badge) => (
                <li key={badge} className="flex items-center gap-1.5 text-white/70 text-sm">
                  <CheckCircle size={13} className="text-[#16A34A] shrink-0" aria-hidden />
                  {badge}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button onClick={handleCotizar} className="btn-primary group text-base px-8 py-4">
                Cotiza gratis ahora
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" aria-hidden />
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-base px-8 py-4"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.522 5.848L0 24l6.343-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.782 9.782 0 01-5.021-1.382l-.36-.214-3.767.888.944-3.67-.234-.376A9.782 9.782 0 012.182 12C2.182 6.568 6.568 2.182 12 2.182S21.818 6.568 21.818 12 17.432 21.818 12 21.818z"/>
                </svg>
                Escribir por WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right: photo card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/VENTANAS_2.jpeg"
                  alt="Proyecto ventanas PVC folio nogal"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-4 -left-4 bg-white text-[#1A3C5E] rounded-2xl px-5 py-3 shadow-xl"
              >
                <p className="font-black text-2xl leading-none">+200</p>
                <p className="text-xs text-gray-400 mt-0.5">proyectos instalados</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -top-4 -right-4 bg-[#16A34A] text-white rounded-2xl px-4 py-2.5 shadow-xl"
              >
                <p className="font-bold text-sm leading-none">✓ Garantía</p>
                <p className="text-xs mt-0.5 font-medium">5 años</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar — grid 2x2 en mobile, 4 columnas en desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
            {[
              { value: "47%", label: "menos pérdida de energía" },
              { value: "68%", label: "ahorro en climatización" },
              { value: "+200", label: "proyectos ejecutados" },
              { value: "10+", label: "años de experiencia" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center px-4 py-5 bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-2xl font-black text-white">{stat.value}</span>
                <span className="text-white/50 text-xs mt-0.5 text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
