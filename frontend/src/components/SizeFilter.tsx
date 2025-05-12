import FilterName from "./FilterName";
import Button from "./Button";

const handleClick = (buttonId) => {
  var clickedButton = document.getElementById(buttonId);
  if (clickedButton.style.backgroundColor !== "black") {
    clickedButton.style.backgroundColor = "black";
    clickedButton.style.color = "white";
  } else {
    clickedButton.style.backgroundColor = "#F0F0F0";
    clickedButton.style.color = "#4A5565";
  }
};

const SizeFilter = () => {
  return (
    <div className="pb-6 border-b border-gray-200">
      <FilterName categoryName={"Size"} />
      <div id="SizeFilter" className="flex flex-wrap gap-3">
        <Button
          text={"X-Small"}
          type="button"
          className={"bg-main text-gray-600 px-[20px] py-[10px]"}
          onClick={() => handleClick("X-Small")}
        />
        <Button
          text={"Small"}
          type="button"
          className={"bg-main text-gray-600 px-[20px] py-[10px]"}
          onClick={() => handleClick("Small")}
        />
        <Button
          text={"Medium"}
          type="button"
          className={"bg-main text-gray-600 px-[20px] py-[10px]"}
          onClick={() => handleClick("Medium")}
        />
        <Button
          text={"Large"}
          type="button"
          className={"bg-main text-gray-600 px-[20px] py-[10px]"}
          onClick={() => handleClick("Large")}
        />
        <Button
          text={"X-Large"}
          type="button"
          className={"bg-main text-gray-600 px-[20px] py-[10px]"}
          onClick={() => handleClick("X-Large")}
        />
      </div>
    </div>
  );
};

export default SizeFilter;
