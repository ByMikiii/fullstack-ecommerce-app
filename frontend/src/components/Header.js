import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";
import Cookies from "js-cookie";
import Search from "./Search";
import logo from "../assets/logo.png";
import cart from "../assets/Cart.png";
import HamburgerMenu from "../assets/HamburgerMenu.png"
import Profile from "../assets/Profile.png";
import Glass from "../assets/Glass.png";
import MobileNav from "./MobileNav";
import SignBanner from "./SignBanner";
import { PopupContext } from "../App";
import PopupMessage from "./PopupMessage";

const Header = () => {
  const [loggedIn, setLoggedIn] = useContext(AuthContext);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [popupMessage, setPopupMessage] = useContext(PopupContext);

  const handleLogout = () => {
    Cookies.set("jwt", "", { expires: 0 });
    setLoggedIn(false);
    setPopupMessage("Successfully logged out!");
  };

  return (
    <>
      {!loggedIn && <SignBanner />}
      <nav className="flex items-center h-24 w-[100vw] xl:w-[85vw] mx-auto border-b border-gray-200 px-4">
        <ul className="flex items-center justify-between w-full">

          <li className="flex items-center">
            <div className="w-6 h-6 mr-4 xl:hidden" onClick={() => { setShowMobileNav((x) => !x) }} >
              <img src={HamburgerMenu} alt="" className="w-6 h-6 cursor-pointer" />
            </div>
            <div>
              <Link to="/">
                <img src={logo} alt="Logo" className="mr-5 w-[126px] h-[18px] xl:w-[160px] xl:h-[22px]" />
              </Link>
            </div>
          </li>
          <li className="hidden xl:flex">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="hidden xl:flex">
            <Link to="/">On Sale</Link>
          </li>
          <li className="hidden xl:flex">
            <Link to="/">New Arrivals</Link>
          </li>
          <li className="hidden xl:flex">
            <Link to="/">Brands</Link>
          </li>
          <Search className="hidden xl:flex" />

          <div className="flex justify-center">
            <li className="w-6 h-6 xl:hidden">
              <img src={Glass} alt="" />
            </li>
            <Link to="/cart">
              <img src={cart} alt="" className="w-6 h-6" />
            </Link>
            {loggedIn ? (
              <>
                <li className="w-6 h-6">
                  <Link to="/profile"><img src={Profile} alt="" /></Link>
                </li>
                {<li>
                  <button onClick={handleLogout} className="cursor-pointer">Logout</button>
                </li>}
              </>
            ) : (
              <>
                <li className="cursor-pointer">
                  <Link to="/login">Login</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/register">Sign up</Link>
                </li>
              </>
            )}
          </div>
        </ul>
        {showMobileNav && <MobileNav />}
      </nav>
      <PopupMessage />
    </>
  );
};

export default Header;
