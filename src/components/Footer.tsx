import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Linkedin, Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-hero text-hero-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">
              AWS Portfolio
            </h3>
            <p className="text-hero-foreground/80 leading-relaxed">
              Dedicated AWS Solutions Architect passionate about designing scalable, 
              secure, and cost-effective cloud infrastructure solutions.
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40 text-hero-foreground"
                asChild
              >
                <a href="https://linkedin.com/in/manish-kumar-21232155" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40 text-hero-foreground"
                asChild
              >
                <a href="https://github.com/kumama88" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40 text-hero-foreground"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40 text-hero-foreground"
                asChild
              >
                <a href="mailto:manishtlc801@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-primary">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start p-0 h-auto text-hero-foreground/80 hover:text-primary hover:bg-transparent"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Portfolio
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start p-0 h-auto text-hero-foreground/80 hover:text-primary hover:bg-transparent"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                About Me
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start p-0 h-auto text-hero-foreground/80 hover:text-primary hover:bg-transparent"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start p-0 h-auto text-hero-foreground/80 hover:text-primary hover:bg-transparent"
                asChild
              >
                <a
                  href="https://cp.certmetrics.com/amazon/en/public/verify/credential/d1731426463d4509a7397daed68ec1bb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AWS Certification
                </a>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-primary">
              Expertise
            </h4>
            <div className="space-y-2 text-hero-foreground/80">
              <p>AWS Cloud Architecture</p>
              <p>Infrastructure as Code</p>
              <p>DevOps & CI/CD</p>
              <p>Security & Compliance</p>
              <p>Cost Optimization</p>
              <p>High Availability Design</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-hero-foreground/80">
              <span>Copyright ©, {currentYear}</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </div>
            <div>
            <span>Design and developed by Manish Kumar Vishwakarma</span>
            </div>
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="text-hero-foreground/80 hover:text-primary hover:bg-white/10"
            >
              Back to Top ↑
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
