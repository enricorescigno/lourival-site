import { useEffect } from "react";
import GradientText from "@/components/ui/GradientText";
import imagemSobre from "@/assets/Imagem_Sobre_Nos.png";
const procedimentosList = [
  "LIPOASPIRAÇÃO",
  "ABDOMINOPLASTIA",
  "CIRURGIAS MAMÁRIAS",
  "MOMMY MAKEOVER",
  "CIRURGIA ÍNTIMA",
  "CONTORNO CORPORAL",
  "EXTREMIDADES",
  "FACE"
];

const Lp = () => {
  useEffect(() => {
    // Inject the Typeform script
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
        // Cleanup script on unmount
        if (document.body.contains(script)) {
            document.body.removeChild(script);
        }
    };
  }, []);

  return (
    <div className="bg-[#121212] min-h-screen w-full flex justify-center">
      <div className="w-full max-w-md bg-background flex flex-col gap-12 pb-12 shadow-2xl relative overflow-hidden">
        
        {/* Title Section */}
        <div className="px-6 pt-12 text-center flex flex-col items-center">
          <h1 className="font-playfair leading-[1.1] mb-6 flex flex-col items-center justify-center w-full">
            <span className="text-foreground block text-xl sm:text-2xl tracking-tight mb-2 whitespace-nowrap">
              SUA CHANCE DE ALCANÇAR A
            </span>
            <GradientText
              colors={["#F5E4AE", "#B3936C", "#A0A0A0"]}
              animationSpeed={5}
              direction="horizontal"
              yoyo={true}
              pauseOnHover={false}
              showBorder={false}
              className="font-bold text-4xl sm:text-5xl block"
            >
              VERSÃO IDEAL
            </GradientText>
            <span className="text-foreground block text-xl sm:text-2xl tracking-tight mt-2 whitespace-nowrap">
              DO SEU CORPO
            </span>
          </h1>
        </div>

        {/* About & Procedures Section */}
        <div className="px-6 text-center flex flex-col gap-6 mt-4">
          <div className="w-[60%] mx-auto max-w-[240px]">
            <img
              src={imagemSobre}
              alt="Dr. Lourival Carvalho"
              className="w-full h-auto object-contain object-center rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>
          
          <h2 className="font-playfair text-2xl text-foreground font-bold">
            DR. LOURIVAL CARVALHO
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-[320px] mx-auto">
            Cirurgião Plástico brasileiro especializado em Contorno Corporal, LipoHD e Cirurgias Mamárias. 
            Com formações em centros de excelência como IMIP-PE e Instituto Boggio, é reconhecido pela busca de resultados naturais e harmônicos, 
            já tendo realizado <strong className="text-foreground">mais de 200 lipos de sucesso</strong>.
          </p>

          <div className="mt-4 bg-muted/30 p-6 rounded-2xl border border-border">
            <h3 className="font-playfair text-lg text-foreground font-bold mb-4">PROCEDIMENTOS</h3>
            <ul className="grid grid-cols-1 gap-y-3 text-left w-fit mx-auto">
              {procedimentosList.map((p, j) => (
                <li key={j} className="text-foreground text-sm flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,#F5E4AE_0%,#B3936C_100%)] flex-shrink-0" />
                  <span className="uppercase tracking-wide">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="px-6 flex flex-col items-center gap-4 mt-2">
          <a
            href="https://wa.me/5581994401032?text=Gostaria%20de%20iniciar%20meu%20atendimento"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[320px] inline-flex items-center justify-center rounded-[20px] bg-[radial-gradient(50%_50%_at_50%_50%,#F5E4AE_0%,#B3936C_100%)] text-black font-montserrat text-sm uppercase tracking-wider px-8 py-5 hover:opacity-90 transition-all font-bold shadow-lg"
          >
            INICIE SEU ATENDIMENTO
          </a>
          <a 
            href="#formulario" 
            className="text-xs text-muted-foreground underline decoration-muted-foreground/30 underline-offset-4 hover:text-primary transition-colors mt-2"
          >
            se preferir preencha o formulário
          </a>
        </div>



        {/* Embedded Typeform Popup Button Section */}
        <div id="formulario" className="mt-8 px-6 w-full flex justify-center">
          <div className="w-full bg-card border border-border rounded-xl p-8 text-center flex flex-col items-center shadow-sm">
            <h3 className="font-playfair text-xl text-foreground font-bold mb-4">FORMULÁRIO DE TRIAGEM</h3>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed max-w-[280px]">
              Clique no botão abaixo para preencher o formulário. Ele abrirá na própria tela.
            </p>
            <button
              data-tf-popup="wR0BZEhR"
              data-tf-hidden="utm_source=google,utm_medium=xxxxx,utm_campaign=xxxxx,utm_term=xxxxx,utm_content=xxxxx"
              className="inline-flex items-center justify-center rounded-[20px] bg-[radial-gradient(50%_50%_at_50%_50%,#F5E4AE_0%,#B3936C_100%)] text-black font-montserrat text-sm uppercase tracking-wider px-8 py-5 hover:opacity-90 transition-all font-bold shadow-lg w-full max-w-[320px]"
            >
              PREENCHER FORMULÁRIO
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Lp;
