import React from "react";

const Button = ({ text, className, onClick }) => {
  return (
    <button
      class={`h-[52px] rounded-[62px] font-medium ${className}`}
      onClick={onClick}
      id={text}
    >
      {text}
    </button>
  );
};

export default Button;
