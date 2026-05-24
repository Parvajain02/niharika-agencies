export const SITE = {
  name: "Niharika Agencies",
  tagline: "Superstockists & Stockists for FMCG",
  since: 1999,
  phone: "+91 84110 02940",
  phoneRaw: "918411002940",
  email: "niharikaagencies99@gmail.com",
  address: "M-148 MIDC, Behind Godavari Engineering College, Jalgaon 425003",
  contactPerson: "Nihar Jain",
  mapsUrl: "https://maps.app.goo.gl/tJM2W82izNMSpVra6",
  mapsEmbedUrl: "https://www.google.com/maps?q=Niharika+Agencies+M-148+MIDC+Jalgaon&output=embed",
  districts: ["Jalgaon", "Dhule", "Nandurbar"],
  youtubeUrl: "https://youtube.com/@niharikaagencies?si=qgkgviMWjOOmjXcj",
};

export const STATS = [
  { value: 3, suffix: "", label: "Districts Covered" },
  { value: 22, suffix: "+", label: "Trusted Brands" },
  { value: 25, suffix: "+", label: "Years of Trust" },
  { value: 80, suffix: "+", label: "Sub-Distributors" },
  { value: 100, suffix: "+", label: "Bakeries Served" },
  { value: 300, suffix: "+", label: "Retail Partners" },
];

import logoPrestige from "@/assets/brand-prestige.jpg";
import logoButterfly from "@/assets/brand-butterfly.jpeg";
import logoMccain from "@/assets/brand-mccain.png";
import logoMapro from "@/assets/brand-mapro.jpeg";
import logoActii from "@/assets/brand-actii.png";
import logoWeikfield from "@/assets/brand-weikfield.jpeg";
import logoSafal from "@/assets/brand-safal.png";
import logoDrOetker from "@/assets/brand-droetker.png";
import logoRichs from "@/assets/brand-richs.png";
import logoGowardhan from "@/assets/brand-gowardhan.jpeg";
import logoHersheys from "@/assets/brand-hersheys.jpeg";
import logoOddiville from "@/assets/brand-oddiville.png";
import logoSarwar from "@/assets/brand-sarwar.png";
import logoBlossom from "@/assets/brand-blossom.png";
import logoPristine from "@/assets/brand-pristine.png";
import logoMilkyMist from "@/assets/brand-milkymist.png";
import logoDelMonte from "@/assets/brand-delmonte.png";
import logoSankalp from "@/assets/brand-sankalp.png";
import logoBadshah from "@/assets/brand-badshah.png";
import logoOmiFoods from "@/assets/brand-omifoods.png";
import logoJbCo from "@/assets/brand-jbco.png";
import logoCakeDecorations from "@/assets/brand-cakedecorations.png";

export const BRANDS: { name: string; tag?: string; logo?: string }[] = [
  { name: "Prestige", tag: "Bakers Yeast", logo: logoPrestige },
  { name: "Butterfly", logo: logoButterfly },
  { name: "McCain", logo: logoMccain },
  { name: "Mapro", logo: logoMapro },
  { name: "ACT II", logo: logoActii },
  { name: "Weikfield", tag: "Since 1956", logo: logoWeikfield },
  { name: "Safal", logo: logoSafal },
  { name: "Dr. Oetker", tag: "FunFoods", logo: logoDrOetker },
  { name: "Rich's", logo: logoRichs },
  { name: "Gowardhan", logo: logoGowardhan },
  { name: "Hershey's", logo: logoHersheys },
  { name: "Oddiville", tag: "Foods & Frozen", logo: logoOddiville },
  { name: "Sarwar", logo: logoSarwar },
  { name: "Blossom", tag: "International", logo: logoBlossom },
  { name: "Pristine", tag: "Baking Solutions", logo: logoPristine },
  { name: "Milky Mist", logo: logoMilkyMist },
  { name: "Del Monte", logo: logoDelMonte },
  { name: "Badshah", tag: "Spices", logo: logoBadshah },
  { name: "Omi Foods", logo: logoOmiFoods },
  { name: "JB&Co.", tag: "Dry Fruits & Nuts", logo: logoJbCo },
  { name: "Sankalp", logo: logoSankalp },
  { name: "Cake Decorations", tag: "& Sprinkles", logo: logoCakeDecorations },
];

export const BRAND_LOGO_MAP: Record<string, string> = Object.fromEntries(
  BRANDS.filter((b) => b.logo).map((b) => [b.name.toLowerCase(), b.logo!])
);

export function getBrandLogo(name: string): string | undefined {
  const lower = name.toLowerCase().trim();
  if (BRAND_LOGO_MAP[lower]) return BRAND_LOGO_MAP[lower];
  const stripped = lower
    .replace(/\s+funfoods$/, "")
    .replace(/\s+international$/, "")
    .replace(/\s+baking solutions$/, "")
    .replace(/\s+spices$/, "")
    .replace(/\s*&\s*sprinkles$/, "")
    .trim();
  return BRAND_LOGO_MAP[stripped];
}

import bakery from "@/assets/category-bakery.jpg";
import icecream from "@/assets/category-icecream.jpg";
import frozen from "@/assets/category-frozen.jpg";
import flavors from "@/assets/category-flavors.jpg";
import packaging from "@/assets/category-packaging.jpg";
import dairy from "@/assets/category-dairy.jpg";

const driveView = (id: string) => `https://drive.google.com/file/d/${id}/view`;
const driveDownload = (id: string) => `https://drive.google.com/uc?export=download&id=${id}`;

export type Brochure = {
  brand: string;
  category: string;
  fileId: string;
  viewUrl: string;
  downloadUrl: string;
  note?: string;
};

export const BROCHURES: Brochure[] = [
  { brand: "ACT II", category: "Snacks", fileId: "1_KxutFKgxlEA6cbPDjN1MG8ECtoF_Sig" },
  { brand: "Badshah", category: "Spices", fileId: "1rOGyV4-v1kLHEKjUDJL1h7l71BlK5w7x" },
  { brand: "Del Monte", category: "Foods & Beverages", fileId: "1NQF9x4iWnXAxoznSARMd4hb_jlkoHveu" },
  { brand: "Dr. Oetker FunFoods", category: "Spreads & Sauces", fileId: "1_wY7yYBe4mfSZVL4wx-Fmh__HmFbc1Rj" },
  { brand: "Dr. Oetker FunFoods", category: "Spreads & Sauces", fileId: "18XieXkB0JcHNRm3ahmiFVSUzA0n2TiU7", note: "Catalogue Vol. 2" },
  { brand: "Hershey's", category: "Chocolates & Syrups", fileId: "1aexIleZdiA1ko-KhqIXD-GcLGuNAYxAz" },
  { brand: "Mapro", category: "Syrups & Jams", fileId: "1KNpNeX4n7TiieToT84zADq6ny7JE71Q_" },
  { brand: "McCain", category: "Frozen Foods", fileId: "1uni-dJ8uZGfh4jdaRJybX9JnIwF4Z0Sz" },
  { brand: "Omi Foods", category: "Frozen / Ready-to-Cook", fileId: "1P0zKuCih0cLXuF1Draqkc8RrkjcWcTxG" },
  { brand: "JB&Co.", category: "Dry Fruits & Nuts", fileId: "1kcYELy1t8c4QwHSwrvEr7d9rr5bwnhiU" },
  { brand: "Milky Mist", category: "Dairy", fileId: "1mT2lC4k75ucchBWy_amswPKJCXPxk8aO" },
  { brand: "Oddiville", category: "Foods & Frozen", fileId: "1H44qHfeVe71hIiodxcQ2Ihqm16UFlbku" },
  { brand: "Pristine", category: "Baking Solutions", fileId: "1qW5qSNuT1EHrxwE5S-Zu8UoGLzT5lnRJ" },
  { brand: "Cake Decorations & Sprinkles", category: "Bakery Toppings", fileId: "1tDrmbBiLakIpzY-boC5JMm2_atdUIM1a" },
  { brand: "Rich's", category: "Bakery & Whipping Cream", fileId: "1r1XRVAdqVolU9ilCdiQg4l9V1TEYpkS4" },
  { brand: "Sankalp", category: "Frozen Foods", fileId: "1zhIMNSNy2g-ig1-LwJy6AcD4AyNHxkc3" },
  { brand: "Weikfield", category: "Desserts & Mixes", fileId: "1pO8senjyBWAsnHbuG-32_KqDv9-EFtjn" },
  { brand: "Gowardhan", category: "Dairy", fileId: "1ZUPl3_dbiz0UDHGv0x-HQA0Cl8oFEuY8" },
  { brand: "Butterfly", category: "Bakery Ingredients", fileId: "1sgUmCMIreuF_x4RzeKR05qNlpdGi9eS7" },
].map((b) => ({
  ...b,
  viewUrl: driveView(b.fileId),
  downloadUrl: driveDownload(b.fileId),
}));

export type Category = {
  slug: string;
  title: string;
  description: string;
  image: string;
  items: string[];
  brands: string[];
  bgClass?: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "bakery",
    title: "Bakery Ingredients",
    description: "Premium flours, yeasts, improvers, chocolates and bakery essentials trusted by India's top bakeries.",
    image: bakery,
    items: ["Bakers Yeast", "Cocoa Powder", "Chocolate Compound", "Bread Improvers", "Baking Powder"],
    brands: ["Prestige", "Butterfly", "Weikfield", "Pristine", "Dr. Oetker", "Hershey's", "Cake Decorations", "JB&Co."],
    bgClass: "bg-white",
  },
  {
    slug: "icecream",
    title: "Ice Cream Raw Materials",
    description: "Stabilizers, emulsifiers, dairy bases and premium toppings for artisanal and commercial ice cream.",
    image: icecream,
    items: ["Stabilizers", "Emulsifiers", "Cones & Wafers", "Sundae Toppings", "Premix Bases"],
    brands: ["Milky Mist", "Gowardhan", "Rich's", "Mapro"],
    bgClass: "bg-white",
  },
  {
    slug: "frozen",
    title: "Frozen Foods",
    description: "End-to-end cold-chain handling for frozen snacks, vegetables and ready-to-cook QSR essentials.",
    image: frozen,
    items: ["French Fries", "Frozen Snacks", "Frozen Veg", "QSR Range", "Ready-to-Cook"],
    brands: ["McCain", "Safal", "Sankalp", "Oddiville", "Omi Foods"],
    bgClass: "bg-white",
  },
  {
    slug: "flavors",
    title: "Food Colors, Essences & Flavours",
    description: "Vibrant food-grade colors, syrups and concentrated flavours for bakery, beverage and dessert use.",
    image: flavors,
    items: ["Food Colors", "Essences", "Syrups", "Mocktail Bases", "Concentrates"],
    brands: ["Mapro", "Blossom", "Sarwar", "Del Monte", "Badshah"],
    bgClass: "bg-white",
  },
  {
    slug: "packaging",
    title: "Packaging Materials",
    description: "Food-grade packaging — boxes, bags, containers and disposables for bakeries, cafes and restaurants.",
    image: packaging,
    items: ["Bakery Boxes", "Paper Bags", "Containers", "Cake Boards", "Disposables"],
    brands: ["Blossom"],
    bgClass: "bg-white",
  },
  {
    slug: "dairy",
    title: "Dairy & Cream",
    description: "Cold-chain protected dairy — fresh cream, cheese, butter and milk-based ingredients for HoReCa.",
    image: dairy,
    items: ["Whipping Cream", "Butter", "Cheese", "Condensed Milk", "Dairy Premix"],
    brands: ["Milky Mist", "Gowardhan", "Rich's"],
    bgClass: "bg-white",
  },
];
