import React from "react";
import Filters from "../../assets/Filters.png";
import DropdownArrow from "../../assets/DropdownArrow.png";
import SortDropdown from "../../components/SortDropdown";
import Review from "../../components/Review";
import Button from "../../components/Button";

const ProductReviews = () => {
  return (
    <div>
      <div class="flex justify-between items-end mt-8">
        <div class="flex items-center gap-2">
          <h5>All Reviews</h5>
          <small class="mt-1.5">(452)</small>
        </div>
        <div class="flex items-center gap-2">
          <button class="w-12 h-12 bg-main px-3 rounded-full cursor-pointer">
            <img src={Filters} alt="" />
          </button>
          <SortDropdown className={"bg-main h-12 px-5 py-3"} />
          <button class="bg-black text-white py-4 px-5 rounded-[62px] cursor-pointer">
            Write a Review
          </button>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <div class="mt-8 flex flex-wrap items-center justify-between gap-5">
          <Review showDate={true} className={"w-[49%]"} />
          <Review showDate={true} className={"w-[49%]"} />
          <Review showDate={true} className={"w-[49%]"} />
          <Review showDate={true} className={"w-[49%]"} />
          <Review showDate={true} className={"w-[49%]"} />
          <Review showDate={true} className={"w-[49%]"} />
        </div>
        <Button
          text="Load More Reviews"
          className={"border border-gray-200 w-[230px] cursor-pointer mt-9"}
        />
      </div>
    </div>
  );
};

export default ProductReviews;
