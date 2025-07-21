import React from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

interface CartProps {
  onClose: () => void;
  isDarkTheme?: boolean;
}

const Cart: React.FC<CartProps> = ({ onClose, isDarkTheme = false }) => {
  const { state, clearCart } = useCart();
  const navigate = useNavigate();
  
  // Debug: log cart state
  console.log('Cart component - Cart state:', state);

  if (state.items.length === 0) {
    return (
      <div className="p-3">
        <div className="mb-2">
          <h3 className={`text-lg font-elegant font-medium ${isDarkTheme ? 'text-gray-100' : 'text-gray-800'}`}>Shopping Cart</h3>
        </div>
        
        <div className="text-center py-4">
          <div className={`w-16 h-16 mx-auto mb-4 ${isDarkTheme ? 'text-gray-500' : 'text-gray-300'}`}>
            <span className="text-6xl transform scale-x-[-1]">🛒</span>
          </div>
          <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>Your cart is empty</p>
          <p className={`text-xs mt-1 ${isDarkTheme ? 'text-gray-500' : 'text-gray-400'}`}>Add some products to get started</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-3">
      {/* Header */}
      <div className="mb-2">
        <h3 className={`text-lg font-elegant font-medium ${isDarkTheme ? 'text-gray-100' : 'text-gray-800'}`}>Shopping Cart</h3>
      </div>

      {/* Cart Items */}
      <div className="max-h-32 overflow-y-auto mb-2">
        {state.items.map((item) => (
          <CartItem key={item.id} item={item} isDarkTheme={isDarkTheme} />
        ))}
      </div>

      {/* Cart Summary */}
      <div className={`border-t pt-4 ${isDarkTheme ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex justify-between items-center mb-2">
          <span className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>Total ({state.itemCount} items):</span>
          <span className={`font-semibold text-lg ${isDarkTheme ? 'text-gray-100' : 'text-gray-800'}`}>${state.total.toFixed(2)}</span>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={clearCart}
            className={`flex-1 px-3 py-1.5 text-sm rounded-lg transition-colors duration-200 cursor-pointer ${
              isDarkTheme 
                ? 'text-gray-300 border border-gray-600 hover:bg-gray-700' 
                : 'text-gray-600 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Clear Cart
          </button>
          <button
            onClick={() => {
              onClose();
              navigate('/checkout');
            }}
            className="flex-1 px-3 py-1.5 text-sm bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 font-semibold cursor-pointer"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart; 