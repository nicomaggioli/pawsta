// Pawsta storefront — main app
const { useState, useEffect, useCallback } = React;

const TWEAKS_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "AlDente",
  "accentColor": "#FFCB31",
  "showAnnounce": true,
  "showStripe": true,
  "cardStyle": "Bordered",
  "darkHero": true
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = window.useTweaks(TWEAKS_DEFAULTS);
  const [cart, setCart] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Apply accent tweak
  useEffect(() => {
    document.documentElement.style.setProperty("--yellow", tweaks.accentColor);
  }, [tweaks.accentColor]);

  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  }, []);

  const addToCart = useCallback((product, opts = {}) => {
    const size = opts.size || product.sizes[0];
    const flavor = opts.flavor || product.flavors[0];
    const qty = opts.qty || 1;
    const lineId = `${product.id}-${size}-${flavor}`;
    setCart(prev => {
      const existing = prev.find(i => i.lineId === lineId);
      if (existing) {
        return prev.map(i => i.lineId === lineId ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, {
        lineId, productId: product.id, name: product.name,
        price: product.price, size, flavor, qty
      }];
    });
    showToast(`Added: ${product.name}`);
  }, [showToast]);

  const updateQty = useCallback((lineId, qty) => {
    if (qty < 1) {
      setCart(prev => prev.filter(i => i.lineId !== lineId));
    } else {
      setCart(prev => prev.map(i => i.lineId === lineId ? { ...i, qty } : i));
    }
  }, []);

  const removeItem = useCallback((lineId) => {
    setCart(prev => prev.filter(i => i.lineId !== lineId));
  }, []);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: id === "top" ? 0 : el.offsetTop - 80, behavior: "smooth" });
  }, []);

  const cardStyleClass = tweaks.cardStyle === "Bordered" ? "" : tweaks.cardStyle === "Soft" ? "cards-soft" : "cards-flat";

  return (
    <div className={cardStyleClass}>
      {tweaks.showAnnounce && <window.Announce/>}
      <window.Nav cartCount={cartCount} onCartOpen={() => setCartOpen(true)} onScrollTo={scrollTo}/>
      <window.Hero onShop={() => scrollTo("shop")} variant={tweaks.heroVariant}/>
      <window.ProductGrid onOpen={setModalProduct} onQuickAdd={addToCart}/>
      {tweaks.showStripe && <window.Stripe/>}
      <window.Process/>
      <window.Story/>
      <window.Reviews/>
      <window.Footer/>

      {modalProduct && (
        <window.ProductModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
          onAdd={addToCart}
        />
      )}
      {cartOpen && (
        <window.CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onUpdateQty={updateQty}
          onRemove={removeItem}
        />
      )}
      {toast && <window.Toast message={toast}/>}

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection title="Theme">
          <window.TweakColor label="Accent color" value={tweaks.accentColor} onChange={v => setTweak("accentColor", v)}/>
          <window.TweakRadio label="Hero variant" value={tweaks.heroVariant} options={["AlDente", "Classic"]} onChange={v => setTweak("heroVariant", v)}/>
          <window.TweakRadio label="Card style" value={tweaks.cardStyle} options={["Bordered", "Soft", "Flat"]} onChange={v => setTweak("cardStyle", v)}/>
        </window.TweakSection>
        <window.TweakSection title="Sections">
          <window.TweakToggle label="Announcement bar" value={tweaks.showAnnounce} onChange={v => setTweak("showAnnounce", v)}/>
          <window.TweakToggle label="Marquee stripe" value={tweaks.showStripe} onChange={v => setTweak("showStripe", v)}/>
        </window.TweakSection>
        <window.TweakSection title="Demo">
          <window.TweakButton label="Empty cart" onClick={() => setCart([])}/>
          <window.TweakButton label="Add 3 random items" onClick={() => {
            const sample = window.PRODUCTS.slice(0, 3);
            sample.forEach(p => addToCart(p, { qty: 1 }));
          }}/>
        </window.TweakSection>
      </window.TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
