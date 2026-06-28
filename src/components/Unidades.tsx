import { MapPin, Star } from "lucide-react";
import lapaFachada from "@/assets/lapa-fachada.jpg";
import altoLapaFachada from "@/assets/estrutura-fachada.jpg";

const Unidades = () => {
  return (
    <section id="unidades" className="py-20 bg-warm-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2 text-foreground">
          Nossas Unidades
        </h2>
        <p className="text-center text-primary font-body font-medium mb-14 max-w-xl mx-auto">
          Duas unidades exclusivas para senhoras idosas, com o mesmo padrão de qualidade.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Lapa */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border">
            <img src={lapaFachada} alt="Fachada do Residencial Coração de Jesus Unidade Lapa Zona Oeste São Paulo" className="w-full h-56 object-cover" loading="lazy" />
            <div className="p-6">
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">Unidade Lapa</h3>
              <div className="flex items-center gap-2 text-muted-foreground font-body text-sm mb-4">
                <MapPin className="w-4 h-4 text-primary" />
                Rua Mercedes, 347 — Lapa, São Paulo
              </div>
              <p className="text-muted-foreground font-body leading-relaxed">
                Um casarão de <strong className="text-foreground">800m²</strong> situado em uma rua tranquila e arborizada no coração da Lapa. Com amplas áreas internas e externas, jardins sombreados e espaços de convivência ao ar livre, a unidade proporciona um ambiente acolhedor e seguro para caminhadas, atividades recreativas e momentos de descanso.
              </p>
            </div>
          </div>

          {/* Alto da Lapa */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-md border-2 border-primary/30 relative">
            <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-gradient-wine text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold font-body">
              <Star className="w-3.5 h-3.5" />
              Destaque
            </div>
            <img src={altoLapaFachada} alt="Fachada do Residencial Coração de Jesus no Alto da Lapa Zona Oeste São Paulo" className="w-full h-56 object-cover" loading="lazy" />
            <div className="p-6">
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">Unidade Alto da Lapa</h3>
              <div className="flex items-center gap-2 text-muted-foreground font-body text-sm mb-4">
                <MapPin className="w-4 h-4 text-primary" />
                Rua Dr. José Elias, 83 — Alto da Lapa, São Paulo
              </div>
              <p className="text-muted-foreground font-body leading-relaxed">
                Nossa nova unidade em bairro nobre, com instalações modernas, decoração acolhedora e tecnologia voltada para o bem-estar e segurança imediata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unidades;
