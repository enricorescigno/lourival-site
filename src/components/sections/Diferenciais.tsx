import LogoLoop from "@/components/ui/LogoLoop";

const diferenciais = [
  { text: "ESPECIALISTA", boldText: "NACIONAL" },
  { text: "RESULTADOS", boldText: "NATURAIS" },
  { text: "TECNOLOGIAS DE", boldText: "PONTA" },
  { text: "ACOMPANHAMENTO", boldText: "PERSONALIZADO" },
];

const Diferenciais = () => {
  return (
    <section className="py-8 border-y border-border bg-[#A0A0A0]">
      <div className="max-w-7xl mx-auto">
        <LogoLoop
          items={diferenciais}
          speed={50}
          direction="left"
          hoverSpeed={0}
          gap={60}
          fadeOut={true}
          scaleOnHover={true}
          textClassName="text-black text-xs sm:text-sm uppercase tracking-[0.2em] font-montserrat cursor-default"
        />
      </div>
    </section>
  );
};

export default Diferenciais;
