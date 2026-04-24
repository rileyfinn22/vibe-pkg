import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/products/hero-display.jpg";
import showcaseImage from "@/assets/products/showcase.jpg";
import boxesImage from "@/assets/products/boxes-hero.jpg";
import mylarImage from "@/assets/products/mylar-hero.jpg";
import glassImage from "@/assets/products/glass-hero.jpg";
import tinsImage from "@/assets/products/tins-hero.jpg";
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

const featured = [
  { slug: "boxes" as const, label: "Custom Boxes", img: boxesImage },
  { slug: "mylar" as const, label: "Mylar Bags", img: mylarImage },
  { slug: "glass" as const, label: "Glass Jars", img: glassImage },
  { slug: "tins" as const, label: "CR Tins", img: tinsImage },
];

const stats = [
  { k: "500 – 5M+", v: "Units per run" },
  { k: "8", v: "Product categories" },
  { k: "USA & Overseas", v: "Manufacturing" },
  { k: "Free", v: "Design services" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="VibePKG cannabis packaging collection"
            className="h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        </div>

        <div className="container-vibe relative z-10 pb-24 md:pb-36 pt-32">
          <p className="eyebrow text-gold mb-6">Cannabis Packaging · Est. Vibe</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
            Premium packaging,<br />
            <span className="italic text-gold">crafted for cannabis.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            From luxury rigid boxes to child-resistant mylar, VibePKG distributes
            packaging at any scale — engineered for compliance, designed for the
            shelf.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <Link
              to="/products"
              className="group inline-flex items-center gap-3 eyebrow border border-foreground px-7 py-4 hover:bg-foreground hover:text-background transition-colors"
            >
              Explore Products
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/contact"
              className="eyebrow text-muted-foreground hover:text-gold transition-colors border-b border-transparent hover:border-gold pb-1"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO STATEMENT */}
      <section className="container-vibe py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-2">
            <p className="eyebrow text-gold">01 — Intro</p>
          </div>
          <div className="md:col-span-10">
            <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] max-w-5xl">
              VibePKG is a packaging partner for cannabis brands that
              refuse to compromise — on quality, on compliance,
              <span className="italic text-gold"> or on the shelf.</span>
            </p>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-border bg-surface/40">
        <div className="container-vibe py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0">
          {stats.map((s, i) => (
            <div
              key={s.k}
              className={`px-4 md:px-8 ${i !== 0 ? "md:border-l border-border" : ""}`}
            >
              <p className="font-display text-3xl md:text-5xl text-foreground leading-none">
                {s.k}
              </p>
              <p className="eyebrow text-muted-foreground mt-4">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED CATEGORIES — preview only, links to /products */}
      <section className="container-vibe py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-10 mb-16 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow text-gold mb-5">02 — What We Make</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              A few favorites.<br />
              <span className="italic text-muted-foreground">Eight categories in total.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:text-right">
            <Link
              to="/products"
              className="eyebrow border-b border-gold pb-1 hover:text-gold transition-colors"
            >
              See All Products →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((c) => (
            <Link
              key={c.slug}
              to="/products/$slug"
              params={{ slug: c.slug }}
              className="group relative aspect-[3/4] overflow-hidden bg-surface"
            >
              <img
                src={c.img}
                alt={c.label}
                className="absolute inset-0 h-full w-full object-cover opacity-65 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-xl md:text-2xl">{c.label}</p>
                <p className="eyebrow text-gold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  View →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MANIFESTO — image left, copy right */}
      <section className="border-t border-border">
        <div className="container-vibe py-24 md:py-36 grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="md:col-span-6">
            <div className="aspect-[4/5] overflow-hidden bg-surface">
              <img
                src={showcaseImage}
                alt="VibePKG showcase"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6">
            <p className="eyebrow text-gold mb-6">03 — Our Promise</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8">
              Every box, jar, and pouch is a <span className="italic">first impression.</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg max-w-md">
              <p>
                We pair domestic and overseas manufacturing with in-house design,
                compliance expertise, and fulfillment — so you ship confidently,
                on time, every time.
              </p>
              <p>
                Whether it's 500 units of a custom rigid box or five million
                pre-roll tubes, we deliver the same standard of craft.
              </p>
            </div>
            <div className="mt-10">
              <Link
                to="/why-vibepkg"
                className="eyebrow border-b border-gold pb-1 hover:text-gold transition-colors"
              >
                Why VibePKG →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINISHES */}
      <section className="border-t border-border bg-surface/40">
        <div className="container-vibe py-24 md:py-32">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow text-gold mb-5">04 — Finishes</p>
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
        </div>
      </section>

      {/* CTA */}
      <section className="container-vibe py-32 md:py-44 text-center">
        <p className="eyebrow text-gold mb-6">05 — Get Started</p>
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
      </section>
    </>
  );
}
