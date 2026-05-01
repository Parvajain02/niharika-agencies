export const SITE = {
  name: "Niharika Agencies",
  tagline: "Where Quality Meets Service",
  since: 1999,
  phone: "+91 8411002940",
  phoneRaw: "918411002940",
  email: "niharikaagencies99@gmail.com",
  address: "M-148 MIDC, Behind Godavari Engineering College, Jalgaon 425003",
  contactPerson: "Nihar Jain",
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
  { name: "Butterfly" },
  { name: "Blossom", tag: "International" },
  { name: "Pristine", tag: "Baking Solutions" },
  { name: "Milky Mist" },
  { name: "Del Monte" },
  { name: "Hatsun" },
  { name: "Vadilal" },
  { name: "Amul" },
  { name: "Britannia" },
  { name: "Cadbury" },
];

import bakery from "@/assets/category-bakery.jpg";
import icecream from "@/assets/category-icecream.jpg";
import frozen from "@/assets/category-frozen.jpg";
import flavors from "@/assets/category-flavors.jpg";
import packaging from "@/assets/category-packaging.jpg";
import dairy from "@/assets/category-dairy.jpg";

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