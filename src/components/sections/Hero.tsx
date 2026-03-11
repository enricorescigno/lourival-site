import fotoDoutor from "@/assets/FOTO_LAUDA_1.png";
import GradientText from "@/components/ui/GradientText";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-background overflow-hidden flex flex-col-reverse lg:block lg:min-h-screen pt-20 lg:pt-0">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-start pt-8 pb-12 lg:pt-20 lg:min-h-screen text-center lg:text-left">
        <div className="w-full lg:w-1/2 lg:pr-12">
          <h1 className="font-playfair text-fluid-h1 lg:leading-[1.3] mb-6 mt-4 lg:mt-0">
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
          <p className="text-muted-foreground text-fluid-body mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Cuidado completo e acompanhamento personalizado para alcançar resultados naturais e duradouros, elevando sua autoestima e qualidade de vida.
          </p>
          <a
            href="#contato"
            className="inline-block text-center rounded-[20px] bg-[radial-gradient(50%_50%_at_50%_50%,#F5E4AE_0%,#B3936C_100%)] text-black font-montserrat text-sm uppercase tracking-wider px-8 py-4 hover:opacity-90 transition-all font-bold"
          >
            MARQUE SUA <span>CONSULTA</span>
          </a>
          <div className="hidden lg:block mt-10 border-t border-border pt-6 pb-2 lg:pb-0">
            <p className="font-playfair text-fluid-h3 text-foreground font-bold">Dr. Lourival Carvalho</p>
            <p className="text-muted-foreground text-fluid-small uppercase tracking-wider">Cirurgião Plástico Especialista</p>
          </div>
        </div>
      </div>

      {/* Doctor image - Unified implementation
          Mobile: normal flow element above text (via flex-col-reverse), max-h 50vh
          Desktop: absolute positioned to the right side
      */}
      <div className="w-full lg:absolute lg:right-0 lg:top-0 lg:bottom-[-10%] lg:w-[65vw] pointer-events-none flex-shrink-0">
        <img
          src={fotoDoutor}
          alt="Dr. Lourival Carvalho - Cirurgião Plástico"
          className="w-full h-auto max-h-[50vh] lg:max-h-none object-cover object-top lg:object-[30%_20%]"
        />
      </div>
    </section>
  );
};

export default Hero;
