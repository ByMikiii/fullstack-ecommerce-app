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
    <div className="xl:flex items-stretch gap-4 min-h-[530px]">

      <img
        src={currentImageSource}
        alt=""
        className="xl:h-[530px] xl:order-2 rounded-[20px] object-cover"
      />
      <div className="mt-3 mb-5 xl:my-0 flex xl:flex-col xl:order-1 justify-start gap-3 xl:h-[530px] overflow-x-auto">
        {tshirtImages.map((tshirtImage, index) => (
          <img
            src={tshirtImage}
            alt=""
            key={index}
            className={`w-[112px] h-[106px] xl:w-[152px] xl:h-[167px] rounded-[20px] object-cover ${currentImageSource === tshirtImage ? "border" : ""
              }`}
            onClick={() => setCurrentImageSource(tshirtImage)}
          />
        ))}
      </div>

      <div className="xl:ml-10 xl:order-3">
        <div className="pb-6 border-b border-gray-200">
          <h3 className="font-[integral] w-2/3">One Life Graphic T-shirt</h3>
          <StarRating rating={4.5} value={true} />
          <div className="flex items-center">
            <h4>$260</h4>
            <h4 className="text-gray-400 ml-2 line-through">$300</h4>
            <small className="w-15 h-7 text-center p-1 rounded-[62px] bg-red-100 text-red-600 ml-2">
              -20%
            </small>
          </div>
          <span className="line-clamp-2">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </span>
        </div>
        <div className="py-6 border-b border-gray-200">
          <span className="mb-2">Select Colors</span>
          <ColorSelector />
        </div>
        <div className="py-6 border-b border-gray-200">
          <span className="">Choose Size</span>
          <SizeSelector />
        </div>

        <div className="flex justify-between gap-5 mt-6">
          <QuantitySelector max={5} className={"w-[170px]"} />
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
