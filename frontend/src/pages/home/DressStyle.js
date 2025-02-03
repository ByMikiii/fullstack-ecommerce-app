import React from "react";
import Gym from "../../assets/Gym.png";
import Formal from "../../assets/Formal.png";
import Party from "../../assets/Party.png";
import Casual from "../../assets/Casual.png";

const DressStyle = ({ className }) => {
  return (
    <div
      class={`w-[85%] h-[840px] rounded-[40px] bg-main mx-auto flex flex-col items-center justify-center ${className}`}
    >
      <h2 class="mb-16">BROWSE BY DRESS STYLE</h2>
      <div class="flex gap-4 flex-wrap justify-center">
        <div
          class="h-72 min-w-72 basis-1/4 rounded-[20px] bg-center px-9 py-6"
          style={{ backgroundImage: `url(${Casual})` }}
        >
          <h5>Casual</h5>
        </div>
        <div
          class="h-72 min-w-72 basis-1/2 rounded-[20px] bg-center px-9 py-6"
          style={{ backgroundImage: `url(${Formal})` }}
        >
          <h5>Formal</h5>
        </div>
        <div
          class="h-72 min-w-72 basis-1/2 rounded-[20px] bg-center px-9 py-6"
          style={{ backgroundImage: `url(${Party})` }}
        >
          <h5>Party</h5>
        </div>
        <div
          class="h-72 min-w-72 basis-1/4 rounded-[20px] bg-center px-9 py-6"
          style={{ backgroundImage: `url(${Gym})` }}
        >
          <h5>Gym</h5>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
