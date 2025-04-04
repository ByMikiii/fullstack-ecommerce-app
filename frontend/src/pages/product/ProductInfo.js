import React, { useState, useEffect, useContext } from "react";
import StarRating from "../../components/StarRating";
import ColorSelector from "../../components/ColorSelector";
import SizeSelector from "../../components/SizeSelector";
import QuantitySelector from "../../components/QuantitySelector";
import Button from "../../components/Button";
import { PopupContext, CartItemsCountContext } from "../../App";

const ProductInfo = ({ product }) => {
  const images = require.context(
    "../../assets/products/t-shirt",
    false,
    /\.(png|jpe?g|svg)$/
  );
  const [color, setColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const tshirtImages = images.keys().map(images);
  const [currentImageSource, setCurrentImageSource] = useState(tshirtImages[0]);
  const [popupMessage, setPopupMessage] = useContext(PopupContext);
  const [cartItemCount, setCartItemCount] = useContext(CartItemsCountContext)

  const addToCart = async () => {
    try {
      const cartItem = {
        product: product,
        selectedSize: activeSize,
        selectedColor: null,
        quantity: quantity,
        totalPrice: quantity * product.price
      }

      const response = await fetch("http://localhost:8080/api/v1/cart/67ca41831cd7df030211d80e", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItem),
      });
      if (!response.ok) {
        throw new Error("Error while adding product to Cart");
      }
      const result = await response.json();
      setCartItemCount(prev => {
        return prev + quantity;
      })
      setPopupMessage("Item successfully added to the card!")
    } catch (e) {
      setPopupMessage("Error while adding product to the cart!")
    }
  }


  if (!product) {
    return <div>Loading...</div>
  }
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
          <h3 className="font-[integral] w-2/3">{product.name}</h3>
          <StarRating rating={4.5} value={true} />
          <div className="flex items-center">
            <h4>${product.sale ? product.salePrice : product.price}</h4>
            <div className={`flex items-center justify-center ${product.sale === true ? "block" : "hidden"}`}>
              <h4 className="text-gray-400 ml-2 line-through">{product.price}</h4>
              <small className="w-15 h-7 text-center p-1 rounded-[62px] bg-red-100 text-red-600 ml-2">
                {Math.round(100 - 100 / product.price * product.salePrice)}%
              </small>
            </div>
          </div>
          <span className="line-clamp-2">
            {product.descriptio}
          </span>
        </div>
        <div className="py-6 border-b border-gray-200">
          <span className="mb-2">Select Colors</span>
          <ColorSelector color={color} setColor={setColor} />
        </div>
        <div className="py-6 border-b border-gray-200">
          <span className="">Choose Size</span>
          <SizeSelector sizes={product.sizes} activeSize={activeSize} setActiveSize={setActiveSize} />
        </div>

        <div className="flex justify-between gap-5 mt-6">
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} max={5} className={"w-[170px]"} />
          <Button
            text={"Add to Cart"}
            className={"bg-black text-white flex-1 gap-5 cursor-pointer"}
            onClick={addToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
