import CarNavigation from "@/components/car/CarNavigation";
import CarFooter from "@/components/car/CarFooter";
import { CheckCircle, Wrench, DollarSign, FileText, Shield, Clock } from "lucide-react";

const CarServices = () => {
  const services = [
    {
      icon: CheckCircle,
      title: "Vehicle Sales",
      description: "Browse our extensive inventory of premium pre-owned vehicles, each carefully inspected and certified to meet our high standards."
    },
    {
      icon: DollarSign,
      title: "Financing Options",
      description: "Flexible financing solutions tailored to your needs with competitive rates and quick approval process."
    },
    {
      icon: FileText,
      title: "Trade-In Services",
      description: "Get a fair market value for your current vehicle with our transparent trade-in assessment."
    },
    {
      icon: Shield,
      title: "Extended Warranties",
      description: "Protect your investment with comprehensive warranty coverage and peace of mind."
    },
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Professional service center with certified technicians for all your automotive needs."
    },
    {
      icon: Clock,
      title: "Test Drives",
      description: "Experience your dream car firsthand with convenient test drive scheduling."
    }
  ];

  return (
    <div className="min-h-screen">
      <CarNavigation />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-muted-foreground">Comprehensive automotive solutions for every need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-8 rounded-2xl border border-border hover-lift hover-glow transition-all duration-300 animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-primary/20 to-primary-glow/20 p-12 rounded-2xl text-center animate-fade-in" style={{animationDelay: "0.6s"}}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help?</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Our team is ready to assist you with any questions about our services
            </p>
            <a
              href="/projects/car/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-primary-glow text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>

      <CarFooter />
    </div>
  );
};

export default CarServices;
