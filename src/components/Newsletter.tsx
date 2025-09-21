import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Gift, Zap, Shield } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // GA4 Event: sign_up (newsletter)
    console.log("GA4 Event: sign_up", {
      method: "newsletter",
      email: email
    });

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmail("");
      
      // GA4 Event: conversion
      console.log("GA4 Event: conversion", {
        conversion_type: "newsletter_signup",
        value: 1
      });

      toast({
        title: "Successfully Subscribed!",
        description: "Welcome to TechStore! Check your email for exclusive offers."
      });
    }, 1000);
  };

  const handleOfferClick = () => {
    // GA4 Event: select_promotion
    console.log("GA4 Event: select_promotion", {
      promotion_id: "newsletter_10_off",
      promotion_name: "Newsletter 10% Off"
    });
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="w-16 h-16 text-white mx-auto mb-6" />
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Tech Community
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get exclusive access to new products, special offers, and tech insights. 
            Plus, receive 10% off your first order!
          </p>

          <Card className="glass border-white/20 max-w-2xl mx-auto mb-12">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/90 border-white/30"
                  required
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary hover:bg-primary-hover text-white px-8"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
              
              <p className="text-sm text-white/70 mt-4">
                By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div 
              className="glass p-6 rounded-xl cursor-pointer hover-glow transition-spring"
              onClick={handleOfferClick}
            >
              <Gift className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Exclusive Offers</h3>
              <p className="text-white/80 text-sm">
                Member-only discounts and early access to sales
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl hover-glow transition-spring">
              <Zap className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Latest Tech News</h3>
              <p className="text-white/80 text-sm">
                Stay updated with cutting-edge technology trends
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl hover-glow transition-spring">
              <Shield className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Premium Support</h3>
              <p className="text-white/80 text-sm">
                Priority customer service and tech support
              </p>
            </div>
          </div>

          <div className="mt-8 text-white/80">
            <p className="text-sm">
              Trusted by <span className="font-semibold text-white">500,000+</span> tech enthusiasts worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;