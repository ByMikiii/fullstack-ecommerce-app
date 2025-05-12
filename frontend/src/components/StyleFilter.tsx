import FilterName from "./FilterName";
import CategoryFilter from "./CategoryFilter";

const StyleFilter = () => {
  return (
    <div className="pb-6">
      <FilterName categoryName={"Dress Style"} />
      <div id="Dress StyleFilter">
        <CategoryFilter categoryName={"Casual"} />
        <CategoryFilter categoryName={"Formal"} />
        <CategoryFilter categoryName={"Party"} />
        <CategoryFilter categoryName={"Gym"} />
      </div>
    </div>
  );
};

export default StyleFilter;
