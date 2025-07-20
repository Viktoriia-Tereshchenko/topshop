import { type JSX } from "react";
import { useCart } from "../../hooks/useCart";

export default function Cart(): JSX.Element {
  const { cart, removeFromCart, changeQuantity, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10 text-xl">
        🛒 Your shopping cart is empty
      </p>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🛒 Cart</h1>
      <ul>
        {cart.map(({ product, quantity }) => (
          <li
            key={product.id}
            className="flex items-center gap-4 border p-4 rounded-lg border-blue-600 my-2"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-600">${product.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => changeQuantity(product.id, -1)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-secondary-600 hover:cursor-pointer"
                >
                  −
                </button>
                <span className="w-6 text-center">{quantity}</span>
                <button
                  onClick={() => changeQuantity(product.id, 1)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-secondary-600 hover:cursor-pointer"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="ml-4 text-secondary-700 hover:underline text-sm hover:cursor-pointer"
                >
                  remove
                </button>
              </div>
            </div>
            <div className="font-bold">
              ${(product.price * quantity).toFixed(2)}
            </div>
          </li>
        ))}
      </ul>

      <div className="text-right mt-6 text-xl font-bold">
        Итого: ${total.toFixed(2)}
      </div>

      <div className="flex justify-end items-center mt-4 space-x-2">
        <button
          onClick={clearCart}
          className=" bg-secondary-600  text-white rounded-md hover:bg-indigo-500 px-4 py-2 hover:cursor-pointer"
        >
          Clear cart
        </button>
        <button className=" bg-accent text-white rounded-md hover:bg-indigo-500 px-4 py-2 hover:cursor-pointer">
          Checkout
        </button>
      </div>
    </div>
  );
}
