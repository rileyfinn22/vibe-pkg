## VibePKG — Dark Luxury Marketing Site

A minimal, premium 4-page site for VibePKG, a cannabis packaging distributor. Matte black surfaces, cream/off-white type, subtle gold accents, oversized product photography, and generous whitespace — the look of a high-end brand catalog translated to web.

### Brand & Design Direction
- **Palette**: matte black (#0a0a0a) backgrounds, off-white (#f5f1e8) text, soft gold/champagne accent for hover states and small details, muted graphite for dividers.
- **Typography**: a refined modern serif for headlines (display), clean geometric sans for body and UI. Tight tracking on large display, generous line-height on body.
- **Motion**: restrained — subtle fades and slow image reveals on scroll, no flashy animation.
- **Imagery**: pulled from your catalog (jars, mylar pouches, tubes, boxes, tins). I'll extract and optimize the relevant product photos from the PDF and use them throughout.
- **Layout**: wide gutters, asymmetric editorial grids, large hero imagery, plenty of black space.

### Pages

**1. Home (`/`)**
- Full-bleed hero with "Premium Packaging for the Cannabis Industry" + tagline, large product hero image, primary CTA "Get in Touch".
- Category teaser strip (8 categories with icon/photo + label, links into Products).
- Brand value statement: short paragraph on Vibe's positioning.
- Selected finishes preview (Spot UV, Foil, Emboss, Soft Touch, Metallic, Holographic) as a tactile gallery.
- Closing CTA band → Contact.

**2. Products (`/products`)**
- A single elegantly long page covering all 8 catalog categories, each as its own visual section:
  1. Folding Cartons, Displays & POP
  2. Custom & Child-Resistant Boxes (Rigid, Magnetic, Drawer, Sleeve+Tray, Lid+Base, Hinged, CR Paperboard, CR Rigid)
  3. Mylar Bags & CR Zipper Bags (1g / 3.5g / 1oz / Flat / Die-Cut / CR Zipper / Slide-Open)
  4. Pop-Top Tubes & Dram Jars (with sizes from catalog)
  5. Glass Jars & Tubes (1oz–18oz, custom cap finishes, pre-roll & concentrate)
  6. Labels & Label Finishes (UV Coating, Soft Touch, Metallic, Foil Stamping, Raised UV, Emboss)
  7. CR Tins & Tin Plate (Round, Square, Rectangular hinged, Tin Tube, Wide Squat, Window)
  8. Compliance Labels (THC warning, State, COA, Ingredient, Tamper-Evident, Serialization, CR Cert, Universal Cannabis Symbol)
- Each section: large lead image, short description, grid of product variants with names and key specs from the catalog. A persistent side / top anchor nav lets visitors jump between categories.
- Strip near the bottom listing all available finishes (Spot UV, Foil, Emboss, Soft Touch, Window Die-Cut, Metallic, Holographic, Kraft, Grit Touch).

**3. Why VibePKG (`/why-vibepkg`)**
- Editorial intro on the brand's promise.
- Seven-pillar grid with refined iconography:
  - Free Design Services
  - 500 to 5,000,000+ Units
  - Made in USA & Overseas
  - Fast Turnaround / Rush Available
  - Compliance & CR Support
  - Fulfillment & Warehousing
  - Financing Terms Available
- Quote-style callout, then CTA into Contact.

**4. Contact (`/contact`)**
- Clean contact card — no submission form, per your direction.
- Phone: 801.875.8581
- Email: hello@vibepkg.com
- Social: @vibepkg
- Optional address block (placeholder until you provide).
- Big "Request a Custom Quote" headline with a `mailto:` button and a `tel:` button.
- Short note: "Our team responds within one business day."

### Global Elements
- Slim sticky header: VibePKG wordmark left; nav (Products, Why VibePKG, Contact) right; subtle gold underline on active route.
- Footer: wordmark, contact line (phone / email / handle), copyright, links.
- Per-route SEO metadata (title, description, og:title, og:description) for shareable previews; og:image per route using the relevant hero photo.
- Responsive: mobile gets a slide-in menu, single-column stacks, but keeps the same restrained editorial feel.

### Assets
- I'll extract product imagery from your catalog PDF and place the optimized files in `src/assets/`. If you later want refreshed photography or a logo SVG, drop them in and I'll swap.

### Out of scope for now
- No quote form, no e-commerce, no auth, no CMS — pure marketing site. Easy to add later.
