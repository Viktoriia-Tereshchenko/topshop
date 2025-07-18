import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
// import { NavBar } from "../components/NavBar/NavBar";

export const MainLayout = () => {
  return (
    <>
      <header>
        <NavBar />{" "}
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
