import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Trophy, Heart, Users, ChevronLeft } from "lucide-react";

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

const photos = [
  { src: "/volley-1.png", alt: "L'équipe de Beauvais avec le banner Destin'Action" },
  { src: "/volley-2.png", alt: "Présentation de l'association sur le terrain" },
  { src: "/volley-3.png", alt: "Photo de groupe avec l'équipe et Destin'Action" },
  { src: "/volley-4.png", alt: "Membre de Destin'Action devant le banner" },
  { src: "/volley-5.png", alt: "Remise du maillot sur le terrain" },
  { src: "/volley-6.png", alt: "Banners Destin'Action et cocktail des partenaires" },
  { src: "/volley-7.png", alt: "Ambiance dans les tribunes" },
];

function PhotoGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const prev = () => setSelected(s => s !== null ? (s - 1 + photos.length) % photos.length : null);
  const next = () => setSelected(s => s !== null ? (s + 1) % photos.length : null);

  return (
    <>
      {/* Grille de photos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden cursor-pointer group relative"
            style={{ border: "2px solid #D4A01733" }}
            onClick={() => setSelected(i)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              style={{ background: "rgba(0,0,0,0.4)" }}
            >
              <span className="text-white text-sm font-semibold" style={{ fontFamily: "Playfair Display" }}>
                Voir en grand
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            {/* Image */}
            <img
              src={photos[selected].src}
              alt={photos[selected].alt}
              className="w-full rounded-2xl object-contain"
              style={{ maxHeight: "80vh" }}
            />

            {/* Bouton fermer */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{ background: "#D4A017" }}
            >
              ✕
            </button>

            {/* Flèche gauche */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              style={{ background: "#2D5016", color: "#D4A017" }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Flèche droite */}
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              style={{ background: "#2D5016", color: "#D4A017" }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Compteur */}
            <p className="text-center mt-3 text-sm" style={{ color: "#D4A017", fontFamily: "Playfair Display" }}>
              {selected + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default function Sport() {
  const section1 = useInView();
  const section2 = useInView();
  const section3 = useInView();

  const fadeIn = (inView: boolean) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(32px)",
    transition: "opacity 0.7s ease, transform 0.7s ease",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
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
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold"
              style={{ background: "#D4A01722", color: "#D4A017", border: "1px solid #D4A01755" }}
            >
              <Trophy className="w-4 h-4" />
              Événement Sportif Solidaire
            </div>

            <h1
              className="text-5xl md:text-6xl font-bold text-foreground leading-tight"
              style={{ fontFamily: "Playfair Display" }}
            >
              Coupe de France de <span className="text-primary">Volley-Ball</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Destin'Action présente lors du match de Coupe de France à Beauvais — une soirée solidaire et inoubliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={() => window.location.href = "/donate"}
              >
                Faire un don maintenant <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground/5"
                onClick={() => window.location.href = "/contact"}
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Message de l'association */}
      <section className="py-20 bg-secondary/5" ref={section1.ref} style={fadeIn(section1.inView)}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2
                className="text-3xl font-bold text-foreground mb-4"
                style={{ fontFamily: "Playfair Display" }}
              >
                Un moment fort pour Destin'Action
              </h2>
              <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
            </div>

            {/* Carte message */}
            <div
              className="rounded-2xl p-8 md:p-10 border border-border shadow-sm"
              style={{ background: "var(--card)" }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#D4A01722" }}
                >
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground" style={{ fontFamily: "Playfair Display" }}>
                    ONG Destin'Action
                  </p>
                  <p className="text-sm text-muted-foreground">Message de l'association</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed" style={{ fontFamily: "Playfair Display" }}>
                <p className="text-lg font-semibold text-foreground">
                  Une belle soirée qui restera gravée dans nos mémoires ! 🏐
                </p>
                <p>
                  Nous avons eu l'honneur de représenter notre association lors du match de Coupe de France de volley-ball à Beauvais. Une expérience enrichissante et émouvante, qui nous a permis de faire connaître notre mission auprès d'un large public.
                </p>
                <p>
                  Si la victoire n'était pas au rendez-vous pour notre équipe ce soir-là, l'essentiel était bien présent : la solidarité, la convivialité, et la chaleur de tous ceux qui se sont mobilisés pour cet événement.
                </p>
                <p>
                  Un grand merci du fond du cœur à <strong className="text-foreground">Kolias Sécurité</strong>, sans qui notre présence à cet événement n'aurait pas été possible. Leur soutien est précieux et nous touche profondément.
                </p>
                <p>
                  Nous espérons que cette belle visibilité portera ses fruits et que vous serez nombreux à nous rejoindre pour le Gala de charité. Ensemble, construisons des destins. 🌍✨
                </p>
                <p className="italic text-primary font-medium">
                  Belle journée à toutes et à tous !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-16" ref={section2.ref} style={fadeIn(section2.inView)}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            {[
              { icon: <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />, valeur: "Coupe de France", label: "Volley-Ball" },
              { icon: <Users className="w-8 h-8 text-primary mx-auto mb-3" />, valeur: "Beauvais", label: "Lieu de l'événement" },
              { icon: <Heart className="w-8 h-8 text-primary mx-auto mb-3" />, valeur: "Kolias Sécurité", label: "Partenaire de la soirée" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all duration-300"
                style={{ background: "var(--card)" }}
              >
                {item.icon}
                <p className="text-xl font-bold text-foreground mb-1" style={{ fontFamily: "Playfair Display" }}>
                  {item.valeur}
                </p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie photos */}
      <section className="py-20 bg-secondary/5" ref={section3.ref} style={fadeIn(section3.inView)}>
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-foreground mb-4"
              style={{ fontFamily: "Playfair Display" }}
            >
              Les photos de la soirée
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground">Cliquez sur une photo pour l'agrandir</p>
          </div>
          <PhotoGallery />
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-3xl font-bold text-foreground mb-6"
              style={{ fontFamily: "Playfair Display" }}
            >
              Soutenez notre mission
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Chaque geste compte. En faisant un don, vous participez directement à l'éducation et au bien-être des enfants en situation de précarité au Togo. 🌍
            </p>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              onClick={() => window.location.href = "/donate"}
            >
              Faire un don <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
