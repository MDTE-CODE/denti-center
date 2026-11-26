"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

import { getWhatsAppUrl, isWhatsAppConfigured } from "@/lib/whatsapp";

export function FloatingActions() {
  const [showBackTop, setShowBackTop] = useState(false);

  const whatsappUrl = getWhatsAppUrl();
  const whatsappConfigured = isWhatsAppConfigured();

  useEffect(() => {
    const updateVisibility = () => {
      setShowBackTop(window.scrollY > 500);
    };

    updateVisibility();

    window.addEventListener("scroll", updateVisibility, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  return (
    <>
      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target={whatsappConfigured ? "_blank" : undefined}
        rel={whatsappConfigured ? "noreferrer" : undefined}
        aria-label={
          whatsappConfigured
            ? "Contactar por WhatsApp"
            : "WhatsApp pendiente de configuración; ver contacto"
        }
      >
        <svg className="whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 4.2a11.5 11.5 0 0 0-9.8 17.5l-1.1 5.1 5.2-1.1A11.5 11.5 0 1 0 16 4.2Z" />
          <path d="M12.2 10.6c-.3-.6-.6-.6-.9-.6h-.7c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.5 1.5 3.7c.2.3 2.5 4 6.2 5.4 3 .0 3.7-.6 4.3-1.1.6-.5.8-1 .9-1.5.1-.5.1-.9 0-1-.1-.1-.3-.2-.7-.4l-2.4-1.1c-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-.9 1.3-.2.2-.3.3-.6.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.5c.2-.2.3-.3.4-.6.1-.2 0-.4 0-.6l-1.1-2.6Z" />
        </svg>
      </a>

      <a
        className={`back-top ${showBackTop ? "is-visible" : ""}`}
        href="#inicio"
        aria-label="Volver al inicio"
        aria-hidden={!showBackTop}
        tabIndex={showBackTop ? 0 : -1}
      >
        <ArrowDown size={17} />
      </a>
    </>
  );
}
