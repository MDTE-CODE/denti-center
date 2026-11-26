import { ArrowUpRight, Star, BadgeCheck } from "lucide-react";

import { SectionIntro } from "@/components/ui/SectionIntro";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="section testimonials" id="experiencias">
      <div className="testimonial-heading">
        <SectionIntro
          eyebrow="VOCES QUE NOS INSPIRAN"
          title="Cada sonrisa tiene una historia."
        />

        <span className="quote-mark">“</span>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.id}>
            {/* Fotografía */}
            <div className="testimonial-image">
              <img
                src={testimonial.image}
                alt={`Fotografía de ${testimonial.name}`}
                loading="lazy"
              />
            </div>

            {/* Contenido */}
            <div className="testimonial-content">
              <div className="testimonial-rating">
                <div
                  className="testimonial-stars"
                  aria-label={`${testimonial.rating} de 5 estrellas`}
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      size={19}
                      fill={
                        index < testimonial.rating ? "currentColor" : "none"
                      }
                    />
                  ))}
                </div>

                <span>{testimonial.rating.toFixed(1)}</span>
              </div>

              <p className="testimonial-text">"{testimonial.comment}"</p>

              <div className="testimonial-author">
                <h3>{testimonial.name}</h3>
                <span>Paciente de {testimonial.treatment}</span>
              </div>
            </div>

            {/* Información adicional */}
            <div className="testimonial-meta">
              {testimonial.verified && (
                <div className="testimonial-verified">
                  <BadgeCheck size={17} />
                  <span>Paciente verificado</span>
                </div>
              )}

              <span className="testimonial-date">{testimonial.date}</span>

              <ArrowUpRight className="testimonial-arrow" size={21} />
            </div>
          </article>
        ))}
      </div>

      {testimonials.length === 0 && (
        <div className="testimonial-empty">
          <p>
            Estamos preparando nuevas historias y experiencias de nuestros
            pacientes.
          </p>
        </div>
      )}

      <p className="demo-note">
        Las fotografías y testimonios se publican con autorización expresa de
        sus titulares.
      </p>
    </section>
  );
}
