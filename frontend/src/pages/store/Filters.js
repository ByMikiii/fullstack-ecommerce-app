import React from "react";
import FiltersIcon from "../../assets/Filters.png";
import CategoryFilter from "../../components/CategoryFilter";
import PriceFilter from "../../components/PriceFilter";
import ColorFilter from "../../components/ColorFilter";
import SizeFilter from "../../components/SizeFilter";
import StyleFilter from "../../components/StyleFilter";
import Button from "../../components/Button";

const Filters = () => {
  return (
    <div class="w-[295px] py-5 px-6 rounded-[20px] border border-gray-200 ">
      <div class="flex items-center justify-between pb-6 border-b border-b-gray-200">
        <h6>Filters</h6>
        <img src={FiltersIcon} alt="" class="w-6 h-6" />
      </div>
      <div class="py-6 border-b border-b-gray-200">
        <CategoryFilter categoryName={"T-shirts"} />
        <CategoryFilter categoryName={"Shorts"} />
        <CategoryFilter categoryName={"Shirts"} />
        <CategoryFilter categoryName={"Hoodie"} />
        <CategoryFilter categoryName={"Jeans"} />
      </div>
      <PriceFilter />
      <ColorFilter />
      <SizeFilter />

      <StyleFilter />

      <Button
        text={"Apply Filter"}
        className={"bg-black text-white w-[247px]"}
      />
    </div>
  );
};

export default Filters;
