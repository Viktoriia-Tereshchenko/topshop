import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constans/routes";

export const NavBar = () => {
  //   const classSelector = ({ isActive }: { isActive: boolean }) => {
  //   return isActive ? "text-[#976f5b]" : "hover:text-pink-950";
  // };
  return (
    <>
      <nav className="flex justify-center items-center gap-4 flex-wrap text-black text-sm mx-auto">
        <NavLink to="/" className="hover:text-[#2196f3]">
          Home
        </NavLink>
        <NavLink to={ROUTES.PRODUCTS} className="hover:text-[#2196f3]">
          Products
        </NavLink>
        <NavLink to={ROUTES.ABOUT} className="hover:text-[#2196f3]">
          About
        </NavLink>
        <NavLink to={ROUTES.LOGIN} className="hover:text-[#2196f3]">
          Sign In
        </NavLink>
        {/* only available to the administrator */}
        <NavLink to={ROUTES.ADD_PRODUCT} className="hover:text-[#2196f3]">
          Add product
        </NavLink>
        <NavLink to={ROUTES.USERS} className="hover:text-[#2196f3]">
          Users
        </NavLink>
      </nav>
    </>
  );
};
