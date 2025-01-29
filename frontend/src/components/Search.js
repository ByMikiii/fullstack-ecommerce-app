import React from "react";
import "../tailwind.css";

import Glass from "../assets/Glass.png";
const Search = () => {
  return (
    <div class="h-12 w-[577px] flex px-4 bg-main rounded-[62px]">
      <img src={Glass} alt="" class="h-[24px] self-center" />
      <input
        type="text"
        placeholder="Search for products..."
        class="ml-4 w-96"
      />
    </div>
  );
};

export default Search;
