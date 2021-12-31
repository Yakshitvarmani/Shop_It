import React from "react";
import { MdLocationOn } from "react-icons/md";
import { IoCallSharp, IoCardSharp } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import { FaCcVisa, FaCcPaypal, FaCcMastercard } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-[#222222] h-full mt-10 ">
      <article className="mx-auto w-[90%] ">
        <div className="flex flex-col text-white">
          <div className="flex py-8">
            <div className="basis-[20%]">
              <h2 className="font-bold">CONTACT US</h2>
              <ul className="flex flex-col space-y-3 pt-4 text-base">
                <li className="flex">
                  <MdLocationOn className="text-[#FDAA4B] text-2xl pr-1" />
                  1093 Marigold Lane, <br /> Coral Way, Miami, <br /> Florida,
                  33169
                </li>
                <li className="flex">
                  <IoCallSharp className="text-[#FDAA4B] text-2xl pr-1" />
                  610-403-403
                </li>
                <li className="flex">
                  <GrMail className="text-[#FDAA4B] text-2xl pr-1" />
                  company@example.com
                </li>
                <li className="flex font-bold">PAYMENT</li>
                <li className="flex space-x-3">
                  <FaCcVisa className="text-3xl hover:text-[#FDAA4B]" />
                  <FaCcMastercard className="text-3xl hover:text-[#FDAA4B]" />
                  <IoCardSharp className="text-3xl  hover:text-[#FDAA4B]" />
                  <FaCcPaypal className="text-3xl hover:text-[#FDAA4B]" />
                </li>
              </ul>
            </div>
            <div className="basis-[20%]">
              <h2 className="font-bold">INFORMATION</h2>
              <ul className="flex flex-col space-y-3 pt-4 text-base">
                <li className="hover:text-[#FDAA4B]">About Us</li>
                <li className="hover:text-[#FDAA4B]">Delivery Information</li>
                <li className="hover:text-[#FDAA4B]">Privacy Policy</li>
                <li className="hover:text-[#FDAA4B]">Terms & Conditions</li>
              </ul>
            </div>
            <div className="basis-[20%]">
              <h2 className="font-bold">MY ACCOUNT</h2>
              <ul className="flex flex-col space-y-3 pt-4 text-base">
                <li className="hover:text-[#FDAA4B]">My Account</li>
                <li className="hover:text-[#FDAA4B]">Order History</li>
                <li className="hover:text-[#FDAA4B]">Wish List</li>
                <li className="hover:text-[#FDAA4B]">Newsletter</li>
              </ul>
            </div>
            <div className="basis-[20%]">
              <h2 className="font-bold">CUSTOMER SERVICE</h2>
              <ul className="flex flex-col space-y-3 pt-4 text-base">
                <li className="hover:text-[#FDAA4B]">Contact Us</li>
                <li className="hover:text-[#FDAA4B]">Site Map</li>
                <li className="hover:text-[#FDAA4B]">Gift Certificates</li>
                <li className="hover:text-[#FDAA4B]">Affiliate</li>
              </ul>
            </div>
            <div className="basis-[20%]">
              <h2 className="font-bold">OTHER CATALOG</h2>
              <ul className="flex flex-col space-y-3 pt-4 text-base">
                <li className="hover:text-[#FDAA4B]">Returns</li>
                <li className="hover:text-[#FDAA4B]">Specials Products</li>
                <li className="hover:text-[#FDAA4B]">All Blog</li>
                <li className="hover:text-[#FDAA4B]">Manufacturer</li>
              </ul>
            </div>
          </div>
          <hr className="border-gray-600" />
          <div class="grid grid-cols-9 divide-x p-4">
            <div className="pl-2 hover:text-[#FDAA4B]">Snack Plants</div>
            <div className="pl-2 hover:text-[#FDAA4B]">Garden Plant</div>
            <div className="pl-2 hover:text-[#FDAA4B]">House Plants</div>
            <div className="pl-2 hover:text-[#FDAA4B]">Indoor Plants</div>
            <div className="pl-2 hover:text-[#FDAA4B]">Small Plants</div>
            <div className="pl-2 hover:text-[#FDAA4B]">Office Plants</div>
            <div className="pl-2 hover:text-[#FDAA4B]">Crenate Leaf</div>
            <div className="pl-2 hover:text-[#FDAA4B]">Vascular Plant</div>
            <div className="pl-2 hover:text-[#FDAA4B]">Indian Basil</div>
          </div>
          <hr className="border-gray-600" />
          <div className="py-8 items-center flex justify-center">
            Powered By OpenCart cartsa © 2021
          </div>
        </div>
      </article>
    </section>
  );
};

export default Footer;
