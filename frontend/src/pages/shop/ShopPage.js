import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Product from "../../components/Product";
import ArrowLeft from "../../assets/ArrowLeft.png";
import ArrowRight from "../../assets/ArrowRight.png";
import PaginationButtons from "../../components/PaginationButtons";
import BreadCrumb from "../../components/BreadCrumb";
import Filters from "./Filters";
import FiltersImage from "../../assets/Filters.png";

const ShopPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
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
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-12 border-b border-gray-200 pb-12">
              {products.map((product, index) => (
                <Product className={"max-w-[272px] max-h-[316px]"} key={index} product={product} />
              ))}
              {/* <Product className={"w-[172px] h-[172px]"} />
              <Product className={"w-[172px] h-[172px]"} />
              <Product className={"w-[172px] h-[172px]"} />
              <Product className={"w-[172px] h-[172px]"} />
              <Product className={"w-[172px] h-[172px]"} />
              <Product className={"w-[172px] h-[172px]"} />
              <Product className={"w-[172px] h-[172px]"} />
              <Product className={"w-[172px] h-[172px]"} />
              <Product className={"w-[172px] h-[172px]"} /> */}
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
