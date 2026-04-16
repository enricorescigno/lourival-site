import React, { useEffect } from "react";
import GradientText from "@/components/ui/GradientText";
import LogoLoop from "@/components/ui/LogoLoop";

import { Star } from "lucide-react";
import antesMamoplastia from "@/assets/antes-mamoplastia.png";
import depoisMamoplastia from "@/assets/depois-mamoplastia.png";
import antesLipo from "@/assets/antes_lipo.png";
import depoisLipo from "@/assets/depois_lipo.png";
import antesMommy from "@/assets/antes_mommy.png";
import depoisMommy from "@/assets/depois_mommy.png";

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

const depoimentos = [
  {
    procedimento: "MAMOPLASTIA",
    texto: "\"Desde a primeira consulta me senti muito segura... O resultado ficou exatamente como eu sonhava: natural e proporcional ao meu corpo.\"",
    antes: antesMamoplastia,
    depois: depoisMamoplastia,
  },
  {
    procedimento: "PROTOCOLO LIPO LC",
    texto: "\"O que mais me impressionou foi o cuidado da equipe antes e depois da cirurgia. Tudo foi muito bem explicado e acompanhado.\"",
    antes: antesLipo,
    depois: depoisLipo,
  },
  {
    procedimento: "MOMMY MAKEOVER",
    texto: "\"O resultado ficou muito mais natural do que eu imaginava. Além da melhora estética, também senti mais conforto no dia a dia.\"",
    antes: antesMommy,
    depois: depoisMommy,
  },
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
        <div className="px-6 pt-12 text-center">
          <h1 className="font-playfair text-3xl leading-[1.3] mb-4">
            <span className="text-foreground block mb-2 text-2xl">SUA CHANCE DE ALCANÇAR A </span>
            <GradientText
              colors={["#F5E4AE", "#B3936C", "#A0A0A0"]}
              animationSpeed={5}
              direction="horizontal"
              yoyo={true}
              pauseOnHover={false}
              showBorder={false}
              className="font-bold text-4xl block"
            >
              VERSÃO IDEAL
            </GradientText>
            <span className="text-foreground block mt-2 text-2xl"> DO SEU CORPO</span>
          </h1>
        </div>

        {/* About & Procedures Section */}
        <div className="px-6 text-center flex flex-col gap-6">
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

        {/* Testimonials Carousel (infinite loop) */}
        <div className="mt-4 w-full">
          <h3 className="font-playfair text-xl text-foreground font-bold mb-6 text-center px-6">
            RESULTADOS REAIS
          </h3>
          
          {/* LogoLoop with custom content instead of text */}
          <LogoLoop
            items={depoimentos.map(d => ({
              content: (
                <div className="w-[300px] h-[380px] bg-white border border-border rounded-lg overflow-hidden flex flex-col mx-2">
                  <div className="h-[180px] bg-neutral-900 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                    <div className="absolute top-2 left-2 z-10 bg-black/60 px-2 py-0.5 rounded text-white text-[10px] uppercase tracking-wider">ANTES</div>
                    <div className="absolute top-2 right-2 z-10 bg-black/60 px-2 py-0.5 rounded text-white text-[10px] uppercase tracking-wider">DEPOIS</div>
                    <div className="w-1/2 h-full overflow-hidden">
                      <img src={d.antes} alt="Antes" loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-px h-full bg-white/30 flex-shrink-0" />
                    <div className="w-1/2 h-full overflow-hidden">
                      <img src={d.depois} alt="Depois" loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="p-5 bg-white flex-1 flex flex-col">
                    <div className="flex gap-1 mb-2 justify-center">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={14} className="fill-[#B3936C] text-[#B3936C]" />
                      ))}
                    </div>
                    <p className="text-black text-xs font-bold uppercase tracking-wider mb-2 text-center font-montserrat whitespace-normal">{d.procedimento}</p>
                    <p className="text-black/80 text-[11px] leading-relaxed text-center whitespace-normal overflow-hidden overflow-ellipsis line-clamp-4">{d.texto}</p>
                  </div>
                </div>
              )
            }))}
            speed={30}
            direction="left"
            gap={0}
            fadeOut={true}
            scaleOnHover={false}
          />
        </div>

        {/* Embedded Typeform */}
        <div id="formulario" className="mt-8 px-4 w-full">
          <div className="w-full bg-card border border-border rounded-xl overflow-hidden shadow-2xl min-h-[600px] flex flex-col">
            <div
                data-tf-live="01KKFKCP9BC4WVB3Q22D4E0EW1"
                className="flex-1 w-full h-full"
                style={{ width: '100%', height: '100%', minHeight: '600px' }}
            ></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Lp;
