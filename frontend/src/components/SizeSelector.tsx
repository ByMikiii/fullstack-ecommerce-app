import { useEffect } from "react";
const SizeSelector = ({ sizes, activeSize, setActiveSize }) => {

  useEffect(() => {
    setActiveSize(sizes[0].size)
  }, [])

  return (
    <div className="flex gap-1.5 flex-wrap mt-3">
      {sizes.map((size) => (
        size.quantity && <button
          key={size.size}
          className={`px-6 py-3 rounded-[62px] cursor-pointer ${activeSize === size.size
            ? "bg-black text-white"
            : "bg-main text-gray-600"
            }`}
          onClick={() => setActiveSize(size.size)}
        >
          {size.size}
        </button>
      ))}
    </div>
  );
};
export default SizeSelector;
