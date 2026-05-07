import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Front-End Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Vue.js 3", "React", "Angular", "D3.js", "p5.js"]
  },
  {
    category: "Back-End & Languages",
    skills: ["Java", "Python", "Node.js", "C#", "Apex"]
  },
  {
    category: "Databases",
    skills: ["SQL (MySQL)", "MongoDB", "NoSQL", "SOQL", "SOSL"]
  },
  {
    category: "Testing & QA",
    skills: ["Cypress", "Selenium", "Mockito", "TestFX", "Jasmine"]
  },
  {
    category: "Tooling & DevOps",
    skills: ["Git", "GitHub", "GitHub Actions", "Docker", "Gradle", "Jira", "Confluence", "Vite"]
  },
  {
    category: "Cloud & Platforms",
    skills: ["Microsoft Azure (AZ-900)", "Salesforce", "Apache Tomcat"]
  },
  {
    category: "Concepts",
    skills: ["OOP", "Agile/Scrum", "REST APIs", "CI/CD", "Machine Learning", "Computer Vision", "Data Structures & Algorithms"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Technical Skills</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(108,99,255,0.15)] hover:-translate-y-1 hover:border-primary/30"
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-accent text-accent-foreground text-xs font-mono rounded border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
