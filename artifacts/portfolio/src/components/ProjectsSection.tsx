import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    date: "November 2025 – Present",
    description: "Responsive multi-page SPA built with Vue.js 3, Vue Router, and a Vite build pipeline.",
    stack: ["Vue.js 3", "Vue Router", "Vite", "CSS Custom Properties", "GitHub Actions"],
    accomplishments: [
      "Reusable component architecture with navigation dropdown supporting hover and touch interactions",
      "Embedded PDF resume viewer with direct download link using dynamic asset imports",
      "Design system using CSS custom properties for shared color palette, spacing, and typography",
      "Automated CI/CD deployment to GitHub Pages via GitHub Actions on every push to main"
    ],
    github: "https://github.com/Abdul-RahmanSayed",
    live: "https://abdul-rahmansayed.github.io/",
    gradient: "from-purple-500/20 to-indigo-500/20",
    borderGlow: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
  },
  {
    id: 2,
    title: "GAN-Based Image Colorization & Upscaling",
    date: "September – December 2022",
    description: "Collaborative ML project to colorize and upscale low-resolution black-and-white face images using a Generative Adversarial Network.",
    stack: ["Python", "TensorFlow", "PyTorch", "GAN"],
    accomplishments: [
      "Collaborated in a team of 4 to build a Python-based ML model that colorized and upscaled face images",
      "Utilized a GAN architecture to reconstruct images from downscaled and de-colored datasets",
      "Ground-truth images derived from original dataset for training validation"
    ],
    github: "https://github.com/Abdul-RahmanSayed",
    live: null,
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderGlow: "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
  },
  {
    id: 3,
    title: "Interactive Parallel Coordinate Plot",
    date: "December 2022",
    description: "Data visualization tool built with D3.js for interactive multidimensional data exploration.",
    stack: ["D3.js", "JavaScript", "HTML", "SVG", "CSS"],
    accomplishments: [
      "Built fully interactive parallel coordinate plot from a CSV dataset",
      "Implemented real-time user-driven data filtering and dynamic axis interaction",
      "Designed responsive SVG layout with clean visual hierarchy"
    ],
    github: "https://github.com/Abdul-RahmanSayed",
    live: null,
    gradient: "from-orange-500/20 to-amber-500/20",
    borderGlow: "group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
  },
  {
    id: 4,
    title: "Jim's Dungeon: Dungeon Crawler",
    date: "January – August 2020",
    description: "Team-led dungeon adventure game with procedural map generation, built across 6 Agile milestones.",
    stack: ["Java", "JavaFX", "Maven", "TestFX"],
    accomplishments: [
      "Led a team of 5 using Agile practices across 6 sprint milestones",
      "Implemented procedural generation for dynamic dungeon map construction",
      "Built multi-page application with configurable initial game state",
      "Wrote functional and unit tests using TestFX for reliability"
    ],
    github: "https://github.com/Abdul-RahmanSayed",
    live: null,
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderGlow: "group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group flex flex-col bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${project.borderGlow}`}
              data-testid={`project-card-${project.id}`}
            >
              {/* Thumbnail Header */}
              <div className={`h-32 md:h-40 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-end p-6 border-b border-border`}>
                <div className="relative z-10 w-full">
                  <div className="flex justify-between items-start w-full">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  <span className="text-sm font-mono text-muted-foreground mt-2 block">{project.date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-2.5 py-1 text-[11px] font-mono rounded border border-primary/20 text-primary bg-primary/5">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-8 text-sm text-muted-foreground flex-1">
                  {project.accomplishments.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-secondary mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex gap-4 mt-auto pt-4 border-t border-border">
                  <Button asChild variant="outline" size="sm" className="flex-1 hover:bg-accent hover:text-foreground">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" /> GitHub
                    </a>
                  </Button>
                  
                  <Button 
                    asChild={!!project.live} 
                    variant={project.live ? "default" : "secondary"} 
                    size="sm" 
                    className="flex-1"
                    disabled={!project.live}
                  >
                    {project.live ? (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                      </a>
                    ) : (
                      <span className="opacity-50 cursor-not-allowed">
                        <ExternalLink className="w-4 h-4 mr-2" /> No Demo
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
