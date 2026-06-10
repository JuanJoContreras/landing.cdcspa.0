export const metadata = {
  title: "Política de Privacidad | CDC SPA",
  robots: { index: false, follow: true },
};

export default function PoliticaPrivacidad() {
  return (
    <main className="bg-[#0f172a] min-h-screen text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <a
          href="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-10 transition-colors"
        >
          ← Volver al sitio
        </a>

        <h1 className="text-3xl font-bold text-white mb-2">Política de Privacidad</h1>
        <p className="text-white/40 text-sm mb-10">Última actualización: 9 de junio de 2026</p>

        <div className="space-y-8 text-white/70 text-sm leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-base mb-2">Responsable del tratamiento</h2>
            <p>CDC SPA – Cierres de Cristal, dominio <a href="https://cdcspa.cl" className="text-[#EA580C] hover:underline">cdcspa.cl</a>, correo <a href="mailto:ventas@cdcspa.cl" className="text-[#EA580C] hover:underline">ventas@cdcspa.cl</a>, teléfono (+56 9) 6687 9910, Santiago, Chile.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-2">Datos que recopilamos</h2>
            <p>A través de los formularios del sitio recopilamos nombre completo, correo electrónico, teléfono, región, comuna y descripción del proyecto. Mediante cookies de terceros (Google Analytics, Google Tag Manager y Meta Pixel) recopilamos datos de navegación como páginas visitadas, tiempo en el sitio y origen del tráfico.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-2">Finalidad del tratamiento</h2>
            <p>Los datos personales se utilizan exclusivamente para contactarte y entregar una cotización personalizada. Los datos de navegación se utilizan para analizar el rendimiento del sitio y mejorar la experiencia del usuario. No vendemos ni cedemos tus datos a terceros con fines comerciales.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-2">Base legal</h2>
            <p>El tratamiento se realiza conforme a la Ley N° 19.628 sobre Protección de la Vida Privada de Chile, con el consentimiento del titular al completar el formulario de contacto.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-2">Conservación de datos</h2>
            <p>Los datos se conservan por el tiempo necesario para gestionar tu solicitud y hasta por 2 años para fines de seguimiento comercial, salvo que solicites su eliminación antes.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-2">Derechos del titular (ARCO)</h2>
            <p>Tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales. Para ejercerlos escribe a <a href="mailto:ventas@cdcspa.cl" className="text-[#EA580C] hover:underline">ventas@cdcspa.cl</a> indicando tu nombre y solicitud. Responderemos en un plazo máximo de 5 días hábiles.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-2">Cookies de terceros</h2>
            <p>Este sitio utiliza Google Analytics (GA4) vía Google Tag Manager para medir el tráfico, y Meta Pixel para medir el rendimiento de campañas publicitarias. Ambos servicios pueden transferir datos a servidores fuera de Chile. Puedes configurar tu navegador para bloquear estas cookies en cualquier momento.</p>
          </section>

        </div>

        <p className="text-white/20 text-xs mt-16">CDC SPA © {new Date().getFullYear()} — Santiago, Chile</p>
      </div>
    </main>
  );
}
