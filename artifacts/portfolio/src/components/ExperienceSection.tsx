import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    id: 1,
    company: "iD Tech",
    role: "Part-Time Instructor",
    date: "May 2020 - August 2021; April 2026 - Present",
    location: "Remote / Alpharetta, GA",
    bullets: [
      "Teach private and group project-based lessons in Python, Java, JavaScript/p5.js, AI, and machine learning using Google Colab, PyCharm, VS Code, scikit-learn, OpenAI API, and Ollama/Llama 3",
      "Guide students through chatbots, AI assistants, local LLM setup, file and JSON workflows, Java applications, and Unity/C#, Godot, Minecraft, and p5.js game projects while reinforcing object-oriented design and debugging",
      "Troubleshoot language, JDK, IDE, package, library, API, and cross-platform setup issues while producing lesson plans, technical explanations, progress summaries, and next-step guidance"
    ],
    tags: ["Python", "Java", "JavaScript", "p5.js", "C#", "AI/ML", "scikit-learn", "OpenAI API", "Ollama", "Unity", "Godot"]
  },
  {
    id: 2,
    company: "SkillStorm",
    role: "Salesforce Developer",
    date: "January 2026 - April 2026",
    location: "Atlanta, GA",
    bullets: [
      "Supported Salesforce platform design using custom objects, relationships, Flows, Apex, normalized schemas, standardized fields, and transformation logic to improve data integrity, workflow automation, reporting, and downstream SQL readiness",
      "Position concluded after project funding was withdrawn; separation was unrelated to performance"
    ],
    tags: ["Salesforce", "Apex", "Flows", "SQL", "Data Modeling"]
  },
  {
    id: 3,
    company: "ProAutomated",
    role: "Field Service Engineer",
    date: "February 2025 - December 2025",
    location: "Atlanta, GA",
    bullets: [
      "Implemented and commissioned control systems in QTS data centers, including PLC programming, EPMS/BMS functional testing, and network troubleshooting for Microsoft and Meta systems",
      "Analyzed and resolved control-system software defects while optimizing network configurations and automation logic for peak performance",
      "Trained new field service engineers and coordinated with managers and on-site energy marshals to meet site-wide deadlines"
    ],
    tags: ["PLC", "EPMS/BMS", "Network Troubleshooting", "Controls", "Technical Leadership"]
  },
  {
    id: 4,
    company: "Invisible Technologies",
    role: "Advanced AI Trainer Software Developer - Contractor",
    date: "February 2024 - February 2025",
    location: "Remote",
    bullets: [
      "Analyzed client LLM systems and API workflows to identify hallucinations, then wrote and coded corrected technical solutions in place of faulty responses",
      "Assessed AI model accuracy, resilience, and safety by identifying and documenting hallucinations in Java, Spring, Spring Boot, TypeScript, JavaScript, HTML, XML, and Python prompts",
      "Recommended improvements to increase model reliability and technical performance"
    ],
    tags: ["LLMs", "Prompt Engineering", "Python", "Java", "Spring Boot", "TypeScript", "JavaScript", "XML"]
  },
  {
    id: 5,
    company: "MessageGears",
    role: "Software Development Intern / Lead Intern",
    date: "May 2022 - August 2022; May 2023 - August 2023",
    location: "Atlanta, GA",
    bullets: [
      "Contributed to a production Java and TypeScript enterprise messaging platform with an Angular SPA, Java backend services, REST APIs, JSON/XML data exchange, and relational database interactions",
      "Completed 27+ Jira stories and resolved 15+ defects across UI behavior, scheduled jobs, personalization, pagination, backend components, and SQL-backed features",
      "Worked in a Docker-based CI/CD environment with Gradle and Apache Tomcat and developed Selenium and Cypress UI, integration, and REST API tests",
      "Mentored interns through onboarding, story breakdown, debugging, and sprint execution, contributing to a 96% improvement in internship program completion metrics"
    ],
    tags: ["Angular", "TypeScript", "Java", "SQL", "Selenium", "Cypress", "Docker", "Gradle"]
  },
  {
    id: 6,
    company: "Georgia Institute of Technology",
    role: "Objects and Design (CS 2340) Undergraduate Teaching Assistant",
    date: "January 2023 - December 2023",
    location: "Atlanta, GA",
    bullets: [
      "Instructed more than 200 students per semester in object-oriented programming and Agile methodologies and developed custom lecture content covering Git and GitHub",
      "Collaborated on project descriptions and requirements and helped build the instructor example mobile and desktop application using Android Studio or Maven-based Java, JavaFX, TestFX, and Mockito"
    ],
    tags: ["Java", "Object-Oriented Design", "JavaFX", "TestFX", "Mockito", "Git", "Agile"]
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
