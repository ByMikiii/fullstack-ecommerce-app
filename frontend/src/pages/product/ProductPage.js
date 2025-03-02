import React, { useState, useEffect } from "react";

import SignBanner from "../../components/SignBanner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/BreadCrumb";
import ProductInfo from "./ProductInfo";
import ProductsSection from "../home/ProductsSection";
import ProductReviews from "./ProductReviews";
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const [activeCategory, setActiveCategory] = useState(2);
  const [product, setProduct] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await (fetch(`http://localhost:8080/api/v1/products/${slug}`));
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (e) {
        console.error("Error fetching product:", e)
      }
    }
    fetchProduct();

  }, [slug])



  return (
    <>
      <Header />
      <main>
        <BreadCrumb />
        <ProductInfo product={product} />

        <div>
          <div className="mt-14 flex border-b border-gray-200">
            <button
              className={`w-1/3 py-6 cursor-pointer text-left xl:text-center ${activeCategory === 1 ? "border-b border-black" : ""
                }`}
              onClick={() => setActiveCategory(1)}
            >
              Product Details
            </button>
            <button
              className={`w-1/3 py-6 cursor-pointer ${activeCategory === 2 ? "border-b border-black" : ""
                }`}
              onClick={() => setActiveCategory(2)}
            >
              Rating & Reviews
            </button>
            <button
              className={`w-1/3 py-6 cursor-pointer text-right xl:text-center ${activeCategory === 3 ? "border-b border-black" : ""
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
