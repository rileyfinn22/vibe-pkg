import { Link } from "@tanstack/react-router";
import { categories } from "@/lib/products";

export function CategoryGrid({ exclude }: { exclude?: string }) {
  const list = exclude ? categories.filter((c) => c.slug !== exclude) : categories;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {list.map((c) => (
        <Link
          key={c.slug}
          to="/products/$slug"
          params={{ slug: c.slug }}
          className="group relative aspect-[3/4] overflow-hidden bg-surface"
        >
          <img
            src={c.image}
            alt={c.title}
            className="absolute inset-0 h-full w-full object-cover opacity-100 dark:opacity-65 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent dark:from-background dark:via-background/40 dark:to-transparent" />
          <div className="absolute top-5 left-6 eyebrow text-gold">{c.num}</div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="font-display text-xl md:text-2xl leading-tight">{c.shortLabel}</p>
            <p className="eyebrow text-gold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
              View →
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
