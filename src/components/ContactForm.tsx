import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });
  const [isLoading, setIsLoading] = useState(false);

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "support", label: "Technical Support" },
    { value: "sales", label: "Sales Question" },
    { value: "partnership", label: "Partnership" },
    { value: "feedback", label: "Feedback" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // GA4 Event: form_submit
    console.log("GA4 Event: form_submit", {
      form_name: "contact_form",
      form_id: "main_contact",
      inquiry_type: formData.inquiryType,
      form_location: "contact_page"
    });

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // GA4 Event: conversion
      console.log("GA4 Event: conversion", {
        conversion_type: "contact_form_submission",
        inquiry_type: formData.inquiryType
      });

      // GA4 Event: generate_lead
      console.log("GA4 Event: generate_lead", {
        currency: "USD",
        value: 50, // Estimated lead value
        lead_source: "contact_form"
      });

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours."
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        inquiryType: "general"
      });
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // GA4 Event: form_start (on first input)
    if (formData.name === "" && formData.email === "" && formData.message === "") {
      console.log("GA4 Event: form_start", {
        form_name: "contact_form"
      });
    }
  };

  const handleInquiryTypeClick = (type: string) => {
    setFormData(prev => ({ ...prev, inquiryType: type }));
    
    // GA4 Event: select_item
    console.log("GA4 Event: select_item", {
      item_list_name: "Inquiry Types",
      item_name: type
    });
  };

  const handleCallClick = () => {
    // GA4 Event: contact_click
    console.log("GA4 Event: contact_click", {
      contact_method: "phone",
      contact_info: "+1 (555) 123-4567"
    });
  };

  const handleEmailClick = () => {
    // GA4 Event: contact_click
    console.log("GA4 Event: contact_click", {
      contact_method: "email",
      contact_info: "support@techstore.com"
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about our products or need support? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-soft border-0 hover:shadow-medium transition-spring">
              <CardContent className="p-6">
                <div 
                  className="flex items-center space-x-4 cursor-pointer"
                  onClick={handleCallClick}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0 hover:shadow-medium transition-spring">
              <CardContent className="p-6">
                <div 
                  className="flex items-center space-x-4 cursor-pointer"
                  onClick={handleEmailClick}
                >
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-muted-foreground">support@techstore.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Visit Us</h3>
                    <p className="text-muted-foreground">123 Tech Street, Silicon Valley</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-muted-foreground">Mon-Fri: 9AM-7PM</p>
                    <p className="text-muted-foreground text-sm">Sat-Sun: 10AM-5PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                {/* Inquiry Type Selection */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">What can we help you with?</label>
                  <div className="flex flex-wrap gap-2">
                    {inquiryTypes.map((type) => (
                      <Badge
                        key={type.value}
                        variant={formData.inquiryType === type.value ? "default" : "outline"}
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
                        onClick={() => handleInquiryTypeClick(type.value)}
                      >
                        {type.label}
                      </Badge>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name *</label>
                      <Input
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input
                      type="text"
                      placeholder="Brief description of your inquiry"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Message *</label>
                    <Textarea
                      placeholder="Tell us more about how we can help you..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full hover-glow transition-spring"
                    size="lg"
                  >
                    {isLoading ? (
                      "Sending Message..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;