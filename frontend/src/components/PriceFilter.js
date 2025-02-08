import React, { useState } from "react";
import FilterName from "./FilterName";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const PriceFilter = () => {
  const [sliderValue, setSliderValue] = useState([0, 100]);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <div class="border-b border-gray-200 pb-6">
      <FilterName categoryName={"Price"} />
      <div id="PriceFilter" class="py-2">
        <RangeSlider
          defaultValue={[0, 100]}
          value={sliderValue}
          onInput={handleSliderChange}
        />
        <div class="flex items-center justify-between pt-2">
          <span>{sliderValue[0]}</span>
          <span>{sliderValue[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
