import React, { useState } from "react";
import Link from "next/link";

const Herobw = () => {
  return (
    <>
      <div className="flex flex-col md:mt-7 lg:mt-0 2xl:mt-20 mx-6 dark:bg-[#1B1F24] #080808 items-center sm:justify-between md:flex md:flex-row">
        {/* bg-[#F2F2F2]  */}
        <div className="order-2 ml-0 mr-0 md:mx-auto xl:mx-auto lg:mx-auto md:order-1">
          {/* <div className="flex">
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
          </div> */}

          <h1 className=" mt-4 sm:mt-2 mx-[2px] sm:mx-0 text-4xl text-center dark:text-[#cac3c3] md:dark:text-white  text-[#807878] md:text-black sm:text-5xl md:text-left md:text-5xl lg:text-7xl xl:text-7xl  2xl:text-8xl font-Productsansbold ">
            {" "}
            The app for making{" "}
          </h1>

          {/* <h1 className="mt-6 text-4xl text-center text-black sm:mt-4 sm:hidden sm:text-5xl md:text-left md:text-7xl font-Productsansbold ">
            {" "}
            The app for{" "}
          </h1> */}

          <h1 className="mt-2 dark:text-[#cac3c3] md:dark:text-white mx-[2px] sm:mx-0 text-4xl text-[#807878] text-center md:text-black xl:text-7xl 2xl:text-8xl sm:text-5xl md:text-left md:text-5xl lg:text-7xl font-Productsansbold ">
            {" "}
            your life lot easier{" "}
          </h1>

          {/* <h1 className="mt-2 text-4xl text-center text-black sm:hidden sm:text-5xl md:text-left md:text-7xl font-Productsansbold ">
            {" "}
            making your life{" "}
          </h1> */}
          {/* 
          <h1 className="mt-2 text-4xl text-center text-black sm:hidden sm:text-5xl md:text-left md:text-7xl font-Productsansbold ">
            {" "}
            lot easier{" "}
          </h1> */}

          <h1 className="mt-8  2xl:mt-11 sm:text-center w-full px-10 sm:px-4 md:px-0 lg:px-4 xl:px-2   text-center  2xl:text-4xl     sm:mx-5 md:mx-0 text-sm sm:text-xl xl:text-xl md:text-left text-[#c9c4c4] sm:dark:text-white sm:text-black md:w-[500px]  2xl:w-[1050px]  lg:w-[650px] font-Productsansregular  tracking-wide">
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
          <div className="mt-8 text-center 2xl:mt-12 md:mt-8 md:mr-2 md:flex sm:mt-5 md:mx-0">
            <button disabled={true} className="bg-[#1B1212] dark:bg-white dark:hover:bg-[#eee8e8]    hover:bg-[#1b1919]  md:hover:transition md:duration-300 md:ease-in-out md:delay-150 md:hover:scale-105 sm:text-lg 2xl:text-2xl        px-12 py-3 sm:px-24  font-Productsansbold rounded-full sm:py-3 2xl:py-5 dark:text-black  text-white font-semibold">
              Get Started
            </button>
          </div>
        </div>
        <div className="order-1 ml-1 sm:ml-6 md:order-2 md:mx-auto lg:mx-auto xl:mx-auto ">
          <img
            className="w-[300px] sm:w-[300px] sm:mt-11 md:mt-24 xl:mt-16 md:w-[350px] lg:w-[480px] 2xl:w-[1000px]"
            src="/images/hero.png"
            alt="forloop_logo"
          />
        </div>
      </div>

      <div className="md:flex dark:bg-[#1B1F24]  hidden   mt-[37px] md:mt-[75px] lg:mt-[75px] justify-between">
        <div className="w-4/12 -mt-8 2xl:-mt-0 ">
          <img
            className=" scale-[1.5] dark:hidden     h-full w-full"
            src="/images/forloop_text_black.png"
            alt="forloop_logo"
          />

          <img
            className=" scale-[1.5] dark:flex hidden      h-full w-full"
            src="/images/forloop-text-white.png"
            alt="forloop_logo"
          />
        </div>
        <div className="z-40 w-8/12 bg-[#1B1212] dark:bg-[#080808] 2xl:mt-16 2xl:h-60 h-36">
          <div className="flex items-center justify-center lg:mx-56 md:mt-12 2xl:mt-24 ">
            <div className="duration-300 ease-in-out delay-150 sm:px-0 hover:transition lg:hover:scale-105">
              <a>
                <img
                  className="md:w-32 2xl:w-48 lg:w-40"
                  src="images/appstore.png"
                />
              </a>
            </div>
            <div className="ease-in-out delay-150 sm:px-4 hover:transition hover:scale-105">
              <a>
                <img
                  className="md:w-36 lg:w-44 2xl:w-52 "
                  src="images/googleplay.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herobw;
