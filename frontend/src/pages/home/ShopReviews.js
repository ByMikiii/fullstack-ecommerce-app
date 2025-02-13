import React, { useRef } from "react";
import Review from "../../components/Review";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowLeft from "../../assets/ArrowLeft.png";
import ArrowRight from "../../assets/ArrowRight.png";

const ShopReviews = () => {
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
    <div class="w-[97%] mx-auto">
      <div class="h-14 flex items-center justify-between mb-9 px-20">
        <h2>OUR HAPPY CUSTOMERS</h2>
        <div class="flex">
          <button
            class="cursor-pointer"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <img src={ArrowLeft} alt="" class="w-6 h-6 mx-2" />
          </button>
          <button
            class="cursor-pointer"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <img src={ArrowRight} alt="" class="w-6 h-6 mx-2" />
          </button>
        </div>
      </div>
      <div class="carousel-mask">
        <Slider ref={sliderRef} {...settings}>
          <div class="mr-5">
            <Review className={"w-[400px]"} />
          </div>
          <div class="mr-5">
            <Review className={"w-[400px]"} />
          </div>
          <div class="mr-5">
            <Review className={"w-[400px]"} />
          </div>
          <div class="mr-5">
            <Review className={"w-[400px]"} />
          </div>
          <div class="mr-5">
            <Review className={"w-[400px]"} />
          </div>
          <div class="mr-5">
            <Review className={"w-[400px]"} />
          </div>
          <div class="mr-5">
            <Review className={"w-[400px]"} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ShopReviews;
