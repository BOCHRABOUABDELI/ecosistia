import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politica de Privacidad",
  description:
    "Politica de privacidad de ValerIA del grupo Ecosistia. Informacion sobre como tratamos tus datos personales conforme al RGPD.",
}

export default function PoliticaPrivacidadPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Legal</p>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
          Politica de Privacidad
        </h1>
        <p className="mt-4 text-muted-foreground">
          Ultima actualizacion: 11 de febrero de 2026
        </p>

        <div className="mt-10 flex flex-col gap-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-foreground">1. Responsable del tratamiento</h2>
            <p className="mt-2">
              El responsable del tratamiento de tus datos personales es ValerIA del grupo Ecosistia
              (en adelante, &quot;ValerIA&quot;), con domicilio social en Espana.
              Puedes contactarnos en <a href="mailto:hola@softwareopium.com" className="text-accent hover:underline">hola@softwareopium.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">2. Datos que recopilamos</h2>
            <p className="mt-2">Recopilamos los siguientes datos personales:</p>
            <ul className="mt-2 flex flex-col gap-1 list-disc pl-6">
              <li><strong className="text-foreground">Datos de contacto:</strong> nombre, email, telefono y empresa, proporcionados voluntariamente a traves del formulario de contacto.</li>
              <li><strong className="text-foreground">Datos de navegacion:</strong> direccion IP, tipo de navegador, paginas visitadas, tiempo de permanencia y otros datos recopilados automaticamente mediante cookies.</li>
              <li><strong className="text-foreground">Datos de comunicacion:</strong> contenido de los mensajes que nos envias a traves del formulario o por email.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">3. Finalidad del tratamiento</h2>
            <p className="mt-2">Tratamos tus datos personales para las siguientes finalidades:</p>
            <ul className="mt-2 flex flex-col gap-1 list-disc pl-6">
              <li>Gestionar y responder a las solicitudes de contacto y consultas sobre nuestros servicios.</li>
              <li>Enviarte informacion relacionada con tu consulta, incluyendo propuestas y presupuestos.</li>
              <li>Mejorar nuestro sitio web y la experiencia del usuario mediante el analisis de datos de navegacion.</li>
              <li>Cumplir con las obligaciones legales aplicables.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">4. Base juridica del tratamiento</h2>
            <p className="mt-2">
              El tratamiento de tus datos se basa en tu consentimiento expreso, que otorgas al marcar la casilla
              de aceptacion de esta politica en el formulario de contacto. Para datos de navegacion, la base juridica
              es nuestro interes legitimo en mejorar nuestros servicios, o tu consentimiento cuando se trata de
              cookies no esenciales.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">5. Destinatarios de los datos</h2>
            <p className="mt-2">
              Tus datos podran ser comunicados a los siguientes terceros para la correcta prestacion del servicio:
            </p>
            <ul className="mt-2 flex flex-col gap-1 list-disc pl-6">
              <li><strong className="text-foreground">Resend:</strong> proveedor de envio de email transaccional, para enviarte la confirmacion de tu consulta.</li>
              <li><strong className="text-foreground">Vercel:</strong> proveedor de alojamiento web donde se ejecuta nuestro sitio.</li>
            </ul>
            <p className="mt-2">
              No vendemos, alquilamos ni compartimos tus datos personales con terceros con fines comerciales.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">6. Conservacion de los datos</h2>
            <p className="mt-2">
              Conservaremos tus datos personales durante el tiempo necesario para la finalidad para la que fueron
              recogidos y para cumplir con las obligaciones legales. Los datos del formulario de contacto se
              conservaran durante un maximo de 12 meses desde la ultima comunicacion.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">7. Derechos del usuario</h2>
            <p className="mt-2">
              Conforme al Reglamento General de Proteccion de Datos (RGPD), tienes derecho a:
            </p>
            <ul className="mt-2 flex flex-col gap-1 list-disc pl-6">
              <li><strong className="text-foreground">Acceso:</strong> solicitar una copia de tus datos personales.</li>
              <li><strong className="text-foreground">Rectificacion:</strong> corregir datos inexactos o incompletos.</li>
              <li><strong className="text-foreground">Supresion:</strong> solicitar la eliminacion de tus datos.</li>
              <li><strong className="text-foreground">Limitacion:</strong> solicitar la restriccion del tratamiento.</li>
              <li><strong className="text-foreground">Portabilidad:</strong> recibir tus datos en un formato estructurado.</li>
              <li><strong className="text-foreground">Oposicion:</strong> oponerte al tratamiento de tus datos.</li>
            </ul>
            <p className="mt-2">
              Para ejercer tus derechos, puedes escribirnos a{" "}
              <a href="mailto:hola@softwareopium.com" className="text-accent hover:underline">hola@softwareopium.com</a>.
              Tambien puedes presentar una reclamacion ante la Agencia Espanola de Proteccion de Datos (AEPD).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">8. Seguridad</h2>
            <p className="mt-2">
              Adoptamos medidas tecnicas y organizativas adecuadas para proteger tus datos personales contra
              el acceso no autorizado, la alteracion, la divulgacion o la destruccion. Nuestro sitio web utiliza
              cifrado HTTPS y nuestros proveedores cumplen con los estandares de seguridad de la industria.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">9. Cambios en esta politica</h2>
            <p className="mt-2">
              Nos reservamos el derecho a modificar esta politica de privacidad en cualquier momento.
              Los cambios seran publicados en esta misma pagina con la fecha de ultima actualizacion.
              Te recomendamos revisarla periodicamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
