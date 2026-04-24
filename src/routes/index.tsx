import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/products/hero-display.jpg";
import showcaseImage from "@/assets/products/showcase.jpg";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { allFinishes } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VibePKG — Premium Packaging for Cannabis" },
      {
        name: "description",
        content:
          "Boxes, mylar, glass, tins, labels and compliance — premium cannabis packaging from 500 to 5,000,000+ units.",
      },
      { property: "og:title", content: "VibePKG — Premium Cannabis Packaging" },
      {
        property: "og:description",
        content: "Premium packaging for the cannabis industry. Any volume, any scale.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="VibePKG cannabis packaging collection"
            className="h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        </div>

        <div className="container-vibe relative z-10 pb-20 md:pb-32 pt-32">
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
            Premium packaging,<br />
            <span className="italic text-gold">crafted for cannabis.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            We cultivate partnerships, not shopping carts. From first concept to
            final pallet, VibePKG works alongside your brand to engineer
            packaging worth remembering - at every scale.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <a
              href="#products"
              className="group inline-flex items-center gap-3 eyebrow border border-foreground px-7 py-4 hover:bg-foreground hover:text-background transition-colors"
            >
              Explore Products
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
            <Link
              to="/contact"
              className="eyebrow text-muted-foreground hover:text-gold transition-colors border-b border-transparent hover:border-gold pb-1"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORY GRID — all 8 */}
      <section id="products" className="container-vibe py-24 md:py-32 scroll-mt-24">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow text-gold mb-5">The Range</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            A curated core,<br />
            <span className="italic text-muted-foreground">limitless beyond it.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl">
            These are our most-requested categories - but our capabilities run deeper.
            If you don't see what you need, just ask. We develop bespoke options
            for fully custom formats, materials, and structural design.
          </p>
        </div>

        <CategoryGrid />
      </section>

      {/* MANIFESTO */}
      <section className="border-y border-border bg-surface/40">
        <div className="container-vibe py-24 md:py-36 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <p className="eyebrow text-gold mb-6">Our Promise</p>
            <p className="font-display text-3xl md:text-5xl leading-tight">
              Every box, jar, and pouch is a <span className="italic">first impression</span> —
              we treat it with the care your brand deserves.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              VibePKG is a packaging distributor built for the modern cannabis
              brand. We pair domestic and overseas manufacturing with in-house
              design, compliance expertise, and fulfillment — so you ship
              confidently, on time, every time.
            </p>
            <p>
              Whether you need 500 units of a custom rigid box or five million
              pre-roll tubes, we deliver the same standard of craft.
            </p>
          </div>
        </div>
      </section>

      {/* FINISHES */}
      <section className="container-vibe py-24 md:py-32">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow text-gold mb-5">Finishes</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Tactile detail, expertly applied.
          </h2>
        </div>
        <div className="hairline mb-10" />
        <div className="flex flex-wrap gap-x-10 gap-y-6">
          {allFinishes.map((f) => (
            <span
              key={f}
              className="font-display text-2xl md:text-3xl text-muted-foreground hover:text-gold transition-colors cursor-default"
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* SHOWCASE + CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={showcaseImage}
            alt="VibePKG product showcase"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        </div>
        <div className="container-vibe relative z-10 py-32 md:py-48 text-center">
          <p className="eyebrow text-gold mb-6">Get Started</p>
          <h2 className="font-display text-5xl md:text-7xl leading-tight max-w-4xl mx-auto">
            Let's build something <span className="italic">unforgettable.</span>
          </h2>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
            <Link
              to="/contact"
              className="eyebrow border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href="tel:8018758581"
              className="eyebrow text-muted-foreground hover:text-gold transition-colors"
            >
              or call 801.875.8581
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
