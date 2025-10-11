import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star, Download, ExternalLink, Loader } from 'lucide-react';

const About = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      // Method 1: Local file
      const resumeUrl = '/resume.pdf';
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Manish Kumar-Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Method 2: If you want to fetch from API
      // const response = await fetch('/api/resume');
      // const blob = await response.blob();
      // const url = window.URL.createObjectURL(blob);
      // ... rest of download logic
      
    } catch (error) {
      console.error('Download failed:', error);
      // Optional: Show error toast/message to user
    } finally {
      setDownloading(false);
    }
  };

  return (
    // ... same JSX structure
    <Button
      onClick={handleDownload}
      disabled={downloading}
      variant="outline"
      size="xl"
      className="bg-white/10 border-white/30 text-hero-foreground hover:bg-white/20 hover:border-white/50 disabled:opacity-50"
    >
      {downloading ? (
        <Loader className="w-5 h-5 mr-2 animate-spin" />
      ) : (
        <Download className="w-5 h-5 mr-2" />
      )}
      {downloading ? 'Downloading...' : 'Download Resume'}
    </Button>
  );
};


export default About;