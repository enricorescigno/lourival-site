import imgContornoCorporal from "@/assets/contorno-corporal.png";
import imgCirurgiasMamarias from "@/assets/cirurgias-mamarias.png";
import imgExtremidades from "@/assets/extremidades.png";
import imgMommymakeover from "@/assets/mommymakeover.png";
import imgCirurgiaIntima from "@/assets/cirurgia-intima.png";
import imgFace from "@/assets/face.png";

const solucoes = [
  {
    title: "CONTORNO CORPORAL",
    desc: "Procedimentos que refazem que melhoram todo o contorno do seu corpo.",
    procedures: ["LIPOASPIRAÇÃO", "ABDOMINOPLASTIA", "TRATAMENTO DE LIPEDEMA", "ENXERTIA MUSCULAR", "LIPOABDOMINOPLASTIA", "REMODELAMENTO GLÚTEO"],
    image: imgContornoCorporal,
  },
  {
    title: "CIRURGIAS MAMÁRIAS",
    desc: "Procedimentos de remodelam e dão simetria e naturalidade às mamas, sendo de aumento ou redução.",
    procedures: ["MASTOPEXIA COM PRÓTESE", "MASTOPEXIA SEM PRÓTESE", "MAMOPLASTIA REDUTORA", "MAMOPLASTIA DE AUMENTO"],
    image: imgCirurgiasMamarias,
  },
  {
    title: "EXTREMIDADES",
    desc: "Procedimentos que redefinem contornos de braços e pernas, buscando melhorar proporção, firmeza e conforto.",
    procedures: ["BRAQUIOPLASTIA", "CRUROPLASTIA"],
    image: imgExtremidades,
  },
  {
    title: "MOMMYMAKEOVER",
    desc: "Procedimento que combina diferentes técnicas em uma única cirurgia para remodelar o corpo após as mudanças da gestação.",
    procedures: ["PROCEDIMENTOS DE ABDOMEN", "PROCEDIMENTOS DE MAMA", "PROCEDIMENTOS DE CONTORNO CORPORAL"],
    image: imgMommymakeover,
  },
  {
    title: "CIRURGIAS ÍNTIMAS",
    desc: "Procedimentos realizados nas áreas íntimas para devolver conforto, bem-estar e naturalidade.",
    procedures: ["NINFOPLASTIA", "VAGINOPLASTIA", "LIPO DO MONTE DE VÊNUS", "DEMAIS PROCEDIMENTOS"],
    image: imgCirurgiaIntima,
  },
  {
    title: "FACE",
    desc: "Procedimentos que suavizam os traços e corrigem imperfeições faciais, devolvendo harmonia facial.",
    procedures: ["BLEFAROPLASTIA", "OTOPLASTIA", "FACELIFT", "RINOPLASTIA"],
    image: imgFace,
  },
];

const Solucoes = () => {
  return (
    <section id="solucoes" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-fluid-h2 text-foreground">
            SOLUÇÕES <span className="font-bold">IDEAIS</span> PARA O SEU <span className="font-bold">MOMENTO ATUAL</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solucoes.map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary/30 transition-colors flex flex-col">
              <div className="h-48 sm:aspect-[4/3] lg:aspect-video overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-playfair text-lg text-foreground font-bold mb-3 uppercase text-center">{s.title}</h3>
                <p className="text-muted-foreground text-xs mb-4 leading-relaxed">{s.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1 mb-6">
                  {s.procedures.map((p, j) => (
                    <li key={j} className="text-foreground text-xs flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className="mt-auto inline-flex items-center justify-center min-h-[44px] text-center rounded-md bg-[radial-gradient(50%_50%_at_50%_50%,#F5E4AE_0%,#B3936C_100%)] text-black font-montserrat text-xs uppercase tracking-wider px-4 py-3 hover:opacity-90 transition-all font-bold"
                >
                  EU QUERO ESTA <span>SOLUÇÃO</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solucoes;
