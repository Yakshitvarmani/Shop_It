import React from "react";
import { BsBasket } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TopHeader2 = () => {
  let cartData = useSelector(state => state.basketReducer.basket);
  return (
    <section className="h-20 bg-white shadow-sm">
      <article className="h-20 bg-white mx-auto w-[95%] flex">
        <div className="flex justify-start basis-[20%] items-center">
          <span>
            <a href="/">
              <img src="Logo.png" alt="Logo" className="h-9" />
            </a>
          </span>
          <a href="/">
            <span className="text-4xl">SHOP</span>
          </a>
          <a href="/">
            <span className="text-4xl text-orange-500">IT</span>
          </a>
        </div>
        <div className="flex justify-start basis-[50%] items-center">
          <ul className="text-black flex space-x-12 uppercase">
            <li className=" hover:text-orange-500 font-semibold	">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-orange-500 font-semibold">
              <a href="">Special</a>
            </li>
            <li className=" hover:text-orange-500 font-semibold">
              <a href="">Site</a>
            </li>
            <li className="hover:text-orange-500 font-semibold">
              <a href="">Return</a>
            </li>
            <li className="hover:text-orange-500 font-semibold">
              <a href="">Brand</a>
            </li>
            <li className="hover:text-orange-500 font-semibold">
              <a href="">Blog</a>
            </li>
            <li className="hover:text-orange-500 font-semibold">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-end basis-[30%]">
          <ul className="flex items-center space-x-6 ">
            <li className="flex items-center justify-end">
              <span className="hover:text-orange-500 text-3xl">
                <RiUserLine />
              </span>
              <span>My Account</span>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li className="flex items-center">
              <span className="text-3xl hover:text-orange-500 flex">
                <Link to="/checkout">
                  <BsBasket />
                </Link>

                <sup>{cartData && cartData.length}</sup>
              </span>
              <span className="pl-4">
                <Link to="/checkout">My Cart</Link>
              </span>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default TopHeader2;
