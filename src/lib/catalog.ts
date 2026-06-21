import {
  Apple,
  SprayCan,
  BedDouble,
  Tent,
  Sun,
  Package,
  type LucideIcon,
} from "lucide-react";

export type SubProduct = {
  name: string;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
};

export type Product = {
  slug: string;
  name: string;
  description: string;
  items: string[];
  specs?: { label: string; value: string }[];
  subProducts?: SubProduct[];
  image?: string;
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
        image: "/food/food-kit.png",
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
        image: "/food/ready-to-eat-kit.png",
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
        image: "/food/high-energy-biscuit.png",
        description: "Fortified wheat-based biscuits designed for immediate energy replenishment and nutritional support during crises.",
        items: [
          "High-energy wheat biscuits",
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
    slug: "wash-kits",
    name: "WASH Kits",
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
        image: "/wash/hygiene-kit.png",
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
        ],
      },
      {
        slug: "mhm-kit",
        name: "MHM Kit",
        image: "/wash/mhm-kit.png",
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
        ],
      },
      {
        slug: "dignity-kit",
        name: "Dignity Kit",
        image: "/wash/dignity-kit.png",
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
    slug: "relief-kits",
    name: "Relief Kits",
    description:
      "Essential family kits, kitchen sets, and utility items.",
    icon: Package,
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
    ],
    products: [
      {
        slug: "kitchen-set",
        name: "Kitchen Set",
        image: "/relief/kitchen-set.png",
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
        ],
      },
      {
        slug: "school-kit",
        name: "School Kit",
        image: "/relief/school-kit.jpg",
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
        image: "/relief/shelter-tool-kit.jpg",
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
        ],
      },
    ],
  },
  {
    slug: "bedding-items",
    name: "Bedding Items",
    description:
      "Durable relief mattresses, thermal blankets, and sleeping gear for field sites.",
    icon: BedDouble,
    items: [
      "Mattresses",
      "Synthetic sleeping mats",
      "Medium thermal blankets",
      "2-ply blankets",
      "Pillows",
    ],
    products: [
      {
        slug: "mattress",
        name: "Mattress",
        image: "/bedding/mattress.png",
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
        image: "/bedding/sleeping-mat.png",
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
        image: "/bedding/medium-blanket.png",
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
        image: "/bedding/two-ply-blanket.png",
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
        image: "/bedding/pillow.png",
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
        subProducts: [
          {
            name: "Standard Family Tent",
            image: "/tents/family-tent.png",
            description: "A standard canvas shelter designed for 5-member families, featuring water, rot, and UV resistance for robust durability.",
            specs: [
              { label: "Dimensions", value: "5.7 m x 4 m" },
              { label: "Floor Area", value: "23 m²" },
              { label: "Material", value: "Poly-cotton canvas" },
              { label: "Ventilation", value: "Dual window flaps & chimney opening" },
            ],
          },
          {
            name: "Multipurpose Tent",
            image: "/tents/multipurpose-tent.png",
            description: "Versatile modular emergency shelter suited for schools, community facilities, or medical units in field environments.",
            specs: [
              { label: "Dimensions", value: "6m x 4m / 8m x 6m / 12m x 6m" },
              { label: "Structure", value: "Galvanized steel pipe frame" },
              { label: "Material", value: "High-density PVC / Polyethylene fabric" },
              { label: "Features", value: "Windows with mosquito mesh" },
            ],
          },
          {
            name: "Warehouse Tent (Mobile Storage Unit)",
            image: "/tents/warehouse-tent.png",
            description: "A massive industrial tension fabric warehouse structure configured for secure logistics, food storage, or equipment holding.",
            specs: [
              { label: "Dimensions", value: "10m x 24m / 10m x 36m" },
              { label: "Floor Area", value: "240 m² / 360 m²" },
              { label: "Structure", value: "Tensioned aluminum framework" },
              { label: "Material", value: "Heavy-duty PVC cover fabric" },
            ],
          },
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
        subProducts: [
          {
            name: "Reinforced Tarpaulin (4×6 m)",
            image: "/tarpaulins/tarpaulin-4x6.png",
            description: "A large heavy-duty waterproof ground sheet and roofing cover, built with reinforced bands and corner grommets.",
            specs: [
              { label: "Dimensions", value: "4 m x 6 m" },
              { label: "Material", value: "Woven HDPE with double-side LDPE lamination" },
              { label: "Eyelets", value: "Reinforced aluminum spacing every 1m" },
            ],
          },
          {
            name: "Reinforced Tarpaulin (4×5 m)",
            image: "/tarpaulins/tarpaulin-4x5.png",
            description: "A versatile weather-proof covering sheet, ideal for quick shelter setup, ground bases, and operational coverages.",
            specs: [
              { label: "Dimensions", value: "4 m x 5 m" },
              { label: "Material", value: "Woven HDPE with LDPE lamination" },
              { label: "Eyelets", value: "Reinforced brass spacing every 1m" },
            ],
          },
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
        image: "/solar/solar-power-kit.jpg",
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
        image: "/solar/solar-lighting.jpg",
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
