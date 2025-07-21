import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import CartIcon from "../CartIcon/CartIcon";

export const NavBar = () => {
  const { user, isAuthorized } = useCurrentUser();
  const isAdmin = user?.role === "admin";
  return (
    <nav className="flex items-center gap-4 flex-wrap text-sm">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${
            isActive ? "text-indigo-400" : "text-gray-600"
          } relative inline-block group focus:outline-none`
        }
      >
        <span className="font-elegant font-medium px-2 py-2 uppercase tracking-wide hover:text-indigo-400 transition-colors duration-200">
          Home
        </span>
        <span className="absolute left-0 bottom-0 h-[2px] w-full origin-right scale-x-0 transform bg-indigo-400 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
      </NavLink>
      <NavLink
        to={ROUTES.ABOUT}
        className={({ isActive }) =>
          `${
            isActive ? "text-indigo-400" : "text-gray-600"
          } relative inline-block group focus:outline-none`
        }
      >
        <span className="font-elegant font-medium px-2 py-2 uppercase tracking-wide hover:text-indigo-400 transition-colors duration-200">
          About
        </span>
        <span className="absolute left-0 bottom-0 h-[2px] w-full origin-right scale-x-0 transform bg-indigo-400 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
      </NavLink>
      <NavLink
        to={ROUTES.PRODUCTS}
        className={({ isActive }) =>
          `${
            isActive ? "text-indigo-400" : "text-gray-600"
          } relative inline-block group focus:outline-none`
        }
      >
        <span className="font-elegant font-medium px-2 py-2 uppercase tracking-wide hover:text-indigo-400 transition-colors duration-200">
          Products
        </span>
        <span className="absolute left-0 bottom-0 h-[2px] w-full origin-right scale-x-0 transform bg-indigo-400 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
      </NavLink>
      <NavLink
        to={ROUTES.USERS}
        className={({ isActive }) =>
          `${
            isActive ? "text-indigo-400" : "text-gray-600"
          } relative inline-block group focus:outline-none`
        }
      >
        <span className="font-elegant font-medium px-2 py-2 uppercase tracking-wide hover:text-indigo-400 transition-colors duration-200">
          Users
        </span>
        <span className="absolute left-0 bottom-0 h-[2px] w-full origin-right scale-x-0 transform bg-indigo-400 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
      </NavLink>

      {isAdmin && (
        <NavLink
          to={ROUTES.ADMIN}
          className={({ isActive }) =>
            `${
              isActive ? "text-indigo-400" : "text-gray-600"
            } relative inline-block group focus:outline-none`
          }
        >
          <span className="font-elegant font-medium px-2 py-2 uppercase tracking-wide hover:text-indigo-400 transition-colors duration-200">
            Admin panel
          </span>
          <span className="absolute left-0 bottom-0 h-[2px] w-full origin-right scale-x-0 transform bg-indigo-400 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
        </NavLink>
      )}
      <NavLink
        to={isAuthorized ? ROUTES.LOGOUT : ROUTES.LOGIN}
        className={({ isActive }) =>
          `${
            isActive ? "text-indigo-400" : "text-gray-600"
          } relative inline-block group focus:outline-none`
        }
      >
        <span className="font-elegant font-medium px-2 py-2 uppercase tracking-wide hover:text-indigo-400 transition-colors duration-200">
          {isAuthorized ? "Sign Out" : "Sign In"}
        </span>
        <span className="absolute left-0 bottom-0 h-[2px] w-full origin-right scale-x-0 transform bg-indigo-400 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
      </NavLink>
      {isAuthorized ? (
        <NavLink
          to={ROUTES.ACCOUNT}
          className={({ isActive }) =>
            `${
              isActive ? "text-indigo-400" : "text-gray-600"
            } relative inline-block group focus:outline-none`
          }
        >
          
          <div className="font-elegant font-medium px-2 py-2 uppercase tracking-wide hover:text-indigo-400 transition-colors duration-200 flex gap-3 items-center">
            {user?.avatar && <img className="w-8 h-8 rounded-full object-cover border-2 border-indigo-500 cursor-pointer hover:scale-110 transition-transform duration-200" src={user?.avatar} alt="User logo" />}
            <span>{user?.email}</span>
          </div>
          <span className="absolute left-0 bottom-0 h-[2px] w-full origin-right scale-x-0 transform bg-indigo-400 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
        </NavLink>
      ) : null}
      
      {/* Cart Icon */}
      <CartIcon />
    </nav>
  );
};
