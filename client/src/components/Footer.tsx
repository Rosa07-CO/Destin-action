import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

/**
 * Footer Component - Pied de page
 * Design: Minimaliste avec informations de contact et liens essentiels
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpg"
                alt="ONG Destin'Action"
                className="w-12 h-12 object-contain rounded brightness-0 invert"
              />
              <h3 className="font-bold text-lg" style={{ fontFamily: "Playfair Display" }}>
                Destin'Action
              </h3>
            </div>
            <p className="text-sm opacity-90">
              Une ONG engagée pour l'éducation des enfants en situation de précarité au Togo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-accent transition-colors">À propos</a></li>
              <li><a href="/project" className="hover:text-accent transition-colors">Le Projet</a></li>
              <li><a href="/objectives" className="hover:text-accent transition-colors">Objectifs</a></li>
              <li><a href="/donate" className="hover:text-accent transition-colors">Donner</a></li>
              <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/legal" className="hover:text-accent transition-colors">Mentions légales</a></li>
              <li><a href="/legal" className="hover:text-accent transition-colors">Politique de confidentialité</a></li>
              <li><a href="/legal" className="hover:text-accent transition-colors">Conditions d'utilisation</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-base mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:destinactiontogo@gmail.com" className="hover:text-accent transition-colors">
                  destinactiontogo@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+33766624894" className="hover:text-accent transition-colors">
                  07.66.62.48.94
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>BP WESON, 185 rue de l'avenir<br />60430 Noailles, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-75">
            © {currentYear} ONG Destin'Action. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61579844312949&locale=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm font-medium"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/ongdestinaction/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm font-medium"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
