import React, { useState, useContext } from "react";
import Plus from "../assets/Plus.png";
import Minus from "../assets/Minus.png";
import { CartItemsCountContext, UserIdContext } from "../App";

const QuantitySelector = ({ max, className, quantity, setQuantity, cartItem, setCartDetails }) => {
  const [cartItemCount, setCartItemCount] = useContext(CartItemsCountContext);
  const [userId, setUserId] = useContext(UserIdContext);

  function changeQuantity(difference) {
    let newQuantity = quantity + difference
    if (newQuantity > 0 && newQuantity <= 100) {
      setQuantity(newQuantity);
      const fetchQuantityChange = async () => {
        try {
          if (userId) {
            const updatedCartItem = { ...cartItem, quantity: newQuantity };
            const response = await fetch(`http://localhost:8080/api/v1/cart/${userId}`,
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
          }
          else {
            let cart = JSON.parse(localStorage.getItem('cart'));
            let cartItems = cart ? cart.items : [];
            let totalAmount = cart.totalAmount;
            for (let item of cartItems) {
              if (item.product.id === cartItem.product.id && item.selectedSize === cartItem.selectedSize) {
                item.quantity = Math.max(0, item.quantity + difference);
                totalAmount = Math.max(0, cart.totalAmount + difference * item.totalPrice); break;
              }
            }
            const newCart = {
              deliveryFee: 15,
              discountAmount: totalAmount,
              totalAmount: totalAmount,
              items: cartItems
            }
            setCartDetails(newCart);
            setCartItemCount(prev => prev + difference);
            localStorage.setItem('cart', JSON.stringify(newCart));
          }
        } catch (e) {
          console.error(e)
        }
      }
      if (cartItem) {
        fetchQuantityChange();
      }
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
