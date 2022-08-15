import Head from "next/head";
import Image from "next/image";
import Benefitonebw from "../components/benefitonebw";
import Benefittwobw from "../components/benefittwobw";
import Downloadbw from "../components/downloadbw";
import Faq from "../components/faq";
import Finalad from "../components/finalad";
import Footer from "../components/footer";
import Fourth from "../components/fourth";
import Fourthbw from "../components/fourthbw";
import Fourth_main from "../components/fourth_main";
import Headertwo from "../components/headertwo";
import Hero from "../components/hero";
import Herobw from "../components/herobw";
import Hero_main from "../components/hero_main";
import Navbarbw from "../components/navbarbw";
import Second from "../components/second";
import Secondbw from "../components/secondbw";
import Secondtwo from "../components/secondtwo";
import Second_main from "../components/second_main";
import Third from "../components/third";
import Third_main from "../components/third_main";
import Yesno from "../components/yesno";

import styles from "../styles/Home.module.css";
import Categoriesbw from "./categoriesbw";
import Navbar from "./navbar_main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Forloop | Make Life Easier</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/header_logo.png" />
      </Head>
      {/* bg-[#181717] */}

      <div className=" sm:h-screen">
        {/* <Navbar /> kavanam this was your last change  */}
        {/* bg-[#F2F2F2]   */}
        {/* <Hero_main /> */}
        <Navbarbw />
        <Herobw />

        {/* <Hero />  this is also last change  */}
      </div>
      {/* <Secondbw />  */}
      <Categoriesbw />
      <Yesno />
      <Benefitonebw />

      <Benefittwobw />

      <Downloadbw />
      {/* <Fourthbw /> */}

      {/* <Secondtwo /> */}
      {/* <Second_main />  this is also last change  */}
      {/* <Third_main />  this is also last change  */}
      {/* <Fourth_main />  this is also last change */}
      {/* <Faq />  this is also last change  */}
      {/* <Finalad />  */}

      {/* <Second />
      <Third />
      <Fourth /> */}

      <Footer />
    </div>
  );
}
