import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./Components/HeaderBlock/HeaderComponent";
import Home from "./Components/SliderComponent/Home";
import SingleProduct from "./Components/Pages/SingleProduct";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import Check from "./CheckOut/Check";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Payment from "./Payment/Payment";
import { auth } from "./firebase";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51KDk7ZSBxqm3DVXjsqWq0mCfCFZdlJU7Yv28YCPHbWB2QRaewEj7CGvhfSUDnEmPoAqJBaaoSpRktwroNWEAtTjJ00Y2S8oDW3"
);

const App = () => {
  return (
    <section>
      <article>
        <Router>
          <header>
            <HeaderComponent />
            <ToastContainer />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/checkout" element={<Check />} />
              <Route
                path="/payment"
                element={
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                }
              />
            </Routes>
          </main>
          <footer></footer>
        </Router>
      </article>
    </section>
  );
};

export default App;
