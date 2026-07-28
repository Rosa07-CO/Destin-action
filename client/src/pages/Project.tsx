import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Users, Lightbulb, Heart } from "lucide-react";

/**
 * Project Page - Page dédiée au projet
 * Présentation détaillée du centre d'accueil à Apesito
 */

export default function Project() {
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
            Le Centre d'Accueil à Apesito
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Un espace d'épanouissement complet pour 75 enfants et adolescents en situation de précarité au Togo.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663306568498/dZbELJqBGQJykckP.jpg"
                alt="Centre d'accueil à Apesito"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2
                  className="text-4xl font-bold text-foreground mb-4"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  Un espace d'épanouissement
                </h2>
                <p className="text-lg text-muted-foreground">
                  Le centre proposera un accueil de jour et internat pour 75 enfants et adolescents en situation de
                  précarité. Situé à Apesito, à 45 minutes de Lomé, il offre un environnement sûr, bienveillant et
                  propice au développement personnel.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-4">
                  <div className="text-3xl font-bold text-primary mb-1">75</div>
                  <p className="text-sm text-foreground">Enfants prévus en accueil</p>
                </Card>
                <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 p-4">
                  <div className="text-3xl font-bold text-secondary mb-1">2700m²</div>
                  <p className="text-sm text-foreground">Terrain à Apesito</p>
                </Card>
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-4">
                  <div className="text-3xl font-bold text-primary mb-1">2025</div>
                  <p className="text-sm text-foreground">Année de lancement</p>
                </Card>
                <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 p-4">
                  <div className="text-3xl font-bold text-secondary mb-1">24/7</div>
                  <p className="text-sm text-foreground">Accompagnement</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2
            className="text-4xl font-bold text-foreground text-center mb-12"
            style={{ fontFamily: "Playfair Display" }}
          >
            Ce que nous proposons
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <Card className="border-0 shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Accueil et hébergement</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>25 places en accueil de jour</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>50 places en internat</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Repas équilibrés et sains</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Environnement sécurisé</span>
                </li>
              </ul>
            </Card>

            {/* Service 2 */}
            <Card className="border-0 shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Éducation et formation</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Scolarisation en écoles ordinaires</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Ateliers éducatifs et découverte</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Soutien scolaire personnalisé</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Développement de compétences</span>
                </li>
              </ul>
            </Card>

            {/* Service 3 */}
            <Card className="border-0 shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Accompagnement psychosocial</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Suivi psychologique individuel</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Thérapie de groupe</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Accompagnement personnalisé</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Équipe interdisciplinaire</span>
                </li>
              </ul>
            </Card>

            {/* Service 4 */}
            <Card className="border-0 shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Suivi familial</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Rencontres régulières avec les familles</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Partage de l'évolution de l'enfant</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Renforcement du lien familial</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Soutien aux familles</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2
            className="text-4xl font-bold text-foreground text-center mb-12"
            style={{ fontFamily: "Playfair Display" }}
          >
            Calendrier du Projet
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { phase: "Phase 1", date: "Fin 2025", description: "Préparation des plans par l'architecte" },
              { phase: "Phase 2", date: "Fin 2026 – Début 2027", description: "Dépôt du permis de construire" },
              { phase: "Phase 3", date: "2027 – 2030", description: "Construction et recrutement de l'équipe" },
              { phase: "Phase 4", date: "2030", description: "Inauguration du site" },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">{index + 1}</span>
                </div>
                <Card className="border-0 shadow-md p-6 flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.phase}</h3>
                  <p className="text-sm text-primary font-semibold mb-2">{item.date}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
