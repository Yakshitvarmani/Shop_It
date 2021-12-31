import React from "react";
import { useParams } from "react-router-dom";
import ProductData from "../../Utilities/ProductData.json";
import { useDispatch } from "react-redux";
import { add_to_basket } from "../../redux/Action/action";

const SingleProduct = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  let singleprct = ProductData.find(item => item.id === id);

  let onAddItemToBasket = () => {
    let item = {
      id: singleprct.id,
      title: singleprct.title,
      price: singleprct.price,
      rating: singleprct.price.rating,
      detail: singleprct.detail,
      specification: singleprct.specification,
    };
    dispatch(add_to_basket(item));
  };
  return (
    <section className="w-full p flex">
      <figure>
        <img
          src={singleprct.image}
          alt="img"
          className="w-full h-[625px] flex justify-center"
        />
      </figure>
      <main className="bg-white w-2/3 h-[700px]">
        <div className="9-10 uppercase flex">
          <span className="pl-2 font-bold text-2xl">{singleprct.title}</span>
        </div>
        <p className="pl-10">
          Price:<strong>{singleprct.price}K</strong>
        </p>
        <div className="pl-10 pt-10">
          <h4 className="uppercase text-xl"> Specifications :</h4>
          {singleprct.specification &&
            singleprct.specification.map((item, index) => {
              <li key={index} className="mt-2">
                {item}
              </li>;
            })}
        </div>
        <div className="pl-10 pt-10">
          <h4 className="uppercase text-xl"> Details :</h4>
          <p>{singleprct.detail}</p>
        </div>
        <div className="pl-10 pt-10">
          <button
            onClick={onAddItemToBasket}
            className="bg-orange-500 p-2 text-black rounded-md"
          >
            Add to Basket
          </button>
        </div>
      </main>
    </section>
  );
};

export default SingleProduct;
