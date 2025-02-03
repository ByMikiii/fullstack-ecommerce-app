import React from "react";
import StarRating from "./StarRating";
import Verified from "../assets/Verified.png";

const ShopReview = () => {
  return (
    <div class="w-[400px] h-60 border border-gray-300 rounded-[20px] p-7 flex flex-col">
      <StarRating rating="5" className="mb-2" />
      <div class="flex items-center mb-2">
        <bold class="text-xl font-bold"> Alex K. </bold>
        <img src={Verified} alt="" class="w-6 h-6 ml-2" />
      </div>
      <span class="text-gray-700">
        "Finding clothes that align with my personal style used to be a
        challenge until I discovered Shop.co. The range of options they offer is
        truly remarkable, catering to a variety of tastes and occasions.”
      </span>
    </div>
  );
};

export default ShopReview;
