import { MapPin, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🍽️</span>
          <span className="font-display text-xl font-bold text-foreground">
            Feast<span className="text-primary">ly</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1 text-sm text-muted-foreground bg-muted rounded-full px-4 py-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Deliver to: <strong className="text-foreground">Current Location</strong></span>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="font-body">
            Sign In
          </Button>
          <Button size="sm" className="font-body gap-2 rounded-full">
            <ShoppingBag className="w-4 h-4" />
            Cart (0)
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
