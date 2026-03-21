import icone1 from "@/assets/ICONE_1.png";
import icone2 from "@/assets/ICONE_2.png";
import icone3 from "@/assets/ICONE_3.png";
import icone4 from "@/assets/ICONE_4.png";
import icone5 from "@/assets/ICONE_5.png";
import icone6 from "@/assets/ICONE_6.png";
import GlareHover from "@/components/ui/GlareHover";

const items = [
  { icon: icone1, title: "DESEJOS E NECESSIDADES", desc: "Dr. Lourival Carvalho constrói com você um plano sob medida, capaz de atender aos seus desejos e necessidades, buscando resultados naturais e duradouros." },
  { icon: icone2, title: "ACOMPANHAMENTO PESSOAL", desc: "Nossa equipe é treinada e capacitada para acompanhar todo o seu processo cirúrgico, esclarecendo dúvidas, organizando cronogramas e facilitando a preparação de acordo com a sua realidade." },
  { icon: icone3, title: "PREPARAÇÃO PRÉ-OPERATÓRIA", desc: "Preparação completa no pré-operatório para que seu procedimento ocorra com segurança e o resultado esteja alinhado ao que você espera." },
  { icon: icone4, title: "TECNOLOGIA DE PONTA", desc: "Aplicação de tecnologias de ponta por um profissional qualificado, capaz de extrair o melhor da inovação e proporcionar resultados naturais, seguros e duradouros." },
  { icon: icone5, title: "SUPORTE PÓS-OPERATÓRIO", desc: "Atuação da equipe LC no pós-operatório, com acompanhamento de fisioterapia, atendimentos home care para retirada de drenos e protocolos com nutrólogos para manutenção dos resultados." },
  { icon: icone6, title: "RETORNO DE LONGO PRAZO", desc: "Nossos procedimentos são planejados para resultados duradouros. O médico acompanha sua evolução com retornos após 3 e 6 meses e, posteriormente, anuais." },
];

const Experiencia = () => {
  return (
    <section id="experiencia" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-fluid-h2 text-foreground">
            SUA EXPERIÊNCIA SERÁ <span className="font-bold">ULTRA PERSONALIZADA</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
          {items.map((item, i) => (
            <GlareHover
              key={i}
              glareColor="#f5e4ae"
              glareOpacity={0.5}
              glareSize={500}
              transitionDuration={1100}
              borderRadius="8px"
            >
              <div className="bg-card border border-border rounded-lg p-4 md:p-8 hover:border-primary/30 transition-colors w-full h-full min-h-[180px] md:min-h-[320px] lg:min-h-[300px] flex flex-col items-center justify-start md:justify-between">
                <div className="flex flex-col items-center justify-center gap-1 mb-2 md:gap-0 md:mb-0">
                  <img src={item.icon} alt={item.title} loading="lazy" className="w-8 h-8 md:w-24 md:h-24 mb-2 md:mb-6 object-contain flex-shrink-0" />
                  <h3 className="font-montserrat text-[10px] md:text-sm text-primary font-bold uppercase tracking-wider text-center leading-tight md:mb-3">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-[9px] md:text-xs leading-relaxed text-center">{item.desc}</p>
              </div>
            </GlareHover>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contato"
            className="inline-block text-center rounded-[20px] bg-[radial-gradient(50%_50%_at_50%_50%,#F5E4AE_0%,#B3936C_100%)] text-black font-montserrat text-sm uppercase tracking-wider px-8 py-4 hover:opacity-90 transition-all font-bold"
          >
            MARQUE SUA <span>CONSULTA</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
