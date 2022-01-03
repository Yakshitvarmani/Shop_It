import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckOut from "../CheckOut/CheckOut";
import { GetBasketTotal } from "../CheckOut/GetBasketTotal";
// import { auth } from "../../src/firebase";
import { db } from "../../src/firebase";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { set_basket_empty } from "../redux/Action/action";
import axios from "../Utilities/axios";
import { Link } from "react-router-dom";
import "./payment.css";

const Payment = () => {
  let { basket, user } = useSelector(state => state.basketReducer);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [succeeded, setSucceeded] = useState(false);
  let [processing, setProcessing] = useState("");
  let [error, setError] = useState(null);
  let [disabled, setDisabled] = useState(true);
  let [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    let getClientSecret = async () => {
      let response = await axios({
        method: "post",
        url: `/payments/create?total=${GetBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  let stripe = useStripe();
  let elements = useElements();

  let handleSubmit = async e => {
    e.preventDefault();
    setProcessing(true);
    let payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user && user.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch(set_basket_empty());
        navigate("/orders");
      });
  };

  let handleChange = e => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>Checkout {<Link to="/checkout">{basket.length} items</Link>}</h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user && user.email}</p>
            <p>House no. 230 Near Botnical Garden</p>
            <p>Lucknow, India</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment-items">
            {basket &&
              basket.map(item => (
                <CheckOut
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={value => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={GetBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rs"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
