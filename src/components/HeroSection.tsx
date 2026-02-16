import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Delicious food spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-xl animate-fade-in-up">
          <span className="inline-block bg-primary/20 text-primary-foreground text-sm font-body font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-primary/30">
            🔥 Free delivery on your first order
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Your Favorite Food,{" "}
            <span className="text-primary">Delivered</span> Fast
          </h1>
          <p className="text-lg text-primary-foreground/70 font-body mb-8 max-w-md">
            Order from the best local restaurants with easy, on-demand delivery.
          </p>

          {/* Search bar */}
          <div className="flex items-center bg-card rounded-full shadow-xl p-2 max-w-lg">
            <div className="flex items-center gap-2 flex-1 px-4">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for restaurants or dishes..."
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground font-body text-sm"
              />
            </div>
            <Button className="rounded-full px-6 font-body">
              Search
            </Button>
          </div>

          <div className="flex items-center gap-6 mt-8 text-primary-foreground/60 text-sm font-body">
            <span className="flex items-center gap-1">✅ No minimum order</span>
            <span className="flex items-center gap-1">⚡ 30 min delivery</span>
            <span className="flex items-center gap-1">💰 Best prices</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
