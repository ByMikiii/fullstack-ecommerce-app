import { useState } from "react";
import DropdownArrow from "../assets/DropdownArrow.png";

const CategoryFilter = ({ categoryName }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="mb-3">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpened((x) => !x)}
      >
        <span className="text-gray-800">{categoryName}</span>
        <img src={DropdownArrow} alt="" className={isOpened ? "rotate-90" : ""} />
      </div>
      <ul
        className={`pl-1 py-1 flex flex-col text-gray-600 ${isOpened ? "" : "hidden"
          }`}
      >
        <li className="my-1">Graphic Tees</li>
        <li className="my-1">Plain</li>
        <li className="my-1">Oversized</li>
      </ul>
    </div>
  );
};

export default CategoryFilter;
