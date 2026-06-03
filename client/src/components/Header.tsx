import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEvenementOpen, setIsEvenementOpen] = useState(false);
  const [isMobileEvenementOpen, setIsMobileEvenementOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fermer le dropdown si clic en dehors
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsEvenementOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const evenementItems = [
    { label: "🎭 Gala de charité", href: "/evenement/gala" },
    { label: "🛍️ Braderie", href: "/evenement/braderie" },
    { label: "⚽ Sport", href: "/evenement/sport" },
  ];

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Le Projet", href: "/project" },
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

          {/* Menu déroulant Événements */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsEvenementOpen(!isEvenementOpen)}
              className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Événements
              <ChevronDown
                className="w-4 h-4 transition-transform duration-200"
                style={{ transform: isEvenementOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            {isEvenementOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-52 rounded-xl shadow-lg border overflow-hidden"
                style={{ background: "#1a1209", borderColor: "#E2B55C44" }}
              >
                {evenementItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsEvenementOpen(false)}
                    className="flex items-center px-4 py-3 text-sm font-medium transition-colors duration-150"
                    style={{ color: "#C1A47E", fontFamily: "Playfair Display" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#E2B55C22";
                      (e.currentTarget as HTMLElement).style.color = "#E2B55C";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "#C1A47E";
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
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

            {/* Événements mobile */}
            <div>
              <button
                onClick={() => setIsMobileEvenementOpen(!isMobileEvenementOpen)}
                className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors w-full"
              >
                Événements
                <ChevronDown
                  className="w-4 h-4 transition-transform duration-200"
                  style={{ transform: isMobileEvenementOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              {isMobileEvenementOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  {evenementItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => { setIsMenuOpen(false); setIsMobileEvenementOpen(false); }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

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
