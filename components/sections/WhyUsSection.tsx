import {
  HeartHandshake,
  BadgeCheck,
  Microscope,
  UsersRound,
} from "lucide-react";

const items = [
  {
    icon: HeartHandshake,
    title: "Atención personalizada",
    text: "Un espacio para escuchar y atender tus necesidades.",
  },
  {
    icon: BadgeCheck,
    title: "Profesionales capacitados",
    text: "Atención comprometida con el bienestar del paciente.",
  },
  {
    icon: Microscope,
    title: "Tecnología odontológica",
    text: "Información de equipos y tecnología pendiente de confirmación.",
  },
  {
    icon: UsersRound,
    title: "Acompañamiento",
    text: "Orientación cercana durante tu proceso de atención.",
  },
] as const;

export function WhyUsSection() {
  return (
    <section className="why">
      <div className="why-top">
        <div>
          <span className="eyebrow eyebrow-light">POR QUÉ DENTI CENTER</span>

          <h2>
            Tu salud oral merece
            <br />
            <em>atención de calidad.</em>
          </h2>
        </div>

        <p>
          Queremos que cada visita sea una experiencia clara, cercana y pensada
          en ti.
        </p>
      </div>

      <div className="why-grid">
        {items.map(({ icon: Icon, title, text }, index) => (
          <article key={title} className="why-item">
            <span className="why-num">0{index + 1}</span>
            <Icon size={28} strokeWidth={1.5} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <span className="why-watermark">DC</span>
    </section>
  );
}
