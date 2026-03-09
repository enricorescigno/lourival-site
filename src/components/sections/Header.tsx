import logoSlogan from "@/assets/Logo_Lourival_Carvalho_Com_Slogan.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="#hero">
          <img src={logoSlogan} alt="Dr. Lourival Carvalho" className="h-8 sm:h-10" />
        </a>

        <a
          href="#contato"
          className="hidden md:inline-block bg-[radial-gradient(50%_50%_at_50%_50%,#F5E4AE_0%,#B3936C_100%)] text-black font-montserrat text-sm uppercase tracking-wider px-6 py-3 hover:opacity-90 transition-all font-bold"
        >
          MARQUE SUA <span>CONSULTA</span>
        </a>

        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-6 flex flex-col gap-4">
          <a href="#sobre" onClick={() => setMenuOpen(false)} className="text-foreground text-sm uppercase tracking-widest">Sobre</a>
          <a href="#solucoes" onClick={() => setMenuOpen(false)} className="text-foreground text-sm uppercase tracking-widest">Soluções</a>
          <a href="#experiencia" onClick={() => setMenuOpen(false)} className="text-foreground text-sm uppercase tracking-widest">Experiência</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="text-foreground text-sm uppercase tracking-widest">FAQ</a>
          <a href="#contato" onClick={() => setMenuOpen(false)} className="text-foreground text-sm uppercase tracking-widest">Contato</a>
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="bg-[radial-gradient(50%_50%_at_50%_50%,#F5E4AE_0%,#B3936C_100%)] text-black font-montserrat text-sm uppercase tracking-wider px-6 py-3 text-center hover:opacity-90 transition-all font-bold"
          >
            MARQUE SUA <span>CONSULTA</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
