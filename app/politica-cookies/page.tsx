import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politica de Cookies",
  description:
    "Politica de cookies de ValerIA del grupo Ecosistia. Informacion sobre las cookies que utilizamos y como gestionarlas.",
}

export default function PoliticaCookiesPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Legal</p>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
          Politica de Cookies
        </h1>
        <p className="mt-4 text-muted-foreground">
          Ultima actualizacion: 11 de febrero de 2026
        </p>

        <div className="mt-10 flex flex-col gap-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-foreground">1. Que son las cookies</h2>
            <p className="mt-2">
              Las cookies son pequenos archivos de texto que se almacenan en tu dispositivo (ordenador, tablet
              o movil) cuando visitas un sitio web. Sirven para que el sitio recuerde informacion sobre tu
              visita, como tu idioma preferido o tus preferencias de navegacion, lo que facilita tu proxima
              visita y hace que el sitio sea mas util para ti.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">2. Tipos de cookies que utilizamos</h2>

            <div className="mt-4">
              <h3 className="font-semibold text-foreground">Cookies estrictamente necesarias</h3>
              <p className="mt-1">
                Son esenciales para que el sitio web funcione correctamente. Permiten la navegacion basica
                y el acceso a areas seguras del sitio. Sin estas cookies, el sitio no puede funcionar
                correctamente. No requieren consentimiento.
              </p>
              <div className="mt-3 overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-4 py-2 text-left font-semibold text-foreground">Cookie</th>
                      <th className="px-4 py-2 text-left font-semibold text-foreground">Finalidad</th>
                      <th className="px-4 py-2 text-left font-semibold text-foreground">Duracion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-4 py-2 font-mono text-xs">cookie_consent</td>
                      <td className="px-4 py-2">Almacena tu preferencia de aceptacion de cookies</td>
                      <td className="px-4 py-2">365 dias</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-foreground">Cookies analiticas</h3>
              <p className="mt-1">
                Nos permiten conocer como interactuan los usuarios con el sitio web, recopilando informacion
                de forma anonima. Nos ayudan a mejorar la experiencia del usuario y el rendimiento del sitio.
                Solo se activan si aceptas las cookies.
              </p>
              <div className="mt-3 overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-4 py-2 text-left font-semibold text-foreground">Cookie</th>
                      <th className="px-4 py-2 text-left font-semibold text-foreground">Proveedor</th>
                      <th className="px-4 py-2 text-left font-semibold text-foreground">Finalidad</th>
                      <th className="px-4 py-2 text-left font-semibold text-foreground">Duracion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-4 py-2 font-mono text-xs">_va</td>
                      <td className="px-4 py-2">Vercel Analytics</td>
                      <td className="px-4 py-2">Medir el rendimiento y uso del sitio web</td>
                      <td className="px-4 py-2">Sesion</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">3. Como gestionar las cookies</h2>
            <p className="mt-2">
              Puedes configurar tus preferencias de cookies en cualquier momento mediante el banner de cookies
              que aparece al visitar nuestro sitio por primera vez. Tambien puedes gestionar las cookies
              directamente desde la configuracion de tu navegador:
            </p>
            <ul className="mt-2 flex flex-col gap-1 list-disc pl-6">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Microsoft Edge</a></li>
            </ul>
            <p className="mt-2">
              Ten en cuenta que deshabilitar ciertas cookies puede afectar a la funcionalidad del sitio web.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">4. Transferencias internacionales</h2>
            <p className="mt-2">
              Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio Economico Europeo.
              En estos casos, nos aseguramos de que existan garantias adecuadas para la proteccion de tus datos,
              como clausulas contractuales tipo aprobadas por la Comision Europea.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">5. Actualizaciones</h2>
            <p className="mt-2">
              Esta politica de cookies puede actualizarse periodicamente para reflejar cambios en las cookies
              que utilizamos o por motivos legales. Te recomendamos revisarla periodicamente. Cualquier cambio
              sera publicado en esta misma pagina.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">6. Contacto</h2>
            <p className="mt-2">
              Si tienes alguna pregunta sobre nuestra politica de cookies, puedes contactarnos en{" "}
              <a href="mailto:hola@softwareopium.com" className="text-accent hover:underline">hola@softwareopium.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
