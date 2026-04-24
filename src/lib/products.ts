import cartonsHero from "@/assets/products/cartons-hero.jpg";
import boxesHero from "@/assets/products/boxes-hero.jpg";
import mylarHero from "@/assets/products/mylar-hero.jpg";
import poptopsHero from "@/assets/products/poptops-hero.jpg";
import glassHero from "@/assets/products/glass-hero.jpg";
import labelsHero from "@/assets/products/labels-hero.jpg";
import tinsHero from "@/assets/products/tins-hero.jpg";


export type Category = {
  slug: "cartons" | "boxes" | "mylar" | "tubes" | "glass" | "labels" | "tins";
  num: string;
  shortLabel: string;
  title: string;
  tagline: string;
  blurb: string;
  longDescription: string;
  image: string;
  items: { name: string; spec?: string }[];
  finishes?: string[];
};

export const categories: Category[] = [
  {
    slug: "cartons",
    num: "01",
    shortLabel: "Folding Cartons",
    title: "Folding Cartons, Displays & POP",
    tagline: "Retail-ready print finishes",
    blurb:
      "Sophisticated print finishes for retail-ready presentation. Custom shapes and counter displays available.",
    longDescription:
      "Folding cartons are the workhorse of retail packaging — light, recyclable, and capable of carrying every premium print finish in our arsenal. Pair spot UV with foil stamping for high-contrast brand marks, soft touch coatings for an unmistakable hand feel, or window die-cuts to let the product speak for itself. Counter POP and custom shapes available for in-store activations.",
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
    finishes: ["Spot UV", "Foil Stamp", "Emboss", "Soft Touch", "Metallic", "Window Die-Cut"],
  },
  {
    slug: "boxes",
    num: "02",
    shortLabel: "Custom Boxes",
    title: "Custom Boxes & Child-Resistant Boxes",
    tagline: "Luxury rigid construction",
    blurb:
      "Luxury rigid construction, magnetic closures, drawers and certified child-resistant systems.",
    longDescription:
      "When the unboxing matters as much as the product, rigid construction is the answer. Choose from luxury thick-board rigid boxes, magnetic closures, drawer/slide formats, sleeve and tray systems, or two-piece lid and base. All available with certified child-resistant mechanisms — paperboard or rigid — for compliant cannabis programs in every market.",
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
    finishes: ["Spot UV", "Foil Stamp", "Emboss", "Soft Touch", "Metallic"],
  },
  {
    slug: "mylar",
    num: "03",
    shortLabel: "Mylar Bags",
    title: "Mylar Bags & CR Zipper Bags",
    tagline: "Stand-up pouches, every size",
    blurb:
      "Stand-up pouches in every flower size, plus child-resistant zipper and slide-open formats.",
    longDescription:
      "Mylar pouches built for the cannabis category — engineered to keep flower fresh and your brand front-and-center. Standard 1g, 3.5g, and 1oz stand-up sizes, flat bags, and custom die-cut shapes. Child-resistant zipper and slide-open formats for compliance, with eight specialty finishes including holographic, kraft, and grit touch.",
    image: mylarHero,
    items: [
      { name: "Small Stand-Up Pouch", spec: "1g" },
      { name: "Medium Stand-Up Pouch", spec: "3.5g" },
      { name: "Large Stand-Up Pouch", spec: "1oz" },
      { name: "Flat Mylar Bag" },
      { name: "Custom Die-Cut Shape" },
      { name: "Child-Resistant Zipper Bag" },
      { name: "Slide-Open CR Bag" },
    ],
    finishes: [
      "Spot UV", "Foil", "Emboss", "Holographic",
      "Metallic", "Kraft", "Soft Touch", "Grit Touch",
    ],
  },
  {
    slug: "tubes",
    num: "04",
    shortLabel: "Pop-Tops & Drams",
    title: "Pop-Top Tubes & Dram Jars",
    tagline: "Pre-roll & flower storage",
    blurb:
      "Pre-roll and flower storage in standard or custom Pantone. IML printing in matte, glossy, and metallic foil.",
    longDescription:
      "Reliable pre-roll tubes and dram jars across the most-requested sizes. Stocked in black, white, and clear with custom Pantone available. IML (in-mold labeling) printing in matte, glossy, or metallic foil delivers premium graphics directly into the part — no labels, no peeling.",
    image: poptopsHero,
    items: [
      { name: "Pop-Top 78mm", spec: "0.7\" × 3.1\"" },
      { name: "Pop-Top 90mm", spec: "0.7\" × 3.5\"" },
      { name: "Pop-Top 98mm", spec: "0.7\" × 3.9\"" },
      { name: "Pop-Top 116mm", spec: "0.7\" × 4.6\"" },
      { name: "Pop-Top 116×30mm", spec: "Wide format" },
      { name: "Dram Jar 13", spec: "1.3\" × 2.7\"" },
      { name: "Dram Jar 19", spec: "1.5\" × 2.8\"" },
      { name: "Dram Jar 30", spec: "1.9\" × 3.0\"" },
      { name: "Dram Jar 60", spec: "1.8\" × 5.3\"" },
      { name: "Dram Jar 90", spec: "3.2\" × 2.9\"" },
    ],
    finishes: ["IML Matte", "IML Glossy", "IML Metallic Foil", "Custom Pantone"],
  },
  {
    slug: "glass",
    num: "05",
    shortLabel: "Glass Jars",
    title: "Glass Jars & Tubes",
    tagline: "1oz to 18oz, printed or clear",
    blurb:
      "Printed and unprinted jars from 1oz to 18oz, plus pre-roll tubes and concentrate jars in 5–9mL.",
    longDescription:
      "Premium glass for premium product. Printed or unprinted jars from 1oz up to 18oz, with custom cap finishes in metallic gold, matte black, glossy white, glossy black, rose gold, copper, metallic silver, or any custom color. Pre-roll glass tubes and 5/7/9mL concentrate jars complete the line.",
    image: glassHero,
    items: [
      { name: "Glass Jar 1oz" },
      { name: "Glass Jar 2oz" },
      { name: "Glass Jar 4oz" },
      { name: "Glass Jar 6oz" },
      { name: "Glass Jar 8oz" },
      { name: "Glass Jar 12oz" },
      { name: "Glass Jar 18oz" },
      { name: "Pre-Roll Glass Tube" },
      { name: "Concentrate Jar 5mL" },
      { name: "Concentrate Jar 7mL" },
      { name: "Concentrate Jar 9mL" },
    ],
    finishes: [
      "Metallic Gold", "Matte Black", "Glossy White", "Glossy Black",
      "Rose Gold", "Copper", "Metallic Silver", "Custom Color",
    ],
  },
  {
    slug: "labels",
    num: "06",
    shortLabel: "Labels",
    title: "Labels",
    tagline: "Wrap-around, paper or synthetic",
    blurb:
      "Premium pressure-sensitive wrap-around labels on paper or synthetic stock. Digital and offset print.",
    longDescription:
      "Pressure-sensitive wrap-around labels for jars, tubes, tins and pouches — on paper or synthetic stock, with digital or offset printing. Six premium finish options let you tune the tactile and visual story: full-coverage UV gloss, velvety soft touch, full metallic base, hot foil accents, raised UV, and dimensional emboss/deboss.",
    image: labelsHero,
    items: [
      { name: "UV Coating", spec: "Full-coverage gloss" },
      { name: "Soft Touch", spec: "Velvety matte" },
      { name: "Metallic", spec: "Full metallic base" },
      { name: "Foil Stamping", spec: "Hot foil accents" },
      { name: "Raised UV / Spot UV", spec: "Tactile relief" },
      { name: "Emboss / Deboss", spec: "Dimensional text" },
      { name: "THC Warning Label", spec: "Compliance" },
      { name: "State Compliance Label", spec: "Compliance" },
      { name: "Lab Testing / COA Label", spec: "Compliance" },
      { name: "Ingredient / Nutrition Label", spec: "Compliance" },
      { name: "Tamper-Evident Seal", spec: "Compliance" },
      { name: "Serialization / Tracking", spec: "Compliance" },
      { name: "CR Certification Badge", spec: "Compliance" },
      { name: "Universal Cannabis Symbol", spec: "Compliance" },
    ],
  },
  {
    slug: "tins",
    num: "07",
    shortLabel: "CR Tins",
    title: "CR Tins & Tin Plate Packaging",
    tagline: "Child-resistant certified",
    blurb:
      "Child-resistant certified. Custom print and embossing. Round, square, hinged, slide-out and window styles.",
    longDescription:
      "Tin plate packaging with the substance and shelf-presence to anchor a premium SKU. All formats are child-resistant certified and accept custom print and embossing. Choose round, square, rectangular hinged-lid, cylindrical slide-out tubes, wide squat jars for high volume, or window tins to showcase the product directly.",
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
];

export const allFinishes = [
  "Spot UV", "Foil Stamp", "Emboss", "Soft Touch", "Window Die-Cut",
  "Metallic", "Holographic", "Kraft", "Grit Touch",
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
