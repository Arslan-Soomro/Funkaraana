import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { addToCart_ACT, saveCart_ACT } from "../context/global-actions";
import GlobalContext from "../context/global-context";
import { ProductDataType } from "../utils/customTypes";

const ProductCard = ({ id, name, seller, price, image, description, halfCard }: ProductDataType) => {
  
  const [state, dispatch] = useContext(GlobalContext);
  
  const addClickHandler = () => {
    dispatch({type: addToCart_ACT, payload: {id, name, seller, price, image, description}});
  }

  return (
    <div className="cursor-pointer w-fit py-2 px-4 max-w-[220px]">
      <div className="relative w-[200px] h-[150px] min-w-[200px] min-h-[200px] max-h-[200px] rounded-lg shadow-lg transition-all delay-100 hover:shadow-xl hover:scale-105">
      <div onClick={addClickHandler} className="absolute right-2 -bottom-2 p-1 rounded-lg bg-sbrclr-600 text-white hover:bg-sbrclr-700 active:bg-sbrclr-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
        <Link to="/prod">
          <img src={image} className="w-full h-full object-cover rounded-lg" />
        </Link>
      </div>
      {halfCard ? null :
      <div className="py-2 px-1">
        <p className="text-black truncate">
          { name }
        </p>
        <p className="text-nclr-500 truncate">by { seller }</p>
        {/* TODO implement a function that converst price to its proper format */}
        <p className="font-bold text-sbrclr-600">Rs. { price }</p>
      </div>}
    </div>
  );
};

export default ProductCard;
