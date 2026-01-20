import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/procivor-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Why ProcIvor", href: "#why-procivor" },
    { label: "Approach", href: "#approach" },
    { label: "Expertise", href: "#expertise" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-sm border-b border-primary/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="ProcIvor" className="h-14 md:h-16" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="mailto:rubeshdheena@gmail.com"
            className="hidden lg:inline-flex px-5 py-2.5 bg-accent text-accent-foreground text-sm font-semibold rounded-md hover:bg-accent/90 transition-colors"
          >
            Talk to an Architect
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-primary-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-primary-foreground/20 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="mailto:rubeshdheena@gmail.com"
                onClick={() => setIsMenuOpen(false)}
                className="px-5 py-2.5 bg-accent text-accent-foreground text-sm font-semibold rounded-md hover:bg-accent/90 transition-colors mt-4 text-center"
              >
                Talk to an Architect
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
