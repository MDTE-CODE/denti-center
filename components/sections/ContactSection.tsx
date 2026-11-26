import {
  ArrowUpRight,
  AtSign,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { SectionIntro } from "@/components/ui/SectionIntro";
import { getWhatsAppUrl, isWhatsAppConfigured } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

const MAP_COORDINATES = "7.058514152916294, -73.85426852770937";

const MAP_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_COORDINATES}`;

const MAP_EMBED_URL = `https://maps.google.com/maps?q=${MAP_COORDINATES}&z=17&output=embed`;

export function ContactSection() {
  const whatsappUrl = getWhatsAppUrl();
  const whatsappConfigured = isWhatsAppConfigured();

  return (
    <section className="section contact" id="contacto">
      <div className="contact-heading">
        <SectionIntro
          eyebrow="VISÍTANOS"
          title="Estamos cerca de ti."
          copy="Visítanos en Barrancabermeja y conoce DENTI CENTER."
        />

        <span className="contact-coordinate">
          {siteConfig.city.toUpperCase()}
          <br />
          {siteConfig.department.toUpperCase()} · COLOMBIA
        </span>
      </div>

      <div className="contact-grid">
        <div className="contact-details">
          <span className="contact-label">INFORMACIÓN DE CONTACTO</span>

          <div className="contact-row">
            <MapPin />
            <div>
              <strong>Dirección</strong>
              <p>
                {siteConfig.contact.address || "Cra. 24 #47-71"}
                <br />
                {siteConfig.city}, {siteConfig.department}
              </p>
            </div>
          </div>

          <div className="contact-row">
            <Phone />
            <div>
              <strong>Teléfono y WhatsApp</strong>
              <p>
                <a href={whatsappUrl}>
                  {whatsappConfigured
                    ? siteConfig.contact.whatsapp
                    : "Número de contacto pendiente"}
                </a>
                {!whatsappConfigured && (
                  <span className="pending">
                    Agregar el número oficial de la clínica antes de publicar.
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="contact-row">
            <Clock3 />
            <div>
              <strong>Horarios de atención</strong>
              <p>
                Lunes a viernes de 7:00 a. m. a 7:00 p. m.; sábados de 8:00 a.
                m. a 12:00 p. m.
              </p>
            </div>
          </div>

          <div className="contact-row">
            <Mail />
            <div>
              <strong>Correo electrónico</strong>
              <p>
                {siteConfig.contact.email ||
                  "Dirección de correo pendiente de confirmar"}
              </p>
            </div>
          </div>

          <div className="contact-row">
            <AtSign />
            <div>
              <strong>Redes sociales</strong>
              <p>
                <a href="https://www.facebook.com/p/Denti-Center-oficial-100063611918954/">
                  Facebook
                </a>
              </p>
            </div>
          </div>

          <a
            className="button button-outline contact-button"
            href={MAP_URL}
            target="_blank"
            rel="noreferrer"
          >
            Cómo llegar <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="map-frame">
          <iframe
            title="Mapa de referencia de Barrancabermeja, Santander"
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="map-label">
            <span>
              <MapPin size={15} />
            </span>

            <div>
              <strong>Ubicación de referencia</strong>
              <small>Barrancabermeja · Santander</small>
            </div>
          </div>

          <a
            className="map-open"
            href={MAP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir mapa en Google Maps"
          >
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
