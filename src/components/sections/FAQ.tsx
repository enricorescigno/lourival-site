import { useState } from "react";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/Logo_Lourival_Carvalho.png";

const faqs = [
  {
    q: "Posso fazer mais de um procedimento de uma só vez?",
    a: "Sim, é possível combinar procedimentos em um mesmo tempo cirúrgico, desde que seja seguro para o paciente. Na consulta, o Dr. Lourival avalia cada caso individualmente e planeja a melhor abordagem.",
  },
  {
    q: "Como funciona a primeira consulta?",
    a: "Na primeira consulta, o Dr. Lourival realiza uma avaliação completa, entende seus objetivos e apresenta as melhores opções de procedimentos. É um momento de escuta e planejamento personalizado.",
  },
  {
    q: "Em quanto tempo consigo ver o resultado final?",
    a: "O resultado final varia conforme o procedimento. Em geral, os resultados parciais são visíveis nas primeiras semanas, mas o resultado definitivo pode levar de 3 a 6 meses, quando o corpo finaliza seu processo de cicatrização e adaptação.",
  },
  {
    q: "Os resultados ficam naturais?",
    a: "Sim. O Dr. Lourival preza pela naturalidade e harmonia do corpo. Cada procedimento é planejado de forma personalizada para valorizar suas características e entregar um resultado natural e proporcional.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div className="flex flex-col items-center lg:items-start justify-center">
            <img src={logo} alt="Dr. Lourival Carvalho" className="w-40 mb-8" />
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-foreground text-center lg:text-left leading-tight">
              <span className="font-bold">DÚVIDAS</span>
              <br />
              QUE VOCÊ
              <br />
              PODE TER
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="text-foreground text-base group-hover:text-primary transition-colors pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={24}
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 pb-6" : "max-h-0"
                    }`}
                >
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
