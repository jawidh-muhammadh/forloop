import React, { useState } from "react";

const Footer = () => {

  const [input, setinput] = useState("")
  return (
    <div className="bg-[#1B1212] ">
      {/* #221F14 previous color for footer  */}
      <div className="bg-[#1B1212] pb-6 sm:flex w-full sm:px-12 lg:px-36 lg:pl-36 pt-12 justify-evenly  ">
        <div className="mx-6 sm:w-4/12 lg:mx-0">
          <img
            className="object-contain h-10 2xl:pl-36 lg:h-12 lg:mt-4 md:mt-16 sm:mt-16 "
            src="images/text_logo.png"
          />

          {/* <div className="flex items-center pb-6 sm:pb-0 2xl:mx-36 sm:justify-between mt-7">
            <div className="px-0 sm:px-0">
              <a href="#">
                <img className="w-24 sm:w-40" src="images/appstore.png" />
              </a>
            </div>
            <div className="px-4 sm:px-4">
              <a href="#">
                <img className="w-24 sm:w-44 " src="images/googleplay.png" />
              </a>
            </div>
          </div> */}

          <h1 className="text-3xl text-white sm:text-4xl mt-7 font-Productsansbold">
            {" "}
            Get in touch
          </h1>

          <div class="flex relative mt-3  w-80  border p-2 border-[#F2F1EB] bg-white">
            <input
            value={input}
            onChange={ (e) => setinput(e.target.value)  }
        
              type="text"
              class=" italic  text-black w-48 h-5 bg-white   p-3  z-0  focus:outline-none  font-thin text-sm    "
              placeholder="Email Address"
            />
            <button onClick={ () => setinput("") } className=" bg-[#676767] absolute py-[9px] -mt-[9px]  -mr-[1px]        text-white right-0    px-5">
              {" "}
              Submit
            </button>
          </div>
        </div>

        <div className="flex flex-col mx-6 sm:w-4/12 lg:mx-0 lg:ml-32">
          <h1 className="mt-8 mb-2 text-xl text-white sm:mt-4 font-Productsansbold sm:text-lg lg:text-3xl sm:mt:0 sm:mb-3">
            {" "}
            More Info
          </h1>
          <a
            className="font-Productsansregular mb-1 md:mb-1 sm:text-lg text-[#B8BBAF]"
            
          >
            Support
          </a>
          <a
            className=" font-Productsansregular mb-1 md:mb-1 sm:text-lg text-[#B8BBAF] "
          
          >
            Privacy Policy
          </a>
          <a
            className=" font-Productsansregular mb-1 md:mb-1 sm:text-lg text-[#B8BBAF] "
           
          >
            Terms Of Service
          </a>
          <a
            className="  font-Productsansregular mb-1 md:mb-1 sm:text-lg text-[#B8BBAF] "
          
          >
            Changelog
          </a>
        </div>

        <div className="flex flex-col mx-6 sm:w-4/12 lg:mx-0 lg:ml-10 ">
          <h1 className="mt-4 mb-2 text-xl text-white font-Productsansbold sm:text-lg lg:text-3xl sm:mt:0 sm:mb-3">
            {" "}
            Who We Are?
          </h1>
          <a
            className="  font-Productsansregular mb-1 md:mb-1 sm:text-lg text-[#B8BBAF] "
          
          >
            Knowledge Center
          </a>
          <a
            className="  font-Productsansregular mb-1 md:mb-1 sm:text-lg text-[#B8BBAF] "
           
          >
            Guidelines
          </a>
          <a
            className="   font-Productsansregular mb-1 md:mb-1 sm:text-lg text-[#B8BBAF] "
          
          >
            Press
          </a>
        </div>
      </div>

      <div className=" line hidden sm:block mt-2 pb-4 mx-[0px] 2xl:mx-[275px]  sm:mx-[75px] md:mx-[75px] lg:mx-[138px]"></div>

      <div className="justify-between mt-3 sm:flex pb-36 2xl:mx-72 sm:mx-32 ">
        {/* down  */}
        <div className="flex">
          <div className="flex ml-3 sm:ml-0">
            <a>
              <img
                className="object-cover w-6 h-6 mx-3 transition duration-300 ease-in-out delay-150 lg:w-8 lg:h-8 hover:scale-125 sm:w-6 sm:h-6 md:w-6 md:h-6 "
                src="images/Twitter.png"
              />
            </a>{" "}
            <a >
              <img
                className="object-cover w-6 h-6 mx-3 transition duration-300 ease-in-out delay-150 lg:w-8 lg:h-8 hover:scale-125 sm:w-6 sm:h-6 md:w-6 md:h-6 "
                src="images/Instagram.png"
              />
            </a>
            <a >
              <img
                className="object-cover w-6 h-6 mx-3 transition duration-300 ease-in-out delay-150 lg:w-8 lg:h-8 hover:scale-125 sm:w-6 sm:h-6 md:w-6 md:h-6 "
                src="images/Facebook.png"
              />
            </a>
          </div>

          <div className="ml-5 vertiline"> </div>

          <div className="flex items-center pb-6 ml-7 sm:pb-0 2xl:mx-36 sm:justify-between">
            <div className="px-0 sm:px-0">
              <a>
                <img className="w-6" src="images/kim.png" />
              </a>
            </div>
            <div className="px-4 ml-2 sm:px-4">
              <a >
                <img className="w-8 " src="images/appstore_iconn.png" />
              </a>
            </div>
          </div>
        </div>
        {/* up  */}
        <div className="flex mt-7 sm:mt-0">
          <a
            className="  font-Productsansregular mx-5 mb-1 md:mb-1 sm:text-lg text-[#B8BBAF] "
          
          >
            Guidelines
          </a>
          <a
            className="   font-Productsansregular mx-5 mb-1 md:mb-1 sm:text-lg text-[#B8BBAF] "
           
          >
            Press
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
