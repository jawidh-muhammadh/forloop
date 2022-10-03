import React, { useState } from "react";
import Link from "next/link";

const Navbarbw = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  return (
    <>
      <div className="items-center  dark:bg-[#121418] w-auto text-lg text-[#7e7878] dark:text-[#f1ebeb]    md:flex font-body">
        {/* text-black */}
        {/* dark:bg-[#121418]  */}
        <div className="hidden  mt-6 dark:md:hidden md:flex pl-11">
          <img
            className="w-20 h-20 cursor-pointer "
            src="/images/logo_black.png"
            alt="forloop_logo"
          />
        </div>

        <div className="hidden w-4/12 mt-6 dark:md:flex pl-11">
          <img
            className="w-20 h-20 cursor-pointer "
            src="/images/logo_white.png"
            alt="forloop_logo"
          />
        </div>

        {/* <div className="hidden mt-3 md:flex">
          <ul className="ml-20 md:flex "> */}
        {/* <li className="cursor-pointer mx-7 ">
              <Link href="/Comic">
                <a className="font-Productsansregular">Blog</a>
              </Link>
            </li> */}

        {/* <li className="cursor-pointer font-Productsansregular mx-7">
              Pricing
            </li>
          </ul>
        </div> */}

        <div className="  hidden mt-3 ml-auto mr-5 md:flex place-content-end ">
          <ul className=" items-center md:flex">
            <li className="cursor-pointer font-Productsansregular mx-7">
              Blog
            </li>
            {/* font-KarlaRegular */}
            <li className="cursor-pointer font-Productsansregular mx-7">
              Pricing
            </li>
            {/* font-KarlaRegular  */}
            <button disabled={true} className="bg-[#1B1212] dark:bg-white font-Productsansregular text-lg    md:flex hidden dark:hover:bg-[#eee8e8]  hover:bg-[#1b1919]   hover:transition duration-300 ease-in-out delay-150 hover:scale-105         px-12 sm:mr-2 font-body rounded-full py-3 dark:text-black  text-white">
              Get Started
            </button>

            {/* <li className="px-5 text-center cursor-pointer mr-14 font-Productsansregular md:text-right">
              Login
            </li> */}
            {/* <div className="px-2 py-2 font-bold text-white cursor-pointer ">
              <li className="px-5 font-Cursive">Coming Soon...</li>
            </div> */}
          </ul>
        </div>
      </div>

      {/* mobile */}

      <div className="flex items-center md:hidden ">
        <div className="flex w-10/12 mt-6 pl-9">
          <img
            className="block w-10 h-10 dark:hidden"
            src="/images/logo_black.png"
            alt="forloop_logo"
          />

          <img
            className="hidden w-10 h-10 dark:block"
            src="/images/logo_white.png"
            alt="forloop_logo"
          />
        </div>

        {/* menu icon  */}
        <button
          className="flex w-2/12 dark:hidden"
          onClick={() => setMenuIcon(!menuIcon)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 mt-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>

        <button
          className="hidden w-2/12 dark:flex"
          onClick={() => setMenuIcon(!menuIcon)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 mt-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>

        {menuIcon && (
          // menu after click
          <div className="absolute top-0 right-0 block w-full h-full text-right bg-white ">
            <ul>
              <button className="" onClick={() => setMenuIcon(!menuIcon)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 mt-6 mr-12 text-black "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {/* <li className="mt-10 text-2xl font-bold text-center mx-7">
                Blog{" "}
              </li> */}
              <li className="mt-10 text-2xl font-bold text-center mx-7">
                Pricing
              </li>
              <li className="mt-10 text-2xl font-bold text-center mx-7">
                About
              </li>
              <li className="mt-10 text-center bg-[#FB3640] py-3 rounded-full w-36 text-sm  font-semibold text-white mx-auto">
                Login
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbarbw;
