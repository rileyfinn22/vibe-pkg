import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/products" as const, label: "Products" },
  { to: "/why-vibepkg" as const, label: "Why VibePKG" },
  { to: "/contact" as const, label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-vibe flex h-16 md:h-20 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
          aria-label="Vibe Packaging — Home"
        >
          <Logo className="h-9 md:h-11" />
          <span className="hidden sm:inline eyebrow text-muted-foreground border-l border-border pl-3">
            Packaging
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="eyebrow text-muted-foreground hover:text-foreground transition-colors relative group"
              activeProps={{ className: "eyebrow text-foreground" }}
            >
              {l.label}
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        <a
          href="tel:8018758581"
          className="hidden md:inline eyebrow text-muted-foreground hover:text-gold transition-colors"
        >
          801.875.8581
        </a>

        <button
          type="button"
          aria-label="Menu"
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container-vibe flex flex-col py-6 gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="eyebrow text-muted-foreground"
                activeProps={{ className: "eyebrow text-gold" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:8018758581" className="eyebrow text-muted-foreground">
              801.875.8581
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
