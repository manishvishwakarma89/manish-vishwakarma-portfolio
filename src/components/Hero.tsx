import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Award, Download } from 'lucide-react';
import heroAvatar from '@/assets/manish_pics.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-hero flex items-center justify-center text-center px-4 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container max-w-4xl mx-auto animate-fade-in">
        {/* Avatar */}
        <div className="mb-8">
          <img
            src={heroAvatar}
            alt="Professional Avatar"
            className="w-40 h-40 mx-auto rounded-full border-4 border-primary shadow-glow animate-float object-cover"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-hero-foreground mb-6 leading-tight">
          <span className="text-primary">AWS Certified</span>{' '}
          <span className="text-hero-foreground">Solution Architect</span>
        </h1>

        {/* Certification Link */}
        <div className="mb-6">
          <a
            href="https://cp.certmetrics.com/amazon/en/public/verify/credential/d1731426463d4509a7397daed68ec1bb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg md:text-xl text-accent hover:text-accent/80 transition-colors font-medium"
          >
            <Award className="w-6 h-6" />
            Verify AWS Certification
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-6">
          <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
          <Star className="w-6 h-6 text-primary mx-4" />
          <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
        </div>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-hero-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Hands-on experience in designing and deploying{' '}
          <span className="text-primary font-semibold">2-tier and 3-tier applications</span>
          {' '}with expertise in AWS cloud infrastructure and DevOps practices
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="hero"
            size="xl"
            onClick={() => scrollToSection('portfolio')}
            className="text-lg"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="xl"
            onClick={() => scrollToSection('contact')}
            className="text-lg bg-white/10 border-white/30 text-hero-foreground hover:bg-white/20 hover:border-white/50"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;