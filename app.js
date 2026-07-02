(function(){
// Pawsta storefront — main app
const {
  useState,
  useEffect,
  useCallback,
  useRef
} = React;
const MAX_QTY = 99;
const TWEAKS_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "AlDente",
  "accentColor": "#FFCB31",
  "showAnnounce": true,
  "showStripe": true,
  "cardStyle": "Bordered",
  "darkHero": true
} /*EDITMODE-END*/;
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
  const toastTimer = useRef(null);
  const showToast = useCallback(msg => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2200);
  }, []);
  const addToCart = useCallback((product, opts = {}) => {
    const size = opts.size || product.sizes[0];
    const flavor = opts.flavor || product.flavors[0];
    const qty = opts.qty || 1;
    const lineId = `${product.id}-${size}-${flavor}`;
    setCart(prev => {
      const existing = prev.find(i => i.lineId === lineId);
      if (existing) {
        return prev.map(i => i.lineId === lineId ? {
          ...i,
          qty: Math.min(MAX_QTY, i.qty + qty)
        } : i);
      }
      return [...prev, {
        lineId,
        productId: product.id,
        name: product.name,
        price: product.price,
        size,
        flavor,
        qty: Math.min(MAX_QTY, qty)
      }];
    });
    showToast(`Added: ${product.name}`);
  }, [showToast]);
  const updateQty = useCallback((lineId, qty) => {
    if (qty < 1) {
      setCart(prev => prev.filter(i => i.lineId !== lineId));
    } else {
      setCart(prev => prev.map(i => i.lineId === lineId ? {
        ...i,
        qty: Math.min(MAX_QTY, qty)
      } : i));
    }
  }, []);
  const removeItem = useCallback(lineId => {
    setCart(prev => prev.filter(i => i.lineId !== lineId));
  }, []);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const scrollTo = useCallback(id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: id === "top" ? 0 : el.offsetTop - 80,
      behavior: "smooth"
    });
  }, []);
  const cardStyleClass = tweaks.cardStyle === "Bordered" ? "" : tweaks.cardStyle === "Soft" ? "cards-soft" : "cards-flat";
  return /*#__PURE__*/React.createElement("div", {
    className: cardStyleClass
  }, /*#__PURE__*/React.createElement(window.Nav, {
    cartCount: cartCount,
    onCartOpen: () => setCartOpen(true),
    onScrollTo: scrollTo
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.Hero, {
    onShop: () => scrollTo("shop"),
    variant: tweaks.heroVariant
  }), /*#__PURE__*/React.createElement(window.ProductGrid, {
    onOpen: setModalProduct,
    onQuickAdd: addToCart
  }), tweaks.showStripe && /*#__PURE__*/React.createElement(window.Stripe, null), /*#__PURE__*/React.createElement(window.Process, null), /*#__PURE__*/React.createElement(window.Story, null), /*#__PURE__*/React.createElement(window.Reviews, null)), /*#__PURE__*/React.createElement(window.Footer, null), modalProduct && /*#__PURE__*/React.createElement(window.ProductModal, {
    product: modalProduct,
    onClose: () => setModalProduct(null),
    onAdd: addToCart
  }), cartOpen && /*#__PURE__*/React.createElement(window.CartDrawer, {
    cart: cart,
    onClose: () => setCartOpen(false),
    onUpdateQty: updateQty,
    onRemove: removeItem
  }), toast && /*#__PURE__*/React.createElement(window.Toast, {
    message: toast
  }), /*#__PURE__*/React.createElement(window.TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(window.TweakSection, {
    title: "Theme"
  }, /*#__PURE__*/React.createElement(window.TweakColor, {
    label: "Accent color",
    value: tweaks.accentColor,
    onChange: v => setTweak("accentColor", v)
  })), /*#__PURE__*/React.createElement(window.TweakSection, {
    title: "Sections"
  }, /*#__PURE__*/React.createElement(window.TweakToggle, {
    label: "Marquee stripe",
    value: tweaks.showStripe,
    onChange: v => setTweak("showStripe", v)
  })), /*#__PURE__*/React.createElement(window.TweakSection, {
    title: "Demo"
  }, /*#__PURE__*/React.createElement(window.TweakButton, {
    label: "Empty cart",
    onClick: () => setCart([])
  }), /*#__PURE__*/React.createElement(window.TweakButton, {
    label: "Add Farfalle to cart",
    onClick: () => {
      addToCart(window.PRODUCTS[0], {
        qty: 1
      });
    }
  }))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();
