# CDC SPA – Landing Page v4.0

Landing page de alto rendimiento para **CDC SPA - Cierres de Cristal**, especialistas en ventanas PVC en Chile. Construida con Next.js 15, TypeScript, Tailwind CSS y Framer Motion.

---

## Stack Técnico

- **Next.js 15** (App Router)
- **TypeScript** – tipado estricto
- **Tailwind CSS** – diseño utility-first
- **Framer Motion** – animaciones declarativas
- **React Hook Form + Zod** – formulario con validación robusta
- **Lucide React** – iconografía limpia

---

## Instalación y Uso

### 1. Clonar e instalar

```bash
git clone <tu-repo>
cd cdc-landing
npm install
```

### 2. Ejecutar en desarrollo

```bash
npm run dev
# → http://localhost:3000
```

### 3. Build para producción

```bash
npm run build
npm start
```

---

## Estructura de Componentes

```
src/
├── app/
│   ├── layout.tsx          # Metadata SEO + fuentes
│   ├── page.tsx            # Orquestador de secciones
│   └── globals.css         # Estilos base + utilidades
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx       # Sticky, transparente → sólido
│   │   ├── Hero.tsx         # Hero con imagen de fondo + CTAs
│   │   ├── Benefits.tsx     # 6 cards de beneficios animadas
│   │   ├── WindowTypes.tsx  # Grid de 6 tipos de ventanas
│   │   ├── WhyUs.tsx        # Trust section con REHAU
│   │   ├── FormSection.tsx  # Formulario principal de cotización
│   │   ├── Testimonials.tsx # 4 testimonios con rating
│   │   ├── Gallery.tsx      # Galería de proyectos masonry
│   │   ├── FAQ.tsx          # Acordeón con 8 preguntas
│   │   └── Footer.tsx       # Footer completo con contacto
│   └── ui/
│       ├── WhatsAppFloat.tsx # Botón flotante WhatsApp
│       └── UrgencyBanner.tsx # Banner de urgencia superior
├── lib/
│   └── utils.ts             # Utilidades y constantes de contacto
└── types/
    └── index.ts             # Types TypeScript compartidos
```

---

## Configuración Antes de Publicar

### Reemplazar datos de contacto en `src/lib/utils.ts`

```typescript
export const WHATSAPP_NUMBER = "56966879910"; // ✅ Ya configurado
export const EMAIL = "ventas@cdcspa.cl";      // ✅ Ya configurado
export const PHONE_DISPLAY = "(+56 9) 6687 9910";
```

### Conectar el formulario a tu backend

En `FormSection.tsx`, reemplaza la simulación:

```typescript
// ACTUAL (simulación)
await new Promise((res) => setTimeout(res, 1800));

// REEMPLAZAR POR:
const response = await fetch("/api/cotizacion", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});
```

**Opciones de backend para leads:**
- **Formspree** (sin backend): cambia el `fetch` a `https://formspree.io/f/TU_ID`
- **Resend/SendGrid**: crea `src/app/api/cotizacion/route.ts` con envío de email
- **Google Sheets**: vía Apps Script webhook
- **CRM existente**: conecta al endpoint de tu CRM

### Imágenes de producción

Reemplaza las URLs de Unsplash en `Hero.tsx`, `WindowTypes.tsx` y `Gallery.tsx` por imágenes reales de proyectos CDC. Almacena en `/public/images/` y usa `next/image` para optimización automática:

```tsx
import Image from "next/image";
<Image src="/images/proyecto-1.jpg" alt="..." width={800} height={600} />
```

---

## Estrategia de Conversión

### Arquitectura del embudo

```
Tráfico → UrgencyBanner (urgencia inmediata)
        → Hero (gancho emocional + dato 47% energía + 2 CTAs)
        → Benefits (racionaliza la decisión)
        → WindowTypes (selección de producto)
        → WhyUs (elimina objeciones + REHAU como proof)
        → FormSection ← PUNTO DE CONVERSIÓN PRINCIPAL
        → Testimonials (prueba social post-forma)
        → Gallery (evidencia visual)
        → FAQ (elimina las últimas dudas)
        → Footer (captura de últimos interesentados)
```

### Principios implementados

| Principio | Implementación |
|-----------|----------------|
| **Urgencia suave** | Banner superior "Visita técnica gratuita" |
| **Prueba social** | 4 testimonios con nombre, lugar y proyecto específico |
| **Autoridad** | Logo REHAU, "+15 años", "+500 proyectos" |
| **Reducción de riesgo** | "Cotización gratuita", "Sin compromiso", garantía |
| **Multi-canal** | WhatsApp flotante + botón en hero + formulario + footer |
| **Urgencia** | Llamadas a acción en cada sección ("Cotiza hoy") |
| **Especificidad** | "47% de energía escapa", "ahorra hasta 68%" |

### Datos clave del formulario para calificación

- **Tipo de proyecto** → segmenta leads por tamaño/complejidad
- **Cantidad ventanas** → estima ticket promedio antes de llamar
- **Comuna** → planifica logística de visita técnica

---

## Sugerencias de Mejora (Fase 2)

1. **Google Tag Manager** – implementar conversión en submit del formulario → Google Ads + Meta Pixel
2. **Chat en vivo** – integrar Tidio o HubSpot chat como alternativa al formulario
3. **Calculadora de ahorro energético** – widget interactivo que muestra cuánto ahorran según m² y zona climática
4. **Blog/SEO** – artículos sobre "costo ventanas PVC Santiago", "ventanas con subsidio MINVU", etc.
5. **Schema Markup** – `LocalBusiness` + `Product` + `Review` JSON-LD para SEO local
6. **A/B test del CTA principal** – "Cotiza gratis" vs "Solicitar visita técnica"
7. **Video en Hero** – reemplazar imagen por video timelapse de instalación (máx 15 segundos, autoplay muted)
8. **Página de gracias** – `/gracias` con píxeles de conversión y upsell de WhatsApp
9. **Testimonios con foto real** – incrementa conversión ~15-20%
10. **Mapa de proyectos** – Google Maps con pines de instalaciones realizadas en la RM

---

## Deploy Recomendado

### Vercel (más simple)

```bash
npm i -g vercel
vercel
```

### cPanel / Tecnoinver

```bash
npm run build
# Subir carpeta .next/ + package.json + next.config.ts vía SSH/FTP
# Configurar Node.js App en cPanel con comando: npm start
```

---

## Contacto CDC SPA

- **Web:** cdcspa.cl
- **Email:** ventas@cdcspa.cl
- **WhatsApp:** +56 9 6687 9910
- **Instagram:** @iruzspa.cl
