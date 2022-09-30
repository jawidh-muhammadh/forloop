import React from "react";

const Headertwo = () => {
  return (
    <div className="bg-[#0B1E22] flex justify-between  h-[750px] mx-9 rounded-3xl">
      <div className="mx-auto ml-24 ">
        <h1 className="mt-24 text-white text-7xl font-Productsansbold">
          {" "}
          Make your life{" "}
        </h1>
        <h1 className="mt-4 text-white text-7xl font-Productsansbold">
          {" "}
          simple with{" "}
        </h1>
        <h1 className="mt-4 text-white text-7xl font-Productsansbold">
          {" "}
          forloop{" "}
        </h1>
        <h1 className="mt-10  text-xl  text-white w-[550px] font-KarlaBold">
          {" "}
          A new Artificial Intelligence productivity app that helps you write
          anything easily within seconds.The only solution that everyone who
          tries to write something needs{" "}
        </h1>

        <button className="bg-[#FB3640]      md:flex hidden hover:bg-[#d32b33] sm:mt-5  hover:transition duration-300 ease-in-out delay-150 hover:scale-105         px-12 sm:mr-2 font-body rounded-full py-3 md:mt-8 text-white font-semibold">
          Get Startedd
        </button>
      </div>
      <div className="mr-52 ">
        <img
          className=" w-[260px] mt-14 "
          src="/images/mobile.png"
          alt="forloop_logo"
        />
      </div>
    </div>
  );
};

export default Headertwo;
