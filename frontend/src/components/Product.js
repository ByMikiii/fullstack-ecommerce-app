import React, { useEffect } from "react";
import ShirtImage from "../assets/products/shirt.png";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

const Product = ({ className, product }) => {

  return (
    <Link to={`/shop/product/${product.slug}`} className={`rounded-[20px] mt-6 xl:mt-0 xl:h-80 xl:mb-36 ${className}`}>
      <div className={`rounded-[20px] mb-[10px] xl:mb-4 overflow-hidden`}>
        <img
          src={ShirtImage}
          alt=""
          className={`rounded-[20px] w-full h-[80%] object-cover transition-transform duration-300 hover:scale-110`}
        />
      </div>
      <h6 className="mb-1.5 truncate hover:underline">{product.name.toUpperCase()}</h6>
      <StarRating rating="4.24" value="true" className="mb-1.5" />
      <div className="flex items-center flex-wrap">
        <h5>${product.sale ? product.salePrice : product.price}</h5>
        <div className={`flex items-center justify-center ${product.sale === true ? "block" : "hidden"}`}>
          <h5 className="text-gray-400 ml-2 line-through">${product.price}</h5>
          <small className="w-15 h-7 text-center p-1 rounded-[62px] bg-red-100 text-red-600 ml-2">
            {Math.round(100 - 100 / product.price * product.salePrice)}%
          </small>
        </div>
      </div>
    </Link>
  );
};

export default Product;
