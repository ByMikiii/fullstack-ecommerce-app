import React from "react";
import Gucci from "../assets/Gucci.png";
import CalvinKlein from "../assets/CalvinKlein.png";
import Prada from "../assets/Prada.png";
import Versace from "../assets/Versace.png";
import Zara from "../assets/Zara.png";

const BrandBar = () => {
  return (
    <div className="bg-black flex flex-wrap justify-center items-center py-3 xl:py-6 xl:gap-x-32">
      <img src={Versace} alt="" className="scale-75 xl:scale-125" />
      <img src={Zara} alt="" className="scale-75 xl:scale-125" />
      <img src={Gucci} alt="" className="scale-75 xl:scale-125" />
      <img src={Prada} alt="" className="scale-75 xl:scale-125" />
      <img src={CalvinKlein} alt="" className="scale-90 xl:scale-125" />
    </div>
  );
};

export default BrandBar;
