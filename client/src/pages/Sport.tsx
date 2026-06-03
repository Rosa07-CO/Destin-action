import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock } from "lucide-react";

export default function Sport() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#000000" }}>
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-6">
          {/* Icône */}
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ background: "#E2B55C22", border: "2px solid #E2B55C55" }}
          >
            <Clock className="w-12 h-12" style={{ color: "#E2B55C" }} />
          </div>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-6"
            style={{ borderColor: "#E2B55C", color: "#E2B55C" }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ fontFamily: "Playfair Display SC" }}>
              Sport
            </span>
          </div>

          {/* Titre */}
          <h1
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "Playfair Display", color: "#E2B55C", fontStyle: "italic" }}
          >
            À venir prochainement
          </h1>

          <div className="w-16 h-0.5 mx-auto mb-8" style={{ background: "#E2B55C" }} />

          {/* Texte */}
          <p
            className="text-xl max-w-xl mx-auto leading-relaxed"
            style={{ color: "#C1A47E", fontFamily: "Playfair Display" }}
          >
            Un événement sportif solidaire est en cours de préparation.
            Rejoignez-nous pour bouger ensemble au service d'une belle cause ! 🌍
          </p>

          {/* Bouton retour */}
          <a
            href="/evenement/gala"
            className="inline-block mt-10 px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all"
            style={{
              background: "#E2B55C",
              color: "#000000",
              fontFamily: "Playfair Display SC",
            }}
          >
            ← Retour aux événements
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
