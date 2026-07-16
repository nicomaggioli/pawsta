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
  // generic farfalle-ish fallback
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 200",
    fill: "none",
    "aria-hidden": "true"
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

// === NAV ===
function Nav({
  cartCount,
  onCartOpen
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-inner"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "nav-links",
    "aria-label": "Main"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#shop"
  }, "Shop"), /*#__PURE__*/React.createElement("a", {
    href: "#story"
  }, "Our Story"), /*#__PURE__*/React.createElement("a", {
    href: "#process"
  }, "How It's Made"), /*#__PURE__*/React.createElement("a", {
    href: "#reviews"
  }, "Reviews")), /*#__PURE__*/React.createElement("a", {
    href: "#top",
    "aria-label": "Pawsta home"
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    className: "nav-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav-icon-btn",
    onClick: onCartOpen,
    "aria-label": cartCount > 0 ? `Open basket, ${cartCount} item${cartCount === 1 ? "" : "s"}` : "Open basket"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    "aria-hidden": "true"
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
    className: "cart-count",
    "aria-hidden": "true"
  }, cartCount)))));
}

// === HERO ===
function Hero() {
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
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: "#shop"
  }, "Shop the Farfalle"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "#story"
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
  }, "24h"), /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Ships From Boston")), /*#__PURE__*/React.createElement("div", {
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
    alt: "A goldendoodle puppy in a play bow, carrying the Farfalle plush in her mouth",
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
  const items = ["Hidden crunch inside", "Designed in Boston", "Machine washable", "Built for picky pups", "Made with love"];
  const star = /*#__PURE__*/React.createElement("svg", {
    className: "star",
    viewBox: "0 0 24 24",
    fill: "#FFCB31",
    stroke: "#FAF3E3",
    strokeWidth: "1",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2 L14.5 8.5 L21 9 L16 13.5 L17.5 20 L12 16.5 L6.5 20 L8 13.5 L3 9 L9.5 8.5 Z"
  }));
  const repeated = [...items, ...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    className: "stripe",
    "aria-hidden": "true"
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
  onQuickAdd
}) {
  const badgeClass = product.badge === "New" ? "new" : product.badge === "Small Dog" ? "small" : "";
  return /*#__PURE__*/React.createElement("article", {
    className: "card"
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
    "aria-label": `Add ${product.name} to basket`
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    "aria-hidden": "true"
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
    "aria-label": `View from the ${i === 0 ? "top" : "side"}`
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    loading: "lazy",
    decoding: "async"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "featured-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "card-italian"
  }, "Farfalle. Italian for butterfly."), /*#__PURE__*/React.createElement("h3", {
    className: "featured-name"
  }, product.name), /*#__PURE__*/React.createElement("div", {
    className: "featured-rating"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stars",
    role: "img",
    "aria-label": `Rated ${product.rating} out of 5 stars`
  }, "\u2605\u2605\u2605\u2605\u2605"), " ", product.rating, " \xB7 ", product.reviews, " reviews"), /*#__PURE__*/React.createElement("p", {
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
    className: "val",
    "aria-live": "polite"
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
      qty
    })
  }, "Add to cart \xB7 $", (product.price * qty).toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "featured-ship"
  }, "\u2713 Ships from Boston in 24 hours \xB7 30-day happy pup guarantee \xB7 $6 flat shipping, free over $50"), /*#__PURE__*/React.createElement("div", {
    className: "featured-specs"
  }, "Plush shell \xB7 hidden crinkle liner \xB7 no-spill stuffing \xB7 one size \xB7 0.4 lb")));
}

// === STICKY BUY BAR ===
function StickyBuy({
  product,
  onAdd,
  visible
}) {
  if (!visible) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "sticky-buy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sb-name"
  }, product.name, " \xB7 $", product.price.toFixed(2)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary sb-btn",
    onClick: () => onAdd(product, {
      qty: 1
    })
  }, "Add to cart"));
}

// === PRODUCT GRID ===
function ProductGrid({
  onQuickAdd,
  buyRef
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
  }, "Meet the Farfalle."))), /*#__PURE__*/React.createElement("div", {
    ref: buyRef
  }, single ? /*#__PURE__*/React.createElement(FeaturedProduct, {
    product: products[0],
    onAdd: onQuickAdd
  }) : /*#__PURE__*/React.createElement("div", {
    className: "product-grid"
  }, products.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    product: p,
    onQuickAdd: onQuickAdd
  }))))));
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
    d: "Each plush is cut, stuffed, and double stitched, with a crinkle crunch liner tucked inside the shell."
  }, {
    n: "03",
    t: "Crunch Tested",
    d: "Our chief tester is a very picky puppy. If she loses interest, the design goes back to the drawing board."
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
  })), /*#__PURE__*/React.createElement("div", {
    className: "story-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, "Our story"), /*#__PURE__*/React.createElement("h2", null, "It started with one very picky\xA0puppy."), /*#__PURE__*/React.createElement("p", null, "When we brought our puppy home, we did what every new dog owner does. We bought every toy at the pet store. She ignored all of them. The squeaky ones, the rope ones, the squeaky rope ones. Nothing held her attention for more than a minute, and the selection was honestly pretty uninspired."), /*#__PURE__*/React.createElement("p", null, "So we started making our own at the kitchen table. Somewhere along the way we tucked a layer of crinkle crunch material inside a soft plush bow tie, and that was the moment. She was obsessed. She carried it everywhere, crunched it for hours, and finally left our actual shoes alone."), /*#__PURE__*/React.createElement("p", null, "That little farfalle became Pawsta. Every one is still designed in Boston, built to survive a picky puppy, and made with the exact same crunch that started it all."))));
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
  }, "Very serious\xA0customers."))), /*#__PURE__*/React.createElement("div", {
    className: "review-grid"
  }, window.REVIEWS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "review-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "review-stars",
    role: "img",
    "aria-label": `Rated ${r.rating} out of 5 stars`
  }, "★".repeat(r.rating), /*#__PURE__*/React.createElement("span", {
    className: "empty",
    "aria-hidden": "true"
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
  const cfg = window.PAWSTA_CONFIG || {};
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const [shake, setShake] = useState(false);
  const [err, setErr] = useState("");
  const subscribe = async () => {
    const v = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      setErr("That doesn't look like an email address.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setErr("");
    if (cfg.newsletterEndpoint) {
      try {
        const res = await fetch(cfg.newsletterEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            email: v
          })
        });
        if (!res.ok) throw new Error();
        setSignedUp(true);
      } catch {
        setErr("That didn't go through. Mind trying again?");
      }
    } else {
      // No list endpoint yet: hand off to a prefilled email so no address is silently dropped.
      window.location.href = `mailto:${cfg.supportEmail}?subject=${encodeURIComponent("Add me to the Pawsta list")}&body=${encodeURIComponent(`Please add ${v} to the newsletter. Thanks!`)}`;
      setSignedUp(true);
    }
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
  }, "\u2713 You're on the list. Kona approves.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `newsletter ${shake ? "shake" : ""}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "your@email.com",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
      if (err) setErr("");
    },
    onKeyDown: e => {
      if (e.key === "Enter") subscribe();
    },
    "aria-label": "Email address",
    "aria-invalid": !!err
  }), /*#__PURE__*/React.createElement("button", {
    onClick: subscribe
  }, "Sign me up")), err && /*#__PURE__*/React.createElement("div", {
    className: "newsletter-err",
    role: "alert"
  }, err)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.5,
      marginTop: 12,
      letterSpacing: "0.06em"
    }
  }, "We email rarely. New colors, restocks, the occasional puppy photo.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Shop"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#shop"
  }, "The Farfalle Plush")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Pawsta"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#story"
  }, "Our Story")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#process"
  }, "How It's Made")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#reviews"
  }, "The Pack")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Help"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: `mailto:${cfg.supportEmail}`
  }, "Contact")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#shop"
  }, "Shipping & Returns"))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Pawsta Co. \xB7 Designed in Boston, MA"), /*#__PURE__*/React.createElement("span", null, "Supervise play \xB7 Remove tags first"))));
}

// === CART DRAWER ===
function CartDrawer({
  cart,
  onClose,
  onUpdateQty,
  onRemove
}) {
  const cfg = window.PAWSTA_CONFIG || {};
  const closeRef = useRef(null);
  const [mailTried, setMailTried] = useState(false);
  useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    if (closeRef.current) closeRef.current.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const FREE_SHIP = 50;
  const remaining = Math.max(0, FREE_SHIP - subtotal);
  const progress = Math.min(100, subtotal / FREE_SHIP * 100);
  const price = (window.PRODUCTS[0] || {
    price: 12.98
  }).price;
  const moreToFree = Math.ceil(remaining / price);
  const checkout = () => {
    if (cfg.checkoutUrl) {
      const qty = cart.reduce((n, i) => n + i.qty, 0);
      window.location.assign(`${cfg.checkoutUrl}${cfg.checkoutUrl.includes("?") ? "&" : "?"}quantity=${qty}`);
    } else {
      const lines = cart.map(i => `${i.qty} × ${i.name} ($${(i.price * i.qty).toFixed(2)})`).join("\n");
      const total = (subtotal + (subtotal >= FREE_SHIP ? 0 : 6)).toFixed(2);
      window.location.href = `mailto:${cfg.supportEmail}?subject=${encodeURIComponent("Pawsta order")}&body=${encodeURIComponent(`Hi! I'd like to order:\n\n${lines}\n\nTotal with shipping: $${total}\n\nMy shipping address:\n`)}`;
      setMailTried(true);
    }
  };
  const goShop = () => {
    onClose();
    const el = document.getElementById("shop");
    if (el) window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "cart-backdrop",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("aside", {
    className: "cart-drawer",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Shopping basket"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-header"
  }, /*#__PURE__*/React.createElement("h3", null, "Your basket"), /*#__PURE__*/React.createElement("button", {
    ref: closeRef,
    className: "modal-close",
    style: {
      position: "static"
    },
    onClick: onClose,
    "aria-label": "Close basket"
  }, "\u2715")), cart.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "cart-empty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, "Your basket is empty."), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "The Farfalle is waiting."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: goShop
  }, "Meet the Farfalle")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
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
      alt: ""
    }) : /*#__PURE__*/React.createElement(PastaShape, {
      id: product.id,
      color: product.swatch
    })), /*#__PURE__*/React.createElement("div", {
      className: "info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "name"
    }, item.name), /*#__PURE__*/React.createElement("div", {
      className: "qty-mini"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onUpdateQty(item.lineId, item.qty - 1),
      "aria-label": `Decrease ${item.name} quantity`
    }, "\u2212"), /*#__PURE__*/React.createElement("span", {
      className: "v",
      "aria-live": "polite"
    }, item.qty), /*#__PURE__*/React.createElement("button", {
      onClick: () => onUpdateQty(item.lineId, item.qty + 1),
      "aria-label": `Increase ${item.name} quantity`
    }, "+"))), /*#__PURE__*/React.createElement("div", {
      className: "cart-right"
    }, /*#__PURE__*/React.createElement("div", {
      className: "price"
    }, "$", (item.price * item.qty).toFixed(2)), /*#__PURE__*/React.createElement("button", {
      className: "remove",
      onClick: () => onRemove(item.lineId),
      "aria-label": `Remove ${item.name} from basket`
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
  }, /*#__PURE__*/React.createElement("span", null, remaining > 0 ? `${moreToFree} more Farfalle${moreToFree === 1 ? "" : "s"} unlocks free shipping` : "🎉 Free shipping unlocked!"), /*#__PURE__*/React.createElement("span", {
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
    },
    onClick: checkout
  }, "Checkout"), !cfg.checkoutUrl && /*#__PURE__*/React.createElement("div", {
    className: "checkout-note"
  }, "Orders go by email while our card checkout is in the works. We confirm within a day.", mailTried && /*#__PURE__*/React.createElement("span", {
    className: "checkout-addr"
  }, /*#__PURE__*/React.createElement("br", null), "No email app opened? Write to ", /*#__PURE__*/React.createElement("a", {
    href: `mailto:${cfg.supportEmail}`
  }, cfg.supportEmail), " with your order."))))));
}

// === TOAST ===
function Toast({
  message,
  onView
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "toast",
    role: "status",
    "aria-live": "polite",
    onClick: onView
  }, /*#__PURE__*/React.createElement("span", {
    className: "check",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L20 7"
  }))), message, /*#__PURE__*/React.createElement("span", {
    className: "toast-action"
  }, "View basket \u2192"));
}
Object.assign(window, {
  PastaShape,
  Logo,
  Nav,
  Hero,
  Stripe,
  ProductCard,
  FeaturedProduct,
  StickyBuy,
  ProductGrid,
  Process,
  Story,
  Reviews,
  Footer,
  CartDrawer,
  Toast
});
})();
