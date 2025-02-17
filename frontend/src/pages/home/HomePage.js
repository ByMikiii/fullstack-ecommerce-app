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
    <div className="flex flex-col">
      <SignBanner />
      <Header />

      <div
        className="h-[110vh] xl:h-[85vh] px-4 xl:px-24 pt-20 pb-20 flex-grow flex flex-col bg-no-repeat bg-fit bg-[-490px_bottom] xl:bg-cover xl:bg-center w-[100vw] bg-second bg-[length:960px]"
        style={{ backgroundImage: `url(${MainPhoto})` }}
      >
        <h1 className="w-[315px] xl:w-[580px] mb-6 leading-tight ">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <span className="xl:w-[550px] mb-6">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </span>
        <Button text="Shop Now" className="text-white bg-black w-full xl:w-[210px]" />
        <ul className="max-w-[596px] mt-12 grid grid-cols-2 xl:grid-cols-3 text-center xl:text-left">
          <li className="border-r border-gray-400 px-4">
            <h3>200+</h3>
            <span className="text-[12px] xl:text-[16px]">International Brands</span>
          </li>
          <li className="xl:border-r border-gray-400 px-4">
            <h3>2,000+</h3>
            <span className="text-[12px] xl:text-[16px]">High-Quality Products</span>
          </li>
          <li className="col-span-2 xl:col-span-1 px-4">
            <h3>30,000+</h3>
            <span className="text-[12px] xl:text-[16px]">Happy Customers</span>
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

      <ShopReviews className={"hidden xl:block"} />

      <Footer />
    </div>
  );
};

export default Home;
