import logoSlogan from "@/assets/Logo_Lourival_Carvalho_Com_Slogan.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Altura aproximada do header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="#hero" onClick={scrollToSection("hero")}>
          <img src={logoSlogan} alt="Dr. Lourival Carvalho" className="h-6 sm:h-10" />
        </a>

        <div className="flex items-center gap-4">
          <a
            href="#contato"
            onClick={scrollToSection("contato")}
            className="hidden md:inline-block rounded-[20px] bg-[radial-gradient(50%_50%_at_50%_50%,#F5E4AE_0%,#B3936C_100%)] text-black font-montserrat text-sm uppercase tracking-wider px-6 py-3 hover:opacity-90 transition-all font-bold"
          >
            MARQUE SUA <span>CONSULTA</span>
          </a>

          <button
            className="lg:hidden text-foreground flex items-center justify-center min-w-[44px] min-h-[44px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu with smooth transition */}
      <div
        className={`lg:hidden bg-background border-border overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[400px] border-t opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          <a href="#sobre" onClick={scrollToSection("sobre")} className="text-foreground text-sm uppercase tracking-widest py-2">Sobre</a>
          <a href="#solucoes" onClick={scrollToSection("solucoes")} className="text-foreground text-sm uppercase tracking-widest py-2">Soluções</a>
          <a href="#experiencia" onClick={scrollToSection("experiencia")} className="text-foreground text-sm uppercase tracking-widest py-2">Experiência</a>
          <a href="#faq" onClick={scrollToSection("faq")} className="text-foreground text-sm uppercase tracking-widest py-2">FAQ</a>
          <a href="#contato" onClick={scrollToSection("contato")} className="text-foreground text-sm uppercase tracking-widest py-2">Contato</a>
          <a
            href="#contato"
            onClick={scrollToSection("contato")}
            className="bg-[radial-gradient(50%_50%_at_50%_50%,#F5E4AE_0%,#B3936C_100%)] rounded-[20px] text-black font-montserrat text-sm uppercase tracking-wider px-6 py-3 text-center hover:opacity-90 transition-all font-bold mt-2"
          >
            MARQUE SUA <span>CONSULTA</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
