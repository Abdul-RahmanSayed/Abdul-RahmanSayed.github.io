# Abdul-Rahman Sayed - Portfolio Website

## Overview
This is a personal portfolio website for Abdul-Rahman Sayed, a Computer Science student at Georgia Institute of Technology. The site showcases experience, technical skills, and resume information.

## Project Structure
- **index.html** - Home page with introduction and about section
- **experience.html** - Professional experience and work history
- **skills.html** - Technical skills with interactive carousel
- **resume.html** - Embedded PDF resume viewer
- **resources/** - Static assets
  - **css/** - Stylesheets for each page
  - **js/** - JavaScript for interactive features (skill carousel)
  - **images/** - Logo images and personal photos
  - **pdfs/** - Resume PDF files

## Technology Stack
- Pure HTML, CSS, and JavaScript (no frameworks)
- Python HTTP server for serving static files
- Responsive design with media queries

## Running the Project
The website is served using a Python HTTP server on port 5000:
```bash
python3 server.py
```

## Recent Changes
- **2025-11-07**: Skills Carousel Fix
  - Completely rewrote the skill carousel JavaScript logic in `resources/js/skillPage.js`
  - Fixed the confusing left/right navigation that was mentioned in the original TODO comment
  - Carousel now properly cycles through all 5 skills, displaying 4 at a time
  - Cleaner implementation with a sliding window approach
- **2025-11-07**: Resume and Experience Updates
  - Replaced resume with 2025 version (Abdul_Sayed_Resume_2025min_1762481377203.pdf)
  - Updated work experience section with current positions:
    - ProAutomated - Lead Field Service Engineer (February 2025 - Present)
    - Invisible Technologies - Advanced AI Trainer Software Developer (February 2024 - February 2025)
    - MessageGears - Software Development Lead Intern/Intern (May 2022 - August 2023)
    - Georgia Institute of Technology - CS 2340 Undergraduate TA (January 2023 - December 2023)
  - Installed LibreOffice for DOCX to PDF conversion
- **2025-11-07**: Initial Replit setup
  - Created Python server with cache control headers
  - Configured workflow for automatic serving
  - Added .gitignore for Python and Replit files

## Features
- Responsive navigation with dropdown menu
- Interactive skills carousel with left/right arrows
- Embedded PDF resume viewer
- LinkedIn integration
- Clean, professional design with consistent branding
