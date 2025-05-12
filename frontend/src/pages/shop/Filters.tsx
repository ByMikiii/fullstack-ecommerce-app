import FiltersIcon from "../../assets/Filters.png";
import CategoryFilter from "../../components/CategoryFilter";
import PriceFilter from "../../components/PriceFilter";
import ColorFilter from "../../components/ColorFilter";
import SizeFilter from "../../components/SizeFilter";
import StyleFilter from "../../components/StyleFilter";
import Button from "../../components/Button";
import Cross from "../../assets/Cross.png";

const Filters = ({ className, hideFilters }) => {
  return (
    <div className={`w-full xl:w-[366px] py-5 px-6 rounded-[20px] border border-gray-200 fixed xl:relative left-0 top-[114px] overflow-y-auto max-h-[calc(100vh-114px)] xl:max-h-full xl:left-0 xl:top-0 bg-white ${className}`}>
      <div className="flex items-center justify-between pb-6 border-b border-b-gray-200">
        <h6>Filters</h6>
        <img src={FiltersIcon} alt="" className="w-6 h-6 hidden xl:block" />
        <img src={Cross} alt="" className="w-6 h-6 cursor-pointer xl:hidden" onClick={hideFilters} />
      </div>
      <div className="py-6 border-b border-b-gray-200">
        <CategoryFilter categoryName={"T-shirts"} />
        <CategoryFilter categoryName={"Shorts"} />
        <CategoryFilter categoryName={"Shirts"} />
        <CategoryFilter categoryName={"Hoodie"} />
        <CategoryFilter categoryName={"Jeans"} />
      </div>
      <PriceFilter />
      <ColorFilter />
      <SizeFilter />

      <StyleFilter />

      <Button
        type="button"
        text="Apply Filter"
        onClick=""
        className="bg-black text-white w-full"
      />
    </div>
  );
};

export default Filters;
