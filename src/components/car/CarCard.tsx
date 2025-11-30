import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gauge, Fuel, Settings } from "lucide-react";

interface CarCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  year: string;
  mileage: string;
  transmission: string;
  fuelType: string;
}

const CarCard = ({ id, name, price, image, year, mileage, transmission, fuelType }: CarCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border hover-lift hover-glow transition-all duration-300">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full font-semibold">
          {year}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{name}</h3>
          <p className="text-3xl font-bold text-gradient">{price}</p>
        </div>

        <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
          <div className="flex flex-col items-center space-y-2">
            <Gauge className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">{mileage}</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Settings className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">{transmission}</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Fuel className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">{fuelType}</span>
          </div>
        </div>

        <Button asChild className="w-full group bg-gradient-to-r from-primary to-primary-glow">
          <Link to={`/projects/car/inventory/${id}`}>
            View Details
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CarCard;
