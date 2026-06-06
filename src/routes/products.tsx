import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { allFinishes, categories } from "@/lib/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — VibePKG" },
      {
        name: "description",
        content:
          "Folding cartons, rigid boxes, mylar bags, glass jars, pop-tops, dram jars, CR tins, labels and compliance — premium cannabis packaging.",
      },
      { property: "og:title", content: "Products — VibePKG" },
      {
        property: "og:description",
        content: "The complete VibePKG cannabis packaging lineup.",
      },
    ],
  }),
  component: Products,
});

function Products() {
  const [active, setActive] = useState(categories[0]?.slug ?? "cartons");

  useEffect(() => {
    const observers = categories.map((category) => {
      const el = document.getElementById(category.slug);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(category.slug);
          }
        },
        { rootMargin: "-38% 0px -52% 0px" },
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <>
      <section className="container-vibe pt-20 md:pt-32 pb-16">
        <p className="eyebrow text-gold mb-6">Products · 2026</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
          The full <span className="italic text-gold">range</span>, end to end.
        </h1>
      </section>

      <div className="sticky top-16 md:top-20 z-30 bg-background/85 backdrop-blur-md border-y border-border">
        <div className="container-vibe overflow-x-auto">
          <nav className="flex gap-8 py-4 min-w-max">
            {categories.map((category) => (
              <a
                key={category.slug}
                href={`#${category.slug}`}
                className={`eyebrow whitespace-nowrap transition-colors ${
                  active === category.slug
                    ? "text-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.shortLabel}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {categories.map((category, index) => (
        <section
          key={category.slug}
          id={category.slug}
          className={`scroll-mt-32 ${index % 2 === 1 ? "bg-surface/40" : ""}`}
        >
          <div className="container-vibe py-24 md:py-32 grid md:grid-cols-12 gap-12 lg:gap-16">
            <div className="md:col-span-5">
              <div className="md:sticky md:top-40">
                <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
                  {category.shortLabel}
                </h2>
                <div className="aspect-[4/5] overflow-hidden bg-background">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-cover brightness-[1.3]"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <ul className="divide-y divide-border border-y border-border">
                {[...category.items, { name: "Custom" }].map((item, itemIndex) => (
                  <li
                    key={item.name}
                    className="flex items-baseline gap-6 py-6 group"
                  >
                    <span className="eyebrow text-muted-foreground w-8 shrink-0">
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl md:text-3xl group-hover:text-gold transition-colors">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-border">
        <div className="container-vibe py-24 md:py-32">
          <p className="eyebrow text-gold mb-6">Available Finishes</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl mb-12">
            All finishes available across categories.
          </h2>
          <div className="hairline mb-10" />
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            {allFinishes.map((finish) => (
              <span
                key={finish}
                className="font-display text-2xl md:text-3xl text-muted-foreground hover:text-gold transition-colors cursor-default"
              >
                {finish}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-vibe py-24 md:py-32 text-center">
        <p className="eyebrow text-gold mb-6">Ready when you are</p>
        <h2 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl mx-auto">
          Tell us what you're building.
        </h2>
        <div className="mt-12">
          <Link
            to="/contact"
            className="eyebrow border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors inline-block"
          >
            Request a Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
