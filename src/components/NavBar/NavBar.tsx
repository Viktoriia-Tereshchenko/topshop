import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { useCurrentUser } from '../../hooks/useCurrentUser';

export const NavBar = () => {
  const { user } = useCurrentUser();
  const isAdmin = user?.role === 'admin';
  return (
    <nav className="flex items-center gap-4 flex-wrap text-sm">
      <NavLink
        to="/"
        className={({ isActive }) => `${isActive ? 'text-accent' : 'text-main'} relative inline-block group`}
      >
        <span className="font-medium px-1 py-2 uppercase hover:text-[#2196f3]">Home</span>
        <span className="absolute left-0 bottom-0 h-[1px] w-full origin-right scale-x-0 transform bg-[#2196f3] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
      </NavLink>
      <NavLink
        to={ROUTES.ABOUT}
        className={({ isActive }) => `${isActive ? 'text-accent' : 'text-main'} relative inline-block group`}
      >
        <span className="font-medium px-1 py-2 uppercase hover:text-[#2196f3]">About</span>
        <span className="absolute left-0 bottom-0 h-[1px] w-full origin-right scale-x-0 transform bg-[#2196f3] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
      </NavLink>
      <NavLink
        to={ROUTES.PRODUCTS}
        className={({ isActive }) => `${isActive ? 'text-accent' : 'text-main'} relative inline-block group`}
      >
        <span className="font-medium px-1 py-2 uppercase hover:text-[#2196f3]">Products</span>
        <span className="absolute left-0 bottom-0 h-[1px] w-full origin-right scale-x-0 transform bg-[#2196f3] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
      </NavLink>
      <NavLink
        to={ROUTES.USERS}
        className={({ isActive }) => `${isActive ? 'text-accent' : 'text-main'} relative inline-block group`}
      >
        <span className="font-medium px-1 py-2 uppercase hover:text-[#2196f3]">Users</span>
        <span className="absolute left-0 bottom-0 h-[1px] w-full origin-right scale-x-0 transform bg-[#2196f3] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
      </NavLink>
      <NavLink
        to={ROUTES.LOGIN}
        className={({ isActive }) => `${isActive ? 'text-accent' : 'text-main'} relative inline-block group`}
      >
        <span className="font-medium px-1 py-2 uppercase hover:text-[#2196f3]">Sign In</span>
        <span className="absolute left-0 bottom-0 h-[1px] w-full origin-right scale-x-0 transform bg-[#2196f3] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
      </NavLink>
      {isAdmin && (
        <NavLink
          to={ROUTES.ADMIN}
          className={({ isActive }) => `${isActive ? 'text-accent' : 'text-main'} relative inline-block group`}
        >
          <span className="font-medium px-1 py-2 uppercase hover:text-[#2196f3]">Admin</span>
          <span className="absolute left-0 bottom-0 h-[1px] w-full origin-right scale-x-0 transform bg-[#2196f3] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
        </NavLink>
      )}
      {isAdmin && (
        <NavLink
          to={ROUTES.ADD_PRODUCT}
          className={({ isActive }) => `${isActive ? 'text-accent' : 'text-main'} relative inline-block group`}
        >
          <span className="font-medium px-1 py-2 uppercase hover:text-[#2196f3]">Add product</span>
          <span className="absolute left-0 bottom-0 h-[1px] w-full origin-right scale-x-0 transform bg-[#2196f3] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
        </NavLink>
      )}
    </nav>
  );
};
