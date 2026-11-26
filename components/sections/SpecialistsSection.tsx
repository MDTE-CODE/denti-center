import Image from "next/image";
import { UsersRound } from "lucide-react";

import { SectionIntro } from "@/components/ui/SectionIntro";

export function SpecialistsSection() {
  return (
    <section className="section specialists" id="especialistas">
      <SectionIntro
        center
        eyebrow="NUESTRO EQUIPO"
        title="Profesionales comprometidos con tu sonrisa."
        copy="Un equipo que pone a las personas en el centro de cada consulta."
      />

      <div className="specialist-card">
        <div className="specialist-photo">
          <Image
            src="/dentic-professional.png"
            alt="Fotografía ilustrativa de atención profesional en consultorio"
            fill
            sizes="(max-width: 650px) 90vw, 36vw"
          />
        </div>

        <div className="specialist-details">
          <h3>Tu próximo especialista</h3>

          <p>Juan David Alvarino, Odontologo General.</p>

          <div className="specialist-rule" />

          <span className="specialist-foot">
            <UsersRound size={16} />
            Conoce al equipo DENTI CENTER
          </span>
        </div>

        <div className="specialist-side">
          DC <span>01 / 01</span>
        </div>
      </div>
    </section>
  );
}
