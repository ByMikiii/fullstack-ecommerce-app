import React, { useEffect } from "react";
import ShirtImage from "../assets/products/shirt.png";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

const Product = ({ className, product }) => {

  return (
    <Link to={`/shop/product/${product.slug}`} className="h-72 mt-6 xl:mt-0 xl:h-80 xl:mb-36 hover:scale-102">
      <div className={`mb-[10px] xl:mb-4 xl:w-[295px] xl:h-[298px] ${className}`}>
        <img
          src={ShirtImage}
          alt=""
          className={`rounded-[20px] xl:w-[295px] xl:h-[298px] ${className}`}
        />
      </div>
      <h6 className="mb-1.5 truncate max-w-[172px] xl:max-w-[295px] hover:underline">{product.name.toUpperCase()}</h6>
      <StarRating rating="4.24" value="true" className="mb-1.5" />
      <div className="flex items-center">
        <h5>${product.sale ? product.salePrice : product.price}</h5>
        <div className={`flex items-center justify-center ${product.sale === true ? "block" : "hidden"}`}>
          <h5 className="text-gray-400 ml-2 line-through">{product.price}</h5>
          <small className="w-15 h-7 text-center p-1 rounded-[62px] bg-red-100 text-red-600 ml-2">
            {Math.round(100 - 100 / product.price * product.salePrice)}%
          </small>
        </div>
      </div>
    </Link>
  );
};

export default Product;
