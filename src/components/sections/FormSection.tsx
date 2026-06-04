"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Home,
  Hash,
  MessageSquare,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

const schema = z.object({
  nombre: z
    .string()
    .min(3, "Ingresa tu nombre completo")
    .max(80, "Nombre demasiado largo"),
  telefono: z
    .string()
    .min(9, "Ingresa un teléfono válido (mínimo 9 dígitos)")
    .max(15, "Teléfono inválido")
    .regex(/^[+\d\s()-]{9,15}$/, "Formato de teléfono inválido"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  comuna: z
    .string()
    .min(2, "Ingresa tu comuna o región")
    .max(60, "Demasiado largo"),
  tipoProyecto: z.string().min(1, "Selecciona el tipo de proyecto"),
  cantidadVentanas: z.string().min(1, "Selecciona la cantidad aproximada"),
  mensaje: z.string().max(500, "Máximo 500 caracteres").optional(),
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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    // Simulate API call — replace with your actual endpoint
    await new Promise((res) => setTimeout(res, 1800));
    console.log("Lead data:", data);
    setStatus("success");
    reset();
  };

  return (
    <section
      id="cotizar"
      className="py-20 md:py-28 bg-[#0F0F0F] relative overflow-hidden"
      aria-label="Formulario de cotización"
    >
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-blue/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left side info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2"
          >
            <span className="inline-block bg-brand-cta/10 text-brand-cta text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Cotización sin costo
            </span>
            <h2 className="section-title mb-5">
              Recibe tu cotización en menos de{" "}
              <span className="text-brand-cta">24 horas</span>
            </h2>
            <p className="text-brand-gray-mid leading-relaxed mb-8">
              Completa el formulario y uno de nuestros ejecutivos te contactará
              con una cotización detallada y personalizada para tu proyecto.
            </p>

            {/* Steps */}
            <ol className="space-y-5" aria-label="Proceso de cotización">
              {[
                {
                  step: "1",
                  title: "Completas el formulario",
                  desc: "Toma menos de 2 minutos",
                },
                {
                  step: "2",
                  title: "Te contactamos",
                  desc: "En menos de 24 horas hábiles",
                },
                {
                  step: "3",
                  title: "Visita técnica gratuita",
                  desc: "Medimos y asesoramos sin costo",
                },
                {
                  step: "4",
                  title: "Instalación profesional",
                  desc: "Con garantía incluida",
                },
              ].map((item) => (
                <li key={item.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-blue text-sm">
                      {item.title}
                    </p>
                    <p className="text-brand-gray-light text-xs">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* WhatsApp shortcut */}
            <div className="mt-10 p-5 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl">
              <p className="text-brand-gray font-semibold text-sm mb-3">
                ¿Prefieres hablar directo?
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1da851] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors duration-200"
                aria-label="Contactar por WhatsApp ahora"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.522 5.848L0 24l6.343-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.782 9.782 0 01-5.021-1.382l-.36-.214-3.767.888.944-3.67-.234-.376A9.782 9.782 0 012.182 12C2.182 6.568 6.568 2.182 12 2.182S21.818 6.568 21.818 12 17.432 21.818 12 21.818z" />
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
            <div className="bg-white rounded-3xl shadow-card-hover p-6 md:p-10 border border-gray-100">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center text-center py-12 gap-5"
                  >
                    <div className="w-20 h-20 bg-brand-accent/10 rounded-full flex items-center justify-center">
                      <CheckCircle2
                        size={40}
                        className="text-brand-accent"
                        aria-hidden
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-blue">
                      ¡Tu cotización fue enviada!
                    </h3>
                    <p className="text-brand-gray-mid leading-relaxed max-w-sm">
                      Un ejecutivo CDC te contactará en las próximas{" "}
                      <strong>24 horas hábiles</strong> con tu cotización
                      personalizada.
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      También escríbenos por WhatsApp
                    </a>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-brand-gray-light text-sm underline underline-offset-2 hover:text-brand-blue transition-colors"
                    >
                      Enviar otra consulta
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    aria-label="Formulario de cotización CDC SPA"
                    className="space-y-5"
                  >
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-brand-blue">
                        Solicita tu cotización gratuita
                      </h3>
                      <p className="text-brand-gray-light text-sm mt-1">
                        Todos los campos marcados son obligatorios
                      </p>
                    </div>

                    {/* Row 1: Nombre + Teléfono */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nombre" className="label-field">
                          <span className="flex items-center gap-1.5">
                            <User size={13} aria-hidden /> Nombre completo *
                          </span>
                        </label>
                        <input
                          id="nombre"
                          type="text"
                          autoComplete="name"
                          placeholder="Ej: María González"
                          {...register("nombre")}
                          className={`input-field ${errors.nombre ? "input-error" : ""}`}
                          aria-invalid={!!errors.nombre}
                          aria-describedby={errors.nombre ? "nombre-error" : undefined}
                        />
                        {errors.nombre && (
                          <p id="nombre-error" className="text-red-500 text-xs mt-1" role="alert">
                            {errors.nombre.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="telefono" className="label-field">
                          <span className="flex items-center gap-1.5">
                            <Phone size={13} aria-hidden /> Teléfono / WhatsApp *
                          </span>
                        </label>
                        <input
                          id="telefono"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+56 9 XXXX XXXX"
                          {...register("telefono")}
                          className={`input-field ${errors.telefono ? "input-error" : ""}`}
                          aria-invalid={!!errors.telefono}
                          aria-describedby={errors.telefono ? "telefono-error" : undefined}
                        />
                        {errors.telefono && (
                          <p id="telefono-error" className="text-red-500 text-xs mt-1" role="alert">
                            {errors.telefono.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Email + Comuna */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="label-field">
                          <span className="flex items-center gap-1.5">
                            <Mail size={13} aria-hidden /> Correo electrónico *
                          </span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          autoComplete="email"
                          placeholder="correo@ejemplo.cl"
                          {...register("email")}
                          className={`input-field ${errors.email ? "input-error" : ""}`}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="comuna" className="label-field">
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} aria-hidden /> Comuna / Región *
                          </span>
                        </label>
                        <input
                          id="comuna"
                          type="text"
                          autoComplete="address-level2"
                          placeholder="Ej: Las Condes, Santiago"
                          {...register("comuna")}
                          className={`input-field ${errors.comuna ? "input-error" : ""}`}
                          aria-invalid={!!errors.comuna}
                          aria-describedby={errors.comuna ? "comuna-error" : undefined}
                        />
                        {errors.comuna && (
                          <p id="comuna-error" className="text-red-500 text-xs mt-1" role="alert">
                            {errors.comuna.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 3: Tipo proyecto + Cantidad */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="tipoProyecto" className="label-field">
                          <span className="flex items-center gap-1.5">
                            <Home size={13} aria-hidden /> Tipo de proyecto *
                          </span>
                        </label>
                        <select
                          id="tipoProyecto"
                          {...register("tipoProyecto")}
                          defaultValue=""
                          className={`input-field ${errors.tipoProyecto ? "input-error" : ""}`}
                          aria-invalid={!!errors.tipoProyecto}
                          aria-describedby={errors.tipoProyecto ? "tipo-error" : undefined}
                        >
                          <option value="" disabled>
                            Selecciona una opción
                          </option>
                          {tiposProyecto.map((tipo) => (
                            <option key={tipo} value={tipo}>
                              {tipo}
                            </option>
                          ))}
                        </select>
                        {errors.tipoProyecto && (
                          <p id="tipo-error" className="text-red-500 text-xs mt-1" role="alert">
                            {errors.tipoProyecto.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="cantidadVentanas" className="label-field">
                          <span className="flex items-center gap-1.5">
                            <Hash size={13} aria-hidden /> ¿Cuántas ventanas? *
                          </span>
                        </label>
                        <select
                          id="cantidadVentanas"
                          {...register("cantidadVentanas")}
                          defaultValue=""
                          className={`input-field ${errors.cantidadVentanas ? "input-error" : ""}`}
                          aria-invalid={!!errors.cantidadVentanas}
                          aria-describedby={errors.cantidadVentanas ? "cantidad-error" : undefined}
                        >
                          <option value="" disabled>
                            Selecciona una opción
                          </option>
                          {cantidadesVentanas.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                        {errors.cantidadVentanas && (
                          <p id="cantidad-error" className="text-red-500 text-xs mt-1" role="alert">
                            {errors.cantidadVentanas.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Mensaje */}
                    <div>
                      <label htmlFor="mensaje" className="label-field">
                        <span className="flex items-center gap-1.5">
                          <MessageSquare size={13} aria-hidden />
                          Mensaje adicional{" "}
                          <span className="text-brand-gray-light font-normal">
                            (opcional)
                          </span>
                        </span>
                      </label>
                      <textarea
                        id="mensaje"
                        rows={3}
                        placeholder="Cuéntanos más sobre tu proyecto, medidas aproximadas, consultas específicas..."
                        {...register("mensaje")}
                        className={`input-field resize-none ${errors.mensaje ? "input-error" : ""}`}
                      />
                      {errors.mensaje && (
                        <p className="text-red-500 text-xs mt-1" role="alert">
                          {errors.mensaje.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                      aria-label="Enviar solicitud de cotización"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={20} className="animate-spin" aria-hidden />
                          Enviando cotización...
                        </>
                      ) : (
                        <>
                          <Send size={18} aria-hidden />
                          Enviar solicitud de cotización
                        </>
                      )}
                    </button>

                    <p className="text-brand-gray-light text-xs text-center leading-relaxed">
                      Al enviar, aceptas que un ejecutivo CDC te contacte para
                      entregar tu cotización. No compartimos tu información con
                      terceros.
                    </p>
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
