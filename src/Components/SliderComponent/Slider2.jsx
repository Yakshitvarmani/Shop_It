import React from "react";
import { ImMobile } from "react-icons/im";
import { IoShirtOutline } from "react-icons/io5";
import { GiFurShirt, GiRunningShoe, GiBookshelf } from "react-icons/gi";

const Slider2 = () => {
  return (
    <section className="h-96 bg-white">
      <article className="h-96 flex flex-col mx-auto w-[80%]">
        <div className="flex justify-center basis-[30%] py-6">
          <h1 className="text-4xl"> SHOP BY CATEGORY</h1>
        </div>
        <div className="flex justify-between basis-[70%]">
          <div className="flex flex-col justify-center items-center">
            <div className="border-8 rounded-full hover:border-[#FDAA4B]">
              <ImMobile className="text-9xl p-4" />
            </div>
            <h4 className="py-2">Electronics</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="border-8 rounded-full hover:border-[#FDAA4B]">
              <IoShirtOutline className="text-9xl p-4" />
            </div>

            <h4 className="py-2">Men's Fashion</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="border-8 rounded-full hover:border-[#FDAA4B]">
              <GiFurShirt className="text-9xl p-4" />
            </div>

            <h4 className="py-2">Women's Fashion</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="border-8 rounded-full hover:border-[#FDAA4B]">
              <GiRunningShoe className="text-9xl p-4" />
            </div>

            <h4 className="py-2">Footwear</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="border-8 rounded-full hover:border-[#FDAA4B]">
              <GiBookshelf className="text-9xl p-4" />
            </div>

            <h4 className="py-2">Books</h4>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Slider2;
