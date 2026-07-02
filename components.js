(function(){
// Pawsta storefront components
const {
  useState,
  useEffect,
  useMemo,
  useRef
} = React;

// === Pasta-shape SVG placeholders (used when no image) ===
function PastaShape({
  id,
  color = "#E8C896"
}) {
  const stroke = "#001E43";
  if (id === "rigatoni") {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 200 200",
      fill: "none"
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "100",
      cy: "100",
      rx: "55",
      ry: "80",
      fill: color,
      stroke: stroke,
      strokeWidth: "3"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "100",
      cy: "40",
      rx: "55",
      ry: "14",
      fill: color,
      stroke: stroke,
      strokeWidth: "3"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "100",
      cy: "40",
      rx: "42",
      ry: "9",
      fill: "#fff",
      opacity: "0.4"
    }), [60, 72, 84, 96, 108, 120, 132].map(y => /*#__PURE__*/React.createElement("line", {
      key: y,
      x1: "50",
      y1: y,
      x2: "150",
      y2: y,
      stroke: stroke,
      strokeWidth: "1.5",
      opacity: "0.35"
    })), /*#__PURE__*/React.createElement("ellipse", {
      cx: "100",
      cy: "180",
      rx: "55",
      ry: "14",
      fill: color,
      stroke: stroke,
      strokeWidth: "3"
    }));
  }
  if (id === "fusilli") {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 200 200",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 80 30 Q 130 50 80 70 Q 130 90 80 110 Q 130 130 80 150 Q 130 170 80 180",
      stroke: color,
      strokeWidth: "36",
      strokeLinecap: "round",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 80 30 Q 130 50 80 70 Q 130 90 80 110 Q 130 130 80 150 Q 130 170 80 180",
      stroke: stroke,
      strokeWidth: "38",
      strokeLinecap: "round",
      fill: "none",
      opacity: "0.0"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 80 30 Q 130 50 80 70 Q 130 90 80 110 Q 130 130 80 150 Q 130 170 80 180",
      stroke: stroke,
      strokeWidth: "2.5",
      strokeLinecap: "round",
      fill: "none"
    }));
  }
  if (id === "spaghetti") {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 200 200",
      fill: "none"
    }, [40, 55, 70, 85, 100, 115, 130, 145, 160].map((x, i) => /*#__PURE__*/React.createElement("path", {
      key: i,
      d: `M ${x} 20 Q ${x + (i % 2 ? 6 : -6)} 100 ${x + (i % 3 ? -3 : 5)} 180`,
      stroke: color,
      strokeWidth: "3",
      fill: "none"
    })), /*#__PURE__*/React.createElement("rect", {
      x: "30",
      y: "80",
      width: "140",
      height: "40",
      fill: "#CC0000",
      stroke: stroke,
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("text", {
      x: "100",
      y: "106",
      textAnchor: "middle",
      fontFamily: "Fraunces, serif",
      fontStyle: "italic",
      fontWeight: "900",
      fontSize: "20",
      fill: "#FAF3E3"
    }, "PAWSTA"));
  }
  if (id === "lasagna") {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 200 200",
      fill: "none"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "30",
      y: "50",
      width: "140",
      height: "100",
      fill: color,
      stroke: stroke,
      strokeWidth: "3",
      rx: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 30 50 L 35 45 L 40 50 L 45 45 L 50 50 L 55 45 L 60 50 L 65 45 L 70 50 L 75 45 L 80 50 L 85 45 L 90 50 L 95 45 L 100 50 L 105 45 L 110 50 L 115 45 L 120 50 L 125 45 L 130 50 L 135 45 L 140 50 L 145 45 L 150 50 L 155 45 L 160 50 L 165 45 L 170 50",
      stroke: stroke,
      strokeWidth: "2",
      fill: color
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 30 150 L 35 155 L 40 150 L 45 155 L 50 150 L 55 155 L 60 150 L 65 155 L 70 150 L 75 155 L 80 150 L 85 155 L 90 150 L 95 155 L 100 150 L 105 155 L 110 150 L 115 155 L 120 150 L 125 155 L 130 150 L 135 155 L 140 150 L 145 155 L 150 150 L 155 155 L 160 150 L 165 155 L 170 150",
      stroke: stroke,
      strokeWidth: "2",
      fill: color
    }), /*#__PURE__*/React.createElement("line", {
      x1: "30",
      y1: "80",
      x2: "170",
      y2: "80",
      stroke: stroke,
      strokeWidth: "1",
      opacity: "0.3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "30",
      y1: "120",
      x2: "170",
      y2: "120",
      stroke: stroke,
      strokeWidth: "1",
      opacity: "0.3"
    }));
  }
  if (id === "orecchiette") {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 200 200",
      fill: "none"
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "65",
      cy: "80",
      rx: "32",
      ry: "28",
      fill: color,
      stroke: stroke,
      strokeWidth: "2.5"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "65",
      cy: "78",
      rx: "22",
      ry: "18",
      fill: stroke,
      opacity: "0.15"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "135",
      cy: "80",
      rx: "32",
      ry: "28",
      fill: color,
      stroke: stroke,
      strokeWidth: "2.5"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "135",
      cy: "78",
      rx: "22",
      ry: "18",
      fill: stroke,
      opacity: "0.15"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "100",
      cy: "135",
      rx: "32",
      ry: "28",
      fill: color,
      stroke: stroke,
      strokeWidth: "2.5"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "100",
      cy: "133",
      rx: "22",
      ry: "18",
      fill: stroke,
      opacity: "0.15"
    }));
  }
  if (id === "gnocchi") {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 200 200",
      fill: "none"
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "60",
      cy: "100",
      rx: "28",
      ry: "22",
      fill: color,
      stroke: stroke,
      strokeWidth: "2.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "42",
      y1: "92",
      x2: "78",
      y2: "92",
      stroke: stroke,
      strokeWidth: "1.5",
      opacity: "0.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "42",
      y1: "100",
      x2: "78",
      y2: "100",
      stroke: stroke,
      strokeWidth: "1.5",
      opacity: "0.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "42",
      y1: "108",
      x2: "78",
      y2: "108",
      stroke: stroke,
      strokeWidth: "1.5",
      opacity: "0.4"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "100",
      cy: "80",
      rx: "28",
      ry: "22",
      fill: color,
      stroke: stroke,
      strokeWidth: "2.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "82",
      y1: "72",
      x2: "118",
      y2: "72",
      stroke: stroke,
      strokeWidth: "1.5",
      opacity: "0.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "82",
      y1: "80",
      x2: "118",
      y2: "80",
      stroke: stroke,
      strokeWidth: "1.5",
      opacity: "0.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "82",
      y1: "88",
      x2: "118",
      y2: "88",
      stroke: stroke,
      strokeWidth: "1.5",
      opacity: "0.4"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "140",
      cy: "120",
      rx: "28",
      ry: "22",
      fill: color,
      stroke: stroke,
      strokeWidth: "2.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "122",
      y1: "112",
      x2: "158",
      y2: "112",
      stroke: stroke,
      strokeWidth: "1.5",
      opacity: "0.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "122",
      y1: "120",
      x2: "158",
      y2: "120",
      stroke: stroke,
      strokeWidth: "1.5",
      opacity: "0.4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "122",
      y1: "128",
      x2: "158",
      y2: "128",
      stroke: stroke,
      strokeWidth: "1.5",
      opacity: "0.4"
    }));
  }
  // generic farfalle-ish fallback
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 200",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 30 80 L 30 120 L 90 100 L 90 100 L 30 80 Z",
    fill: color,
    stroke: stroke,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "85",
    y: "85",
    width: "30",
    height: "30",
    fill: color,
    stroke: stroke,
    strokeWidth: "2",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 110 80 L 170 60 L 170 140 L 110 120 Z",
    fill: color,
    stroke: stroke,
    strokeWidth: "2"
  }));
}

// === LOGO ===
function Logo({
  size = 28,
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "logo-wrap"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/Logo.png",
    alt: "Pawsta",
    style: {
      height: size * 1.6,
      width: "auto",
      display: "block",
      filter: dark ? "drop-shadow(0 1px 0 rgba(0,0,0,0.2))" : "none"
    }
  }));
}

// === ANNOUNCEMENT ===
function Announce() {
  const items = ["Free shipping over $50", "Hand-stitched in Boston", "Hidden crunch your pup will love", "Built for picky puppies", "Machine washable · crunch survives"];
  const repeated = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    className: "announce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "announce-track"
  }, repeated.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), t))));
}

// === NAV ===
function Nav({
  cartCount,
  onCartOpen,
  onScrollTo
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-inner"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onScrollTo("shop")
  }, "Shop"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onScrollTo("story")
  }, "Our Story"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onScrollTo("process")
  }, "How It's Made"), /*#__PURE__*/React.createElement("a", {
    onClick: () => onScrollTo("reviews")
  }, "Reviews")), /*#__PURE__*/React.createElement("a", {
    onClick: () => onScrollTo("top"),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    className: "nav-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav-icon-btn",
    "aria-label": "Search"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "nav-icon-btn",
    "aria-label": "Account"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21c0-4 4-7 8-7s8 3 8 7"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "nav-icon-btn",
    onClick: onCartOpen,
    "aria-label": "Cart"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3h2l3 13h12l2-9H6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "20",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "20",
    r: "1.5"
  })), /*#__PURE__*/React.createElement("span", null, "Cart"), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    className: "cart-count"
  }, cartCount)))));
}

// === HERO ===
function Hero({
  onShop,
  theme
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, /*#__PURE__*/React.createElement("span", {
    className: "yellow"
  }, "Pawsta"), " ", /*#__PURE__*/React.createElement("span", null, "for your\xA0pup!")), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "A soft plush on the outside, a satisfying crunch hidden inside. We designed it in Boston for our own picky puppy. She hasn't put it down\xA0since."), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onShop
  }, "Shop the Farfalle"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: () => document.getElementById("story").scrollIntoView({
      behavior: "smooth"
    })
  }, "Our story")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "1"), /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Signature Shape")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "100%"), /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Hand Stitched")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "4.8\u2605"), /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Avg. Rating")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "0"), /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Actual Carbs")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-pack"
  }, /*#__PURE__*/React.createElement("img", {
    className: "kona",
    src: "assets/Kona.webp",
    alt: "Kona with a Pawsta chew",
    fetchpriority: "high",
    decoding: "async"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "checker-border",
    style: {
      marginTop: 64
    }
  }));
}

// === STRIPE BANNER ===
function Stripe() {
  const items = ["Hidden crunch inside", "Hand stitched in Boston", "Machine washable", "Built for picky pups", "Made with love"];
  const star = /*#__PURE__*/React.createElement("svg", {
    className: "star",
    viewBox: "0 0 24 24",
    fill: "#FFCB31",
    stroke: "#FAF3E3",
    strokeWidth: "1"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2 L14.5 8.5 L21 9 L16 13.5 L17.5 20 L12 16.5 L6.5 20 L8 13.5 L3 9 L9.5 8.5 Z"
  }));
  const repeated = [...items, ...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    className: "stripe"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stripe-track"
  }, repeated.map((t, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: `item ${i % 2 ? "outline" : ""}`
  }, t), star))));
}

// === PRODUCT CARD ===
function ProductCard({
  product,
  onOpen,
  onQuickAdd
}) {
  const badgeClass = product.badge === "New" ? "new" : product.badge === "Small Dog" ? "small" : "";
  return /*#__PURE__*/React.createElement("article", {
    className: "card",
    onClick: () => onOpen(product)
  }, product.badge && /*#__PURE__*/React.createElement("span", {
    className: `card-badge ${badgeClass}`
  }, product.badge), /*#__PURE__*/React.createElement("div", {
    className: "card-media"
  }, product.image ? /*#__PURE__*/React.createElement("img", {
    src: product.image,
    alt: product.name
  }) : /*#__PURE__*/React.createElement("div", {
    className: "placeholder"
  }, /*#__PURE__*/React.createElement(PastaShape, {
    id: product.id,
    color: product.swatch
  })), /*#__PURE__*/React.createElement("button", {
    className: "card-quickadd",
    onClick: e => {
      e.stopPropagation();
      onQuickAdd(product);
    },
    "aria-label": "Quick add"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "card-italian"
  }, product.italian), /*#__PURE__*/React.createElement("h3", {
    className: "card-name"
  }, product.name), /*#__PURE__*/React.createElement("div", {
    className: "card-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "card-price"
  }, "$", product.price.toFixed(2)), /*#__PURE__*/React.createElement("span", {
    className: "card-rating"
  }, "\u2605 ", product.rating, " (", product.reviews, ")"))));
}

// === FEATURED PRODUCT (single hero product) ===
function FeaturedProduct({
  product,
  onAdd
}) {
  const [size, setSize] = useState(product.sizes[0]);
  const [inside, setInside] = useState(product.flavors[0]);
  const [qty, setQty] = useState(1);
  const gallery = [product.image, product.image2].filter(Boolean);
  const [activeImg, setActiveImg] = useState(product.image);
  return /*#__PURE__*/React.createElement("div", {
    className: "featured"
  }, /*#__PURE__*/React.createElement("div", {
    className: "featured-media"
  }, product.badge && /*#__PURE__*/React.createElement("span", {
    className: "card-badge"
  }, product.badge), /*#__PURE__*/React.createElement("img", {
    src: activeImg,
    alt: product.name,
    decoding: "async"
  }), gallery.length > 1 && /*#__PURE__*/React.createElement("div", {
    className: "featured-thumbs"
  }, gallery.map((src, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: `featured-thumb ${activeImg === src ? "active" : ""}`,
    onClick: () => setActiveImg(src),
    "aria-label": `View ${i === 0 ? "top" : "side"}`
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    loading: "lazy",
    decoding: "async"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "featured-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "card-italian"
  }, product.italian, " \xB7 /", product.name.split(" ")[0].toLowerCase(), "/"), /*#__PURE__*/React.createElement("h3", {
    className: "featured-name"
  }, product.name), /*#__PURE__*/React.createElement("div", {
    className: "featured-rating"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stars"
  }, "\u2605\u2605\u2605\u2605\u2606"), " ", product.rating, " \xB7 ", product.reviews, " reviews"), /*#__PURE__*/React.createElement("p", {
    className: "featured-desc"
  }, product.description), /*#__PURE__*/React.createElement("ul", {
    className: "featured-features"
  }, product.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f.t
  }, /*#__PURE__*/React.createElement("span", {
    className: "ff-dot"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, f.t, "."), " ", f.d)))), /*#__PURE__*/React.createElement("div", {
    className: "featured-buy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "featured-price"
  }, "$", product.price.toFixed(2)), /*#__PURE__*/React.createElement("div", {
    className: "qty-stepper"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(Math.max(1, qty - 1)),
    "aria-label": "Decrease quantity"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(Math.min(99, qty + 1)),
    "aria-label": "Increase quantity"
  }, "+")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      flex: 1,
      height: 56
    },
    onClick: () => onAdd(product, {
      size,
      flavor: inside,
      qty
    })
  }, "Add to cart \xB7 $", (product.price * qty).toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "featured-ship"
  }, "\u2713 One size, fits all pups \xB7 Free shipping over $50 \xB7 30 day happy pup guarantee")));
}

// === PRODUCT GRID ===
function ProductGrid({
  onOpen,
  onQuickAdd
}) {
  const products = window.PRODUCTS;
  const single = products.length === 1;
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "shop",
    style: {
      background: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, "The Shop \xB7 One perfect plush"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Meet the Farfalle."))), single ? /*#__PURE__*/React.createElement(FeaturedProduct, {
    product: products[0],
    onAdd: onQuickAdd
  }) : /*#__PURE__*/React.createElement("div", {
    className: "product-grid"
  }, products.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    product: p,
    onOpen: onOpen,
    onQuickAdd: onQuickAdd
  })))));
}

// === PROCESS ===
function Process() {
  const steps = [{
    n: "01",
    t: "Sketched",
    d: "Every Pawsta starts as a sketch at our kitchen table in Boston, usually with a puppy underfoot."
  }, {
    n: "02",
    t: "Stitched",
    d: "We cut, stuff, and double stitch each plush by hand, tucking a crinkle crunch liner inside the shell."
  }, {
    n: "03",
    t: "Crunch Tested",
    d: "Our chief tester is a very picky puppy named Kona. She personally approves every prototype before it ships."
  }, {
    n: "04",
    t: "Boxed",
    d: "Packed and shipped from Boston, usually within 24 hours. No middleman, no warehouse."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section process",
    id: "process"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, "How it's made"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "From sketch to\xA0slobber.")))), /*#__PURE__*/React.createElement("div", {
    className: "process-grid",
    style: {
      maxWidth: 1400,
      margin: "0 auto",
      borderTop: "1px dashed #001E43",
      borderBottom: "1px dashed #001E43"
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    className: "process-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "process-num"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "process-name"
  }, s.t), /*#__PURE__*/React.createElement("div", {
    className: "process-desc"
  }, s.d)))));
}

// === STORY ===
function Story() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section story",
    id: "story"
  }, /*#__PURE__*/React.createElement("div", {
    className: "story-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "story-image"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/story-kona.webp",
    alt: "Kona the mini goldendoodle with her Pawsta Farfalle plush toy",
    loading: "lazy",
    decoding: "async"
  }), /*#__PURE__*/React.createElement("div", {
    className: "stamp"
  }, /*#__PURE__*/React.createElement("span", {
    className: "est"
  }, "Est. Boston"), /*#__PURE__*/React.createElement("span", {
    className: "big"
  }, "2024"), /*#__PURE__*/React.createElement("span", {
    className: "small"
  }, "Made by hand"))), /*#__PURE__*/React.createElement("div", {
    className: "story-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, "Our story"), /*#__PURE__*/React.createElement("h2", null, "It started with one very picky\xA0puppy."), /*#__PURE__*/React.createElement("p", null, "When we brought our puppy home, we did what every new dog owner does. We bought every toy at the pet store. She ignored all of them. The squeaky ones, the rope ones, the squeaky rope ones. Nothing held her attention for more than a minute, and the selection was honestly pretty uninspired."), /*#__PURE__*/React.createElement("p", null, "So we started making our own at the kitchen table. Somewhere along the way we tucked a layer of crinkle crunch material inside a soft plush bow tie, and that was the moment. She was obsessed. She carried it everywhere, crunched it for hours, and finally left our actual shoes alone."), /*#__PURE__*/React.createElement("p", null, "That little farfalle became Pawsta. Every one is still hand stitched in Boston, built to survive a picky puppy, and made with the exact same crunch that started it all."), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-dark",
    style: {
      marginTop: 8
    }
  }, "Read the long version"))));
}

// === REVIEWS ===
function Reviews() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section reviews",
    id: "reviews"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, "From the pack"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Reviews from very serious\xA0customers."))), /*#__PURE__*/React.createElement("div", {
    className: "review-grid"
  }, window.REVIEWS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "review-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "review-stars"
  }, "★".repeat(r.rating), /*#__PURE__*/React.createElement("span", {
    className: "empty"
  }, "★".repeat(5 - r.rating))), /*#__PURE__*/React.createElement("p", {
    className: "review-text"
  }, "\"", r.text, "\""), /*#__PURE__*/React.createElement("div", {
    className: "review-author"
  }, /*#__PURE__*/React.createElement("div", {
    className: "review-dog"
  }, r.name, " \xB7 ", r.breed), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, r.owner)))))));
}

// === FOOTER ===
function Footer() {
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const [shake, setShake] = useState(false);
  const subscribe = () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setSignedUp(true);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };
  const jump = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    size: 24
  }), /*#__PURE__*/React.createElement("div", {
    className: "footer-tag"
  }, "\"Built for one very picky\xA0puppy.\"", /*#__PURE__*/React.createElement("br", null), "And now, for\xA0yours."), signedUp ? /*#__PURE__*/React.createElement("div", {
    className: "newsletter-done"
  }, "\u2713 You're on the list. Kona approves.") : /*#__PURE__*/React.createElement("div", {
    className: `newsletter ${shake ? "shake" : ""}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "your@email.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter") subscribe();
    },
    "aria-label": "Email address"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: subscribe
  }, "Sign me up")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.5,
      marginTop: 12,
      letterSpacing: "0.06em"
    }
  }, "We email rarely. New colors, restocks, the occasional puppy photo.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Shop"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => jump("shop")
  }, "The Farfalle Plush")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Gift Cards")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Bundles")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Coming Soon")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Pawsta"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => jump("story")
  }, "Our Story")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => jump("process")
  }, "How It's Made")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => jump("reviews")
  }, "The Pack")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Press")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Wholesale")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Help"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Contact")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Shipping")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Returns")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Care Guide")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "FAQ"))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Pawsta Co. \xB7 Boston, MA \xB7 Hand Stitched Plush"), /*#__PURE__*/React.createElement("span", null, "Supervise your pet \xB7 Remove tags before play \xB7 Made with love"))));
}

// === PRODUCT MODAL ===
function ProductModal({
  product,
  onClose,
  onAdd
}) {
  const [size, setSize] = useState(product.sizes[0]);
  const [flavor, setFlavor] = useState(product.flavors[0]);
  const [qty, setQty] = useState(1);
  useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: onClose,
    "aria-label": "Close"
  }, "\u2715"), /*#__PURE__*/React.createElement("div", {
    className: "modal-media"
  }, product.image ? /*#__PURE__*/React.createElement("img", {
    src: product.image,
    alt: product.name
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: "80%",
      height: "80%"
    }
  }, /*#__PURE__*/React.createElement(PastaShape, {
    id: product.id,
    color: product.swatch
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "modal-italian"
  }, product.italian, " \xB7 /", product.name.split(" ")[0].toLowerCase(), "/"), /*#__PURE__*/React.createElement("h2", {
    className: "modal-title"
  }, product.name), /*#__PURE__*/React.createElement("p", {
    className: "modal-tagline"
  }, product.tagline), /*#__PURE__*/React.createElement("div", {
    className: "modal-price-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "modal-price"
  }, "$", product.price.toFixed(2)), /*#__PURE__*/React.createElement("span", {
    className: "modal-rating"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), product.rating, " (", product.reviews, " reviews)")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--ink)",
      opacity: 0.85
    }
  }, product.description), /*#__PURE__*/React.createElement("div", {
    className: "option-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "option-label"
  }, /*#__PURE__*/React.createElement("span", null, "Size"), /*#__PURE__*/React.createElement("span", {
    className: "picked"
  }, size)), /*#__PURE__*/React.createElement("div", {
    className: "option-pills"
  }, product.sizes.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    className: `option-pill ${size === s ? "active" : ""}`,
    onClick: () => setSize(s)
  }, s)))), /*#__PURE__*/React.createElement("div", {
    className: "option-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "option-label"
  }, /*#__PURE__*/React.createElement("span", null, "Inside"), /*#__PURE__*/React.createElement("span", {
    className: "picked"
  }, flavor)), /*#__PURE__*/React.createElement("div", {
    className: "option-pills"
  }, product.flavors.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: `option-pill ${flavor === f ? "active" : ""}`,
    onClick: () => setFlavor(f)
  }, f)))), /*#__PURE__*/React.createElement("div", {
    className: "qty-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qty-stepper"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(Math.max(1, qty - 1))
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(qty + 1)
  }, "+")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary modal-add",
    onClick: () => {
      onAdd(product, {
        size,
        flavor,
        qty
      });
      onClose();
    }
  }, "Add to cart \xB7 $", (product.price * qty).toFixed(2))), /*#__PURE__*/React.createElement("dl", {
    className: "modal-meta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Durability"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("span", {
    className: "durability-bar"
  }, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: `pip ${i <= product.durability ? "on" : ""}`
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Avg. Play Time"), /*#__PURE__*/React.createElement("dd", null, product.chewTime, " min/session")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Materials"), /*#__PURE__*/React.createElement("dd", null, product.materials)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Net Weight"), /*#__PURE__*/React.createElement("dd", null, product.weight))))));
}

// === CART DRAWER ===
function CartDrawer({
  cart,
  onClose,
  onUpdateQty,
  onRemove
}) {
  useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const FREE_SHIP = 50;
  const remaining = Math.max(0, FREE_SHIP - subtotal);
  const progress = Math.min(100, subtotal / FREE_SHIP * 100);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "cart-backdrop",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("aside", {
    className: "cart-drawer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-header"
  }, /*#__PURE__*/React.createElement("h3", null, "Your basket"), /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    style: {
      position: "static"
    },
    onClick: onClose
  }, "\u2715")), cart.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "cart-empty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, "No pasta yet."), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "Your basket is emptier than a cooked pot on Sunday night. Pick a shape."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onClose
  }, "Start shopping")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "cart-items"
  }, cart.map(item => {
    const product = window.PRODUCTS.find(p => p.id === item.productId);
    return /*#__PURE__*/React.createElement("div", {
      key: item.lineId,
      className: "cart-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "thumb"
    }, product.image ? /*#__PURE__*/React.createElement("img", {
      src: product.image,
      alt: item.name
    }) : /*#__PURE__*/React.createElement(PastaShape, {
      id: product.id,
      color: product.swatch
    })), /*#__PURE__*/React.createElement("div", {
      className: "info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "name"
    }, item.name), /*#__PURE__*/React.createElement("div", {
      className: "opts"
    }, item.size, " \xB7 ", item.flavor), /*#__PURE__*/React.createElement("div", {
      className: "qty-mini"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onUpdateQty(item.lineId, item.qty - 1)
    }, "\u2212"), /*#__PURE__*/React.createElement("span", {
      className: "v"
    }, item.qty), /*#__PURE__*/React.createElement("button", {
      onClick: () => onUpdateQty(item.lineId, item.qty + 1)
    }, "+"))), /*#__PURE__*/React.createElement("div", {
      className: "cart-right"
    }, /*#__PURE__*/React.createElement("div", {
      className: "price"
    }, "$", (item.price * item.qty).toFixed(2)), /*#__PURE__*/React.createElement("button", {
      className: "remove",
      onClick: () => onRemove(item.lineId)
    }, "Remove")));
  })), /*#__PURE__*/React.createElement("div", {
    className: "cart-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shipping-bar",
    style: {
      flexDirection: "column",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, remaining > 0 ? `$${remaining.toFixed(2)} from free shipping` : "🎉 Free shipping unlocked!"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "JetBrains Mono",
      opacity: 0.7
    }
  }, "$", FREE_SHIP)), /*#__PURE__*/React.createElement("div", {
    className: "progress",
    style: {
      "--ship-progress": `${progress}%`
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "cart-totals"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Subtotal"), /*#__PURE__*/React.createElement("span", null, "$", subtotal.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "cart-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Shipping"), /*#__PURE__*/React.createElement("span", null, subtotal >= FREE_SHIP ? "Free" : "$6.00")), /*#__PURE__*/React.createElement("div", {
    className: "cart-row total"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Total"), /*#__PURE__*/React.createElement("span", null, "$", (subtotal + (subtotal >= FREE_SHIP ? 0 : 6)).toFixed(2)))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      width: "100%",
      height: 56
    }
  }, "Checkout")))));
}

// === TOAST ===
function Toast({
  message
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "toast"
  }, /*#__PURE__*/React.createElement("span", {
    className: "check"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L20 7"
  }))), message);
}
Object.assign(window, {
  PastaShape,
  Logo,
  Announce,
  Nav,
  Hero,
  Stripe,
  ProductCard,
  FeaturedProduct,
  ProductGrid,
  Process,
  Story,
  Reviews,
  Footer,
  ProductModal,
  CartDrawer,
  Toast
});
})();
