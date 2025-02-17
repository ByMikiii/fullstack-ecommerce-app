import React from "react";
import FilterName from "./FilterName";

const ColorFilter = () => {
  return (
    <div className="pb-6 border-b border-gray-200">
      <FilterName categoryName={"Colors"} />
      <ul id="ColorsFilter" className="flex flex-wrap justify-start gap-3">
        <li className="mb-2 w-[37px] h-[37px] bg-green-600 rounded-full border-1 border-green-700"></li>
        <li className="mb-2 w-[37px] h-[37px] bg-red-600 rounded-full border-1 border-red-700"></li>
        <li className="mb-2 w-[37px] h-[37px] bg-yellow-300 rounded-full border-1 border-yellow-400"></li>
        <li className="mb-2 w-[37px] h-[37px] bg-orange-600 rounded-full border-1 border-orange-700"></li>
        <li className="mb-2 w-[37px] h-[37px] bg-sky-400 rounded-full border-1 border-sky-500"></li>
        <li className="w-[37px] h-[37px] bg-blue-700 rounded-full border-1 border-blue-800"></li>
        <li className="w-[37px] h-[37px] bg-purple-600 rounded-full border-1 border-purple-700"></li>
        <li className="w-[37px] h-[37px] bg-pink-600 rounded-full border-1 border-pink-700"></li>
        <li className="w-[37px] h-[37px] bg-white rounded-full border-1 border-gray-200"></li>
        <li className="w-[37px] h-[37px] bg-black rounded-full border-1 border-black"></li>
      </ul>
    </div>
  );
};

export default ColorFilter;
