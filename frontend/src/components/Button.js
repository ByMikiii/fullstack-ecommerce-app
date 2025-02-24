import React from "react";

const Button = ({ text, className, onClick }) => {
  return (
    <button
      className={`h-[46px] xl:h-[52px] rounded-[62px] font-medium cursor-pointer ${className}`}
      onClick={onClick}
      id={text}
    >
      {text}
    </button>
  );
};

export default Button;
