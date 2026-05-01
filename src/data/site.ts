export const SITE = {
  name: "Niharika Agencies",
  tagline: "Where Quality Meets Service",
  since: 1999,
  phone: "+91 94227 74272",
  phoneRaw: "919422774272",
  landline: "(0257) 222 5382, 227 2382",
  email: "niharikaagencies99@gmail.com",
  address: "M-148 MIDC, Behind Godavari Engineering College, Jalgaon 425003",
  contactPersons: ["Vijay Jain", "Nihar Jain"],
  districts: ["Jalgaon", "Dhule", "Nandurbar"],
};

export const STATS = [
  { value: 25, suffix: "+", label: "Years of Trust" },
  { value: 22, suffix: "+", label: "Trusted Brands" },
  { value: 300, suffix: "+", label: "Retail Partners" },
  { value: 80, suffix: "+", label: "Sub-Distributors" },
  { value: 100, suffix: "+", label: "Bakeries Served" },
  { value: 3, suffix: "", label: "Districts Covered" },
];

export const BRANDS: { name: string; tag?: string }[] = [
  { name: "Prestige", tag: "Bakers Yeast" },
  { name: "Butterfly" },
  { name: "McCain" },
  { name: "Mapro" },
  { name: "ACT II" },
  { name: "Weikfield", tag: "Since 1956" },
  { name: "Safal" },
  { name: "Dr. Oetker", tag: "FunFoods" },
  { name: "Rich's" },
  { name: "Gowardhan" },
  { name: "Hershey's" },
  { name: "Oddiville", tag: "Foods & Frozen" },
  { name: "Sarwar" },
  { name: "Blossom", tag: "International" },
  { name: "Pristine", tag: "Baking Solutions" },
  { name: "Milky Mist" },
  { name: "Del Monte" },
  { name: "Hatsun" },
  { name: "Vadilal" },
  { name: "Amul" },
  { name: "Britannia" },
  { name: "Cadbury" },
  { name: "Badshah", tag: "Spices" },
  { name: "MI Foods" },
  { name: "Sankalp" },
];

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
  { brand: "MI Foods", category: "Frozen / Ready-to-Cook", fileId: "1P0zKuCih0cLXuF1Draqkc8RrkjcWcTxG" },
  { brand: "Milky Mist", category: "Dairy", fileId: "1mT2lC4k75ucchBWy_amswPKJCXPxk8aO" },
  { brand: "Oddiville", category: "Foods & Frozen", fileId: "1H44qHfeVe71hIiodxcQ2Ihqm16UFlbku" },
  { brand: "Pristine", category: "Baking Solutions", fileId: "1qW5qSNuT1EHrxwE5S-Zu8UoGLzT5lnRJ" },
  { brand: "Cake Decorations & Sprinkles", category: "Bakery Toppings", fileId: "1tDrmbBiLakIpzY-boC5JMm2_atdUIM1a" },
  { brand: "Rich's", category: "Bakery & Whipping Cream", fileId: "1r1XRVAdqVolU9ilCdiQg4l9V1TEYpkS4" },
  { brand: "Sankalp", category: "Frozen Foods", fileId: "1zhIMNSNy2g-ig1-LwJy6AcD4AyNHxkc3" },
  { brand: "Weikfield", category: "Desserts & Mixes", fileId: "1pO8senjyBWAsnHbuG-32_KqDv9-EFtjn" },
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
};

export const CATEGORIES: Category[] = [
  {
    slug: "bakery",
    title: "Bakery Ingredients",
    description: "Premium flours, yeasts, improvers, chocolates and bakery essentials trusted by India's top bakeries.",
    image: bakery,
    items: ["Bakers Yeast", "Cocoa Powder", "Chocolate Compound", "Bread Improvers", "Baking Powder"],
  },
  {
    slug: "icecream",
    title: "Ice Cream Raw Materials",
    description: "Stabilizers, emulsifiers, dairy bases and premium toppings for artisanal and commercial ice cream.",
    image: icecream,
    items: ["Stabilizers", "Emulsifiers", "Cones & Wafers", "Sundae Toppings", "Premix Bases"],
  },
  {
    slug: "frozen",
    title: "Frozen Foods",
    description: "End-to-end cold-chain handling for frozen snacks, vegetables and ready-to-cook QSR essentials.",
    image: frozen,
    items: ["French Fries", "Frozen Snacks", "Frozen Veg", "QSR Range", "Ready-to-Cook"],
  },
  {
    slug: "flavors",
    title: "Food Colors, Essences & Flavours",
    description: "Vibrant food-grade colors, syrups and concentrated flavours for bakery, beverage and dessert use.",
    image: flavors,
    items: ["Food Colors", "Essences", "Syrups", "Mocktail Bases", "Concentrates"],
  },
  {
    slug: "packaging",
    title: "Packaging Materials",
    description: "Food-grade packaging — boxes, bags, containers and disposables for bakeries, cafes and restaurants.",
    image: packaging,
    items: ["Bakery Boxes", "Paper Bags", "Containers", "Cake Boards", "Disposables"],
  },
  {
    slug: "dairy",
    title: "Dairy & Cream",
    description: "Cold-chain protected dairy — fresh cream, cheese, butter and milk-based ingredients for HoReCa.",
    image: dairy,
    items: ["Whipping Cream", "Butter", "Cheese", "Condensed Milk", "Dairy Premix"],
  },
];