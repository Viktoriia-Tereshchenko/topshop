import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { MainLayout } from "../layouts/MainLayout";
import { AuthProvider } from "../providers/AuthProvider";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import { AddProduct } from "../components/AddProduct/AddProduct";
import { AdminLayout } from "../pages/Admin/AdminLayout";
import { AdminDashboard } from "../pages/Admin/AdminDashboard";
import { ProductsManagement } from "../pages/Admin/ProductsManagement";
import { CategoriesManagement } from "../pages/Admin/CategoriesManagement";
import { UsersManagement } from "../pages/Admin/UsersManagement";
import Logout from "../components/Logout/Logout";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import UsersPage from "../pages/UsersPage/UsersPage";
import Account from "../components/Account/Account";
import AboutPage from "../pages/AboutPage/AboutPage";
import HomePage from "../pages/HomePage/HomePage";
import Team from "../pages/Team/Team";
import ApplicationForm from "../pages/Careers/ApplicationForm";

export default function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} /> page
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.ACCOUNT} element={<Account />} />
          <Route path={ROUTES.USERS} element={<UsersPage />} />
          {/* <Route path={ROUTES.USER} element={<User />} /> */}
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.LOGOUT} element={<Logout />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
          <Route path={ROUTES.ADD_PRODUCT} element={<AddProduct />} />
          <Route path="team" element={<Team />} />
          <Route path="careers" element={<ApplicationForm />} />
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
