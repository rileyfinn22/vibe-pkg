import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { categories, getCategory } from "@/lib/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Products — VibePKG" }] };
    const { category } = loaderData;
    return {
      meta: [
        { title: `${category.title} — VibePKG` },
        { name: "description", content: category.blurb },
        { property: "og:title", content: `${category.title} — VibePKG` },
        { property: "og:description", content: category.blurb },
        { property: "og:image", content: category.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-vibe py-32 text-center">
      <p className="eyebrow text-gold mb-6">Not Found</p>
      <h1 className="font-display text-5xl mb-8">Category not found</h1>
      <Link to="/products" className="eyebrow border-b border-gold pb-1 hover:text-gold transition-colors">
        Back to all products →
      </Link>
    </div>
  ),
  component: CategoryDetail,
});

function CategoryDetail() {
  const { category } = Route.useLoaderData();
  const idx = categories.findIndex((c) => c.slug === category.slug);
  const next = categories[(idx + 1) % categories.length];

  return (
    <>
      {/* CRUMB */}
      <div className="container-vibe pt-20 md:pt-28 pb-6">
        <Link
          to="/products"
          className="eyebrow text-muted-foreground hover:text-gold transition-colors"
        >
          ← All Products
        </Link>
      </div>

      {/* HERO */}
      <section className="container-vibe pb-20 grid md:grid-cols-12 gap-10 lg:gap-16 items-end">
        <div className="md:col-span-7">
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
            {category.title}
          </h1>
        </div>
        <div className="md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden bg-surface">
            <img
              src={category.image}
              alt={category.title}
              className="h-full w-full object-cover brightness-[2] contrast-[1.15]"
            />
          </div>
        </div>
      </section>

      {/* DESCRIPTION + ITEMS */}
      <section className="border-t border-border">
        <div className="container-vibe py-24 md:py-32 grid md:grid-cols-12 gap-12 lg:gap-16">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-32">
              <p className="eyebrow text-gold mb-5">About this range</p>
              <p className="font-display text-2xl md:text-3xl leading-snug text-foreground">
                {category.longDescription}
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="eyebrow text-muted-foreground mb-8">
              {category.items.length + 1} options
            </p>
            <ul className="divide-y divide-border border-y border-border">
              {[...category.items, { name: "Custom" }].map((item, i) => (
                <li
                  key={item.name}
                  className="flex items-baseline gap-6 py-6 group"
                >
                  <span className="eyebrow text-muted-foreground w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
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

      {/* FINISHES */}
      {category.finishes && category.finishes.length > 0 && (
        <section className="border-t border-border bg-surface/40">
          <div className="container-vibe py-20 md:py-28">
            <p className="eyebrow text-gold mb-5">Available finishes</p>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {category.finishes.map((f: string) => (
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
      )}

      {/* CTA */}
      <section className="container-vibe py-24 md:py-32 text-center">
        <p className="eyebrow text-gold mb-6">Custom Quote</p>
        <h2 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl mx-auto">
          Talk to us about <span className="italic">{category.shortLabel.toLowerCase()}</span>.
        </h2>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
          <Link
            to="/contact"
            className="eyebrow border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors"
          >
            Request a Quote
          </Link>
          <Link
            to="/products/$slug"
            params={{ slug: next.slug }}
            className="eyebrow text-muted-foreground hover:text-gold transition-colors"
          >
            Next: {next.shortLabel} →
          </Link>
        </div>
      </section>

      {/* OTHER CATEGORIES */}
      <section className="border-t border-border">
        <div className="container-vibe py-20 md:py-28">
          <p className="eyebrow text-gold mb-10">Other categories</p>
          <CategoryGrid exclude={category.slug} />
        </div>
      </section>
    </>
  );
}
