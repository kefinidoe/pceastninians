import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import pceaLogo from "@/assets/pcea-logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Ministries", href: "/ministries" },
  { name: "Districts", href: "/districts" },
  { name: "Our School", href: "/school" },
  { name: "Sermons", href: "/sermons" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-soft">
      <nav className="container-church flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={pceaLogo} alt="PCEA Logo" className="w-full h-full object-contain" />
          </div>
          <div className="hidden sm:block">
            <p className="font-serif font-semibold text-primary text-base leading-tight">PCEA St. Ninians</p>
            <p className="text-xs text-muted-foreground">Millimani Parish</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap",
                location.pathname === item.href
                  ? "text-primary bg-secondary"
                  : "text-foreground/80 hover:text-primary hover:bg-secondary/50"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          <Link to="/prayer-request">
            <Button variant="outline" size="sm" className="text-xs whitespace-nowrap">
              Prayer Request
            </Button>
          </Link>
          <Link to="/giving">
            <Button variant="cta" size="sm" className="text-xs whitespace-nowrap">
              Give
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border animate-fade-in">
          <div className="container-church py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-md transition-colors",
                  location.pathname === item.href
                    ? "text-primary bg-secondary"
                    : "text-foreground/80 hover:text-primary hover:bg-secondary/50"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link to="/prayer-request" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Prayer Request
                </Button>
              </Link>
              <Link to="/giving" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="cta" className="w-full">
                  Give
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}