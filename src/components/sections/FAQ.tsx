"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto tiempo demora la instalación?",
    answer:
      "Los plazos dependen de la cantidad de ventanas y la complejidad del proyecto. Tu ejecutivo comercial asignado te informará el tiempo estimado específico para tu caso una vez iniciado el proceso.",
  },
  {
    question: "¿Realizan visitas técnicas previas?",
    answer:
      "La rectificación de medidas se realiza una vez firmado el contrato. En esa instancia nuestro equipo técnico visita el lugar, mide cada vano con precisión y valida las condiciones antes de proceder a la fabricación.",
  },
  {
    question: "¿Qué garantía tienen las ventanas?",
    answer:
      "Nuestras ventanas tienen garantía en los perfiles PVC y en la instalación. Los perfiles PVC de calidad europea tienen una vida útil superior a 50 años y no requieren mantención. Cualquier problema de sellado o instalación dentro del período de garantía lo resolvemos sin costo adicional.",
  },
  {
    question: "¿Trabajan fuera de Santiago?",
    answer:
      "Sí, atendemos proyectos en todo Chile. Para regiones, evaluamos cada caso según la envergadura del proyecto. Contáctanos y te informamos la cobertura disponible para tu zona.",
  },
  {
    question: "¿Cuál es la diferencia entre ventana corredera y oscilobatiente?",
    answer:
      "La corredera se desliza lateralmente sobre un riel y es ideal cuando no hay espacio para que la ventana se proyecte. La oscilobatiente combina dos sistemas: abre lateralmente como puerta (abatible) o se inclina desde arriba (oscilante), ofreciendo mayor hermeticidad y versatilidad. El oscilobatiente tiene mayor costo pero es el sistema premium del mercado.",
  },
  {
    question: "¿Puedo elegir el color de las ventanas?",
    answer:
      "Contamos con 6 colores foliados disponibles: Blanco, Antracita Rugoso, Black Brown, Roble Dorado, Nogal y Monument Oak. Los folios son resistentes a la intemperie, a los rayos UV y no requieren pintura. También fabricamos proyectos a medida con formas no rectangulares.",
  },
  {
    question: "¿Cuánto ahorro en energía puedo esperar?",
    answer:
      "Según estudios de PVC Premium y la experiencia con nuestros clientes, el ahorro promedio en calefacción y climatización varía entre 45% y 68%, dependiendo del tipo de construcción, orientación de la vivienda y número de ventanas reemplazadas. El retorno de inversión promedio es de 4 a 7 años.",
  },
  {
    question: "¿Qué incluye la cotización?",
    answer:
      "La cotización incluye fabricación de ventanas a medida, perfiles y herrajes PVC Premium, vidrio termopanel, flete a tu domicilio e instalación profesional con sellado. No hay costos ocultos. Si necesitas obras menores de albañilería, lo indicamos por separado y puedes contratar ese servicio de forma independiente.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden hover:border-brand-blue/30 transition-colors duration-200">
      <button
        id={id}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-brand-gray-bg transition-colors duration-200 group"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="font-semibold text-brand-blue text-sm leading-snug group-hover:text-brand-blue-mid transition-colors">
          {faq.question}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
            open ? "bg-brand-blue text-white" : "bg-brand-gray-bg text-brand-gray-mid"
          }`}
          aria-hidden
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-2 bg-white">
              <p className="text-brand-gray-mid text-sm leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white" aria-label="Preguntas frecuentes">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-brand-blue/10 text-brand-blue text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="section-title mb-4">¿Tienes dudas? Aquí las resolvemos</h2>
          <p className="section-subtitle">Las preguntas más comunes de nuestros clientes antes de cotizar.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center p-8 bg-brand-gray-bg rounded-3xl"
        >
          <p className="font-semibold text-brand-blue text-lg mb-2">¿No encontraste lo que buscabas?</p>
          <p className="text-brand-gray-mid text-sm mb-6">
            Escríbenos por WhatsApp o solicita tu cotización y te respondemos a la brevedad.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=56966879910&text=Hola%2C%20tengo%20una%20pregunta%20sobre%20ventanas%20PVC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Preguntar por WhatsApp
            </a>
            <button
              onClick={() => document.querySelector("#cotizar")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-secondary text-sm px-6 py-3"
            >
              Solicitar cotización
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
