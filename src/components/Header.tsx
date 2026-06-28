import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoClean from "@/assets/logo-clean.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Unidades", href: "#unidades" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logoClean} alt="Logo Casa de Repouso Coração de Jesus - Alto da Lapa São Paulo" className="h-20 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium font-body text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5511981707972"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-gradient-wine text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold font-body hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          Agendar Visita
        </a>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-foreground/80 hover:text-primary font-body font-medium py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511981707972"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-gradient-wine text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold font-body"
          >
            Agendar Visita
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
