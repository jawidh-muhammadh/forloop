import React from "react";

const Yesno = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className=" md:w-6/12 bg-[#FBF6FA] dark:bg-[#23262E]  pt-10 pb-16 sm:pt-24 sm:pb-36 ">
        <h1 className=" text-[100px] sm:text-[150px] dark:text-white  font-Productsansbold text-center  ">
          {" "}
          Yes,{" "}
        </h1>
        <h1 className="mx-3 -mt-3 text-3xl text-center dark:text-white sm:-mt-6 2xl:mx-64 2xl:-mt-0 sm:text-5xl font-Productsansregular lg:mx-28 md:mx-4 sm:mx-28">
          you can now get anything written in seconds
        </h1>
      </div>
      <div className="pt-10 pb-16 bg-white dark:bg-[#1B1F24] md:w-6/12 sm:pt-24 sm:pb-36">
        <h1 className="text-[100px]  sm:text-[150px] font-Productsansbold text-[#afacb1] text-center ">
          {" "}
          No,{" "}
        </h1>
        <h1 className="text-center 2xl:-mt-0 sm:-mt-6 -mt-3 font-Productsansregular 2xl:mx-64 lg:mx-28 text-[#afacb1] mx-3 text-3xl sm:text-5xl md:mx-4  sm:mx-28  ">
          you dont have to deal with stress from today
        </h1>
      </div>
    </div>
  );
};

export default Yesno;
