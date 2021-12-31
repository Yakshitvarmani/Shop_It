import React from "react";

const Slider3 = () => {
  return (
    <section className="bg-white">
      <article className="flex w-[80%] mx-auto items-center">
        <div className="flex justify-between space-x-4">
          <img
            src="sliderleft.png"
            alt="left"
            className="w-[600px] animate-pulse"
          />
          <img
            src="sliderright.png"
            alt="right"
            className="w-[600px] animate-pulse"
          />
        </div>
      </article>
    </section>
  );
};

export default Slider3;
