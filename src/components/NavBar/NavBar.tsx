import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { useCurrentUser } from '../../hooks/useCurrentUser';

export const NavBar = () => {
  const { user } = useCurrentUser();
  const isAdmin = user?.role === 'admin';
  return (
    <nav className="sticky top-0 z-40 bg-gray-900/90 backdrop-blur shadow flex justify-center items-center gap-6 py-3 px-6 rounded-b-2xl mb-6 border-b border-gray-700">
      <NavLink to="/" className="hover:bg-gray-800 text-gray-100 font-semibold transition-colors duration-200 px-3 py-1 rounded-lg">
        Home
      </NavLink>
      <NavLink to={ROUTES.PRODUCTS} className="hover:bg-gray-800 text-gray-100 font-semibold transition-colors duration-200 px-3 py-1 rounded-lg">
        Products
      </NavLink>
      <NavLink to={ROUTES.ABOUT} className="hover:bg-gray-800 text-gray-100 font-semibold transition-colors duration-200 px-3 py-1 rounded-lg">
        About
      </NavLink>
      <NavLink to={ROUTES.LOGIN} className="hover:bg-gray-800 text-gray-100 font-semibold transition-colors duration-200 px-3 py-1 rounded-lg">
        Sign In
      </NavLink>
      {/* only available to the administrator */}
      <div className="relative group">
        <NavLink
          to={isAdmin ? ROUTES.ADD_PRODUCT : '#'}
          className={`px-3 py-1 rounded-lg font-semibold transition-colors duration-200 ${isAdmin ? 'hover:bg-gray-800 text-gray-100' : 'text-gray-500 cursor-not-allowed opacity-50 pointer-events-none bg-gray-800/40'}`}
          tabIndex={isAdmin ? 0 : -1}
          aria-disabled={!isAdmin}
        >
          Add product
        </NavLink>
        {!isAdmin && (
          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-3 py-1 rounded bg-gray-800 text-gray-100 text-xs shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
            Only admins can add products
          </span>
        )}
      </div>
      {isAdmin && (
        <NavLink to={ROUTES.ADMIN} className="hover:bg-gray-800 text-gray-100 font-semibold transition-colors duration-200 px-3 py-1 rounded-lg">
          Admin
        </NavLink>
      )}
      <NavLink to={ROUTES.USERS} className="hover:bg-gray-800 text-gray-100 font-semibold transition-colors duration-200 px-3 py-1 rounded-lg">
        Users
      </NavLink>
    </nav>
  );
};
