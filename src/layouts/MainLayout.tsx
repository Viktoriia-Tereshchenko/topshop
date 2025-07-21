import { Link, Outlet } from 'react-router-dom';
import { NavBar } from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Container from '../components/Container/Container';

export const MainLayout = () => {
  return (
    <>
      <header
        className="fixed flex items-center
       top-0 w-full border-b-1 border-b-[#ececec]  h-[120px] [@media(min-width:1200px)]:h-[80px] z-1000 bg-secondary-100/95"
      >
        <Container>
          <div className="flex justify-between items-center  size-full">
            <Link to="/" className="font-secondary font-bold text-[26px] mr-10">
              <span className="text-accent">Top</span>Shop
            </Link>
            <NavBar />
          </div>
        </Container>
      </header>

      {/* сюда будут подставляться наши Route */}
      <main className="flex-1  pt-[120px] [@media(min-width:1200px)]:pt-[80px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
