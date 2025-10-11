import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Star, Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Me
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
            <Star className="w-6 h-6 text-primary mx-4" />
            <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss how we can work together on your next cloud project
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-gradient-card p-8 rounded-xl shadow-card border border-border/50">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or how I can help you..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-gradient-card p-8 rounded-xl shadow-card border border-border/50">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                        <p className="text-muted-foreground">manish.kumar.v@ramanujan.du.ac.in</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                        <p className="text-muted-foreground">+91 (9873885244)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Location</h4>
                        <p className="text-muted-foreground">Available for remote work worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-gradient-card p-8 rounded-xl shadow-card border border-border/50">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Connect Online
                  </h3>
                  
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-12 h-12 bg-primary/10 border-primary/20 hover:bg-primary/20 hover:border-primary/40"
                      asChild
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 text-primary" />
                      </a>
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-12 h-12 bg-primary/10 border-primary/20 hover:bg-primary/20 hover:border-primary/40"
                      asChild
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 text-primary" />
                      </a>
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-12 h-12 bg-primary/10 border-primary/20 hover:bg-primary/20 hover:border-primary/40"
                      asChild
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-5 h-5 text-primary" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-gradient-primary p-8 rounded-xl text-primary-foreground">
                  <h3 className="text-xl font-bold mb-4">
                    Ready to Start Your Project?
                  </h3>
                  <p className="mb-4 opacity-90">
                    I'm currently available for freelance projects and full-time opportunities. Let's discuss how my AWS expertise can benefit your organization.
                  </p>
                  <div className="flex items-center gap-2 text-sm opacity-80">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Available for new projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
