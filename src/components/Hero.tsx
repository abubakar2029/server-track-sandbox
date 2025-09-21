import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";

const Hero = () => {
  const handleShopNowClick = () => {
    // GA4 Event: select_promotion
    console.log("GA4 Event: select_promotion - Shop Now CTA");
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleVideoPlay = () => {
    // GA4 Event: video_start
    console.log("GA4 Event: video_start");
  };

  const handleLearnMoreClick = () => {
    // GA4 Event: view_item_list
    console.log("GA4 Event: view_item_list - Learn More");
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-hero opacity-90" />
      
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Next-Gen
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Technology
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover cutting-edge devices that transform how you work, create, and connect. 
            Premium quality meets innovative design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={handleShopNowClick}
              className="bg-white text-primary hover:bg-white/90 hover-glow px-8 py-6 text-lg font-semibold rounded-xl transition-spring"
            >
              Shop Now
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleVideoPlay}
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold rounded-xl transition-spring bg-white/10 backdrop-blur-sm"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="glass p-6 rounded-xl hover-glow transition-spring">
              <div className="text-3xl font-bold text-white mb-2">500K+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div className="glass p-6 rounded-xl hover-glow transition-spring">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Premium Brands</div>
            </div>
            <div className="glass p-6 rounded-xl hover-glow transition-spring">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Support</div>
            </div>
          </div>

          <div className="mt-12">
            <Button
              variant="ghost"
              onClick={handleLearnMoreClick}
              className="text-white hover:text-white/80 text-lg font-medium transition-smooth"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;