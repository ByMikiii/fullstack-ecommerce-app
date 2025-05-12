const Button = ({ text, type, className, onClick }) => {
  return (
    <button
      className={`h-[46px] xl:h-[52px] rounded-[62px] font-medium cursor-pointer ${className}`}
      onClick={onClick}
      id={text}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
