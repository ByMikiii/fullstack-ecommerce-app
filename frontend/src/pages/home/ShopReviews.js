import React, { useRef } from "react";
import Review from "../../components/Review";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowLeft from "../../assets/ArrowLeft.png";
import ArrowRight from "../../assets/ArrowRight.png";

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
            <Review className={"xl:w-[400px]"} />
          </div>
          <div className="mr-5">
            <Review className={"xl:w-[400px]"} />
          </div>
          <div className="mr-5">
            <Review className={"xl:w-[400px]"} />
          </div>
          <div className="mr-5">
            <Review className={"xl:w-[400px]"} />
          </div>
          <div className="mr-5">
            <Review className={"xl:w-[400px]"} />
          </div>
          <div className="mr-5">
            <Review className={"xl:w-[400px]"} />
          </div>
          <div className="mr-5">
            <Review className={"xl:w-[400px]"} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ShopReviews;
