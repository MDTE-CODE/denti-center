"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { Brand } from "@/components/ui/Brand";
import { navigationItems } from "@/data/navigation";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigationItems.map(({ label, id }) => (
            <a key={id} href={`#${id}`} className="text-base lg:text-lg">
              {label}
            </a>
          ))}
        </nav>

        <a className="button button-red hidden" href="#agendar">
          Agendar cita
          <ArrowUpRight size={18} />
        </a>

        <button
          className="menu-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Navegación móvil">
          {navigationItems.map(({ label, id }) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight size={15} />
            </a>
          ))}

          <a
            className="button button-red"
            href="#agendar"
            onClick={() => setOpen(false)}
          >
            Agendar cita
            <ArrowUpRight size={18} />
          </a>
        </nav>
      )}
    </header>
  );
}
