import React from "react";
import "./App.css";
import Home from "./features/pages/Home";
import LoginPage from "./features/pages/LoginPage";
import SignupPage from "./features/pages/SignupPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from "./features/pages/CartPage";
import CheckoutPage from "./features/pages/CheckoutPage";
import ProductDetailPage from "./features/pages/ProductDetailPage";

import Protected from "./features/auth/components/Protected";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "./features/auth/AuthSlice";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import PageNotFound from "./features/pages/404";
import OrderSuccessPage from "./features/pages/OrderSuccessPage";
import UserOrdersPage from "./features/pages/UserOrderPage";
import UserProfilePage from "./features/pages/UserProfilePage";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import Logout from "./features/auth/components/Logout";
import ForgotPasswordPage from "./features/pages/ForgotPasswordPage";
import AdminHome from "./features/pages/AdminHome";
import ProtectedAdmin from "./features/auth/components/ProtectedAdmin";
import AdminProductDetailPage from "./features/pages/AdminProductDetailPage";
import AdminProductFormPage from "./features/pages/AdminProductFormPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        {" "}
        <Home />{" "}
      </Protected>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedAdmin>
        <AdminHome />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/adminProduct",
    element: (
      <ProtectedAdmin>
        <AdminProductDetailPage />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/product-form",
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/product-form/edit/:id",
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/Login",
    element: <LoginPage />,
  },
  {
    path: "/Signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        {" "}
        <CartPage />{" "}
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        {" "}
        <CheckoutPage />
      </Protected>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <Protected>
        <ProductDetailPage />{" "}
      </Protected>
    ),
  },
  {
    path: "/order-success/:id",
    element: (
      <Protected>
        <OrderSuccessPage />{" "}
      </Protected>
    ),
  },
  {
    path: "/orders",
    element: (
      <Protected>
        <UserOrdersPage />{" "}
      </Protected>
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <UserProfilePage />{" "}
      </Protected>
    ),
  },
  {
    path: "/logout",
    element: (
      <Protected>
        <Logout />{" "}
      </Protected>
    ),
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },

  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
      dispatch(fetchLoggedInUserAsync(user.id));
    }
  }, [dispatch, user]);
  return (
    <div>
      {/* <Home /> */}
      {/* <LoginPage /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
