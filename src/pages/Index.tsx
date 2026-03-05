import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Diferenciais from "@/components/sections/Diferenciais";
import Sobre from "@/components/sections/Sobre";
import Solucoes from "@/components/sections/Solucoes";
import Experiencia from "@/components/sections/Experiencia";
import Depoimentos from "@/components/sections/Depoimentos";
import FAQ from "@/components/sections/FAQ";
import Contato from "@/components/sections/Contato";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Diferenciais />
      <Sobre />
      <Solucoes />
      <Experiencia />
      <Depoimentos />
      <FAQ />
      <Contato />
      <Footer />
    </div>
  );
};

export default Index;
