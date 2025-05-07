import tshirt1 from "../../assets/products/t-shirt/t-shirt1.png";
import QuantitySelector from "../../components/QuantitySelector";
import Trash from "../../assets/Trash.png";
import { useState, useContext } from "react"
import { PopupContext, UserIdContext } from "../../App";

const CartItem = ({ className, cartItem, removeItem, setCartDetails }) => {
  const [quantity, setQuantity] = useState(cartItem.quantity ?? 1);
  const [popupMessage, setPopupMessage] = useContext(PopupContext);
  const [userId, setUserId] = useContext(UserIdContext);

  const removeFromCart = async () => {
    try {
      if (userId) {
        const response = await fetch("http://localhost:8080/api/v1/cart/" + userId,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItem),
          });
        if (!response.ok) {
          setPopupMessage("Error while removing items!");
          throw new Error("Error while removing items.");
        }
        else {
          removeItem(cartItem)
          const result = await response.json();
          setCartDetails(result);
        }
      } else {
        const cart = localStorage.getItem('cart');
        let parsedCart = JSON.parse(cart);
        let cartItems = parsedCart.items;
        cartItems = cartItems.filter(item => {
          return !(cartItem.product.id === item.product.id && cartItem.selectedSize === item.selectedSize);
        });

        let totalPrice = 0;
        cartItems.forEach(item => {
          totalPrice += item.totalPrice * item.quantity;
        });
        const newCart = {
          deliveryFee: 15,
          discountAmount: totalPrice,
          totalAmount: totalPrice,
          items: cartItems
        }
        removeItem(cartItem)
        setCartDetails(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
      }

      setPopupMessage("Item succesfully removed!");
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <div className={`h-[99px] xl:h-31 ${className}`}>
        <div className="flex relative">
          <img src={Trash} alt="" onClick={removeFromCart} className="w-[16px] h-[17px] xl:w-[18px] xl:h-[20px] absolute right-0 top-1 cursor-pointer" />

          <a href={`/shop/product/${cartItem.product.slug}`} className="cursor-pointer mr-4 h-[99px] w-[99px] xl:w-31 xl:h-31">
            <img
              src={tshirt1}
              alt=""
              className="object-cover rounded-[8px]"
            />
          </a>
          <div className="w-full">
            <a href={`/shop/product/${cartItem.product.slug}`} className="cursor-pointer">
              <h6 className="w-full ">{cartItem.product.name}</h6>
            </a>

            <div className="flex">
              <span className="mr-1 text-gray-900 text-xs xl:text-sm">Size:</span>
              <span className="text-gray-500 text-xs xl:text-sm">{cartItem.selectedSize}</span>
            </div>
            <div className="flex">
              <span className="mr-1 text-gray-900 text-xs xl:text-sm">Color:</span>
              <span className="text-gray-500 text-xs xl:text-sm">White</span>
            </div>
            <div className="flex items-center justify-between mt-3 xl:mt-4">
              <h5 className="">${cartItem.product.sale ? cartItem.product.salePrice : cartItem.product.price}</h5>
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} max={5} cartItem={cartItem} setCartDetails={setCartDetails} className="h-[31px] xl:h-11 w-[126px]" />

            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default CartItem;
