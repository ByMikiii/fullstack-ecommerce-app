import React, { useState } from "react";
import Plus from "../assets/Plus.png";
import Minus from "../assets/Minus.png";

const QuantitySelector = ({ max }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div class="bg-main flex items-center justify-between rounded-[62px] w-[170px] p-[14px]">
      <img
        src={Minus}
        alt=""
        class="w-6 h-6 cursor-pointer"
        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
      />
      <span class="font-[satoshi]">{quantity}</span>
      <img
        src={Plus}
        alt=""
        class="w-6 h-6 cursor-pointer"
        onClick={() => quantity < max && setQuantity(quantity + 1)}
      />
    </div>
  );
};

export default QuantitySelector;
