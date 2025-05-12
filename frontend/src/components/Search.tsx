import Glass from "../assets/Glass.png";

const Search = ({ className }) => {
  return (
    <div className={`h-12 w-[34%] mr-5 ml-auto flex px-4 bg-main rounded-[62px] ${className}`}>
      <img src={Glass} alt="" className="h-[24px] self-center" />
      <input
        type="text"
        placeholder="Search for products..."
        className="ml-4 w-full"
      />
    </div>
  );
};

export default Search;
