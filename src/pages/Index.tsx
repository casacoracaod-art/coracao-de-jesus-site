import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Diferenciais from "@/components/Diferenciais";
import QuemSomos from "@/components/QuemSomos";
import Unidades from "@/components/Unidades";
import Servicos from "@/components/Servicos";
import FAQ from "@/components/FAQ";
import Estrutura from "@/components/Estrutura";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Diferenciais />
      <QuemSomos />
      <Unidades />
      <Servicos />
      <FAQ />
      <Estrutura />
      <Footer />
    </div>
  );
};

export default Index;
