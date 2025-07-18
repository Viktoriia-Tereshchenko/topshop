import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { MainLayout } from "../layouts/MainLayout";
import Registration from "../components/Registration/Registration";
import Login from "../components/Login/Login";
import Account from "../components/Account/Account";
import Logout from "../components/Logout/Logout";

export default function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.LOGOUT} element={<Logout />} />
          <Route path={ROUTES.ACCOUNT} element={<Account/>} />
        </Route>
      </Routes>
   
  );
}
