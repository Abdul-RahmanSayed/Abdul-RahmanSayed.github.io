import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from './ui/button';
import resumePdfPath from "@assets/Sayed_AbdulRahman_Resume_1778170233910.pdf";

export function ResumeSection() {
  return (
    <section id="resume" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Resume</h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>
          
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full font-medium shadow-[0_0_15px_rgba(108,99,255,0.3)]" data-testid="btn-download-resume-section">
            <a href={resumePdfPath} download="Sayed_AbdulRahman_Resume.pdf">
              <Download className="mr-2 w-4 h-4" /> Download PDF
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full bg-card border border-border rounded-xl overflow-hidden shadow-sm h-[600px] flex flex-col"
        >
          <div className="bg-accent/50 border-b border-border py-3 px-4 flex items-center justify-between text-sm text-muted-foreground font-mono">
            <span>Sayed_AbdulRahman_Resume.pdf</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
            </div>
          </div>
          <div className="flex-1 w-full bg-[#323639] relative">
            <object 
              data={resumePdfPath} 
              type="application/pdf" 
              className="absolute inset-0 w-full h-full"
            >
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <p className="text-white/80 mb-4">Your browser doesn't support embedded PDFs.</p>
                <Button asChild variant="default">
                  <a href={resumePdfPath} download="Sayed_AbdulRahman_Resume.pdf">Download Resume instead</a>
                </Button>
              </div>
            </object>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
