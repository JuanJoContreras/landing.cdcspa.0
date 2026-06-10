"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#productos", label: "Productos" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1A3C5E] shadow-lg" : "bg-[#1A3C5E]/80 backdrop-blur-md"
      }`}
    >
      {/* Urgency Banner integrado */}
      <AnimatePresence>
        {bannerVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#EA580C] text-white text-xs sm:text-sm overflow-hidden"
            role="banner"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-1 justify-center">
                <Zap size={14} className="fill-white shrink-0" aria-hidden />
                <span className="font-medium text-center text-white">
                  <strong>Especialistas en ventanas PVC premium</strong> · Cotización sin costo ·{" "}
                  <button
                    onClick={() => document.querySelector("#cotizar")?.scrollIntoView({ behavior: "smooth" })}
                    className="underline underline-offset-2 font-bold hover:no-underline text-white"
                  >
                    Cotiza ahora →
                  </button>
                </span>
              </div>
              <button
                onClick={() => setBannerVisible(false)}
                className="text-white/80 hover:text-white shrink-0 p-0.5"
                aria-label="Cerrar"
              >
                <X size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">

          <a href="#inicio"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-3 shrink-0 group">
            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-[#1A3C5E] font-black text-xs">CDC</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-sm leading-tight">CDC SPA</p>
              <p className="text-white/60 text-xs">Cierres de Cristal</p>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-7 flex-1 justify-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button onClick={() => handleNavClick(link.href)}
                  className="text-white/75 hover:text-white text-sm font-medium transition-colors duration-200 whitespace-nowrap relative group">
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#EA580C] group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
            <li>
              <a href="https://claroglass.cl" target="_blank" rel="noopener noreferrer"
                className="text-[#C9A227] hover:text-white text-sm font-semibold whitespace-nowrap border border-[#C9A227]/50 hover:border-white/50 px-3 py-1 rounded-full transition-all duration-200">
                ClaroGlass →
              </a>
            </li>
          </ul>

          <div className="hidden md:flex items-center gap-4 shrink-0">
            <span className="text-white/40 text-xs select-none">
              (+56 9) 4753&#8209;3300
            </span>
            <button onClick={() => handleNavClick("#cotizar")}
              className="bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all whitespace-nowrap hover:-translate-y-0.5">
              Cotizar
            </button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors shrink-0"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden bg-[#1A3C5E] border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-5 space-y-1">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left text-white/75 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl text-sm font-medium transition-colors">
                  {link.label}
                </button>
              ))}
              <a href="https://claroglass.cl" target="_blank" rel="noopener noreferrer"
                className="block w-full text-left text-[#C9A227] hover:text-white border border-[#C9A227]/40 hover:bg-white/10 px-4 py-3 rounded-xl text-sm font-semibold transition-colors">
                ClaroGlass →
              </a>
              <div className="pt-3 flex flex-col gap-2">
                <span className="text-white/30 text-xs px-4 select-none">
                  (+56 9) 4753&#8209;3300
                </span>
                <button onClick={() => handleNavClick("#cotizar")}
                  className="bg-[#EA580C] text-white font-bold w-full py-3 rounded-full text-sm hover:bg-[#C2410C] transition-colors">
                  Solicitar Cotización
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
