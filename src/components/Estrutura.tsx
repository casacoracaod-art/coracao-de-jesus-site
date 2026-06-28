import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Alto da Lapa
import fachada from "@/assets/estrutura-fachada.jpg";
import recepcao from "@/assets/estrutura-recepcao.jpg";
import salaEstar from "@/assets/estrutura-sala-estar.jpg";
import refeitorio from "@/assets/estrutura-refeitorio.jpg";
import varanda from "@/assets/estrutura-varanda.jpg";
import quartoIndividual from "@/assets/estrutura-quarto-individual.jpg";
import quartoColetivo from "@/assets/estrutura-quarto-coletivo.jpg";
import banheiro from "@/assets/estrutura-banheiro.jpg";
import corredor from "@/assets/estrutura-corredor.jpg";
import rampa from "@/assets/estrutura-rampa.jpg";
import leitura from "@/assets/estrutura-leitura.jpg";

// Lapa
import lapaAcessibilidade from "@/assets/lapa-acessibilidade.jpg";
import lapaDormitorio1 from "@/assets/lapa-dormitorio1.jpg";
import lapaDormitorio2 from "@/assets/lapa-dormitorio2.jpg";
import lapaEntrada from "@/assets/lapa-entrada.jpg";
import lapaDescanso1 from "@/assets/lapa-descanso1.jpg";
import lapaDescanso2 from "@/assets/lapa-descanso2.jpg";
import lapaFachada from "@/assets/lapa-fachada.jpg";
import lapaJardim1 from "@/assets/lapa-jardim1.jpg";
import lapaJardim2 from "@/assets/lapa-jardim2.jpg";
import lapaRefeitorio from "@/assets/lapa-refeitorio.jpg";
import lapaSacada1 from "@/assets/lapa-sacada1.jpg";
import lapaSacada2 from "@/assets/lapa-sacada2.jpg";

type Foto = { image: string; title: string; desc: string };

const fotosAltoLapa: Foto[] = [
  { image: fachada, title: "Fachada e Identificação", desc: "Entrada principal com placa de identificação, estacionamento e fácil acesso." },
  { image: recepcao, title: "Recepção e Sala de Estar", desc: "Amplo espaço com poltronas confortáveis, iluminação natural e ambiente organizado." },
  { image: salaEstar, title: "Sala de Convivência", desc: "Ambiente acolhedor com painel decorativo, televisão e espaço para socialização." },
  { image: refeitorio, title: "Refeitório", desc: "Mesas modernas, decoração delicada e excelente iluminação para refeições agradáveis." },
  { image: varanda, title: "Varanda Avarandada", desc: "Área de convivência com vista para jardim arborizado e mesas decoradas." },
  { image: quartoIndividual, title: "Quarto Individual", desc: "Cama, criado-mudo, poltrona para descanso e televisão — conforto e privacidade." },
  { image: quartoColetivo, title: "Quarto Coletivo", desc: "Disposição organizada das camas com enxoval padronizado e criados-mudos." },
  { image: banheiro, title: "Banheiro Acessível", desc: "Revestimento marmorizado, barras de apoio e itens de acessibilidade completos." },
  { image: corredor, title: "Corredor com Corrimãos", desc: "Corrimãos contínuos em ambos os lados e iluminação eficiente para segurança." },
  { image: rampa, title: "Rampa de Acesso", desc: "Entrada com rampa, bancos para descanso e equipamentos de segurança visíveis." },
  { image: leitura, title: "Cantinho de Leitura", desc: "Poltrona confortável, prateleiras com livros e decoração acolhedora para relaxamento." },
];

const fotosLapa: Foto[] = [
  { image: lapaFachada, title: "Fachada", desc: "Casa protegida por grades brancas trabalhadas, com jardim frontal bem cuidado que traz frescor ao ambiente urbano." },
  { image: lapaEntrada, title: "Entrada", desc: "Área espaçosa com piso claro, cercada por grades ornamentais e áreas verdes, com rampa de proteção lateral para maior segurança." },
  { image: lapaAcessibilidade, title: "Acessibilidade", desc: "Rampa de acesso com corrimãos brancos, garantindo segurança e facilidade de locomoção para residentes com mobilidade reduzida." },
  { image: lapaDescanso1, title: "Espaço de Descanso", desc: "Sala moderna com piso de mármore e poltronas reclináveis confortáveis, com televisão em parede texturizada para momentos de lazer." },
  { image: lapaDescanso2, title: "Sala de Estar", desc: "Ambiente com poltronas reclináveis e porta de correr, proporcionando conforto e privacidade aos residentes." },
  { image: lapaDormitorio1, title: "Dormitório I", desc: "Quarto compartilhado amplo e iluminado, com duas camas de solteiro e guarda-roupas individuais em ambiente limpo." },
  { image: lapaDormitorio2, title: "Dormitório II", desc: "Quarto para duas pessoas com camas em madeira branca, enxoval florido e piso decorado em preto e branco." },
  { image: lapaJardim1, title: "Jardim", desc: "Área externa com mesas de vidro e cadeiras brancas, cercada por palmeiras e plantas ornamentais para visitas e banhos de sol." },
  { image: lapaJardim2, title: "Área Verde", desc: "Espaço arborizado com palmeiras e vasos ornamentais, proporcionando contato com a natureza." },
  { image: lapaRefeitorio, title: "Refeitório", desc: "Ambiente longo e iluminado por cobertura translúcida, com mesas organizadas garantindo espaço higiênico e confortável." },
  { image: lapaSacada1, title: "Sacada", desc: "Espaço semiaberto com poltronas para descanso, decorado conforme a época do ano, criando um ambiente acolhedor." },
  { image: lapaSacada2, title: "Sacada Decorada", desc: "Área com ornamentos festivos, grades decorativas e cobertura translúcida para convivência ao ar livre." },
];

const GaleriaGrid = ({ fotos, onSelect }: { fotos: Foto[]; onSelect: (i: number) => void }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
    {fotos.map((foto, i) => (
      <button
        key={foto.title}
        onClick={() => onSelect(i)}
        className="group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer"
      >
        <img
          src={foto.image}
          alt={foto.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-white font-display font-semibold text-sm leading-tight">
            {foto.title}
          </h3>
        </div>
      </button>
    ))}
  </div>
);

const Estrutura = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("alto-lapa");

  const currentFotos = activeTab === "alto-lapa" ? fotosAltoLapa : fotosLapa;

  const navigate = (dir: number) => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + dir + currentFotos.length) % currentFotos.length);
  };

  const handleSelect = (i: number) => setSelectedIndex(i);

  return (
    <section id="estrutura" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2 text-foreground">
          Conheça Nossa Estrutura
        </h2>
        <p className="text-center text-primary font-body font-medium mb-10 max-w-xl mx-auto">
          Ambientes projetados com carinho, segurança e acessibilidade.
        </p>

        <Tabs value={activeTab} onValueChange={(v) => { setActiveTab(v); setSelectedIndex(null); }} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10 bg-muted h-12 rounded-full p-1">
            <TabsTrigger
              value="alto-lapa"
              className="font-display font-semibold rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all"
            >
              Alto da Lapa
            </TabsTrigger>
            <TabsTrigger
              value="lapa"
              className="font-display font-semibold rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all"
            >
              Lapa
            </TabsTrigger>
          </TabsList>

          <TabsContent value="alto-lapa">
            <GaleriaGrid fotos={fotosAltoLapa} onSelect={handleSelect} />
          </TabsContent>
          <TabsContent value="lapa">
            <GaleriaGrid fotos={fotosLapa} onSelect={handleSelect} />
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="sm:max-w-3xl p-0 overflow-hidden bg-black border-none">
          {selectedIndex !== null && (
            <div className="relative">
              <img
                src={currentFotos[selectedIndex].image}
                alt={currentFotos[selectedIndex].title}
                className="w-full max-h-[75vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-display font-bold text-xl mb-1">
                  {currentFotos[selectedIndex].title}
                </h3>
                <p className="text-white/80 font-body text-sm">
                  {currentFotos[selectedIndex].desc}
                </p>
              </div>
              <button
                onClick={() => navigate(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => navigate(1)}
                className="absolute right-10 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
                aria-label="Próxima"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Estrutura;
