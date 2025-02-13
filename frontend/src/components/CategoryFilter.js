import React, { use, useState } from "react";
import DropdownArrow from "../assets/DropdownArrow.png";

const CategoryFilter = ({ categoryName }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div class="mb-3">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpened((x) => !x)}
      >
        <span class="text-gray-800">{categoryName}</span>
        <img src={DropdownArrow} alt="" class={isOpened ? "rotate-90" : ""} />
      </div>
      <ul
        class={`pl-1 py-1 flex flex-col text-gray-600 ${
          isOpened ? "" : "hidden"
        }`}
      >
        <li class="my-1">Graphic Tees</li>
        <li class="my-1">Plain</li>
        <li class="my-1">Oversized</li>
      </ul>
    </div>
  );
};

export default CategoryFilter;
