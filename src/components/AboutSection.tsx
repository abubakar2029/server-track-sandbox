import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Globe, 
  Zap, 
  Shield, 
  Headphones,
  TrendingUp,
  Star
} from "lucide-react";

const AboutSection = () => {
  const handleLearnMoreClick = () => {
    // GA4 Event: engagement
    console.log("GA4 Event: engagement", {
      engagement_time_msec: 5000,
      section: "about_us"
    });
    
    // GA4 Event: select_content
    console.log("GA4 Event: select_content", {
      content_type: "about_section",
      item_id: "company_history"
    });
  };

  const handleAwardClick = (awardName: string) => {
    // GA4 Event: select_item
    console.log("GA4 Event: select_item", {
      item_list_name: "Company Awards",
      item_name: awardName,
      item_category: "recognition"
    });
  };

  const handleTeamClick = () => {
    // GA4 Event: view_item_list
    console.log("GA4 Event: view_item_list", {
      item_list_id: "team_members",
      item_list_name: "Leadership Team"
    });
  };

  const handleStatClick = (statType: string, value: string) => {
    // GA4 Event: click
    console.log("GA4 Event: click", {
      click_text: `${statType}: ${value}`,
      link_location: "about_stats",
      content_group1: "company_metrics"
    });
  };

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            About TechStore
          </Badge>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Pioneering Tomorrow's Technology Today
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Since 2015, we've been at the forefront of technology retail, bringing cutting-edge 
            innovations to millions of customers worldwide. Our mission is to make premium 
            technology accessible to everyone.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, stat: "500K+", label: "Happy Customers", color: "text-blue-500" },
            { icon: Globe, stat: "50+", label: "Countries Served", color: "text-green-500" },
            { icon: Award, stat: "25+", label: "Industry Awards", color: "text-purple-500" },
            { icon: TrendingUp, stat: "$100M+", label: "Revenue (2023)", color: "text-orange-500" }
          ].map(({ icon: Icon, stat, label, color }, index) => (
            <Card 
              key={index} 
              className="text-center p-6 hover:shadow-medium transition-spring cursor-pointer border-0 shadow-soft"
              onClick={() => handleStatClick(label, stat)}
            >
              <Icon className={`w-8 h-8 mx-auto mb-3 ${color}`} />
              <div className="text-2xl font-bold text-primary mb-1">{stat}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Company Story */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded by tech enthusiasts who believed that everyone deserves access to 
                premium technology, TechStore began as a small startup with a big vision.
              </p>
              <p>
                Today, we're proud to be a leading technology retailer, serving customers 
                across the globe with an extensive range of laptops, smartphones, 
                accessories, and cutting-edge gadgets.
              </p>
              <p>
                Our commitment to quality, customer service, and innovation has earned us 
                the trust of millions and recognition from industry leaders worldwide.
              </p>
            </div>
            
            <Button 
              className="mt-6 hover-glow transition-spring"
              onClick={handleLearnMoreClick}
            >
              Learn More About Our Journey
            </Button>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: Zap,
                title: "Innovation First",
                description: "Always bringing you the latest and greatest in technology"
              },
              {
                icon: Shield,
                title: "Quality Assured",
                description: "Every product undergoes rigorous testing and quality checks"
              },
              {
                icon: Headphones,
                title: "Expert Support",
                description: "24/7 customer support from certified tech experts"
              },
              {
                icon: Star,
                title: "Customer Focused",
                description: "Your satisfaction and success is our top priority"
              }
            ].map(({ icon: Icon, title, description }, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-spring border-0 shadow-soft">
                <Icon className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-semibold mb-2">{title}</h4>
                <p className="text-sm text-muted-foreground">{description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-8">Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                award: "Best Tech Retailer 2023",
                organization: "Tech Industry Awards",
                year: "2023",
                badge: "Gold"
              },
              {
                award: "Customer Choice Award",
                organization: "Consumer Reports",
                year: "2023",
                badge: "Winner"
              },
              {
                award: "Excellence in E-commerce",
                organization: "Digital Commerce Awards",
                year: "2022",
                badge: "Platinum"
              }
            ].map((award, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-medium transition-spring cursor-pointer border-0 shadow-soft group"
                onClick={() => handleAwardClick(award.award)}
              >
                <Award className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-spring" />
                <Badge className="mb-3 bg-gradient-primary text-white">
                  {award.badge}
                </Badge>
                <h4 className="font-semibold mb-2">{award.award}</h4>
                <p className="text-sm text-muted-foreground mb-1">{award.organization}</p>
                <p className="text-xs text-muted-foreground">{award.year}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Team CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
            <p className="mb-6 max-w-2xl mx-auto opacity-90">
              Behind every great product is a passionate team of experts dedicated to 
              bringing you the best technology experience.
            </p>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary transition-spring"
              onClick={handleTeamClick}
            >
              View Leadership Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;