import React from "react";
import { useDispatch } from "react-redux";
import { remove_to_basket } from "../redux/Action/action";

const CheckOut = ({ title, price, rating, image, id }) => {
  let dispatch = useDispatch();
  let removeItem = () => {
    dispatch(remove_to_basket(id));
  };
  return (
    <div className="flex flex-wrap justify-center items-center border-2 bg-gray-400">
      <div className="flex justify-center items-center w-4/5">
        <img src={image} alt="" className="w-80 h-60 p-4" />
        <div>
          <p className="px-2">{title}</p>
          <p className="px-2">Rs: {price}</p>
          <div className="flex">
            {Array(rating)
              .fill()
              .map((_, index) => (
                <p className="text-black font-extrabold text-lg flex">❤</p>
              ))}
          </div>
          <button
            onClick={removeItem}
            className="bg-black rounded-md p-2 text-white"
          >
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
