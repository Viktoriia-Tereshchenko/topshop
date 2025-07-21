import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import Cart from '../Cart/Cart';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const CartIcon: React.FC = () => {
  const { state } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Определяем, находимся ли мы в админ-панели
  const isAdminPanel = location.pathname.startsWith('/admin');

  const handleMouseEnter = () => {
    setIsCartOpen(true);
  };

  const handleMouseLeave = () => {
    setIsCartOpen(false);
  };

  const handleViewCart = () => {
    setIsCartOpen(false);
    navigate(ROUTES.CART);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cart Icon */}
      <button
        className={`relative p-2 transition-colors duration-200 cursor-pointer focus:outline-none ${
          isAdminPanel 
            ? 'text-gray-300 hover:text-indigo-400' 
            : 'text-gray-700 hover:text-blue-600'
        }`}
        aria-label="Shopping cart"
      >
        <span className="text-2xl transform scale-x-[-1]">🛒</span>
        
        {/* Cart Badge */}
        {state.itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
            {state.itemCount > 99 ? '99+' : state.itemCount}
          </span>
        )}
      </button>

      {/* Cart Dropdown */}
      {isCartOpen && (
        <div className={`absolute right-0 top-full mt-2 w-[calc(320px-48px)] rounded-lg shadow-xl z-50 ${
          isAdminPanel 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white border border-gray-200'
        }`}>
          {/* Arrow pointing to cart icon */}
          <div className={`absolute -top-3 right-4 w-7 h-7 transform rotate-45 ${
            isAdminPanel 
              ? 'bg-gray-800 border-t border-l border-gray-700' 
              : 'bg-white border-t border-l border-gray-200'
          }`}></div>
          
          {/* Cart Content */}
          <Cart onClose={() => setIsCartOpen(false)} isDarkTheme={isAdminPanel} />
          
          {/* View Cart Button */}
          {state.itemCount > 0 && (
            <div className={`p-4 border-t ${
              isAdminPanel ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <button
                onClick={handleViewCart}
                className={`w-full py-1 px-4 rounded-lg font-elegant font-medium transition-colors duration-200 cursor-pointer ${
                  isAdminPanel
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                View Full Cart
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartIcon; 