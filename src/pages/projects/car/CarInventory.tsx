import { useState } from "react";
import CarNavigation from "@/components/car/CarNavigation";
import CarFooter from "@/components/car/CarFooter";
import CarCard from "@/components/car/CarCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const CarInventory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const allCars = [
    {
      id: "1",
      name: "Executive Sedan Elite",
      price: "$89,999",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop",
      year: "2024",
      mileage: "2,500 mi",
      transmission: "Auto",
      fuelType: "Hybrid",
      type: "sedan"
    },
    {
      id: "2",
      name: "Performance Coupe GT",
      price: "$124,999",
      image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&h=600&fit=crop",
      year: "2024",
      mileage: "1,200 mi",
      transmission: "Manual",
      fuelType: "Gasoline",
      type: "sports"
    },
    {
      id: "3",
      name: "Luxury SUV Premium",
      price: "$95,999",
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop",
      year: "2024",
      mileage: "3,800 mi",
      transmission: "Auto",
      fuelType: "Electric",
      type: "suv"
    },
    {
      id: "4",
      name: "Convertible Roadster",
      price: "$110,999",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
      year: "2024",
      mileage: "1,850 mi",
      transmission: "Auto",
      fuelType: "Gasoline",
      type: "convertible"
    },
    {
      id: "5",
      name: "Sport Sedan Pro",
      price: "$79,999",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop",
      year: "2023",
      mileage: "8,500 mi",
      transmission: "Auto",
      fuelType: "Gasoline",
      type: "sedan"
    },
    {
      id: "6",
      name: "GT Racing Edition",
      price: "$149,999",
      image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&h=600&fit=crop",
      year: "2024",
      mileage: "500 mi",
      transmission: "Manual",
      fuelType: "Gasoline",
      type: "sports"
    },
    {
      id: "7",
      name: "Family SUV Deluxe",
      price: "$72,999",
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop",
      year: "2023",
      mileage: "12,000 mi",
      transmission: "Auto",
      fuelType: "Hybrid",
      type: "suv"
    },
    {
      id: "8",
      name: "Luxury Convertible",
      price: "$98,999",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
      year: "2023",
      mileage: "5,200 mi",
      transmission: "Auto",
      fuelType: "Gasoline",
      type: "convertible"
    }
  ];

  const filteredCars = allCars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || car.type === typeFilter;
    
    let matchesPrice = true;
    if (priceFilter !== "all") {
      const price = parseInt(car.price.replace(/[$,]/g, ""));
      if (priceFilter === "under-80k") matchesPrice = price < 80000;
      else if (priceFilter === "80k-100k") matchesPrice = price >= 80000 && price < 100000;
      else if (priceFilter === "100k-150k") matchesPrice = price >= 100000 && price < 150000;
      else if (priceFilter === "over-150k") matchesPrice = price >= 150000;
    }

    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="min-h-screen">
      <CarNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Inventory</h1>
            <p className="text-xl text-muted-foreground">Explore our premium collection of vehicles</p>
          </div>

          {/* Filters */}
          <div className="max-w-5xl mx-auto mb-12 animate-fade-in">
            <div className="bg-card p-6 rounded-2xl border border-border">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    placeholder="Search vehicles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Vehicle Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="sedan">Sedan</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                    <SelectItem value="convertible">Convertible</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={priceFilter} onValueChange={setPriceFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under-80k">Under $80k</SelectItem>
                    <SelectItem value="80k-100k">$80k - $100k</SelectItem>
                    <SelectItem value="100k-150k">$100k - $150k</SelectItem>
                    <SelectItem value="over-150k">Over $150k</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredCars.length}</span> vehicle{filteredCars.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCars.map((car, index) => (
              <div
                key={car.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CarCard {...car} />
              </div>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No vehicles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <CarFooter />
    </div>
  );
};

export default CarInventory;
