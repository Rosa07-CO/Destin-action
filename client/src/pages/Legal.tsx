import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { useState } from "react";

/**
 * Legal Page - Mentions légales et Politique de confidentialité
 */

export default function Legal() {
  const [activeTab, setActiveTab] = useState<"legal" | "privacy" | "terms">("legal");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container">
          <h1
            className="text-4xl font-bold text-foreground"
            style={{ fontFamily: "Playfair Display" }}
          >
            Informations légales
          </h1>
          <p className="text-muted-foreground mt-2">Mentions légales, politique de confidentialité et conditions d'utilisation</p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12">
        <div className="container">
          <div className="flex gap-4 mb-8 border-b border-border">
            <button
              onClick={() => setActiveTab("legal")}
              className={`px-4 py-3 font-semibold transition-colors ${
                activeTab === "legal"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Mentions légales
            </button>
            <button
              onClick={() => setActiveTab("privacy")}
              className={`px-4 py-3 font-semibold transition-colors ${
                activeTab === "privacy"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Politique de confidentialité
            </button>
            <button
              onClick={() => setActiveTab("terms")}
              className={`px-4 py-3 font-semibold transition-colors ${
                activeTab === "terms"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Conditions d'utilisation
            </button>
          </div>

          {/* Mentions Légales */}
          {activeTab === "legal" && (
            <div className="space-y-8 max-w-4xl">
              <Card className="border-0 shadow-sm p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Mentions légales</h2>

                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Éditeur du site</h3>
                    <p>
                      ONG Destin'Action<br />
                      Apesito, Togo<br />
                      Email : contact@destinaction.org<br />
                      Téléphone : +228 90 00 00 00
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Responsable de la publication</h3>
                    <p>
                      L'équipe de Destin'Action est responsable de la publication et du contenu du site.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Hébergement</h3>
                    <p>
                      Ce site est hébergé par Manus, plateforme de déploiement web.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Propriété intellectuelle</h3>
                    <p>
                      Tous les contenus présents sur ce site (textes, images, logos, vidéos) sont la propriété de l'ONG
                      Destin'Action ou sont utilisés avec autorisation. Toute reproduction, représentation, modification ou
                      distribution sans autorisation préalable est interdite.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Limitation de responsabilité</h3>
                    <p>
                      L'ONG Destin'Action s'efforce de fournir des informations exactes et à jour sur ce site. Cependant,
                      nous ne garantissons pas l'exactitude, l'exhaustivité ou l'actualité des informations. L'utilisation
                      de ce site se fait à vos risques et périls.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Politique de Confidentialité */}
          {activeTab === "privacy" && (
            <div className="space-y-8 max-w-4xl">
              <Card className="border-0 shadow-sm p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Politique de confidentialité</h2>

                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Collecte de données</h3>
                    <p>
                      Nous collectons les informations que vous nous fournissez volontairement, notamment lors de vos
                      donations, inscriptions à notre newsletter ou communications avec notre équipe.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Utilisation des données</h3>
                    <p>
                      Les données collectées sont utilisées pour :
                    </p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>Traiter vos donations et vous envoyer des reçus fiscaux</li>
                      <li>Vous tenir informé de nos activités et campagnes</li>
                      <li>Améliorer notre site et nos services</li>
                      <li>Respecter nos obligations légales</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Protection des données</h3>
                    <p>
                      Nous mettons en place des mesures de sécurité appropriées pour protéger vos données personnelles
                      contre l'accès non autorisé, la modification ou la suppression.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Partage des données</h3>
                    <p>
                      Nous ne partageons pas vos données personnelles avec des tiers sans votre consentement, sauf si cela est requis par la loi.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Vos droits</h3>
                    <p>
                      Vous avez le droit d'accéder, de corriger ou de supprimer vos données personnelles. Pour exercer ces
                      droits, contactez-nous à contact@destinaction.org.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cookies</h3>
                    <p>
                      Ce site utilise des cookies pour améliorer votre expérience. Vous pouvez contrôler l'utilisation des
                      cookies via les paramètres de votre navigateur.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Conditions d'utilisation */}
          {activeTab === "terms" && (
            <div className="space-y-8 max-w-4xl">
              <Card className="border-0 shadow-sm p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Conditions d'utilisation</h2>

                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Acceptation des conditions</h3>
                    <p>
                      En accédant et en utilisant ce site, vous acceptez d'être lié par ces conditions d'utilisation. Si
                      vous n'acceptez pas ces conditions, veuillez ne pas utiliser le site.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Utilisation du site</h3>
                    <p>
                      Vous acceptez d'utiliser ce site uniquement à des fins légales et de ne pas :
                    </p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>Diffuser du contenu offensant, illégal ou discriminatoire</li>
                      <li>Tenter d'accéder à des zones non autorisées du site</li>
                      <li>Utiliser des robots ou scripts pour extraire des données</li>
                      <li>Perturber le fonctionnement normal du site</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Donations</h3>
                    <p>
                      Les donations sont volontaires et irrévocables. Nous nous engageons à utiliser vos dons de manière
                      transparente et conforme à notre mission. Vous recevrez un reçu fiscal pour votre donation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Liens externes</h3>
                    <p>
                      Ce site peut contenir des liens vers des sites externes. Nous ne sommes pas responsables du contenu
                      de ces sites tiers.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Modifications</h3>
                    <p>
                      Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Les modifications
                      entrent en vigueur dès leur publication sur le site.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Droit applicable</h3>
                    <p>
                      Ces conditions d'utilisation sont régies par la loi togolaise. Tout litige sera soumis aux tribunaux
                      compétents du Togo.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
