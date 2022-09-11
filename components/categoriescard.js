import React, { useEffect } from "react";
// import Indicator from "react-carousel-indicator";
// import "react-carousel-indicator/dist/index.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Categoriescard = () => {
  // gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   const card = document.querySelectorAll(".card");
  //   const container = document.querySelectorAll("#container");

  //   gsap.to(card, {
  //     x: -700,
  //     duration: 2000,

  //     // ease: "none",
  //     scrollTrigger: {
  //       trigger: container,

  //       // invalidateOnRefresh: true,

  //       start: "top center",

  //       pin: card,
  //       pinSpacing: false,

  //       // scrub: 1,
  //       // snap: 1 / (card.length - 1),
  //       // base vertical scrolling on how wide the container is so it feels more natural.
  //       end: card.offsetWidth,
  //     },
  //   });
  // }, []);

  return (
    <div id="container" className="flex sm:hidden size">
      <div className="p-10 card  w-full border-2  h-auto mx-6 mt-4 mb-8 dark:border-[#17181a]   ">
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

      <div className="p-10 w-full card    border-2  h-auto mx-6 mt-4 mb-8 dark:border-[#17181a]   ">
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

      <div className="p-10 w-full card    border-2  h-auto mx-6 mt-4 mb-8 dark:border-[#17181a]   ">
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
    </div>
  );
};

export default Categoriescard;
