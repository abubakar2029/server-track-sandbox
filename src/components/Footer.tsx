import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Download,
  FileText,
  Shield,
  Truck,
  CreditCard,
  Headphones
} from "lucide-react";

const Footer = () => {
  const handleSocialClick = (platform: string) => {
    // GA4 Event: social_click
    console.log("GA4 Event: social_click", {
      social_platform: platform,
      link_location: "footer"
    });
  };

  const handleDownloadClick = (fileType: string) => {
    // GA4 Event: file_download
    console.log("GA4 Event: file_download", {
      file_name: `techstore_${fileType}.pdf`,
      file_type: "pdf",
      link_location: "footer"
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // GA4 Event: sign_up
    console.log("GA4 Event: sign_up", {
      method: "footer_newsletter"
    });
  };

  const handleLinkClick = (linkName: string, category: string) => {
    // GA4 Event: click
    console.log("GA4 Event: click", {
      link_text: linkName,
      link_location: "footer",
      link_category: category
    });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="text-xl font-bold">TechStore</span>
              </div>
              <p className="text-background/70 mb-6 max-w-sm">
                Your trusted partner for cutting-edge technology. We bring you the latest 
                innovations in laptops, smartphones, and premium tech accessories.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, name: "facebook" },
                  { icon: Twitter, name: "twitter" },
                  { icon: Instagram, name: "instagram" },
                  { icon: Linkedin, name: "linkedin" },
                  { icon: Youtube, name: "youtube" }
                ].map(({ icon: Icon, name }) => (
                  <Button
                    key={name}
                    variant="ghost"
                    size="icon"
                    className="hover:bg-background/10 text-background hover:text-background"
                    onClick={() => handleSocialClick(name)}
                  >
                    <Icon className="w-5 h-5" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "#about" },
                  { name: "Products", href: "#products" },
                  { name: "Contact", href: "#contact" },
                  { name: "Blog", href: "/blog" },
                  { name: "Careers", href: "/careers" }
                ].map(({ name, href }) => (
                  <li key={name}>
                    <a
                      href={href}
                      className="text-background/70 hover:text-background transition-smooth"
                      onClick={() => handleLinkClick(name, "navigation")}
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-3">
                {[
                  { name: "Help Center", href: "/help" },
                  { name: "Shipping Info", href: "/shipping" },
                  { name: "Returns", href: "/returns" },
                  { name: "Warranty", href: "/warranty" },
                  { name: "Track Order", href: "/track" }
                ].map(({ name, href }) => (
                  <li key={name}>
                    <a
                      href={href}
                      className="text-background/70 hover:text-background transition-smooth"
                      onClick={() => handleLinkClick(name, "support")}
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    className="text-background/70 hover:text-background transition-smooth flex items-center gap-2"
                    onClick={() => handleDownloadClick("catalog")}
                  >
                    <Download className="w-4 h-4" />
                    Product Catalog
                  </button>
                </li>
                <li>
                  <button
                    className="text-background/70 hover:text-background transition-smooth flex items-center gap-2"
                    onClick={() => handleDownloadClick("specs")}
                  >
                    <FileText className="w-4 h-4" />
                    Tech Specs Guide
                  </button>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-background/70 hover:text-background transition-smooth"
                    onClick={() => handleLinkClick("Privacy Policy", "legal")}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-background/70 hover:text-background transition-smooth"
                    onClick={() => handleLinkClick("Terms of Service", "legal")}
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20" />

        {/* Features Bar */}
        <div className="py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Shield, title: "Secure Payment", desc: "100% Protected" },
              { icon: Truck, title: "Free Shipping", desc: "Orders over $99" },
              { icon: CreditCard, title: "Easy Returns", desc: "30-day policy" },
              { icon: Headphones, title: "24/7 Support", desc: "Always here to help" }
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center space-y-2">
                <Icon className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-semibold text-sm">{title}</p>
                  <p className="text-background/70 text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-background/20" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/70 text-sm text-center md:text-left">
              © 2024 TechStore. All rights reserved. | Built for GA4 Server-Side Tracking Testing
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a 
                href="/cookies" 
                className="text-background/70 hover:text-background transition-smooth"
                onClick={() => handleLinkClick("Cookie Policy", "legal")}
              >
                Cookie Policy
              </a>
              <a 
                href="/accessibility" 
                className="text-background/70 hover:text-background transition-smooth"
                onClick={() => handleLinkClick("Accessibility", "legal")}
              >
                Accessibility
              </a>
              <a 
                href="/sitemap" 
                className="text-background/70 hover:text-background transition-smooth"
                onClick={() => handleLinkClick("Sitemap", "navigation")}
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;