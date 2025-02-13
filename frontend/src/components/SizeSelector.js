import React, { useState } from "react";
const sizes = [
  { id: 1, text: "Small" },
  { id: 2, text: "Medium" },
  { id: 3, text: "Large" },
  { id: 4, text: "X-Large" },
];
const SizeSelector = () => {
  const [activeSize, setActiveSize] = useState(sizes[0].id);
  return (
    <div class="flex gap-1.5 flex-wrap mt-3">
      {sizes.map((size) => (
        <button
          key={size.id}
          class={`px-6 py-3 rounded-[62px] cursor-pointer ${
            activeSize === size.id
              ? "bg-black text-white"
              : "bg-main text-gray-600"
          }`}
          onClick={() => setActiveSize(size.id)}
        >
          {size.text}
        </button>
      ))}
    </div>
  );
};
export default SizeSelector;
