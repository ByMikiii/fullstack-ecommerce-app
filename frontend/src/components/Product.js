import React from "react";
import ShirtImage from "../assets/products/shirt.png";
import StarRating from "./StarRating";
const Product = () => {
  return (
    <div class="h-80 mb-36">
      <div class="mb-4">
        <img
          src={ShirtImage}
          alt=""
          class="rounded-[20px] w-[295px] h-[298px]"
        />
      </div>
      <h6 class="mb-1.5">VERTICAL STRIPED SHIRT</h6>
      <StarRating rating="4.24" value="true" className="mb-1.5" />
      <div class="flex items-center">
        <h5>$120</h5>
        <h5 class="text-gray-400 ml-2 line-through">$140</h5>
        <small class="w-15 h-7 text-center p-1 rounded-[62px] bg-red-100 text-red-600 ml-2">
          {" "}
          -20%{" "}
        </small>
      </div>
    </div>
  );
};

export default Product;
