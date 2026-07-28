import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Target, Heart, Globe } from "lucide-react";

/**
 * About Page - Page À propos
 * Présentation détaillée de l'ONG et de sa mission
 */

export default function About() {
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
            À propos de Destin'Action
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Une organisation engagée pour transformer l'accès à l'éducation et offrir un avenir meilleur aux enfants
            en situation de précarité au Togo.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2
                className="text-4xl font-bold text-foreground"
                style={{ fontFamily: "Playfair Display" }}
              >
                Notre Mission
              </h2>
              <p className="text-lg text-muted-foreground">
                L'éducation est la clé de l'avenir. Pourtant, au Togo, de nombreux enfants n'y ont pas accès. Destin'Action
                se mobilise pour changer cette réalité.
              </p>
              <p className="text-lg text-muted-foreground">
                Nous construisons un centre d'accueil à Apesito, à 45 minutes de Lomé, pour offrir aux enfants et
                adolescents en situation de précarité un espace sûr, accueillant et bienveillant où ils peuvent apprendre,
                se développer et construire leur avenir.
              </p>
              <p className="text-lg text-muted-foreground">
                Notre objectif : transmettre la chance d'apprendre et permettre à chaque jeune de construire son avenir,
                malgré les obstacles économiques ou familiaux auxquels il est confronté.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-6 text-center">
                <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Localisation</h3>
                <p className="text-sm text-muted-foreground">Apesito, Togo</p>
              </Card>
              <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 p-6 text-center">
                <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Bénéficiaires prévus</h3>
                <p className="text-sm text-muted-foreground">75 enfants et adolescents</p>
              </Card>
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-6 text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Lancement</h3>
                <p className="text-sm text-muted-foreground">Octobre 2025</p>
              </Card>
              <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 p-6 text-center">
                <Heart className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Approche</h3>
                <p className="text-sm text-muted-foreground">Humaniste et bienveillante</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2
            className="text-4xl font-bold text-foreground text-center mb-12"
            style={{ fontFamily: "Playfair Display" }}
          >
            Nos Valeurs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Bienveillance</h3>
              <p className="text-muted-foreground">
                Nous traitons chaque enfant avec respect, dignité et compassion.
              </p>
            </Card>

            <Card className="border-0 shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Inclusion</h3>
              <p className="text-muted-foreground">
                Nous croyons que chaque enfant mérite une chance, peu importe ses origines.
              </p>
            </Card>

            <Card className="border-0 shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Nous nous engageons à offrir une éducation de qualité et un accompagnement professionnel.
              </p>
            </Card>

            <Card className="border-0 shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Transparence</h3>
              <p className="text-muted-foreground">
                Nous communiquons ouvertement sur nos actions et l'utilisation des dons.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2
            className="text-4xl font-bold text-foreground text-center mb-12"
            style={{ fontFamily: "Playfair Display" }}
          >
            Ce que nous proposons
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20 p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Accueil et hébergement</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>25 places en accueil de jour</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>50 places en internat</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Repas équilibrés et sains</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Environnement sécurisé et bienveillant</span>
                </li>
              </ul>
            </Card>

            <Card className="border-2 border-secondary/20 p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Éducation et formation</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Scolarisation en écoles ordinaires</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Ateliers éducatifs et découverte</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Soutien scolaire personnalisé</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Développement de compétences</span>
                </li>
              </ul>
            </Card>

            <Card className="border-2 border-primary/20 p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Accompagnement psychosocial</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Suivi psychologique individuel</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Thérapie de groupe</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Accompagnement personnalisé</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Équipe interdisciplinaire</span>
                </li>
              </ul>
            </Card>

            <Card className="border-2 border-secondary/20 p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Suivi familial</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Rencontres régulières avec les familles</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Partage de l'évolution de l'enfant</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Renforcement du lien familial</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Soutien aux familles</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
