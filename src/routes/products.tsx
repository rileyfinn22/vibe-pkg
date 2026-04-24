import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import cartonsHero from "@/assets/products/cartons-hero.jpg";
import boxesHero from "@/assets/products/boxes-hero.jpg";
import mylarHero from "@/assets/products/mylar-hero.jpg";
import poptopsHero from "@/assets/products/poptops-hero.jpg";
import glassHero from "@/assets/products/glass-hero.jpg";
import labelsHero from "@/assets/products/labels-hero.jpg";
import tinsHero from "@/assets/products/tins-hero.jpg";
import complianceHero from "@/assets/products/compliance-hero.jpg";

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

type Section = {
  id: string;
  num: string;
  title: string;
  blurb: string;
  image: string;
  items: { name: string; spec?: string }[];
};

const sections: Section[] = [
  {
    id: "cartons",
    num: "01",
    title: "Folding Cartons, Displays & POP",
    blurb:
      "Sophisticated print finishes for retail-ready presentation. Custom shapes and counter displays available.",
    image: cartonsHero,
    items: [
      { name: "Spot UV Carton" },
      { name: "Foil Stamp Carton" },
      { name: "Emboss Carton" },
      { name: "Soft Touch Carton" },
      { name: "Window Die-Cut Carton" },
      { name: "Counter POP Display" },
      { name: "Custom Shape Carton" },
      { name: "Metallic Ink Finish" },
    ],
  },
  {
    id: "boxes",
    num: "02",
    title: "Custom Boxes & Child-Resistant Boxes",
    blurb:
      "Luxury rigid construction, magnetic closures, drawers and certified child-resistant systems.",
    image: boxesHero,
    items: [
      { name: "Rigid Paperboard Box", spec: "Luxury thick board" },
      { name: "Magnetic Closure Box" },
      { name: "Drawer / Slide Box", spec: "Inner cardboard" },
      { name: "Sleeve + Inner Tray", spec: "Spot UV" },
      { name: "Two-Piece Lid + Base", spec: "Spot UV finish" },
      { name: "Hinged Lid Box" },
      { name: "CR Paperboard Box", spec: "Child-resistant" },
      { name: "CR Rigid Box", spec: "Child-resistant" },
    ],
  },
  {
    id: "mylar",
    num: "03",
    title: "Mylar Bags & CR Zipper Bags",
    blurb:
      "Stand-up pouches in every flower size, plus child-resistant zipper and slide-open formats.",
    image: mylarHero,
    items: [
      { name: "Small Stand-Up Pouch", spec: "1g" },
      { name: "Medium Stand-Up Pouch", spec: "3.5g" },
      { name: "Large Stand-Up Pouch", spec: "1oz" },
      { name: "Flat Mylar Bag" },
      { name: "Custom Die-Cut Shape" },
      { name: "Child-Resistant Zipper Bag" },
      { name: "Slide-Open CR Bag" },
      { name: "Specialty Finishes", spec: "Foil · Holo · Kraft · Grit" },
    ],
  },
  {
    id: "tubes",
    num: "04",
    title: "Pop-Top Tubes & Dram Jars",
    blurb:
      "Pre-roll and flower storage in standard or custom Pantone. IML printing in matte, glossy, and metallic foil.",
    image: poptopsHero,
    items: [
      { name: "Pop-Top 78mm", spec: "0.7\" × 3.1\"" },
      { name: "Pop-Top 90mm", spec: "0.7\" × 3.5\"" },
      { name: "Pop-Top 98mm", spec: "0.7\" × 3.9\"" },
      { name: "Pop-Top 116mm", spec: "0.7\" × 4.6\"" },
      { name: "Dram Jar 13", spec: "1.3\" × 2.7\"" },
      { name: "Dram Jar 19", spec: "1.5\" × 2.8\"" },
      { name: "Dram Jar 30", spec: "1.9\" × 3.0\"" },
      { name: "Dram Jar 60 / 90", spec: "Black · White · Clear" },
    ],
  },
  {
    id: "glass",
    num: "05",
    title: "Glass Jars & Tubes",
    blurb:
      "Printed and unprinted jars from 1oz to 18oz, plus pre-roll tubes and concentrate jars in 5–9mL.",
    image: glassHero,
    items: [
      { name: "Glass Jar 1oz" },
      { name: "Glass Jar 2oz" },
      { name: "Glass Jar 4oz" },
      { name: "Glass Jar 6oz" },
      { name: "Glass Jar 8oz" },
      { name: "Glass Jar 12oz" },
      { name: "Glass Jar 18oz" },
      { name: "Concentrate Jars", spec: "5mL · 7mL · 9mL" },
      { name: "Pre-Roll Glass Tube" },
      { name: "Custom Cap Finishes", spec: "Gold · Matte · Rose · Copper" },
    ],
  },
  {
    id: "labels",
    num: "06",
    title: "Labels & Label Finishes",
    blurb:
      "Premium pressure-sensitive wrap-around labels on paper or synthetic stock. Digital and offset print.",
    image: labelsHero,
    items: [
      { name: "UV Coating", spec: "Full-coverage gloss" },
      { name: "Soft Touch", spec: "Velvety matte" },
      { name: "Metallic", spec: "Full metallic base" },
      { name: "Foil Stamping", spec: "Hot foil accents" },
      { name: "Raised UV / Spot UV", spec: "Tactile relief" },
      { name: "Emboss / Deboss", spec: "Dimensional text" },
    ],
  },
  {
    id: "tins",
    num: "07",
    title: "CR Tins & Tin Plate Packaging",
    blurb:
      "Child-resistant certified. Custom print and embossing. Round, square, hinged, slide-out and window styles.",
    image: tinsHero,
    items: [
      { name: "Round CR Tin", spec: "Various Ø & heights" },
      { name: "Square Tin", spec: "Standard & custom" },
      { name: "Rectangular Hinged Tin", spec: "Multiple sizes" },
      { name: "Tin Tube (Slide-Out)", spec: "Slim & wide" },
      { name: "Tin Plate Jar", spec: "Wide squat, large volume" },
      { name: "Window Tin", spec: "Clear panel" },
    ],
  },
  {
    id: "compliance",
    num: "08",
    title: "Compliance Labels",
    blurb:
      "State compliance, lab testing, serialization and CR certification — our team helps navigate state-specific requirements.",
    image: complianceHero,
    items: [
      { name: "THC Warning Label" },
      { name: "State Compliance Label" },
      { name: "Lab Testing / COA Label" },
      { name: "Ingredient / Nutrition Label" },
      { name: "Tamper-Evident Seal" },
      { name: "Serialization / Tracking" },
      { name: "CR Certification Badge" },
      { name: "Universal Cannabis Symbol" },
    ],
  },
];

const finishes = [
  "Spot UV", "Foil Stamp", "Emboss", "Soft Touch", "Window Die-Cut",
  "Metallic", "Holographic", "Kraft", "Grit Touch",
];

function Products() {
  const [active, setActive] = useState("cartons");

  useEffect(() => {
    const observers = sections.map((s) => {
      const el = document.getElementById(s.id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActive(s.id),
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

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
          available with custom print, finish, and compliance support.
        </p>
      </section>

      {/* ANCHOR NAV */}
      <div className="sticky top-16 md:top-20 z-30 bg-background/85 backdrop-blur-md border-y border-border">
        <div className="container-vibe overflow-x-auto">
          <nav className="flex gap-8 py-4 min-w-max">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`eyebrow whitespace-nowrap transition-colors ${
                  active === s.id
                    ? "text-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.num} · {s.title.split(" ")[0]}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* SECTIONS */}
      {sections.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`scroll-mt-32 ${idx % 2 === 1 ? "bg-surface/40" : ""}`}
        >
          <div className="container-vibe py-24 md:py-32 grid md:grid-cols-12 gap-12 lg:gap-16">
            <div className="md:col-span-5 lg:col-span-5">
              <div className="md:sticky md:top-40">
                <p className="eyebrow text-gold mb-4">Category {s.num}</p>
                <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
                  {s.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
                  {s.blurb}
                </p>
                <div className="aspect-[4/5] overflow-hidden bg-background">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-7 lg:col-span-7">
              <ul className="divide-y divide-border border-y border-border">
                {s.items.map((item, i) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-6 py-6 group"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="eyebrow text-muted-foreground w-8">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-2xl md:text-3xl group-hover:text-gold transition-colors">
                        {item.name}
                      </span>
                    </div>
                    {item.spec && (
                      <span className="text-sm text-muted-foreground text-right hidden sm:block">
                        {item.spec}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* FINISHES STRIP */}
      <section className="border-t border-border">
        <div className="container-vibe py-24 md:py-32">
          <p className="eyebrow text-gold mb-6">Available Finishes</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl mb-12">
            All finishes available across categories.
          </h2>
          <div className="hairline mb-10" />
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            {finishes.map((f) => (
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
