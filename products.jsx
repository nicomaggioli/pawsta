// Pawsta product catalog — plush pasta toys with a hidden crunch, designed in Boston
const PRODUCTS = [
  {
    id: "farfalle",
    name: "Farfalle Plush",
    italian: "Bow tie",
    tagline: "A huggable plush bow tie with a hidden crunch your pup won't put down.",
    price: 12.98,
    sizes: ["One size"],
    flavors: ["Crinkle Crunch"],
    image: "assets/plush-top.webp",
    image2: "assets/plush-side.webp",
    swatch: "#E8C896",
    rating: 4.8,
    reviews: 87,
    badge: "Best Seller",
    durability: 4,
    chewTime: 40,
    description: "It looks like a soft plush bow tie. Then your dog bites down and discovers the secret: a layer of crinkle crunch material tucked inside the shell that makes the most satisfying sound on earth. Double stitched seams, no spill stuffing, and a shape that's just right for carrying around the house.",
    materials: "Double stitched plush shell · hidden crinkle crunch liner · no spill poly stuffing",
    weight: "0.4 lb (181g)",
    features: [
      { t: "The crunch", d: "A crinkle liner sewn inside the plush. It's the sound that got our picky puppy hooked." },
      { t: "Double stitched", d: "Reinforced seams that hold up to enthusiastic tug sessions." },
      { t: "Machine washable", d: "Toss it in cold, air dry, and the crunch survives." },
      { t: "Just right size", d: "Light enough to carry, big enough not to swallow." }
    ]
  }
];

const COLLECTIONS = [
  { id: "all", label: "All Toys" }
];

const REVIEWS = [
  {
    name: "Maple",
    breed: "Mini Goldendoodle",
    text: "My puppy is impossible to shop for and ignores literally everything. This is the first toy she's actually kept coming back to. The crunch sound drives her wild. Going on three months and it still looks new.",
    rating: 5,
    owner: "Rachel M."
  },
  {
    name: "Bowie",
    breed: "Cavalier",
    text: "Soft enough that I'm not worried about his teeth, but that crinkle inside keeps him busy for ages. Wish it came in a couple more colors, honestly, but that's my only note.",
    rating: 4,
    owner: "Daniel K."
  },
  {
    name: "Olive",
    breed: "Rescue mix",
    text: "Washed it after two weeks of heavy use and the crunch still works perfectly. Olive carries it from room to room like it's her job. Worth every penny.",
    rating: 5,
    owner: "Priya S."
  }
];

Object.assign(window, { PRODUCTS, COLLECTIONS, REVIEWS });

// Site configuration — fill these in as services come online.
// checkoutUrl: a Stripe Payment Link (or similar). Empty = checkout falls back to an email order.
// newsletterEndpoint: a Formspree/Buttondown form URL. Empty = signup falls back to a prefilled email.
const PAWSTA_CONFIG = {
  checkoutUrl: "",
  newsletterEndpoint: "",
  supportEmail: "hello@pawsta.co"
};
Object.assign(window, { PAWSTA_CONFIG });
