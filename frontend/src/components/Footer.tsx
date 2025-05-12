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

const Footer = ({ className }) => {
  return (
    <footer className={`w-screen mt-18 ${className}`}>
      <Newsletter />
      <div className="bg-main h-[846px] xl:h-[500px] flex flex-col justify-end xl:flex-row xl:items-end">
        <div className="w-[91%] xl:w-[80%] mx-auto">
          <ul className="w-full xl:flex border-b border-gray-300 ">
            <li className="xl:w-64">
              <img src={Logo} alt="" className="mb-6" />
              <span className="font-light">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </span>
              <div className="flex gap-3 mt-5">
                <img src={X} alt="" />
                <img src={Facebook} alt="" />
                <img src={Instagram} alt="" />
                <img src={GitHub} alt="" />
              </div>
            </li>
            <div className="grid grid-cols-2 xl:grid-cols-4">
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
          <div className="xl:flex text-center justify-between mb-8 xl:mb-14 mt-3">
            <span className="px-2 h-9">
              Shop.co © 2000-2025, All rights reserved
            </span>
            <div className="flex py-6 xl:py-0 justify-center">
              <img src={Visa} alt="" className="w-[52px] xl:w-[64px] h-auto" />
              <img src={MasterCard} alt="" className="w-[52px] xl:w-[64px] h-auto" />
              <img src={PayPal} alt="" className="w-[52px] xl:w-[64px] h-auto" />
              <img src={ApplePay} alt="" className="w-[52px] xl:w-[64px] h-auto" />
              <img src={GooglePay} alt="" className="w-[52px] xl:w-[64px] h-auto" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
