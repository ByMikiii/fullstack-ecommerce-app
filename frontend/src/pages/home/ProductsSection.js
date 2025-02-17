import React from "react";
import Product from "../../components/Product";
import Button from "../../components/Button";

const ProductsSection = ({ categoryName, className }) => {
  return (
    <div
      className={`w-full xl:w-[80vw] mx-auto flex flex-col justify-center items-center ${className}`}
    >
      <h2 className="text-center mb-10">{categoryName}</h2>
      <div className="w-full relative">
        <div className="flex justify-start items-start xl:items-center xl:justify-center overflow-x-auto no-scrollbar gap-5 xl:max-w-[85vw]  p-4 h-[350px] xl:h-auto">
          <Product className={"w-[198px] h-[200px]"} />
          <Product className={"w-[198px] h-[200px]"} />
          <Product className={"w-[198px] h-[200px]"} />
          <Product className={"w-[198px] h-[200px]"} />
        </div>
      </div>

      <Button text="View All" className="border border-gray-400 w-[91%] xl:w-[218px]" />
    </div>
  );
};

export default ProductsSection;
