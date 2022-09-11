import React from "react";

const Fourth_main = () => {
  return (
    <div className="bg-[#e2e1f0]">
      <div className="flex items-center justify-between pt-12 ">
        <div className="w-[700px] text-center ml-16 ">
          <h1 className="mt-6 leading-tight text-6xl text-black font-MuktaBold">
            {" "}
            You can now explain what's in your mind even using{" "}
            <span className=" underline underline-offset-4">
              {" "}
              BROKEN ENGLISH{" "}
            </span>
          </h1>
          <h1 className="mt-4 font-Productsansregular text-[#39395f] text-2xl ">
            {" "}
            Give extra detailing even if you are not that good in english.Broken
            english are mostly welcome{" "}
          </h1>
        </div>

        <div className=" mr-40">
          <img
            className="  h-[500px] "
            src="/images/mobile.png"
            alt="forloop_logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Fourth_main;
