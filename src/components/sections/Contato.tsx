import { useState } from "react";
import fotoClinica1 from "@/assets/foto-clinica1.png";
import fotoClinica2 from "@/assets/foto-clinica2.png";
import Stepper, { Step } from "@/components/ui/Stepper";
import Carousel from "@/components/ui/Carousel";
import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
import img5 from "@/assets/5.png";

const carouselItems = [
  { id: 1, image: img1, title: "Clínica 1" },
  { id: 2, image: img2, title: "Clínica 2" },
  { id: 3, image: img3, title: "Clínica 3" },
  { id: 4, image: img4, title: "Clínica 4" },
  { id: 5, image: img5, title: "Clínica 5" },
];

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [procedimento, setProcedimento] = useState("");
  const [mensagem, setMensagem] = useState("");

  return (
    <section id="contato" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">Localização</p>
          <h2 className="font-playfair text-fluid-h2 text-foreground">
            VENHA NOS <span className="text-primary">CONHECER</span>
          </h2>
        </div>

        {/* Grid with fluid height on mobile, fixed layout on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2.5fr_1.5fr] gap-4 lg:min-h-[650px]">
          {/* Item 1 (Mobile Order 2): Clinic photos */}
          <div className="order-2 lg:order-none grid grid-cols-2 lg:flex lg:flex-col gap-4 h-[150px] lg:h-full lg:flex-1">
            <div className="rounded-lg overflow-hidden lg:flex-[3]">
              <img src={fotoClinica1} alt="Clínica Dr. Lourival Carvalho" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-lg overflow-hidden lg:flex-[2]">
              <img src={fotoClinica2} alt="Clínica Dr. Lourival Carvalho" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          {/* Item 2 (Mobile Order 1): Map */}
          <div className="order-1 lg:order-none flex flex-col gap-2 h-[300px] lg:h-full lg:flex-1">
            <div className="rounded-lg overflow-hidden flex-1 relative w-full h-full">
              <iframe
                src="https://maps.google.com/maps?q=RioMar+Trade+Center+5,+Avenida+Rep%C3%BAblica+do+L%C3%ADbano,+256,+sala+720,+Pina,+Recife,+PE,+51110-160&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute top-0 left-0 w-full h-full border-0"
                style={{ filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica Dr. Lourival Carvalho"
              />
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed hidden lg:block">
              RioMar Trade Center 5 - Avenida República do Líbano, 256 - sala 720 - Pina, Recife - PE, 51110-160
            </p>
          </div>

          {/* Item 3 (Mobile Order 3): Carousel + Stepper */}
          <div className="order-3 lg:order-none flex flex-col h-full gap-4 overflow-hidden">
            <div className="rounded-lg overflow-hidden h-[200px] lg:h-auto lg:flex-[3]">
              <Carousel
                items={carouselItems}
                baseWidth={window.innerWidth < 1024 ? window.innerWidth - 32 : 600}
                autoplay
                autoplayDelay={3000}
                pauseOnHover={false}
                loop
              />
            </div>
            <div className="overflow-hidden min-h-[300px] lg:h-auto lg:flex-[2]">
              <Stepper
                initialStep={1}
                onStepChange={(step) => console.log("Step:", step)}
                onFinalStepCompleted={() => {
                  console.log("Formulário enviado!", { nome, email, whatsapp, procedimento, mensagem });
                }}
                backButtonText="Voltar"
                nextButtonText="Próximo"
              >
                <Step>
                  <h2>Bem-vindo!</h2>
                  <p>Preencha seus dados para agendar uma consulta personalizada.</p>
                  <label>Nome completo</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </Step>

                <Step>
                  <h2>Contato</h2>
                  <p>Como podemos falar com você?</p>
                  <label>E-mail</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="(81) 99999-9999"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                  />
                </Step>

                <Step>
                  <h2>Procedimento</h2>
                  <label>Área de interesse</label>
                  <select value={procedimento} onChange={(e) => setProcedimento(e.target.value)}>
                    <option value="">Selecione...</option>
                    <option value="contorno-corporal">Contorno Corporal</option>
                    <option value="cirurgias-mamarias">Cirurgias Mamárias</option>
                    <option value="face">Face</option>
                    <option value="mommy-makeover">Mommy Makeover</option>
                    <option value="cirurgia-intima">Cirurgia Íntima</option>
                    <option value="extremidades">Extremidades</option>
                    <option value="outro">Outro</option>
                  </select>
                  <label>Mensagem (opcional)</label>
                  <textarea
                    placeholder="Conte-nos mais..."
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    rows={2}
                    style={{ resize: 'none' }}
                  />
                </Step>

                <Step>
                  <h2>Tudo Pronto!</h2>
                  <p>Obrigado, {nome || "paciente"}! Entraremos em contato em breve.</p>
                </Step>
              </Stepper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
