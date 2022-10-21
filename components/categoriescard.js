import React, { useEffect, useState,useRef } from "react";
// import Indicator from "react-carousel-indicator";
// import "react-carousel-indicator/dist/index.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import {HiChevronRight,HiChevronLeft } from 'react-icons/hi';





const Categoriescard = () => {
  // const jjj = () => {
  //   var slider = document.getElementById('containere')
  //   slider.scrollLeft = slider.scrollLeft + 500;
  //   console.log("click");
  // }
  
  
  const ScrollRight = () => {
    var slider = document.getElementById('containere')
    slider.scrollLeft = slider.scrollLeft + 150;
    // if(scrollCheck.current.scrollLeft > 0) {
    //   setleftScrollview(true)
    // }  
 

    // console.log(slider.scrollLeft);
  }
  
  const ScrollLeft = () => {
    var slider = document.getElementById('containere')
    slider.scrollLeft = slider.scrollLeft - 150;
    // console.log("click")
    //   if (scrollCheck.current.scrollLeft < 150){
    //   setleftScrollview(false)
    // }
  }
 
  
  // useEffect( () => {
  //   scrollCheck.addEventListener('scroll',(event) => {
  //     console.log(event.currentTarget.scrollLeft);
  // });
  // } , [] )

  const scroll = (e) => {
    console.log(e.currentTarget.scrollLeft);
    if(scrollCheck.current.scrollLeft > 0) {
      setleftScrollview(true)
    }  
    else if (scrollCheck.current.scrollLeft == 0){
      setleftScrollview(false)
    }
 

  }
  



  var scrollCheck = useRef(null)
  var buttonleft = useRef(null)
 var buttonRight  = useRef(null)

  

  // useEffect( () => {
  //   // const checkleftscroll = document.getElementById('containere')
  //   // if (checkleftscroll.scrollLeft > 5) {
  //   //   setleftScrollview(true)
      
  //   // } else {
  //   //   setleftScrollview(false)
  //   // }
  //   console.log(scrollCheck.current.scrollLeft);


  // } , [scrollCheck,buttonRight,buttonleft] )
  
  
 const [leftScrollview, setleftScrollview] = useState(false)
//  const [RightScrollview, RightleftScrollview] = useState(false)
  
  
  


  
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
    <>
    
    {/* grid  grid-cols-4  */}

    <div className="relative"> 

   
 
   
    <header onScroll={scroll} ref={scrollCheck}   id="containere" className=" grid grid-cols-6  relative gap-x-48 dark:bg-[#111111]    bg-[#F5F5F7] overflow-x-scroll scrollbar-hide over scroll scroll-smooth pt-8 pb-10 sm:hidden">
     
      <div className="px-3 py-5 card shadow border-none dark:bg-[#000000]   bg-[#FFFFFF] rounded-xl  w-[176px] border-2  h-[322px] ml-6  mt-4 mb-8 dark:border-[#17181a]   ">
        <img  alt="lt_t&s"  className=" dark:hidden text-left w-[69px]" src="/images/icons/E-commerce-light.png" />
        <img  alt="lt_t&s"  className=" dark:block hidden text-left w-[69px]" src="/images/icons/E-commerce-dark.png" />
        <h1 className=" text-[12px] mt-4  text-left dark:text-[#EEEEEE] font-Productsansbold ">
          {" "}
          Ecommerce & Social Media
        </h1>
        <h1 className="mt-2 pb-12  text-[12px] text-left dark:text-[#F9F9F9] font-Productsansregular ">
          {" "}
          Everything you need to to grow your business online from marketing,
          selling, branding, customer support, dealing with reviews and much
          more
        </h1>
      
      </div>
      <div className="px-3 py-5 card shadow border-none dark:bg-[#000000]   bg-[#FFFFFF] rounded-xl  w-[176px] border-2  h-[322px] ml-6  mt-4 mb-8 dark:border-[#17181a]   ">
        <img  alt="lt_t&s"  className=" dark:hidden text-left w-[69px]" src="/images/icons/teacher-light.png" />
        <img  alt="lt_t&s"  className=" dark:block hidden text-left w-[69px]" src="/images/icons/teacher-dark.png" />
        <h1 className=" text-[12px] mt-4  text-left dark:text-[#EEEEEE] font-Productsansbold ">
          {" "}
          Teachers & Students
        </h1>
        <h1 className="mt-2 pb-12  text-[12px] text-left dark:text-[#F9F9F9] font-Productsansregular ">
          {" "}
          Make your education life simpler in studying, exam preparation, project submission, researching and much more
        </h1>
      
      </div>
     
      <div className="px-3 py-5 card shadow border-none dark:bg-[#000000]   bg-[#FFFFFF] rounded-xl  w-[176px] border-2  h-[322px] ml-6  mt-4 mb-8 dark:border-[#17181a]   ">
        <img  alt="lt_t&s"  className=" dark:hidden text-left w-[69px]" src="/images/icons/blog-Light.png" />
        <img  alt="lt_t&s"  className=" dark:block hidden text-left w-[69px]" src="/images/icons/blog-dark.png" />
        <h1 className=" text-[12px] mt-4  text-left dark:text-[#EEEEEE] font-Productsansbold ">
          {" "}
          Blogging & Publishing
        </h1>
        <h1 className="mt-2 pb-12  text-[12px] text-left dark:text-[#F9F9F9] font-Productsansregular ">
          {" "}
         Make your blog stand out with proper research content, grammar checks, optimization for search engines and much more
        </h1>
      
      </div>
     
      <div className="px-3 py-5 card shadow border-none dark:bg-[#000000]   bg-[#FFFFFF] rounded-xl  w-[176px] border-2  h-[322px] ml-6  mt-4 mb-8 dark:border-[#17181a]   ">
        <img  alt="lt_t&s"  className=" text-left w-[69px]" src="/images/icons/mcld.png" />
        <h1 className=" text-[12px] mt-4  text-left dark:text-[#EEEEEE] font-Productsansbold ">
          {" "}
          Media & Communication
        </h1>
        <h1 className="mt-2 pb-12  text-[12px] text-left dark:text-[#F9F9F9] font-Productsansregular ">
          {" "}
          Get succeeded in digital media with unique idea generation, content creation,trending concepts, click baits and much more
        </h1>
      
      </div>
     
      <div className="px-3 py-5 card shadow border-none dark:bg-[#000000]   bg-[#FFFFFF] rounded-xl  w-[176px] border-2  h-[322px] ml-6  mt-4 mb-8 dark:border-[#17181a]   ">
        <img  alt="lt_t&s"  className=" dark:hidden text-left w-[69px]" src="/images/icons/Office-light.png" />
        <img  alt="lt_t&s"  className=" dark:block hidden text-left w-[69px]" src="/images/icons/office-dark.png" />
        <h1 className=" text-[12px] mt-4  text-left dark:text-[#EEEEEE] font-Productsansbold ">
          {" "}
          Office & Employment
        </h1>
        <h1 className="mt-2 pb-12  text-[12px] text-left dark:text-[#F9F9F9] font-Productsansregular ">
          {" "}
          Got tired of repetitive tedious tasks in your office, Here comes your solution to writing letters, emails, job descriptions, creating meeting agendas and more
        </h1>
      
      </div>
     
      <div className="px-3 py-5 card shadow border-none dark:bg-[#000000]   bg-[#FFFFFF] rounded-xl  w-[176px] border-2  h-[322px] ml-6  mt-4 mb-8 dark:border-[#17181a]   ">
        <img  alt="lt_t&s"  className=" text-left w-[69px]" src="/images/icons/Hobbies-L&D.png" />
        <h1 className=" text-[12px] mt-4  text-left dark:text-[#EEEEEE] font-Productsansbold ">
          {" "}
          Hobby & Interest
        </h1>
        <h1 className="mt-2 pb-12  text-[12px] text-left dark:text-[#F9F9F9] font-Productsansregular ">
          {" "}
          Spend your leisure time effectively writing a story, playing IQ games, solving a case, motivating yourself and much more

        </h1>
      
      </div>
     
     
   
      {/* <div className="p-10 w-full card    border-2  h-auto mx-6 mt-4 mb-8 dark:border-[#17181a]   ">
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
      </div> */}


      
     
      
    </header>
    

    
     {
      leftScrollview ?  
      <HiChevronLeft ref={buttonleft} onClick={ScrollLeft}  className="absolute transition ease-in-out delay-1000 opacity-70 dark:text-[#F2F1EB] dark:bg-[#343436] bg-[#E2E2E4] px-3 py-3 top-[180px] text-[45px] rounded-full  sm:hidden left-5" />
      : null
     }
      <HiChevronRight ref={buttonRight} onClick={ScrollRight}  className="absolute opacity-70 dark:text-[#F2F1EB] dark:bg-[#343436] bg-[#E2E2E4] px-3 py-3 top-[180px] text-[45px] rounded-full  sm:hidden right-5" />
   
   
    

    
     {/* <img className=" w-10 right-0 bg-orange-300 px-2 py-2 rounded-full top-[1200px] absolute" src="/images/next.png"/>  */}
     

     </div>

    </>
    
  );
};

export default Categoriescard;
