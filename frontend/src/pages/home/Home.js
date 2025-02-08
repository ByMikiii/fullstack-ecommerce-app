import React from "react";
import SignBanner from "../../components/SignBanner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import BrandBar from "../../components/BrandBar";
import MainPhoto from "../../assets/MainPhoto.png";
import ProductsSection from "./ProductsSection";
import ShopReviews from "./ShopReviews";
import DressStyle from "./DressStyle";

const Home = () => {
  return (
    <div class="flex flex-col">
      <SignBanner />
      <Header />

      <div
        class="h-[85vh] px-24 pt-20 pb-20 flex-grow flex flex-col bg-no-repeat bg-center bg-cover w-[100vw] "
        style={{ backgroundImage: `url(${MainPhoto})` }}
      >
        <h1 class="w-[580px] mb-6 leading-tight">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <span class="w-[550px] mb-6">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </span>
        <Button text="Shop Now" className="text-white bg-black w-[210px]" />
        <ul class="flex mt-12 items-center">
          <li class="border-r border-gray-400 pr-8">
            <h3>200+</h3>
            <span>International Brands</span>
          </li>
          <li class="border-r border-gray-400 pr-8 pl-8">
            <h3>2,000+</h3>
            <span>High-Quality Products</span>
          </li>
          <li class="pl-8">
            <h3>30,000+</h3>
            <span>Happy Customers</span>
          </li>
        </ul>
      </div>
      <BrandBar />
      <ProductsSection
        categoryName="NEW ARRIVALS"
        className="mt-24 pb-20 border-b border-gray-300"
      />

      <ProductsSection categoryName="TOP SELLING" className="mt-24 pb-20" />

      <DressStyle className="mb-20" />

      <ShopReviews />

      <Footer />
    </div>
  );
};

export default Home;
