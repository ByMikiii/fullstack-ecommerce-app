import React, { useState } from "react";

import SignBanner from "../../components/SignBanner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/BreadCrumb";
import ProductInfo from "./ProductInfo";
import ProductsSection from "../home/ProductsSection";
import ProductReviews from "./ProductReviews";

const ProductPage = () => {
  const [activeCategory, setActiveCategory] = useState(2);

  return (
    <>
      <SignBanner />
      <Header />
      <main>
        <BreadCrumb />
        <ProductInfo />

        <div>
          <div class="mt-14 flex border-b border-gray-200">
            <button
              class={`w-1/3 py-6 cursor-pointer ${
                activeCategory === 1 ? "border-b border-black" : ""
              }`}
              onClick={() => setActiveCategory(1)}
            >
              Product Details
            </button>
            <button
              class={`w-1/3 py-6 cursor-pointer ${
                activeCategory === 2 ? "border-b border-black" : ""
              }`}
              onClick={() => setActiveCategory(2)}
            >
              Rating & Reviews
            </button>
            <button
              class={`w-1/3 py-6 cursor-pointer ${
                activeCategory === 3 ? "border-b border-black" : ""
              }`}
              onClick={() => setActiveCategory(3)}
            >
              FAQs
            </button>
          </div>
          <ProductReviews />
        </div>

        <ProductsSection
          categoryName={"You might also like"}
          className={"mt-24"}
        />
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
