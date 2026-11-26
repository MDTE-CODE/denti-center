import {
  HeartHandshake,
  BadgeCheck,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";

const trustItems = [
  {
    icon: HeartHandshake,
    title: "Atención personalizada",
    description: "Cercanía en cada visita",
  },
  {
    icon: BadgeCheck,
    title: "Profesionales capacitados",
    description: "Compromiso con tu bienestar",
  },
  {
    icon: Stethoscope,
    title: "Atención integral",
    description: "Opciones para cada etapa",
  },
  {
    icon: ShieldCheck,
    title: "Salud oral primero",
    description: "Cuidado con responsabilidad",
  },
] as const;

export function TrustSection() {
  return (
    <section className="trust" id="confianza">
      <div className="trust-inner">
        {trustItems.map(({ icon: Icon, title, description }, index) => (
          <article className="trust-item" key={title}>
            <span className="trust-number">0{index + 1}</span>

            <Icon size={23} strokeWidth={1.55} />

            <div>
              <h3 className="text-[10px]">{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
