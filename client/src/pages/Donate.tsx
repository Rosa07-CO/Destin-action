import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Gift, Zap, Users } from "lucide-react";
import { useState } from "react";

/**
 * Donate Page - Page dédiée aux donations
 */

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>("");

  const predefinedAmounts = [25, 50, 82, 250];

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
            Faire un Don
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Chaque contribution, grande ou petite, nous rapproche de notre objectif. Votre générosité change des vies.
          </p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663306568498/sGkvxROVztOmvAKR.jpg"
                alt="Coordonnées bancaires pour envoyer votre don"
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
                  Choisissez votre montant
                </h2>
                <p className="text-lg text-muted-foreground">
                  Sélectionnez un montant prédéfini ou entrez un montant personnalisé.
                </p>
              </div>

              {/* Amount Selection */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {predefinedAmounts.map((amount) => (
                    <Button
                      key={amount}
                      onClick={() => {
                        setDonationAmount(amount);
                        setCustomAmount("");
                      }}
                      className={`py-6 text-lg font-semibold transition-all ${
                        donationAmount === amount && customAmount === ""
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                          : "bg-secondary/10 hover:bg-secondary/20 text-foreground border-2 border-secondary/20"
                      }`}
                    >
                      {amount}€
                    </Button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Montant personnalisé (€)"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      if (e.target.value) {
                        setDonationAmount(parseInt(e.target.value) || 0);
                      }
                    }}
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary text-foreground bg-background"
                  />
                </div>
              </div>

              {/* Summary */}
              <Card className="border-0 shadow-md p-6 bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-muted-foreground">Montant à donner :</span>
                  <span className="text-3xl font-bold text-primary">
                    {customAmount || donationAmount}€
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Votre don sera utilisé pour la construction du centre et le financement des services d'accompagnement.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3">
                  <Heart className="w-5 h-5 mr-2" />
                  Confirmer mon don
                </Button>
              </Card>

              {/* Info */}
              <div className="bg-secondary/10 border-l-4 border-secondary p-4 rounded">
                <p className="text-sm text-foreground font-semibold mb-2">💡 Besoin d'aide ?</p>
                <p className="text-sm text-muted-foreground">
                  Consultez la section "Coordonnées bancaires" ci-contre pour effectuer votre virement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact of Donations */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2
            className="text-4xl font-bold text-foreground text-center mb-12"
            style={{ fontFamily: "Playfair Display" }}
          >
            À quoi sert votre don ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                amount: "25€",
                description: "Fournitures scolaires pour 1 enfant",
                color: "primary",
              },
              {
                icon: <Gift className="w-8 h-8" />,
                amount: "50€",
                description: "1 mois de repas équilibrés",
                color: "secondary",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                amount: "82€",
                description: "Frais de scolarité, uniforme et éducation",
                color: "primary",
              },
              {
                icon: <Users className="w-8 h-8" />,
                amount: "250€",
                description: "Prise en charge annuelle complète d'un enfant",
                color: "secondary",
              },
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-md p-8 text-center hover:shadow-lg transition-shadow">
                <div
                  className={`w-16 h-16 bg-${item.color}/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-${item.color}`}
                >
                  {item.icon}
                </div>
                <p className="text-2xl font-bold text-foreground mb-2">{item.amount}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2
            className="text-4xl font-bold text-foreground text-center mb-12"
            style={{ fontFamily: "Playfair Display" }}
          >
            Questions sur les Dons
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-md p-8">
              <h3 className="text-lg font-bold text-foreground mb-3">Comment faire un don sécurisé ?</h3>
              <p className="text-muted-foreground">
                Vous pouvez faire un virement bancaire en utilisant les coordonnées IBAN et BIC affichées sur cette page. Tous les virements sont sécurisés.
              </p>
            </Card>

            <Card className="border-0 shadow-md p-8">
              <h3 className="text-lg font-bold text-foreground mb-3">Puis-je recevoir un reçu fiscal ?</h3>
              <p className="text-muted-foreground">
                Oui ! Nous vous enverrons un reçu fiscal pour votre don. Contactez-nous pour plus d'informations sur les déductions fiscales.
              </p>
            </Card>

            <Card className="border-0 shadow-md p-8">
              <h3 className="text-lg font-bold text-foreground mb-3">Mes données sont-elles protégées ?</h3>
              <p className="text-muted-foreground">
                Absolument. Nous respectons votre vie privée et ne partagerons jamais vos données personnelles avec des tiers.
              </p>
            </Card>

            <Card className="border-0 shadow-md p-8">
              <h3 className="text-lg font-bold text-foreground mb-3">Puis-je faire un don régulier ?</h3>
              <p className="text-muted-foreground">
                Bien sûr ! Vous pouvez mettre en place des virements réguliers. Contactez-nous pour organiser un don mensuel ou annuel.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container text-center">
          <h2
            className="text-4xl font-bold text-foreground mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            Merci pour votre soutien !
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Chaque don nous rapproche de notre objectif. Ensemble, nous transformons des vies.
          </p>
          <a
            href="/contact"
            className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Nous Contacter
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
