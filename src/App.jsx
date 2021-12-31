import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./Components/HeaderBlock/HeaderComponent";
import Home from "./Components/SliderComponent/Home";
import SingleProduct from "./Components/Pages/SingleProduct";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import Check from "./CheckOut/Check";

const App = () => {
  return (
    <section>
      <article>
        <Router>
          <header>
            <HeaderComponent />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/checkout" element={<Check />} />
            </Routes>
          </main>
          <footer></footer>
        </Router>
      </article>
    </section>
  );
};

export default App;
