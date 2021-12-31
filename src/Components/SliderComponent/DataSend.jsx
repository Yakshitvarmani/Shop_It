import React from "react";
import { BsBasket } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add_to_basket } from "./../../redux/Action/action";

const DataSend = props => {
  let dispatch = useDispatch();
  let { title, price, rating, image, id } = props.productDetails;

  let onAddItemToBasket = () => {
    let item = {
      title,
      price,
      image,
      rating,
    };
    dispatch(add_to_basket(item));
  };
  return (
    <div className="flex space-x-6 basis-[70%]">
      <div className="border-gray-500 border-[1px] justify-center items-center">
        <img src={image} alt="img" className="h-52 p-3" />
        <Link to={`/product/${id}`}>
          <h3 className="uppercase pl-3 font-normal">Type:{title}</h3>
        </Link>
        <h5 className="pl-3 font-bold ">Price:{price}K</h5>
        <h6 className="uppercase pl-3">Rating:{rating}/5</h6>
        <button
          className="border-[2px] bg-orange-500 p-3 hover:bg-orange-900 text-white"
          onClick={onAddItemToBasket}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DataSend;
