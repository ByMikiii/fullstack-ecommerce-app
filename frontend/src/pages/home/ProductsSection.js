import React from "react";
import Product from "../../components/Product";
import Button from "../../components/Button";

const ProductsSection = ({ categoryName, className }) => {
  return (
    <div
      class={`w-[80vw] mx-auto flex flex-col justify-center items-center ${className}`}
    >
      <h2 class="text-center mb-10">{categoryName}</h2>
      <div class="flex flex-wrap gap-5 max-w-[85vw] mx-auto justify-start items-start">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <p></p>
      <Button text="View All" className="border border-gray-400" />
    </div>
  );
};

export default ProductsSection;
