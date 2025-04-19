import React, { useEffect, useState } from "react";
import Filters from "../../assets/Filters.png";
import SortDropdown from "../../components/SortDropdown";
import Review from "../../components/Review";
import Button from "../../components/Button";

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    if (!productId) return;

    const fetchReviews = async () => {
      const response = await fetch(`http://localhost:8080/api/v1/reviews/product/${productId}`);
      if (!response.ok) {
        throw new Error("Error while fetching reviews.");
      }
      const data = await response.json();
      setReviews(data)
    }
    fetchReviews();
    console.log(productId)
  }, [productId])

  useEffect(() => {
    console.log(reviews)
  }, [reviews])


  return (
    <div>
      <div className="flex justify-between items-end mt-8">
        <div className="flex items-center gap-2">
          <h5>All Reviews</h5>
          <small className="mt-1.5">({reviews.length})</small>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 xl:w-12 xl:h-12 bg-main px-3 rounded-full cursor-pointer">
            <img src={Filters} alt="" />
          </button>
          <SortDropdown className={"hidden xl:block bg-main h-12 px-5 py-3"} />
          <button className="bg-black text-white py-2 xl:py-4 px-5 rounded-[62px] cursor-pointer h-10 xl:h-12 text-sm">
            Write a Review
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full mt-8 flex flex-wrap items-center justify-between gap-5 mb-12">
          {reviews.map((review, index) =>
            <Review showDate={true} review={review} className={"xl:w-[49%]"} key={"review-" + index} />
          )}
        </div>
        {/* <Button
          text="Load More Reviews"
          className={"border border-gray-200 w-[230px] cursor-pointer mt-9"}
        /> */}
      </div>
    </div>
  );
};

export default ProductReviews;
