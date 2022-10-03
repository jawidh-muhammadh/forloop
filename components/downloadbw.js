import React from "react";

const Downloadbw = () => {
  return (
    <div className="mt-20 mb-44 sm:mb-32 sm:mt-44 downloadimagesmall sm:downloadimage ">
      <h1 className="pt-32 text-xl dark:text-white   text-center sm:pt-48 sm:text-5xl md:text-7xl font-Productsansbold">
        {" "}
        Download The App Now{" "}
      </h1>
      <h1 className="mt-2 dark:text-white   text-center sm:mt-4 sm:text-2xl font-Productsansregular">
        {" "}
        Let's Give It A Try, You Will Never Regret Using Forloop{" "}
      </h1>
      <div className="justify-center hidden mt-6 sm:flex sm:mt-7">
        <div className="px-4 sm:px-4 drop-shadow-xl">
          <a>
            <img className=" w-44" src="/images/appstore.png" />
          </a>
        </div>
        <div className="px-4 sm:px-4 drop-shadow-xl">
          <a>
            <img className="w-48 " src="images/googleplay.png" />
          </a>
        </div>
      </div>
      <div className="mt-6 text-center sm:hidden 2xl:mt-12 md:mt-8 md:mr-2 sm:mt-5 md:mx-0">
        <button disabled={true} className="bg-[#1B1212]    hover:bg-[#1b1919]  md:hover:transition md:duration-300 md:ease-in-out md:delay-150 md:hover:scale-105 text-base          px-16  font-Productsansbold rounded-full py-3 2xl:py-5  text-white font-semibold">
          Download Now
        </button>
      </div>
    </div>
  );
};

export default Downloadbw;
