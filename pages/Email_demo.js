import React from 'react'
import { useRouter } from 'next/router';
import Try_a_demo from './try_a_demo';
import Email_generate from './Email_generate';

const Email_demo = () => {
  const router = useRouter();
  return (
    <> 
    <div className=' h-screen'>
      <div className=' sm:block hidden'>  
      <img onClick={() => router.push('/try_a_demo')} className=" cursor-pointer w-10 pt-24 ml-20  " src="/images/left_arrow.png" />
      <div className='flex mt-4 justify-around mx-28'> 
        <h1 className=' ml-36   font-Productsansbold text-[30px]'>  Email Type  </h1>
        <input placeholder='Eg : A leave letter' className=' rounded-[10px]  border-[#BBBBBB] outline-0 pl-2   w-[600px] border ' /> 
 
      </div>

      <div className='flex mt-4 justify-around mx-36'> 
        <h1 className=' px-4   font-Productsansbold text-[30px]'> Give Some Extra Details  </h1>
        <textarea placeholder='Eg : Give extra detailing in comma seperated format' className=' outline-0  border-[#BBBBBB] rounded-[10px]  h-[200px] pl-2 pt-2  w-[600px] border ' >
       
           </textarea>  

      </div>
      <div className=' text-right mt-12 z-40 mr-40'>
      <button onClick={() => router.push('/Email_generate')} className=' py-2 px-12 rounded-full text-white font-Productsansbold bg-[#118AB2]'>  Generate </button>
      </div>
      
      </div>
      <img className=" w-[650px]  absolute bottom-0 left-0  " src="/images/saturday/colour_doodle.png" />
      <img className=" w-[650px]  absolute bottom-0 right-0  " src="/images/saturday/colour_doodle.png" />
      
         
         {/* mobile   */}

         <div className='sm:hidden'> 
       <img onClick={() => router.push('/try_a_demo')} className=" cursor-pointer w-10 pt-8 ml-5  " src="/images/left_arrow.png" />
      
       
        <h1 className='  text-center   font-Productsansbold text-[30px]'>  Email Type  </h1>
        <input placeholder='Eg : A leave letter' className=' mx-10 h-16 rounded-[10px] font-Productsansregular  border-[#BBBBBB] outline-0 pl-2 text-lg   w-[600px] border ' /> 
           
          
     
        </div>
         


      </div>


      {/* mobile device  */}










      </>
  )
}

export default Email_demo