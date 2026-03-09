import fotoDoutor from "@/assets/FOTO_LAUDA_1.png";
import GradientText from "@/components/ui/GradientText";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-background overflow-hidden">
      {/* Doctor image - anchored to bottom-right like a background element */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-[-10%] w-[65vw] pointer-events-none">
        <img
          src={fotoDoutor}
          alt="Dr. Lourival Carvalho - Cirurgião Plástico"
          className="w-full h-full object-cover object-[30%_20%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-screen flex items-center pt-20">
        <div className="w-full lg:w-1/2 lg:pr-12">
          <h1 className="font-playfair text-2xl sm:text-3xl lg:text-[32px] lg:leading-[1.3] mb-6">
            <span className="text-foreground">SUA CHANCE DE ALCANÇAR A </span>
            <GradientText
              colors={["#F5E4AE", "#B3936C", "#A0A0A0"]}
              animationSpeed={5}
              direction="horizontal"
              yoyo={true}
              pauseOnHover={false}
              showBorder={false}
              className="font-bold"
            >
              VERSÃO IDEAL
            </GradientText>
            <span className="text-foreground"> DO SEU CORPO</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
            Cuidado completo e acompanhamento personalizado para alcançar resultados naturais e duradouros, elevando sua autoestima e qualidade de vida.
          </p>
          <a
            href="#contato"
            className="inline-block bg-[radial-gradient(50%_50%_at_50%_50%,#F5E4AE_0%,#B3936C_100%)] text-black font-montserrat text-sm uppercase tracking-wider px-8 py-4 hover:opacity-90 transition-all font-bold"
          >
            MARQUE SUA <span>CONSULTA</span>
          </a>
          <div className="mt-10 border-t border-border pt-6">
            <p className="font-playfair text-xl text-foreground font-bold">Dr. Lourival Carvalho</p>
            <p className="text-muted-foreground text-sm uppercase tracking-wider">Cirurgião Plástico Especialista</p>
          </div>
        </div>

        {/* Mobile image */}
        <div className="lg:hidden flex justify-center mt-8">
          <img
            src={fotoDoutor}
            alt="Dr. Lourival Carvalho - Cirurgião Plástico"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
