import { useState, useEffect } from "react";
import { 
  Home, 
  Leaf, 
  Shield, 
  Accessibility, 
  Heart, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Star,
  CheckCircle2 
} from "lucide-react";
import logoClean from "@/assets/logo-clean.png";
import heroBg from "@/assets/hero-bg.jpg";
import lapaFachada from "@/assets/lapa-fachada.jpg";
import altoLapaFachada from "@/assets/estrutura-fachada.jpg";

// Declare global window properties for TypeScript
declare global {
  interface Window {
    fbq?: any;
    gtag?: any;
    dataLayer?: any[];
  }
}

const AgendarVisita = () => {
  const [nome, setNome] = useState("");
  const [phone, setPhone] = useState("");
  const [vagaPara, setVagaPara] = useState("");
  const [quandoVisitar, setQuandoVisitar] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // Save original values
    const originalTitle = document.title;
    
    // Set landing page title
    document.title = "Agende uma Visita | Casa de Repouso Coração de Jesus – Lapa SP";

    // Set meta tags for SEO and disabling search indexing (noindex)
    let robotsMeta = document.querySelector('meta[name="robots"]');
    let originalRobots: string | null = null;
    if (robotsMeta) {
      originalRobots = robotsMeta.getAttribute("content");
      robotsMeta.setAttribute("content", "noindex");
    } else {
      robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      robotsMeta.setAttribute("content", "noindex");
      document.head.appendChild(robotsMeta);
    }

    let descMeta = document.querySelector('meta[name="description"]');
    let originalDesc: string | null = null;
    if (descMeta) {
      originalDesc = descMeta.getAttribute("content");
      descMeta.setAttribute("content", "Agende uma visita sem compromisso à Casa de Repouso Coração de Jesus. Ambiente acolhedor, segurança 24h e cuidado humanizado para senhoras idosas na Zona Oeste de SP.");
    } else {
      descMeta = document.createElement("meta");
      descMeta.setAttribute("name", "description");
      descMeta.setAttribute("content", "Agende uma visita sem compromisso à Casa de Repouso Coração de Jesus. Ambiente acolhedor, segurança 24h e cuidado humanizado para senhoras idosas na Zona Oeste de SP.");
      document.head.appendChild(descMeta);
    }

    // Set og:title and og:description
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    let originalOgTitle: string | null = null;
    if (ogTitleMeta) {
      originalOgTitle = ogTitleMeta.getAttribute("content");
      ogTitleMeta.setAttribute("content", "Agende uma Visita | Casa de Repouso Coração de Jesus");
    } else {
      ogTitleMeta = document.createElement("meta");
      ogTitleMeta.setAttribute("property", "og:title");
      ogTitleMeta.setAttribute("content", "Agende uma Visita | Casa de Repouso Coração de Jesus");
      document.head.appendChild(ogTitleMeta);
    }

    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    let originalOgDesc: string | null = null;
    if (ogDescMeta) {
      originalOgDesc = ogDescMeta.getAttribute("content");
      ogDescMeta.setAttribute("content", "Venha conhecer o lar que sua familiar merece. Visita sem compromisso na Zona Oeste de SP.");
    } else {
      ogDescMeta = document.createElement("meta");
      ogDescMeta.setAttribute("property", "og:description");
      ogDescMeta.setAttribute("content", "Venha conhecer o lar que sua familiar merece. Visita sem compromisso na Zona Oeste de SP.");
      document.head.appendChild(ogDescMeta);
    }

    // Inject Meta Pixel Tracking Script
    const fbScript = document.createElement("script");
    fbScript.id = "meta-pixel-script-lp";
    fbScript.innerHTML = `
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
      document,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'PIXEL_ID');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(fbScript);

    // Inject Google Ads Tracking Script
    const gAdsScriptSrc = document.createElement("script");
    gAdsScriptSrc.id = "gads-script-src-lp";
    gAdsScriptSrc.async = true;
    gAdsScriptSrc.src = "https://www.googletagmanager.com/gtag/js?id=AW-18144522110";
    document.head.appendChild(gAdsScriptSrc);

    const gAdsScriptInline = document.createElement("script");
    gAdsScriptInline.id = "gads-script-inline-lp";
    gAdsScriptInline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18144522110');
    `;
    document.head.appendChild(gAdsScriptInline);

    // Cleanup on unmount
    return () => {
      document.title = originalTitle;
      
      if (robotsMeta) {
        if (originalRobots) {
          robotsMeta.setAttribute("content", originalRobots);
        } else {
          robotsMeta.remove();
        }
      }
      if (descMeta) {
        if (originalDesc) {
          descMeta.setAttribute("content", originalDesc);
        } else {
          descMeta.remove();
        }
      }
      if (ogTitleMeta) {
        if (originalOgTitle) {
          ogTitleMeta.setAttribute("content", originalOgTitle);
        } else {
          ogTitleMeta.remove();
        }
      }
      if (ogDescMeta) {
        if (originalOgDesc) {
          ogDescMeta.setAttribute("content", originalOgDesc);
        } else {
          ogDescMeta.remove();
        }
      }

      document.getElementById("meta-pixel-script-lp")?.remove();
      document.getElementById("gads-script-src-lp")?.remove();
      document.getElementById("gads-script-inline-lp")?.remove();
    };
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.substring(0, 11);
    
    if (value.length > 6) {
      value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7)}`;
    } else if (value.length > 2) {
      value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setPhone(value);
  };

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: { [key: string]: string } = {};
    if (!nome.trim()) newErrors.nome = "Nome completo é obrigatório";
    
    const phoneDigits = phone.replace(/\D/g, "");
    if (!phoneDigits) {
      newErrors.phone = "Telefone/WhatsApp é obrigatório";
    } else if (phoneDigits.length < 10) {
      newErrors.phone = "Por favor, insira um telefone válido com DDD";
    }

    if (!vagaPara) {
      newErrors.vagaPara = "Selecione para quem é a vaga";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    
    // Disparar tags de conversão
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", { "send_to": "AW-18144522110" });
    }

    // Preparar e enviar os dados para o WhatsApp
    const messageText = `Olá! Gostaria de agendar uma visita.
Seguem os dados do formulário:
• Nome completo: ${nome}
• Telefone/WhatsApp: ${phone}
• Vaga para: ${vagaPara}
${quandoVisitar ? `• Quando deseja visitar: ${quandoVisitar}` : ""}
${mensagem.trim() ? `• Dúvida/Mensagem: ${mensagem}` : ""}`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/5511981707972?text=${encodedText}`;
    
    // Abrir o WhatsApp em uma nova aba
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setIsSubmitted(true);
  };

  const beneficios = [
    {
      icon: Home,
      title: "Quartos Confortáveis",
      desc: "Espaços iluminados e bem cuidados, pensados para o bem-estar de cada residente.",
    },
    {
      icon: Leaf,
      title: "Áreas Verdes",
      desc: "Jardins e espaços de convivência para momentos de alegria e socialização.",
    },
    {
      icon: Shield,
      title: "Segurança 24 Horas",
      desc: "Monitoramento contínuo para a tranquilidade de toda a família.",
    },
    {
      icon: Accessibility,
      title: "Estrutura Acessível",
      desc: "Instalações completamente adaptadas para todas as necessidades.",
    },
    {
      icon: Heart,
      title: "Cuidado Humanizado",
      desc: "Equipe dedicada que trata cada residente com atenção e carinho.",
    },
  ];

  const depoimentos = [
    {
      text: "Quando trouxe minha mãe para conhecer, ela não quis mais ir embora. A equipe é incrível e muito carinhosa.",
      author: "Maria S., Lapa",
    },
    {
      text: "Pesquisamos vários lugares e o Coração de Jesus foi, de longe, o mais acolhedor que visitamos.",
      author: "Roberto T., Perdizes",
    },
    {
      text: "Meu pai está muito bem cuidado. Dorme bem, come bem e ainda fez amizades. Recomendo de coração.",
      author: "Ana Lima, Pinheiros",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      {/* SEÇÃO 1 — HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Jardim acolhedor" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        {/* Standalone Logo on Top-Left */}
        <div className="absolute top-0 left-0 right-0 py-6 px-4 z-20">
          <div className="container mx-auto">
            <div className="bg-background/95 rounded-xl p-2.5 inline-block shadow-sm backdrop-blur-sm">
              <img src={logoClean} alt="Casa de Repouso Coração de Jesus" className="h-16 md:h-20 w-auto" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Agende uma visita sem compromisso
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 font-light mb-8 leading-relaxed">
              Venha conhecer pessoalmente o lar que sua familiar merece. Ambiente acolhedor, segurança 24h e cuidado humanizado na Zona Oeste de São Paulo.
            </p>
            <a
              href="#formulario"
              onClick={scrollToForm}
              className="inline-flex items-center gap-3 bg-gradient-wine text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-95 transition-opacity shadow-lg cursor-pointer"
            >
              QUERO AGENDAR MINHA VISITA
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 — BENEFÍCIOS */}
      <section className="py-20 bg-warm-bg border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-14 text-foreground">
            Por que escolher o <span className="text-primary">Residencial Coração de Jesus</span>?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {beneficios.map((b, index) => {
              const IconComp = b.icon;
              // Make the 5th card span full width on desktop for visual balance
              const isLast = index === beneficios.length - 1;
              return (
                <div
                  key={b.title}
                  className={`bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex gap-4 items-start ${
                    isLast ? "md:col-span-2 md:max-w-md md:mx-auto w-full" : ""
                  }`}
                >
                  <div className="p-3 bg-accent text-primary rounded-xl shrink-0">
                    <IconComp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2 text-foreground">
                      {b.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO EXTRA — NOSSAS UNIDADES */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2 text-foreground">
            Nossas Unidades
          </h2>
          <p className="text-center text-primary font-body font-medium mb-14 max-w-xl mx-auto">
            Duas unidades exclusivas para senhoras idosas na Zona Oeste de São Paulo.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Lapa */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border">
              <img src={lapaFachada} alt="Fachada da Unidade Lapa" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">Unidade Lapa</h3>
                <div className="flex items-center gap-2 text-muted-foreground font-body text-sm mb-4">
                  <MapPin className="w-4 h-4 text-primary" />
                  Rua Mercedes, 347 — Lapa, São Paulo - SP
                </div>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">
                  Um casarão de <strong>800m²</strong> situado em uma rua tranquila e arborizada no coração da Lapa. Com amplas áreas internas e externas, jardins sombreados e espaços de convivência ao ar livre.
                </p>
              </div>
            </div>

            {/* Alto da Lapa */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border">
              <img src={altoLapaFachada} alt="Fachada da Unidade Alto da Lapa" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">Unidade Alto da Lapa</h3>
                <div className="flex items-center gap-2 text-muted-foreground font-body text-sm mb-4">
                  <MapPin className="w-4 h-4 text-primary" />
                  Rua Dr. José Elias, 83 — Alto da Lapa, São Paulo - SP
                </div>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">
                  Instalações modernas em bairro nobre, decoração acolhedora e tecnologia voltada para o bem-estar, acessibilidade e segurança de nossas residentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — DEPOIMENTOS */}
      <section className="py-20 bg-warm-bg border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-foreground">
            O que as famílias dizem
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {depoimentos.map((d, idx) => (
              <div 
                key={idx} 
                className="bg-card rounded-xl p-6 shadow-sm border border-border flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <p className="text-foreground/80 italic leading-relaxed mb-6">
                  "{d.text}"
                </p>
                <div className="font-semibold text-primary text-sm">
                  — {d.author}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center font-semibold text-foreground/80 flex flex-col items-center gap-2">
            <div className="flex gap-1 text-[#ffb800]">
              <Star className="w-5 h-5 fill-[#ffb800] stroke-none" />
              <Star className="w-5 h-5 fill-[#ffb800] stroke-none" />
              <Star className="w-5 h-5 fill-[#ffb800] stroke-none" />
              <Star className="w-5 h-5 fill-[#ffb800] stroke-none" />
              <Star className="w-5 h-5 fill-[#ffb800] stroke-none" />
            </div>
            <p className="text-sm md:text-base">
              Referência em cuidado para senhoras idosas na Zona Oeste de SP
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 — FORMULÁRIO */}
      <section id="formulario" className="py-20 bg-gradient-wine text-primary-foreground scroll-mt-6">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              Agende sua visita agora
            </h2>
            <p className="text-white/80 font-light">
              Preencha o formulário e entraremos em contato em até 2 horas pelo WhatsApp.
            </p>
          </div>

          <div className="max-w-[540px] mx-auto bg-card text-foreground rounded-2xl p-6 md:p-8 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-10 px-4 flex flex-col items-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
                <h3 className="text-2xl font-display font-bold mb-4 text-foreground">
                  Solicitação Recebida!
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  ✅ Recebemos sua solicitação! Entraremos em contato pelo WhatsApp em até 2 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-foreground/80 mb-1.5">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome completo"
                    className={`w-full px-4 py-2.5 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                      errors.nome ? "border-destructive focus:ring-destructive/30" : "border-border"
                    }`}
                  />
                  {errors.nome && <p className="text-destructive text-xs mt-1">{errors.nome}</p>}
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-semibold text-foreground/80 mb-1.5">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="(11) 99999-9999"
                    className={`w-full px-4 py-2.5 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                      errors.phone ? "border-destructive focus:ring-destructive/30" : "border-border"
                    }`}
                  />
                  {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="vagaPara" className="block text-sm font-semibold text-foreground/80 mb-1.5">
                    Para quem é a vaga? *
                  </label>
                  <select
                    id="vagaPara"
                    value={vagaPara}
                    onChange={(e) => setVagaPara(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                      errors.vagaPara ? "border-destructive focus:ring-destructive/30" : "border-border"
                    }`}
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="Minha mãe">Minha mãe</option>
                    <option value="Minha avó">Minha avó</option>
                    <option value="Cônjuge">Cônjuge</option>
                    <option value="Outra familiar">Outra familiar</option>
                  </select>
                  {errors.vagaPara && <p className="text-destructive text-xs mt-1">{errors.vagaPara}</p>}
                </div>

                <div>
                  <label htmlFor="quandoVisitar" className="block text-sm font-semibold text-foreground/80 mb-1.5">
                    Quando deseja visitar?
                  </label>
                  <select
                    id="quandoVisitar"
                    value={quandoVisitar}
                    onChange={(e) => setQuandoVisitar(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="O mais rápido possível">O mais rápido possível</option>
                    <option value="Esta semana">Esta semana</option>
                    <option value="Nas próximas 2 semanas">Nas próximas 2 semanas</option>
                    <option value="Ainda estou pesquisando">Ainda estou pesquisando</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-semibold text-foreground/80 mb-1.5">
                    Mensagem ou dúvida (opcional)
                  </label>
                  <textarea
                    id="mensagem"
                    rows={3}
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Conte um pouco sobre a situação da sua familiar..."
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-wine text-white font-semibold rounded-full hover:opacity-95 transition-opacity shadow-md cursor-pointer uppercase text-sm tracking-wide mt-2"
                >
                  ENVIAR E AGENDAR MINHA VISITA
                </button>

                <p className="text-center text-xs text-muted-foreground mt-3">
                  🔒 Seus dados estão seguros. Não fazemos spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — CONTATO DIRETO */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-foreground">
            Prefere falar agora?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5511981707972"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-6 rounded-2xl hover:bg-[#20ba56] transition-colors shadow-sm font-semibold text-center"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp (11) 98170-7972
            </a>

            {/* Phone Button */}
            <a
              href="tel:+551123711282"
              className="flex items-center justify-center gap-3 bg-gradient-wine text-white py-4 px-6 rounded-2xl hover:opacity-95 transition-opacity shadow-sm font-semibold text-center"
            >
              <Phone className="w-6 h-6" />
              Ligar (11) 2371-1282
            </a>

            {/* Address Button */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Residencial+Coração+de+Jesus+Rua+Dr+José+Elias+83+Alto+da+Lapa+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border-2 border-primary text-primary bg-background py-4 px-6 rounded-2xl hover:bg-accent transition-colors shadow-sm font-semibold text-center"
            >
              <MapPin className="w-6 h-6" />
              Como chegar
            </a>
          </div>

          <p className="text-center text-muted-foreground text-sm font-medium">
            Atendimento de segunda a sexta, das 10h às 18h
          </p>
        </div>
      </section>

      {/* SEÇÃO 6 — RODAPÉ MÍNIMO */}
      <footer className="bg-foreground text-primary-foreground/50 py-8 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 text-center text-xs">
          <p>© {new Date().getFullYear()} Casa de Repouso Coração de Jesus — Alto da Lapa, São Paulo – SP</p>
        </div>
      </footer>
    </div>
  );
};

export default AgendarVisita;
