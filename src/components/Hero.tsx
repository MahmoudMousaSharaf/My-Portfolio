import profileImage from "@/assets/mahmoud-profile.jpg";
import FallingPapers from "./FallingPapers";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-dark relative overflow-hidden">
      {/* Falling Papers Background */}
      <FallingPapers isDarkBg={false} />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in-up">
          {/* Profile Image - 3D Floating Effect */}
          <div className="relative group perspective" style={{ perspective: "1000px" }}>
            {/* Floating container */}
            <div className="animate-float relative" style={{ animationDuration: "4s" }}>
              {/* Glow layers - multiple for depth effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-300 scale-150 -z-10"></div>
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-300 scale-125 -z-10" style={{ animationDelay: "0.5s" }}></div>
              
              {/* Profile image with shadow depth */}
              <div 
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl transform group-hover:scale-110 transition-all duration-300"
                style={{
                  boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4), 0 0 80px rgba(217, 70, 239, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
                }}
              >
                <img
                  src={profileImage}
                  alt="Mahmoud"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Subtle rotating ring effect */}
              <div 
                className="absolute inset-0 rounded-full border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  borderImage: "linear-gradient(135deg, hsl(262 83% 58%), hsl(217 91% 60%)) 1",
                  animation: "spin 8s linear infinite",
                }}
              ></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light">
              Hi, I'm <span className="text-gradient font-semibold">Mahmoud</span>
            </p>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Frontend Developer crafting beautiful, responsive web experiences with modern technologies
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
