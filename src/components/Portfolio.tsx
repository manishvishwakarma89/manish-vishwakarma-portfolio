import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Star, Plus, X } from 'lucide-react';

// Import portfolio images
import careerObjective from '@/assets/career-objective.jpg';
import skillsGrid from '@/assets/skills-grid.jpg';
import awsTools from '@/assets/aws-tools.jpg';
import education from '@/assets/education.jpg';
import experience from '@/assets/experience.jpg';
import awsArchitecture from '@/assets/aws-architecture.jpg';

interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  description: string;
  details: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 'career-objective',
    title: 'Career Objective',
    image: careerObjective,
    description: 'My professional goals and aspirations',
    details: [
      'Innovative and versatile full-stack engineer with 6+ years of experience delivering end-to-end web, mobile, and AI-driven solutions for global clients. Expert in React.js, Next.js, React Native, and NestJS, combined with creative strengths in UI/UX design, digital branding, and marketing strategy. Passionate about transforming business ideas into visually engaging, high-performance applications that scale seamlessly across devices and platforms..'
    ]
  },
  {
    id: 'skills',
    title: 'Technical Skills',
    image: skillsGrid,
    description: 'Core competencies and technical expertise',
    details: [
     'Frontend:React.js, Next.js, React Native, Redux, Material UI, HTML5, CSS3, TypeScript',
      'Backend: NodeJs,NextJs, Python, Django, Flask, PostgreSQL, Firebase, REST APIs',
      'DevOps & Cloud Concepts: Docker, AWS, GitHub Actions, CI/CD Jenkins',
      'Creative & Marketing: Digital Marketing, Branding, SEO, Content Strategy, Graphic Design',
      'Design Tools: Figma, Adobe XD, Canva, Illustrator',
      'Tools & Platforms: VS Code, Notion, Slack, Bitbucket, Postman, Git'
    ]
  },
  {
    id: 'education',
    title: 'Educational Background',
    image: education,
    description: 'Academic qualifications and certifications',
    details: [
      'MCA (Master of Computer Application) - First Division from Bharti Vidyapeeth Deemed University, Pune (2010-2013)',
      'BCA (Bachelor of Computer Application) - First Division from CCS University, Meerut, India (2007-2010)',
      'Intermediate CBSE Board - Dhanpat Mal Virmani Senior Secondary School, Roop Nagar (2004)',
      'Metric CBSE Board - S.M.Jain Senior Secondary School, Kamla Nagar (2001)'
    ]
  },
  {
    id: 'experience',
    title: 'Professional Experience',
    image: experience,
    description: 'Career progression and key roles',
    details: [
      'Research Associate, RDSC, TLC Ramanujan College, University of Delhi (2021 – 2023)',
      'Computer Lab Assistant – Shyama Prasad College for Women (2019 – 2022)',
      'Senior Technical Assistant – Sri Aurobindo College Evening (2017 – 2018)',
      'Intern Programmer PNS, IIC, UDSC (2013 – 2015)'
    ]
  },
  {
    id: 'projects',
    title: 'Professional Projects ',
    image: awsArchitecture,
    description: 'Real-world implementations and achievements',
    details: [
      'E-Pharmacy Platform (Healthcare Domain): Architected a microservices-based system for managing prescriptions, patient data, and refills , Improved app response time by 30% through caching and query optimization & Improved app response time by 30% through caching and query optimization',
      'Digital Parliament Platform (Digital Sansad): Built live session modules for Lok Sabha & Rajya Sabha with real-time updates, Reduced page load by 35% via SSR optimization, supporting 1M+ users & Reduced page load by 35% via SSR optimization, supporting 1M+ users.'
    ]
  }
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Portfolio
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
            <Star className="w-6 h-6 text-primary mx-4" />
            <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my professional journey, technical expertise, and project accomplishments
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Portfolio Item Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={() => setSelectedItem(item)}
                    className="transform scale-90 group-hover:scale-100 transition-transform duration-300"
                  >
                    <Plus className="w-6 h-6" />
                    View Details
                  </Button>
                </div>
              </div>

              {/* Portfolio Item Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-primary mb-4">
                  {selectedItem.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Modal Image */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Modal Content */}
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground">
                    {selectedItem.description}
                  </p>
                  
                  <div className="space-y-3">
                    {selectedItem.details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-foreground leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Close Button */}
                <div className="flex justify-center pt-4">
                  <Button
                    variant="default"
                    onClick={() => setSelectedItem(null)}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
