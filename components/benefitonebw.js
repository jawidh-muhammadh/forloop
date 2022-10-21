import React from "react";
import Image from "next/image";

const Benefitonebw = () => {
  return (
    <>
      <div className="sm:flex hidden flex-col pb-12 mt-24 md:flex-row md:mx-5 lg:mx-5 xl:mx-16 2xl:mx-20 sm:mt-0 sm:pt-36">
        <div className=" w-[250px] md:mx-0   mx-auto md:w-6/12">
          <img  alt="lt_t&s"  className="dark:hidden" src="/images/first_benefit.png" />
          <img  alt="lt_t&s"  className="dark:block hidden" src="/images/dark_Categories/first_benefit_dark_version.png" />
        </div>
        <div className="-mt-2 md:w-6/12 sm:mt-3 md:mt-10 ">
          <h1 className=" mx-6 2xl:mx-32 lg:mx-[50px]  sm:mx-0 md:px-[55px]   md:text-left text-center mt-8  text-[#acaaad] text-4xl sm:text-5xl md:text-6xl  lg:text-7xl xl:text-7xl 2xl:text-8xl font-Productsansbold">
            {" "}
            Forloop can write almost anything for you.{" "}
          </h1>

          {/* <h1 className=" mx-24 sm:mx-20 hidden md:flex   sm:text-left text-center mt-8 text-[#acaaad] md:text-4xl lg:text-6xl text-5xl xl:text-7xl font-Productsansbold">
          {" "}
          Why worry when Forloop can write almost anything for you?{" "}
        </h1> */}

          {/* <h1 className="text-2xl mx-7 mt-9 font-Productsansregular">
          {" "}
          Ever thought that the great concepts you have in your mind cannot be
          put into words that people love to read? No worries,get that all
          written using forloop within seconds{" "}
        </h1> */}
        </div>
        {/* C2BEC4 */}
      </div>

      {/* Mobile view below  */}

      <div className=" sm:hidden flex imagee">
        <h1 className=" mx-7 py-12 2xl:mx-32 lg:mx-[50px] dark:text-[#ECECEC]     md:text-left text-center mt-8 text-[#524f53] text-5xl  font-Productsansbold">
          {" "}
          Forloop can write almost anything for you.{" "}
        </h1>
      </div>
    </>
  );
};

export default Benefitonebw;
