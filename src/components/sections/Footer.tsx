import logo from "@/assets/Logo_Lourival_Carvalho.png";
import vrffLogo from "@/assets/vrff-logo.png";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Logo + Tagline */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="Dr. Lourival Carvalho" className="h-10" />
            <div className="hidden sm:block w-px h-8 bg-border" />
            <p className="text-muted-foreground text-sm uppercase tracking-wider font-montserrat">
              MODELADOR DE <span className="font-bold">CORPOS IDEAIS</span>
            </p>
          </div>

          {/* Center: Social */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-muted-foreground text-xs uppercase tracking-wider">
              Nos siga nas Redes Sociais
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:opacity-80 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:opacity-80 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.72a8.19 8.19 0 0 0 4.76 1.52V6.79a4.83 4.83 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: VRFF */}
          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-muted-foreground text-xs">Feito por</p>
            <img src={vrffLogo} alt="VRF&F" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
