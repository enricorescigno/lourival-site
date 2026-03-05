import logo from "@/assets/Logo_Lourival_Carvalho.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={logo} alt="Dr. Lourival Carvalho" className="h-10" />
            <p className="text-muted-foreground text-xs">Modelador de Corpos Ideais</p>
          </div>

          <div className="flex gap-8">
            <a href="#sobre" className="text-muted-foreground text-sm hover:text-primary transition-colors">Sobre</a>
            <a href="#solucoes" className="text-muted-foreground text-sm hover:text-primary transition-colors">Soluções</a>
            <a href="#faq" className="text-muted-foreground text-sm hover:text-primary transition-colors">FAQ</a>
            <a href="#contato" className="text-muted-foreground text-sm hover:text-primary transition-colors">Contato</a>
          </div>

          <div className="flex gap-6">
            <span className="text-muted-foreground text-sm hover:text-primary cursor-pointer transition-colors">Instagram</span>
            <span className="text-muted-foreground text-sm hover:text-primary cursor-pointer transition-colors">Facebook</span>
            <span className="text-muted-foreground text-sm hover:text-primary cursor-pointer transition-colors">YouTube</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Dr. Lourival Carvalho — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
