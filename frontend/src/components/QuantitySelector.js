import React, { useState, useContext } from "react";
import Plus from "../assets/Plus.png";
import Minus from "../assets/Minus.png";
import { CartItemsCountContext } from "../App";

const QuantitySelector = ({ max, className, quantity, setQuantity, cartItem, setCartDetails }) => {
  const [cartItemCount, setCartItemCount] = useContext(CartItemsCountContext);

  function changeQuantity(difference) {
    let newQuantity = quantity + difference
    if (newQuantity > 0 && newQuantity <= 100) {
      setQuantity(newQuantity);
      const updatedCartItem = { ...cartItem, quantity: newQuantity };
      const fetchQuantityChange = async () => {
        try {
          const response = await fetch("http://localhost:8080/api/v1/cart/67ca41831cd7df030211d80e",
            {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedCartItem),
            }
          )
          if (!response.ok) {
            throw new Error("Error while changing quantity");
          }
          setCartItemCount(prev => prev + difference);

          const result = await response.json();
          setCartDetails(result);
          // const itemPrice = cartItem.product.sale ? cartItem.product.salePrice : cartItem.product.price;
          // setCartDetails(prev => ({
          //   ...prev,
          //   totalAmount: prev.totalAmount + (difference * itemPrice),
          //   discountAmount: prev.totalAmount + (difference * itemPrice)
          // }))

        } catch (e) {
          console.error(e)
        }
      }
      fetchQuantityChange();
    }
  }
  return (
    <div
      className={`bg-main flex items-center justify-between rounded-[62px] p-[14px] ${className}`}
    >
      <img
        src={Minus}
        alt=""
        className="w-6 h-6 cursor-pointer"
        onClick={() => changeQuantity(-1)}
      />
      <span className="font-[satoshi]">{quantity}</span>
      <img
        src={Plus}
        alt=""
        className="w-6 h-6 cursor-pointer"
        onClick={() => changeQuantity(1)}
      />
    </div>
  );
};

export default QuantitySelector;
