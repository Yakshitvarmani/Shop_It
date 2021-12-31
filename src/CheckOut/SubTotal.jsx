import React, { Fragment } from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetBasketTotal } from "./GetBasketTotal";

const SubTotal = () => {
  let { basket, user } = useSelector(state => state.basketReducer);
  let dispatch = useDispatch(state => state.reducer);
  let navigate = useNavigate();
  let handleChecked = () => {
    if (user) {
      navigate("/payment");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="flex ml-[400px] mt-4">
      <div className="shadow-2xl shadow-white rounded-md text-black text-lg w-[90%]">
        <CurrencyFormat
          renderText={value => (
            <Fragment>
              <p className="px-3">
                SubTotal({basket.length}items):<strong>{value}</strong>
              </p>
              <small className="px-2">
                <input type="checkbox" />
              </small>
            </Fragment>
          )}
          decimalScale={2}
          value={GetBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"Rs"}
        />
        <button onClick={handleChecked}>Proceed to CheckOut</button>
      </div>
    </div>
  );
};

export default SubTotal;
