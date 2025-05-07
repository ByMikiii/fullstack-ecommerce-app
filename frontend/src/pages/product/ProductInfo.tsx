import React, { useState, useContext } from "react";
import StarRating from "../../components/StarRating.js";
import ColorSelector from "../../components/ColorSelector.js";
import SizeSelector from "../../components/SizeSelector.js";
import QuantitySelector from "../../components/QuantitySelector.js";
import Button from "../../components/Button.js";
import { PopupContext, CartItemsCountContext } from "../../App.js";
import { UserIdContext } from "../../App.js";

type CartItem = {
  product: any;
  selectedSize: any;
  selectedColor: string | null;
  quantity: number;
  totalPrice: number;
};

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
  const [userId, setUserId] = useContext(UserIdContext);

  const addToCart = async () => {
    try {
      const cartItem:CartItem = {
        product: product,
        selectedSize: activeSize,
        selectedColor: null,
        quantity: quantity,
        totalPrice: product.sale ? quantity * product.salePrice : quantity * product.price
      }

      if (userId) {
        const response = await fetch(`http://localhost:8080/api/v1/cart/${userId}`, {
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
      } else {
        const cart = localStorage.getItem('cart');

        // update local cart
        if (cart) {
          let parsedCart = JSON.parse(cart);
          let cartItems = parsedCart.items;
          let changed = false;
          let totalPrice = 0;
          cartItems.forEach(item => {
            if(item.product.id === cartItem.product.id && item.selectedSize === cartItem.selectedSize){
              item.quantity += quantity;
              changed = true;
            }
            totalPrice += item.totalPrice * item.quantity;
          });
          if(changed === false){
            cartItems.push(cartItem);
            totalPrice += cartItem.totalPrice * cartItem.quantity;
          }

          const newCart = {
            deliveryFee: 15,
            discountAmount: totalPrice,
            totalAmount: totalPrice,
            items: cartItems
          }
          localStorage.setItem('cart', JSON.stringify(newCart));
        }
        // create new local cart
        else {
          let items:CartItem[] = [];
          items.push(cartItem);
          const newCart = {
            deliveryFee: 15,
            discountAmount: cartItem.totalPrice,
            totalAmount: cartItem.totalPrice,
            items: items
          }
          localStorage.setItem('cart', JSON.stringify(newCart));
        }
      }
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
