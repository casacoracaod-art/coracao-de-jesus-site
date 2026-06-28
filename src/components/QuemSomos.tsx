import { Heart } from "lucide-react";

const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
            <Heart className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2 text-foreground">
            Quem Somos
          </h2>
          <p className="text-primary font-body font-medium mb-6">Residencial exclusivo para senhoras idosas na Zona Oeste de SP</p>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
            A <strong className="text-foreground">Casa de Repouso Coração de Jesus</strong> é um residencial dedicado exclusivamente ao cuidado de senhoras idosas. Com anos de tradição na Zona Oeste de São Paulo, consolidamos nossa marca como sinônimo de confiança, humanização e atenção feminina especializada.
          </p>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
            Nosso objetivo é proporcionar uma transição suave e acolhedora para nossas hóspedes, seja para estadias de curta duração (como recuperação pós-hospitalar) ou para moradia permanente. Com a expansão para nossa segunda unidade, reafirmamos o compromisso de cuidar não apenas da residente, mas de apoiar toda a família com transparência e dedicação.
          </p>
          <p className="text-muted-foreground font-body text-base leading-relaxed mb-8">
            Fundado com o propósito de oferecer um lar seguro e acolhedor para <strong className="text-foreground">senhoras idosas na Zona Oeste de São Paulo</strong>, o Residencial Coração de Jesus atua na <strong className="text-foreground">Lapa e Alto da Lapa</strong> com foco em cuidado humanizado e atenção individualizada. Nossa equipe multidisciplinar é formada por enfermeiros, cuidadores, fisioterapeutas e assistentes sociais comprometidos com o bem-estar de cada residente.
          </p>
          <a
            href="https://wa.me/5511981707972?text=Olá! Gostaria de saber mais sobre a Casa de Repouso."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-wine text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold font-body hover:opacity-90 transition-opacity shadow-lg"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;

