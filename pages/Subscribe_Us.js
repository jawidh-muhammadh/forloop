import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Try_a_demo from './try_a_demo';
import { db } from './firebase_config';
import { collection, addDoc } from "firebase/firestore"; 


const Subscribe_Us = () => {


const [userinfotype, setuserinfotype] = useState("")
const [showsubscribedone, setshowsubscribedone] = useState(false)
const [button,setbutton] = useState(true)

const emailupdate = () => {
  console.log("jawidh");
  console.log(userinfotype);

  setshowsubscribedone(true)


}




const addinputvalue = (e) => {
  setuserinfotype(e.target.value)
  console.log(userinfotype);


}


const saveuserinfo = async  () => {
  try {
    const docRef = await addDoc(collection(db, "landing_page_notify"), {
      user: userinfotype,
    
      
    
    });
    setshowsubscribedone(true)
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  

}




  const router = useRouter();
  return (
    <> 
    <div className=' sm:text-center h-screen '>
      {/* large device  */}
      <h1 className=' sm:pt-[214px] sm:block hidden text-[#A2A2A2] text-[60px] font-Productsansbold'>  Hey! We're working on it. </h1>
      <h1 className='text-[#080808] hidden sm:block text-[50px] mx-auto  max-w-[800px] font-Productsansbold'> We look forward to supporting  </h1>
      <h1 className='text-[#080808] hidden sm:block text-[50px] mx-auto  max-w-[800px] font-Productsansbold'>you along the way. </h1>
         
         {/* small device  */}
       <div className='sm:hidden mt-16 mx-8 '> 
      <h1 className=' text-[#A2A2A2] sm:hidden font-Productsansbold leading-[35px] text-[33px]  pt-12'>  Hey! </h1>
      <h1 className='text-[#A2A2A2] sm:hidden font-Productsansbold leading-[35px] text-[33px]'>  we are working </h1>
      <h1 className='text-[#A2A2A2] sm:hidden font-Productsansbold leading-[35px] text-[33px]'>   on it. </h1>
      </div>
{/* 
      I do  */} 
{/* 
      <div className=' sm:hidden '>
        <h1 className=' text-[#A2A2A2]  font-Productsansbold ] text-[60px] text-center pt-16  ' >   Hey!  </h1>
        <h1 className=' text-[#464545] font-Productsansbold text-[34px] text-center mt-[-10px]'>  We are working on it </h1>

        <h1 className=' mt-8 text-center font-Productsansregular text-[34px]'> We look forward to supporting you along the way.   </h1>
          
          <div className=' sm:hidden   text-center'> 
     <input placeholder='Your Email or Phone number' className='w-[280px] mx-5 sm:hidden  outline-transparent pl-7 text-[#B5B5B5] mt-12 h-[50px] rounded-[40px] bg-[#ECECEC] ' /> 
     <button className=''>  hello </button>
     </div>

      </div> */}

      

       <div className=' sm:hidden text-right mt-5 mx-2 '> 
        <h1 className=' font-Productsansbold text-[30px] leading-[30px] '>  We look forward to  </h1>
        <h1 className='font-Productsansbold text-[30px] leading-[30px] '>  supporting you </h1>
        <h1 className='font-Productsansbold text-[30px] leading-[30px] '>  along </h1>
        <h1 className='font-Productsansbold text-[30px] leading-[30px] '>  the way </h1>
      </div> 

      {/* large device  */}
      <div className='sm:flex hidden justify-center   items-center  '>  
      <div className='relative'>
      <input value={userinfotype} onChange={addinputvalue} placeholder='Your Email or Phone number' className='w-[500px] pr-24 mx-auto  outline-transparent pl-7 text-[#B5B5B5] mt-6 h-[50px] rounded-[40px] bg-[#ECECEC] ' /> 
     <div className='absolute top-[25px] text-center right-[110px]  '> 
     {/* <button disabled={button}   className=' bg-[#080808] cursor-pointer text-center absolute text-white w-28 py-3 rounded-[40px]      ' >  Notify Me </button> */}
     <button disabled={!userinfotype  }   onClick={saveuserinfo}   className=' bg-[#080808] cursor-pointer text-center absolute text-white w-28 py-3 rounded-[40px]      ' >  Notify Me </button>
      {/* <button>  hi </button> */}

     </div> 
     </div>
    </div>


     {/* small device  */}
     {/* <div className=' sm:hidden block py-8  text-center'> 
     <div className='relative'> 
     <input placeholder='Your Email or Phone number' className='w-[300px] mx-5 sm:hidden text-[14px]  outline-transparent pl-7 text-[#B5B5B5] mt-12 h-[50px] rounded-[40px] bg-[#ECECEC] ' /> 
     <div className='absolute   top-[50px] right-0  mx-14 text-center '> 
     <button className=' bg-[#080808] cursor-pointer text-center absolute text-white w-24 py-2 rounded-[40px] '>   Notify Me </button>
     </div>
     </div> 
     </div> */}

<div class="flex sm:hidden relative mx-auto mt-8 w-80 rounded-full  bg-[#ECECEC] text-[14px] md:w-80 border p-2 border-[#F2F1EB] ">
            <input
            // value={input}
            // onChange={ (e) => setinput(e.target.value)  }
        
              type="text"
              class="     w-48 h-5  bg-[#ECECEC]  outline-transparent  p-3  z-0  focus:outline-none  font-thin text-sm    "
              placeholder="Your Email or Phone number"
            />
            <button  className="  rounded-full bg-[#080808] absolute py-[10px] -mt-[8px]  -mr-[1px] text-[14px]         text-white right-0    px-5">
              {" "}
              Submit
            </button>
          </div>


     {/* large device  */}
    
     {/* <div className=' sm:flex hidden  justify-center   items-center mt-8  '> 
     <h1 className=' text-3xl text-[#A2A2A2]   font-Productsansbold  '>  Still in doubt?   </h1>
     <a  onClick={() => router.push('/try_a_demo')} className='ml-4 cursor-pointer'>
     <h1 className='text-3xl    font-Productsansbold'> Try the demo  </h1>
     </a> */}
     {/* <h1 className='text-3xl   font-Productsansbold'> Try the demo  </h1> */}
     {/* <a  onClick={() => router.push('/try_a_demo')} className='ml-4 cursor-pointer '> 
     <img className=" w-10  " src="/images/right_arrow.png" />
     </a> */}
     {/* <h1 className='text-lg mx-auto '>  Try the demo </h1>
     <img className=" w-10 mx-auto" src="/images/right_arrow.png" /> */}
     {/* </div> */}


     {/* small device  */}

     {/* <div className=' sm:hidden  mt-12'> 
     <h1 className=' text-3xl text-center text-[#A2A2A2]    font-Productsansbold  '>  Still in doubt?   </h1>

     <div className=' flex items-center mt-3 justify-center'>
     <a  onClick={() => router.push('/try_a_demo')} className='ml-4 cursor-pointer'>
     <h1 className='text-xl    font-Productsansbold'> Try the demo  </h1>
     </a>
    
     <a  onClick={() => router.push('/try_a_demo')} className='ml-4 cursor-pointer '> 
     <img className=" w-6  " src="/images/right_arrow.png" />
     </a>

     </div>



     </div> */}


     <h1 className={`text-center  ${showsubscribedone ? "block" : "hidden" }  text-2xl z-50 pt-4 font-Productsansregular text-green-900`}> Thank You. We will notify you our launch day soon </h1>
   
    </div>

    {/* large device  */}
    {/* <div className='absolute sm:bottom-0 sm:block hidden   '>
     <video autoPlay loop muted className=' w-48 sm:w-96'>
      <source src="/video.mp4" type="video/mp4" />
     </video>
     </div>

        {/* small device  */}
     {/* <div className='absolute sm:hidden   left-1/2 bottom-0 transform -translate-x-1/2    '>
     <video autoPlay loop muted className=' w-48 sm:w-96'>
      <source src="/video.mp4" type="video/mp4" />
     </video>
    //  </div> */}
    </>
  )
}

export default Subscribe_Us


 {/* <h1 className='text-3xl   font-Productsansbold'> Try the demo  </h1> */}