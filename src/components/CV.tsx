import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FallingPapers from "./FallingPapers";
import Certifications from "./Certifications";
import profileImg from "@/assets/mahmoud-profile.jpg";

const CV = () => {
  const handleDownloadPDF = () => {
    import('html2pdf.js').then((html2pdf) => {
      const element = document.getElementById('cv-content');
      const opt = {
        margin: [0.4, 0.4, 0.4, 0.4] as [number, number, number, number],
        filename: 'Mahmoud_Mousa_Mohamed_CV.pdf',
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          letterRendering: true
        },
        jsPDF: { 
          unit: 'in', 
          format: 'a4', 
          orientation: 'portrait' as const
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };
      html2pdf.default().set(opt).from(element).save();
    });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Falling Papers - Darker version for white background */}
      <div className="absolute inset-0 pointer-events-none print:hidden">
        <FallingPapers isDarkBg={false} />
      </div>
      
      <Header />
      <div className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Download Button */}
          <div className="flex justify-end mb-6 print:hidden">
            <Button 
              onClick={handleDownloadPDF}
              className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white transition-all shadow-lg hover:shadow-xl"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download as PDF
            </Button>
          </div>

          {/* CV Content */}
          <div 
            id="cv-content" 
            className="bg-white rounded-xl shadow-2xl overflow-hidden"
            style={{
              maxWidth: '210mm',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              color: '#1a1a1a'
            }}
          >
            
            {/* Header Section */}
            <div 
              className="p-8"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white'
              }}
            >
              <div className="flex items-center gap-6">
                <img 
                  src={profileImg} 
                  alt="Mahmoud Mousa Mohamed" 
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl"
                  style={{ flexShrink: 0 }}
                />
                <div className="flex-1">
                  <h1 className="text-4xl font-bold mb-2" style={{ color: 'white' }}>
                    MAHMOUD MOUSA MOHAMED
                  </h1>
                  <p className="text-xl mb-3 font-semibold" style={{ color: 'rgba(255,255,255,0.95)' }}>
                    Junior Frontend Developer
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    <div className="flex items-center gap-2">
                      <Mail size={14} />
                      <a href="mailto:mahmoudmousa44@outlook.com" style={{ color: 'rgba(255,255,255,0.95)', textDecoration: 'underline', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.95)'}>
                        mahmoudmousa44@outlook.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={14} />
                      <a href="tel:+201554104272" style={{ color: 'rgba(255,255,255,0.95)', textDecoration: 'underline', cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.95)'}>
                        +20 155 410 4272
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>Egypt (Remote)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin size={14} />
                      <a href="https://www.linkedin.com/in/mahmoud-mousa2" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.95)', textDecoration: 'underline', cursor: 'pointer', transition: 'color 0.2s', display: 'block' }} onClick={(e) => { e.stopPropagation(); window.open('https://www.linkedin.com/in/mahmoud-mousa2', '_blank'); }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.95)'}>
                        linkedin.com/in/mahmoud-mousa2
                      </a>
                    </div>
                    <div className="flex items-center gap-2 md:col-span-2">
                      <Github size={14} />
                      <a href="https://github.com/MahmoudMousaSharaf" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.95)', textDecoration: 'underline', cursor: 'pointer', transition: 'color 0.2s', display: 'block' }} onClick={(e) => { e.stopPropagation(); window.open('https://github.com/MahmoudMousaSharaf', '_blank'); }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.95)'}>
                        github.com/MahmoudMousaSharaf
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Professional Summary */}
              <section className="mb-6">
                <h2 
                  className="text-2xl font-bold mb-3 pb-2 border-b-2"
                  style={{ color: '#667eea', borderColor: '#667eea' }}
                >
                  PROFESSIONAL SUMMARY
                </h2>
                <p style={{ color: '#4a4a4a', textAlign: 'justify', fontSize: '14px', lineHeight: '1.6' }}>
                  Self-taught Junior Frontend Developer with 3+ years of technical problem-solving experience, transitioning to full-time software development. Meta/Coursera Certified Front-End Developer specializing in React.js, JavaScript (ES6+), HTML5, CSS3, and responsive web design. Experienced in building user-friendly web applications, API integration, and version control (Git/GitHub). Strong communication and remote collaboration skills developed through customer support roles. Ready for immediate start in a fully remote Frontend Developer position.
                </p>
              </section>

              {/* Core Competencies */}
              <section className="mb-6">
                <h2 
                  className="text-2xl font-bold mb-3 pb-2 border-b-2"
                  style={{ color: '#667eea', borderColor: '#667eea' }}
                >
                  CORE COMPETENCIES
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-base mb-2" style={{ color: '#764ba2' }}>Frontend Technologies</h3>
                    <ul className="space-y-1" style={{ fontSize: '13px', color: '#4a4a4a' }}>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                        <span><strong>React.js</strong> - Components, Hooks, State Management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                        <span><strong>JavaScript ES6+</strong> - Async/Await, DOM Manipulation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                        <span><strong>HTML5 & CSS3</strong> - Flexbox, Grid, Responsive Design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                        <span><strong>Version Control</strong> - Git, GitHub</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                        <span><strong>API Integration</strong> - RESTful APIs, Fetch, Axios</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                        <span><strong>CSS Animations & 3D Transforms</strong> - Interactive Effects, Transitions, Modern UI</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-2" style={{ color: '#764ba2' }}>Professional Skills</h3>
                    <ul className="space-y-1" style={{ fontSize: '13px', color: '#4a4a4a' }}>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                        <span>Problem Solving & Debugging</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                        <span>Remote Collaboration & Communication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                        <span>Continuous Learning & Adaptability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                        <span>Agile Methodology Awareness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                        <span>Cross-functional Team Collaboration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                        <span>UI/UX Awareness & Modern Design Principles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Professional Experience */}
              <section className="mb-6">
                <h2 
                  className="text-2xl font-bold mb-3 pb-2 border-b-2"
                  style={{ color: '#667eea', borderColor: '#667eea' }}
                >
                  PROFESSIONAL EXPERIENCE
                </h2>
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: '#764ba2' }}>Customer Support & Technical Specialist</h3>
                      <p className="font-semibold" style={{ color: '#4a4a4a' }}>Teleperformance</p>
                    </div>
                    <span className="text-sm" style={{ color: '#666' }}>November 2022 - Present</span>
                  </div>
                  <ul className="space-y-1" style={{ fontSize: '13px', color: '#4a4a4a' }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                      <span>Delivered advanced technical troubleshooting support for international clients across Apple Care and Meta accounts, resolving complex technical issues efficiently</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                      <span>Consistently maintained high-performance metrics in a fast-paced remote environment, demonstrating reliability and time management skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                      <span>Developed strong communication, problem-solving, and analytical abilities directly applicable to collaborative software development teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                      <span>Provided technical support for two years in Apple Care, showcasing dedication to customer satisfaction and technical excellence</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Continuous Learning & Development */}
              <section className="mb-6">
                <h2 
                  className="text-2xl font-bold mb-3 pb-2 border-b-2"
                  style={{ color: '#667eea', borderColor: '#667eea' }}
                >
                  CONTINUOUS LEARNING & DEVELOPMENT
                </h2>
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: '#764ba2' }}>Self-Paced Professional Development</h3>
                    </div>
                    <span className="text-sm" style={{ color: '#666' }}>2023 - Present</span>
                  </div>
                  <ul className="space-y-1" style={{ fontSize: '13px', color: '#4a4a4a' }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                      <span>Actively learning frontend development through Coursera (Meta Certification), freeCodeCamp, and developer communities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                      <span>Built production-ready projects using React.js, JavaScript (ES6+), and modern CSS frameworks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                      <span>Explored advanced topics: CSS 3D transforms, animations, and interactive web graphics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                      <span>Following industry best practices including clean code, responsive design, and Git version control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                      <span>Completed 50+ hours of hands-on coding and project-based learning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                      <span>Status: Ready for career transition to full-time Frontend Developer role</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Projects */}
              <section className="mb-6">
                <h2 
                  className="text-2xl font-bold mb-3 pb-2 border-b-2"
                  style={{ color: '#667eea', borderColor: '#667eea' }}
                >
                  FEATURED PROJECTS
                </h2>
                
                {/* Project 1 */}
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold" style={{ color: '#764ba2' }}>Time Piece E-Commerce Website</h3>
                    <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f0f0', color: '#667eea' }}>
                      React • Redux • Tailwind CSS
                    </span>
                  </div>
                  <ul className="space-y-1 mb-2" style={{ fontSize: '13px', color: '#4a4a4a' }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                      <span>Built a fully responsive e-commerce interface with dynamic product listing and shopping cart functionality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                      <span>Integrated RESTful APIs to fetch and display dynamic product data in real-time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                      <span>Implemented Redux state management for seamless user experience and efficient data flow</span>
                    </li>
                  </ul>
                  <p className="text-xs" style={{ color: '#667eea' }}>Live Demo: <a href="https://692993be11bb970008f0141c--my-watch-website.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', cursor: 'pointer', color: '#667eea' }}>my-watch-website.netlify.app</a> | GitHub: <a href="https://github.com/MahmoudMousaSharaf/My-Watch-Website" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', cursor: 'pointer', color: '#667eea' }}>github.com/MahmoudMousaSharaf/My-Watch-Website</a></p>
                </div>

                {/* Project 2 */}
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold" style={{ color: '#764ba2' }}>Automotive Car Website</h3>
                    <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f0f0', color: '#667eea' }}>
                      React • API Integration • CSS3
                    </span>
                  </div>
                  <ul className="space-y-1 mb-2" style={{ fontSize: '13px', color: '#4a4a4a' }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                      <span>Developed a comprehensive automotive website with real-time data integration using external APIs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                      <span>Designed a mobile-first responsive layout ensuring optimal user experience across all devices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                      <span>Implemented modern CSS3 features including Flexbox and Grid for flexible, maintainable layouts</span>
                    </li>
                  </ul>
                  <p className="text-xs" style={{ color: '#667eea' }}>Live Demo: <a href="https://69299467bbe76a000884caad--steady-licorice-fa44d8.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', cursor: 'pointer' }}>steady-licorice-fa44d8.netlify.app</a> | GitHub: github.com/MahmoudMousaSharaf/Cars-Website</p>
                </div>
              </section>

              {/* Education & Certifications */}
              <section className="mb-6">
                <h2 
                  className="text-2xl font-bold mb-3 pb-2 border-b-2"
                  style={{ color: '#667eea', borderColor: '#667eea' }}
                >
                  EDUCATION & CERTIFICATIONS
                </h2>
                
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: '#764ba2' }}>Meta Front-End Developer Professional Certificate</h3>
                      <p className="font-semibold text-sm" style={{ color: '#4a4a4a' }}>Coursera - Meta</p>
                    </div>
                    <span className="text-sm" style={{ color: '#666' }}>2023</span>
                  </div>
                  <ul className="space-y-1" style={{ fontSize: '13px', color: '#4a4a4a' }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                      <span>Comprehensive training in React, JavaScript, HTML5, CSS3, and UI/UX principles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#667eea', marginTop: '3px' }}>•</span>
                      <span>Completed capstone projects demonstrating full frontend development proficiency</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: '#764ba2' }}>Bachelor of Commerce</h3>
                      <p className="font-semibold text-sm" style={{ color: '#4a4a4a' }}>Faculty of Commerce, Egypt</p>
                    </div>
                    <span className="text-sm" style={{ color: '#666' }}>2021</span>
                  </div>
                  <p className="text-sm mt-1" style={{ color: '#4a4a4a' }}>Grade: Good</p>
                </div>
              </section>

              {/* Professional Certifications */}
              <section className="mb-6">
                <h2 
                  className="text-2xl font-bold mb-3 pb-2 border-b-2"
                  style={{ color: '#667eea', borderColor: '#667eea' }}
                >
                  PROFESSIONAL CERTIFICATIONS
                </h2>
                <Certifications variant="list" />
              </section>

              {/* Technical Skills */}
              <section>
                <h2 
                  className="text-2xl font-bold mb-3 pb-2 border-b-2"
                  style={{ color: '#667eea', borderColor: '#667eea' }}
                >
                  TECHNICAL SKILLS
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-base mb-2" style={{ color: '#764ba2' }}>Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript ES6+", "HTML5", "CSS3", "TypeScript"].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ backgroundColor: '#f0f0f0', color: '#667eea' }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-2" style={{ color: '#764ba2' }}>Frameworks & Libraries</h3>
                    <div className="flex flex-wrap gap-2">
                      {["React.js", "Redux", "Bootstrap", "Tailwind CSS"].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ backgroundColor: '#f0f0f0', color: '#667eea' }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-2" style={{ color: '#764ba2' }}>Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "GitHub", "VS Code", "NPM", "Chrome DevTools", "REST APIs"].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ backgroundColor: '#f0f0f0', color: '#667eea' }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-2" style={{ color: '#764ba2' }}>Languages Spoken</h3>
                    <div className="space-y-1 text-sm" style={{ color: '#4a4a4a' }}>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Arabic</span>
                        <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f0f0', color: '#667eea' }}>Native</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">English</span>
                        <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f0f0', color: '#667eea' }}>C1 - Advanced</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* 3D Interactive Technical Skills Section - Professional */}
          <div className="mt-20 relative z-10">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient">Professional</span> Technical Skills
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
              <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto">
                Core competencies and technical expertise in modern frontend development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: "React.js", 
                  level: "Advanced",
                  description: "Components, Hooks, State Management (useState, useContext, useReducer), Performance Optimization, Component Lifecycle" 
                },
                { 
                  title: "JavaScript ES6+", 
                  level: "Advanced",
                  description: "Async/Await, Promise handling, DOM Manipulation, Event Handling, Module Systems, Functional Programming" 
                },
                { 
                  title: "TypeScript", 
                  level: "Intermediate",
                  description: "Type Safety, Interfaces, Generics, Enums, Type Guards, Advanced typing patterns for maintainable code" 
                },
                { 
                  title: "CSS3 & HTML5", 
                  level: "Advanced",
                  description: "Flexbox, CSS Grid, Responsive Design, Media Queries, CSS Animations, Semantic HTML, Accessibility (A11y)" 
                },
                { 
                  title: "REST APIs & Integration", 
                  level: "Advanced",
                  description: "RESTful API design, Fetch API, Axios, API authentication, error handling, data transformation and caching" 
                },
                { 
                  title: "Build Tools & Version Control", 
                  level: "Intermediate",
                  description: "Git/GitHub workflows, Vite, NPM, Code splitting, minification, CI/CD awareness, branch management" 
                },
              ].map((skill, index) => (
                <div
                  key={skill.title}
                  className="relative group"
                  style={{ perspective: '1000px' }}
                >
                  <div
                    className="bg-card border border-border rounded-xl p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-4 animate-fade-in-up card-float-3d relative h-full"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* 3D Rotating Border Effect */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'conic-gradient(from 0deg, hsl(262 83% 58%), hsl(217 91% 60%), hsl(262 83% 58%))',
                        animation: 'rotate-border-3d 4s linear infinite',
                        pointerEvents: 'none',
                      }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {skill.title}
                        </h3>
                        <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f0f0', color: '#667eea' }}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-4 group-hover:bg-primary/20 transition-colors">
                        <div 
                          className="h-full rounded-full transition-all duration-500" 
                          style={{ 
                            width: skill.level === 'Advanced' ? '85%' : '70%',
                            background: 'linear-gradient(90deg, hsl(262 83% 58%), hsl(217 91% 60%))'
                          }}
                        ></div>
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <style>{`
              @keyframes rotate-border-3d {
                0% {
                  filter: hue-rotate(0deg);
                }
                100% {
                  filter: hue-rotate(360deg);
                }
              }
              
              @keyframes card-float-3d {
                0%, 100% {
                  transform: translateY(0px) rotateX(0deg) rotateY(0deg);
                }
                50% {
                  transform: translateY(-15px) rotateX(5deg) rotateY(5deg);
                }
              }
              
              .card-float-3d {
                animation: card-float-3d 4s ease-in-out infinite;
              }
            `}</style>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CV;
