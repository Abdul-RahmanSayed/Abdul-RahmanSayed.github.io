import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import headshotPath from "@assets/Headshot3_1778170238565.jpg";
import resumePdfPath from "@assets/Sayed_AbdulRahman_Resume_1778170233910.pdf";
import { Button } from './ui/button';

export function HeroSection() {
  const roles = ["Front-End Developer", "Software Engineer", "Vue.js Specialist", "Georgia Tech Graduate"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  return (
    <section id="hero" className="min-h-screen relative flex items-center pt-20 overflow-hidden">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-screen filter blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 max-w-2xl"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-primary text-xs font-mono mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
              Available for opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-foreground">
              Abdul-Rahman Sayed
            </h1>
            
            <div className="h-10 md:h-12 mb-6">
              <span className="text-2xl md:text-3xl font-medium text-muted-foreground">
                {displayedText}
                <span className="animate-pulse inline-block w-1 ml-1 bg-primary h-[1em] align-middle"></span>
              </span>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              Building polished, performant web experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full font-medium" data-testid="cta-projects">
                <a href="#projects">View Projects <ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-border hover:bg-accent font-medium" data-testid="cta-resume">
                <a href={resumePdfPath} download="Sayed_AbdulRahman_Resume.pdf">Download Resume <Download className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full hover:bg-accent hover:text-primary font-medium" data-testid="cta-contact">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://github.com/Abdul-RahmanSayed" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-github">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/abdul-sayed-84643513a/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-linkedin">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:abdulsayed9@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-email">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2" style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))' }}>
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <img 
                  src={headshotPath} 
                  alt="Abdul-Rahman Sayed" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(108,99,255,0.4)] pointer-events-none"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
