import {
  Apple,
  SprayCan,
  BedDouble,
  Tent,
  Sun,
  type LucideIcon,
} from "lucide-react";

export type Product = {
  slug: string;
  name: string;
  description: string;
  items: string[];
  specs?: { label: string; value: string }[];
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  specs?: { label: string; value: string }[];
  products?: Product[];
};

export const categories: Category[] = [
  {
    slug: "food-items",
    name: "Food Items",
    description:
      "Essential food supplies and packages for field operations and relief programs.",
    icon: Apple,
    items: [
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
      "High-energy biscuits",
    ],
    products: [
      {
        slug: "food-kit",
        name: "Food Kit",
        description: "Dry food ration parcel containing essential cooking staples designed to sustain a family for one month.",
        items: [
          "Rice",
          "Bulgur",
          "Pasta",
          "Lentils",
          "Chickpeas",
          "White beans",
          "Vegetable oil",
          "Sunflower Oil",
          "Sugar",
          "Salt",
          "Tomato paste",
        ],
        specs: [
          { label: "Weight", value: "Approx. 25-30 kg" },
          { label: "Packaging", value: "Heavy-duty cardboard box / woven sack" },
          { label: "Shelf Life", value: "12-18 months" },
        ],
      },
      {
        slug: "ready-to-eat-food-kit",
        name: "Ready to Eat Food Kit",
        description: "Immediate response food parcel containing cooked canned items and snacks requiring no water or cooking facilities.",
        items: [
          "Canned beans",
          "Canned meat",
          "Tuna",
          "Biscuits",
          "Energy bars",
          "Dates",
          "Juice",
          "Water",
        ],
        specs: [
          { label: "Weight", value: "Approx. 8-10 kg" },
          { label: "Packaging", value: "Sealed box with easy-open cans" },
          { label: "Shelf Life", value: "24 months" },
        ],
      },
      {
        slug: "high-energy-biscuit",
        name: "High Energy Biscuit",
        description: "Fortified wheat-based biscuits designed for immediate energy replenishment and nutritional support during crises.",
        items: [
          "High-energy wheat biscuits",
          "Fortified vitamins (A, B1, B2, C, D, E)",
          "Minerals (Iron, Calcium, Zinc)",
        ],
        specs: [
          { label: "Weight", value: "100g per pack (approx. 450 kcal)" },
          { label: "Packaging", value: "Vacuum sealed foil packs" },
          { label: "Shelf Life", value: "24-36 months" },
        ],
      },
    ],
  },
  {
    slug: "hygiene-kits",
    name: "Hygiene Kits",
    description:
      "Complete hygiene kits and personal supplies prepared for field settings and operations.",
    icon: SprayCan,
    items: [
      "Bath soap",
      "Laundry soap / detergent",
      "Shampoo",
      "Toothpaste",
      "Toothbrush",
      "Toilet paper",
      "Handwashing soap",
      "Sanitary pads (emergency supply)",
      "Household cleaning liquid",
      "Jerrycan",
      "Bucket with lid",
      "Clothesline rope",
      "Clothes pegs",
      "Reusable sanitary pads",
      "Disposable sanitary pads",
      "Cotton underwear",
      "Waterproof storage pouch",
      "Multipurpose cloth",
      "Nail clipper",
      "Comb",
      "Flashlight / Torch",
      "Information leaflet",
    ],
    products: [
      {
        slug: "hygiene-kit",
        name: "Hygiene Kit",
        description: "Standard assembly of personal and household hygiene supplies for emergency relief programs.",
        items: [
          "Bath soap",
          "Laundry soap / detergent",
          "Shampoo",
          "Toothpaste",
          "Toothbrush",
          "Toilet paper",
          "Handwashing soap",
          "Sanitary pads (emergency supply)",
          "Household cleaning liquid",
          "Jerrycan",
          "Bucket with lid",
          "Clothesline rope",
          "Clothes pegs",
        ],
        specs: [
          { label: "Packaging", value: "Heavy-duty plastic box / box container" },
          { label: "Target", value: "Family of 5 for 1 month" },
          { label: "Standards", value: "UNICEF / WHO guidelines" },
        ],
      },
      {
        slug: "mhm-kit",
        name: "MHM Kit",
        description: "Menstrual Hygiene Management kit prepared with personal and health support products for women and girls.",
        items: [
          "Reusable sanitary pads",
          "Disposable sanitary pads",
          "Cotton underwear",
          "Laundry soap",
          "Bath soap",
          "Waterproof storage pouch",
          "Multipurpose cloth",
          "Water",
          "Information leaflet (Arabic)",
        ],
        specs: [
          { label: "Target", value: "Women and adolescent girls" },
          { label: "Features", value: "Includes discrete storage pouch" },
          { label: "Standards", value: "UNFPA aligned guidelines" },
        ],
      },
      {
        slug: "dignity-kit",
        name: "Dignity Kit",
        description: "Dignity kit containing essential personal care, hygiene, and safety protection items for vulnerable individuals.",
        items: [
          "Reusable sanitary pads",
          "Disposable pads",
          "Cotton underwear",
          "Bath soap",
          "Laundry soap",
          "Shampoo",
          "Toothbrush",
          "Toothpaste",
          "Nail clipper",
          "Comb",
          "Flashlight / Torch",
          "Information leaflet",
        ],
        specs: [
          { label: "Target", value: "Vulnerable individuals & families" },
          { label: "Safety", value: "Includes flashlight & safety whistle" },
        ],
      },
    ],
  },
  {
    slug: "relief-items",
    name: "Relief Items",
    description:
      "Essential family kits, bedding, kitchen sets, and utility items.",
    icon: BedDouble,
    items: [
      "Cooking pot with lid (large)",
      "Cooking pot with lid (medium)",
      "Frying pan",
      "Serving spoon (large)",
      "Ladle",
      "Kitchen knife",
      "Plates",
      "Spoons",
      "Forks",
      "Table knives",
      "Plastic basin",
      "School backpack",
      "Exercise notebooks",
      "Pens",
      "Pencil case",
      "Eraser",
      "Sharpener",
      "Ruler",
      "Coloured pencils set",
      "Geometry set",
      "Drawing book",
      "Crayons",
      "ROPE, polypropylene, black",
      "Handsaw, for timber",
      "Nails (assorted)",
      "Shovel",
      "Handle",
      "Hoe with long handle",
      "Shears",
      "Tie Wire, galvanised",
      "Claw Hammer",
      "Mattresses",
      "Synthetic sleeping mats",
      "Medium thermal blankets",
      "2-ply blankets",
      "Pillows",
    ],
    products: [
      {
        slug: "kitchen-set",
        name: "Kitchen Set",
        description: "Practical cooking and serving utensils designed for families in displacement or emergency housing.",
        items: [
          "Cooking pot with lid (large)",
          "Cooking pot with lid (medium)",
          "Frying pan",
          "Serving spoon (large)",
          "Ladle",
          "Kitchen knife",
          "Plates",
          "Spoons",
          "Forks",
          "Table knives",
          "Plastic basin",
        ],
        specs: [
          { label: "Material", value: "Stainless steel / Food-grade plastic" },
          { label: "Target", value: "Family of 5-6 members" },
          { label: "Standards", value: "ICRC / IFRC kitchen kit A standard" },
        ],
      },
      {
        slug: "school-kit",
        name: "School Kit",
        description: "Essential educational and classroom supplies to support children's continued learning during recovery.",
        items: [
          "School backpack",
          "Exercise notebooks",
          "Pens",
          "Pencil case",
          "Bath soap",
          "Eraser",
          "Sharpener",
          "Ruler",
          "Coloured pencils set",
          "Geometry set",
          "Drawing book",
          "Crayons",
        ],
        specs: [
          { label: "Target", value: "Primary and secondary school students" },
          { label: "Packaging", value: "Heavy-duty backpack" },
        ],
      },
      {
        slug: "shelter-tool-kit",
        name: "Shelter Tool Kit",
        description: "A comprehensive set of tools for minor shelter repairs, temporary structure construction, and reinforcement.",
        items: [
          "ROPE, polypropylene, black",
          "Handsaw, for timber",
          "Nails (assorted)",
          "Shovel",
          "Handle",
          "Hoe with long handle",
          "Shears",
          "Tie Wire, galvanised",
          "Claw Hammer",
        ],
        specs: [
          { label: "Packaging", value: "Heavy-duty canvas tool bag" },
          { label: "Weight", value: "Approx. 12 kg" },
          { label: "Standards", value: "UN-Habitat shelter tool kit standard" },
        ],
      },
      {
        slug: "mattress",
        name: "Mattress",
        description: "Durable relief mattresses constructed with fiber fill and foam padding for displacement camp shelters.",
        items: [
          "Mattress (190 cm x 90 cm x 10 cm)",
          "Mattress (190 cm x 80 cm x 10 cm)",
        ],
        specs: [
          { label: "Material", value: "Fiber Fill & Foam" },
          { label: "Dimension 1", value: "190 cm x 90 cm x 10 cm" },
          { label: "Dimension 2", value: "190 cm x 80 cm x 10 cm" },
        ],
      },
      {
        slug: "synthetic-sleeping-mat",
        name: "Synthetic Sleeping Mat",
        description: "Water-resistant, durable polyester woven sleeping mats for emergency shelter environments.",
        items: [
          "Synthetic Sleeping Mat (1.8 x 0.9 m)",
        ],
        specs: [
          { label: "Material", value: "Polyester" },
          { label: "Dimension", value: "1.8 x 0.9 m" },
          { label: "Weight", value: "720 g" },
        ],
      },
      {
        slug: "medium-thermal-blanket",
        name: "Medium Thermal Blanket",
        description: "Thermal insulation blankets designed to provide standard warmth and comfort in crisis response.",
        items: [
          "Medium Thermal Blanket (1.5 x 2 m)",
        ],
        specs: [
          { label: "Type", value: "Medium Thermal Blanket" },
          { label: "Dimension", value: "1.5 x 2 m" },
          { label: "Weight", value: "1.5 kg" },
        ],
      },
      {
        slug: "two-ply-blanket",
        name: "2-ply Blanket",
        description: "Heavy-duty double-layered thermal blankets for superior insulation in cold-weather relief scenarios.",
        items: [
          "2-ply Blanket (1.6 x 2 m)",
        ],
        specs: [
          { label: "Type", value: "2-ply Blanket" },
          { label: "Dimension", value: "1.6 x 2 m" },
          { label: "Weight", value: "1.8 kg" },
        ],
      },
      {
        slug: "pillow",
        name: "Pillow",
        description: "Standard comfortable support pillows configured for institutional and humanitarian shelters.",
        items: [
          "Pillow (50 x 70 cm)",
        ],
        specs: [
          { label: "Dimension", value: "50 x 70 cm" },
        ],
      },
    ],
  },
  {
    slug: "shelter-items",
    name: "Shelter Items",
    description:
      "Temporary shelter solutions, materials, tents, and tarpaulins for field work and emergency response.",
    icon: Tent,
    items: [
      "Standard family tent",
      "Multipurpose tent",
      "Warehouse tent",
      "Tarpaulin 4×6 m",
      "Tarpaulin 4×5 m",
    ],
    products: [
      {
        slug: "humanitarian-tents",
        name: "Humanitarian Tents",
        description: "UN-standard temporary shelter and storage tents including family-sized, multipurpose, and logistics warehouse tents.",
        items: [
          "Standard family tent (23 m²)",
          "Multipurpose tent (24/48/72 m²)",
          "Warehouse tent (240/360 m²)",
        ],
        specs: [
          { label: "Family tent", value: "Poly-cotton canvas, area 23 m²" },
          { label: "Multipurpose tent", value: "Polyethylene, 24 / 48 / 72 m²" },
          { label: "Warehouse tent", value: "PVC material, 240 m² and 360 m²" },
        ],
      },
      {
        slug: "reinforced-tarpaulins",
        name: "Reinforced Tarpaulins",
        description: "Heavy-duty waterproof tarpaulins for temporary roofing, ground base sheets, and weather-proof coverings.",
        items: [
          "Tarpaulin 4×6 m",
          "Tarpaulin 4×5 m",
          "Rope attachments",
        ],
        specs: [
          { label: "Material", value: "Woven high-density polyethylene (HDPE)" },
          { label: "Standards", value: "UNHCR / IOM standard relief sheets" },
        ],
      },
    ],
  },
  {
    slug: "solar-products",
    name: "Solar Products",
    description:
      "Solar-powered equipment, panels, and rechargeable personal torch lights designed for remote field sites.",
    icon: Sun,
    items: ["Batteries", "Solar panels", "Solar torch light"],
    products: [
      {
        slug: "solar-power-kits",
        name: "Solar Power Kits",
        description: "Portable solar arrays and battery units to provide clean energy in off-grid field environments.",
        items: [
          "Deep-cycle solar batteries",
          "Photovoltaic solar panels",
          "Charge controller & cables",
        ],
        specs: [
          { label: "Capacity", value: "Varies from 50W to 300W kits" },
        ],
      },
      {
        slug: "solar-lighting",
        name: "Solar Lighting",
        description: "Rechargeable solar lanterns and torch lights for personal safety and lighting pathways.",
        items: [
          "Solar torch light",
          "Solar lantern with USB output",
          "Micro solar panel charging port",
        ],
        specs: [
          { label: "Torch range", value: "Up to 50 meters" },
          { label: "Lantern runtime", value: "Up to 12 hours on low charge" },
        ],
      },
    ],
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
