import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import { Provider } from "react-redux";
import store from "./Store/Store";
import HomePage from "./Pages/HomePage/HomePage";
import SingleProductPage from "./Pages/SingleProductPage/SingleProductPage";
import Footer from "./Components/Footer/Footer";
import CategoryDetailPage from "./Pages/CategoryDetailPage/CategoryDetailPage";
import CartItems from "./Pages/Cart/CartItems";
import Login from "./Pages/Login/Login";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import CategoryWiseProduct from "./Pages/CategoryPage/CategoryWiseProduct";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route
            path="/category/product/:id"
            element={<CategoryDetailPage />}
          />
          <Route path="/cart" element={<CartItems />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<RegisterPage />} />
          <Route path="/category/:category" element={<CategoryWiseProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
