import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, name, category, price, image }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="bg-card overflow-hidden transition-transform hover:scale-105">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform group-hover:scale-110"
          />
        </div>
        <div className="p-4">
          <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">
            {category}
          </p>
          <h3 className="font-bold mb-2">{name}</h3>
          <p className="text-lg font-bold">${price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
