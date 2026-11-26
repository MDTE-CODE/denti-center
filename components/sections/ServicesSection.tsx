import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/data/services";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function ServicesSection() {
  return (
    <section className="section services" id="servicios">
      <div className="section-top">
        <SectionIntro
          eyebrow="NUESTROS SERVICIOS"
          title="Todo lo que necesitas para cuidar tu sonrisa."
          copy="Conoce nuestras alternativas de atención odontológica."
        />

        <a className="text-link desktop-only" href="#contacto">
          Consulta disponibilidad <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="services-grid">
        {services.map(({ title, text, icon: Icon, image, tag }, index) => (
          <article className="service-card" key={title}>
            <div className="service-image">
              <Image
                src={image}
                alt={`Imagen ilustrativa relacionada con ${title.toLowerCase()}`}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
              />

              <span className="service-tag">{tag}</span>
              <span className="service-number">0{index + 1}</span>
            </div>

            <div className="service-info">
              <div>
                <span className="service-icon">
                  <Icon size={18} />
                </span>

                <h3>{title}</h3>
                <p>{text}</p>

                <a href="#contacto" className="service-link">
                  Conocer tratamiento <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
