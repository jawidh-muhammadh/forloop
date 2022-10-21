// import React from 'react'
// import { useRouter } from 'next/router';
// import Email_demo from './Email_demo';
// import Paragraph_sum_demo from './paragraph_sum_demo';
// import Write_letter_demo from './write_letter_demo';
// import Write_story_demo from './write_story_demo';
// import Mindmap_map_demo from './mindmap_map_demo';

// const Try_a_demo = () => {
//   const router = useRouter();
//   return (
//     <div> 
//     <div>
//        <h1 className=' font-Productsansbold sm:font-Productsansregular sm:leading-normal leading-[36px] sm:text-[45px] sm:mx-0 mx-10 text-[30px] sm:text-center pt-[60px]  sm:pt-[130px]'> Play around to see how our app works. </h1>
//        <h1 className=' font-Productsansbold sm:font-Productsansregular sm:leading-normal leading-[36px]   sm:text-[45px] sm:mx-0 mx-10 text-[30px] sm:text-center '>  You gonna see magic for sure. </h1>
     
//      {/* big device  */}
//      <div className='sm:flex hidden  mt-10 justify-center'>
//         <div  onClick={() => router.push('/Email_demo')} className=' mx-8 '> 
//       <div className=' border cursor-pointer hover:shadowdemocard border-[#D1D1D1] rounded-[16px]  px-8 pt-4'> 
//       <img className=" w-[152px]  " src="/images/saturday/Mailing.png" />
      
//       </div>
//       <h1 className='text-center mt-2'>  Write an Email </h1>
//       </div>

//       <div  onClick={() => router.push('/write_letter_demo')} className=' mx-8'> 
//       <div className=' border cursor-pointer hover:shadowdemocard border-[#D1D1D1] rounded-[16px] px-8 pt-4'> 
//       <img className=" w-[152px]  " src="/images/saturday/write_a_letter.png" />
      
//       </div>
//       <h1 className='text-center mt-2'>  Write a Letter </h1>
//       </div>

//       <div  onClick={() => router.push('/write_story_demo')} className=' mx-8'> 
//       <div className=' border cursor-pointer hover:shadowdemocard border-[#D1D1D1] rounded-[16px]  px-8 pt-4'> 
//       <img className=" w-[152px]  " src="/images/saturday/Write_a_story.png" />
      
//       </div>
//       <h1 className='text-center mt-2'>  Write an Story </h1>
//       </div>

//      </div> 

//      <div  className='sm:flex hidden  mt-10 justify-center'>
         
//      <div  onClick={() => router.push('/paragraph_sum_demo')} className=' mx-8 '> 
//       <div className=' border cursor-pointer hover:shadowdemocard border-[#D1D1D1] rounded-[16px]  px-8 pt-4'> 
//       <img className=" w-[152px]  " src="/images/saturday/prepare_tutes.png" />
      
//       </div>
//       <h1 className='text-center mt-2'>  Summary Of Paragraph </h1>
//       </div>

//       <div  onClick={() => router.push('/mindmap_map_demo')} className=' mx-8'> 
//       <div className=' border cursor-pointer hover:shadowdemocard border-[#D1D1D1] rounded-[16px] px-8 pt-4'> 
//       <img className=" w-[152px]  " src="/images/saturday/Mind_maping.png" />
      
//       </div>
//       <h1 className='text-center mt-2'>  Mindmapping for students </h1>
//       </div>




//      </div>

//      {/* small device  */}
//      <div className='flex sm:hidden mt-5 justify-center'>
//         <div  onClick={() => router.push('/Email_demo')} className=' mx-2 '> 
//       <div className=' border cursor-pointer hover:shadowdemocard border-[#D1D1D1] rounded-[16px]  px-3 pt-2'> 
//       <img className=" w-[112px]  " src="/images/saturday/Mailing.png" />
      
//       </div>
//       <h1 className='text-center mt-2'>  Write an Email </h1>
//       </div>

//       <div  onClick={() => router.push('/write_letter_demo')} className=' mx-2'> 
//       <div className=' border cursor-pointer hover:shadowdemocard border-[#D1D1D1] rounded-[16px] px-3 pt-2'> 
//       <img className=" w-[112px]  " src="/images/saturday/write_a_letter.png" />
      
//       </div>
//       <h1 className='text-center mt-2'>  Write a Letter </h1>
//       </div>

    
//      </div> 




//      <div className='flex sm:hidden mt-10 justify-center'>
//         <div  onClick={() => router.push('/paragraph_sum_demo')} className=' mx-2'> 
//       <div className=' border cursor-pointer hover:shadowdemocard border-[#D1D1D1] rounded-[16px]  px-3 pt-2'> 
//       <img className=" w-[112px] " src="/images/saturday/prepare_tutes.png" />
      
//       </div>
//       <h1 className='text-center text-md mt-2'>  Summarize  </h1>
//       </div>

//       <div  onClick={() => router.push('/mindmap_map_demo')} className=' mx-2'> 
//       <div className=' border cursor-pointer hover:shadowdemocard border-[#D1D1D1] rounded-[16px]  px-3 pt-2'> 
//       <img className=" w-[112px]  " src="/images/saturday/Mind_maping.png" />
      
//       </div>
//       <h1 className='text-center mt-2'>  Mind Mapping </h1>
//       </div>

    

//      </div>
      
//       <div className=' sm:hidden mt-10 w-[45%] mx-auto '> 
//       <div  onClick={() => router.push('/write_story_demo')} className=' mx-2 '> 
//       <div className=' border cursor-pointer hover:shadowdemocard border-[#D1D1D1] rounded-[16px]  px-3 pt-2'> 
//       <img className=" w-[100px] mx-auto " src="/images/saturday/Write_a_story.png" />
      
//       </div>
//       <h1 className='text-center text-md mt-2'>  Write Story  </h1>
//       </div>
//       </div>


     
     
//         </div>


//         <img className=" sm:block hidden absolute bottom-0 right-0 w-[400px] h-[400px]  " src="/images/saturday/doodle8.png" />
      

//         </div>
//   )
// }

// export default Try_a_demo


// {/* <div className='flex justify-center'> 
//          <h1 className='text-[30px] font-Productsansbold'>  What we are going to write </h1>
//          <input placeholder='Eg : A Termination mail' className=' rounded-[10px] w-[600px] border' /> 
//          </div> */}




//         //  <div  onClick={() => router.push('/write_story_demo')} className=' mx-8'> 
//         //  <div className=' border cursor-pointer hover:shadowdemocard border-[#D1D1D1] rounded-[16px]  px-8 pt-4'> 
//         //  <img className=" w-[152px]  " src="/images/saturday/Write_a_story.png" />
         
//         //  </div>
//         //  <h1 className='text-center mt-2'>  Write an Story </h1>
//         //  </div>
   