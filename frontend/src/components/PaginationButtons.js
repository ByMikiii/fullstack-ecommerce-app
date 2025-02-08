import React from "react";

const PaginationButtons = ({ pagesNum }) => {
  return (
    <div class="flex gap-2">
      {[...Array(pagesNum)].map((_, index) => (
        <button
          class={`w-10 h-10 rounded-[8px] ${
            index + 1 === 1 ? "bg-gray-100" : ""
          }`}
          key={index}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default PaginationButtons;
