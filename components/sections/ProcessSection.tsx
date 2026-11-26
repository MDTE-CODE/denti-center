import {
  CalendarDays,
  Stethoscope,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";

import { SectionIntro } from "@/components/ui/SectionIntro";

const steps = [
  {
    icon: CalendarDays,
    title: "Agenda tu cita",
    text: "Comunícate con nuestro equipo y cuéntanos cómo podemos ayudarte.",
  },
  {
    icon: Stethoscope,
    title: "Realiza tu valoración",
    text: "Un profesional conocerá tus necesidades y resolverá tus dudas.",
  },
  {
    icon: BadgeCheck,
    title: "Conoce tu plan",
    text: "Recibe orientación sobre las alternativas para tu cuidado.",
  },
  {
    icon: HeartHandshake,
    title: "Recibe seguimiento",
    text: "Continúa tu proceso con acompañamiento cercano.",
  },
] as const;

export function ProcessSection() {
  return (
    <section className="section process">
      <SectionIntro
        center
        eyebrow="ASÍ DE SENCILLO"
        title="Comenzar a cuidar tu sonrisa es sencillo."
      />

      <div className="process-grid">
        {steps.map(({ icon: Icon, title, text }, index) => (
          <article className="process-step" key={title}>
            <div className="step-top">
              <span>0{index + 1}</span>
              <Icon size={24} />
            </div>

            {index < steps.length - 1 && <span className="step-connector" />}

            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
