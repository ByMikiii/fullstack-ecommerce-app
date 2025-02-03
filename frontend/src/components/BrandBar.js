import React from "react";
import Gucci from "../assets/Gucci.png";
import CalvinKlein from "../assets/CalvinKlein.png";
import Prada from "../assets/Prada.png";
import Versace from "../assets/Versace.png";
import Zara from "../assets/Zara.png";

const BrandBar = () => {
  return (
    <div class="bg-black flex items-center justify-center h-[122px]">
      <img src={Versace} alt="" class="mx-14" />
      <img src={Zara} alt="" class="mx-14" />
      <img src={Gucci} alt="" class="mx-14" />
      <img src={Prada} alt="" class="mx-14" />
      <img src={CalvinKlein} alt="" class="mx-14" />
    </div>
  );
};

export default BrandBar;
