import React, { useState } from "react";
import ProductData from "../../Utilities/ProductData.json";
import DataSend from "./DataSend";

const Slider4 = () => {
  let [state, setState] = useState(ProductData);
  return (
    <section className="h-[600px] bg-white">
      <article className="flex flex-col space-y-10 mx-auto w-[90%]">
        <div className="flex justify-center basis-[30%] py-6">
          <h1 className="text-3xl">DEALS OF THE DAY</h1>
        </div>
        <hr className="w-[20%] mx-auto border-[#FDAA4B]" />
        <div className="flex justify-evenly">
          {state.slice(0, 4).map((data, index) => {
            return <DataSend key={index} productDetails={data} />;
          })}
        </div>
      </article>
    </section>
  );
};

export default Slider4;
