import React from "react";
import Button from "./Button";
import EmailIcon from "../assets/EmailIcon.png";

const Newsletter = () => {
  return (
    <div class="flex items-center justify-between px-16 py-9 w-[80%] h-[180px] bg-black text-white mx-auto rounded-[20px] absolute -translate-22 left-1/2 -translate-x-1/2">
      <h3 class="max-w-1/2 font-[integral] leading-tight">
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </h3>
      <form action="" class="flex flex-col">
        <div class="w-[350px] bg-white flex items-center rounded-[62px] px-4 h-12 mb-4">
          <img src={EmailIcon} alt="" class="w-6 h-6 mr-3" />
          <input
            type="email"
            placeholder="Enter your email address"
            class="h-10 w-full text-black"
          />
        </div>
        <Button
          text="Subscribe to Newsletter"
          className="w-[350px] bg-white text-black cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Newsletter;
