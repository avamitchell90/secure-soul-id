import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface NavigationProps {
  variant?: "app" | "promotion";
}

const Navigation = ({ variant = "app" }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isPromotion = variant === "promotion";

  return (
    <nav className="sticky top-0 z-50 border-b border-passport-gold/20 bg-card/95 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={isPromotion ? "/promotion" : "/"} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Shield className="w-6 h-6 text-passport-navy" />
              </div>
              <div className="absolute inset-0 w-10 h-10 rounded-full bg-gradient-gold opacity-50 animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-passport-gold">PrivateRep</div>
              <div className="text-xs text-passport-silver/60 font-mono">FHE SECURED</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {isPromotion ? (
              <>
                <Link to="#features" className="text-sm font-medium text-muted-foreground hover:text-passport-gold transition-colors">
                  Features
                </Link>
                <Link to="#use-cases" className="text-sm font-medium text-muted-foreground hover:text-passport-gold transition-colors">
                  Use Cases
                </Link>
                <div className="w-px h-6 bg-border" />
                <Link to="/">
                  <Button className="bg-gradient-gold text-passport-navy hover:bg-passport-gold-muted font-semibold px-6 transition-all duration-300 hover:scale-105">
                    Launch App
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-stamp border border-passport-gold/30">
                  <div className="w-2 h-2 bg-passport-gold rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-passport-gold">CONNECTED</span>
                </div>
                <Link to="/promotion">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-passport-gold/30 text-passport-gold hover:bg-passport-gold/10 transition-all duration-300 hover:scale-105"
                  >
                    About
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-passport-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-passport-gold/20 bg-card/95 backdrop-blur-lg animate-fade-in">
            <div className="py-4 space-y-3">
              {isPromotion ? (
                <>
                  <Link 
                    to="#features" 
                    className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-passport-gold hover:bg-passport-gold/5 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link 
                    to="#use-cases" 
                    className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-passport-gold hover:bg-passport-gold/5 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Use Cases
                  </Link>
                  <div className="px-4 pt-2">
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full bg-gradient-gold text-passport-navy hover:bg-passport-gold-muted font-semibold">
                        Launch App
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="px-4">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-stamp border border-passport-gold/30">
                      <div className="w-2 h-2 bg-passport-gold rounded-full animate-pulse" />
                      <span className="text-xs font-mono text-passport-gold">CONNECTED</span>
                    </div>
                  </div>
                  <Link 
                    to="/promotion" 
                    className="block mx-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button 
                      variant="outline" 
                      className="w-full border-passport-gold/30 text-passport-gold hover:bg-passport-gold/10"
                    >
                      About PrivateRep
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;