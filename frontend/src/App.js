import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import AuthPage from "./pages/auth/AuthPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/product/ProductPage";
import CartPage from "./pages/cart/CartPage";
import ProfilePage from "./pages/profile/ProfilePage";
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();
export const UserIdContext = createContext();
export const PopupContext = createContext();
export const CartItemsCountContext = createContext();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [cartItemCount, setCartItemCount] = useState("");

  const jwtCheck = () => {
    try {
      const jwtToken = Cookies.get("jwt");
      const decoded = jwtDecode(jwtToken);
      const expiration = JSON.parse(atob(jwtToken.split(".")[1])).exp;
      const now = Math.floor(Date.now() / 1000);
      if (expiration > now) {
        setLoggedIn(true);
        setUserId(decoded.userId)
      }
    } catch { }
  };

  useEffect(() => {
    jwtCheck();
  }, []);

  return (
    <AuthContext.Provider value={[loggedIn, setLoggedIn]}>
      <UserIdContext value={[userId, setUserId]}>
        <PopupContext.Provider value={[popupMessage, setPopupMessage]}>
          <CartItemsCountContext.Provider value={[cartItemCount, setCartItemCount]}>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/login" element={<AuthPage key="login" login={true} />} />
                <Route path="/register" element={<AuthPage key="register" login={false} />} />
                <Route path="/shop/product/:slug" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </Router>
          </CartItemsCountContext.Provider>
        </PopupContext.Provider>
      </UserIdContext>
    </AuthContext.Provider>
  );
};

export default App;
