import React from "react";

const Button = ({ text, className }) => {
  return (
    <button
      class={`w-[210px] h-[52px] rounded-[62px] font-medium ${className}`}
    >
      <a href="">{text}</a>
    </button>
  );
};

export default Button;
