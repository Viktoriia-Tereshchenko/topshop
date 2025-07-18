import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
// import { NavBar } from "../components/NavBar/NavBar";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* навигация */}
      <header>
        <NavBar />
      </header>

      {/* сюда будут подставляться наши Route */}
      <main className="flex-1">
        <Outlet />
      </main>

      <footer>
         <Footer />
      </footer>
    </div>
  );
};

