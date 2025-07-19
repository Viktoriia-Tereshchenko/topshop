import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { MainLayout } from '../layouts/MainLayout';
import UsersPage from '../pages/UsersPage/UsersPage';
import Registration from '../components/Registration/Registration';
import Login from '../components/Login/Login';
import Account from '../components/Account/Account';
import Logout from '../components/Logout/Logout';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import Team from '../pages/Team/Team';
import ApplicationForm from '../pages/Careers/ApplicationForm';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} /> page
        <Route path={ROUTES.REGISTRATION} element={<Registration />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.LOGOUT} element={<Logout />} />
        <Route path={ROUTES.ACCOUNT} element={<Account />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} /> page
        {/* <Route path={ROUTES.PRODUCTS} element={<ProductsPage/>} /> page  */}
        {/* <Route path={ROUTES.PRODUCTS + "/:id"} element={<ProductPage />} />  page  */}
        {/* <Route path={ROUTES.ADD_PRODUCT} element={<AddProduct />} /> page  */}
        {/* <Route path={ROUTES.DELETE_PRODUCT} element={<DeleteProduct />} />   component / button       */}
        <Route path={ROUTES.USERS} element={<UsersPage />} /> page
        {/* <Route path={ROUTES.USER} element={<UserPage  />} /> page  */}
        {/* <Route path={ROUTES.DELETE_USER} element={<DeleteUserPage/>} />  component / button     */}
        {/* <Route path={ROUTES.CONTACT} element={<Contact />} />   -> footer*/}
        { <Route path="/team" element={<Team />} /> }
        { <Route path="/careers" element={<ApplicationForm />} /> }
      </Route>
    </Routes>
  );
}
