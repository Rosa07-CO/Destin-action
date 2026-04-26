import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Heart, Users, Target, Lightbulb } from "lucide-react";

/**
 * Home Page - Page d'accueil
 * Design: Modernisme humaniste avec asymétrie dynamique
 * Sections: Hero, À propos, Projet, Objectifs, Appel aux dons, Impact
 */

export default function Home() {
  const [donationAmount, setDonationAmount] = useState<number>(50);

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
            {/* Left Content */}
            <div className="space-y-6">
              <h1
                className="text-5xl md:text-6xl font-bold text-foreground leading-tight"
                style={{ fontFamily: "Playfair Display" }}
              >
                Transmettons la chance d'apprendre
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                L'éducation est la clé de l'avenir. Aidez-nous à construire un centre d'accueil pour les enfants en
                situation de précarité au Togo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Faire un don maintenant
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-foreground/5"
                  onClick={() => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" })}
                >
                  En savoir plus
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663306568498/ZfRCCNzEXv9SwTGSQKuCQu/pasted_file_h06UPD_image_7c03d815.png"
                alt="Équipe Destin'Action - Découvrez l'ONG"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <h2
                className="text-4xl font-bold text-foreground"
                style={{ fontFamily: "Playfair Display" }}
              >
                Qui sommes-nous ?
              </h2>
              <p className="text-lg text-muted-foreground">
                L'ONG Destin'Action se mobilise pour changer la vie des enfants en situation de précarité au Togo.
                L'éducation est la clé de l'avenir, mais de nombreux enfants n'y ont pas accès.
              </p>
              <p className="text-lg text-muted-foreground">
                Notre mission : construire un centre d'accueil à Apesito, à 45 minutes de Lomé, pour offrir aux enfants
                et adolescents un espace sûr d'apprentissage, de développement personnel et de thérapie.
              </p>
              <div className="pt-4">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Découvrir le projet <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right Stats */}
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-6">
                <div className="text-4xl font-bold text-primary mb-2">2025</div>
                <p className="text-sm text-foreground">Année de lancement du projet</p>
              </Card>
              <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 p-6">
                <div className="text-4xl font-bold text-secondary mb-2">75</div>
                <p className="text-sm text-foreground">Enfants accueillis au lancement</p>
              </Card>
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-6">
                <div className="text-4xl font-bold text-primary mb-2">2700m²</div>
                <p className="text-sm text-foreground">Terrain à Apesito</p>
              </Card>
              <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 p-6">
                <div className="text-4xl font-bold text-secondary mb-2">∞</div>
                <p className="text-sm text-foreground">Possibilités d'avenir</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="project" className="py-20 bg-background">
        <div className="container">
          <h2
            className="text-4xl font-bold text-foreground text-center mb-12"
            style={{ fontFamily: "Playfair Display" }}
          >
            Le Centre d'Accueil à Apesito
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663306568498/dZbELJqBGQJykckP.jpg"
                alt="Centre d'accueil à Apesito avec l'équipe et les enfants"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3
                  className="text-2xl font-bold text-foreground"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  Un espace d'épanouissement complet
                </h3>
                <p className="text-muted-foreground">
                  Le centre proposera un accueil de jour et internat pour 75 enfants et adolescents en situation de
                  précarité.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Scolarisation et ateliers éducatifs</h4>
                    <p className="text-sm text-muted-foreground">Intégration en écoles ordinaires et activités
                      découverte</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Accompagnement personnalisé</h4>
                    <p className="text-sm text-muted-foreground">Suivi psychologique et thérapeutique avec équipe
                      interdisciplinaire</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Suivi familial</h4>
                    <p className="text-sm text-muted-foreground">Moments réguliers pour partager l'évolution et le
                      bien-être</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="py-20 bg-white">
        <div className="container">
          <h2
            className="text-4xl font-bold text-foreground text-center mb-12"
            style={{ fontFamily: "Playfair Display" }}
          >
            Objectifs de la Campagne
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Objective 1 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow p-8 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3
                className="text-xl font-bold text-foreground mb-3"
                style={{ fontFamily: "Playfair Display" }}
              >
                Mobiliser les soutiens financiers
              </h3>
              <p className="text-muted-foreground">
                Collecter des fonds pour financer la construction et le fonctionnement du centre d'accueil.
              </p>
            </Card>

            {/* Objective 2 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow p-8 bg-gradient-to-br from-secondary/5 to-transparent">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3
                className="text-xl font-bold text-foreground mb-3"
                style={{ fontFamily: "Playfair Display" }}
              >
                Sensibiliser le public
              </h3>
              <p className="text-muted-foreground">
                Mettre en lumière l'importance de l'accès à l'éducation pour tous comme facteur d'ascension sociale.
              </p>
            </Card>

            {/* Objective 3 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow p-8 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3
                className="text-xl font-bold text-foreground mb-3"
                style={{ fontFamily: "Playfair Display" }}
              >
                Créer une communauté
              </h3>
              <p className="text-muted-foreground">
                Fédérer des ambassadeurs engagés autour de la mission de transmission de la chance d'apprendre.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663306568498/sGkvxROVztOmvAKR.jpg"
                alt="Coordonnées bancaires pour envoyer votre don - IBAN, BIC et informations de virement"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-center text-sm text-muted-foreground mt-4 font-semibold">
                Coordonnées bancaires pour l'envoi de votre don
              </p>
            </div>

            {/* Form */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2
                  className="text-4xl font-bold text-foreground mb-4"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  Faire un don
                </h2>
                <p className="text-lg text-muted-foreground">
                  Chaque contribution, grande ou petite, nous rapproche de notre objectif. Votre générosité change
                  des vies.
                </p>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-semibold text-foreground">Montant du don</label>
                <div className="grid grid-cols-4 gap-3">
                  {[25, 50, 100, 250].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setDonationAmount(amount)}
                      className={`py-3 rounded-lg font-semibold transition-all ${
                        donationAmount === amount
                          ? "bg-primary text-primary-foreground shadow-lg"
                          : "bg-white border-2 border-border text-foreground hover:border-primary"
                      }`}
                    >
                      {amount}€
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Montant personnalisé"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none"
                  />
                  <span className="absolute right-4 top-3 text-muted-foreground">€</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base py-6"
              >
                Donner {donationAmount}€ maintenant
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Votre don est sécurisé et confidentiel. Vous recevrez un reçu fiscal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2
            className="text-4xl font-bold text-foreground text-center mb-12"
            style={{ fontFamily: "Playfair Display" }}
          >
            L'Impact de Votre Soutien
          </h2>

          <div className="relative">
            <img
              src="/img-projet-togo.jpg"
              alt="Notre projet au Togo — Centre d'accueil à Apesito"
              className="w-full h-auto rounded-lg shadow-lg mb-8 object-cover max-h-96"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white border-2 border-primary/20 p-6">
                <Target className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Contribuer à l'épanouissement</h3>
                <p className="text-sm text-muted-foreground">
                  Aider les jeunes en situation de précarité à construire leur personnalité et à se projeter.
                </p>
              </Card>

              <Card className="bg-white border-2 border-secondary/20 p-6">
                <Lightbulb className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Favoriser la préservation du lien familial</h3>
                <p className="text-sm text-muted-foreground">
                  Renforcer les relations entre enfants, adolescents et leurs familles dans un environnement naturel.
                </p>
              </Card>

              <Card className="bg-white border-2 border-primary/20 p-6">
                <Heart className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Donner un espace pour penser et s'ouvrir au savoir</h3>
                <p className="text-sm text-muted-foreground">
                  Offrir aux enfants les outils pour apprendre et se construire un avenir.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie & Actions Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2
            className="text-4xl font-bold text-foreground text-center mb-4"
            style={{ fontFamily: "Playfair Display" }}
          >
            Nos Actions
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Destin'Action agit en France et au Togo pour accompagner les jeunes en difficulté.
          </p>

          {/* Grille d'images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Image 1 — Ce que nous faisons */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/img-ce-que-nous-faisons.jpg"
                alt="Ce que nous faisons"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Image 2 — Nos actions en France */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/img-actions-france.jpg"
                alt="Nos actions en France"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Image 3 — Citation */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/img-citation-enfant.jpg"
                alt="Chaque enfant mérite un avenir meilleur"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Image 4 — ONG France & Togo */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/img-ong-france-togo.jpg"
                alt="L'ONG Destin'Action en France et au Togo"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Image 5 — Rejoignez-nous */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/img-rejoignez-nous.jpg"
                alt="Rejoignez Destin'Action"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Image 6 — Réseaux sociaux */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/img-reseaux-sociaux.jpg"
                alt="Suivez-nous sur les réseaux sociaux"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* CTA réseaux sociaux */}
          <div className="text-center mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=61579844312949&locale=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
            >
              Facebook — Destin'Action
            </a>
            <a
              href="https://www.instagram.com/ongdestinaction/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Instagram — @ongdestinaction
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container text-center">
          <h2
            className="text-4xl font-bold text-foreground mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            Des questions ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nous serions heureux de répondre à vos questions sur le projet, nos activités ou comment nous soutenir.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Nous contacter
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
