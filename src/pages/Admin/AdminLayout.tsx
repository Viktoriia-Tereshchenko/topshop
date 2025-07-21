import { Outlet } from 'react-router-dom';
import { AdminNav } from '../../components/AdminNav/AdminNav';
import { NavBar } from '../../components/NavBar/NavBar';
import Container from '../../components/Container/Container';

export const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full border-b border-gray-700 h-20 z-10 bg-gray-800/95">
        <Container>
          <div className="flex justify-between items-center size-full">
            <div className="flex items-center gap-4">
              <img 
                src="/favicon-top-shop.svg" 
                alt="TopShop Logo" 
                className="w-6 h-6"
              />
              <div className="font-elegant font-bold text-[28px] text-gray-100 tracking-wide">
                <span className="text-indigo-400">Top</span>Shop
              </div>
            </div>
            <NavBar />
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
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