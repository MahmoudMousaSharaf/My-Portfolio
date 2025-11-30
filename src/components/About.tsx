import { Code2, Palette, Rocket, Award } from "lucide-react";
import Certifications from "./Certifications";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Building responsive and performant user interfaces with modern frameworks",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive designs that provide excellent user experiences",
    },
    {
      icon: Rocket,
      title: "Web Animation",
      description: "Bringing interfaces to life with smooth, engaging animations and transitions",
    },
    {
      icon: Award,
      title: "Best Practices",
      description: "Writing clean, accessible, and maintainable code following industry standards",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background animation effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-80 h-80 bg-primary/10 rounded-full blur-3xl -top-40 -right-40 animate-float" />
        <div className="absolute w-80 h-80 bg-accent/10 rounded-full blur-3xl -bottom-40 -left-40 animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a passionate frontend developer dedicated to crafting beautiful, responsive, and 
                user-friendly web interfaces. My focus is on creating seamless digital experiences 
                that combine stunning visual design with exceptional usability.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                With expertise in modern frontend technologies and frameworks, I specialize in 
                building pixel-perfect, performant web applications. I love transforming creative 
                designs into interactive experiences that users enjoy.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest CSS techniques, 
                experimenting with new JavaScript frameworks, and staying current with 
                design trends and web standards.
              </p>
            </div>

            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <h3 className="text-2xl font-semibold text-gradient mb-3">Frontend Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "SASS", "Responsive Design"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <h3 className="text-2xl font-semibold text-gradient mb-3">What I Do</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Responsive Web Design
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Interactive UI Components
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    CSS Animations & Effects
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Frontend Performance Optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3D Skills Showcase Section */}
          <div className="mb-20">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-gradient">3D Interactive</span> Skills
              </h3>
              <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>

            <style>{`
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
              
              @keyframes rotate-border-3d {
                0% {
                  filter: hue-rotate(0deg);
                }
                100% {
                  filter: hue-rotate(360deg);
                }
              }
            `}</style>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="relative group"
                  style={{ perspective: '1000px' }}
                >
                  <div
                    className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-xl hover:border-primary/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-4 animate-fade-in-up card-float-3d group relative"
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
                    
                    {/* Floating Icon with Enhanced Shadow */}
                    <div 
                      className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 relative z-10 group-hover:bg-primary/20 transition-colors group-hover:shadow-lg group-hover:shadow-primary/50" 
                      style={{ animation: 'float 4s ease-in-out infinite', animationDelay: `${index * 0.2}s` }}
                    >
                      <skill.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 relative z-10 group-hover:text-primary transition-colors">{skill.title}</h3>
                    <p className="text-sm text-foreground/70 relative z-10">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Certifications Section */}
        <div className="mt-32">
          <Certifications variant="cards" />
        </div>
      </div>
    </section>
  );
};

export default About;
