import React, { useState, useEffect } from "react";
import DropdownArrow from "../assets/DropdownArrow.png";

const FilterName = ({ categoryName }) => {
  const [isOpened, setIsOpened] = useState(true);

  useEffect(() => {
    const filterElement = document.getElementById(categoryName + "Filter");

    // to stop "flex" replacing with "block"
    var prevDisplay = "";
    if (filterElement.style.display != "hidden" && prevDisplay != "") {
      prevDisplay = filterElement.style.display;
    }
    if (filterElement) {
      filterElement.style.display = isOpened ? prevDisplay : "none";
    }
  }, [isOpened]);
  return (
    <div
      class="flex items-center justify-between pt-6 pb-5"
      onClick={() => setIsOpened((x) => !x)}
    >
      <h6>{categoryName}</h6>
      <img
        src={DropdownArrow}
        alt=""
        class={
          isOpened
            ? "rotate-90 transform transition-transform duration-300 ease-in-out"
            : "transform transition-transform duration-300 ease-in-out"
        }
      />
    </div>
  );
};

export default FilterName;
