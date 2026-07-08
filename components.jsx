// Pawsta storefront components
const { useState, useEffect, useMemo, useRef } = React;

// === Pasta-shape SVG placeholders (used when no image) ===
function PastaShape({ id, color = "#E8C896" }) {
  const stroke = "#001E43";
  // generic farfalle-ish fallback
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden="true">
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

// === NAV ===
function Nav({ cartCount, onCartOpen }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <nav className="nav-links" aria-label="Main">
          <a href="#shop">Shop</a>
          <a href="#story">Our Story</a>
          <a href="#process">How It's Made</a>
          <a href="#reviews">Reviews</a>
        </nav>
        <a href="#top" aria-label="Pawsta home"><Logo size={26} /></a>
        <div className="nav-actions">
          <button className="nav-icon-btn" onClick={onCartOpen} aria-label={cartCount > 0 ? `Open basket, ${cartCount} item${cartCount === 1 ? "" : "s"}` : "Open basket"}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M3 3h2l3 13h12l2-9H6" /><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /></svg>
            <span>Cart</span>
            {cartCount > 0 && <span className="cart-count" aria-hidden="true">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>);

}

// === HERO ===
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div>
          <h1>
            <span className="yellow">Pawsta</span> <span>for your&nbsp;pup!</span>
          </h1>
          <p className="hero-sub">A soft plush on the outside, a satisfying crunch hidden inside. We designed it in Boston for our own picky puppy. She hasn't put it down&nbsp;since.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#shop">Shop the Farfalle</a>
            <a className="btn btn-ghost" href="#story">Our story</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><span className="num">1</span><span className="label">Signature Shape</span></div>
            <div className="hero-stat"><span className="num">24h</span><span className="label">Ships From Boston</span></div>
            <div className="hero-stat"><span className="num">4.8★</span><span className="label">Avg. Rating</span></div>
            <div className="hero-stat"><span className="num">0</span><span className="label">Actual Carbs</span></div>
          </div>
        </div>
        <div className="hero-pack">
          <img className="kona" src="assets/Kona.webp" alt="A goldendoodle puppy in a play bow, carrying the Farfalle plush in her mouth" fetchpriority="high" decoding="async" />
        </div>
      </div>
      <div className="checker-border" style={{ marginTop: 64 }} />
    </section>);

}

// === STRIPE BANNER ===
function Stripe() {
  const items = ["Hidden crunch inside", "Designed in Boston", "Machine washable", "Built for picky pups", "Made with love"];
  const star =
  <svg className="star" viewBox="0 0 24 24" fill="#FFCB31" stroke="#FAF3E3" strokeWidth="1" aria-hidden="true"><path d="M12 2 L14.5 8.5 L21 9 L16 13.5 L17.5 20 L12 16.5 L6.5 20 L8 13.5 L3 9 L9.5 8.5 Z" /></svg>;

  const repeated = [...items, ...items, ...items];
  return (
    <div className="stripe" aria-hidden="true">
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
function ProductCard({ product, onQuickAdd }) {
  const badgeClass = product.badge === "New" ? "new" : product.badge === "Small Dog" ? "small" : "";
  return (
    <article className="card">
      {product.badge && <span className={`card-badge ${badgeClass}`}>{product.badge}</span>}
      <div className="card-media">
        {product.image ?
        <img src={product.image} alt={product.name} /> :
        <div className="placeholder"><PastaShape id={product.id} color={product.swatch} /></div>
        }
        <button className="card-quickadd" onClick={(e) => {e.stopPropagation();onQuickAdd(product);}} aria-label={`Add ${product.name} to basket`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
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
  const [qty, setQty] = useState(1);
  const gallery = [product.image, product.image2].filter(Boolean);
  const [activeImg, setActiveImg] = useState(product.image);
  return (
    <div className="featured">
      <div className="featured-media">
        {product.badge && <span className="card-badge">{product.badge}</span>}
        <img src={activeImg} alt={product.name} decoding="async" />
        {gallery.length > 1 &&
        <div className="featured-thumbs">
            {gallery.map((src, i) =>
          <button key={i} className={`featured-thumb ${activeImg === src ? "active" : ""}`} onClick={() => setActiveImg(src)} aria-label={`View from the ${i === 0 ? "top" : "side"}`}>
                <img src={src} alt="" loading="lazy" decoding="async" />
              </button>
          )}
          </div>
        }
      </div>
      <div className="featured-body">
        <span className="card-italian">Farfalle. Italian for butterfly.</span>
        <h3 className="featured-name">{product.name}</h3>
        <div className="featured-rating"><span className="stars" role="img" aria-label={`Rated ${product.rating} out of 5 stars`}>★★★★★</span> {product.rating} · {product.reviews} reviews</div>
        <p className="featured-desc">{product.description}</p>

        <ul className="featured-features">
          {product.features.map((f) =>
          <li key={f.t}><span className="ff-dot" /><div><strong>{f.t}.</strong> {f.d}</div></li>
          )}
        </ul>

        <div className="featured-buy">
          <span className="featured-price">${product.price.toFixed(2)}</span>
          <div className="qty-stepper">
            <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity">−</button>
            <span className="val" aria-live="polite">{qty}</span>
            <button onClick={() => setQty(Math.min(99, qty + 1))} aria-label="Increase quantity">+</button>
          </div>
          <button className="btn btn-primary" style={{ flex: 1, height: 56 }} onClick={() => onAdd(product, { qty })}>
            Add to cart · ${(product.price * qty).toFixed(2)}
          </button>
        </div>
        <div className="featured-ship">✓ Ships from Boston in 24 hours · 30-day happy pup guarantee · $6 flat shipping, free over $50</div>
        <div className="featured-specs">Plush shell · hidden crinkle liner · no-spill stuffing · one size · 0.4 lb</div>
      </div>
    </div>);

}

// === STICKY BUY BAR ===
function StickyBuy({ product, onAdd, visible }) {
  if (!visible) return null;
  return (
    <div className="sticky-buy">
      <span className="sb-name">{product.name} · ${product.price.toFixed(2)}</span>
      <button className="btn btn-primary sb-btn" onClick={() => onAdd(product, { qty: 1 })}>Add to cart</button>
    </div>);

}

// === PRODUCT GRID ===
function ProductGrid({ onQuickAdd, buyRef }) {
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
        <div ref={buyRef}>
          {single ?
          <FeaturedProduct product={products[0]} onAdd={onQuickAdd} /> :
          <div className="product-grid">
              {products.map((p) => <ProductCard key={p.id} product={p} onQuickAdd={onQuickAdd} />)}
            </div>
          }
        </div>
      </div>
    </section>);

}

// === PROCESS ===
function Process() {
  const steps = [
  { n: "01", t: "Sketched", d: "Every Pawsta starts as a sketch at our kitchen table in Boston, usually with a puppy underfoot." },
  { n: "02", t: "Stitched", d: "Each plush is cut, stuffed, and double stitched, with a crinkle crunch liner tucked inside the shell." },
  { n: "03", t: "Crunch Tested", d: "Our chief tester is a very picky puppy. If she loses interest, the design goes back to the drawing board." },
  { n: "04", t: "Boxed", d: "Packed and shipped from Boston, usually within 24 hours. No middleman, no warehouse." }];

  return (
    <section className="section process" id="process">
      <div className="section-inner">
        <div className="section-header">
          <div>
            <div className="section-eyebrow">How it's made</div>
            <h2 className="section-title">From sketch to&nbsp;slobber.</h2>
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
          <img src="assets/story-kona.webp" alt="Kona the mini goldendoodle with her Pawsta Farfalle plush toy" loading="lazy" decoding="async" />
        </div>
        <div className="story-text">
          <div className="section-eyebrow">Our story</div>
          <h2>It started with one very picky&nbsp;puppy.</h2>
          <p>
            When we brought our puppy home, we did what every new dog owner does. We bought every toy at the pet store. She ignored all of them. The squeaky ones, the rope ones, the squeaky rope ones. Nothing held her attention for more than a minute, and the selection was honestly pretty uninspired.
          </p>
          <p>
            So we started making our own at the kitchen table. Somewhere along the way we tucked a layer of crinkle crunch material inside a soft plush bow tie, and that was the moment. She was obsessed. She carried it everywhere, crunched it for hours, and finally left our actual shoes alone.
          </p>
          <p>
            That little farfalle became Pawsta. Every one is still designed in Boston, built to survive a picky puppy, and made with the exact same crunch that started it all.
          </p>
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
            <h2 className="section-title">Very serious&nbsp;customers.</h2>
          </div>
        </div>
        <div className="review-grid">
          {window.REVIEWS.map((r, i) =>
          <div key={i} className="review-card">
              <div className="review-stars" role="img" aria-label={`Rated ${r.rating} out of 5 stars`}>{"★".repeat(r.rating)}<span className="empty" aria-hidden="true">{"★".repeat(5 - r.rating)}</span></div>
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
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({ email: v })
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
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <Logo size={24} />
            <div className="footer-tag">"Built for one very picky&nbsp;puppy."<br />And now, for&nbsp;yours.</div>
            {signedUp ?
            <div className="newsletter-done">✓ You're on the list. Kona approves.</div> :
            <React.Fragment>
              <div className={`newsletter ${shake ? "shake" : ""}`}>
                <input type="email" placeholder="your@email.com" value={email}
                  onChange={(e) => {setEmail(e.target.value);if (err) setErr("");}}
                  onKeyDown={(e) => {if (e.key === "Enter") subscribe();}}
                  aria-label="Email address" aria-invalid={!!err} />
                <button onClick={subscribe}>Sign me up</button>
              </div>
              {err && <div className="newsletter-err" role="alert">{err}</div>}
            </React.Fragment>
            }
            <div style={{ fontSize: 11, opacity: 0.5, marginTop: 12, letterSpacing: "0.06em" }}>
              We email rarely. New colors, restocks, the occasional puppy photo.
            </div>
          </div>
          <div>
            <h4>Shop</h4>
            <ul>
              <li><a href="#shop">The Farfalle Plush</a></li>
            </ul>
          </div>
          <div>
            <h4>Pawsta</h4>
            <ul>
              <li><a href="#story">Our Story</a></li>
              <li><a href="#process">How It's Made</a></li>
              <li><a href="#reviews">The Pack</a></li>
            </ul>
          </div>
          <div>
            <h4>Help</h4>
            <ul>
              <li><a href={`mailto:${cfg.supportEmail}`}>Contact</a></li>
              <li><a href="#shop">Shipping &amp; Returns</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Pawsta Co. · Designed in Boston, MA</span>
          <span>Supervise play · Remove tags first</span>
        </div>
      </div>
    </footer>);

}

// === CART DRAWER ===
function CartDrawer({ cart, onClose, onUpdateQty, onRemove }) {
  const cfg = window.PAWSTA_CONFIG || {};
  const closeRef = useRef(null);
  useEffect(() => {
    const onKey = (e) => {if (e.key === "Escape") onClose();};
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    if (closeRef.current) closeRef.current.focus();
    return () => {document.removeEventListener("keydown", onKey);document.body.style.overflow = "";};
  }, [onClose]);

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const FREE_SHIP = 50;
  const remaining = Math.max(0, FREE_SHIP - subtotal);
  const progress = Math.min(100, subtotal / FREE_SHIP * 100);
  const price = (window.PRODUCTS[0] || { price: 12.98 }).price;
  const moreToFree = Math.ceil(remaining / price);

  const checkout = () => {
    if (cfg.checkoutUrl) {
      const qty = cart.reduce((n, i) => n + i.qty, 0);
      window.location.assign(`${cfg.checkoutUrl}${cfg.checkoutUrl.includes("?") ? "&" : "?"}quantity=${qty}`);
    } else {
      const lines = cart.map((i) => `${i.qty} × ${i.name} ($${(i.price * i.qty).toFixed(2)})`).join("\n");
      const total = (subtotal + (subtotal >= FREE_SHIP ? 0 : 6)).toFixed(2);
      window.location.href = `mailto:${cfg.supportEmail}?subject=${encodeURIComponent("Pawsta order")}&body=${encodeURIComponent(`Hi! I'd like to order:\n\n${lines}\n\nTotal with shipping: $${total}\n\nMy shipping address:\n`)}`;
    }
  };

  const goShop = () => {
    onClose();
    const el = document.getElementById("shop");
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <div className="cart-backdrop" onClick={onClose} />
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Shopping basket">
        <div className="cart-header">
          <h3>Your basket</h3>
          <button ref={closeRef} className="modal-close" style={{ position: "static" }} onClick={onClose} aria-label="Close basket">✕</button>
        </div>
        {cart.length === 0 ?
        <div className="cart-empty">
            <div className="big">Your basket is empty.</div>
            <div className="sub">The Farfalle is waiting.</div>
            <button className="btn btn-primary" onClick={goShop}>Meet the Farfalle</button>
          </div> :

        <React.Fragment>
            <div className="cart-items">
              {cart.map((item) => {
              const product = window.PRODUCTS.find((p) => p.id === item.productId);
              return (
                <div key={item.lineId} className="cart-item">
                    <div className="thumb">
                      {product.image ? <img src={product.image} alt="" /> : <PastaShape id={product.id} color={product.swatch} />}
                    </div>
                    <div className="info">
                      <div className="name">{item.name}</div>
                      <div className="qty-mini">
                        <button onClick={() => onUpdateQty(item.lineId, item.qty - 1)} aria-label={`Decrease ${item.name} quantity`}>−</button>
                        <span className="v" aria-live="polite">{item.qty}</span>
                        <button onClick={() => onUpdateQty(item.lineId, item.qty + 1)} aria-label={`Increase ${item.name} quantity`}>+</button>
                      </div>
                    </div>
                    <div className="cart-right">
                      <div className="price">${(item.price * item.qty).toFixed(2)}</div>
                      <button className="remove" onClick={() => onRemove(item.lineId)} aria-label={`Remove ${item.name} from basket`}>Remove</button>
                    </div>
                  </div>);

            })}
            </div>
            <div className="cart-footer">
              <div className="shipping-bar" style={{ flexDirection: "column", alignItems: "stretch" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>{remaining > 0 ? `${moreToFree} more Farfalle${moreToFree === 1 ? "" : "s"} unlocks free shipping` : "🎉 Free shipping unlocked!"}</span>
                  <span style={{ fontFamily: "JetBrains Mono", opacity: 0.7 }}>${FREE_SHIP}</span>
                </div>
                <div className="progress" style={{ "--ship-progress": `${progress}%` }} />
              </div>
              <div className="cart-totals">
                <div className="cart-row"><span className="label">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="cart-row"><span className="label">Shipping</span><span>{subtotal >= FREE_SHIP ? "Free" : "$6.00"}</span></div>
                <div className="cart-row total"><span className="label">Total</span><span>${(subtotal + (subtotal >= FREE_SHIP ? 0 : 6)).toFixed(2)}</span></div>
              </div>
              <button className="btn btn-primary" style={{ width: "100%", height: 56 }} onClick={checkout}>Checkout</button>
              {!cfg.checkoutUrl &&
              <div className="checkout-note">Orders go by email while our card checkout is in the works. We confirm within a day.</div>
              }
            </div>
          </React.Fragment>
        }
      </aside>
    </React.Fragment>);

}

// === TOAST ===
function Toast({ message, onView }) {
  return (
    <button className="toast" role="status" aria-live="polite" onClick={onView}>
      <span className="check" aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="M5 12l5 5L20 7" /></svg>
      </span>
      {message}
      <span className="toast-action">View basket →</span>
    </button>);

}

Object.assign(window, {
  PastaShape, Logo, Nav, Hero, Stripe,
  ProductCard, FeaturedProduct, StickyBuy, ProductGrid, Process, Story, Reviews, Footer,
  CartDrawer, Toast
});
