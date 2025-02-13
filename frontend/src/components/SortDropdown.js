import React from "react";

const SortDropdown = ({ className, text }) => {
  const sortOptions = [
    { value: "popular", label: "Most Popular" },
    { value: "priceLowToHigh", label: "Price: Low to High" },
    { value: "priceHighToLow", label: "Price: High to Low" },
    { value: "rating", label: "Rating" },
    { value: "name", label: "Name" },
  ];

  return (
    <div class={`rounded-[62px] cursor-pointer ${className}`}>
      <span>{text}</span>
      <select id="sort">
        {sortOptions.map((sortOption, index) => (
          <option value={sortOption.value}>{sortOption.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SortDropdown;
