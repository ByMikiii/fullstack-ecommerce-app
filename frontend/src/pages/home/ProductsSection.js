import React from "react";
import Product from "../../components/Product";
import Button from "../../components/Button";

const ProductsSection = ({ categoryName, className }) => {
  const product = {
    id: 1,
    slug: "nike-air-max",
    name: "Nike Air Max",
    brand: "Nike",
    descriptio: "Comfortable running shoes with Air Max technology.",
    price: 149.99,
    quantity: 50,
    category: "Shoes",
    sizes: [
      { size: "M", quantity: 20 },
      { size: "L", quantity: 30 },
    ],
  };

  return (
    <div
      className={`w-full xl:w-[80vw] mx-auto flex flex-col justify-center items-center ${className}`}
    >
      <h2 className="text-center mb-10">{categoryName}</h2>
      <div className="w-full relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center justify-center content-center overflow-x-auto no-scrollbar p-4 h-auto md:w-2/3 xl:w-4/5 md:mx-auto">
          <Product className={"w-[198px] h-[312px]"} product={product} />
          <Product className={"w-[198px] h-[312px]"} product={product} />
          <Product className={"w-[198px] h-[312px]"} product={product} />
          <Product className={"w-[198px] h-[312px]"} product={product} />
        </div>
      </div>

      <Button text="View All" className="border border-gray-400 w-[91%] sm:w-[218px]" />
    </div>
  );
};

export default ProductsSection;
