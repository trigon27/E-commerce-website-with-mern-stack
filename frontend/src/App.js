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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/product-detail/:id",
    element: <ProductDetailPage />,
  },
]);

function App() {
  return (
    <div>
      {/* <Home /> */}
      {/* <LoginPage /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
