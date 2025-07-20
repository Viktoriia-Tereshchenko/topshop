import { useState, type ReactNode } from "react";
import type { ProductForCard } from "../types";
import { CartContext, type CartItem } from "../context/CartContext";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

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

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
