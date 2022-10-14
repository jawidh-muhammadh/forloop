import React from 'react'
import { useRouter } from 'next/router';

const Email_generate = () => {

    const router = useRouter();
  return (
    <> 
    <div className=' h-screen'>
      <img onClick={() => router.push('/Email_demo')} className="  cursor-pointer w-10 pt-64 ml-20  " src="/images/left_arrow.png" />
      

      <h1 className=' font-Productsansbold mt-5 text-[40px] ml-[170px] '> Here you go!  </h1>
      <p className=' font-Productsansregular text-[#807d7d] mx-44 mt-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ex et arcu facilisis facilisis quis sit amet massa. Sed interdum, nibh sit amet cursus faucibus, felis sem malesuada orci, rhoncus sollicitudin nisl mauris non felis. Etiam dapibus molestie finibus. Maecenas tempus at purus ac feugiat. Quisque interdum, dolor non rutrum elementum, lorem risus tristique lorem, ac accumsan tellus sem id velit. Vivamus in urna blandit lacus euismod posuere id in magna. Phasellus venenatis arcu sed elit vulputate, ut scelerisque libero semper. Maecenas augue mi, tincidunt quis lacinia ut, tempus in nisl. Mauris sodales orci nisi, id condimentum sapien condimentum ut. Proin mollis volutpat magna et efficitur. Praesent elementum suscipit ultricies. Donec congue aliquam ipsum quis accumsan. Aenean interdum faucibus ex. Pellentesque interdum ipsum maximus condimentum mattis.

Maecenas sagittis luctus ante vel feugiat. Donec vel orci dignissim, ornare risus eget, condimentum dolor. Donec non mi nec tellus semper aliquam. Integer sem eros, egestas eu egestas vel, pretium quis mi. Etiam interdum enim felis, vel dictum metus maximus vitae. Duis nec leo est. Mauris non lacinia urna. Maecenas a mi vitae metus ornare venenatis vitae nec magna. Phasellus ut mi non neque bibendum laoreet. Vivamus fermentum dolor sapien, aliquam facilisis quam. </p>

     
<div className=' text-right mt-12 z-40 mr-56'>
      <button onClick={() => router.push('/Email_generate')} className=' py-2 px-12 rounded-full text-white font-Productsansbold bg-[#118AB2]'>  Generate </button>
      </div>
   
      
      </div>
      <img className=" w-[650px] z-0  absolute top-0 left-0  " src="/images/saturday/colour_doodle.png" />
      <img className=" w-[650px] z-0  absolute top-0 right-0  " src="/images/saturday/colour_doodle.png" />
     
      </>
  )
}

export default Email_generate