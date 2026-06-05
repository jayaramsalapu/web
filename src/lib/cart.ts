export interface CartItem {
  id: number;
  name: string;
  image: string;
  size: string;
  price: number;
  quantity: number;
  uniqueKey: string;
}

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("tm_solutions_cart");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Failed to read cart", e);
    return [];
  }
}

export function saveCart(cart: CartItem[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("tm_solutions_cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cart-change"));
  } catch (e) {
    console.error("Failed to save cart", e);
  }
}

export function addToCart(product: { id: number; name: string; image: string }, size: string, price: number) {
  const cart = getCart();
  const uniqueKey = `${product.id}-${size}`;
  const existing = cart.find(item => item.uniqueKey === uniqueKey);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      image: product.image,
      size,
      price,
      quantity: 1,
      uniqueKey
    });
  }
  saveCart(cart);
}

export function removeFromCart(uniqueKey: string) {
  const cart = getCart();
  const updated = cart.filter(item => item.uniqueKey !== uniqueKey);
  saveCart(updated);
}

export function updateQuantity(uniqueKey: string, delta: number) {
  const cart = getCart();
  const item = cart.find(i => i.uniqueKey === uniqueKey);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    const updated = cart.filter(i => i.uniqueKey !== uniqueKey);
    saveCart(updated);
  } else {
    saveCart(cart);
  }
}

export function clearCart() {
  saveCart([]);
}
