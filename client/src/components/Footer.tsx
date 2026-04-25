import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

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
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "Playfair Display" }}>
              Destin'Action
            </h3>
            <p className="text-sm opacity-90">
              Une ONG engagée pour l'éducation des enfants en situation de précarité au Togo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#project" className="hover:text-accent transition-colors">
                  Le Projet
                </a>
              </li>
              <li>
                <a href="#objectives" className="hover:text-accent transition-colors">
                  Objectifs
                </a>
              </li>
              <li>
                <a href="#donate" className="hover:text-accent transition-colors">
                  Donner
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#privacy" className="hover:text-accent transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-accent transition-colors">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="#mentions" className="hover:text-accent transition-colors">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-base mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@destinaction.org" className="hover:text-accent transition-colors">
                  contact@destinaction.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+22890000000" className="hover:text-accent transition-colors">
                  +228 90 00 00 00
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Apesito, Togo</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm opacity-75">
            © {currentYear} ONG Destin'Action. Tous droits réservés.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#facebook"
              className="p-2 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#twitter"
              className="p-2 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#instagram"
              className="p-2 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
