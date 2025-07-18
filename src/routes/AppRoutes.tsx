import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* <Route index element={<Home />} /> page  */}
          {/* <Route path={ROUTES.REGISTRATION} element={<Registration />} />  page  */}
          {/* <Route path={ROUTES.LOGIN} element={<Login />} />   page    */}
          {/* <Route path={ROUTES.ACCOUNT} element={<Account />}> page  */}
          {/* <Route path={ROUTES.ABOUT} element={<About />} /> page  */}

          {/* <Route path={ROUTES.PRODUCTS} element={<ProductsPage/>} /> page  */}
          {/* <Route path={ROUTES.PRODUCTS + "/:id"} element={<ProductPage />} />  page  */}
          {/* <Route path={ROUTES.ADD_PRODUCT} element={<AddProduct />} /> page  */}
          {/* <Route path={ROUTES.DELETE_PRODUCT} element={<DeleteProduct />} />   component / button       */}

          {/* <Route path={ROUTES.USERS} element={<UsersPage />} /> page  */}
          {/* <Route path={ROUTES.USER} element={<UserPage  />} /> page  */}
          {/* <Route path={ROUTES.DELETE_USER} element={<DeleteUserPage/>} />  component / button     */}

          {/* <Route path={ROUTES.CONTACT} element={<Contact />} />   -> footer*/}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
}
