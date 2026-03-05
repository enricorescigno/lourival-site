const diferenciais = [
  { before: "ESPECIALISTA", bold: "NACIONAL" },
  { before: "RESULTADOS", bold: "NATURAIS" },
  { before: "TECNOLOGIAS DE", bold: "PONTA" },
  { before: "ACOMPANHAMENTO", bold: "PERSONALIZADO" },
];

const Diferenciais = () => {
  return (
    <section className="py-8 border-y border-border bg-[#A0A0A0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
          {diferenciais.map((item, i) => (
            <div key={i} className="flex items-center">
              {i > 0 && <div className="hidden sm:block w-px h-8 bg-black/40 mx-6" />}
              <p className="text-black text-xs sm:text-sm uppercase tracking-[0.2em] text-center font-montserrat">
                {item.before} <span className="font-bold">{item.bold}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
