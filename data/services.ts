import {
  Stethoscope,
  Sparkles,
  BadgeCheck,
  ShieldCheck,
  Microscope,
  Baby,
} from "lucide-react";

export const services = [
  {
    title: "Odontología general",
    text: "Cuidado esencial para mantener tu salud oral en equilibrio.",
    icon: Stethoscope,
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=850&q=85",
    tag: "CUIDADO INTEGRAL",
  },
  {
    title: "Ortodoncia",
    text: "Alternativas para acompañar la alineación de tu sonrisa.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=850&q=85",
    tag: "SONRISA EN ARMONÍA",
  },
  {
    title: "Estética dental",
    text: "Opciones enfocadas en la apariencia natural de tu sonrisa.",
    icon: BadgeCheck,
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=850&q=85",
    tag: "BELLEZA NATURAL",
  },
  {
    title: "Endodoncia",
    text: "Atención especializada para el cuidado de tus dientes.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1606811971378-d2bc6e2e7d2b?auto=format&fit=crop&w=850&q=85",
    tag: "CUIDADO DENTAL",
  },
  {
    title: "Implantología",
    text: "Conoce opciones de rehabilitación oral según tu valoración.",
    icon: Microscope,
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=850&q=85",
    tag: "REHABILITACIÓN",
  },
  {
    title: "Odontopediatría",
    text: "Un espacio amable para acompañar la salud oral de los niños.",
    icon: Baby,
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=850&q=85",
    tag: "SONRISAS PEQUEÑAS",
  },
] as const;
