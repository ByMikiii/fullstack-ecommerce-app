import Button from "../../components/Button";
import Discount from "../../assets/Discount.png";
import { useState, useEffect } from "react";

const CartSummary = ({ className, cartDetails }) => {
  const [discountCode, setDiscountCode] = useState("");

  useEffect(() => {
    cartDetails.discount.active && setDiscountCode(cartDetails.discount.code)
  }, [cartDetails])


  return (
    <div className={`py-5 px-6 rounded-[20px] border border-gray-200 ${className}`}>
      <h5>Order Summary</h5>
      <div className="py-6">
        <div className="flex flex-col gap-4 pb-5 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h6 className="text-gray-400">Subtotal</h6>
            <h6>${Math.round(cartDetails.totalAmount * 100) / 100}</h6>
          </div>
          <div className="flex items-center justify-between">
            <h6 className="text-gray-400">Discount {cartDetails.discount.percentage && `(-${cartDetails.discount.value}%) `}</h6>
            <h6 className="text-red-600"> -${cartDetails.discount.active ? cartDetails.discount.active && cartDetails.totalAmount - cartDetails.discountAmount : 0}</h6>
          </div>

          <div className="flex items-center justify-between">
            <h6 className="text-gray-400">Delivery Fee</h6>
            <h6>${cartDetails.deliveryFee}</h6>
          </div>
        </div>
        <div className="flex items-center justify-between pt-5">
          <h6 className="text-gray-600">Total</h6>
          <h5>${cartDetails.discountAmount + cartDetails.deliveryFee}</h5>
        </div>
      </div>
      <div className="flex items-center justify-between my-6">
        <div className="flex items-center px-4 py-3 h-12 w-[72%] bg-main rounded-[62px]">
          <img src={Discount} alt="" className="w-6 h-6 mr-3" />
          <input type="text" placeholder="Add promocode" className="w-full" value={discountCode} onChange={(prev) => setDiscountCode(prev.target.value)} disabled={cartDetails.discount.active} />
        </div>
        <Button text={cartDetails.discount.active ? "Remove" : "Apply"} className={"bg-black text-white w-[26%] cursor-pointer"} />
      </div>
      <Button
        text={"Go to Checkout"}
        className={"text-white bg-black w-full"}
      />
    </div>
  );
};

export default CartSummary;
