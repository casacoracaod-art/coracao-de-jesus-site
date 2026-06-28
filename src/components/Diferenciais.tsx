import imgEnfermagem from "@/assets/diferencial-enfermagem.jpg";
import imgEstrutura from "@/assets/diferencial-estrutura.jpg";
import imgEquipe from "@/assets/diferencial-equipe.jpg";
import imgAtividades from "@/assets/diferencial-atividades.jpg";

const cards = [
  {
    image: imgEnfermagem,
    alt: "Equipe de enfermagem e cuidadores do Residencial Coração de Jesus SP",
    title: "Enfermagem 24h",
    desc: "Nossa equipe de enfermagem está presente 24 horas por dia, 7 dias por semana, garantindo monitoramento contínuo, administração de medicamentos e atendimento imediato a qualquer necessidade de saúde das residentes.",
  },
  {
    image: imgEstrutura,
    alt: "Estrutura acessível adaptada da Casa de Repouso Coração de Jesus na Lapa SP",
    title: "Estrutura Adaptada",
    desc: "Ambientes com acessibilidade total, projetados para evitar quedas e garantir o máximo conforto. Rampas, corrimãos e banheiros adaptados em todas as áreas da casa.",
  },
  {
    image: imgEquipe,
    alt: "Equipe multidisciplinar de cuidadores, enfermeiros e fisioterapeutas do residencial para idosas SP",
    title: "Equipe Multidisciplinar",
    desc: "Médicos, nutricionistas, fisioterapeutas e terapeutas focados na saúde física e emocional de cada uma de nossas senhoras, com atendimento individualizado e plano de cuidados personalizado.",
  },
  {
    image: imgAtividades,
    alt: "Atividades diárias e programação da Casa de Repouso Coração de Jesus Zona Oeste SP",
    title: "Vida em Movimento",
    desc: "Oferecemos programação diária de atividades recreativas, fisioterapia, musicoterapia e convivência social, promovendo qualidade de vida, estímulo cognitivo e bem-estar emocional.",
  },
];

const Diferenciais = () => {
  return (
    <section className="py-20 bg-warm-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 text-foreground">
          Por que escolher a <span className="text-primary">Coração de Jesus</span>?
        </h2>
        <p className="text-center text-primary font-body font-medium mb-14 max-w-xl mx-auto">
          Residencial exclusivo para senhoras idosas — alegria e saúde caminham juntas.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-44 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-lg font-display font-semibold mb-2 text-foreground">{card.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/5511981707972?text=Olá! Gostaria de conhecer os diferenciais da casa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-wine text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold font-body hover:opacity-90 transition-opacity shadow-lg"
          >
            Agende uma Visita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
