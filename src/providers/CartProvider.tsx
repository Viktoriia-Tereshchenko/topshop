import { useEffect, useState, type ReactNode } from "react";
import type { ProductForCard } from "../types";
import { CartContext, type CartItem } from "../context/CartContext";

const CART_KEY = "cart";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Loading from localStorage on mount
  useEffect(() => {
    const cartFromStorage = localStorage.getItem(CART_KEY);
    if (cartFromStorage) {
      setCart(JSON.parse(cartFromStorage));
    }
  }, []);

  // saving to localStorage when changing the cart
  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: ProductForCard) => {
    setCart((prev) => {
      const isExist = prev.find((item) => item.product.id === product.id);
      if (isExist) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const changeQuantity = (productId: number, count: number) => {
    setCart((prev) =>
      prev.map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + count }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, changeQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
