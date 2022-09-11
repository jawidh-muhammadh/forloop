import React, { useState } from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="bg-[#181717] flex justify-between  items-center   ">
        <div className="ml-24 mr-4 ">
          <div className="flex">
            <img
              className="w-12 mb-3 "
              src="/images/logo.png"
              alt="forloop_logo"
            />

            <img
              className="w-40 mb-3 ml-6 "
              src="/images/text_logo.png"
              alt="forloop_logo"
            />
          </div>

          <h1 className="mt-4 text-white text-7xl font-Productsansbold ">
            {" "}
            The App For Making{" "}
          </h1>
          <h1 className="mt-2 text-white text-7xl font-Productsansbold ">
            {" "}
            Your Life Lot Easier{" "}
          </h1>
          <h1 className="mt-6 text-xl text-white w-[650px] font-MuktaBold  tracking-wide">
            {" "}
            A new Artificial Intelligence productivity app that helps you write
            anything easily within seconds.The only solution that everyone who
            tries to write something needs{" "}
          </h1>
          {/* <div className="flex justify-around mx-16 mt-6 sm:mt-7">
            <div className="drop-shadow-xl">
              <a href="#">
                <img className=" w-44" src="/images/appstore.png" />
              </a>
            </div>
            <div className="drop-shadow-xl">
              <a href="#">
                <img className="w-48 " src="/images/googleplay.png" />
              </a>
            </div>
          </div> */}
          <button className="bg-[#FFE400]      md:flex hidden hover:bg-[#d32b33] sm:mt-5  hover:transition duration-300 ease-in-out delay-150 hover:scale-105 sm:text-lg         px-24 sm:mr-2 font-Productsansbold rounded-full py-3 md:mt-8 text-black font-semibold">
            Get Started
          </button>
        </div>

        <div className="ml-6 mr-36 ">
          <img
            className="mt-24 w-72"
            src="/images/mobile.png"
            alt="forloop_logo"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
