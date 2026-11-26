import Image from "next/image";
import { ArrowDown, ArrowUpRight, HeartHandshake, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          CUIDAMOS TU SONRISA
        </span>

        <h1>
          Una sonrisa
          <br />
          saludable <em>cambia</em>
          <br />
          todo.
        </h1>

        <p>
          En DENTI CENTER trabajamos para brindarte atención odontológica
          profesional y una experiencia de confianza en cada visita.
        </p>

        <div className="hero-actions">
          <a className="button button-red" href="#agendar">
            Agendar mi cita <ArrowUpRight size={17} />
          </a>

          <a className="text-link" href="#servicios">
            Conocer nuestros servicios <ArrowDown size={15} />
          </a>
        </div>

        <div className="hero-location">
          <MapPin size={18} />
          <span>Barrancabermeja, Santander</span>
          <span className="location-line" />
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-photo">
          <Image
            src="/denti-hero2.png"
            alt="Mujer sonriente en una fotografía de estilo natural"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 52vw"
          />
        </div>

        <div className="hero-orbit" />

        <div className="hero-note">
          <span className="note-icon">
            <HeartHandshake size={20} />
          </span>

          <span>
            <strong>Una atención más humana</strong>
            <small>Tu bienestar, en el centro</small>
          </span>
        </div>

        <div className="hero-stamp">
          SONRISAS
          <br />
          <span>CON CONFIANZA</span>
          <b>✳</b>
        </div>

        <span className="hero-index">01 — 13</span>
      </div>

      <a className="scroll-cue" href="#confianza">
        <span>DESLIZA PARA DESCUBRIR</span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
