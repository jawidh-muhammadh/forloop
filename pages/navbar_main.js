import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  return (
    <>
      <div className="items-center w-auto text-lg text-white md:flex font-body">
        <div className="hidden w-4/12 mt-6 md:flex pl-11">
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

        <div className="hidden w-8/12 mt-3 ml-auto mr-5 md:flex place-content-end ">
          <ul className="items-center md:flex">
            <li className="cursor-pointer font-KarlaRegular mx-7">Blog</li>
            <li className="cursor-pointer font-KarlaRegular mx-7">Pricing</li>
            <button className="bg-[#f5f1f2] font-Productsansbold text-lg    md:flex hidden hover:bg-[#f5f1f1]   hover:transition duration-300 ease-in-out delay-150 hover:scale-105         px-12 sm:mr-2 font-body rounded-full py-3  text-black">
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
          <img className="w-10 h-10 " src="/logo.png" alt="forloop_logo" />
        </div>

        {/* menu icon  */}
        <button className="flex w-2/12" onClick={() => setMenuIcon(!menuIcon)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 mt-6 text-white "
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

export default Navbar;
