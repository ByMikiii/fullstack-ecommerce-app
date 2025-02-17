import SignBanner from "../../components/SignBanner";
import Header from "../../components/Header";
import BreadCrumb from "../../components/BreadCrumb";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import Footer from "../../components/Footer";

const CartPage = () => {
  return (
    <>
      <SignBanner />
      <Header />
      <main>
        <BreadCrumb />
        <h3 className="font-[integral] mb-6">YOUR CART</h3>
        <div className="xl:flex  xl:justify-between">
          <div className="xl:w-[57%] px-6 py-5 rounded-[20px] border border-gray-200">
            <CartItem />
            <div className="border-b border-gray-200 my-6"></div>
            <CartItem />
            <div className="border-b border-gray-200 my-6"></div>
            <CartItem />
          </div>
          <div className="mt-5 xl:my-0 xl:w-[40%]">
            <CartSummary />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
