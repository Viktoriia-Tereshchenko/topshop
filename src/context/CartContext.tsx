import { createContext } from "react";
import type { ProductForCard } from "../types";

export interface CartItem {
  product: ProductForCard;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: ProductForCard) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
