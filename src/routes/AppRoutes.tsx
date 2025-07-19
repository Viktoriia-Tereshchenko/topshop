import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { MainLayout } from '../layouts/MainLayout';
import Logout from '../components/Logout/Logout';
import Login from '../components/Login/Login';
import Registration from '../components/Registration/Registration';
import UsersPage from '../pages/UsersPage/UsersPage';
import Account from '../components/Account/Account';

export default function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<div className="text-center text-gray-100 text-2xl font-bold mt-20">Welcome to TopShop!</div>} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          {/* <Route path={ROUTES.ABOUT} element={<About />} /> */}
          <Route path={ROUTES.ACCOUNT} element={<Account />} />
          <Route path={ROUTES.USERS} element={<UsersPage />} />
          {/* <Route path={ROUTES.USER} element={<User />} /> */}
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.LOGOUT} element={<Logout />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
          <Route path={ROUTES.ADD_PRODUCT} element={<AddProduct />} />
        </Route>
        
        {/* Admin Routes */}
        <Route path={ROUTES.ADMIN} element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<ProductsManagement />} />
          <Route path="categories" element={<CategoriesManagement />} />
          <Route path="users" element={<UsersManagement />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
