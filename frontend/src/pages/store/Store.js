import React from "react";
import Header from "../../components/Header";
import SignBanner from "../../components/SignBanner";
import Footer from "../../components/Footer";
import Product from "../../components/Product";
import ArrowLeft from "../../assets/ArrowLeft.png";
import ArrowRight from "../../assets/ArrowRight.png";
import PaginationButtons from "../../components/PaginationButtons";
import BreadCrumb from "../../components/BreadCrumb";
import Filters from "./Filters";
import SortDropdown from "../../components/SortDropdown";

const Store = () => {
  return (
    <>
      <SignBanner />
      <Header />
      <main>
        <BreadCrumb />
        <div class="flex items-start">
          <Filters />
          <section class="w-full px-5">
            <div class="flex items-center justify-between">
              <h4 class="mb-4">Casual</h4>
              <div class="flex">
                <span class="mr-3">Showing 1-10 of 100 Products</span>
                <SortDropdown />
              </div>
            </div>
            <div class="flex flex-wrap justify-between gap-5 border-b border-gray-200 pb-4">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
            <div class="px-1 flex items-center justify-between mt-5">
              <button class="border border-gray-200 px-[14px] py-[8px] rounded-[8px] font-[satoshi] flex items-center">
                <img src={ArrowLeft} alt="" class="w-5 h-5 mr-1" />
                Previous
              </button>

              <PaginationButtons pagesNum={5} />

              <button class="border border-gray-200 px-[14px] py-[8px] rounded-[8px] font-[satoshi] flex items-center">
                Next
                <img src={ArrowRight} alt="" class="w-5 h-5 ml-1" />
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Store;
