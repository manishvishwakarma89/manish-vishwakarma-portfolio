import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Download, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-hero text-hero-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
            <Star className="w-6 h-6 text-primary mx-4" />
            <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
          </div>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl font-bold text-primary mb-4">
                DevOps & Cloud Architecture Expertise
              </h3>
              <p className="text-lg leading-relaxed text-hero-foreground/90">
                I'm passionate about cloud computing and DevOps practices, with extensive experience in AWS services and infrastructure automation. My journey spans from academic research to hands-on cloud implementations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  
                </div>
                
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Professional Mission
              </h3>
              <p className="text-lg leading-relaxed text-hero-foreground/90">
                My goal is to bridge the gap between complex cloud technologies and business requirements, delivering scalable, secure, and cost-effective solutions that drive organizational success.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-primary mb-3">Key Strengths</h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-hero-foreground/80">Cloud Architecture Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-hero-foreground/80">Infrastructure Automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-hero-foreground/80">Cost Optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-hero-foreground/80">Security Best Practices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Ready to Collaborate?
            </h3>
            <p className="text-lg text-hero-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how my expertise in AWS cloud architecture and DevOps can help transform your infrastructure and accelerate your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             
              <Button
                variant="outline"
                size="xl"
                className="bg-white/10 border-white/30 text-hero-foreground hover:bg-white/20 hover:border-white/50"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;