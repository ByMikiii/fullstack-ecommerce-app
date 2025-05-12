import Header from "../../components/Header";
import BreadCrumb from "../../components/BreadCrumb";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import Footer from "../../components/Footer";
import { useState, useEffect, useContext } from "react"
import { UserIdContext } from "../../App.js";


const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartDetails, setCartDetails] = useState({});
  const userId = useContext(UserIdContext);

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter(item => JSON.stringify(item) !== JSON.stringify(itemToRemove)));
  };

  const fetchCartItems = async () => {
    try {
      if (userId) {
        const response = await fetch("http://localhost:8080/api/v1/cart/" + userId);
        if (!response.ok) {
          throw new Error("Error fetching cart items!");
        }
        const result = await response.json();
        setCartDetails(result);
        setCartItems(result.items);
      } else {
        const cart = localStorage.getItem('cart')
        setCartDetails(JSON.parse(cart));
        setCartItems(JSON.parse(cart).items);
      }
    } catch (e) {

    }
  }

  useEffect(() => {
    fetchCartItems();
  }, [userId]);


  if (!cartItems) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header />
      <main>
        <BreadCrumb />
        <h3 className="font-[integral] mb-6">YOUR CART</h3>
        {cartItems.length !== 0 ? <div className="xl:flex  xl:justify-between">
          <div className="xl:w-[57%] px-6 py-5 rounded-[20px] border border-gray-200">
            {(cartItems).map((cartItem, index) => (
              <div key={index}>
                <CartItem cartItem={cartItem} removeItem={removeItemFromCart} setCartDetails={setCartDetails} className="" />
                <div className="border-b border-gray-200 my-6"></div>
              </div>
            ))}
          </div>
          <div className="mt-5 xl:my-0 xl:w-[40%]">
            <CartSummary cartDetails={cartDetails} setCartDetails={setCartDetails} className="" />
          </div>
        </div>
          :
          <div className="mx-auto w-[90%] py-52 rounded-[20px] border border-gray-200">
            <h1 className="flex items-center justify-center">YOUR CART IS EMPTY!</h1>
          </div>}

      </main>
      <Footer className="" />
    </>
  );
};

export default CartPage;
