import { createFileRoute, Link } from "@tanstack/react-router";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { allFinishes } from "@/lib/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — VibePKG" },
      {
        name: "description",
        content:
          "Folding cartons, rigid boxes, mylar bags, glass jars, pop-tops, dram jars, CR tins, labels and compliance — full cannabis packaging catalog.",
      },
      { property: "og:title", content: "Products — VibePKG" },
      {
        property: "og:description",
        content: "The full VibePKG cannabis packaging catalog.",
      },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      {/* INTRO */}
      <section className="container-vibe pt-20 md:pt-32 pb-16">
        <p className="eyebrow text-gold mb-6">The Catalog · 2026</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
          The full <span className="italic text-gold">range</span>,
          end to end.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Eight categories of premium cannabis packaging — every product
          available with custom print, finish, and compliance support. Tap any
          tile to explore.
        </p>
      </section>

      {/* GRID */}
      <section className="container-vibe pb-24">
        <CategoryGrid />
      </section>

      {/* FINISHES STRIP */}
      <section className="border-t border-border">
        <div className="container-vibe py-24 md:py-32">
          <p className="eyebrow text-gold mb-6">Available Finishes</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl mb-12">
            All finishes available across categories.
          </h2>
          <div className="hairline mb-10" />
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            {allFinishes.map((f) => (
              <span key={f} className="font-display text-2xl md:text-3xl text-muted-foreground hover:text-gold transition-colors cursor-default">
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
