import React from 'react';
import { motion } from 'framer-motion';
import defaultExperienceLogo from '@assets/experience-default.svg';
import idTechLogo from '@assets/idTechLogo.png';
import skillStormLogo from '@assets/skillstormLogo.jpg';
import proAutomatedLogo from '@assets/proautomatedLogo.png';
import invisibleTechnologiesLogo from '@assets/invisibleTechLogo.png';
import messageGearsLogo from '@assets/messageGearsLogo.jpg';
import georgiaTechLogo from '@assets/Georgia-Tech-New-logo-f.png';

type ExperiencePeriod = { date: string; location: string; role?: string };

type ExperienceEntry = {
  id: number;
  company: string;
  logo?: string;
  bullets: string[];
  notes?: string[];
  tags: string[];
} & (
  | (ExperiencePeriod & { role: string })
  | { role: string; periods: ExperiencePeriod[] }
  | { role?: never; periods: (ExperiencePeriod & { role: string })[] }
);

const experienceData: ExperienceEntry[] = [
  {
    id: 7,
    company: "Confidential Pre-Launch Technology Venture",
    role: "Full-Stack Engineer (Part-Time)",
    date: "January 2026 - Present",
    location: "Remote",
    bullets: [
      "Led frontend and backend integration and release preparation for a team-built Flutter/Dart app using Python, FastAPI, SQLAlchemy, and Azure SQL",
      "Designed Alembic migrations that preserved existing data and enforced integrity constraints, and built backward-compatible REST adapters",
      "Restored an Azure App Service deployment by isolating an unconfigured dependency, backing up and migrating Azure SQL, correcting the deployment branch settings, and verifying recovery with health checks"
    ],
    notes: [
      "Improved Azure reliability through database compatibility fixes, transient retries, request tracing, standardized errors, CORS, secure API logging, and guarded GitHub Actions deployments",
      "October 2026 test snapshot: 41 backend tests, 59 Flutter tests, and 88.05% backend coverage. Ran deployment smoke tests and documented release safeguards and recovery procedures",
      "Previously validated an integration baseline of 57 passing frontend/backend tests and 88.8% backend coverage, plus static analysis; documented architecture, onboarding, migrations, deployment, testing, and troubleshooting"
    ],
    tags: ["Flutter", "Dart", "Python", "FastAPI", "SQLAlchemy", "Alembic", "Azure SQL", "Azure App Service", "REST APIs", "GitHub Actions", "Integration Testing"]
  },
  {
    id: 1,
    company: "iD Tech",
    role: "Online Instructor (Part-Time)",
    periods: [
      { date: "April 2026 - July 2026", location: "Remote / Atlanta, GA" },
      { date: "May 2020 - August 2021", location: "Remote / Alpharetta, GA" }
    ],
    logo: idTechLogo,
    bullets: [
      "Taught private and group lessons through hands-on projects, adapting analogies through probing questions and checking understanding through independent coding; wrote lesson plans, progress summaries, and follow-up guides",
      "In 2026, taught Python, Java, ML/AI, and game development using scikit-learn, the OpenAI API, Ollama/Llama 3, Google Colab, Tkinter, Unity/C#, and Godot; explained AI assistants and local LLM workflows in plain language",
      "Troubleshot Python packages, Java/JDK, APIs, and cross-platform setups in PyCharm and VS Code for students and instructors",
      "Taught Minecraft game design and JavaScript/p5.js to children ages 7–12 in summers 2020 and 2021, covering file manipulation and introductory discrete math and working with instructors to improve lessons"
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
      "Built Salesforce custom objects, relationships, Flows, and Apex code during project preparation; standardized fields and transformation logic and normalized data models for workflow automation, data integrity, reporting, and downstream SQL readiness",
      "Assigned to an incoming financial-services project canceled before launch due to client funding changes; the affected cohort was released January 30, 2026"
    ],
    tags: ["Salesforce", "Apex", "Flows", "SQL", "Data Modeling"]
  },
  {
    id: 3,
    company: "ProAutomated",
    role: "Field Service Engineer",
    date: "February 2025 - January 2026",
    location: "Atlanta, GA / Contracted to Thermo Systems at QTS",
    logo: proAutomatedLogo,
    bullets: [
      "Programmed Allen-Bradley PLC controls and commissioned data-center electrical power monitoring (EPMS) and building management systems (BMS) through functional and sequence testing, I/O checkout, and Ignition SCADA validation",
      "Resolved software, controls, network, and device-communication issues and improved automation logic and configurations within safety constraints; reconciled devices, vendor schematics, SCADA data, and checklists to unblock commissioning",
      "Documented discrepancies with photos and vendor evidence and coordinated findings with Thermo Systems and QTS, supporting approved vendor-specific checklists and ongoing reporting",
      "Trained three new hires and coached co-ops on EPMS/BMS checks for HVAC and electrical equipment while balancing commissioning and sequence testing during staffing gaps"
    ],
    notes: [
      "Used demos, reference guides, and independent checks to help trainees work independently and approach experienced peers’ efficiency within two weeks, contributing to an estimated several-week reduction in team testing time"
    ],
    tags: ["Allen-Bradley PLC", "EPMS/BMS", "Ignition SCADA", "Network Troubleshooting", "Commissioning", "Onboarding"]
  },
  {
    id: 4,
    company: "Invisible Technologies",
    role: "Advanced AI Trainer - Coding Evaluation (Contract)",
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
    periods: [
      { role: "Software Development Lead Intern", date: "May 2023 - August 2023", location: "Atlanta, GA" },
      { role: "Software Development Intern", date: "May 2022 - August 2022", location: "Atlanta, GA" }
    ],
    logo: messageGearsLogo,
    bullets: [
      "Delivered 27+ Jira stories and resolved 15+ bugs across a TypeScript/Angular application, Java REST services, SQL workflows, scheduled jobs, personalization, and pagination",
      "Built Java/JSON/XML REST services and SQL schema scripts; used Chrome DevTools and network inspection to trace failures across the client, API, database, and scheduled processes",
      "Developed Selenium and Cypress UI, integration, and REST API tests and worked in containerized development and CI/CD workflows using Docker, Gradle, and Apache Tomcat",
      "Led intern onboarding, mentoring, story breakdown, and sprint coordination, including debugging support, helping the internship team increase completed story points by 96% compared with the previous summer"
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
      "Personally assisted 200+ students per semester in object-oriented programming, Agile/Scrum, Git/GitHub, software design, and team application development through lectures, demonstrations, office hours, grading, and project reviews",
      "Collaborated with course staff on project requirements, assignments, exam questions, and instructor examples using Java/JavaFX, Android tooling, TestFX, and Mockito"
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
                        <h3 className="text-xl font-bold text-foreground">{exp.role ?? exp.company}</h3>
                        {exp.role && <div className="text-primary font-medium">{exp.company}</div>}
                      </div>
                      <div className="space-y-1 text-sm font-mono text-muted-foreground">
                        {('periods' in exp ? exp.periods : [exp]).map(({ date, location, role }) => (
                          <div key={date}>
                            {!exp.role && role && <div className="font-sans font-medium text-foreground">{role}</div>}
                            <div>{date}</div>
                            <div>{location}</div>
                          </div>
                        ))}
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

                    {exp.notes && (
                      <details className="mb-6 rounded-lg border border-border p-3 text-sm text-muted-foreground">
                        <summary className="cursor-pointer font-medium text-foreground">Additional details</summary>
                        <ul className="mt-3 list-disc space-y-2 pl-5">
                          {exp.notes.map(note => <li key={note}>{note}</li>)}
                        </ul>
                      </details>
                    )}

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
