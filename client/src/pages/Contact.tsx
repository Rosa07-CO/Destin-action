import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Instagram, Send, CheckCircle, Clock, MessageSquare } from "lucide-react";

/**
 * Contact Page - Page de contact complète
 * Formulaire de contact + informations + réseaux sociaux
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    // Simule un envoi (à connecter à un vrai backend)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative py-16 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
            <defs>
              <pattern id="geo-contact" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <polygon points="40,0 80,20 80,60 40,80 0,60 0,20" fill="#D4A017" />
              </pattern>
            </defs>
            <rect width="1200" height="300" fill="url(#geo-contact)" />
          </svg>
        </div>
        <div className="container relative z-10 text-center">
          <h1
            className="text-5xl font-bold text-secondary-foreground mb-4"
            style={{ fontFamily: "Playfair Display" }}
          >
            Contactez-nous
          </h1>
          <p className="text-lg text-secondary-foreground/80 max-w-xl mx-auto">
            Une question, une envie de s'engager, ou simplement nous dire bonjour ? Nous serons ravis de vous répondre.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 flex-1">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left — Infos de contact */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2
                  className="text-2xl font-bold text-foreground mb-6"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  Nos coordonnées
                </h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Email</p>
                      <a
                        href="mailto:contact@destinaction.org"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        contact@destinaction.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Téléphone</p>
                      <a
                        href="tel:+22890000000"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        +228 90 00 00 00
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Localisation</p>
                      <p className="text-muted-foreground text-sm">Apesito, Togo<br />À 45 min de Lomé</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Disponibilité</p>
                      <p className="text-muted-foreground text-sm">Lun – Ven : 9h – 18h<br />Réponse sous 48h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div>
                <h3 className="text-base font-semibold text-foreground mb-4">Suivez-nous</h3>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-border rounded-lg hover:border-primary hover:text-primary transition-all text-sm font-medium text-foreground"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-border rounded-lg hover:border-primary hover:text-primary transition-all text-sm font-medium text-foreground"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </div>
              </div>

              {/* Encart CTA don */}
              <div className="bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 rounded-xl p-6">
                <MessageSquare className="w-7 h-7 text-primary mb-3" />
                <h3
                  className="text-lg font-bold text-foreground mb-2"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  Vous souhaitez nous soutenir ?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Chaque don, même modeste, contribue à offrir un avenir à des enfants au Togo.
                </p>
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full"
                  onClick={() => window.location.href = "/donate"}
                >
                  Faire un don
                </Button>
              </div>
            </div>

            {/* Right — Formulaire */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-md p-8 border border-border">
                {!submitted ? (
                  <>
                    <h2
                      className="text-2xl font-bold text-foreground mb-2"
                      style={{ fontFamily: "Playfair Display" }}
                    >
                      Envoyez-nous un message
                    </h2>
                    <p className="text-muted-foreground text-sm mb-8">
                      Tous les champs marqués d'un <span className="text-primary font-semibold">*</span> sont obligatoires.
                    </p>

                    <div className="space-y-5">
                      {/* Nom */}
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          Nom complet <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jean Dupont"
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors text-sm bg-background"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          Adresse email <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jean@exemple.fr"
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors text-sm bg-background"
                        />
                      </div>

                      {/* Sujet */}
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          Sujet
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors text-sm bg-background text-foreground"
                        >
                          <option value="">-- Choisissez un sujet --</option>
                          <option value="don">Je souhaite faire un don</option>
                          <option value="benevolat">Devenir bénévole</option>
                          <option value="partenariat">Proposition de partenariat</option>
                          <option value="presse">Demande presse / médias</option>
                          <option value="autre">Autre question</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          Message <span className="text-primary">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Écrivez votre message ici..."
                          rows={5}
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors text-sm bg-background resize-none"
                        />
                      </div>

                      <Button
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                        onClick={handleSubmit}
                        disabled={loading || !formData.name || !formData.email || !formData.message}
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Envoi en cours...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Envoyer le message
                          </span>
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Vos données ne seront jamais partagées avec des tiers. Voir notre{" "}
                        <a href="/legal" className="underline hover:text-primary">politique de confidentialité</a>.
                      </p>
                    </div>
                  </>
                ) : (
                  /* Message de confirmation */
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-6">
                    <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-9 h-9 text-primary" />
                    </div>
                    <div>
                      <h2
                        className="text-2xl font-bold text-foreground mb-3"
                        style={{ fontFamily: "Playfair Display" }}
                      >
                        Message envoyé !
                      </h2>
                      <p className="text-muted-foreground max-w-sm">
                        Merci <strong>{formData.name}</strong> pour votre message. Nous vous répondrons dans les plus brefs délais, sous 48h.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                    >
                      Envoyer un autre message
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
