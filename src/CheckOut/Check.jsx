import React from "react";
import { useSelector } from "react-redux";
import CheckOut from "./CheckOut";
import SubTotal from "./SubTotal";

const Check = () => {
  let basket = useSelector(state => state.basketReducer.basket);
  return (
    <div className="flex">
      <div className="left w-full">
        {/* <h3>Hello{user?.email}</h3> */}
        <h2>{basket.length === 0 ? "your cart is empty" : "your cart"}</h2>
        {basket &&
          basket.map(item => (
            <CheckOut
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
      </div>
      <div className="right w-[80%] h-32 ml-8">
        <SubTotal />
      </div>
    </div>
  );
};

export default Check;
