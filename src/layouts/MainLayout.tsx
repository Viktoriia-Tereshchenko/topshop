import { Link, Outlet } from 'react-router-dom';
import { NavBar } from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Container from '../components/Container/Container';

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* навигация */}
      <header className="fixed top-0 w-full border-b-1 border-b-[#ececec] h-20 z-10 bg-secondary-100/95">
        <Container>
          <div className="flex justify-between items-center  size-full">
            <Link to="/" className="font-secondary font-bold text-[26px]">
              <span className="text-accent">Top</span>Shop
            </Link>
            <NavBar />
          </div>
        </Container>
      </header>

      {/* сюда будут подставляться наши Route */}
      <main className="flex-1 pt-20">
        <Container>
          <Outlet />
        </Container>
      </main>

      <footer className="bg-gray-900">
        <Container>
          <Footer />
        </Container>
      </footer>
    </div>
  );
};
