import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Button } from './ui/button';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hello, my inbox is always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <a href="mailto:abdulsayed9@gmail.com" className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-colors group" data-testid="contact-card-email">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <span className="font-medium text-foreground">Email</span>
          </a>
          
          <a href="https://linkedin.com/in/abdul-sayed-84643513a/" target="_blank" rel="noopener noreferrer" className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-colors group" data-testid="contact-card-linkedin">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6" />
            </div>
            <span className="font-medium text-foreground">LinkedIn</span>
          </a>

          <a href="https://github.com/Abdul-RahmanSayed" target="_blank" rel="noopener noreferrer" className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-colors group" data-testid="contact-card-github">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Github className="w-6 h-6" />
            </div>
            <span className="font-medium text-foreground">GitHub</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-10 max-w-2xl mx-auto text-left"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-background border border-border rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  placeholder="John Doe"
                  data-testid="input-name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-background border border-border rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  placeholder="john@example.com"
                  data-testid="input-email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full bg-background border border-border rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none"
                placeholder="Hello, I'd like to talk about..."
                data-testid="input-message"
              ></textarea>
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" size="lg" data-testid="button-submit-contact">
              Send Message <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
