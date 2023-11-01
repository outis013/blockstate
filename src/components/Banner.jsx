import React from "react";

import houseBanner from "../assets/img/houses/house2lg.png";

import Search from "./Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl  lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-indigo-700">
              Own a chunk of future
              <span className="text-red-500 text-5xl">&nbsp; Paradise.</span>
            </span>
          </h1>
          <p className="max-w-[480px] mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            explicabo? Alias minus ratione accusamus explicabo expedita illum,
            vero dicta animi?
          </p>
        </div>
        <div className=" flex-1 md:flex justify-end items-end">
          <img
            src={houseBanner}
            className="w-[90%] mx-auto"
            alt="landing banner"
          />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
