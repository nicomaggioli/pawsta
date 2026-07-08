(function(){
// Pawsta storefront — main app
const {
  useState,
  useEffect,
  useCallback,
  useRef
} = React;
const MAX_QTY = 99;
function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [pastBuy, setPastBuy] = useState(false);
  const buyRef = useRef(null);

  // Sticky buy bar: show once the featured buy block has scrolled out of view above
  useEffect(() => {
    const el = buyRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => {
      setPastBuy(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    }, {
      threshold: 0
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const toastTimer = useRef(null);
  const showToast = useCallback(msg => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3200);
  }, []);
  const addToCart = useCallback((product, opts = {}) => {
    const qty = opts.qty || 1;
    const lineId = product.id;
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
  const openCart = useCallback(() => {
    setToast(null);
    setCartOpen(true);
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.Nav, {
    cartCount: cartCount,
    onCartOpen: openCart
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.Hero, null), /*#__PURE__*/React.createElement(window.ProductGrid, {
    onQuickAdd: addToCart,
    buyRef: buyRef
  }), /*#__PURE__*/React.createElement(window.Stripe, null), /*#__PURE__*/React.createElement(window.Process, null), /*#__PURE__*/React.createElement(window.Story, null), /*#__PURE__*/React.createElement(window.Reviews, null)), /*#__PURE__*/React.createElement(window.Footer, null), /*#__PURE__*/React.createElement(window.StickyBuy, {
    product: window.PRODUCTS[0],
    onAdd: addToCart,
    visible: pastBuy && !cartOpen
  }), cartOpen && /*#__PURE__*/React.createElement(window.CartDrawer, {
    cart: cart,
    onClose: () => setCartOpen(false),
    onUpdateQty: updateQty,
    onRemove: removeItem
  }), toast && /*#__PURE__*/React.createElement(window.Toast, {
    message: toast,
    onView: openCart
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();
