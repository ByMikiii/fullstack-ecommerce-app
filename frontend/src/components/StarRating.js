import React from "react";
import Star from "../assets/Star.png";
import HalfStar from "../assets/HalfStar.png";

const StarRating = ({ className, rating, value }) => {
  return (
    <div class={`flex items-center ${className}`}>
      {[...Array(Math.floor(rating))].map((_, index) => (
        <img src={Star} alt="" class="w-4 h-4" />
      ))}
      {rating - Math.floor(rating) >= 0.25 && (
        <img src={HalfStar} alt="" class="w-[8px] h-4" />
      )}
      {value && <small class="ml-4">{Math.round(rating * 10) / 10} / 5</small>}
    </div>
  );
};

export default StarRating;
