import React from "react";

const Second = () => {
  return (
    <div className=" bg-[#181717] w-full pt-2 pb-16  ">
      <div className="flex bg-[#16D9FF] mx-48 rounded-2xl ">
        <div className=" px-10 py-9 ">
          <h1 className=" text-5xl font-Productsansbold">
            {" "}
            Why worry when Forloop can write almost anything for you{" "}
          </h1>
          <h1 className=" mt-4 text-xl">
            {" "}
            No stress at all.The perfection you expect will come into reality in
            seconds{" "}
          </h1>
        </div>
        <div className=" w-[1500px]">
          <img
            className=" w-full rounded-r-2xl "
            src="/images/second_image.jpg"
            alt="forloop_logo"
          />
        </div>
      </div>

      {/* <div className="flex bg-[#FFE400] mt-7 mx-48 rounded-2xl ">
        <div className=" px-5 py-7 ">
          <h1 className=" text-5xl font-Productsansbold leading-[52px]">
            {" "}
            You can now explain what's in your mind even using BROKEN ENGLISH{" "}
          </h1>
          <h1 className=" mt-4 text-xl">
            Give extra detailing even if you are not that good in english.Broken
            english are mostly welcome
          </h1>
        </div>
        <div className=" w-[1500px] ]">
          <img
            className=" w-full h-[420px] rounded-r-2xl "
            src="/images/second_image.jpg"
            alt="forloop_logo"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Second;
