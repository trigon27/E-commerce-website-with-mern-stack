import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productReducer from "../features/ProductList/productSlice";
import authReducer from "../features/auth/AuthSlice";
import cartReducer from "../features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});
