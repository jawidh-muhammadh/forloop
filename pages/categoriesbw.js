import React from "react";
import HorizontalScroll from "react-scroll-horizontal";

const Categoriesbw = () => {
  const child = { width: `30em`, height: `100%` };
  const parent = { width: `60em`, height: `100%` };
  return (
    <>
      <div className="hidden pt-6 sm:block lg:pt-56 xl:pt-6 ">
        {/* bg-[#F2F2F2]  */}
        {/* #f3f3ed nice background  */}
        {/* categories 3 on right 3 on left  */}

        <h1 className="md:pt-16 mx-6 md:mx-48 sm:mx-28  text-4xl sm:text-6xl 2xl:text-8xl text-[#8A8B91] dark:text-white text-left lg:mx-72 font-Productsansbold ">
          {" "}
          Forloop is for,{" "}
        </h1>
        <h1 className="mx-6 mt-4 text-lg tracking-wide md:mx-48 sm:mx-28 dark:text-white sm:text-xl 2xl:text-3xl lg:mx-72 font-Productsansregular ">
          {" "}
          people who love to see a change in how something can be written.Ever
          thought how an Artificial Intelligence product could write contents
          that catch the eyes of the reader? Forloop does that in seconds. These
          are some of the areas we cover{" "}
        </h1>

        <div className="flex flex-col justify-center pt-12 mx-6 sm:pt-32 sm:flex-row md:pt-36">
          {/* left view  */}
          <div className="flex flex-col">
            <div className="p-10 border-2 dark:border-[#17181a]   ">
              <img className="mx-auto w-44" src="/images/hobby.png" />
              <h1 className="text-lg text-center dark:text-white font-Productsansbold ">
                {" "}
                Ecommerce & Social Media
              </h1>
              <h1 className="mt-2 text-center dark:text-white md:w-64 font-Productsansregular ">
                {" "}
                Everything you need to grow your business online from marketing,
                selling, branding, customer support, dealing with reviews and
                much more
              </h1>
            </div>

            <div className="p-10 border-2 dark:border-[#17181a]  ">
              <img className="mx-auto w-44" src="/images/hobby.png" />
              <h1 className="text-lg text-center dark:text-white font-Productsansbold ">
                {" "}
                Ecommerce & Social Media
              </h1>
              <h1 className="mt-2 text-center dark:text-white md:w-64 font-Productsansregular ">
                {" "}
                Everything you need to grow your business online from marketing,
                selling, branding, customer support, dealing with reviews and
                much more
              </h1>
            </div>

            <div className="p-10 border-2 dark:border-[#17181a] ">
              <img className="mx-auto w-44" src="/images/hobby.png" />
              <h1 className="text-lg text-center dark:text-white font-Productsansbold ">
                {" "}
                Ecommerce & Social Media
              </h1>
              <h1 className="mt-2 text-center dark:text-white md:w-64 font-Productsansregular ">
                {" "}
                Everything you need to grow your business online from marketing,
                selling, branding, customer support, dealing with reviews and
                much more
              </h1>
            </div>
          </div>

          {/* right view  */}
          <div className="flex flex-col sm:-mt-20">
            <div className="p-10 border-2  dark:border-[#17181a] ">
              <img className="mx-auto w-44" src="/images/hobby.png" />
              <h1 className="text-lg text-center dark:text-white font-Productsansbold ">
                {" "}
                Ecommerce & Social Media
              </h1>
              <h1 className="mt-2 text-center dark:text-white md:w-64 font-Productsansregular ">
                {" "}
                Everything you need to grow your business online from marketing,
                selling, branding, customer support, dealing with reviews and
                much more
              </h1>
            </div>

            <div className="p-10 border-2 dark:border-[#17181a]">
              <img className="mx-auto w-44" src="/images/hobby.png" />
              <h1 className="text-lg text-center dark:text-white font-Productsansbold ">
                {" "}
                Ecommerce & Social Media
              </h1>
              <h1 className="mt-2 text-center md:w-64 dark:text-white font-Productsansregular ">
                {" "}
                Everything you need to grow your business online from marketing,
                selling, branding, customer support, dealing with reviews and
                much more
              </h1>
            </div>

            <div className="p-10 border-2  dark:border-[#17181a]">
              <img className="mx-auto w-44" src="/images/hobby.png" />
              <h1 className="text-lg text-center dark:text-white font-Productsansbold ">
                {" "}
                Ecommerce & Social Media
              </h1>
              <h1 className="mt-2 text-center dark:text-white md:w-64 font-Productsansregular ">
                {" "}
                Everything you need to grow your business online from marketing,
                selling, branding, customer support, dealing with reviews and
                much more
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Below Sm devices  */}

      <div className="block pt-6 sm:hidden">
        <h1 className=" mx-6   text-4xl  text-[#8A8B91] dark:text-white text-left font-Productsansbold ">
          {" "}
          Forloop is for,{" "}
        </h1>
        <h1 className="mx-6 mt-4 text-lg tracking-wide dark:text-white font-Productsansregular ">
          {" "}
          people who love to see a change in how something can be written.Ever
          thought how an Artificial Intelligence product could write contents
          that catch the eyes of the reader? Forloop does that in seconds. These
          are some of the areas we cover{" "}
        </h1>
      </div>

      {/* <div className="flex overflow-x-scroll size sm:hidden scroll scroll-smooth"> */}
      {/* <div className="flex scrolling-wrapper size">
        <div className="p-10  w-full border-2  h-auto mx-6 mt-4 mb-8 dark:border-[#17181a]   ">
          <img className="mx-auto w-44" src="/images/hobby.png" />
          <h1 className="text-lg text-center dark:text-white font-Productsansbold ">
            {" "}
            Ecommerce & Social Media
          </h1>
          <h1 className="mt-2 text-center dark:text-white font-Productsansregular ">
            {" "}
            Everything you need to grow your business online from marketing,
            selling, branding, customer support, dealing with reviews and much
            more
          </h1>
        </div>

        <div className="p-10 w-full    border-2  h-auto mx-6 mt-4 mb-8 dark:border-[#17181a]   ">
          <img className="mx-auto w-44" src="/images/hobby.png" />
          <h1 className="text-lg text-center dark:text-white font-Productsansbold ">
            {" "}
            Ecommerce & Social Media
          </h1>
          <h1 className="mt-2 text-center dark:text-white font-Productsansregular ">
            {" "}
            Everything you need to grow your business online from marketing,
            selling, branding, customer support, dealing with reviews and much
            more
          </h1>
        </div>

        <div className="p-10 w-full    border-2  h-auto mx-6 mt-4 mb-8 dark:border-[#17181a]   ">
          <img className="mx-auto w-44" src="/images/hobby.png" />
          <h1 className="text-lg text-center dark:text-white font-Productsansbold ">
            {" "}
            Ecommerce & Social Media
          </h1>
          <h1 className="mt-2 text-center dark:text-white font-Productsansregular ">
            {" "}
            Everything you need to grow your business online from marketing,
            selling, branding, customer support, dealing with reviews and much
            more
          </h1>
        </div>
      </div> */}
      {/* </div>  */}
    </>
  );
};

export default Categoriesbw;
