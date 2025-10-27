export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  features: string[];
  image: string;
}

export const products: Product[] = [
  // Footwear Category - 10 items
  {
    id: "1",
    name: "Pro Runner X1",
    category: "Footwear",
    price: 129.99,
    description: "Experience ultimate comfort and performance with our flagship running shoe. Engineered for speed and endurance.",
    features: [
      "Responsive cushioning technology",
      "Breathable mesh upper",
      "Durable rubber outsole",
      "Lightweight design"
    ],
    image: "/src/assets/product-shoes.jpg"
  },
  {
    id: "3",
    name: "Speed Trainer",
    category: "Footwear",
    price: 149.99,
    description: "Built for athletes who demand excellence. Superior support and traction for any workout.",
    features: [
      "Multi-surface traction",
      "Enhanced stability",
      "Premium materials",
      "All-day comfort"
    ],
    image: "/src/assets/product-shoes.jpg"
  },
  {
    id: "6",
    name: "Court Master",
    category: "Footwear",
    price: 119.99,
    description: "Dominate the court with precision-engineered athletic footwear. Ultimate support and style.",
    features: [
      "Court-specific traction",
      "Ankle support",
      "Premium cushioning",
      "Durable construction"
    ],
    image: "/src/assets/product-shoes.jpg"
  },
  {
    id: "7",
    name: "Trail Blazer Pro",
    category: "Footwear",
    price: 159.99,
    description: "Conquer any terrain with confidence. Built for the toughest trails and outdoor adventures.",
    features: [
      "Aggressive grip pattern",
      "Waterproof membrane",
      "Rock protection plate",
      "Trail-specific cushioning"
    ],
    image: "/src/assets/product-shoes.jpg"
  },
  {
    id: "8",
    name: "Urban Sprint",
    category: "Footwear",
    price: 109.99,
    description: "Sleek design meets urban performance. Perfect for city runners and street athletes.",
    features: [
      "Stylish minimal design",
      "Flexible sole",
      "Reflective accents",
      "Breathable knit upper"
    ],
    image: "/src/assets/product-shoes.jpg"
  },
  {
    id: "9",
    name: "Marathon Elite",
    category: "Footwear",
    price: 179.99,
    description: "Race-day ready. Maximum energy return for long-distance champions.",
    features: [
      "Carbon fiber plate",
      "Ultra-responsive foam",
      "Aerodynamic design",
      "Competition ready"
    ],
    image: "/src/assets/product-shoes.jpg"
  },
  {
    id: "10",
    name: "Cross Trainer X",
    category: "Footwear",
    price: 124.99,
    description: "Versatile performance shoe for all your training needs. From gym to track.",
    features: [
      "Multi-directional support",
      "Stable platform",
      "Flexible forefoot",
      "Reinforced toe box"
    ],
    image: "/src/assets/product-shoes.jpg"
  },
  {
    id: "11",
    name: "Basketball Pro High",
    category: "Footwear",
    price: 154.99,
    description: "Elevate your game with superior ankle support and explosive responsiveness.",
    features: [
      "High-top ankle support",
      "Impact protection",
      "Superior grip",
      "Lightweight construction"
    ],
    image: "/src/assets/product-shoes.jpg"
  },
  {
    id: "12",
    name: "Casual Sport Slide",
    category: "Footwear",
    price: 59.99,
    description: "Recovery and relaxation redefined. Post-workout comfort that looks great.",
    features: [
      "Contoured footbed",
      "Soft cushioning",
      "Easy slip-on design",
      "Moisture-wicking"
    ],
    image: "/src/assets/product-shoes.jpg"
  },
  {
    id: "13",
    name: "Lightweight Racer",
    category: "Footwear",
    price: 139.99,
    description: "Minimalist design for maximum speed. Feel the road beneath your feet.",
    features: [
      "Ultra-lightweight",
      "Barefoot feel",
      "Zero-drop platform",
      "Natural stride"
    ],
    image: "/src/assets/product-shoes.jpg"
  },

  // Apparel Category - 10 items
  {
    id: "2",
    name: "Elite Training Shirt",
    category: "Apparel",
    price: 49.99,
    description: "Premium moisture-wicking fabric keeps you cool during intense workouts. Designed for peak performance.",
    features: [
      "Moisture-wicking fabric",
      "Four-way stretch",
      "Anti-odor technology",
      "Seamless construction"
    ],
    image: "/src/assets/product-apparel.jpg"
  },
  {
    id: "4",
    name: "Performance Jacket",
    category: "Apparel",
    price: 89.99,
    description: "Weather-resistant jacket that adapts to your training needs. Style meets functionality.",
    features: [
      "Water-resistant coating",
      "Adjustable fit",
      "Multiple pockets",
      "Reflective details"
    ],
    image: "/src/assets/product-apparel.jpg"
  },
  {
    id: "5",
    name: "Athletic Shorts Pro",
    category: "Apparel",
    price: 39.99,
    description: "Maximum mobility and comfort for any activity. Built to move with you.",
    features: [
      "Elastic waistband",
      "Lightweight fabric",
      "Deep pockets",
      "Quick-dry technology"
    ],
    image: "/src/assets/product-apparel.jpg"
  },
  {
    id: "14",
    name: "Compression Leggings",
    category: "Apparel",
    price: 64.99,
    description: "Enhance circulation and reduce fatigue. Feel the difference in every movement.",
    features: [
      "Graduated compression",
      "Moisture management",
      "Flatlock seams",
      "High waistband"
    ],
    image: "/src/assets/product-apparel.jpg"
  },
  {
    id: "15",
    name: "Training Hoodie",
    category: "Apparel",
    price: 74.99,
    description: "Stay warm without overheating. Perfect for pre and post-workout comfort.",
    features: [
      "Thermal regulation",
      "Zippered pockets",
      "Adjustable hood",
      "Brushed interior"
    ],
    image: "/src/assets/product-apparel.jpg"
  },
  {
    id: "16",
    name: "Performance Tank Top",
    category: "Apparel",
    price: 34.99,
    description: "Unrestricted movement for high-intensity training. Stay cool when the heat is on.",
    features: [
      "Racerback design",
      "Breathable mesh panels",
      "Slim fit",
      "Anti-chafe construction"
    ],
    image: "/src/assets/product-apparel.jpg"
  },
  {
    id: "17",
    name: "Sport Sweatpants",
    category: "Apparel",
    price: 69.99,
    description: "Ultimate comfort meets athletic performance. From warm-ups to cool-downs.",
    features: [
      "Tapered fit",
      "Zippered pockets",
      "Elastic cuffs",
      "Soft fleece interior"
    ],
    image: "/src/assets/product-apparel.jpg"
  },
  {
    id: "18",
    name: "Windbreaker Shell",
    category: "Apparel",
    price: 94.99,
    description: "Lightweight protection against the elements. Pack it, wear it, dominate it.",
    features: [
      "Ultra-packable",
      "Windproof fabric",
      "Adjustable hem",
      "Ventilation zones"
    ],
    image: "/src/assets/product-apparel.jpg"
  },
  {
    id: "19",
    name: "Base Layer Set",
    category: "Apparel",
    price: 79.99,
    description: "Foundation of comfort. Regulate temperature in any condition.",
    features: [
      "Body-mapped design",
      "Temperature control",
      "Second-skin fit",
      "Full set included"
    ],
    image: "/src/assets/product-apparel.jpg"
  },
  {
    id: "20",
    name: "Sports Bra Elite",
    category: "Apparel",
    price: 54.99,
    description: "Maximum support for high-impact activities. Engineered for confidence.",
    features: [
      "High-impact support",
      "Adjustable straps",
      "Breathable fabric",
      "No-bounce technology"
    ],
    image: "/src/assets/product-apparel.jpg"
  },

  // Accessories Category - 10 items
  {
    id: "21",
    name: "Performance Socks 3-Pack",
    category: "Accessories",
    price: 29.99,
    description: "Engineered for comfort and durability. The foundation of every great workout.",
    features: [
      "Arch support",
      "Moisture-wicking",
      "Reinforced heel and toe",
      "Seamless toe box"
    ],
    image: "/src/assets/product-apparel.jpg"
  },
  {
    id: "22",
    name: "Athletic Gym Bag",
    category: "Accessories",
    price: 79.99,
    description: "Organize your gear in style. Multiple compartments for everything you need.",
    features: [
      "Shoe compartment",
      "Padded laptop sleeve",
      "Water-resistant exterior",
      "Adjustable straps"
    ],
    image: "/src/assets/product-apparel.jpg"
  },
  {
    id: "23",
    name: "Sports Water Bottle",
    category: "Accessories",
    price: 24.99,
    description: "Stay hydrated in style. Insulated design keeps drinks cold for hours.",
    features: [
      "24oz capacity",
      "Double-wall insulation",
      "Leak-proof cap",
      "Easy-carry handle"
    ],
    image: "/src/assets/product-apparel.jpg"
  },
  {
    id: "24",
    name: "Sweat Headband",
    category: "Accessories",
    price: 14.99,
    description: "Keep sweat out of your eyes. Stay focused on what matters.",
    features: [
      "Moisture-wicking fabric",
      "Non-slip grip",
      "One size fits all",
      "Machine washable"
    ],
    image: "/src/assets/product-apparel.jpg"
  },
  {
    id: "25",
    name: "Compression Arm Sleeves",
    category: "Accessories",
    price: 34.99,
    description: "Enhanced circulation and muscle support. Reduce fatigue during long sessions.",
    features: [
      "UV protection",
      "Graduated compression",
      "Moisture management",
      "Sold as pair"
    ],
    image: "/src/assets/product-apparel.jpg"
  },
  {
    id: "26",
    name: "Fitness Tracker Watch",
    category: "Accessories",
    price: 149.99,
    description: "Monitor your progress with precision. Heart rate, steps, calories, and more.",
    features: [
      "Heart rate monitor",
      "GPS tracking",
      "Sleep analysis",
      "7-day battery life"
    ],
    image: "/src/assets/product-apparel.jpg"
  },
  {
    id: "27",
    name: "Training Gloves",
    category: "Accessories",
    price: 39.99,
    description: "Protect your hands without compromising grip. Built for serious lifters.",
    features: [
      "Padded palm",
      "Breathable mesh",
      "Wrist support",
      "Durable construction"
    ],
    image: "/src/assets/product-apparel.jpg"
  },
  {
    id: "28",
    name: "Resistance Bands Set",
    category: "Accessories",
    price: 44.99,
    description: "Versatile training tool for any fitness level. Build strength anywhere.",
    features: [
      "5 resistance levels",
      "Portable and lightweight",
      "Includes carry bag",
      "Exercise guide included"
    ],
    image: "/src/assets/product-apparel.jpg"
  },
  {
    id: "29",
    name: "Yoga Mat Pro",
    category: "Accessories",
    price: 59.99,
    description: "Premium cushioning for yoga, pilates, and floor exercises. Non-slip surface.",
    features: [
      "6mm thick padding",
      "Non-slip texture",
      "Easy to clean",
      "Includes carrying strap"
    ],
    image: "/src/assets/product-apparel.jpg"
  },
  {
    id: "30",
    name: "Sports Cap",
    category: "Accessories",
    price: 27.99,
    description: "Protection from sun and sweat. Lightweight and breathable design.",
    features: [
      "Moisture-wicking sweatband",
      "Adjustable back strap",
      "UV protection",
      "Reflective details"
    ],
    image: "/src/assets/product-apparel.jpg"
  }
];
