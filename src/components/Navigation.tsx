import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface NavigationProps {
  variant?: "app" | "promotion" | "home";
}

const Navigation = ({ variant = "app" }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isPromotion = variant === "promotion";
  const isHome = variant === "home";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to={isPromotion ? "/promotion" : isHome ? "/" : "/app"} className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-semibold text-gray-900">Secure Soul ID</div>
              <div className="text-xs text-gray-500 font-medium">FHE Protected</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {isPromotion ? (
              <>
                <Link to="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Features
                </Link>
                <Link to="#use-cases" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Use Cases
                </Link>
                <Link to="/app">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 font-medium px-6 transition-all duration-300">
                    Launch App
                  </Button>
                </Link>
              </>
            ) : isHome ? (
              <>
                <Link to="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Features
                </Link>
                <Link to="#benefits" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Benefits
                </Link>
                <Link to="/app">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 font-medium px-6 transition-all duration-300">
                    Launch App
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Home
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="py-4 space-y-3">
              {isPromotion ? (
                <>
                  <Link 
                    to="#features" 
                    className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link 
                    to="#use-cases" 
                    className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Use Cases
                  </Link>
                  <div className="px-4 pt-2">
                    <Link to="/app" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 font-medium">
                        Launch App
                      </Button>
                    </Link>
                  </div>
                </>
              ) : isHome ? (
                <>
                  <Link 
                    to="#features" 
                    className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link 
                    to="#benefits" 
                    className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Benefits
                  </Link>
                  <div className="px-4 pt-2">
                    <Link to="/app" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 font-medium">
                        Launch App
                      </Button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link 
                    to="/" 
                    className="block mx-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button 
                      variant="outline" 
                      className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      Home
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