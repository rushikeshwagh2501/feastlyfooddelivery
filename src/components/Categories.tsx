const categories = [
  { name: "Pizza", emoji: "🍕" },
  { name: "Burgers", emoji: "🍔" },
  { name: "Sushi", emoji: "🍣" },
  { name: "Salads", emoji: "🥗" },
  { name: "Desserts", emoji: "🍰" },
  { name: "Drinks", emoji: "🥤" },
  { name: "Indian", emoji: "🍛" },
  { name: "Chinese", emoji: "🥡" },
];

const Categories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground text-center mb-2">
          Explore by Category
        </h2>
        <p className="text-muted-foreground text-center font-body mb-10">
          Whatever you're craving, we've got it
        </p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {cat.emoji}
              </span>
              <span className="text-xs font-body font-medium text-muted-foreground group-hover:text-primary transition-colors">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
