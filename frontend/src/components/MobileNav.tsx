import { Link } from "react-router-dom";

const MobileNav = () => {
  return (<ul className="bg-white absolute w-full top-32 left-0 pb-4 rounded-b-[20px] border-b border-gray-200 block xl:hidden ">
    <li className="py-3 px-5 font-medium">
      <Link to="/shop">Shop</Link>
    </li>
    <li className="py-3 px-5 font-medium">
      <Link to="/">On Sale</Link>
    </li>
    <li className="py-3 px-5 font-medium">
      <Link to="/">New Arrivals</Link>
    </li>
    <li className="py-3 px-5 font-medium">
      <Link to="/">Brands</Link>
    </li>
  </ul>);
}

export default MobileNav;
