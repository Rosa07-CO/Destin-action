import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Heart, Users, Target, Lightbulb, Send } from "lucide-react";

// Hook: apparition au scroll
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

// Hook: compteur animé
function useCounter(target: number, inView: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

// Hook: typewriter
function useTypewriter(text: string, speed = 50) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const timer = setInterval(() => {
      if (i < text.length) { setDisplayed(text.slice(0, i + 1)); i++; }
      else clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return displayed;
}

// Composant carrousel
function PhotoCarousel() {
  const photos = [
    "/gala-1.jpg", "/gala-2.jpg", "/gala-3.jpg", "/gala-4.jpg",
    "/gala-5.jpg", "/gala-6.jpg", "/gala-7.jpg", "/gala-8.jpg",
    "/img-actions-france.jpg", "/img-projet-togo.jpg",
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [photos.length]);
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-xl" style={{ height: "340px" }}>
      {photos.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Photo ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{ background: i === current ? "#D4A017" : "rgba(255,255,255,0.5)" }}
          />
        ))}
      </div>
    </div>
  );
}

// Composant carrousel Ambassadeurs — 3 photos visibles avec flèches + auto-rotation
function AmbassadeurCarousel() {
  const photos = [
    "/ambassadeur-1.jpg", "/ambassadeur-2.jpg", "/ambassadeur-3.jpg",
    "/ambassadeur-4.jpg", "/ambassadeur-5.jpg", "/ambassadeur-6.jpg",
    "/ambassadeur-7.jpg", "/ambassadeur-8.jpg", "/ambassadeur-9.jpg",
    "/ambassadeur-10.jpg", "/ambassadeur-11.jpg", "/ambassadeur-12.jpg",
    "/ambassadeur-13.jpg", "/ambassadeur-14.jpg", "/ambassadeur-15.jpg",
    "/ambassadeur-16.jpg", "/ambassadeur-17.jpg",
  ];
  const [start, setStart] = useState(0);

  // Auto-rotation toutes les 2.5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setStart(s => (s + 1) % photos.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [photos.length]);

  const prev = () => setStart(s => (s - 1 + photos.length) % photos.length);
  const next = () => setStart(s => (s + 1) % photos.length);

  const getVisible = () => [0, 1, 2].map(i => photos[(start + i) % photos.length]);

  return (
    <div className="relative">
      {/* Flèche gauche */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 text-xl font-bold"
        style={{ background: "#2D5016", color: "#D4A017" }}
      >
        ‹
      </button>

      {/* Photos */}
      <div className="grid grid-cols-3 gap-4 px-6">
        {getVisible().map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="rounded-2xl overflow-hidden shadow-md"
            style={{ aspectRatio: "1" }}
          >
            <img
              src={src}
              alt={`Ambassadeur ${start + i + 1}`}
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Flèche droite */}
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 text-xl font-bold"
        style={{ background: "#2D5016", color: "#D4A017" }}
      >
        ›
      </button>

      {/* Points de navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setStart(i)}
            className="rounded-full transition-all duration-300"
            style={{
              background: i === start ? "#D4A017" : "#e8dfd3",
              width: i === start ? "20px" : "8px",
              height: "8px",
            }}
          />
        ))}
      </div>
    </div>
  );
}


function AnimatedCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`transition-all duration-300 ${className}`}
      style={{
        transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
        boxShadow: hovered ? "0 12px 32px rgba(212,160,23,0.25)" : "0 2px 8px rgba(0,0,0,0.08)",
        borderRadius: "12px",
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [donationAmount, setDonationAmount] = useState<number>(50);

  // Typewriter sur le héro
  const heroText = useTypewriter("Transmettons la chance d'apprendre", 45);

  // Sections fade-in
  const about = useInView();
  const project = useInView();
  const objectives = useInView();
  const impact = useInView();
  const actions = useInView();
  const contact = useInView();
  const stats = useInView();

  // Compteurs animés
  const count75 = useCounter(75, stats.inView);
  const count2700 = useCounter(2700, stats.inView);

  const progressRef = useInView();

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
              <pattern id="geo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="#D4A017" />
              </pattern>
            </defs>
            <rect width="1200" height="600" fill="url(#geo)" />
          </svg>
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1
                className="text-5xl md:text-6xl font-bold text-foreground leading-tight min-h-[120px]"
                style={{ fontFamily: "Playfair Display" }}
              >
                {heroText}
                <span className="animate-pulse text-primary">|</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg" style={{ opacity: heroText.length > 20 ? 1 : 0, transition: "opacity 0.5s" }}>
                L'éducation est la clé de l'avenir. Aidez-nous à construire un centre d'accueil pour les enfants en situation de précarité au Togo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4" style={{ opacity: heroText.length > 30 ? 1 : 0, transition: "opacity 0.5s" }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}>
                  Faire un don maintenant <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground/5"
                  onClick={() => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" })}>
                  En savoir plus
                </Button>
              </div>
            </div>
            <div className="relative">
              {/* Annonce Gala */}
              <a
                href="/evenement"
                className="group flex items-center gap-3 mb-4 w-full rounded-2xl p-4 cursor-pointer hover:scale-105 transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #000000 0%, #1a1209 100%)",
                  border: "1px solid #E2B55C44",
                  textDecoration: "none",
                }}
              >
                {/* Icône étoile animée */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse"
                  style={{ background: "rgba(226,181,92,0.2)", border: "1px solid #E2B55C" }}
                >
                  <span className="text-xl">🎭</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span
                      className="text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                      style={{ background: "#E2B55C", color: "#000" }}
                    >
                      Événement passé
                    </span>
                  </div>
                  <p className="text-sm font-semibold truncate" style={{ color: "#E2B55C", fontFamily: "Playfair Display" }}>
                    Gala de Charité · 18 Avril 2026 ✨
                  </p>
                  <p className="text-xs" style={{ color: "#C1A47E" }}>
                    Découvrez les photos et moments forts →
                  </p>
                </div>
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform"
                  style={{ background: "#E2B55C22", border: "1px solid #E2B55C44" }}
                >
                  <span style={{ color: "#E2B55C" }}>→</span>
                </div>
              </a>

              <PhotoCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div ref={about.ref} className="container" style={fadeIn(about.inView)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "Playfair Display" }}>
                Qui sommes-nous ?
              </h2>
              <p className="text-lg text-muted-foreground">
                L'ONG Destin'Action se mobilise pour changer la vie des enfants en situation de précarité au Togo. L'éducation est la clé de l'avenir, mais de nombreux enfants n'y ont pas accès.
              </p>
              <p className="text-lg text-muted-foreground">
                Notre mission : construire un centre d'accueil à Apesito, à 45 minutes de Lomé, pour offrir aux enfants et adolescents un espace sûr d'apprentissage, de développement personnel et de thérapie.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10"
                onClick={() => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" })}>
                Découvrir le projet <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            {/* Chiffres animés */}
            <div ref={stats.ref} className="order-1 lg:order-2 grid grid-cols-2 gap-6">
              {[
                { value: "2025", label: "Année de lancement", color: "primary", isStatic: true },
                { value: count75, suffix: "", label: "Enfants accueillis", color: "secondary", isStatic: false },
                { value: count2700, suffix: "m²", label: "Terrain à Apesito", color: "primary", isStatic: false },
                { value: "∞", label: "Possibilités d'avenir", color: "secondary", isStatic: true },
              ].map((stat, i) => (
                <AnimatedCard key={i}>
                  <Card className={`bg-gradient-to-br from-${stat.color}/10 to-${stat.color}/5 border-${stat.color}/20 p-6`}>
                    <div className={`text-4xl font-bold text-${stat.color} mb-2`}>
                      {stat.isStatic ? stat.value : `${stat.value}${stat.suffix || ""}`}
                    </div>
                    <p className="text-sm text-foreground">{stat.label}</p>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="project" className="py-20 bg-background">
        <div ref={project.ref} className="container" style={fadeIn(project.inView)}>
          <h2 className="text-4xl font-bold text-foreground text-center mb-12" style={{ fontFamily: "Playfair Display" }}>
            Le Centre d'Accueil à Apesito
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663306568498/dZbELJqBGQJykckP.jpg"
                alt="Centre d'accueil à Apesito"
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Playfair Display" }}>
                Un espace d'épanouissement complet
              </h3>
              <p className="text-muted-foreground">
                Le centre proposera un accueil de jour et internat pour 75 enfants et adolescents en situation de précarité.
              </p>
              <div className="space-y-3">
                {[
                  { title: "Scolarisation et ateliers éducatifs", desc: "Intégration en écoles ordinaires et activités découverte" },
                  { title: "Accompagnement personnalisé", desc: "Suivi psychologique et thérapeutique avec équipe interdisciplinaire" },
                  { title: "Suivi familial", desc: "Moments réguliers pour partager l'évolution et le bien-être" },
                ].map((item, i) => (
                  <AnimatedCard key={i}>
                    <div className="flex gap-3 p-3 rounded-xl bg-white border border-border">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-white">
        <div ref={objectives.ref} className="container" style={fadeIn(objectives.inView)}>
          <h2 className="text-4xl font-bold text-foreground text-center mb-12" style={{ fontFamily: "Playfair Display" }}>
            Objectifs de la Campagne
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Heart className="w-6 h-6" />, title: "Mobiliser les soutiens financiers", desc: "Collecter des fonds pour financer la construction et le fonctionnement du centre d'accueil.", bg: "bg-primary" },
              { icon: <Target className="w-6 h-6" />, title: "Sensibiliser le public", desc: "Mettre en lumière l'importance de l'accès à l'éducation comme facteur d'ascension sociale.", bg: "bg-secondary" },
              { icon: <Users className="w-6 h-6" />, title: "Créer une communauté", desc: "Fédérer des ambassadeurs engagés autour de la mission de Destin'Action.", bg: "bg-primary" },
            ].map((obj, i) => (
              <AnimatedCard key={i}>
                <Card className="p-8 h-full border-0 shadow-md">
                  <div className={`w-12 h-12 ${obj.bg} rounded-xl flex items-center justify-center mb-5 text-white`}>
                    {obj.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "Playfair Display" }}>
                    {obj.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{obj.desc}</p>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Section chiffres clés animés */}
      <section className="py-12 bg-secondary">
        <div ref={progressRef.ref} className="container" style={fadeIn(progressRef.inView)}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { emoji: "🌍", label: "Pays d'action", value: "France & Togo" },
              { emoji: "👦", label: "Enfants bénéficiaires", value: "75" },
              { emoji: "🏗️", label: "Terrain à Apesito", value: "2700m²" },
              { emoji: "💛", label: "Engagement bâtisseurs", value: "43€/mois" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-3xl">{item.emoji}</span>
                <p className="text-2xl font-bold text-primary" style={{ fontFamily: "Playfair Display" }}>{item.value}</p>
                <p className="text-sm text-secondary-foreground/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663306568498/sGkvxROVztOmvAKR.jpg"
                alt="Faire un don"
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "Playfair Display" }}>
                Faire un Don
              </h2>
              <p className="text-lg text-muted-foreground">
                Chaque contribution, grande ou petite, nous rapproche de notre objectif. Votre générosité change des vies.
              </p>
              <div>
                <p className="text-sm font-semibold text-foreground mb-3">Montant du don</p>
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {[25, 50, 100, 250].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setDonationAmount(amount)}
                      className="py-3 rounded-lg font-bold text-sm transition-all duration-200"
                      style={{
                        background: donationAmount === amount ? "#D4A017" : "#fff",
                        color: donationAmount === amount ? "#2D5016" : "#2D5016",
                        border: `2px solid ${donationAmount === amount ? "#D4A017" : "#e8dfd3"}`,
                        transform: donationAmount === amount ? "scale(1.05)" : "scale(1)",
                      }}
                    >
                      {amount}€
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(Number(e.target.value))}
                  className="w-full px-4 py-3 border-2 border-border rounded-lg mb-4 text-sm focus:border-primary focus:outline-none"
                  placeholder="Montant personnalisé"
                />
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Donner {donationAmount}€ maintenant
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">Don sécurisé · Reçu fiscal fourni</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Ambassadeurs — Carrousel */}
      <section className="py-20 bg-white">
        <div ref={impact.ref} className="container" style={fadeIn(impact.inView)}>
          <h2 className="text-4xl font-bold text-foreground text-center mb-4" style={{ fontFamily: "Playfair Display" }}>
            Nos Ambassadeurs
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ils croient en notre mission et partagent leurs mots pour inspirer le changement.
          </p>

          {/* Carrousel 3 photos visibles */}
          <AmbassadeurCarousel />

          {/* L'Impact de Votre Soutien — en dessous */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12" style={{ fontFamily: "Playfair Display" }}>
              L'Impact de Votre Soutien
            </h2>
            <div className="relative mb-10">
              <img
                src="/img-projet-togo.jpg"
                alt="Notre projet au Togo"
                className="w-full h-auto rounded-lg shadow-lg object-cover max-h-96 hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Target className="w-8 h-8" />, title: "Contribuer à l'épanouissement", desc: "Aider les jeunes en situation de précarité à construire leur personnalité et à se projeter.", color: "primary" },
                { icon: <Lightbulb className="w-8 h-8" />, title: "Préserver le lien familial", desc: "Renforcer les relations entre enfants, adolescents et leurs familles dans un environnement naturel.", color: "secondary" },
                { icon: <Heart className="w-8 h-8" />, title: "Ouvrir au savoir", desc: "Offrir aux enfants les outils pour apprendre et se construire un avenir.", color: "primary" },
              ].map((item, i) => (
                <AnimatedCard key={i}>
                  <Card className={`bg-white border-2 border-${item.color}/20 p-6`}>
                    <div className={`w-8 h-8 text-${item.color} mb-3`}>{item.icon}</div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nos Actions — Carrousel manuel */}
      <section className="py-20 bg-background">
        <div ref={actions.ref} className="container" style={fadeIn(actions.inView)}>
          <h2 className="text-4xl font-bold text-foreground text-center mb-4" style={{ fontFamily: "Playfair Display" }}>
            Nos Actions
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Destin'Action agit en France et au Togo pour accompagner les jeunes en difficulté.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/img-ce-que-nous-faisons.jpg", alt: "Ce que nous faisons" },
              { src: "/img-actions-france.jpg", alt: "Nos actions en France" },
              { src: "/img-citation-enfant.jpg", alt: "Chaque enfant mérite un avenir meilleur" },
              { src: "/img-ong-france-togo.jpg", alt: "L'ONG en France et au Togo" },
              { src: "/img-rejoignez-nous.jpg", alt: "Rejoignez Destin'Action" },
              { src: "/img-reseaux-sociaux.jpg", alt: "Suivez-nous sur les réseaux sociaux" },
            ].map((img, i) => (
              <AnimatedCard key={i} className="cursor-pointer">
                <div
                  className="rounded-xl overflow-hidden relative group"
                  style={{ border: "1px solid #e8dfd3" }}
                  onClick={() => {
                    const overlay = document.createElement("div");
                    overlay.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:pointer;";
                    const imgEl = document.createElement("img");
                    imgEl.src = img.src;
                    imgEl.style.cssText = "max-width:90vw;max-height:90vh;object-fit:contain;border-radius:8px;";
                    overlay.appendChild(imgEl);
                    overlay.onclick = () => document.body.removeChild(overlay);
                    document.body.appendChild(overlay);
                  }}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-64 object-contain bg-secondary/5 p-2 group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-4 py-2 rounded-full text-sm font-medium">Voir en grand</span>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
          <div className="text-center mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.facebook.com/profile.php?id=61579844312949&locale=fr_FR" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
              Facebook — Destin'Action
            </a>
            <a href="https://www.instagram.com/ongdestinaction/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Instagram — @ongdestinaction
            </a>
          </div>
        </div>
      </section>

      {/* Contact + Don Section */}
      <section id="contact" className="py-20 bg-background">
        <div ref={contact.ref} className="container" style={fadeIn(contact.inView)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedCard>
              <div className="bg-secondary rounded-2xl p-8 text-secondary-foreground">
                <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Playfair Display" }}>Faire un don</h2>
                <p className="text-secondary-foreground/80 mb-8">Chaque contribution, grande ou petite, nous rapproche de notre objectif.</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[{ amount: "25€", desc: "Fournitures scolaires" }, { amount: "50€", desc: "Repas une semaine" }, { amount: "100€", desc: "Soutien psychologique" }, { amount: "250€", desc: "Équipement atelier" }].map((item, i) => (
                    <div key={i} className="bg-white/10 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-primary">{item.amount}</p>
                      <p className="text-xs text-secondary-foreground/70 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  onClick={() => window.location.href = "/donate"}>
                  Faire un don maintenant
                </Button>
              </div>
            </AnimatedCard>

            <AnimatedCard>
              <div className="bg-white rounded-2xl shadow-md p-8 border border-border">
                <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "Playfair Display" }}>Nous contacter</h2>
                <p className="text-muted-foreground text-sm mb-6">Remplissez ce formulaire et nous vous répondrons sous 48h.</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">Nom *</label>
                      <input type="text" placeholder="Dupont" className="w-full px-3 py-2.5 border-2 border-border rounded-lg focus:border-primary focus:outline-none text-sm bg-background" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1">Prénom *</label>
                      <input type="text" placeholder="Jean" className="w-full px-3 py-2.5 border-2 border-border rounded-lg focus:border-primary focus:outline-none text-sm bg-background" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Âge *</label>
                    <input type="number" placeholder="Ex: 35" className="w-full px-3 py-2.5 border-2 border-border rounded-lg focus:border-primary focus:outline-none text-sm bg-background" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Email *</label>
                    <input type="email" placeholder="jean@exemple.fr" className="w-full px-3 py-2.5 border-2 border-border rounded-lg focus:border-primary focus:outline-none text-sm bg-background" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">Téléphone *</label>
                    <input type="tel" placeholder="06 12 34 56 78" className="w-full px-3 py-2.5 border-2 border-border rounded-lg focus:border-primary focus:outline-none text-sm bg-background" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    onClick={() => window.location.href = "/contact"}>
                    <Send className="w-4 h-4 mr-2" /> Envoyer →
                  </Button>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
