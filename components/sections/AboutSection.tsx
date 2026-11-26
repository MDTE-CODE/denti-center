import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";

import { SectionIntro } from "@/components/ui/SectionIntro";

const pillars = [
  "Atención humana",
  "Compromiso profesional",
  "Bienestar del paciente",
] as const;

export function AboutSection() {
  return (
    <section className="section about" id="nosotros">
      <div className="about-visual">
        <div className="about-photo">
          <Image
            src="/denti-clinic2.png"
            alt="Imagen de referencia de una consulta odontológica en una clínica luminosa"
            fill
            sizes="(max-width: 760px) 90vw, 48vw"
          />
        </div>

        <div className="about-caption">
          <span className="caption-mark">D.</span>
          <span>
            UN ESPACIO PARA
            <br />
            SENTIRTE EN CONFIANZA
          </span>
        </div>

        <span className="about-side-note">
          CUIDAMOS PERSONAS, NO SOLO SONRISAS
        </span>
      </div>

      <div className="about-copy">
        <SectionIntro
          eyebrow="CONÓCENOS"
          title="Más que cuidar sonrisas, cuidamos personas."
          copy="DENTI CENTER busca brindar una experiencia odontológica cercana y profesional, donde cada paciente reciba atención de acuerdo con sus necesidades."
        />

        <ul className="pillar-list">
          {pillars.map((item) => (
            <li key={item}>
              <span>
                <Check size={14} />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <a className="button button-outline" href="#contacto">
          Conoce nuestra clínica <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
