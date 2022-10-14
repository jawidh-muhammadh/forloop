import React from 'react'
import { useRouter } from 'next/router';
import write_story_generate from './write_story_generate';

const Write_story_demo = () => {
  const router = useRouter();
  return (
    <> 
    <div className=' h-screen'>
      <img onClick={() => router.push('/try_a_demo')} className=" cursor-pointer w-10 pt-24 ml-20  " src="/images/left_arrow.png" />
      

      <div className='flex mt-4 justify-around mx-36'> 
        <h1 className=' px-4   font-Productsansbold text-[30px]'> Give Your Story Details  </h1>
        <textarea placeholder='Eg : Give extra detailing in comma seperated format' className=' outline-0  border-[#BBBBBB] rounded-[10px]  h-[200px] pl-2 pt-2  w-[600px] border ' >
       
           </textarea>  

      </div>
      <div className=' text-right mt-12 z-40 mr-40'>
      <button onClick={() => router.push('/write_story_generate')} className=' py-2 px-12 rounded-full text-white font-Productsansbold bg-[#118AB2]'>  Generate </button>
      </div>
      
      </div>
      <img className=" w-[650px]  absolute bottom-0 left-0  " src="/images/saturday/colour_doodle.png" />
      <img className=" w-[650px]  absolute bottom-0 right-0  " src="/images/saturday/colour_doodle.png" />
     
      </>
  )
}

export default Write_story_demo