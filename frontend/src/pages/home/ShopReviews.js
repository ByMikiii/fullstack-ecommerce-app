import React, { useRef } from "react";
import Review from "../../components/Review";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowLeft from "../../assets/ArrowLeft.png";
import ArrowRight from "../../assets/ArrowRight.png";

const reviews = [
  {
    rating: 5,
    creatorUsername: "john_doe",
    text: "Excellent product, exceeded my expectations!",
    createdAt: "2025-04-12T23:00:23.793+00:00",
  },
  {
    rating: 4,
    creatorUsername: "jane_smith",
    text: "Very good, but could use better packaging.",
    createdAt: "2025-03-28T14:15:00.000+00:00",
  },
  {
    rating: 3,
    creatorUsername: "mike92",
    text: "Average experience, delivery was late.",
    createdAt: "2025-04-01T09:10:00.000+00:00",
  },
  {
    rating: 5,
    creatorUsername: "alice_w",
    text: "Absolutely love it! Will buy again.",
    createdAt: "2025-04-10T16:45:00.000+00:00",
  },
  {
    rating: 2,
    creatorUsername: "tomcat",
    text: "Not what I expected, quality was off.",
    createdAt: "2025-02-22T08:00:00.000+00:00",
  },
  {
    rating: 4,
    creatorUsername: "lucas_b",
    text: "Good value for the price.",
    createdAt: "2025-03-05T11:30:00.000+00:00",
  },
  {
    rating: 5,
    creatorUsername: "emma_lee",
    text: "Top notch, 10/10 would recommend.",
    createdAt: "2025-04-13T07:20:00.000+00:00",
  },
];

const ShopReviews = ({ className }) => {

  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true,
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 1000,
  };
  return (
    <div className={`w-[97%] mx-auto ${className}`}>
      <div className="h-14 flex items-center justify-between mb-9 px-4">
        <h2 className="text-[32px] xl:text-[48px]">OUR HAPPY CUSTOMERS</h2>
        <div className="flex">
          <button
            className="cursor-pointer"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <img src={ArrowLeft} alt="" className="w-6 h-6 mx-2" />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <img src={ArrowRight} alt="" className="w-6 h-6 ml-2" />
          </button>
        </div>
      </div>
      <div className="carousel-mask">
        <Slider ref={sliderRef} {...settings}>
          <div className="mr-5">
            <Review className={"xl:w-[400px]"} review={reviews[0]} />
          </div>
          <div className="mr-5">
            <Review className={"xl:w-[400px]"} review={reviews[1]} />
          </div>
          <div className="mr-5">
            <Review className={"xl:w-[400px]"} review={reviews[2]} />
          </div>
          <div className="mr-5">
            <Review className={"xl:w-[400px]"} review={reviews[3]} />
          </div>
          <div className="mr-5">
            <Review className={"xl:w-[400px]"} review={reviews[4]} />
          </div>
          <div className="mr-5">
            <Review className={"xl:w-[400px]"} review={reviews[5]} />
          </div>
          <div className="mr-5">
            <Review className={"xl:w-[400px]"} review={reviews[6]} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ShopReviews;
