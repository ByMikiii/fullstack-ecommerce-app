import React from "react";
import Newsletter from "./Newsletter";
import Logo from "../assets/logo.png";
import X from "../assets/X.png";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import GitHub from "../assets/GitHub.png";
import Visa from "../assets/Visa.png";
import MasterCard from "../assets/MasterCard.png";
import PayPal from "../assets/Paypal.png";
import ApplePay from "../assets/ApplePay.png";
import GooglePay from "../assets/GooglePay.png";

const Footer = () => {
  return (
    <footer class="w-screen mt-48">
      <Newsletter />
      <div class="bg-main h-[500px] flex items-end">
        <div class="w-[80%] mx-auto">
          <ul class="w-full flex border-b border-gray-300 ">
            <li class="w-64">
              <img src={Logo} alt="" class="mb-6" />
              <span class="font-light">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </span>
            </li>
            <div class="flex ml-auto mr-0">
              <li>
                <ul>
                  <li>
                    <h4>COMPANY</h4>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Features</a>
                  </li>
                  <li>
                    <a href="">Works</a>
                  </li>
                  <li>
                    <a href="">Career</a>
                  </li>
                </ul>
              </li>

              <li>
                <ul>
                  <li>
                    <h4>HELP</h4>
                  </li>
                  <li>
                    <a href="">Customer Support</a>
                  </li>
                  <li>
                    <a href="">Delivery Details</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <h4>FAQ</h4>
                  </li>
                  <li>
                    <a href="">Account</a>
                  </li>
                  <li>
                    <a href="">Manage Deliveries</a>
                  </li>
                  <li>
                    <a href="">Orders</a>
                  </li>
                  <li>
                    <a href="">Payments</a>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <h4>RESOURCES</h4>
                  </li>
                  <li>
                    <a href="">Free eBooks</a>
                  </li>
                  <li>
                    <a href="">Development Tutorial</a>
                  </li>
                  <li>
                    <a href="">How to - Blog</a>
                  </li>
                  <li>
                    <a href="">Youtube Playlist</a>
                  </li>
                </ul>
              </li>
            </div>
          </ul>
          <div class="flex justify-between mb-14 mt-3">
            <small class="ml-2 h-9 flex items-center">
              © 2000-2025, All rights reserved
            </small>
            <div class="flex">
              <img src={Visa} alt="" />
              <img src={MasterCard} alt="" />
              <img src={PayPal} alt="" />
              <img src={ApplePay} alt="" />
              <img src={GooglePay} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
