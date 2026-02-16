const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍽️</span>
              <span className="font-display text-xl font-bold text-primary-foreground">
                Feast<span className="text-primary">ly</span>
              </span>
            </div>
            <p className="text-sm font-body">
              Your favorite food, delivered fast to your doorstep.
            </p>
          </div>
          <div>
            <h4 className="font-body font-semibold text-primary-foreground mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-sm font-body">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body font-semibold text-primary-foreground mb-3 text-sm">Support</h4>
            <ul className="space-y-2 text-sm font-body">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body font-semibold text-primary-foreground mb-3 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm font-body">
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm font-body">
          © 2026 Feastly. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
