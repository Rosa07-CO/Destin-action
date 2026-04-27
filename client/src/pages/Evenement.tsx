import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Calendar, Music, Heart, Star, Users } from "lucide-react";

/**
 * Événement Page - Gala de Charité Destin'Action
 * Charte graphique Gala : Noir #000000, Or #E2B55C, Brun #BF4E23, Beige #C1A47E
 * Polices : Playfair Display SC (sous-titres), Playfair Display (textes)
 */

export default function Evenement() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section — style Gala */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #000000 0%, #1a1209 60%, #2a1a05 100%)" }}
      >
        {/* Éléments décoratifs dorés */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full"
            style={{ background: "radial-gradient(circle, #E2B55C, transparent)", transform: "translate(-50%, -50%)" }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
            style={{ background: "radial-gradient(circle, #E2B55C, transparent)", transform: "translate(50%, 50%)" }} />
        </div>

        <div className="container relative z-10 text-center">
          {/* Badge événement */}
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border"
            style={{ borderColor: "#E2B55C", color: "#E2B55C" }}>
            <Star className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ fontFamily: "Playfair Display SC" }}>
              Événement Passé
            </span>
          </div>

          {/* Titre Gala */}
          <h1
            className="text-7xl md:text-8xl mb-4"
            style={{ fontFamily: "Playfair Display", color: "#E2B55C", fontStyle: "italic" }}
          >
            Gala
          </h1>
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-widest"
            style={{ fontFamily: "Playfair Display SC" }}
          >
            DE CHARITÉ
          </h2>
          <div className="w-32 h-0.5 mx-auto mb-8" style={{ background: "#E2B55C" }} />

          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10"
            style={{ fontFamily: "Playfair Display" }}>
            Une soirée exceptionnelle au service de l'éducation des enfants en France et au Togo.
          </p>

          {/* Infos clés */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2" style={{ color: "#E2B55C" }}>
              <Calendar className="w-5 h-5" />
              <span className="font-semibold" style={{ fontFamily: "Playfair Display SC" }}>
                Samedi 18 Avril 2026
              </span>
            </div>
            <div className="flex items-center gap-2" style={{ color: "#E2B55C" }}>
              <Clock className="w-5 h-5" />
              <span className="font-semibold" style={{ fontFamily: "Playfair Display SC" }}>
                19h30
              </span>
            </div>
            <div className="flex items-center gap-2" style={{ color: "#E2B55C" }}>
              <MapPin className="w-5 h-5" />
              <span className="font-semibold" style={{ fontFamily: "Playfair Display SC" }}>
                Saint-Sulpice
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Présentation */}
      <section className="py-20" style={{ background: "#000000" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ fontFamily: "Playfair Display SC", color: "#E2B55C" }}
              >
                Une Soirée au Service d'un Avenir Meilleur
              </h2>
              <div className="w-16 h-0.5 mb-8" style={{ background: "#E2B55C" }} />
              <p className="text-lg mb-6 leading-relaxed" style={{ color: "#C1A47E", fontFamily: "Playfair Display" }}>
                Le 18 avril 2026, l'ONG Destin'Action a organisé son premier Gala de Charité, une soirée d'exception dédiée à la collecte de fonds pour la construction du centre d'accueil à Apesito, au Togo.
              </p>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: "#C1A47E", fontFamily: "Playfair Display" }}>
                Dans une atmosphère élégante et chaleureuse, donateurs, partenaires et sympathisants se sont réunis pour partager leur engagement commun : offrir à chaque enfant la chance d'apprendre et de construire son avenir.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#C1A47E", fontFamily: "Playfair Display" }}>
                Cette soirée a été bien plus qu'un événement caritatif — c'était un acte fondateur, le symbole d'une communauté unie autour d'une cause qui transcende les frontières.
              </p>
            </div>

            {/* Carte programme */}
            <div
              className="rounded-2xl p-8 border"
              style={{ background: "#0d0d0d", borderColor: "#E2B55C33" }}
            >
              <h3
                className="text-2xl font-bold mb-6 text-center"
                style={{ fontFamily: "Playfair Display SC", color: "#E2B55C" }}
              >
                Programme de la Soirée
              </h3>
              <div className="space-y-5">
                {[
                  { time: "19h30", label: "Accueil des invités", icon: <Users className="w-4 h-4" /> },
                  { time: "20h00", label: "Cocktail de bienvenue", icon: <Star className="w-4 h-4" /> },
                  { time: "20h30", label: "Présentation de l'ONG Destin'Action", icon: <Heart className="w-4 h-4" /> },
                  { time: "21h00", label: "Dîner de gala", icon: <Star className="w-4 h-4" /> },
                  { time: "22h00", label: "Spectacle & performances artistiques", icon: <Music className="w-4 h-4" /> },
                  { time: "23h00", label: "Vente aux enchères caritative", icon: <Heart className="w-4 h-4" /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className="w-16 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                      style={{ background: "#E2B55C22", color: "#E2B55C", border: "1px solid #E2B55C44" }}
                    >
                      {item.time}
                    </div>
                    <div className="flex items-center gap-2" style={{ color: "#C1A47E" }}>
                      <span style={{ color: "#E2B55C" }}>{item.icon}</span>
                      <span style={{ fontFamily: "Playfair Display" }}>{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Chiffres */}
      <section className="py-16" style={{ background: "#E2B55C" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "18 Avril", label: "Date du Gala" },
              { number: "19h30", label: "Heure de début" },
              { number: "75", label: "Enfants bénéficiaires" },
              { number: "2026", label: "Première édition" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: "Playfair Display SC", color: "#000000" }}>
                  {stat.number}
                </p>
                <p className="text-sm font-medium" style={{ color: "#BF4E23", fontFamily: "Playfair Display" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Lieu */}
      <section className="py-20" style={{ background: "#000000" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "Playfair Display SC", color: "#E2B55C" }}
            >
              Le Lieu
            </h2>
            <div className="w-16 h-0.5 mx-auto" style={{ background: "#E2B55C" }} />
          </div>

          <div className="max-w-2xl mx-auto">
            <div
              className="rounded-2xl p-8 border text-center"
              style={{ background: "#0d0d0d", borderColor: "#E2B55C33" }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "#E2B55C22", border: "1px solid #E2B55C44" }}
              >
                <MapPin className="w-7 h-7" style={{ color: "#E2B55C" }} />
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "Playfair Display SC", color: "#E2B55C" }}
              >
                5 Rue des Écoles
              </h3>
              <p className="text-lg mb-2" style={{ color: "#C1A47E", fontFamily: "Playfair Display" }}>
                60430 Saint-Sulpice
              </p>
              <div className="w-12 h-0.5 mx-auto my-6" style={{ background: "#E2B55C44" }} />
              <div className="flex items-center justify-center gap-2" style={{ color: "#C1A47E" }}>
                <Phone className="w-4 h-4" style={{ color: "#E2B55C" }} />
                <a
                  href="tel:+33766624894"
                  className="hover:underline"
                  style={{ fontFamily: "Playfair Display", color: "#E2B55C" }}
                >
                  07.66.62.48.94
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Merci */}
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #000000 0%, #1a1209 100%)" }}
      >
        <div className="container max-w-3xl mx-auto">
          <h2
            className="text-5xl mb-6"
            style={{ fontFamily: "Playfair Display", color: "#E2B55C", fontStyle: "italic" }}
          >
            Merci
          </h2>
          <div className="w-16 h-0.5 mx-auto mb-8" style={{ background: "#E2B55C" }} />
          <p className="text-xl mb-6 leading-relaxed" style={{ color: "#C1A47E", fontFamily: "Playfair Display" }}>
            Un immense merci à tous les participants, donateurs et partenaires qui ont rendu cette soirée possible. Votre générosité nous rapproche chaque jour de notre objectif : construire un avenir meilleur pour les enfants.
          </p>
          <p
            className="text-2xl font-bold"
            style={{ fontFamily: "Playfair Display SC", color: "#E2B55C" }}
          >
            "Ma place, c'est financer un avenir."
          </p>
          <p className="mt-4 text-sm tracking-widest" style={{ color: "#C1A47E", fontFamily: "Playfair Display SC" }}>
            — GALA DESTIN'ACTION · 18.04.2026
          </p>

          <div className="mt-12">
            <a
              href="/donate"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-black transition-opacity hover:opacity-90"
              style={{ background: "#E2B55C", fontFamily: "Playfair Display SC" }}
            >
              <Heart className="w-5 h-5" />
              Soutenir le projet
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
