import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "A casa de repouso atende homens e mulheres?",
    a: "O Residencial Coração de Jesus é exclusivo para senhoras idosas, oferecendo um ambiente seguro, familiar e voltado às necessidades femininas.",
  },
  {
    q: "Qual o endereço da Casa de Repouso Coração de Jesus?",
    a: "Estamos na Rua Pio XI, 371 – Alto da Lapa, São Paulo – SP. Atendemos famílias da Lapa, Perdizes, Pinheiros, Butantã e toda a Zona Oeste de SP.",
  },
  {
    q: "Como agendar uma visita?",
    a: "Pelo WhatsApp (11) 98170-7972, pelo telefone (11) 2371-1282 ou pelo formulário no site. Atendemos de segunda a sábado, das 8h às 18h.",
  },
  {
    q: "A casa de repouso tem enfermagem 24 horas?",
    a: "Sim. Contamos com equipe de enfermagem e monitoramento 24 horas por dia, 7 dias por semana, garantindo segurança e tranquilidade para as residentes e suas famílias.",
  },
  {
    q: "Qual a diferença entre casa de repouso e asilo?",
    a: "Uma casa de repouso particular, como o Residencial Coração de Jesus, oferece cuidado personalizado, ambiente familiar e equipe multidisciplinar dedicada. Diferente dos asilos públicos, o atendimento é individualizado e focado na qualidade de vida de cada residente.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-warm-bg border-y border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2 text-foreground">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-primary font-body font-medium mb-12 max-w-xl mx-auto">
          Tire suas dúvidas sobre a Casa de Repouso Coração de Jesus
        </p>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm"
            >
              <button
                id={`faq-btn-${idx}`}
                aria-expanded={open === idx}
                aria-controls={`faq-answer-${idx}`}
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-accent/30 transition-colors"
              >
                <span className="font-display font-semibold text-foreground text-base leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    open === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-btn-${idx}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-muted-foreground font-body text-sm leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
