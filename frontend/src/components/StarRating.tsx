import Star from "../assets/Star.png";
import HalfStar from "../assets/HalfStar.png";

const StarRating = ({ className, rating, value }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(Math.floor(rating))].map((_, index) => (
        <img src={Star} key={index} alt="" className="w-5 h-5" />
      ))}
      {rating - Math.floor(rating) >= 0.25 && (
        <img src={HalfStar} alt="" className="w-[8px] h-4" />
      )}
      {value && <small className="ml-4">{Math.round(rating * 10) / 10} / 5</small>}
    </div>
  );
};

export default StarRating;
