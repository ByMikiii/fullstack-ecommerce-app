import React from "react";
import { useLocation } from "react-router-dom";
import DropdownArrow from "../assets/DropdownArrow.png";

const BreadCrumb = () => {
  const location = useLocation();

  // var pathArray = location.pathname.split("/").filter(Boolean);
  var pathArray = ["products", "category", "electronics"];
  pathArray.unshift("home");

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <div class="flex gap-2 items-center my-7">
      {pathArray.map((pathSegment, index) => (
        <>
          {index === 0 ? (
            ""
          ) : (
            <img src={DropdownArrow} alt="" class="w-4 h-4" />
          )}
          <span key={index}>{capitalize(pathSegment)}</span>
        </>
      ))}
    </div>
  );
};

export default BreadCrumb;
