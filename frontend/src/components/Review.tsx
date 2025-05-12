import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Verified from "../assets/Verified.png";

const ShopReview = ({ showDate, className, review }) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (!review?.createdAt) return;
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    };


    setFormattedDate(formatDate(review.createdAt));
  }, [review?.createdAt])


  return (
    <div
      className={`border border-gray-300 rounded-[20px] p-7 flex flex-col ${className}`}
    >
      <StarRating rating={review?.rating || 5} value={""} className="mb-2" />
      <div className="flex items-center mb-2">
        <h6 className="text-xl font-bold"> {review?.creatorUsername || "Customer"} </h6>
        <img src={Verified} alt="" className="w-6 h-6 ml-2" />
      </div>
      <span className="text-gray-700">
        {review?.text || ""}
      </span>

      {showDate && (
        <span className="mt-6 text-gray-900">Posted on {formattedDate}</span>
      )}
    </div>
  );
};

export default ShopReview;
