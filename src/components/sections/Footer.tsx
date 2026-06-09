"use client";

import { Phone, Mail, Clock, MapPin, Instagram } from "lucide-react";
import Image from "next/image";
import { WHATSAPP_URL, EMAIL, PHONE_DISPLAY, HOURS } from "@/lib/utils";

const navLinks = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#productos", label: "Nuestros Productos" },
  { href: "#nosotros", label: "Por qué CDC" },
  { href: "#proyectos", label: "Galería de Proyectos" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "Preguntas Frecuentes" },
];

const products = [
  "Ventana Corredera PVC",
  "Ventana Abatible PVC",
  "Ventana Oscilobatiente PVC",
  "Ventana Proyectante PVC",
  "Ventana Oscilante PVC",
  "Ventana Fija Termopanel",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-[#1C1C1E] text-white" aria-label="Pie de página CDC SPA">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/images/logo-cdc.png"
                alt="CDC SPA – Cierres de Cristal, Ventanas PVC Santiago Chile"
                width={180}
                height={60}
                className="h-14 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-6">
              Fabricamos e instalamos ventanas PVC termopanel de alta calidad en Santiago y todo Chile. Más de 10 años de experiencia y +200 proyectos ejecutados. Cumplimos la Reglamentación Térmica 2025.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/iruzspa.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#16A34A] rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram CDC SPA – Ventanas PVC Santiago"
              >
                <Instagram size={16} aria-hidden />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp CDC SPA"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.522 5.848L0 24l6.343-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.782 9.782 0 01-5.021-1.382l-.36-.214-3.767.888.944-3.67-.234-.376A9.782 9.782 0 012.182 12C2.182 6.568 6.568 2.182 12 2.182S21.818 6.568 21.818 12 17.432 21.818 12 21.818z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Navegación</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Ventanas PVC</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <button
                    onClick={() => handleNavClick("#productos")}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200 text-left"
                  >
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+56966879910"
                  className="flex items-start gap-3 text-white/60 hover:text-white text-sm transition-colors group"
                  aria-label={`Llamar a CDC SPA al ${PHONE_DISPLAY}`}
                >
                  <Phone size={15} className="mt-0.5 shrink-0 group-hover:text-[#16A34A] transition-colors" aria-hidden />
                  <p>{PHONE_DISPLAY}</p>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors group"
                  aria-label={`Correo CDC SPA: ${EMAIL}`}
                >
                  <Mail size={15} className="shrink-0 group-hover:text-[#16A34A] transition-colors" aria-hidden />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Clock size={15} className="mt-0.5 shrink-0" aria-hidden />
                <p>{HOURS}</p>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={15} className="mt-0.5 shrink-0" aria-hidden />
                <p>Santiago, Chile</p>
              </li>
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-colors mt-5"
              aria-label="Cotizar ventanas PVC por WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.522 5.848L0 24l6.343-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
              Escríbenos ahora
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {currentYear} CDC SPA – Cierres de Cristal · Ventanas PVC Santiago Chile. Todos los derechos reservados.
          </p>
          <p className="text-white/30 text-xs">
            Distribuidores de sistemas PVC calidad europea en Chile
          </p>
        </div>
      </div>
    </footer>
  );
}
