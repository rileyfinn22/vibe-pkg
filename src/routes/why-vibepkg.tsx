import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Palette, Layers, Globe2, Zap, ShieldCheck, Warehouse, CreditCard,
} from "lucide-react";
import showcaseImage from "@/assets/products/showcase.jpg";

export const Route = createFileRoute("/why-vibepkg")({
  head: () => ({
    meta: [
      { title: "Why VibePKG — Premium Cannabis Packaging Partner" },
      {
        name: "description",
        content:
          "Free design, 500 to 5M+ units, US & overseas manufacturing, fast turnaround, CR compliance, fulfillment and financing.",
      },
      { property: "og:title", content: "Why VibePKG" },
      {
        property: "og:description",
        content: "Why brands choose VibePKG for cannabis packaging.",
      },
    ],
  }),
  component: WhyVibe,
});

const pillars = [
  {
    icon: Palette,
    title: "Free Design Services",
    body: "Professional artwork is included with every order. Our in-house designers translate your brand into premium, production-ready packaging.",
  },
  {
    icon: Layers,
    title: "500 to 5,000,000+ Units",
    body: "Run small launches or scale to mass distribution. We support boutique pilots and high-volume programs alike.",
  },
  {
    icon: Globe2,
    title: "Made in USA & Overseas",
    body: "Domestic manufacturing for speed and overseas options for cost. We tailor sourcing to your timeline and budget.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    body: "Stock items ship quickly and rush programs are available for custom orders when timelines are tight.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & CR Support",
    body: "Child-resistant certified solutions and state-specific labeling guidance — we help you stay compliant in every market.",
  },
  {
    icon: Warehouse,
    title: "Fulfillment & Warehousing",
    body: "Storage, kitting, and distribution from our facilities. We hold inventory so you can ship on demand.",
  },
  {
    icon: CreditCard,
    title: "Financing Terms Available",
    body: "Flexible payment options on qualifying programs help you scale without straining cash flow.",
  },
];

function WhyVibe() {
  return (
    <>
      {/* HERO */}
      <section className="container-vibe pt-20 md:pt-32 pb-20">
        <p className="eyebrow text-gold mb-6">Why VibePKG</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
          A packaging partner,<br />
          <span className="italic text-gold">not just a vendor.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          We exist to make cannabis brands look great on the shelf and ship on
          time, every time. Seven reasons brands stay with VibePKG.
        </p>
      </section>

      {/* PILLAR GRID */}
      <section className="border-t border-border">
        <div className="container-vibe">
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={`p-10 md:p-12 border-border ${
                    (i + 1) % 3 !== 0 ? "lg:border-r" : ""
                  } ${(i + 1) % 2 !== 0 ? "md:border-r lg:border-r" : ""} ${
                    i < pillars.length - 1 ? "border-b" : "border-b lg:border-b-0"
                  }`}
                >
                  <Icon className="text-gold mb-8" size={28} strokeWidth={1.25} />
                  <h3 className="font-display text-2xl md:text-3xl mb-4 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUOTE CALLOUT */}
      <section className="border-t border-border bg-surface/40">
        <div className="container-vibe py-24 md:py-36 max-w-4xl">
          <p className="eyebrow text-gold mb-8">In One Line</p>
          <p className="font-display text-3xl md:text-5xl leading-tight">
            "Premium packaging, compliant by design, delivered at any volume —
            <span className="italic text-gold"> that is the VibePKG standard.</span>"
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={showcaseImage}
            alt="VibePKG product showcase"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/50" />
        </div>
        <div className="container-vibe relative z-10 py-32 md:py-44 text-center">
          <h2 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl mx-auto">
            Start your next launch with us.
          </h2>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
            <Link
              to="/contact"
              className="eyebrow border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              to="/products"
              className="eyebrow text-muted-foreground hover:text-gold transition-colors"
            >
              Browse Products →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
