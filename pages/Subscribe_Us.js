import React from 'react'
import { useRouter } from 'next/router';
import Try_a_demo from './try_a_demo';

const Subscribe_Us = () => {
  const router = useRouter();
  return (
    <> 
    <div className=' sm:text-center h-screen '>
      {/* large device  */}
      <h1 className=' sm:pt-[214px] sm:block hidden text-[#A2A2A2] text-[60px] font-Productsansbold'>  Hey! We're working on it. </h1>
      <h1 className='text-[#080808] hidden sm:block text-[50px] mx-auto  max-w-[800px] font-Productsansbold'> We look forward to supporting  </h1>
      <h1 className='text-[#080808] hidden sm:block text-[50px] mx-auto  max-w-[800px] font-Productsansbold'>you along the way. </h1>
         
         {/* small device  */}
       <div className='sm:hidden  ml-[48px] '> 
      <h1 className=' text-[#A2A2A2] sm:hidden font-Productsansbold leading-[40px] text-[33px]  pt-12'>  Hey! </h1>
      <h1 className='text-[#A2A2A2] sm:hidden font-Productsansbold leading-[40px] text-[33px]'>  we are working </h1>
      <h1 className='text-[#A2A2A2] sm:hidden font-Productsansbold leading-[40px] text-[33px]'>   on it. </h1>
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

      

       <div className=' sm:hidden text-right pt-5 pr-[40px]'> 
        <h1 className=' font-Productsansbold text-[28px] leading-[35px] '>  We look forward to  </h1>
        <h1 className='font-Productsansbold text-[28px] leading-[35px] '>  supporting you </h1>
        <h1 className='font-Productsansbold text-[28px] leading-[35px] '>  along </h1>
        <h1 className='font-Productsansbold text-[28px] leading-[35px] '>  the way </h1>
      </div> 

      {/* large device  */}
      <div className='sm:block hidden  items-center relative '>  
      <input placeholder='Your Email or Phone number' className='w-[500px] mx-auto  outline-transparent pl-7 text-[#B5B5B5] mt-6 h-[50px] rounded-[40px] bg-[#ECECEC] ' /> 
     <buton className='mx-auto bg-[#676767] absolute  px-7 py-[11px] top-[26px] left-[800px] rounded-[40px] ' >  hello </buton>
     </div>


     {/* small device  */}
     <div className=' sm:hidden flex  text-center'> 
     <input placeholder='Your Email or Phone number' className='w-[350px] mx-5 sm:hidden  outline-transparent pl-7 text-[#B5B5B5] mt-12 h-[50px] rounded-[40px] bg-[#ECECEC] ' /> 
     <button className=' ml-[-72px]'>  hello </button>
     </div>


     {/* large device  */}
    
     <div className=' sm:flex hidden  justify-center   items-center mt-8  '> 
     <h1 className=' text-3xl text-[#A2A2A2]   font-Productsansbold  '>  Still in doubt?   </h1>
     <a  onClick={() => router.push('/try_a_demo')} className='ml-4 cursor-pointer'>
     <h1 className='text-3xl    font-Productsansbold'> Try the demo  </h1>
     </a>
     {/* <h1 className='text-3xl   font-Productsansbold'> Try the demo  </h1> */}
     <a  onClick={() => router.push('/try_a_demo')} className='ml-4 cursor-pointer '> 
     <img className=" w-10  " src="/images/right_arrow.png" />
     </a>
     {/* <h1 className='text-lg mx-auto '>  Try the demo </h1>
     <img className=" w-10 mx-auto" src="/images/right_arrow.png" /> */}
     </div>


     {/* small device  */}

     <div className=' mt-12'> 
     <h1 className=' text-3xl text-center text-[#A2A2A2]   font-Productsansbold  '>  Still in doubt?   </h1>

     <div className=' flex items-center mt-1 justify-center'>
     <a  onClick={() => router.push('/try_a_demo')} className='ml-4 cursor-pointer'>
     <h1 className='text-xl    font-Productsansbold'> Try the demo  </h1>
     </a>
    
     <a  onClick={() => router.push('/try_a_demo')} className='ml-4 cursor-pointer '> 
     <img className=" w-6  " src="/images/right_arrow.png" />
     </a>

     </div>

     </div>
   
    </div>

    {/* large device  */}
    <div className='absolute sm:bottom-0 sm:block hidden   '>
     <video autoPlay loop muted className=' w-48 sm:w-96'>
      <source src="/video.mp4" type="video/mp4" />
     </video>
     </div>

        {/* small device  */}
     <div className='absolute sm:hidden  left-1/2 bottom-0 transform -translate-x-1/2    '>
     <video autoPlay loop muted className=' w-48 sm:w-96'>
      <source src="/video.mp4" type="video/mp4" />
     </video>
     </div>
    </>
  )
}

export default Subscribe_Us


 {/* <h1 className='text-3xl   font-Productsansbold'> Try the demo  </h1> */}