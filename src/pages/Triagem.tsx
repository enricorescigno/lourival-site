import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import logo from "@/assets/Logo_Lourival_Carvalho.png";

const Triagem = () => {
    useEffect(() => {
        // Inject the Typeform script
        const script = document.createElement("script");
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Simple Header */}
            <header className="h-20 border-b border-border bg-background/90 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                    >
                        <ChevronLeft size={20} />
                        <span>Voltar ao Início</span>
                    </Link>
                    <img src={logo} alt="Dr. Lourival Carvalho" className="h-8 sm:h-10" />
                    <div className="w-24 hidden sm:block" /> {/* Spacer for balance */}
                </div>
            </header>

            {/* Main Content - Typeform Container */}
            <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
                <div className="w-full max-w-4xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl min-h-[600px] lg:min-h-[700px] flex flex-col">
                    {/* Embedding Typeform with the provided div */}
                    <div
                        data-tf-live="01KKFKCP9BC4WVB3Q22D4E0EW1"
                        className="flex-1 w-full h-full"
                        style={{ width: '100%', height: '100%', minHeight: '600px' }}
                    ></div>
                </div>

                {/* Footer info */}
                <p className="mt-8 text-muted-foreground text-xs uppercase tracking-[0.2em] font-montserrat text-center">
                    DR. LOURIVAL CARVALHO — <span className="text-primary font-bold">MODELADOR DE CORPOS IDEAIS</span>
                </p>
            </main>
        </div>
    );
};

export default Triagem;
