import React, { useState } from "react";
import Plus from "../assets/Plus.png";
import Minus from "../assets/Minus.png";

const QuantitySelector = ({ max, className }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div
      className={`bg-main flex items-center justify-between rounded-[62px] p-[14px] ${className}`}
    >
      <img
        src={Minus}
        alt=""
        className="w-6 h-6 cursor-pointer"
        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
      />
      <span className="font-[satoshi]">{quantity}</span>
      <img
        src={Plus}
        alt=""
        className="w-6 h-6 cursor-pointer"
        onClick={() => quantity < max && setQuantity(quantity + 1)}
      />
    </div>
  );
};

export default QuantitySelector;
