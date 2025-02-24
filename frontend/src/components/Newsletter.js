import React from "react";
import Button from "./Button";
import EmailIcon from "../assets/EmailIcon.png";

const Newsletter = () => {
  //xl:-translate-22 not working
  return (
    <div className="flex flex-col xl:flex-row items-center justify-between px-6 xl:pr-9 xl:pl-6 py-9 ml-auto w-[80%] bg-black text-white mx-auto rounded-[20px] relative top-36 xl:top-22">
      <h3 className="xl:w-[551px] font-[integral] leading-tight">
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </h3>
      <form action="" className="flex flex-col mt-8 xl:mt-0 w-full xl:w-[350px]">
        <div className="xl:w-[350px] bg-white flex items-center rounded-[62px] px-4 h-12 mb-4">
          <img src={EmailIcon} alt="" className="w-6 h-6 mr-3" />
          <input
            type="email"
            placeholder="Enter your email address"
            className="h-10 w-full text-black text-[14px]"
          />
        </div>
        <Button
          text="Subscribe to Newsletter"
          className="xl:w-[350px] bg-white text-black cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Newsletter;
