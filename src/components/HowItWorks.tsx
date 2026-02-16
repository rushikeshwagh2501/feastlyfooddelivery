const steps = [
  {
    icon: "📍",
    title: "Choose Location",
    description: "Enter your delivery address to find nearby restaurants",
  },
  {
    icon: "🍽️",
    title: "Pick Your Meal",
    description: "Browse menus and select your favorite dishes",
  },
  {
    icon: "💳",
    title: "Easy Payment",
    description: "Pay securely with your preferred payment method",
  },
  {
    icon: "🚀",
    title: "Fast Delivery",
    description: "Track your order in real-time until it arrives",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground text-center mb-2">
          How It Works
        </h2>
        <p className="text-muted-foreground text-center font-body mb-12">
          Getting your food delivered is simple
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-secondary rounded-2xl flex items-center justify-center text-4xl group-hover:bg-primary/10 transition-colors duration-300">
                {step.icon}
              </div>
              <div className="text-xs font-body font-bold text-primary mb-2">
                STEP {i + 1}
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
