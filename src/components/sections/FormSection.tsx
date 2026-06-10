"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, Mail, MapPin, Home, Hash, MessageSquare, Send, CheckCircle2, Loader2 } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

const schema = z.object({
  nombre: z.string().min(3, "Ingresa tu nombre completo").max(80),
  telefono: z.string().min(9, "Ingresa un teléfono válido").max(15).regex(/^[+\d\s()-]{9,15}$/, "Formato inválido"),
  email: z.string().email("Ingresa un correo válido"),
  comuna: z.string().min(2, "Ingresa tu comuna").max(60),
  tipoProyecto: z.string().min(1, "Selecciona el tipo de proyecto"),
  cantidadVentanas: z.string().min(1, "Selecciona la cantidad"),
  mensaje: z.string().max(500).optional(),
});

type FormValues = z.infer<typeof schema>;

const tiposProyecto = [
  "Reemplazo de ventanas existentes",
  "Obra nueva (casa o departamento)",
  "Local comercial u oficina",
  "Edificio o proyecto inmobiliario",
  "Ampliación o remodelación",
  "Otro",
];

const cantidadesVentanas = [
  "1 a 3 ventanas",
  "4 a 6 ventanas",
  "7 a 10 ventanas",
  "11 a 20 ventanas",
  "Más de 20 ventanas",
  "No lo sé aún",
];

export function FormSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    await new Promise((res) => setTimeout(res, 1800));
    console.log("Lead:", data);
    setStatus("success");
    reset();
  };

  return (
    <section id="cotizar" className="py-20 md:py-28 bg-[#F5F5F7] relative overflow-hidden" aria-label="Formulario de cotización">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2"
          >
            <span className="inline-block border border-[#EA580C]/30 text-[#EA580C] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Cotización sin costo
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A3C5E] leading-tight mb-5">
              Recibe tu cotización en menos de{" "}
              <span className="text-[#EA580C]">24 horas</span>
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-8 text-sm">
              Completa el formulario y uno de nuestros ejecutivos te contactará con una cotización detallada y personalizada para tu proyecto.
            </p>

            <ol className="space-y-5">
              {[
                { step: "1", title: "Completas el formulario", desc: "Toma menos de 2 minutos" },
                { step: "2", title: "Te contactamos", desc: "En menos de 24 horas hábiles" },
                { step: "3", title: "Rectificación de medidas", desc: "Al firmar contrato medimos cada vano con precisión" },
                { step: "4", title: "Instalación profesional", desc: "Con garantía incluida" },
              ].map((item) => (
                <li key={item.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#1A3C5E] text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A3C5E] text-sm">{item.title}</p>
                    <p className="text-[#8A8A8E] text-xs">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 p-5 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl">
              <p className="text-[#1A3C5E] font-semibold text-sm mb-3">¿Prefieres hablar directo?</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.522 5.848L0 24l6.343-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
                Escríbenos ahora por WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(26,60,94,0.12)] p-6 md:p-10">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-12 gap-5"
                  >
                    <div className="w-20 h-20 bg-green-400/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 size={40} className="text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A3C5E]">¡Cotización enviada!</h3>
                    <p className="text-[#4A4A4A] leading-relaxed max-w-sm text-sm">
                      Un ejecutivo CDC te contactará en las próximas <strong>24 horas hábiles</strong>.
                    </p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full text-sm">
                      También escríbenos por WhatsApp
                    </a>
                    <button onClick={() => setStatus("idle")} className="text-[#8A8A8E] text-sm underline">
                      Enviar otra consulta
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-[#1A3C5E]">Solicita tu cotización gratuita</h3>
                      <p className="text-[#8A8A8E] text-xs mt-1">Todos los campos marcados son obligatorios</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nombre" className="label-field">
                          <span className="flex items-center gap-1.5"><User size={12} aria-hidden /> Nombre completo *</span>
                        </label>
                        <input id="nombre" type="text" placeholder="Ej: María González"
                          {...register("nombre")}
                          className={`input-field ${errors.nombre ? "input-error" : ""}`} />
                        {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="telefono" className="label-field">
                          <span className="flex items-center gap-1.5"><Phone size={12} aria-hidden /> Teléfono / WhatsApp *</span>
                        </label>
                        <input id="telefono" type="tel" placeholder="+56 9 XXXX XXXX"
                          {...register("telefono")}
                          className={`input-field ${errors.telefono ? "input-error" : ""}`} />
                        {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono.message}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="label-field">
                          <span className="flex items-center gap-1.5"><Mail size={12} aria-hidden /> Correo electrónico *</span>
                        </label>
                        <input id="email" type="email" placeholder="correo@ejemplo.cl"
                          {...register("email")}
                          className={`input-field ${errors.email ? "input-error" : ""}`} />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="comuna" className="label-field">
                          <span className="flex items-center gap-1.5"><MapPin size={12} aria-hidden /> Comuna / Región *</span>
                        </label>
                        <input id="comuna" type="text" placeholder="Ej: Las Condes, Santiago"
                          {...register("comuna")}
                          className={`input-field ${errors.comuna ? "input-error" : ""}`} />
                        {errors.comuna && <p className="text-red-500 text-xs mt-1">{errors.comuna.message}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="tipoProyecto" className="label-field">
                          <span className="flex items-center gap-1.5"><Home size={12} aria-hidden /> Tipo de proyecto *</span>
                        </label>
                        <select id="tipoProyecto" {...register("tipoProyecto")} defaultValue=""
                          className={`input-field ${errors.tipoProyecto ? "input-error" : ""}`}>
                          <option value="" disabled>Selecciona una opción</option>
                          {tiposProyecto.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                        {errors.tipoProyecto && <p className="text-red-500 text-xs mt-1">{errors.tipoProyecto.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="cantidadVentanas" className="label-field">
                          <span className="flex items-center gap-1.5"><Hash size={12} aria-hidden /> ¿Cuántas ventanas? *</span>
                        </label>
                        <select id="cantidadVentanas" {...register("cantidadVentanas")} defaultValue=""
                          className={`input-field ${errors.cantidadVentanas ? "input-error" : ""}`}>
                          <option value="" disabled>Selecciona una opción</option>
                          {cantidadesVentanas.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                        {errors.cantidadVentanas && <p className="text-red-500 text-xs mt-1">{errors.cantidadVentanas.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="label-field">
                        <span className="flex items-center gap-1.5"><MessageSquare size={12} aria-hidden /> Mensaje adicional <span className="text-[#8A8A8E] font-normal">(opcional)</span></span>
                      </label>
                      <textarea id="mensaje" rows={3} placeholder="Cuéntanos más sobre tu proyecto..."
                        {...register("mensaje")}
                        className="input-field resize-none" />
                    </div>

                    <button type="submit" disabled={status === "loading"}
                      className="w-full btn-primary justify-center font-bold py-4 rounded-full transition-all disabled:opacity-60 text-base mt-2">
                      {status === "loading" ? (
                        <><Loader2 size={20} className="animate-spin" /> Enviando...</>
                      ) : (
                        <><Send size={18} /> Enviar solicitud de cotización</>
                      )}
                    </button>
                    <p className="text-[#8A8A8E] text-xs text-center">Sin compromiso · Respuesta a la brevedad</p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
