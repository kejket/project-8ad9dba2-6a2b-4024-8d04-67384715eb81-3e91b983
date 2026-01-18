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
    <header className="fixed top-0 left-0 right-0 z-50 gradient-hero backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container-narrow section-padding">
        <div className="flex items-center h-[66px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-base font-bold text-white uppercase" translate="no">SENTIA</span>
          </Link>

          {/* Desktop Navigation - 브랜드네임에 가까이 배치 */}
          <nav className="hidden md:flex items-center gap-8 ml-10">
            {navItems.map((item) => (
              item.href.startsWith("/") && !item.href.includes("#") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-base font-medium text-white/90 hover:text-white transition-colors"
                  translate="no"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-base font-medium text-white/90 hover:text-white transition-colors"
                  translate="no"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* Contact 버튼 - 오른쪽에 배치 */}
          <div className="hidden md:block ml-auto">
            <Link to="/contact">
              <Button 
                variant="navy" 
                size="sm" 
                translate="no"
                className="bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-full px-6"
              >
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary-foreground/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.href.startsWith("/") && !item.href.includes("#") ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-base font-medium text-white/90 hover:text-white transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                    translate="no"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-base font-medium text-white/90 hover:text-white transition-colors py-2"
                    translate="no"
                  >
                    {item.label}
                  </a>
                )
              ))}
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="navy" 
                  size="sm" 
                  className="w-full mt-2 bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-full px-6" 
                  translate="no"
                >
                  Contact
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
