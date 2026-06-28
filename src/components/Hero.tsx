import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Senhoras idosas felizes no jardim da Casa de Repouso Coração de Jesus na Lapa SP"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Cuidado Exclusivo para Senhoras Idosas
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 font-body font-light mb-8 leading-relaxed">
              Residencial exclusivo para senhoras idosas na Zona Oeste de SP. Com duas unidades (Lapa e Alto da Lapa), oferecemos o acolhimento, segurança e carinho que quem você ama merece.
            </p>
            <a
              href="https://wa.me/5511981707972"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-wine text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold font-body hover:opacity-90 transition-opacity shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Fale Conosco pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Parágrafo SEO visível — texto puro para indexação do Google */}
      <section className="bg-warm-bg py-10 border-b border-border">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground font-body text-base leading-relaxed text-center max-w-3xl mx-auto">
            O <strong className="text-foreground">Residencial Coração de Jesus</strong> é uma casa de repouso exclusiva para senhoras idosas, localizada no Alto da Lapa, Zona Oeste de São Paulo. Com duas unidades na <strong className="text-foreground">Lapa</strong> e <strong className="text-foreground">Alto da Lapa</strong>, oferecemos cuidado humanizado, enfermagem 24 horas, equipe multidisciplinar e um ambiente familiar acolhedor. Atendemos famílias de Perdizes, Pinheiros, Butantã, Vila Madalena e toda a Zona Oeste de SP.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;

