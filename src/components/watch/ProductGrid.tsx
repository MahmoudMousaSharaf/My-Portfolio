import { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import watchProduct1 from '@/assets/watch-product-1.jpg';
import watchProduct2 from '@/assets/watch-product-2.jpg';
import watchProduct3 from '@/assets/watch-product-3.jpg';
import watchProduct4 from '@/assets/watch-product-4.jpg';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Luxury Swiss Watch",
    price: "$1,299.99",
    image: watchProduct1
  },
  {
    id: 2,
    name: "Smart Sport Watch",
    price: "$399.99",
    image: watchProduct2
  },
  {
    id: 3,
    name: "Classic Leather Band",
    price: "$899.99",
    image: watchProduct3
  },
  {
    id: 4,
    name: "Chronograph Sport",
    price: "$599.99",
    image: watchProduct4
  }
];

const ProductGrid = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light tracking-[3px] text-primary mb-4">Premium Watch Collection</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Heart icon */}
                <div className="absolute top-4 right-4">
                  <Heart className="w-6 h-6 text-white hover:text-coral transition-colors cursor-pointer" />
                </div>

                {/* Text reveal on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                    <p className="text-lg opacity-90">{product.price}</p>
                  </div>
                </div>

                {/* Add to Cart overlay */}
                {hoveredProduct === product.id && (
                  <div className="absolute inset-x-4 bottom-4">
                    <button className="w-full bg-white text-primary px-6 py-3 text-sm font-medium tracking-wide uppercase hover:bg-coral hover:text-white transition-colors flex items-center justify-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                )}
              </div>

              <div className="text-center">
                <h3 className="text-lg font-medium text-primary mb-2 group-hover:text-coral transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted text-lg font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
