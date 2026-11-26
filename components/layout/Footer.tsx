import { ArrowUpRight, MapPin } from "lucide-react";

import { Brand } from "@/components/ui/Brand";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Brand inverse />

          <p>
            Atención odontológica cercana y profesional para acompañarte en el
            cuidado de tu sonrisa.
          </p>

          <span className="footer-city">
            <MapPin size={14} />
            {siteConfig.city}, {siteConfig.department}
          </span>
        </div>

        <div className="footer-column">
          <h3>Explora</h3>
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#especialistas">Especialistas</a>
        </div>

        <div className="footer-column">
          <h3>Información</h3>
          <a href="#contacto">Contacto</a>
          <a href="#contacto">Cómo llegar</a>
          <a href="#preguntas">Preguntas frecuentes</a>
          <a href="#privacidad">Tratamiento de datos</a>
        </div>

        <div className="footer-note">
          <span className="eyebrow eyebrow-light">DENTI CENTER</span>

          <p>
            Para su mejor
            <br />
            <em>sonrisa.</em>
          </p>

          <a href="#agendar">
            Hablemos de tu sonrisa <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} DENTI CENTER · Contenido demostrativo
        </span>

        <a id="privacidad" href="#privacidad">
          Política de privacidad <ArrowUpRight size={12} />
        </a>

        <span>Hecho con cuidado en {siteConfig.city}</span>
      </div>
    </footer>
  );
}
