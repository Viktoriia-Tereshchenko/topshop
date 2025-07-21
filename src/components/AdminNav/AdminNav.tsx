import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export const AdminNav = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-8 shadow-lg border border-gray-700 w-[calc(100%-48px)] mx-auto">
      <h2 className="text-lg font-semibold text-gray-100 mb-4">Admin Panel</h2>
      <nav className="flex flex-wrap gap-3">
        <NavLink
          to={ROUTES.ADMIN}
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none ${
              isActive
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:shadow-md'
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to={ROUTES.ADMIN_PRODUCTS}
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none ${
              isActive
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:shadow-md'
            }`
          }
        >
          Products
        </NavLink>
        <NavLink
          to={ROUTES.ADMIN_CATEGORIES}
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none ${
              isActive
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:shadow-md'
            }`
          }
        >
          Categories
        </NavLink>
        <NavLink
          to={ROUTES.ADMIN_USERS}
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none ${
              isActive
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:shadow-md'
            }`
          }
        >
          Users
        </NavLink>
      </nav>
    </div>
  );
}; 