import React from "react";

const TopHeader = () => {
  return (
    <section className="bg-[#F5F5F5] h-12 shadow-sm">
      <article className="flex mx-auto w-[90%] h-12">
        <div className="text-black- flex justify-start basis-[50%] items-center font-bold	">
          I could give up shopping, but I’m not a quitter
        </div>
        <div className="text-black flex justify-end basis-[50%]">
          <ul className="flex items-center space-x-8">
            <li className=" hover:text-orange-500 font-bold">Wishlist</li>
            <li className="hover:text-orange-500 font-bold">Compare</li>
            <li className=" hover:text-orange-500 font-bold">Currency</li>
            <li className="hover:text-orange-500 font-bold">Languages</li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default TopHeader;
