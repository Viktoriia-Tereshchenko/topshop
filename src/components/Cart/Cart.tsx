import React from "react";
import { useCart } from "../../hooks/useCart";

const Cart: React.FC = () => {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10 text-xl">
        🛒 You shopping cart is empty
      </p>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Корзина</h1>
      <ul className="space-y-4">
        {cart.map(({ product, quantity }) => (
          <li
            key={product.id}
            className="flex items-center gap-4 border p-4 rounded-lg"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{product.title}</h3>
              <p>
                {quantity} x ${product.price}
              </p>
            </div>
            <div className="font-bold">${product.price * quantity}</div>
          </li>
        ))}
      </ul>
      <div className="text-right text-xl font-bold mt-6">Total: ${total}</div>
    </div>
  );
};

export default Cart;
