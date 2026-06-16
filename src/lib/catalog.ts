import {
  Apple,
  SprayCan,
  Heart,
  HandHeart,
  CookingPot,
  GraduationCap,
  BedDouble,
  Tent,
  Sun,
  type LucideIcon,
} from "lucide-react";

export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  specs?: { label: string; value: string }[];
};

export const categories: Category[] = [
  {
    slug: "food-items",
    name: "Food Items",
    description:
      "Essential food supplies and ready-to-distribute food packages for emergency and relief programs.",
    icon: Apple,
    items: [
      "Ready-to-eat meals",
      "High-energy biscuits",
      "Rice",
      "Bulgur",
      "Pasta",
      "Lentils",
      "Chickpeas",
      "White beans",
      "Vegetable oil",
      "Sunflower oil",
      "Sugar",
      "Salt",
      "Tomato paste",
      "Canned beans",
      "Canned meat",
      "Tuna",
      "Biscuits",
      "Energy bars",
      "Dates",
      "Juice",
      "Water",
    ],
  },
  {
    slug: "hygiene-kits",
    name: "Hygiene Kits",
    description:
      "Complete hygiene kits designed to support personal cleanliness, dignity, and health in humanitarian contexts.",
    icon: SprayCan,
    items: [
      "Bath soap",
      "Laundry soap / detergent",
      "Shampoo",
      "Toothpaste",
      "Toothbrush",
      "Toilet paper",
      "Handwashing soap",
      "Sanitary pads",
      "Water",
      "Household cleaning liquid",
      "Jerrycan",
      "Bucket with lid",
      "Clothesline rope",
      "Clothes pegs",
    ],
  },
  {
    slug: "mhm-kits",
    name: "MHM Kits",
    description:
      "Menstrual hygiene management kits prepared for women and girls in emergency and relief settings.",
    icon: Heart,
    items: [
      "Reusable sanitary pads",
      "Disposable sanitary pads",
      "Cotton underwear",
      "Laundry soap",
      "Bath soap",
      "Waterproof storage pouch",
      "Multipurpose cloth",
      "Information leaflet in Arabic",
    ],
  },
  {
    slug: "dignity-kits",
    name: "Dignity Kits",
    description:
      "Dignity kits containing essential personal care and safety items for vulnerable individuals and families.",
    icon: HandHeart,
    items: [
      "Reusable sanitary pads",
      "Disposable pads",
      "Cotton underwear",
      "Bath soap",
      "Laundry soap",
      "Shampoo",
      "Toothbrush",
      "Toothpaste",
      "Information leaflet",
      "Nail clipper",
      "Comb",
      "Flashlight / Torch",
    ],
  },
  {
    slug: "kitchen-sets",
    name: "Kitchen Sets",
    description:
      "Practical kitchen sets for families and communities affected by displacement or emergency situations.",
    icon: CookingPot,
    items: [
      "Cooking pot with lid",
      "Frying pan",
      "Serving spoon",
      "Ladle",
      "Kitchen knife",
      "Plates",
      "Spoons",
      "Forks",
      "Table knives",
      "Plastic basin",
    ],
  },
  {
    slug: "shelter-items",
    name: "Shelter Items",
    description:
      "Shelter solutions and materials for emergency response, field operations, and temporary structures.",
    icon: Tent,
    items: [
      "Standard family tent",
      "Multipurpose tent",
      "Warehouse tent",
      "Tarpaulin 4×6",
      "Tarpaulin 4×5",
    ],
    specs: [
      { label: "Family tent", value: "Poly-cotton, area 23 m²" },
      { label: "Multipurpose tent", value: "Polyethylene, 24 / 48 / 72 m²" },
      { label: "Warehouse tent", value: "PVC material, 240 m² and 360 m²" },
    ],
  },
  {
    slug: "school-kits",
    name: "School Kits",
    description:
      "School kits prepared to help children continue learning during relief and recovery programs.",
    icon: GraduationCap,
    items: [
      "School backpack",
      "Exercise notebooks",
      "Pens",
      "Pencil case",
      "Pencils",
      "Eraser",
      "Sharpener",
      "Ruler",
      "Colored pencils",
      "Geometry set",
      "Drawing book",
      "Crayons",
    ],
  },
  {
    slug: "relief-items",
    name: "Relief Items",
    description:
      "Essential non-food relief items for emergency shelter, comfort, and family support.",
    icon: BedDouble,
    items: [
      "Mattresses",
      "Synthetic sleeping mats",
      "Medium thermal blankets",
      "2-ply blankets",
      "Pillows",
    ],
    specs: [
      { label: "Mattress", value: "190×90×10 cm or 190×80×10 cm, fiber fill and foam" },
      { label: "Synthetic sleeping mat", value: "1.8×0.9 m, 720 g, polyester" },
      { label: "Medium thermal blanket", value: "1.5×2 m, ~1.5 kg" },
      { label: "2-ply blanket", value: "1.6×2 m, ~1.8 kg" },
      { label: "Pillow", value: "50×70 cm" },
    ],
  },
  {
    slug: "solar-products",
    name: "General Solar Products",
    description:
      "Solar-powered products to support lighting and energy needs in field and emergency environments.",
    icon: Sun,
    items: ["Batteries", "Solar panels", "Solar torch light"],
  },
];

export const services = [
  {
    slug: "cleaning",
    name: "Cleaning Services",
    description:
      "Professional cleaning support for facilities, warehouses, shelters, and operational sites.",
  },
  {
    slug: "contracting",
    name: "Contracting Services",
    description:
      "Practical contracting support for humanitarian and field-based projects.",
  },
  {
    slug: "warehousing",
    name: "Warehousing Services",
    description:
      "Storage, handling, and warehousing support for relief items and humanitarian supplies.",
  },
];
