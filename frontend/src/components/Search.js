import React from "react";
import "../tailwind.css";

import Glass from "../assets/Glass.png";
const Search = ({ className }) => {
  return (
    <div className={`h-12 w-[40%] flex px-4 bg-main rounded-[62px] ${className}`}>
      <img src={Glass} alt="" className="h-[24px] self-center" />
      <input
        type="text"
        placeholder="Search for products..."
        className="ml-4 w-96"
      />
    </div>
  );
};

export default Search;
