import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CarNavigation from "@/components/car/CarNavigation";
import CarFooter from "@/components/car/CarFooter";
import CarCard from "@/components/car/CarCard";
import { ArrowRight, Shield, Award, Headphones, Star } from "lucide-react";

const CarIndex = () => {
  const featuredCars = [
    {
      id: "1",
      name: "Executive Sedan Elite",
      price: "$89,999",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop",
      year: "2024",
      mileage: "2,500 mi",
      transmission: "Auto",
      fuelType: "Hybrid"
    },
    {
      id: "2",
      name: "Performance Coupe GT",
      price: "$124,999",
      image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&h=600&fit=crop",
      year: "2024",
      mileage: "1,200 mi",
      transmission: "Manual",
      fuelType: "Gasoline"
    },
    {
      id: "3",
      name: "Luxury SUV Premium",
      price: "$95,999",
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop",
      year: "2024",
      mileage: "3,800 mi",
      transmission: "Auto",
      fuelType: "Electric"
    },
    {
      id: "4",
      name: "Convertible Roadster",
      price: "$110,999",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
      year: "2024",
      mileage: "1,850 mi",
      transmission: "Auto",
      fuelType: "Gasoline"
    }
  ];

  const services = [
    {
      icon: Shield,
      title: "Certified Pre-Owned",
      description: "Every vehicle undergoes rigorous inspection and certification process"
    },
    {
      icon: Award,
      title: "Premium Selection",
      description: "Handpicked luxury and performance vehicles from top manufacturers"
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Dedicated specialists to guide you through every step"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Executive",
      content: "Outstanding service and incredible selection. Found my dream car with ease!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Entrepreneur",
      content: "Professional team, transparent pricing, and exceptional after-sales support.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Doctor",
      content: "The financing options were flexible and the entire process was smooth.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <CarNavigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop"
            alt="Luxury Sports Car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Drive Your
              <span className="text-gradient"> Dreams</span> Today
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Experience automotive excellence with our curated collection of premium vehicles. Where luxury meets performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity group">
                <Link to="/projects/car/inventory">
                  Browse Inventory
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-muted">
                <Link to="/projects/car/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Elite Motors</h2>
            <p className="text-xl text-muted-foreground">Excellence in every aspect of your automotive journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-8 rounded-2xl border border-border hover-lift hover-glow transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-6 animate-glow-pulse">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Vehicles</h2>
            <p className="text-xl text-muted-foreground">Discover our premium selection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredCars.map((car, index) => (
              <div
                key={car.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CarCard {...car} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
              <Link to="/projects/car/inventory">
                View All Vehicles
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Real experiences from real customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover-lift transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed text-muted-foreground italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Find Your Perfect Car?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule a test drive or visit our showroom to experience luxury firsthand
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity">
              <Link to="/projects/car/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <CarFooter />
    </div>
  );
};

export default CarIndex;
