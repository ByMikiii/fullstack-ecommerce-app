import React, { useState } from "react";
import Check from "../assets/Check.png";

const ColorSelector = () => {
  const colors = [
    { id: 1, hex: "#5A5036" },
    { id: 2, hex: "#314C45" },
    { id: 3, hex: "#2D2E50" },
  ];
  const [selectedColor, setSelectedColor] = useState(colors[0].id);
  return (
    <div class="flex gap-4 flex-wrap mt-3">
      {colors.map((color) => (
        <button
          key={color.id}
          class={`w-[37px] h-[37px] rounded-full cursor-pointer`}
          style={{ backgroundColor: color.hex }}
          onClick={() => setSelectedColor(color.id)}
        >
          {color.id === selectedColor && (
            <img src={Check} alt="" class="mx-auto" />
          )}
        </button>
      ))}
    </div>
  );
};

export default ColorSelector;
