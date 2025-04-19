import Cross from "../assets/Cross.png"
import { PopupContext } from "../App";
import { useContext, useEffect, useState } from "react";

const PopupMessage = ({ messageType, messageText }) => {
  const [popupMessage, setPopupMessage] = useContext(PopupContext);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    if (popupMessage) {
      setIsPopupVisible(true);
      setTimeout(() => {
        setIsPopupVisible(false);
        setTimeout(() => {
          setPopupMessage("")
        }, 500)

      }, 3000);
    }
  }, [popupMessage]);

  return (
    <div
      className={`fixed flex items-center ju px-4 pt-2 right-5 bottom-3 bg-white border border-gray-200 rounded-xs border-b-4 border-b-green-500 w-[320px] h-[92px] text-center transition-transform duration-500 ease-in-out ${isPopupVisible ? "translate-y-0 opacity-95 pointer-events-auto" : "translate-y-24 opacity-0 pointer-events-none"
        }`}
    >
      <img src={Cross} alt="" className="w-5 h-5 absolute right-2 top-2 cursor-pointer opacity-80 hover:opacity-100" />
      <span className="py-1 pr-4">{popupMessage}</span>
    </div>
  );
}

export default PopupMessage;
