import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Solutions", href: "/solutions" },
    { label: "Technology", href: "/technology" },
    { label: "Industries", href: "/industry" },
    { label: "About", href: "/about" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("/#") && location.pathname === "/") {
      const element = document.querySelector(href.substring(1));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-elevated/95 backdrop-blur-md border-b border-border">
      <div className="container-narrow section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-navy">sentia</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.href.startsWith("/") && !item.href.includes("#") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact">
              <Button variant="navy" size="sm">
                Contact
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.href.startsWith("/") && !item.href.includes("#") ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {item.label}
                  </a>
                )
              ))}
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                <Button variant="navy" size="sm" className="w-full mt-2">
                  Contact
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
