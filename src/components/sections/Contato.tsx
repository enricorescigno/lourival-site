import { useState } from "react";
import fotoClinica1 from "@/assets/foto-clinica1.png";
import fotoClinica2 from "@/assets/foto-clinica2.png";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const Contato = () => {
  const [form, setForm] = useState({ nome: "", email: "", whatsapp: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">Localização</p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-foreground">
            VENHA NOS <span className="text-primary">CONHECER</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr_1.5fr] gap-4">
          {/* Clinic photos */}
          <div className="flex flex-col gap-4">
            <div className="rounded-lg overflow-hidden" style={{ aspectRatio: '262/385' }}>
              <img src={fotoClinica1} alt="Clínica Dr. Lourival Carvalho" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden" style={{ aspectRatio: '262/267' }}>
              <img src={fotoClinica2} alt="Clínica Dr. Lourival Carvalho" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden" style={{ aspectRatio: '668/691' }}>
            <iframe
              src="https://maps.google.com/maps?q=RioMar+Trade+Center+5,+Avenida+Rep%C3%BAblica+do+L%C3%ADbano,+256,+sala+720,+Pina,+Recife,+PE,+51110-160&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica Dr. Lourival Carvalho"
            />
          </div>

          {/* Contact form */}
          <div className="bg-card border border-border rounded-lg p-8 flex flex-col h-full">
            <h3 className="font-playfair text-xl text-primary mb-6">SOLICITE CONTATO</h3>
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-center space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Seu Nome"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full bg-background border border-border rounded px-4 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Seu E-mail"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-background border border-border rounded px-4 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Seu WhatsApp"
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="w-full bg-background border border-border rounded px-4 py-4 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <InteractiveHoverButton
                type="submit"
                text="ENVIE AGORA"
                className="w-full bg-[radial-gradient(50%_50%_at_50%_50%,#F5E4AE_0%,#B3936C_100%)] text-black font-bold text-sm uppercase tracking-wider px-6 py-5 rounded hover:opacity-90 transition-opacity mt-2 border-none"
              />
            </form>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Contato;
