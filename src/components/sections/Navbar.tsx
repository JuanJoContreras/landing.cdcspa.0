"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { WHATSAPP_URL, PHONE_DISPLAY } from "@/lib/utils";

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
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/8"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-3 group"
            aria-label="CDC SPA - Inicio"
          >
            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <span className="text-[#0A0A0A] font-black text-xs leading-none">CDC</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-sm leading-tight">CDC SPA</p>
              <p className="text-white/35 text-xs">Cierres de Cristal</p>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/55 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:+56966879910`} className="flex items-center gap-1.5 text-white/45 hover:text-white/70 text-sm transition-colors" aria-label="Llamar">
              <Phone size={13} aria-hidden /> <span className="hidden lg:inline">{PHONE_DISPLAY}</span>
            </a>
            <button
              onClick={() => handleNavClick("#cotizar")}
              className="btn-primary text-sm px-5 py-2.5"
            >
              Cotizar
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/8 transition-colors"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
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
            className="md:hidden bg-[#0A0A0A]/98 border-t border-white/8 overflow-hidden backdrop-blur-md"
          >
            <div className="px-4 pt-2 pb-5 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left text-white/60 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <a href={`tel:+56966879910`} className="flex items-center gap-2 text-white/40 px-4 py-2 text-sm">
                  <Phone size={13} /> {PHONE_DISPLAY}
                </a>
                <button onClick={() => handleNavClick("#cotizar")} className="btn-primary w-full justify-center text-sm">
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
