import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { CartItem as CartItemType } from '../../context/CartContext';
import { useCart } from '../../hooks/useCart';

interface CartItemProps {
  item: CartItemType;
  isDarkTheme?: boolean;
}

const CartItem: React.FC<CartItemProps> = ({ item, isDarkTheme = false }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const handleProductClick = () => {
    navigate(`/products/${item.id}`);
  };

  return (
    <div className={`flex items-center gap-3 py-3 border-b last:border-b-0 ${
      isDarkTheme ? 'border-gray-700' : 'border-gray-100'
    }`}>
      {/* Product Image - Clickable */}
      <div className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200" onClick={handleProductClick}>
        <img
          src={item.image}
          alt={item.title}
          className="w-12 h-12 object-cover rounded-lg"
        />
      </div>

      {/* Product Info - Clickable */}
      <div className={`flex-1 min-w-0 cursor-pointer transition-colors duration-200 ${
        isDarkTheme ? 'hover:text-indigo-400' : 'hover:text-blue-600'
      }`} onClick={handleProductClick}>
        <h4 className={`text-sm font-medium truncate ${
          isDarkTheme ? 'text-gray-100' : 'text-gray-800'
        }`}>
          {item.title}
        </h4>
        <p className={`text-xs ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>{item.category}</p>
        <p className={`text-sm font-semibold ${isDarkTheme ? 'text-gray-100' : 'text-gray-800'}`}>${item.price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className={`w-6 h-6 flex items-center justify-center rounded transition-colors duration-200 ${
            isDarkTheme 
              ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' 
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
          }`}
          disabled={item.quantity <= 1}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4" />
          </svg>
        </button>
        
        <span className={`text-sm font-medium min-w-[20px] text-center ${
          isDarkTheme ? 'text-gray-100' : 'text-gray-800'
        }`}>
          {item.quantity}
        </span>
        
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className={`w-6 h-6 flex items-center justify-center rounded transition-colors duration-200 ${
            isDarkTheme 
              ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' 
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className={`transition-colors duration-200 ${
          isDarkTheme ? 'text-red-400 hover:text-red-300' : 'text-red-500 hover:text-red-700'
        }`}
        aria-label="Remove item"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
};

export default CartItem; 