import { NavLink, useLocation } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import CartIcon from '../CartIcon/CartIcon';

export const NavBar = () => {
  const { user, isAuthorized } = useCurrentUser();
  const location = useLocation();

  // Определяем, находимся ли мы в админ-панели
  const isAdminPanel = location.pathname.startsWith('/admin');
  console.log('isAdminPanel :>> ', isAdminPanel);

  const navLinkCollor = `${isAdminPanel ? 'text-weith' : 'text-main'}`;
  console.log('navLinkCollor :>> ', navLinkCollor);

  const isAdmin = user?.role === 'admin';
  return (
    <nav className="flex items-center gap-4 flex-wrap text-sm">
      <NavLink
        to="/"
        className={({ isActive }) => `${isActive ? 'text-accent' : navLinkCollor} relative inline-block group`}
      >
        <span className="font-medium px-1 py-2 uppercase hover:text-[#2196f3]">Home</span>
        <span className="absolute left-0 bottom-0 h-[1px] w-full origin-right scale-x-0 transform bg-[#2196f3] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
      </NavLink>
      <NavLink
        to={ROUTES.ABOUT}
        className={({ isActive }) => `${isActive ? 'text-accent' : navLinkCollor} relative inline-block group`}
      >
        <span className="font-medium px-1 py-2 uppercase hover:text-[#2196f3]">About</span>
        <span className="absolute left-0 bottom-0 h-[1px] w-full origin-right scale-x-0 transform bg-[#2196f3] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
      </NavLink>
      <NavLink
        to={ROUTES.PRODUCTS}
        className={({ isActive }) => `${isActive ? 'text-accent' : navLinkCollor} relative inline-block group`}
      >
        <span className="font-medium px-1 py-2 uppercase hover:text-[#2196f3]">Products</span>
        <span className="absolute left-0 bottom-0 h-[1px] w-full origin-right scale-x-0 transform bg-[#2196f3] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
      </NavLink>
      <NavLink
        to={ROUTES.USERS}
        className={({ isActive }) => `${isActive ? 'text-accent' : navLinkCollor} relative inline-block group`}
      >
        <span className="font-medium px-1 py-2 uppercase hover:text-[#2196f3]">Users</span>
        <span className="absolute left-0 bottom-0 h-[1px] w-full origin-right scale-x-0 transform bg-[#2196f3] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
      </NavLink>

      {isAdmin && (
        <NavLink
          to={ROUTES.ADMIN}
          className={({ isActive }) => `${isActive ? 'text-accent' : navLinkCollor} relative inline-block group`}
        >
          <span className="font-medium px-1 py-2 uppercase hover:text-[#2196f3]">Admin panel</span>
          <span className="absolute left-0 bottom-0 h-[1px] w-full origin-right scale-x-0 transform bg-[#2196f3] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
        </NavLink>
      )}
      <NavLink
        to={isAuthorized ? ROUTES.LOGOUT : ROUTES.LOGIN}
        className={({ isActive }) => `${isActive ? 'text-accent' : navLinkCollor} relative inline-block group`}
      >
        <span className="font-medium px-1 py-2 uppercase hover:text-[#2196f3]">
          {isAuthorized ? 'Sign Out' : 'Sign In'}
        </span>
        <span className="absolute left-0 bottom-0 h-[1px] w-full origin-right scale-x-0 transform bg-[#2196f3] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
      </NavLink>
      {isAuthorized ? (
        <NavLink
          to={ROUTES.ACCOUNT}
          className={({ isActive }) => `${isActive ? 'text-accent' : navLinkCollor} relative inline-block group`}
        >
          <div className="font-medium px-1 py-2 uppercase hover:text-[#2196f3] flex gap-3 items-center-safe">
            {user?.avatar && (
              <img
                className="w-8 h-8 rounded-full object-cover border-2 border-indigo-500 cursor-pointer hover:scale-110 transition-transform duration-200"
                src={user?.avatar}
                alt="User logo"
              />
            )}
            <span>{user?.email}</span>
          </div>
          <span className="absolute left-0 bottom-0 h-[1px] w-full origin-right scale-x-0 transform bg-[#2196f3] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:origin-left group-hover:scale-x-100" />
        </NavLink>
      ) : null}
      <CartIcon />
    </nav>
  );
};
