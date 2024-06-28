import { configureStore } from "@reduxjs/toolkit";
// import categoryReducer from "../Redux/CategorySlice";
import categoryReducer from "../Redux/CategorySlice";
import productReducer from "../Redux/ProductSlice";
import cartReducer from "../Redux/CartSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
