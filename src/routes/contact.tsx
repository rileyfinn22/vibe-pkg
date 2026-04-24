import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, AtSign, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact VibePKG — Request a Custom Quote" },
      {
        name: "description",
        content:
          "Talk to VibePKG about custom cannabis packaging. Call 801.875.8581 or email hello@vibepkg.com.",
      },
      { property: "og:title", content: "Contact VibePKG" },
      {
        property: "og:description",
        content: "Reach the VibePKG team to start a custom packaging quote.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="container-vibe pt-20 md:pt-32 pb-16">
        <p className="eyebrow text-gold mb-6">Contact</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
          Request a <span className="italic text-gold">custom quote.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Tell us about your product, volume, and timeline. Our team responds
          within one business day.
        </p>
      </section>

      {/* PRIMARY ACTIONS */}
      <section className="container-vibe pb-24">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <a
            href="mailto:hello@vibepkg.com?subject=VibePKG%20Quote%20Request"
            className="group block p-10 md:p-12 border border-border hover:border-gold transition-colors"
          >
            <Mail className="text-gold mb-8" size={28} strokeWidth={1.25} />
            <p className="eyebrow text-muted-foreground mb-3">Email</p>
            <p className="font-display text-3xl md:text-4xl group-hover:text-gold transition-colors break-all">
              hello@vibepkg.com
            </p>
            <p className="mt-6 eyebrow text-muted-foreground group-hover:text-gold transition-colors">
              Send a message →
            </p>
          </a>

          <a
            href="tel:8018758581"
            className="group block p-10 md:p-12 border border-border hover:border-gold transition-colors"
          >
            <Phone className="text-gold mb-8" size={28} strokeWidth={1.25} />
            <p className="eyebrow text-muted-foreground mb-3">Phone</p>
            <p className="font-display text-3xl md:text-4xl group-hover:text-gold transition-colors">
              801.875.8581
            </p>
            <p className="mt-6 eyebrow text-muted-foreground group-hover:text-gold transition-colors">
              Call our team →
            </p>
          </a>
        </div>
      </section>

      {/* DETAILS */}
      <section className="border-t border-border bg-surface/40">
        <div className="container-vibe py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="eyebrow text-gold mb-5">What to include</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Help us prepare a fast, accurate quote.
            </h2>
          </div>
          <div className="md:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {[
                ["Product type", "Boxes, mylar, glass, tins, labels, etc."],
                ["Volume", "Estimated quantity (we serve 500 – 5,000,000+ units)"],
                ["Finishes", "Spot UV, foil, emboss, soft touch, metallic, etc."],
                ["Compliance", "Child-resistant, state-specific labeling needs"],
                ["Timeline", "Target ship or launch date"],
                ["Artwork", "Logos or design files (optional — free design available)"],
              ].map(([k, v]) => (
                <li key={k} className="grid grid-cols-3 gap-6 py-5">
                  <span className="eyebrow text-muted-foreground">{k}</span>
                  <span className="col-span-2 text-base md:text-lg">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* META */}
      <section className="container-vibe py-24 md:py-32">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Clock className="text-gold mb-6" size={24} strokeWidth={1.25} />
            <p className="eyebrow text-muted-foreground mb-3">Hours</p>
            <p className="font-display text-2xl">Mon — Fri</p>
            <p className="text-muted-foreground mt-1">8:00 — 6:00 MT</p>
          </div>
          <div>
            <AtSign className="text-gold mb-6" size={24} strokeWidth={1.25} />
            <p className="eyebrow text-muted-foreground mb-3">Social</p>
            <p className="font-display text-2xl">@vibepkg</p>
            <p className="text-muted-foreground mt-1">Instagram</p>
          </div>
          <div>
            <Mail className="text-gold mb-6" size={24} strokeWidth={1.25} />
            <p className="eyebrow text-muted-foreground mb-3">Response</p>
            <p className="font-display text-2xl">Within 1 day</p>
            <p className="text-muted-foreground mt-1">Business days</p>
          </div>
        </div>
      </section>
    </>
  );
}
