import { ArrowRight, ArrowUpRight } from "lucide-react";

import { getWhatsAppUrl, isWhatsAppConfigured } from "@/lib/whatsapp";

export function BookingSection() {
  const whatsappUrl = getWhatsAppUrl();
  const whatsappConfigured = isWhatsAppConfigured();

  return (
    <section className="booking" id="agendar">
      <div className="booking-deco">D.</div>

      <div className="booking-content">
        <span className="eyebrow eyebrow-light">TU BIENESTAR EMPIEZA AQUÍ</span>

        <h2>
          Tu próxima sonrisa
          <br />
          comienza con una cita.
        </h2>

        <p>Estamos listos para acompañarte en el cuidado de tu salud oral.</p>

        <div className="booking-actions">
          <a
            href={whatsappUrl}
            className="button button-white"
            target={whatsappConfigured ? "_blank" : undefined}
            rel={whatsappConfigured ? "noreferrer" : undefined}
          >
            Agendar mi cita <ArrowUpRight size={16} />
          </a>

          <a
            href={whatsappUrl}
            className="booking-whatsapp"
            target={whatsappConfigured ? "_blank" : undefined}
            rel={whatsappConfigured ? "noreferrer" : undefined}
          >
            Contactar por WhatsApp <ArrowRight size={15} />
          </a>
        </div>

        {!whatsappConfigured && (
          <span className="booking-disclaimer">
            WhatsApp pendiente de configuración con el número oficial
          </span>
        )}
      </div>

      <div className="booking-orb" />
    </section>
  );
}
