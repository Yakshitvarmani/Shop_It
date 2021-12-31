import React from "react";
import { FaSearch } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";

const TopHeader3 = () => {
  return (
    <section className="bg-[#32656A] h-14 shadow-sm">
      <article className="flex mx-auto w-[90%] h-14 justify-between">
        <div className="flex justify-center basis-[20%] items-center cursor-pointer bg-[#FDAA4B]">
          <span className="">All Categories</span>
        </div>
        <div className="flex basis-[80%] items-center justify-start pl-6">
          <div className="flex justify-start pr-24 bg-white rounded-l-md border-r-2 cursor-pointer">
            <select
              name="Categories"
              className="h-10 rounded-l-md focus:outline-none pl-4"
            >
              <option value="0">Categories</option>
              <option value="2">Electronics</option>
              <option value="4">Electronics</option>
              <option value="6">Electronics</option>
              <option value="8">Electronics</option>
              <option value="10">Electronics</option>
              <option value="12">Electronics</option>
              <option value="14">Electronics</option>
            </select>
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Search"
              className="h-10 pr-28 border-slate-600 px-4 focus:outline-none w-[100%]"
            />
          </div>
          <div className="">
            <button className="h-10 bg-[#FDAA4B] hover:bg-black hover:text-white px-8 rounded-r-md">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="flex justify-end basis-[20%] items-center cursor-pointer">
          <span className="text-2xl">
            <FcApproval />
          </span>
          <span className="uppercase text-white pl-2 text-base">
            Special Offer!
          </span>
        </div>
      </article>
    </section>
  );
};

export default TopHeader3;
