import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    id: 1,
    company: "SkillStorm",
    role: "Salesforce Developer",
    date: "January 2026 – Present",
    location: "Atlanta, GA",
    bullets: [
      "Supports design of a Salesforce platform using custom objects, relationships, Flows, and Apex, emphasizing data standardization and scalable schemas",
      "Designs and maintains structured data models within Salesforce, focusing on normalized schemas and transformation logic for downstream SQL-based pipelines"
    ],
    tags: ["Salesforce", "Apex", "SOQL", "SQL", "Data Modeling"]
  },
  {
    id: 2,
    company: "ProAutomated",
    role: "Automation & Controls Engineer",
    date: "February – December 2025",
    location: "Atlanta, GA",
    bullets: [
      "Implements and commissions complex control systems in QTS data centers including PLC programming, EPMS/BMS functional testing, and network troubleshooting for Microsoft and Meta systems",
      "Analyzes and resolves software bugs in control systems, optimizing network configurations and automation logic for peak performance",
      "Trains new field service engineers for EPMS/BMS functional testing"
    ],
    tags: ["PLC", "EPMS/BMS", "Network Troubleshooting", "Automation"]
  },
  {
    id: 3,
    company: "Invisible Technologies",
    role: "Advanced AI Trainer / Software Developer (Contract)",
    date: "February 2024 – February 2025",
    location: "Remote",
    bullets: [
      "Analyzed and collaborated with client's LLM systems and API to identify hallucinations in model responses",
      "Conducted rigorous analyses assessing AI model accuracy in Java, Spring, TypeScript, JavaScript, HTML, and Python-related prompts",
      "Documented hallucinations and recommended improvements for enhanced model performance"
    ],
    tags: ["Python", "Java", "TypeScript", "JavaScript", "Prompt Engineering", "LLMs"]
  },
  {
    id: 4,
    company: "MessageGears",
    role: "Software Development Lead Intern (→ Lead Intern)",
    date: "May 2022 – August 2023",
    location: "Atlanta, GA",
    bullets: [
      "Contributed to a production Java and TypeScript enterprise messaging platform with Angular SPA frontend and Java backend services",
      "Completed 27+ Jira user stories and resolved 15+ bugs in UI behavior, scheduled jobs, personalization attributes, and pagination",
      "Developed and executed automated tests using Selenium and Cypress; mentored incoming interns, improving program completion 96%"
    ],
    tags: ["Angular", "TypeScript", "Java", "SQL", "Selenium", "Cypress", "Docker", "Gradle"]
  },
  {
    id: 5,
    company: "Georgia Institute of Technology",
    role: "CS Teaching Assistant (CS 2340)",
    date: "January – December 2023",
    location: "Atlanta, GA",
    bullets: [
      "Instructed 200+ students per semester in OOP and Agile methodologies; developed lecture content on Git/GitHub",
      "Contributed to building the instructor example term project (Android Studio / Maven-based Java with JavaFX, TestFX, Mockito)"
    ],
    tags: ["Java", "JavaFX", "TestFX", "Mockito", "Git", "Agile"]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
              data-testid={`experience-card-${exp.id}`}
            >
              {/* Timeline line and dot (mobile only) */}
              <div className="md:hidden absolute left-0 top-2 bottom-[-48px] w-px bg-border last:bottom-0"></div>
              <div className="md:hidden absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>

              <div className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <div className="text-primary font-medium">{exp.company}</div>
                  </div>
                  <div className="text-sm font-mono text-muted-foreground md:text-right shrink-0">
                    <div>{exp.date}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-muted-foreground text-sm md:text-base">
                      <span className="text-secondary mr-2 mt-1.5 text-xs">▹</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-[11px] font-mono rounded bg-accent text-accent-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
