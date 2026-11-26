export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  comment: string;
  rating: number;
  date: string;
  image: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "María Camila Traslaviña",
    treatment: "Estetica Dental",
    comment:
      "Excelente atención en Denti Center. Me realizaron una estetica dental y el resultado superó mis expectativas. El equipo es muy profesional, amable y siempre me sentí en buenas manos.",
    rating: 5,
    date: "Octubre 2026",
    image: "/testimonial-1.png",
    verified: true,
  },

  // Agrega nuevos testimonios aquí.
];
