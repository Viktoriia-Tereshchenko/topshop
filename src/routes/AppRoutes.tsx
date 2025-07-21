import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { MainLayout } from "../layouts/MainLayout";
import { AuthProvider } from "../providers/AuthProvider";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import CheckoutSuccessPage from "../pages/CheckoutSuccessPage/CheckoutSuccessPage";
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
import CartPage from "../pages/CartPage/CartPage";
import FAQPage from "../pages/FAQ/Faq";
import HelpCenterPage from "../pages/HelpCenter/HelpCenterPage";
import Contacts from "../pages/Contacts/Contacts";


export default function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.ACCOUNT} element={<Account />} />
          <Route path={ROUTES.USERS} element={<UsersPage />} />
          {/* <Route path={ROUTES.USER} element={<User />} /> */}
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.LOGOUT} element={<Logout />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path={ROUTES.CART} element={<CartPage />} />
          <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
          <Route path="/checkout/success" element={<CheckoutSuccessPage />} />
          <Route path={ROUTES.ADD_PRODUCT} element={<AddProduct />} />
          <Route path={ROUTES.TEAM} element={<Team />} />
          <Route path={ROUTES.CAREERS} element={<ApplicationForm />} />
          <Route path={ROUTES.FAQ} element={<FAQPage />} />
          <Route path={ROUTES.HELPCENTER} element={<HelpCenterPage />} />
          <Route path={ROUTES.CONTACTS} element={<Contacts />} />
          <Route path={ROUTES.CART} element={<CartPage />} />
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
