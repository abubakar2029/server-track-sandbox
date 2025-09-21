import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import Newsletter from "@/components/Newsletter";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // GA4 Event: page_view (Enhanced)
    console.log("GA4 Event: page_view", {
      page_title: "TechStore - Premium Technology Products",
      page_location: window.location.href,
      page_path: window.location.pathname,
      content_group1: "homepage",
      content_group2: "e-commerce",
      user_engagement: true
    });

    // GA4 Event: session_start
    console.log("GA4 Event: session_start", {
      session_id: `session_${Date.now()}`,
      page_referrer: document.referrer,
      traffic_source: "direct"
    });

    // Track scroll depth for engagement
    let maxScrollDepth = 0;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > maxScrollDepth && scrollPercent % 25 === 0 && scrollPercent > 0) {
        maxScrollDepth = scrollPercent;
        console.log("GA4 Event: scroll", {
          percent_scrolled: scrollPercent,
          page_title: "TechStore Homepage"
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <VideoSection />
        <AboutSection />
        <Newsletter />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
