import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import HomePage from "./pages/home/HomePage.js";
import ShopPage from "./pages/shop/ShopPage.js";
import AuthPage from "./pages/auth/AuthPage.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductPage from "./pages/product/ProductPage.js";
import CartPage from "./pages/cart/CartPage.js";
import ProfilePage from "./pages/profile/ProfilePage.js";

export const AuthContext = createContext();
export const PopupContext = createContext();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const jwtCheck = () => {
    try {
      const jwtToken = Cookies.get("jwt");
      const expiration = JSON.parse(atob(jwtToken.split(".")[1])).exp;
      const now = Math.floor(Date.now() / 1000);
      if (expiration > now) {
        setLoggedIn(true);
      }
    } catch { }
  };

  useEffect(() => {
    jwtCheck();
  }, []);
  return (
    <AuthContext.Provider value={[loggedIn, setLoggedIn]}>
      <PopupContext.Provider value={[popupMessage, setPopupMessage]}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/login" element={<AuthPage key="login" login={true} />} />
            <Route path="/register" element={<AuthPage key="register" login={false} />} />
            <Route path="/shop/men/t-shirts" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Router>
      </PopupContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
