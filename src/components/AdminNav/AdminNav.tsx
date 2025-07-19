import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export const AdminNav = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-4 mb-6 border border-gray-700">
      <h2 className="text-xl font-bold text-gray-100 mb-4">Admin Panel</h2>
      <nav className="flex flex-wrap gap-2">
        <NavLink
          to={ROUTES.ADMIN}
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to={ROUTES.ADMIN_PRODUCTS}
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`
          }
        >
          Products
        </NavLink>
        <NavLink
          to={ROUTES.ADMIN_CATEGORIES}
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`
          }
        >
          Categories
        </NavLink>
        <NavLink
          to={ROUTES.ADMIN_USERS}
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`
          }
        >
          Users
        </NavLink>
      </nav>
    </div>
  );
}; 