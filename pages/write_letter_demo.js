// import React from 'react'
// import { useRouter } from 'next/router';
// import Try_a_demo from './try_a_demo';
// import Letter_generate from './Letter_generate';

// const Write_letter_demo = () => {
//   const router = useRouter();
//   return (
//     <> 
//     <div className=' sm:h-screen'>
//       <div className=' sm:block hidden'>
//       <img onClick={() => router.push('/try_a_demo')} className=" cursor-pointer w-10 pt-24 ml-20  " src="/images/left_arrow.png" />
//       <div className='flex mt-4 justify-around mx-28'> 
//         <h1 className=' ml-36   font-Productsansbold text-[30px]'>  Letter Type  </h1>
//         <input placeholder='Eg : A leave letter' className=' rounded-[10px]  border-[#BBBBBB] outline-0 pl-2   w-[600px] border ' /> 
 
//       </div>

//       <div className='flex mt-4 justify-around mx-36'> 
//         <h1 className=' px-4   font-Productsansbold text-[30px]'> Give Some Extra Details  </h1>
//         <textarea placeholder='Eg : Give extra detailing in comma seperated format' className=' outline-0  border-[#BBBBBB] rounded-[10px]  h-[200px] pl-2 pt-2  w-[600px] border ' >
       
//            </textarea>  

//       </div>
//       <div className=' text-right mt-12 z-40 mr-40'>
//       <button onClick={() => router.push('/Letter_generate')} className=' py-2 px-12 rounded-full text-white font-Productsansbold bg-[#118AB2]'>  Generate </button>
//       </div>
//        </div>
      
//       </div>
//       <img className=" w-[650px] sm:block hidden  absolute bottom-0 left-0  " src="/images/saturday/colour_doodle.png" />
//       <img className=" w-[650px] sm:block hidden  absolute bottom-0 right-0  " src="/images/saturday/colour_doodle.png" />
     

     
//      {/* mobile  */}




//      <div className=' sm:hidden block h-screen '> 
//       <img onClick={() => router.push('/try_a_demo')} className=" cursor-pointer w-10 pt-12 ml-8  " src="/images/left_arrow.png" />
        
//       <h1 className=' text-left mx-9 mt-7    font-Productsansbold text-[25px]'>  Letter Type  </h1>
//       <input placeholder='Eg : A leave letter' className=' rounded-[5px] h-9  border-[#BBBBBB] outline-0 pl-2 mx-9 mt-2   w-[350px] border ' /> 
      
//       <h1 className='  mx-9    font-Productsansbold text-[25px] mt-12'> Give Some Extra Details  </h1>

//       <textarea placeholder='Eg : Give extra detailing in comma seperated format' className=' outline-0  border-[#BBBBBB] rounded-[10px] mx-9  h-[200px] pl-2 pt-2  w-[350px] border ' >
       
//        </textarea>  

//        <div className=' text-center mt-12 z-40 '>
//       <button onClick={() => router.push('/Letter_generate')} className=' py-2 px-12 rounded-full text-white font-Productsansbold bg-[#118AB2]'>  Generate </button>
//       </div>


//       {/* <img className=" w-[250px] sm:hidden   absolute bottom-0 left-0  " src="/images/saturday/colour_doodle.png" />
//       <img className=" w-[250px] sm:hidden   absolute bottom-0 right-0  " src="/images/saturday/colour_doodle.png" /> */}
//      <img className=" w-full  sm:hidden   absolute left-1/2 bottom-0 transform -translate-x-1/2   " src="/images/saturday/colour_doodle.png" />
//       </div>




//       </>
//   )
// }

// export default Write_letter_demo