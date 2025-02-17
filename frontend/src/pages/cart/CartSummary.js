import Button from "../../components/Button";
import Discount from "../../assets/Discount.png";

const CartSummary = ({ className }) => {
  return (
    <div className={`py-5 px-6 rounded-[20px] border border-gray-200 ${className}`}>
      <h5>Order Summary</h5>
      <div className="py-6">
        <div className="flex flex-col gap-4 pb-5 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h6 className="text-gray-400">Subtotal</h6>
            <h6>$565</h6>
          </div>
          <div className="flex items-center justify-between">
            <h6 className="text-gray-400">Discount (-20%)</h6>
            <h6 className="text-red-600"> -$113</h6>
          </div>

          <div className="flex items-center justify-between">
            <h6 className="text-gray-400">Delivery Fee</h6>
            <h6> $15</h6>
          </div>
        </div>
        <div className="flex items-center justify-between pt-5">
          <h6 className="text-gray-600">Total</h6>
          <h5> $467</h5>
        </div>
      </div>
      <div className="flex items-center justify-between my-6">
        <div className="flex items-center px-4 py-3 h-12 w-[72%] bg-main rounded-[62px]">
          <img src={Discount} alt="" className="w-6 h-6 mr-3" />
          <input type="text" placeholder="Add promocode" className="w-full" />
        </div>
        <Button text={"Apply"} className={"bg-black text-white w-[26%] cursor-pointer"} />
      </div>
      <Button
        text={"Go to Checkout"}
        className={"text-white bg-black w-full"}
      />
    </div>
  );
};

export default CartSummary;
