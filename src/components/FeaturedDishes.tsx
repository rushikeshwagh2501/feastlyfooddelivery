import { Star, Clock, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const dishes = [
  {
    name: "Margherita Pizza",
    restaurant: "Italiano's Kitchen",
    price: "$12.99",
    rating: 4.8,
    time: "25-30 min",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
    tag: "Bestseller",
  },
  {
    name: "Classic Cheeseburger",
    restaurant: "Burger Barn",
    price: "$9.49",
    rating: 4.6,
    time: "15-20 min",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    tag: "Popular",
  },
  {
    name: "Salmon Sushi Roll",
    restaurant: "Tokyo Bites",
    price: "$15.99",
    rating: 4.9,
    time: "30-35 min",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop",
    tag: "New",
  },
  {
    name: "Caesar Salad",
    restaurant: "Green Garden",
    price: "$8.99",
    rating: 4.5,
    time: "10-15 min",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
    tag: "Healthy",
  },
  {
    name: "Pad Thai",
    restaurant: "Thai Orchid",
    price: "$11.49",
    rating: 4.7,
    time: "20-25 min",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop",
    tag: "Spicy",
  },
  {
    name: "Tiramisu",
    restaurant: "Sweet Spot",
    price: "$7.99",
    rating: 4.8,
    time: "10 min",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    tag: "Dessert",
  },
];

const FeaturedDishes = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground text-center mb-2">
          Popular Near You
        </h2>
        <p className="text-muted-foreground text-center font-body mb-10">
          Top-rated dishes from nearby restaurants
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-body text-xs">
                  {dish.tag}
                </Badge>
                <button className="absolute top-3 right-3 bg-card/80 backdrop-blur-sm rounded-full p-2 hover:bg-card transition-colors">
                  <Heart className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-display font-bold text-foreground text-lg">
                    {dish.name}
                  </h3>
                  <span className="font-body font-bold text-primary text-lg">
                    {dish.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-body mb-3">
                  {dish.restaurant}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground font-body">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    {dish.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {dish.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
