"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

const trustBadges = [
  "Especialistas en ventanas PVC premium",
  "Instalación profesional certificada",
  "+200 proyectos en Chile",
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  // Mouse parallax values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 60, damping: 20, mass: 1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Layer transforms — profundidad diferente por capa
  const layer1X = useTransform(springX, [-1, 1], [-18, 18]);
  const layer1Y = useTransform(springY, [-1, 1], [-12, 12]);
  const layer2X = useTransform(springX, [-1, 1], [-8, 8]);
  const layer2Y = useTransform(springY, [-1, 1], [-5, 5]);
  const layer3X = useTransform(springX, [-1, 1], [6, -6]);
  const layer3Y = useTransform(springY, [-1, 1], [4, -4]);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  const handleCotizar = () => {
    document.querySelector("#cotizar")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
      style={{ perspective: "1200px" }}
      aria-label="Sección principal"
    >
      {/* === CAPA 1: Imagen de fondo con mayor parallax === */}
      <motion.div
        className="absolute inset-[-6%] z-0"
        style={{ x: layer1X, y: layer1Y }}
      >
        <img
          src="/images/VENTANAS_1.jpeg"
          alt="Proyecto ventanas PVC CDC SPA"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Overlay oscuro fuerte */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </motion.div>

      {/* === CAPA 2: Grain texture overlay sutil === */}
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04]"
        style={{ x: layer2X, y: layer2Y }}
        aria-hidden
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
      </motion.div>

      {/* === CAPA 3: Elemento flotante decorativo (ventana) === */}
      {mounted && (
        <motion.div
          className="absolute right-[5%] top-1/2 -translate-y-1/2 z-[2] hidden lg:block pointer-events-none"
          style={{ x: layer3X, y: layer3Y, rotateY: useTransform(springX, [-1, 1], [-8, 8]), rotateX: useTransform(springY, [-1, 1], [5, -5]) }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div
            className="w-64 h-80 xl:w-80 xl:h-96 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)",
              transform: "rotateY(-12deg) rotateX(4deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src="/images/VENTANAS_2.jpeg"
              alt="Ventana PVC instalada"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
          </div>
          {/* Sombra proyectada */}
          <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/40 blur-xl rounded-full"
            aria-hidden
          />
        </motion.div>
      )}

      {/* === CONTENIDO PRINCIPAL === */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-2xl xl:max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm text-white/80 px-4 py-1.5 rounded-full text-sm font-medium mb-7"
          >
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" aria-hidden />
            Venta & Instalación · Todo Chile
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-black text-white leading-[0.95] tracking-tight mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            Ventanas de PVC
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              que transforman
            </span>
            tu hogar.
          </motion.h1>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 mb-7"
          >
            {[
              { value: "47%", label: "menos pérdida de energía" },
              { value: "68%", label: "ahorro en climatización" },
              { value: "10+", label: "años de experiencia" },
            ].map((stat) => (
              <div key={stat.value} className="flex flex-col">
                <span className="text-white font-black text-2xl leading-none">{stat.value}</span>
                <span className="text-white/50 text-xs mt-0.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-white/65 text-lg leading-relaxed mb-5 max-w-lg"
          >
            Fabricamos e instalamos sistemas de PVC con aislación térmica superior para proyectos residenciales y comerciales en todo Chile.
          </motion.p>

          {/* Trust badges */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap gap-x-5 gap-y-2 mb-9"
          >
            {trustBadges.map((badge) => (
              <li key={badge} className="flex items-center gap-1.5 text-white/60 text-sm">
                <CheckCircle size={13} className="text-green-400 shrink-0" aria-hidden />
                {badge}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={handleCotizar}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0A0A0A] font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 group text-base"
            >
              Cotiza gratis →
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" aria-hidden />
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white/80 hover:text-white hover:border-white/50 font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base backdrop-blur-sm"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.522 5.848L0 24l6.343-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.782 9.782 0 01-5.021-1.382l-.36-.214-3.767.888.944-3.67-.234-.376A9.782 9.782 0 012.182 12C2.182 6.568 6.568 2.182 12 2.182S21.818 6.568 21.818 12 17.432 21.818 12 21.818z"/></svg>
              Escribir por WhatsApp
            </a>
          </motion.div>
        </div>
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
