import { Phone, Mail, Instagram, Facebook, Heart, MapPin } from "lucide-react";
import logoClean from "@/assets/logo-clean.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-foreground text-primary-foreground">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <div className="bg-background rounded-xl p-3 inline-block mb-4">
              <img src={logoClean} alt="Logo Casa de Repouso Coração de Jesus - Alto da Lapa São Paulo" className="h-20 w-auto" />
            </div>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
              Estamos de portas abertas. Venha tomar um café conosco e conhecer de perto o sorriso de nossos hóspedes.
            </p>
            <p className="text-primary-foreground/50 font-body text-xs mt-2">
              Horário de Visitas: Segunda a Sexta, das 08h às 18h.
            </p>
          </div>

          {/* Unidade Lapa */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Unidade Lapa
            </h4>
            <p className="text-primary-foreground/70 font-body text-sm mb-3">
              Rua Mercedes, 347 — Lapa, São Paulo - SP
            </p>
            <div className="space-y-2 font-body text-sm mb-4">
              <a href="tel:+551138365021" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" /> (11) 3836-5021
              </a>
              <a href="tel:+5511981707972" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" /> (11) 98170-7972
              </a>
            </div>
            <a
              href="https://wa.me/5511981707972?text=Olá! Gostaria de saber mais sobre a Unidade Lapa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-wine text-primary-foreground px-4 py-2 rounded-full text-xs font-semibold font-body hover:opacity-90 transition-opacity"
            >
              Agendar Visita
            </a>
          </div>

          {/* Unidade Alto da Lapa */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Unidade Alto da Lapa
            </h4>
            <p className="text-primary-foreground/70 font-body text-sm mb-3">
              Rua Dr. José Elias, 83 — Alto da Lapa, São Paulo - SP
            </p>
            <div className="space-y-2 font-body text-sm mb-4">
              <a href="tel:+551123711282" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" /> (11) 2371-1282
              </a>
            </div>
            <a
              href="https://wa.me/5511981707972?text=Olá! Gostaria de saber mais sobre a Unidade Alto da Lapa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-wine text-primary-foreground px-4 py-2 rounded-full text-xs font-semibold font-body hover:opacity-90 transition-opacity"
            >
              Agendar Visita
            </a>
          </div>

          {/* Redes Sociais & Contato */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Redes Sociais</h4>
            <div className="space-y-3 font-body text-sm mb-4">
              <a
                href="https://instagram.com/casaderepousocoracaodejesus"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" /> @casaderepousocoracaodejesus
              </a>
              <a
                href="https://web.facebook.com/casaderepousocoracaodejesus"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-4 h-4" /> /casaderepousocoracaodejesus
              </a>
            </div>
            <a href="mailto:contato@casaderepousocoracaojesus.com.br" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground font-body text-sm transition-colors">
              <Mail className="w-4 h-4" /> contato@casaderepousocoracaojesus.com.br
            </a>
          </div>
        </div>
      </div>

      {/* Google Maps in Boxes */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Lapa Map Box */}
          <div className="bg-card/10 border border-primary-foreground/15 rounded-2xl overflow-hidden">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-display font-semibold text-sm">Unidade Lapa</span>
              </div>
              <span className="text-primary-foreground/60 font-body text-xs">Rua Mercedes, 347</span>
            </div>
            <iframe
              title="Mapa Unidade Lapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1!2d-46.7167!3d-23.5250!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua+Mercedes%2C+347+-+Lapa%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1"
              className="w-full h-56 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Alto da Lapa Map Box */}
          <div className="bg-card/10 border border-primary-foreground/15 rounded-2xl overflow-hidden">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-display font-semibold text-sm">Unidade Alto da Lapa</span>
              </div>
              <span className="text-primary-foreground/60 font-body text-xs">Rua Dr. José Elias, 83</span>
            </div>
            <iframe
              title="Mapa Unidade Alto da Lapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1!2d-46.7200!3d-23.5200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua+Dr.+Jos%C3%A9+Elias%2C+83+-+Alto+da+Lapa%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1"
              className="w-full h-56 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* SEO: Endereço e contato em texto puro para indexação */}
      <div className="container mx-auto px-4 pb-8">
        <address className="not-italic text-center text-primary-foreground/40 font-body text-xs leading-relaxed">
          <strong className="text-primary-foreground/60">Residencial Coração de Jesus</strong> — Rua Pio XI, 371 — Alto da Lapa, São Paulo – SP — CEP 05060-000<br />
          Telefone: (11) 2371-1282 | WhatsApp: (11) 98170-7972 | E-mail: contato@casaderepousocoracaojesus.com.br<br />
          Atendimento: Segunda a Sábado, 8h às 18h — Casa de repouso para senhoras idosas na Lapa e Alto da Lapa, Zona Oeste de SP
        </address>
      </div>

      {/* Bottom bar */}
      <div className="bg-foreground py-4 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 text-center text-primary-foreground/50 font-body text-xs">
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Residencial Coração de Jesus. Feito com <Heart className="w-3 h-3 text-primary" /> carinho.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
