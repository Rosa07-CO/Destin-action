import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Trophy, Clock, Calendar, MapPin } from "lucide-react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Sport() {
  const section1 = useInView();
  const section2 = useInView();

  const fadeIn = (inView: boolean) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(32px)",
    transition: "opacity 0.7s ease, transform 0.7s ease",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section — charte Home */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <defs>
              <pattern id="geo2" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="#D4A017" />
              </pattern>
            </defs>
            <rect width="1200" height="600" fill="url(#geo2)" />
          </svg>
        </div>
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold"
              style={{ background: "#D4A01722", color: "#D4A017", border: "1px solid #D4A01755" }}>
              <Trophy className="w-4 h-4" />
              Événement Sportif Solidaire
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight"
              style={{ fontFamily: "Playfair Display" }}>
              À venir <span className="text-primary">prochainement</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Un événement sportif solidaire en cours de préparation.
              Rejoignez-nous pour bouger ensemble au service d'une belle cause !
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={() => window.location.href = "/donate"}>
                Faire un don maintenant <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground/5"
                onClick={() => window.location.href = "/contact"}>
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section infos — style cartes Home */}
      <section className="py-20 bg-secondary/5" ref={section1.ref} style={fadeIn(section1.inView)}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "Playfair Display" }}>
              L'événement en préparation
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <Calendar className="w-8 h-8 text-primary" />, titre: "Date", texte: "Annoncée prochainement" },
              { icon: <MapPin className="w-8 h-8 text-primary" />, titre: "Lieu", texte: "À confirmer" },
              { icon: <Clock className="w-8 h-8 text-primary" />, titre: "Horaires", texte: "À confirmer" },
            ].map((item, i) => (
              <div key={i}
                className="rounded-2xl p-8 text-center border border-border shadow-sm hover:shadow-md transition-all duration-300"
                style={{ background: "var(--card)" }}>
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-bold text-foreground mb-2" style={{ fontFamily: "Playfair Display" }}>{item.titre}</h3>
                <p className="text-muted-foreground text-sm">{item.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section mission — style Home */}
      <section className="py-20" ref={section2.ref} style={fadeIn(section2.inView)}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "Playfair Display" }}>
              Pourquoi participer ?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Chaque participation à notre événement sportif aide directement les enfants en situation 
              de précarité au Togo. Sport et solidarité : deux valeurs qui nous unissent.
              Ensemble, construisons des destins. 🌍
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              onClick={() => window.location.href = "/project"}>
              Découvrir notre projet <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
