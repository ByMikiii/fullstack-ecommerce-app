import React, { useState } from "react";
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
import FiltersImage from "../../assets/Filters.png";

const ShopPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <>
      <SignBanner />
      <Header />
      <main>
        <BreadCrumb />
        <div className="flex items-start">
          <Filters hideFilters={() => setShowFilters(false)} className={`${showFilters ? "" : "hidden xl:block"}`} />
          <section className={`w-full xl:ml-5 ${showFilters ? "hidden xl:block" : ""}`}>
            <div className="flex items-center justify-between">
              <h4 className="mb-4">Casual</h4>
              <div className="flex items-center">
                <span className="mr-3 text-gray-400">
                  Showing 1-10 of 100 Products
                </span>
                <img src={FiltersImage} alt="" onClick={() => setShowFilters((x) => !x)} />
                {/* <SortDropdown text={"Sort by: "} /> */}
              </div>
            </div>
            <div className="flex flex-wrap justify-between xl:gap-5 border-b border-gray-200 pb-12">
              <Product className={"w-[172px] h-[172px]"} />
              <Product className={"w-[172px] h-[172px]"} />
              <Product className={"w-[172px] h-[172px]"} />
              <Product className={"w-[172px] h-[172px]"} />
              <Product className={"w-[172px] h-[172px]"} />
              <Product className={"w-[172px] h-[172px]"} />
              <Product className={"w-[172px] h-[172px]"} />
              <Product className={"w-[172px] h-[172px]"} />
              <Product className={"w-[172px] h-[172px]"} />
            </div>
            <div className="px-1 flex items-center justify-between mt-5">
              <button className="border border-gray-200 px-[14px] py-[8px] rounded-[8px] font-[satoshi] text-xs flex items-center">
                <img src={ArrowLeft} alt="" className="w-5 h-5 mr-1" />
                Previous
              </button>

              <PaginationButtons pagesNum={5} />

              <button className="border border-gray-200 px-[14px] py-[8px] rounded-[8px] font-[satoshi] text-xs flex items-center">
                Next
                <img src={ArrowRight} alt="" className="w-5 h-5 ml-1" />
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer className={`${showFilters ? "hidden xl:block" : ""}`} />
    </>
  );
};

export default ShopPage;
