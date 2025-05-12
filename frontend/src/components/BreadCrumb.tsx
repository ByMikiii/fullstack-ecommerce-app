import { useLocation } from "react-router-dom";
import DropdownArrow from "../assets/DropdownArrow.png";

const BreadCrumb = () => {
  const location = useLocation();

  var pathArray = location.pathname.split("/").filter(Boolean);
  // var pathArray = ["products", "category", "electronics"];
  pathArray.unshift("home");

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <div className="flex items-center my-7">
      {pathArray.map((pathSegment, index) => (
        <div key={index} className="flex items-center">
          {index === 0 ? (
            ""
          ) : (
            <img src={DropdownArrow} alt="" className="w-4 h-4 mx-1" />
          )}
          <a href="/">
            {capitalize(pathSegment)}
          </a>
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
