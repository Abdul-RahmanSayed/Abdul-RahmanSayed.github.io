<template>
  <div class="experience">
    <div class="container">
      <h2 class="page-title">Experience</h2>
      
      <div class="timeline">
        <div v-for="(job, index) in experiences" :key="index" class="experience-card">
          <div class="company-logo">
            <img :src="job.logo" :alt="job.company">
          </div>
          <div class="experience-content">
            <h3>{{ job.title }}</h3>
            <h4>{{ job.company }}</h4>
            <p class="duration">{{ job.duration }}</p>
            <p class="description">{{ job.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      experiences: [
        {
          title: 'Lead Field Service Engineer',
          company: 'ProAutomated',
          duration: 'February 2025 - Present',
          logo: new URL('@assets/images/Georgia-Tech-New-logo-f.png', import.meta.url).href,
          description: 'Controls Commissioning & Coding: Implements and commissions complex control systems in QTS data centers, including PLC programming, EPMS/BMS functional testing, and network and Ignition troubleshooting to ensure seamless device communication for Microsoft and Meta systems. Debugging & Optimization: Analyzes and resolves software bugs in control systems, optimizing network configurations and automation logic for peak performance. Training and Leading: Trained new field service engineers for EPMS/BMS functional testing and organized and worked with managers and on-site energy marshals to meet site-wide deadlines.'
        },
        {
          title: 'Advanced AI Trainer Software Developer - Contractor',
          company: 'Invisible Technologies',
          duration: 'February 2024 - February 2025',
          logo: new URL('@assets/images/Georgia-Tech-New-logo-f.png', import.meta.url).href,
          description: 'Prompt Engineering: Analyzed and collaborated with the client\'s LLM systems and API to identify hallucinations in their models\' responses, and write and code those solutions in place of the faulty responses. Coding-Focused Hallucinations: Conduct rigorous analyses to assess the client\'s AI model accuracy, resilience, and safety by actively identifying and documenting hallucinations in Java, Typescript, Javascript, HTML, XML, and Python-related prompts, and recommending improvements for enhanced performance.'
        },
        {
          title: 'Software Development Lead Intern & Software Development Intern',
          company: 'MessageGears',
          duration: 'May 2022 - August 2023',
          logo: new URL('@assets/images/Georgia-Tech-New-logo-f.png', import.meta.url).href,
          description: 'Full-Stack Portal Development: Contributed to a full-stack production portal delivering sales intelligence and engagement services. User Stories and Bug Fixes: Completed 27 team-assigned user stories across the company\'s main product using CI/CD. Resolved over 15 bugs, enhancing the reliability of data tables and user state management. Front-End Enhancements: Streamlined UI elements in a Single Page Application (SPA) using Angular. Converted 2 JSP pages to enhance user experience. QA Automation and Back-End Work: Conducted comprehensive QA automation tests (Cypress, Selenium, view, unit, REST-API) for each story. Modified data types, created back-end components in Java, and adjusted database tables using SQL scripts. Internship Leadership and Program Improvement: Mentored interns during onboarding, story development, and sprint planning. Prioritized and documented stories that product management gave to interns, contributing to a 96% improvement in the summer internship program from the previous summer\'s program.'
        },
        {
          title: 'Objects and Design (CS 2340) Undergraduate Teaching Assistant',
          company: 'Georgia Institute of Technology',
          duration: 'January 2023 - December 2023',
          logo: new URL('@assets/images/Georgia-Tech-New-logo-f.png', import.meta.url).href,
          description: 'Teaching and Curriculum Development: Instructed over 200 students per semester in object-oriented programming and AGILE methodologies. Developed lecture content on Git/Github usage and logic, including custom lecture slides. Administrative Contributions: Collaborated on project descriptions and requirements for term projects. Engaged in staff meetings to discuss curriculum enhancements and student assessments.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.experience {
  padding: var(--spacing-xl) 0;
}

.page-title {
  text-align: center;
  color: var(--color-deep-blue);
  font-size: var(--font-2xl);
  margin-bottom: var(--spacing-xl);
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  max-width: 900px;
  margin: 0 auto;
}

.experience-card {
  display: flex;
  gap: var(--spacing-lg);
  background: white;
  border-radius: 12px;
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  border-left: 4px solid var(--color-sky-blue);
}

.experience-card:hover {
  transform: translateX(8px);
  box-shadow: var(--shadow-lg);
  border-left-color: var(--color-coral);
}

.company-logo {
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-ice-blue);
  border-radius: 8px;
  padding: var(--spacing-sm);
}

.company-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.experience-content {
  flex: 1;
}

.experience-content h3 {
  color: var(--color-deep-blue);
  margin-bottom: var(--spacing-xs);
  font-size: var(--font-lg);
}

.experience-content h4 {
  color: var(--color-navy);
  margin-bottom: var(--spacing-xs);
  font-size: var(--font-md);
  font-weight: 500;
}

.duration {
  color: var(--color-coral);
  font-weight: 500;
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-sm);
}

.description {
  color: var(--color-navy);
  line-height: 1.7;
  font-size: var(--font-sm);
}

@media (max-width: 768px) {
  .experience-card {
    flex-direction: column;
  }
  
  .company-logo {
    width: 100px;
    height: 100px;
    align-self: center;
  }
}
</style>
