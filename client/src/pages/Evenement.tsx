import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Music, Heart, Star, Users } from "lucide-react";

export default function Evenement() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #000000 0%, #1a1209 60%, #2a1a05 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full"
            style={{ background: "radial-gradient(circle, #E2B55C, transparent)", transform: "translate(-50%, -50%)" }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
            style={{ background: "radial-gradient(circle, #E2B55C, transparent)", transform: "translate(50%, 50%)" }} />
        </div>
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border"
            style={{ borderColor: "#E2B55C", color: "#E2B55C" }}>
            <Star className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ fontFamily: "Playfair Display SC" }}>
              Événement Passé
            </span>
          </div>
          <h1 className="text-7xl md:text-8xl mb-4"
            style={{ fontFamily: "Playfair Display", color: "#E2B55C", fontStyle: "italic" }}>
            Gala
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-widest"
            style={{ fontFamily: "Playfair Display SC" }}>
            DE CHARITÉ
          </h2>
          <div className="w-32 h-0.5 mx-auto mb-8" style={{ background: "#E2B55C" }} />
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10" style={{ fontFamily: "Playfair Display" }}>
            Une soirée exceptionnelle au service de l'éducation des enfants en France et au Togo.
          </p>
          <div className="flex justify-center">
            <div className="flex items-center gap-2" style={{ color: "#E2B55C" }}>
              <Calendar className="w-5 h-5" />
              <span className="font-semibold" style={{ fontFamily: "Playfair Display SC" }}>
                Samedi 18 Avril 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Merci — EN HAUT avant la galerie */}
      <section className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #000000 0%, #1a1209 100%)" }}>
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-5xl mb-6"
            style={{ fontFamily: "Playfair Display", color: "#E2B55C", fontStyle: "italic" }}>
            Merci
          </h2>
          <div className="w-16 h-0.5 mx-auto mb-8" style={{ background: "#E2B55C" }} />
          <p className="text-xl mb-6 leading-relaxed" style={{ color: "#C1A47E", fontFamily: "Playfair Display" }}>
            Un immense merci à tous les participants, donateurs et partenaires qui ont rendu cette soirée possible. Votre générosité nous rapproche chaque jour de notre objectif : construire un avenir meilleur pour les enfants.
          </p>
          <p className="text-2xl font-bold" style={{ fontFamily: "Playfair Display SC", color: "#E2B55C" }}>
            "Ma place, c'est financer un avenir."
          </p>
          <p className="mt-4 text-sm tracking-widest" style={{ color: "#C1A47E", fontFamily: "Playfair Display SC" }}>
            — GALA DESTIN'ACTION · 18.04.2026
          </p>
          <div className="mt-12">
            <a href="/donate"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-black transition-opacity hover:opacity-90"
              style={{ background: "#E2B55C", fontFamily: "Playfair Display SC" }}>
              <Heart className="w-5 h-5" />
              Soutenir le projet
            </a>
          </div>
        </div>
      </section>

      {/* Galerie Photos */}
      <section className="py-20" style={{ background: "#000000" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4"
              style={{ fontFamily: "Playfair Display SC", color: "#E2B55C" }}>
              Galerie Photos
            </h2>
            <div className="w-16 h-0.5 mx-auto" style={{ background: "#E2B55C" }} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "/gala-2.jpg", "/gala-6.jpg", "/gala-11.jpg",
              "/gala-18.jpg", "/gala-19.jpg", "/gala-20.jpg", "/gala-21.jpg",
              "/gala-22.jpg", "/gala-23.jpg", "/gala-24.jpg",
              "/gala-25.jpg", "/gala-26.jpg", "/gala-27.jpg", "/gala-28.jpg",
              "/gala-30.jpg", "/gala-31.jpg", "/gala-32.jpg", "/gala-33.jpg",
              "/gala-34.jpg", "/gala-35.jpg", "/gala-36.jpg", "/gala-37.jpg",
              "/gala-38.jpg", "/gala-39.jpg", "/gala-40.jpg", "/gala-41.jpg",
              "/gala-43.jpg",
              "/gala-44.jpg", "/gala-45.jpg", "/gala-46.jpg", "/gala-47.jpg",
              "/gala-48.jpg", "/gala-49.jpg", "/gala-50.jpg", "/gala-51.jpg",
            ].map((src, i) => (
              <div key={i}
                className="rounded-xl overflow-hidden cursor-pointer group relative"
                style={{ border: "1px solid #E2B55C22", aspectRatio: "1" }}
                onClick={() => {
                  const overlay = document.createElement("div");
                  overlay.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:pointer;";
                  const imgEl = document.createElement("img");
                  imgEl.src = src;
                  imgEl.style.cssText = "max-width:90vw;max-height:90vh;object-fit:contain;border-radius:8px;border:1px solid #E2B55C44;";
                  const closeBtn = document.createElement("div");
                  closeBtn.innerHTML = "✕";
                  closeBtn.style.cssText = "position:absolute;top:20px;right:30px;color:#E2B55C;font-size:32px;cursor:pointer;font-weight:bold;";
                  overlay.appendChild(imgEl);
                  overlay.appendChild(closeBtn);
                  overlay.onclick = () => document.body.removeChild(overlay);
                  document.body.appendChild(overlay);
                }}>
                <img src={src} alt={`Gala ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vidéos */}
      <section className="py-20" style={{ background: "#0d0d0d" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4"
              style={{ fontFamily: "Playfair Display SC", color: "#E2B55C" }}>
              Vidéos de la Soirée
            </h2>
            <div className="w-16 h-0.5 mx-auto mb-6" style={{ background: "#E2B55C" }} />
            <p style={{ color: "#C1A47E", fontFamily: "Playfair Display" }}>
              Les vidéos seront disponibles très prochainement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {["Ouverture de la soirée", "Spectacle artistique", "Discours de l'ONG", "Ambiance de la soirée"].map((title, i) => (
              <div key={i} className="rounded-xl p-6 flex items-center gap-4 border"
                style={{ background: "#000000", borderColor: "#E2B55C33" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#E2B55C22", border: "1px solid #E2B55C44" }}>
                  <span className="text-2xl">▶️</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: "#E2B55C", fontFamily: "Playfair Display SC" }}>{title}</p>
                  <p className="text-sm mt-1" style={{ color: "#C1A47E", fontFamily: "Playfair Display" }}>Disponible prochainement</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Présentation + Programme */}
      <section className="py-20" style={{ background: "#000000" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6"
                style={{ fontFamily: "Playfair Display SC", color: "#E2B55C" }}>
                Une Soirée au Service d'un Avenir Meilleur
              </h2>
              <div className="w-16 h-0.5 mb-8" style={{ background: "#E2B55C" }} />
              <p className="text-lg mb-6 leading-relaxed" style={{ color: "#C1A47E", fontFamily: "Playfair Display" }}>
                Le 18 avril 2026, l'ONG Destin'Action a organisé son premier Gala de Charité, une soirée d'exception dédiée à la collecte de fonds pour la construction du centre d'accueil à Apesito, au Togo.
              </p>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: "#C1A47E", fontFamily: "Playfair Display" }}>
                Dans une atmosphère élégante et chaleureuse, donateurs, partenaires et sympathisants se sont réunis pour partager leur engagement commun.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#C1A47E", fontFamily: "Playfair Display" }}>
                Cette soirée a été bien plus qu'un événement caritatif — c'était un acte fondateur, le symbole d'une communauté unie autour d'une cause qui transcende les frontières.
              </p>
            </div>
            <div className="rounded-2xl p-8 border" style={{ background: "#0d0d0d", borderColor: "#E2B55C33" }}>
              <h3 className="text-2xl font-bold mb-6 text-center"
                style={{ fontFamily: "Playfair Display SC", color: "#E2B55C" }}>
                Programme de la Soirée
              </h3>
              <div className="space-y-5">
                {[
                  { time: "19h30", label: "Accueil des invités", icon: <Users className="w-4 h-4" /> },
                  { time: "20h00", label: "Cocktail de bienvenue", icon: <Star className="w-4 h-4" /> },
                  { time: "20h30", label: "Présentation de l'ONG", icon: <Heart className="w-4 h-4" /> },
                  { time: "21h00", label: "Dîner de gala", icon: <Star className="w-4 h-4" /> },
                  { time: "22h00", label: "Spectacle & performances", icon: <Music className="w-4 h-4" /> },
                  { time: "23h00", label: "Vente aux enchères caritative", icon: <Heart className="w-4 h-4" /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-16 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                      style={{ background: "#E2B55C22", color: "#E2B55C", border: "1px solid #E2B55C44" }}>
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

      {/* Chiffres clés — sans heure */}
      <section className="py-16" style={{ background: "#E2B55C" }}>
        <div className="container">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { number: "18 Avril", label: "Date du Gala" },
              { number: "75", label: "Enfants bénéficiaires" },
              { number: "2026", label: "Première édition" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ fontFamily: "Playfair Display SC", color: "#000000" }}>
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

      <Footer />
    </div>
  );
}
