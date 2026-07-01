// Pawsta storefront components
const { useState, useEffect, useMemo, useRef } = React;

// === Pasta-shape SVG placeholders (used when no image) ===
function PastaShape({ id, color = "#E8C896" }) {
  const stroke = "#001E43";
  if (id === "rigatoni") {
    return (
      <svg viewBox="0 0 200 200" fill="none">
        <ellipse cx="100" cy="100" rx="55" ry="80" fill={color} stroke={stroke} strokeWidth="3" />
        <ellipse cx="100" cy="40" rx="55" ry="14" fill={color} stroke={stroke} strokeWidth="3" />
        <ellipse cx="100" cy="40" rx="42" ry="9" fill="#fff" opacity="0.4" />
        {[60, 72, 84, 96, 108, 120, 132].map((y) =>
        <line key={y} x1="50" y1={y} x2="150" y2={y} stroke={stroke} strokeWidth="1.5" opacity="0.35" />
        )}
        <ellipse cx="100" cy="180" rx="55" ry="14" fill={color} stroke={stroke} strokeWidth="3" />
      </svg>);

  }
  if (id === "fusilli") {
    return (
      <svg viewBox="0 0 200 200" fill="none">
        <path d="M 80 30 Q 130 50 80 70 Q 130 90 80 110 Q 130 130 80 150 Q 130 170 80 180" stroke={color} strokeWidth="36" strokeLinecap="round" fill="none" />
        <path d="M 80 30 Q 130 50 80 70 Q 130 90 80 110 Q 130 130 80 150 Q 130 170 80 180" stroke={stroke} strokeWidth="38" strokeLinecap="round" fill="none" opacity="0.0" />
        <path d="M 80 30 Q 130 50 80 70 Q 130 90 80 110 Q 130 130 80 150 Q 130 170 80 180" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>);

  }
  if (id === "spaghetti") {
    return (
      <svg viewBox="0 0 200 200" fill="none">
        {[40, 55, 70, 85, 100, 115, 130, 145, 160].map((x, i) =>
        <path key={i} d={`M ${x} 20 Q ${x + (i % 2 ? 6 : -6)} 100 ${x + (i % 3 ? -3 : 5)} 180`} stroke={color} strokeWidth="3" fill="none" />
        )}
        <rect x="30" y="80" width="140" height="40" fill="#CC0000" stroke={stroke} strokeWidth="2" />
        <text x="100" y="106" textAnchor="middle" fontFamily="Fraunces, serif" fontStyle="italic" fontWeight="900" fontSize="20" fill="#FAF3E3">PAWSTA</text>
      </svg>);

  }
  if (id === "lasagna") {
    return (
      <svg viewBox="0 0 200 200" fill="none">
        <rect x="30" y="50" width="140" height="100" fill={color} stroke={stroke} strokeWidth="3" rx="4" />
        <path d="M 30 50 L 35 45 L 40 50 L 45 45 L 50 50 L 55 45 L 60 50 L 65 45 L 70 50 L 75 45 L 80 50 L 85 45 L 90 50 L 95 45 L 100 50 L 105 45 L 110 50 L 115 45 L 120 50 L 125 45 L 130 50 L 135 45 L 140 50 L 145 45 L 150 50 L 155 45 L 160 50 L 165 45 L 170 50" stroke={stroke} strokeWidth="2" fill={color} />
        <path d="M 30 150 L 35 155 L 40 150 L 45 155 L 50 150 L 55 155 L 60 150 L 65 155 L 70 150 L 75 155 L 80 150 L 85 155 L 90 150 L 95 155 L 100 150 L 105 155 L 110 150 L 115 155 L 120 150 L 125 155 L 130 150 L 135 155 L 140 150 L 145 155 L 150 150 L 155 155 L 160 150 L 165 155 L 170 150" stroke={stroke} strokeWidth="2" fill={color} />
        <line x1="30" y1="80" x2="170" y2="80" stroke={stroke} strokeWidth="1" opacity="0.3" />
        <line x1="30" y1="120" x2="170" y2="120" stroke={stroke} strokeWidth="1" opacity="0.3" />
      </svg>);

  }
  if (id === "orecchiette") {
    return (
      <svg viewBox="0 0 200 200" fill="none">
        <ellipse cx="65" cy="80" rx="32" ry="28" fill={color} stroke={stroke} strokeWidth="2.5" />
        <ellipse cx="65" cy="78" rx="22" ry="18" fill={stroke} opacity="0.15" />
        <ellipse cx="135" cy="80" rx="32" ry="28" fill={color} stroke={stroke} strokeWidth="2.5" />
        <ellipse cx="135" cy="78" rx="22" ry="18" fill={stroke} opacity="0.15" />
        <ellipse cx="100" cy="135" rx="32" ry="28" fill={color} stroke={stroke} strokeWidth="2.5" />
        <ellipse cx="100" cy="133" rx="22" ry="18" fill={stroke} opacity="0.15" />
      </svg>);

  }
  if (id === "gnocchi") {
    return (
      <svg viewBox="0 0 200 200" fill="none">
        <ellipse cx="60" cy="100" rx="28" ry="22" fill={color} stroke={stroke} strokeWidth="2.5" />
        <line x1="42" y1="92" x2="78" y2="92" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
        <line x1="42" y1="100" x2="78" y2="100" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
        <line x1="42" y1="108" x2="78" y2="108" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
        <ellipse cx="100" cy="80" rx="28" ry="22" fill={color} stroke={stroke} strokeWidth="2.5" />
        <line x1="82" y1="72" x2="118" y2="72" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
        <line x1="82" y1="80" x2="118" y2="80" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
        <line x1="82" y1="88" x2="118" y2="88" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
        <ellipse cx="140" cy="120" rx="28" ry="22" fill={color} stroke={stroke} strokeWidth="2.5" />
        <line x1="122" y1="112" x2="158" y2="112" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
        <line x1="122" y1="120" x2="158" y2="120" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
        <line x1="122" y1="128" x2="158" y2="128" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
      </svg>);

  }
  // generic farfalle-ish fallback
  return (
    <svg viewBox="0 0 200 200" fill="none">
      <path d="M 30 80 L 30 120 L 90 100 L 90 100 L 30 80 Z" fill={color} stroke={stroke} strokeWidth="2" />
      <rect x="85" y="85" width="30" height="30" fill={color} stroke={stroke} strokeWidth="2" rx="3" />
      <path d="M 110 80 L 170 60 L 170 140 L 110 120 Z" fill={color} stroke={stroke} strokeWidth="2" />
    </svg>);

}

// === LOGO ===
function Logo({ size = 28, dark = false }) {
  return (
    <div className="logo-wrap">
      <img src="assets/Logo.png" alt="Pawsta" style={{ height: size * 1.6, width: "auto", display: "block", filter: dark ? "drop-shadow(0 1px 0 rgba(0,0,0,0.2))" : "none" }} />
    </div>);

}

// === ANNOUNCEMENT ===
function Announce() {
  const items = [
  "Free shipping over $50",
  "Hand-stitched in Boston",
  "Hidden crunch your pup will love",
  "Built for picky puppies",
  "Machine washable · crunch survives"];

  const repeated = [...items, ...items];
  return (
    <div className="announce">
      <div className="announce-track">
        {repeated.map((t, i) =>
        <span key={i}><span className="dot"></span>{t}</span>
        )}
      </div>
    </div>);

}

// === NAV ===
function Nav({ cartCount, onCartOpen, onScrollTo }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <nav className="nav-links">
          <a onClick={() => onScrollTo("shop")}>Shop</a>
          <a onClick={() => onScrollTo("story")}>Our Story</a>
          <a onClick={() => onScrollTo("process")}>How It's Made</a>
          <a onClick={() => onScrollTo("reviews")}>Reviews</a>
        </nav>
        <a onClick={() => onScrollTo("top")} style={{ cursor: "pointer" }}><Logo size={26} /></a>
        <div className="nav-actions">
          <button className="nav-icon-btn" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
          </button>
          <button className="nav-icon-btn" aria-label="Account">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" /></svg>
          </button>
          <button className="nav-icon-btn" onClick={onCartOpen} aria-label="Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 3h2l3 13h12l2-9H6" /><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /></svg>
            <span>Cart</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>);

}

// === HERO ===
function Hero({ onShop, theme }) {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div>
          <h1>
            <span className="red">Pawsta</span> <span>for your pup!</span>
          </h1>
          <p className="hero-sub">A soft plush on the outside, a satisfying crunch hidden inside. We designed it in Boston for our own picky puppy. She hasn't put it down since.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={onShop}>Shop the Farfalle →</button>
            <button className="btn btn-ghost" onClick={() => document.getElementById("story").scrollIntoView({ behavior: "smooth" })}>Our story</button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><span className="num">1</span><span className="label">Signature Shape</span></div>
            <div className="hero-stat"><span className="num">100%</span><span className="label">Hand Stitched</span></div>
            <div className="hero-stat"><span className="num">4.8★</span><span className="label">Avg. Rating</span></div>
            <div className="hero-stat"><span className="num">0</span><span className="label">Actual Carbs</span></div>
          </div>
        </div>
        <div className="hero-pack">
          <img className="kona" src="assets/Kona.png" alt="Kona with a Pawsta chew" />
        </div>
      </div>
      <div className="checker-border" style={{ marginTop: 64 }} />
    </section>);

}

// === STRIPE BANNER ===
function Stripe() {
  const items = ["Hidden crunch inside", "Hand stitched in Boston", "Machine washable", "Built for picky pups", "Made with love"];
  const star =
  <svg className="star" viewBox="0 0 24 24" fill="#FFCB31" stroke="#FAF3E3" strokeWidth="1"><path d="M12 2 L14.5 8.5 L21 9 L16 13.5 L17.5 20 L12 16.5 L6.5 20 L8 13.5 L3 9 L9.5 8.5 Z" /></svg>;

  const repeated = [...items, ...items, ...items];
  return (
    <div className="stripe">
      <div className="stripe-track">
        {repeated.map((t, i) =>
        <React.Fragment key={i}>
            <span className={`item ${i % 2 ? "outline" : ""}`}>{t}</span>
            {star}
          </React.Fragment>
        )}
      </div>
    </div>);

}

// === PRODUCT CARD ===
function ProductCard({ product, onOpen, onQuickAdd }) {
  const badgeClass = product.badge === "New" ? "new" : product.badge === "Small Dog" ? "small" : "";
  return (
    <article className="card" onClick={() => onOpen(product)}>
      {product.badge && <span className={`card-badge ${badgeClass}`}>{product.badge}</span>}
      <div className="card-media">
        {product.image ?
        <img src={product.image} alt={product.name} /> :
        <div className="placeholder"><PastaShape id={product.id} color={product.swatch} /></div>
        }
        <button className="card-quickadd" onClick={(e) => {e.stopPropagation();onQuickAdd(product);}} aria-label="Quick add">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
        </button>
      </div>
      <div className="card-body">
        <span className="card-italian">{product.italian}</span>
        <h3 className="card-name">{product.name}</h3>
        <div className="card-meta">
          <span className="card-price">${product.price.toFixed(2)}</span>
          <span className="card-rating">★ {product.rating} ({product.reviews})</span>
        </div>
      </div>
    </article>);

}

// === FEATURED PRODUCT (single hero product) ===
function FeaturedProduct({ product, onAdd }) {
  const [size, setSize] = useState(product.sizes[0]);
  const [inside, setInside] = useState(product.flavors[0]);
  const [qty, setQty] = useState(1);
  const gallery = [product.image, product.image2].filter(Boolean);
  const [activeImg, setActiveImg] = useState(product.image);
  return (
    <div className="featured">
      <div className="featured-media">
        {product.badge && <span className="card-badge">{product.badge}</span>}
        <img src={activeImg} alt={product.name} />
        {gallery.length > 1 &&
        <div className="featured-thumbs">
            {gallery.map((src, i) =>
          <button key={i} className={`featured-thumb ${activeImg === src ? "active" : ""}`} onClick={() => setActiveImg(src)} aria-label={`View ${i === 0 ? "top" : "side"}`}>
                <img src={src} alt="" />
              </button>
          )}
          </div>
        }
      </div>
      <div className="featured-body">
        <span className="card-italian">{product.italian} · /{product.name.split(" ")[0].toLowerCase()}/</span>
        <h3 className="featured-name">{product.name}</h3>
        <div className="featured-rating"><span className="stars">★★★★☆</span> {product.rating} · {product.reviews} reviews</div>
        <p className="featured-desc">{product.description}</p>

        <ul className="featured-features">
          {product.features.map((f) =>
          <li key={f.t}><span className="ff-dot" /><div><strong>{f.t}.</strong> {f.d}</div></li>
          )}
        </ul>

        <div className="featured-buy">
          <span className="featured-price">${product.price.toFixed(2)}</span>
          <div className="qty-stepper">
            <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
            <span className="val">{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>
          <button className="btn btn-primary" style={{ flex: 1, height: 56 }} onClick={() => onAdd(product, { size, flavor: inside, qty })}>
            Add to cart · ${(product.price * qty).toFixed(2)}
          </button>
        </div>
        <div className="featured-ship">✓ One size, fits all pups · Free shipping over $50 · 30 day happy pup guarantee</div>
      </div>
    </div>);

}

// === PRODUCT GRID ===
function ProductGrid({ onOpen, onQuickAdd }) {
  const products = window.PRODUCTS;
  const single = products.length === 1;
  return (
    <section className="section" id="shop" style={{ background: "var(--cream)" }}>
      <div className="section-inner">
        <div className="section-header">
          <div>
            <div className="section-eyebrow">The Shop · One perfect plush</div>
            <h2 className="section-title">Meet the Farfalle.</h2>
          </div>
        </div>
        {single ?
        <FeaturedProduct product={products[0]} onAdd={onQuickAdd} /> :
        <div className="product-grid">
            {products.map((p) => <ProductCard key={p.id} product={p} onOpen={onOpen} onQuickAdd={onQuickAdd} />)}
          </div>
        }
      </div>
    </section>);

}

// === PROCESS ===
function Process() {
  const steps = [
  { n: "01", t: "Sketched", d: "Every Pawsta starts as a sketch at our kitchen table in Boston, usually with a puppy underfoot." },
  { n: "02", t: "Stitched", d: "We cut, stuff, and double stitch each plush by hand, tucking a crinkle crunch liner inside the shell." },
  { n: "03", t: "Crunch Tested", d: "Our chief tester is a very picky puppy named Kona. She personally approves every prototype before it ships." },
  { n: "04", t: "Boxed", d: "Packed and shipped from Boston, usually within 24 hours. No middleman, no warehouse." }];

  return (
    <section className="section process" id="process">
      <div className="section-inner">
        <div className="section-header">
          <div>
            <div className="section-eyebrow">How it's made</div>
            <h2 className="section-title">From sketch to slobber.</h2>
          </div>
        </div>
      </div>
      <div className="process-grid" style={{ maxWidth: 1400, margin: "0 auto", borderTop: "1px dashed #001E43", borderBottom: "1px dashed #001E43" }}>
        {steps.map((s) =>
        <div key={s.n} className="process-step">
            <div className="process-num">{s.n}</div>
            <div className="process-name">{s.t}</div>
            <div className="process-desc">{s.d}</div>
          </div>
        )}
      </div>
    </section>);

}

// === STORY ===
function Story() {
  return (
    <section className="section story" id="story">
      <div className="story-inner">
        <div className="story-image">
          <div className="pattern"></div>
          <div className="stamp">
            <span className="est">Est. Boston</span>
            <span className="big">2024</span>
            <span>Made by hand</span>
            <span className="small">Boston, MA</span>
          </div>
        </div>
        <div className="story-text">
          <div className="section-eyebrow">Our story</div>
          <h2>It started with one very picky puppy.</h2>
          <p>
            When we brought our puppy home, we did what every new dog owner does. We bought every toy at the pet store. She ignored all of them. The squeaky ones, the rope ones, the squeaky rope ones. Nothing held her attention for more than a minute, and the selection was honestly pretty uninspired.
          </p>
          <p>
            So we started making our own at the kitchen table. Somewhere along the way we tucked a layer of crinkle crunch material inside a soft plush bow tie, and that was the moment. She was obsessed. She carried it everywhere, crunched it for hours, and finally left our actual shoes alone.
          </p>
          <p>
            That little farfalle became Pawsta. Every one is still hand stitched in Boston, built to survive a picky puppy, and made with the exact same crunch that started it all.
          </p>
          <a className="btn btn-dark" style={{ marginTop: 8 }}>Read the long version →</a>
        </div>
      </div>
    </section>);

}

// === REVIEWS ===
function Reviews() {
  return (
    <section className="section reviews" id="reviews">
      <div className="section-inner">
        <div className="section-header">
          <div>
            <div className="section-eyebrow">From the pack</div>
            <h2 className="section-title">Reviews from very serious customers.</h2>
          </div>
        </div>
        <div className="review-grid">
          {window.REVIEWS.map((r, i) =>
          <div key={i} className="review-card">
              <div className="review-stars">{"★".repeat(r.rating)}<span className="empty">{"★".repeat(5 - r.rating)}</span></div>
              <p className="review-text">"{r.text}"</p>
              <div className="review-author">
                <div className="review-dog">{r.name} · {r.breed}</div>
                <div style={{ marginTop: 4 }}>{r.owner}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// === FOOTER ===
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <Logo size={24} />
            <div className="footer-tag">"Built for one very picky puppy."<br />And now, for yours.</div>
            <div className="newsletter">
              <input type="email" placeholder="your@email.com" />
              <button>Sign me up</button>
            </div>
            <div style={{ fontSize: 11, opacity: 0.5, marginTop: 12, letterSpacing: "0.06em" }}>
              We email rarely. New colors, restocks, the occasional puppy photo.
            </div>
          </div>
          <div>
            <h4>Shop</h4>
            <ul>
              <li><a>The Farfalle Plush</a></li>
              <li><a>Gift Cards</a></li>
              <li><a>Bundles</a></li>
              <li><a>Coming Soon</a></li>
            </ul>
          </div>
          <div>
            <h4>Pawsta</h4>
            <ul>
              <li><a>Our Story</a></li>
              <li><a>How It's Made</a></li>
              <li><a>The Pack</a></li>
              <li><a>Press</a></li>
              <li><a>Wholesale</a></li>
            </ul>
          </div>
          <div>
            <h4>Help</h4>
            <ul>
              <li><a>Contact</a></li>
              <li><a>Shipping</a></li>
              <li><a>Returns</a></li>
              <li><a>Care Guide</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Pawsta Co. · Boston, MA · Hand Stitched Plush</span>
          <span>Supervise your pet · Remove tags before play · Made with love</span>
        </div>
      </div>
    </footer>);

}

// === PRODUCT MODAL ===
function ProductModal({ product, onClose, onAdd }) {
  const [size, setSize] = useState(product.sizes[0]);
  const [flavor, setFlavor] = useState(product.flavors[0]);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const onKey = (e) => {if (e.key === "Escape") onClose();};
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {document.removeEventListener("keydown", onKey);document.body.style.overflow = "";};
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-media">
          {product.image ?
          <img src={product.image} alt={product.name} /> :
          <div style={{ width: "80%", height: "80%" }}><PastaShape id={product.id} color={product.swatch} /></div>
          }
        </div>
        <div className="modal-body">
          <span className="modal-italian">{product.italian} · /{product.name.split(" ")[0].toLowerCase()}/</span>
          <h2 className="modal-title">{product.name}</h2>
          <p className="modal-tagline">{product.tagline}</p>
          <div className="modal-price-row">
            <span className="modal-price">${product.price.toFixed(2)}</span>
            <span className="modal-rating"><span className="stars">★★★★★</span>{product.rating} ({product.reviews} reviews)</span>
          </div>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "var(--ink)", opacity: 0.85 }}>{product.description}</p>

          <div className="option-group">
            <div className="option-label"><span>Size</span><span className="picked">{size}</span></div>
            <div className="option-pills">
              {product.sizes.map((s) =>
              <button key={s} className={`option-pill ${size === s ? "active" : ""}`} onClick={() => setSize(s)}>{s}</button>
              )}
            </div>
          </div>

          <div className="option-group">
            <div className="option-label"><span>Inside</span><span className="picked">{flavor}</span></div>
            <div className="option-pills">
              {product.flavors.map((f) =>
              <button key={f} className={`option-pill ${flavor === f ? "active" : ""}`} onClick={() => setFlavor(f)}>{f}</button>
              )}
            </div>
          </div>

          <div className="qty-row">
            <div className="qty-stepper">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span className="val">{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <button className="btn btn-primary modal-add" onClick={() => {onAdd(product, { size, flavor, qty });onClose();}}>
              Add to cart · ${(product.price * qty).toFixed(2)}
            </button>
          </div>

          <dl className="modal-meta">
            <div><dt>Durability</dt>
              <dd><span className="durability-bar">
                {[1, 2, 3, 4, 5].map((i) => <span key={i} className={`pip ${i <= product.durability ? "on" : ""}`} />)}
              </span></dd>
            </div>
            <div><dt>Avg. Play Time</dt><dd>{product.chewTime} min/session</dd></div>
            <div><dt>Materials</dt><dd>{product.materials}</dd></div>
            <div><dt>Net Weight</dt><dd>{product.weight}</dd></div>
          </dl>
        </div>
      </div>
    </div>);

}

// === CART DRAWER ===
function CartDrawer({ cart, onClose, onUpdateQty, onRemove }) {
  useEffect(() => {
    const onKey = (e) => {if (e.key === "Escape") onClose();};
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {document.removeEventListener("keydown", onKey);document.body.style.overflow = "";};
  }, [onClose]);

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const FREE_SHIP = 50;
  const remaining = Math.max(0, FREE_SHIP - subtotal);
  const progress = Math.min(100, subtotal / FREE_SHIP * 100);

  return (
    <React.Fragment>
      <div className="cart-backdrop" onClick={onClose} />
      <aside className="cart-drawer">
        <div className="cart-header">
          <h3>Your basket</h3>
          <button className="modal-close" style={{ position: "static" }} onClick={onClose}>✕</button>
        </div>
        {cart.length === 0 ?
        <div className="cart-empty">
            <div className="big">No pasta yet.</div>
            <div className="sub">Your basket is emptier than a cooked pot on Sunday night. Pick a shape.</div>
            <button className="btn btn-primary" onClick={onClose}>Start shopping</button>
          </div> :

        <React.Fragment>
            <div className="cart-items">
              {cart.map((item) => {
              const product = window.PRODUCTS.find((p) => p.id === item.productId);
              return (
                <div key={item.lineId} className="cart-item">
                    <div className="thumb">
                      {product.image ? <img src={product.image} alt={item.name} /> : <PastaShape id={product.id} color={product.swatch} />}
                    </div>
                    <div className="info">
                      <div className="name">{item.name}</div>
                      <div className="opts">{item.size} · {item.flavor}</div>
                      <div className="qty-mini">
                        <button onClick={() => onUpdateQty(item.lineId, item.qty - 1)}>−</button>
                        <span className="v">{item.qty}</span>
                        <button onClick={() => onUpdateQty(item.lineId, item.qty + 1)}>+</button>
                      </div>
                    </div>
                    <div className="cart-right">
                      <div className="price">${(item.price * item.qty).toFixed(2)}</div>
                      <button className="remove" onClick={() => onRemove(item.lineId)}>Remove</button>
                    </div>
                  </div>);

            })}
            </div>
            <div className="cart-footer">
              <div className="shipping-bar" style={{ flexDirection: "column", alignItems: "stretch" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>{remaining > 0 ? `$${remaining.toFixed(2)} from free shipping` : "🎉 Free shipping unlocked!"}</span>
                  <span style={{ fontFamily: "JetBrains Mono", opacity: 0.7 }}>${FREE_SHIP}</span>
                </div>
                <div className="progress" style={{ "--ship-progress": `${progress}%` }} />
              </div>
              <div className="cart-totals">
                <div className="cart-row"><span className="label">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="cart-row"><span className="label">Shipping</span><span>{subtotal >= FREE_SHIP ? "Free" : "$6.00"}</span></div>
                <div className="cart-row total"><span className="label">Total</span><span>${(subtotal + (subtotal >= FREE_SHIP ? 0 : 6)).toFixed(2)}</span></div>
              </div>
              <button className="btn btn-primary" style={{ width: "100%", height: 56 }}>Checkout →</button>
            </div>
          </React.Fragment>
        }
      </aside>
    </React.Fragment>);

}

// === TOAST ===
function Toast({ message }) {
  return (
    <div className="toast">
      <span className="check">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="M5 12l5 5L20 7" /></svg>
      </span>
      {message}
    </div>);

}

Object.assign(window, {
  PastaShape, Logo, Announce, Nav, Hero, Stripe,
  ProductCard, FeaturedProduct, ProductGrid, Process, Story, Reviews, Footer,
  ProductModal, CartDrawer, Toast
});