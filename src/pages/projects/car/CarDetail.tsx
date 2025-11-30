import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CarNavigation from "@/components/car/CarNavigation";
import CarFooter from "@/components/car/CarFooter";
import CarCard from "@/components/car/CarCard";
import { ArrowLeft, Gauge, Fuel, Settings, Calendar, Check } from "lucide-react";

const CarDetail = () => {
  const { id } = useParams();

  // Mock car data - in real app, this would fetch from API based on ID
  const car = {
    id: id || "1",
    name: "Executive Sedan Elite",
    price: "$89,999",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&h=800&fit=crop",
    year: "2024",
    mileage: "2,500 mi",
    transmission: "Auto",
    fuelType: "Hybrid",
    description: "Experience luxury and performance in perfect harmony. This Executive Sedan Elite combines cutting-edge technology with timeless elegance, featuring a powerful hybrid powertrain, premium leather interior, and advanced safety systems.",
    specs: {
      engine: "3.5L V6 Hybrid",
      horsepower: "354 hp",
      torque: "350 lb-ft",
      acceleration: "5.4 seconds (0-60 mph)",
      topSpeed: "155 mph (limited)",
      fuelEconomy: "36 MPG combined"
    },
    features: [
      "Premium leather seats with heating and ventilation",
      "Panoramic sunroof",
      "Advanced driver assistance systems",
      "360-degree camera system",
      "Premium sound system",
      "Wireless charging"
    ]
  };

  const similarCars = [
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
    }
  ];

  return (
    <div className="min-h-screen">
      <CarNavigation />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            to="/projects/car/inventory"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8 animate-fade-in"
          >
            <ArrowLeft size={20} />
            Back to Inventory
          </Link>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden mb-8 animate-fade-in">
            <img src={car.image} alt={car.name} className="w-full h-[400px] md:h-[600px] object-cover" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="animate-fade-in">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">{car.name}</h1>
                    <p className="text-3xl font-bold text-gradient">{car.price}</p>
                  </div>
                  <div className="bg-primary/10 px-4 py-2 rounded-full">
                    <span className="text-primary font-semibold">{car.year}</span>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">{car.description}</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 animate-fade-in" style={{animationDelay: "0.1s"}}>
                <div className="bg-card p-6 rounded-xl border border-border text-center">
                  <Gauge className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Mileage</p>
                  <p className="font-semibold">{car.mileage}</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border text-center">
                  <Settings className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Transmission</p>
                  <p className="font-semibold">{car.transmission}</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border text-center">
                  <Fuel className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Fuel Type</p>
                  <p className="font-semibold">{car.fuelType}</p>
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-card p-8 rounded-2xl border border-border animate-fade-in" style={{animationDelay: "0.2s"}}>
                <h2 className="text-2xl font-bold mb-6">Specifications</h2>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(car.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-card p-8 rounded-2xl border border-border animate-fade-in" style={{animationDelay: "0.3s"}}>
                <h2 className="text-2xl font-bold mb-6">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-card p-8 rounded-2xl border border-border sticky top-24 animate-fade-in" style={{animationDelay: "0.4s"}}>
                <h3 className="text-2xl font-bold mb-6">Interested?</h3>
                <div className="space-y-4">
                  <Button asChild size="lg" className="w-full bg-gradient-to-r from-primary to-primary-glow">
                    <Link to="/projects/car/contact">Schedule Test Drive</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full">
                    <Link to="/projects/car/contact">Contact Dealer</Link>
                  </Button>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Need financing?</p>
                  <Button variant="ghost" className="w-full">Calculate Payment</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Cars */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 animate-fade-in">Similar Vehicles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {similarCars.map((similarCar, index) => (
                <div key={similarCar.id} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CarCard {...similarCar} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CarFooter />
    </div>
  );
};

export default CarDetail;
