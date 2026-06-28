import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import servicoFisioterapia from "@/assets/servico-fisioterapia.jpg";
import servicoTerapia from "@/assets/servico-terapia-ocupacional.jpg";
import servicoMusico from "@/assets/servico-musicoterapia.jpg";
import servicoArte from "@/assets/servico-arteterapia.jpg";
import servicoNutricao from "@/assets/servico-nutricao.jpg";
import servicoReabilitacao from "@/assets/servico-reabilitacao.jpg";

const servicos = [
  {
    image: servicoFisioterapia,
    title: "Fisioterapia",
    desc: "Foco em mobilidade, fortalecimento muscular e equilíbrio.",
    cta: "Conheça a Fisioterapia",
    detail: "Nossa equipe de fisioterapeutas desenvolve programas individualizados para cada hóspede, com foco em mobilidade articular, fortalecimento muscular, equilíbrio e prevenção de quedas. Utilizamos equipamentos modernos e técnicas como cinesioterapia, eletroterapia e hidroterapia para promover a independência funcional e a qualidade de vida dos nossos residentes.",
  },
  {
    image: servicoTerapia,
    title: "Terapia Ocupacional",
    desc: "Estímulo cognitivo para preservação da memória.",
    cta: "Saiba Mais",
    detail: "A Terapia Ocupacional na Coração de Jesus trabalha a estimulação cognitiva através de atividades direcionadas como jogos de memória, quebra-cabeças, exercícios de coordenação motora fina e treino de atividades da vida diária. Nossos terapeutas ocupacionais elaboram planos personalizados visando manter e recuperar a autonomia de cada residente, preservando suas capacidades cognitivas e funcionais.",
  },
  {
    image: servicoMusico,
    title: "Musicoterapia e Yoga",
    desc: "Relaxamento e bem-estar mental.",
    cta: "Descubra as Sessões",
    detail: "Nossas sessões de musicoterapia utilizam a música como ferramenta terapêutica para promover relaxamento, estimular memórias afetivas e favorecer a socialização. O yoga adaptado para a terceira idade trabalha respiração, alongamento e meditação, contribuindo para o equilíbrio emocional, redução da ansiedade e melhora da qualidade do sono dos nossos hóspedes.",
  },
  {
    image: servicoArte,
    title: "Arteterapia",
    desc: "Expressão criativa e socialização entre os hóspedes.",
    cta: "Veja as Atividades",
    detail: "A arteterapia é um dos momentos mais aguardados pelos nossos hóspedes. Através de pintura, desenho, colagem e modelagem, os residentes expressam emoções, desenvolvem a criatividade e fortalecem vínculos sociais. As atividades são conduzidas por profissionais especializados que adaptam cada proposta às capacidades individuais, promovendo autoestima e bem-estar emocional.",
  },
  {
    image: servicoNutricao,
    title: "Nutrição Balanceada",
    desc: "Cardápios elaborados por nutricionistas, respeitando restrições médicas e o paladar de cada residente.",
    cta: "Conheça o Cardápio",
    detail: "Nosso serviço de nutrição conta com nutricionistas dedicados que elaboram cardápios individualizados, considerando as necessidades clínicas, restrições alimentares e preferências pessoais de cada residente. As refeições são preparadas diariamente com ingredientes frescos e de qualidade, garantindo uma alimentação saborosa, equilibrada e segura para a saúde dos nossos hóspedes.",
  },
  {
    image: servicoReabilitacao,
    title: "Reabilitação Pós-Hospitalar",
    desc: "Suporte especializado para uma recuperação rápida e segura após cirurgias ou internações.",
    cta: "Saiba Mais",
    detail: "Oferecemos um programa completo de reabilitação para idosos em fase de recuperação pós-cirúrgica ou pós-internação hospitalar. Nossa equipe multidisciplinar — composta por médicos, enfermeiros, fisioterapeutas e nutricionistas — acompanha de perto cada etapa da recuperação, garantindo um retorno seguro às atividades cotidianas com todo o suporte necessário.",
  },
];

const Servicos = () => {
  const [selected, setSelected] = useState<(typeof servicos)[0] | null>(null);

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2 text-foreground">
          Serviços e Atividades
        </h2>
        <p className="text-center text-primary font-body font-medium mb-14 max-w-xl mx-auto">
          Cuidado 360º — Não somos apenas uma residência; somos um centro de saúde e convivência.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {servicos.map((s) => (
            <button
              key={s.title}
              onClick={() => setSelected(s)}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-lg transition-all duration-300 text-left cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                  {s.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold font-body text-primary hover:text-primary/80 transition-colors">
                  {s.cta}
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="sm:max-w-lg">
          {selected && (
            <>
              <div className="rounded-xl overflow-hidden mb-4 -mt-2">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <DialogHeader>
                <DialogTitle className="font-display text-xl">{selected.title}</DialogTitle>
                <DialogDescription className="font-body text-muted-foreground leading-relaxed pt-2">
                  {selected.detail}
                </DialogDescription>
              </DialogHeader>
              <div className="pt-4">
                <a
                  href="#contato"
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold font-body hover:bg-primary/90 transition-colors"
                >
                  Agende uma Visita
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Servicos;
