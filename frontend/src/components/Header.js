import React from "react";
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "../App";
import Cookies from "js-cookie";
import Search from "./Search";
import logo from "../assets/logo.png";
import cart from "../assets/Cart.png";

const Header = () => {
  const [loggedIn, setLoggedIn] = useContext(AuthContext);
  const handleLogout = () => {
    Cookies.set("jwt", "", { expires: 0 });
    setLoggedIn(false);
  };
  return (
    <nav class="flex justify-center items-center h-24">
      <ul class="flex items-center">
        <li>
          <Link to="/">
            <img src={logo} alt="Logo" class="mr-5" />
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/">On Sale</Link>
        </li>
        <li>
          <Link to="/">New Arrivals</Link>
        </li>
        <li>
          <Link to="/">Brands</Link>
        </li>

        <li>
          <Search />
        </li>
        <li>
          <img src={cart} alt="" />
        </li>
        {loggedIn ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Sign up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
