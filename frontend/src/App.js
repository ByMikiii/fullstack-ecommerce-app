import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Home from "./pages/home/Home.js";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const AuthContext = createContext();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const jwtCheck = () => {
    try {
      const jwtToken = Cookies.get("jwt");
      const expiration = JSON.parse(atob(jwtToken.split(".")[1])).exp;
      const now = Math.floor(Date.now() / 1000);
      if (expiration > now) {
        setLoggedIn(true);
      }
    } catch {}
  };

  useEffect(() => {
    jwtCheck();
  }, []);
  return (
    <AuthContext.Provider value={[loggedIn, setLoggedIn]}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
