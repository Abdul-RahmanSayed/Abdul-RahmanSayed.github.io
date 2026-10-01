import React from 'react';
import { motion } from 'framer-motion';
import defaultExperienceLogo from '@assets/experience-default.svg';
import idTechLogo from '@assets/idTechLogo.png';
import skillStormLogo from '@assets/skillstormLogo.jpg';
import proAutomatedLogo from '@assets/proautomatedLogo.png';
import invisibleTechnologiesLogo from '@assets/invisibleTechLogo.png';
import messageGearsLogo from '@assets/messageGearsLogo.jpg';
import georgiaTechLogo from '@assets/Georgia-Tech-New-logo-f.png';

type ExperienceEntry = {
  id: number;
  company: string;
  role: string;
  date: string;
  location: string;
  logo?: string;
  bullets: string[];
  tags: string[];
};

const experienceData: ExperienceEntry[] = [
  {
    id: 7,
    company: "Confidential Pre-Launch Technology Venture",
    role: "Full-Stack Engineer (Part-Time)",
    date: "January 2026 - Present",
    location: "Remote",
    bullets: [
      "Led production-readiness and integration of a team-built cross-platform Flutter/Dart app with Python, FastAPI, SQLAlchemy, and Azure SQL",
      "Designed non-destructive schema migrations that preserved data and enforced integrity constraints; built backward-compatible REST adapters to resolve ID, authentication, timestamp, notification, and state-synchronization contracts",
      "Improved Azure reliability through database compatibility fixes, transient retries, request tracing, standardized errors, CORS, secure API logging, and GitHub Actions deployments",
      "Validated core journeys at an integration baseline of 57 passing frontend/backend tests and 88.8% backend coverage, plus static analysis; documented architecture, onboarding, migrations, deployment, testing, and troubleshooting"
    ],
    tags: ["Flutter", "Dart", "Python", "FastAPI", "SQLAlchemy", "Azure SQL", "REST APIs", "GitHub Actions", "Integration Testing"]
  },
  {
    id: 1,
    company: "iD Tech",
    role: "Online Instructor",
    date: "April 2026 - August 2026; May 2020 - August 2021",
    location: "Remote / Alpharetta, GA",
    logo: idTechLogo,
    bullets: [
      "Taught private and group lessons in Python, Java, JavaScript/p5.js, and ML/AI using scikit-learn, the OpenAI API, Ollama/Llama 3, Google Colab, Tkinter, Unity/C#, and Godot",
      "Explained AI assistants and local LLM workflows in plain language, adapted analogies through probing questions, and checked understanding through independent coding and learner-friendly guides",
      "Troubleshot Python packages, Java/JDK, APIs, and cross-platform setups in PyCharm and VS Code for students and instructors; wrote lesson plans, progress summaries, and follow-up resources"
    ],
    tags: ["Python", "Java", "JavaScript", "p5.js", "C#", "AI/ML", "scikit-learn", "OpenAI API", "Ollama", "Unity", "Godot"]
  },
  {
    id: 2,
    company: "SkillStorm",
    role: "Salesforce Developer",
    date: "January 2026",
    location: "Atlanta, GA",
    logo: skillStormLogo,
    bullets: [
      "Supported Salesforce data modeling and workflow automation using custom objects, relationships, Flows, and Apex, standardizing fields and transformation logic for data integrity and reporting"
    ],
    tags: ["Salesforce", "Apex", "Flows", "SQL", "Data Modeling"]
  },
  {
    id: 3,
    company: "ProAutomated",
    role: "Field Service Engineer",
    date: "February 2025 - December 2025",
    location: "Atlanta, GA / Thermo Systems at QTS",
    logo: proAutomatedLogo,
    bullets: [
      "Programmed and commissioned Allen-Bradley PLC controls, performing EPMS/BMS functional and sequence testing, I/O checkout, Ignition SCADA validation, networking, and device-communication troubleshooting in data centers",
      "Diagnosed software, controls, and network issues within safety constraints; reconciled devices, vendor schematics, SCADA data, and checklists to unblock commissioning",
      "Compiled discrepancy logs, photos, and vendor evidence, and explained mismatches to QTS and Thermo Systems stakeholders to support approved vendor-specific checklists and ongoing reporting",
      "Balanced commissioning and sequence-test demands during staffing gaps; onboarded three initial new hires and coached co-ops through demos, reference guides, and independent checks, helping trainees approach experienced peers' efficiency within two weeks"
    ],
    tags: ["Allen-Bradley PLC", "EPMS/BMS", "Ignition SCADA", "Network Troubleshooting", "Commissioning", "Onboarding"]
  },
  {
    id: 4,
    company: "Invisible Technologies",
    role: "Advanced AI Trainer / Software Developer Contractor",
    date: "February 2024 - February 2025",
    location: "Remote",
    logo: invisibleTechnologiesLogo,
    bullets: [
      "Evaluated LLM-generated coding and technical responses across Java, TypeScript, JavaScript, and Python for factual errors, faulty reasoning, missed edge cases, safety, and requirement adherence",
      "Wrote corrected solutions and code, verified model claims, and documented failure modes and recommendations to improve technical response quality"
    ],
    tags: ["LLM Evaluation", "Prompt Engineering", "Python", "Java", "TypeScript", "JavaScript", "Technical Review"]
  },
  {
    id: 5,
    company: "MessageGears",
    role: "Software Development Lead Intern / Software Development Intern",
    date: "May 2023 - August 2023; May 2022 - August 2022",
    location: "Atlanta, GA",
    logo: messageGearsLogo,
    bullets: [
      "Delivered 27+ Jira stories and resolved 15+ bugs across a TypeScript/Angular application, Java REST services, SQL workflows, scheduled jobs, personalization, and pagination",
      "Built Java/JSON/XML REST services and SQL schema scripts; used Chrome DevTools and network inspection to trace failures across the client, API, database, and scheduled processes",
      "Developed Selenium and Cypress UI, integration, and REST API tests and worked in containerized development and CI/CD workflows using Docker, Gradle, and Apache Tomcat",
      "Mentored interns through onboarding, story breakdown, debugging, and sprint execution, contributing to a 96% improvement over the prior year in the internship team's story completion rate measured using Agile story points"
    ],
    tags: ["Angular", "TypeScript", "Java", "SQL", "Selenium", "Cypress", "Docker", "Gradle"]
  },
  {
    id: 6,
    company: "Georgia Institute of Technology",
    role: "Objects and Design (CS 2340) Undergraduate Teaching Assistant",
    date: "January 2023 - December 2023",
    location: "Atlanta, GA",
    logo: georgiaTechLogo,
    bullets: [
      "Supported 200+ students per semester in object-oriented programming, Agile/Scrum, Git/GitHub, software design, and team application development through demonstrations, office hours, grading, and project reviews",
      "Collaborated with course staff on project requirements, assignments, exam questions, and instructor examples using Java/JavaFX or Android tooling with TestFX and Mockito"
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
              <div className="md:hidden absolute left-0 top-2 bottom-[-48px] w-px bg-border last:bottom-0"></div>
              <div className="md:hidden absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>

              <div className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors">
                <div className="flex flex-col sm:flex-row gap-5 md:gap-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-xl border border-border bg-white p-3 flex items-center justify-center overflow-hidden">
                    <img
                      src={exp.logo ?? defaultExperienceLogo}
                      alt={exp.logo ? `${exp.company} logo` : ""}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col mb-4 gap-2">
                      <div className="min-w-0">
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                        <div className="text-primary font-medium">{exp.company}</div>
                      </div>
                      <div className="text-sm font-mono text-muted-foreground">
                        <div>{exp.date}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start text-muted-foreground text-sm md:text-base">
                          <span className="text-secondary mr-2 mt-1.5 text-xs">&#9657;</span>
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
