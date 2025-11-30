import CarNavigation from "@/components/car/CarNavigation";
import CarFooter from "@/components/car/CarFooter";
import { CheckCircle, Shield, Award, Users } from "lucide-react";

const CarAbout = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "We believe in transparent pricing and honest dealings with every customer"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Only the finest vehicles that meet our rigorous standards make it to our showroom"
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority, from browsing to long after your purchase"
    }
  ];

  return (
    <div className="min-h-screen">
      <CarNavigation />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Elite Motors</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in finding the perfect luxury vehicle
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded with a passion for automotive excellence, Elite Motors has been serving discerning customers for over two decades. We specialize in premium vehicles that combine performance, luxury, and reliability.
              </p>
            </div>

            <div className="animate-fade-in" style={{animationDelay: "0.1s"}}>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide an exceptional car-buying experience by offering carefully curated vehicles, expert guidance, and unparalleled customer service. We believe that purchasing a car should be exciting, transparent, and stress-free.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-2xl border border-border animate-fade-in"
                    style={{animationDelay: `${0.2 + index * 0.1}s`}}
                  >
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-muted/30 p-8 rounded-2xl animate-fade-in" style={{animationDelay: "0.5s"}}>
              <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Certified pre-owned vehicles",
                  "Comprehensive vehicle inspections",
                  "Flexible financing options",
                  "Expert sales consultants",
                  "Trade-in services",
                  "After-sales support"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CarFooter />
    </div>
  );
};

export default CarAbout;
