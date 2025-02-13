import React, { useState } from "react";
import StarRating from "../../components/StarRating";
import ColorSelector from "../../components/ColorSelector";
import SizeSelector from "../../components/SizeSelector";
import QuantitySelector from "../../components/QuantitySelector";
import Button from "../../components/Button";

const ProductInfo = () => {
  const images = require.context(
    "../../assets/products/t-shirt",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const tshirtImages = images.keys().map(images);
  const [currentImageSource, setCurrentImageSource] = useState(tshirtImages[0]);

  return (
    <div class="flex items-stretch gap-4 min-h-[530px]">
      <div class="flex flex-col justify-start gap-3 h-[530px] overflow-scroll">
        {tshirtImages.map((tshirtImage, index) => (
          <img
            src={tshirtImage}
            alt=""
            class={`w-[152px] h-[167px] rounded-[20px] ${
              currentImageSource === tshirtImage ? "border" : ""
            }`}
            onClick={() => setCurrentImageSource(tshirtImage)}
          />
        ))}
      </div>
      <img src={currentImageSource} alt="" class="h-[530px] rounded-[20px]" />
      <div class="ml-10">
        <div class="pb-6 border-b border-gray-200">
          <h3 class="font-[integral]">One Life Graphic T-shirt</h3>
          <StarRating rating={4.5} value={true} />
          <div class="flex">
            <h4>$260</h4>
            <h4 class="text-gray-400 ml-2 line-through">$300</h4>
          </div>
          <span class="line-clamp-2">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </span>
        </div>
        <div class="py-6 border-b border-gray-200">
          <span class="mb-2">Select Colors</span>
          <ColorSelector />
        </div>
        <div class="py-6 border-b border-gray-200">
          <span class="">Choose Size</span>
          <SizeSelector />
        </div>

        <div class="flex justify-between gap-5 mt-6">
          <QuantitySelector max={5} />
          <Button
            text={"Add to Cart"}
            className={"bg-black text-white flex-1 gap-5 cursor-pointer"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
