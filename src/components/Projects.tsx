import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Luxury Watch E-Commerce",
      description: "Full-featured e-commerce platform for luxury timepieces with carousel hero, product grids, category navigation, and shopping cart functionality. Features elegant fashion-forward design with smooth animations.",
      tags: ["React", "TypeScript", "E-commerce", "Tailwind CSS", "Responsive"],
      gradient: "from-orange-400 via-coral-500 to-rose-500",
      liveDemo: "https://692993be11bb970008f0141c--my-watch-website.netlify.app/",
      sourceCode: "https://github.com/MahmoudMousaSharaf/My-Watch-Website",
    },
    {
      title: "Premium Car Dealership",
      description: "Professional automotive dealership platform featuring advanced filtering, detailed car specifications, interactive Mapbox integration, test drive scheduling, and financing calculator. Dark premium aesthetic with blue glow effects.",
      tags: ["React", "TypeScript", "Mapbox", "Filtering", "Automotive"],
      gradient: "from-blue-600 via-blue-500 to-cyan-400",
      liveDemo: "https://69299467bbe76a000884caad--steady-licorice-fa44d8.netlify.app/",
      sourceCode: "https://github.com/MahmoudMousaSharaf/Cars-Website",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -bottom-32 -right-32 animate-float" />
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl -top-32 -left-32 animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore some of my recent frontend projects showcasing expertise in UI/UX design, responsive layouts, and modern web technologies
            </p>
          </div>

          <style>{`
            @keyframes float-card {
              0%, 100% {
                transform: translateY(0px) rotateX(0deg) rotateY(0deg);
              }
              50% {
                transform: translateY(-20px) rotateX(8deg) rotateY(8deg);
              }
            }
            
            .float-card {
              animation: float-card 5s ease-in-out infinite;
            }

            @keyframes project-border-glow {
              0% {
                filter: drop-shadow(0 0 4px hsl(262 83% 58% / 0.3));
              }
              50% {
                filter: drop-shadow(0 0 12px hsl(262 83% 58% / 0.6));
              }
              100% {
                filter: drop-shadow(0 0 4px hsl(262 83% 58% / 0.3));
              }
            }

            .project-glow {
              animation: project-border-glow 3s ease-in-out infinite;
            }
          `}</style>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-6 animate-fade-in-up float-card project-glow"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Project gradient header with animation */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient} group-hover:brightness-110 transition-all duration-300`}></div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full group-hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <a 
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-rose-500/50 transition-all duration-300 transform hover:scale-110 hover:brightness-110"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a 
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary/50 text-primary rounded-lg font-medium hover:bg-primary/10 hover:border-primary transition-all duration-300 transform hover:scale-110"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <p className="text-foreground/60 mb-4">These projects showcase real-world applications built with modern technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
