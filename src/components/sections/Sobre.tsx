import imagemSobre from "@/assets/Imagem_Sobre_Nos.png";

const Sobre = () => {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div>
            <img
              src={imagemSobre}
              alt="Dr. Lourival Carvalho - Sobre"
              className="w-full rounded-lg"
            />
          </div>

          {/* Right - Text */}
          <div>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-foreground mb-2">
              SOBRE
            </h2>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8 font-bold">
              LOURIVAL CARVALHO
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
              <p>
                Lourival Carvalho é Cirurgião Plástico brasileiro, com atuação especializada em Contorno Corporal, LipoHD e Cirurgias Mamárias.
              </p>
              <p>
                Reconhecido pela busca de resultados naturais e harmônicos, construiu sua trajetória unindo técnica precisa, atualização constante e acompanhamento individualizado.
              </p>
              <p>
                É fellow em Cosmiatria pelo Instituto Boggio e realizou residência médica em Cirurgia Geral no Hospital Agamenon Magalhães. Especialista em Cirurgia Plástica pelo Instituto de Medicina Integral Professor Fernando Figueira (IMIP-PE), um dos centros mais respeitados do país.
              </p>
              <p>
                Seu compromisso é oferecer segurança, transparência e excelência técnica em todas as etapas do cuidado.
              </p>
            </div>
            <a
              href="#contato"
              className="inline-block mt-8 bg-[radial-gradient(50%_50%_at_50%_50%,#F5E4AE_0%,#B3936C_100%)] text-black font-montserrat text-sm uppercase tracking-wider px-8 py-4 hover:opacity-90 transition-all font-bold"
            >
              MARQUE SUA <span>CONSULTA</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
