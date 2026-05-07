import React from 'react';
import { motion } from 'framer-motion';
import headshotPath from "@assets/Headshot3_1778170238565.jpg";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-border">
              <img 
                src={headshotPath} 
                alt="Abdul-Rahman Sayed Professional" 
                className="w-full h-auto object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-2/3 space-y-6 text-muted-foreground"
          >
            <p className="text-lg leading-relaxed text-foreground">
              Computer Science graduate from Georgia Institute of Technology with hands-on experience across full-stack development, AI training, Salesforce development, and automation engineering. Passionate about crafting performant, accessible front-end experiences with clean architecture and modern tooling.
            </p>

            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-foreground font-semibold text-xl mb-4">Education</h3>
              <div className="mb-2">
                <span className="font-medium text-foreground">Georgia Institute of Technology</span>
                <span className="mx-2">•</span>
                <span>B.S. Computer Science</span>
                <span className="mx-2">•</span>
                <span>2020–2024</span>
              </div>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Threads: Intelligence and Media</li>
                <li>Graduation with Honors, Dean's List</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-foreground font-semibold text-xl mb-4">Certifications</h3>
              <div>
                <span className="font-medium text-foreground">Microsoft Certified: Azure Fundamentals (AZ-900)</span>
                <span className="mx-2">•</span>
                <span>Microsoft</span>
                <span className="mx-2">•</span>
                <span>April 2026</span>
              </div>
            </div>

            <p className="text-lg font-medium text-primary mt-6 italic">
              "Seeking front-end engineering roles where I can apply my expertise in Vue.js, React, TypeScript, and component-driven architecture to build products people love using."
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
