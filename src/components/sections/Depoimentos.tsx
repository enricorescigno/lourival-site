import { Star } from "lucide-react";
import antesMamoplastia from "@/assets/antes-mamoplastia.png";
import depoisMamoplastia from "@/assets/depois-mamoplastia.png";

const depoimentos = [
  {
    procedimento: "MAMOPLASTIA",
    texto: "\"Desde a primeira consulta me senti muito segura. Eu tinha receio de fazer a cirurgia, mas o Dr. Lourival e toda a equipe me explicaram cada detalhe com muita paciência. O resultado ficou exatamente como eu sonhava: natural e proporcional ao meu corpo. Hoje me sinto muito mais confiante comigo mesma.\"",
    antes: antesMamoplastia,
    depois: depoisMamoplastia,
  },
  {
    procedimento: "PROTOCOLO LIPO LC",
    texto: "\"O que mais me impressionou foi o cuidado da equipe antes e depois da cirurgia. Tudo foi muito bem explicado e acompanhado. Hoje olho no espelho e vejo um corpo muito mais harmônico e definido, ou ideal como ele sempre fala kk. Valeu cada momento.\"",
    antes: null,
    depois: null,
  },
  {
    procedimento: "MOMMY MAKEOVER",
    texto: "\"O resultado ficou muito mais natural do que eu imaginava. Além da melhora estética, também senti mais conforto no dia a dia. O cuidado do Dr. Lourival e da equipe fez toda diferença nesse processo.\"",
    antes: null,
    depois: null,
  },
];

const Depoimentos = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-fluid-h2 text-foreground">
            ESCUTE QUEM JÁ ALCANÇOU O <span className="font-bold">CORPO IDEAL</span>
          </h2>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:px-0 md:mx-0 scrollbar-hide">
          {depoimentos.map((d, i) => (
            <div key={i} className="min-w-[85%] sm:min-w-[45%] md:min-w-0 snap-center bg-white border border-border rounded-lg overflow-hidden flex flex-col mr-4 md:mr-0 last:mr-0">
              <div className="aspect-video bg-neutral-900 flex items-center justify-center relative overflow-hidden">
                {d.antes && d.depois ? (
                  <>
                    <div className="absolute top-3 left-3 z-10 bg-black/60 px-2 py-0.5 rounded text-white text-[10px] uppercase tracking-wider">ANTES</div>
                    <div className="absolute top-3 right-3 z-10 bg-black/60 px-2 py-0.5 rounded text-white text-[10px] uppercase tracking-wider">DEPOIS</div>
                    <div className="w-1/2 h-full overflow-hidden">
                      <img src={d.antes} alt="Antes" loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-px h-full bg-white/30 flex-shrink-0" />
                    <div className="w-1/2 h-full overflow-hidden">
                      <img src={d.depois} alt="Depois" loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="absolute top-3 left-3 text-muted-foreground text-[10px] uppercase tracking-wider">ANTES</div>
                    <div className="absolute top-3 right-3 text-muted-foreground text-[10px] uppercase tracking-wider">DEPOIS</div>
                    <div className="w-px h-full bg-border absolute left-1/2" />
                  </>
                )}
              </div>
              <div className="p-6 bg-white flex-1">
                <div className="flex gap-1 mb-3 justify-center">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-[#B3936C] text-[#B3936C]" />
                  ))}
                </div>
                <p className="text-black text-sm font-bold uppercase tracking-wider mb-3 text-center font-montserrat">{d.procedimento}</p>
                <p className="text-black/80 text-xs leading-relaxed text-center">{d.texto}</p>
              </div>
            </div>
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

export default Depoimentos;
