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
import Slider from "./features/pages/slider";
import Protected from "./features/auth/components/Protected";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "./features/auth/AuthSlice";

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
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  return (
    <div>
      {/* <Home /> */}
      {/* <LoginPage /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
