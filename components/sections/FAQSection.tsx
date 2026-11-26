import { ArrowUpRight, ChevronDown } from "lucide-react";

import { faqs } from "@/data/faqs";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function FAQSection() {
  return (
    <section className="section faq">
      <div className="faq-intro">
        <SectionIntro
          eyebrow="PREGUNTAS FRECUENTES"
          title="Resolvemos tus dudas."
          copy="¿No encuentras lo que buscas? Escríbenos y te orientamos."
        />

        <a className="text-link" href="#contacto">
          Habla con nosotros <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="faq-list">
        {faqs.map(([question, answer], index) => (
          <details className="faq-item" key={question} open={index === 0}>
            <summary>
              <span className="faq-index">0{index + 1}</span>
              <span>{question}</span>
              <ChevronDown size={17} />
            </summary>

            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
