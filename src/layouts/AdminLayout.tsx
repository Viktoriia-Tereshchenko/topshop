import { Link, Outlet } from 'react-router-dom';
import { AdminNav } from '../components/AdminNav/AdminNav';
import { NavBar } from '../components/NavBar/NavBar';
import Container from '../components/Container/Container';

export const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full border-b border-gray-700 h-[120px] [@media(min-width:1200px)]:h-[80px] z-1000 bg-gray-800/95">
        <Container>
          <div className="flex justify-between items-center size-full">
            <div className="flex items-center gap-4">
              <img src="/favicon-top-shop.svg" alt="TopShop Logo" className="w-6 h-6" />
              <Link to="/" className="font-secondary font-bold text-[26px] text-secondary-100 mr-10">
                <span className="text-accent">Top</span>Shop
              </Link>
            </div>
            <div className="text-secondary-100">
              <NavBar />
            </div>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-[120px] [@media(min-width:1200px)]:pt-[80px]">
        <Container>
          <div className="pt-6">
            <AdminNav />
            <Outlet />
          </div>
        </Container>
      </main>
    </div>
  );
};
