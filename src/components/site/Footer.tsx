import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="container-vibe py-16 md:py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" aria-label="Vibe Packaging — Home" className="inline-flex items-center gap-3">
            <Logo className="h-12" />
            <span className="eyebrow text-muted-foreground border-l border-border pl-3">
              Packaging
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-muted-foreground leading-relaxed">
            Premium packaging built for the cannabis industry. From concept to
            compliance — at any scale.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-muted-foreground mb-5">Explore</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/products" className="hover:text-gold transition-colors">Products</Link></li>
            <li><Link to="/why-vibepkg" className="hover:text-gold transition-colors">Why VibePKG</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-muted-foreground mb-5">Get in touch</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:8018758581" className="hover:text-gold transition-colors">
                801.875.8581
              </a>
            </li>
            <li>
              <a href="mailto:hello@vibepkg.com" className="hover:text-gold transition-colors">
                hello@vibepkg.com
              </a>
            </li>
            <li className="text-muted-foreground">@vibepkg</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-vibe py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} VibePKG. All rights reserved.</p>
          <p className="eyebrow">Premium Cannabis Packaging</p>
        </div>
      </div>
    </footer>
  );
}
