import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Header Component - Navigation principale
 * Design: Asymétrie moderniste avec logo et navigation claire
 * Couleurs: Jaune moutarde (#D4A017) et vert foncé (#2D5016)
 */

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Le Projet", href: "/project" },
    { label: "Objectifs", href: "/objectives" },
    { label: "Donner", href: "/donate" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo.jpg"
            alt="ONG Destin'Action"
            className="w-12 h-12 object-contain rounded"
          />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-primary" style={{ fontFamily: "Playfair Display" }}>
              Destin'Action
            </h1>
            <p className="text-xs text-muted-foreground">Transmettons la chance</p>
          </div>
        </a>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            onClick={() => {
              document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Faire un don
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 hover:bg-secondary/10 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full"
              onClick={() => {
                setIsMenuOpen(false);
                document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Faire un don
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
