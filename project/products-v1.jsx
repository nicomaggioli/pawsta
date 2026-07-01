// Pawsta product catalog — pasta-shaped rubber dog chew toys
const PRODUCTS = [
  {
    id: "farfalle",
    name: "Farfalle Chew",
    italian: "Bow-tie",
    tagline: "The fancy one. For dogs with refined taste.",
    price: 18.00,
    sizes: ["S", "M", "L"],
    flavors: ["Original", "Peanut Butter", "Bacon"],
    image: "assets/Farfelle-cutout.png",
    swatch: "#E8C896",
    rating: 4.9,
    reviews: 1247,
    badge: "Best Seller",
    durability: 4,
    chewTime: 45,
    description: "Pinched in the middle, ruffled on the ends, irresistible all the way through. Our Farfalle Chew is hand-tested by Italian-American Labradors and engineered for medium-to-aggressive chewers.",
    materials: "100% natural rubber, dyed with food-grade colorants",
    weight: "1 lb (454g)"
  },
  {
    id: "penne",
    name: "Penne Chew",
    italian: "Quill",
    tagline: "Tube-shaped fun. Ridges in all the right places.",
    price: 16.00,
    sizes: ["S", "M", "L", "XL"],
    flavors: ["Original", "Peanut Butter", "Bacon", "Parmesan"],
    image: "assets/Penne-cutout.png",
    swatch: "#F2D9A4",
    rating: 4.8,
    reviews: 2103,
    badge: "Pack Favorite",
    durability: 5,
    chewTime: 60,
    description: "The classic. A hollow rubber penne tube with deep ridges that hold treats and stand up to the most determined molars. Stuff it, freeze it, watch the magic happen.",
    materials: "100% natural rubber, ridge-extruded for grip",
    weight: "1 lb (454g)"
  },
  {
    id: "ravioli",
    name: "Ravioli Chew",
    italian: "Little turnip",
    tagline: "Stuffed with squeak. Sealed with love.",
    price: 14.00,
    sizes: ["S", "M"],
    flavors: ["Original", "Cheese-Stuffed Squeak"],
    image: "assets/Ravioli-cutout.png",
    swatch: "#EFCB7C",
    rating: 4.7,
    reviews: 891,
    badge: "New",
    durability: 3,
    chewTime: 30,
    description: "A pillow of joy with crinkle-cut edges and a hidden squeaker that survives the apocalypse (and most golden retrievers). For small-to-medium chewers who love a satisfying squish.",
    materials: "100% natural rubber, double-walled with internal squeaker",
    weight: "0.6 lb (272g)"
  }
];

const COLLECTIONS = [
  { id: "all", label: "All Shapes" },
  { id: "best", label: "Best Sellers" },
  { id: "small", label: "Small Dogs" }
];

const REVIEWS = [
  { name: "Marcello, age 4", breed: "Golden Retriever", text: "He has destroyed every toy we have ever bought. The Penne Chew has survived for six months. We are convinced it is haunted.", rating: 5, owner: "— Lisa P., Brooklyn" },
  { name: "Biscotti, age 2", breed: "French Bulldog", text: "She carries her Ravioli Chew everywhere. To bed. To the park. To the vet. It is her child now. We have accepted this.", rating: 5, owner: "— Tomás R., Austin" },
  { name: "Pesto, age 7", breed: "Mini Schnauzer", text: "The Farfalle is just the right size for his little jaws. Squeaks pleasingly. Bounces unpredictably. He hates and loves it equally.", rating: 5, owner: "— Frankie B., Queens" }
];

Object.assign(window, { PRODUCTS, COLLECTIONS, REVIEWS });
