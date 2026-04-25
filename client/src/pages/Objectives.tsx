import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Heart, Lightbulb, Users, Target, TrendingUp, Zap } from "lucide-react";

/**
 * Objectives Page - Page dédiée aux objectifs de la campagne
 */

export default function Objectives() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container">
          <h1
            className="text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            Objectifs de la Campagne
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Trois piliers pour transformer la vie des enfants en situation de précarité au Togo.
          </p>
        </div>
      </section>

      {/* Main Objectives */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Objective 1 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow p-8 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3
                className="text-2xl font-bold text-foreground mb-4"
                style={{ fontFamily: "Playfair Display" }}
              >
                Mobiliser les soutiens financiers
              </h3>
              <p className="text-muted-foreground mb-6">
                Collecter des fonds pour financer la construction et le fonctionnement du centre d'accueil à Apesito.
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">Construction du bâtiment principal</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">Équipement et matériel éducatif</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">Salaires de l'équipe professionnelle</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">Services de soutien psychosocial</span>
                </div>
              </div>
            </Card>

            {/* Objective 2 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow p-8 bg-gradient-to-br from-secondary/5 to-transparent">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3
                className="text-2xl font-bold text-foreground mb-4"
                style={{ fontFamily: "Playfair Display" }}
              >
                Sensibiliser le public
              </h3>
              <p className="text-muted-foreground mb-6">
                Mettre en lumière l'importance de l'accès à l'éducation pour tous comme facteur d'ascension sociale.
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">Partager les histoires d'impact</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">Montrer les réalités du terrain</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">Inspirer l'engagement communautaire</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">Créer une prise de conscience globale</span>
                </div>
              </div>
            </Card>

            {/* Objective 3 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow p-8 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3
                className="text-2xl font-bold text-foreground mb-4"
                style={{ fontFamily: "Playfair Display" }}
              >
                Créer une communauté d'ambassadeurs
              </h3>
              <p className="text-muted-foreground mb-6">
                Fédérer des personnalités et le grand public autour de notre mission de transmission.
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">Recruter des ambassadeurs engagés</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">Développer des partenariats</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">Amplifier le message sur les réseaux</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">Construire un mouvement durable</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2
            className="text-4xl font-bold text-foreground text-center mb-12"
            style={{ fontFamily: "Playfair Display" }}
          >
            Nos Objectifs Mesurables
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-md p-8">
              <div className="flex gap-4 items-start">
                <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Court terme (2025)</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Construction du centre terminée</li>
                    <li>✓ Accueil de 75 enfants</li>
                    <li>✓ Équipe complète en place</li>
                    <li>✓ Fonds collectés : 100%</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-md p-8">
              <div className="flex gap-4 items-start">
                <TrendingUp className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Moyen terme (2026-2027)</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ 100% des enfants scolarisés</li>
                    <li>✓ Amélioration mesurable du bien-être</li>
                    <li>✓ Partenariats établis</li>
                    <li>✓ Expansion du programme</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-md p-8">
              <div className="flex gap-4 items-start">
                <Zap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Impact social</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Transformation de vies</li>
                    <li>✓ Création d'opportunités</li>
                    <li>✓ Réduction des inégalités</li>
                    <li>✓ Modèle reproductible</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-md p-8">
              <div className="flex gap-4 items-start">
                <Heart className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Engagement communautaire</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ 1000+ donateurs mobilisés</li>
                    <li>✓ 50+ ambassadeurs engagés</li>
                    <li>✓ Visibilité médiatique</li>
                    <li>✓ Soutien durable</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container text-center">
          <h2
            className="text-4xl font-bold text-foreground mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            Rejoignez-nous dans cette mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Ensemble, nous pouvons transformer la vie de 75 enfants et créer un modèle d'éducation inclusive et bienveillante.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Nous Contacter
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
