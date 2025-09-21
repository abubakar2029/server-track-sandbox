import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Search, User, Menu, X } from "lucide-react";
import AuthModal from "@/components/AuthModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [cartItems] = useState(3);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // GA4 Event: search
    console.log("GA4 Event: search");
  };

  const handleCartClick = () => {
    // GA4 Event: view_cart
    console.log("GA4 Event: view_cart");
  };

  const handleLoginClick = () => {
    // GA4 Event: login_attempt
    console.log("GA4 Event: login_attempt");
    setIsAuthModalOpen(true);
  };

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              TechStore
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-smooth">
              Products
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden lg:flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10 w-64"
              />
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLoginClick}
              className="hidden md:flex items-center space-x-1"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCartClick}
              className="relative"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-xs bg-destructive">
                  {cartItems}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-foreground hover:text-primary transition-smooth p-2">
                Home
              </a>
              <a href="#products" className="text-foreground hover:text-primary transition-smooth p-2">
                Products
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-smooth p-2">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth p-2">
                Contact
              </a>
              <div className="pt-2">
                <form onSubmit={handleSearch} className="flex space-x-2">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    className="flex-1"
                  />
                  <Button type="submit" size="sm">
                    <Search className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </header>
  );
};

export default Header;