import tshirt1 from "../../assets/products/t-shirt/t-shirt1.png";
import QuantitySelector from "../../components/QuantitySelector";
import Trash from "../../assets/Trash.png";

const CartItem = ({ className }) => {
  return (
    <>
      <div className={`h-[99px] xl:h-31 ${className}`}>
        <div className="flex relative">
          <img src={Trash} alt="" className="w-[16px] h-[17px] xl:w-[18px] xl:h-[20px] absolute right-0 top-1" />

          <a href="/shop/men/t-shirts" className="cursor-pointer mr-4 h-[99px] w-[99px] xl:w-31 xl:h-31">
            <img
              src={tshirt1}
              alt=""
              className="object-cover rounded-[8px]"
            />
          </a>
          <div className="w-full">
            <a href="/shop/men/t-shirts" className="cursor-pointer">
              <h6 className="w-full ">Gradient Graphic T-shirt</h6>
            </a>

            <div className="flex">
              <span className="mr-1 text-gray-900 text-xs xl:text-sm">Size:</span>
              <span className="text-gray-500 text-xs xl:text-sm">Large</span>
            </div>
            <div className="flex">
              <span className="mr-1 text-gray-900 text-xs xl:text-sm">Color:</span>
              <span className="text-gray-500 text-xs xl:text-sm">White</span>
            </div>
            <div className="flex items-center justify-between mt-3 xl:mt-4">
              <h5 className="">$145</h5>
              <QuantitySelector max={5} className="h-[31px] xl:h-11 w-[126px]" />

            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default CartItem;
