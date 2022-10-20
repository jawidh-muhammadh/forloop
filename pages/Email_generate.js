import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import {  httpsCallable, getFunctions } from "firebase/functions";
import axios from 'axios';

const Email_generate = () => {

  const para = "Bodhidharma, a master of martial arts and medical remedies, is the son of a great Indian king of the Pallava dynasty. He is sent to China by his guru, who requests him to stop the spread of an epidemic existing there from spreading to India. Initially, the Chinese treat him as an inferior. However, when he cures a little girl infected by the disease and defeats people who ill-treated the villagers, the Chinese then began to respect and worship him. He begins to teach them how to cure many diseases, the skills of hypnotism, and the physical training of the Shaolin monks that led to the creation of Shaolinquan. After several years, when he expresses his desire to return to India, the villagers plot to poison him and bury him near the temple, believing that their village would be free of diseases if he is buried there. Bodhidharma agrees to die and subsequently becomes a fundamental figure in Chinese history, affectionately being dubbed as Damo.In modern-day China, Dong Lee is given the task of starting a government-planned biological war against India, known as Operation Red. He arrives in Chennai and commences by injecting a virus into a pariah dog, being the same as the one from Bodhidharma's period. Meanwhile, Subha Srinivasan, a genetics student, discovers that Bodhidharma can be brought back to life if his sample of DNA is matched with another sample of DNA. Coincidentally, she finds a matching sample in Aravind, a descendant of Bodhidharma who is working as a circus artist. Dong Lee finds out about Subha's mission to revive Bodhidharma and plans to kill her first so that the disease cannot be stopped.Subha approaches Aravind but begins to fall in love and spend time with him, forgetting about her mission. One day, Aravind's family sees Subha and clearly remembers that she visited them a year before to find Aravind and know all about him for the Bodhidharma research. Saving herself, she lies by saying that she does not know them. Later that night, Aravind's uncle explains all what happened one year before when they met Subha. Aravind goes and meets Subha and is enraged upon realising the truth. However, the next day, he reconciles with Subha in a love failure mood and agrees to contribute to the research and hence save the country. The research begins to resurrect Bodhidharma and to end Operation Red. Dong Lee continues to wreak havoc on the city."
  
  const [data, setdata] = useState("")

  const [senddata, setsenddata] = useState("")



  // useEffect( () => {
  //   // axios({
  //   //   method: 'post',
  //   //   url: 'https://us-central1-forloop-4f3fd.cloudfunctions.net/summarize_paragraphe',
  //   //   data: {
  //   //     input: para
  //   //   }
  //   // })
  //   // .then((response) => {
  //   //   console.log(response.data);
  //   // })
  //   // .catch((error) => {
  //   //   console.log(error);
  //   // });

  //   // httpsCallable('summarize_paragraphe')({input: para }).then(result => console.log(result)).catch((error) => {
      
  //   //   console.log(error.message);
  //   //   // ...
  //   // });

  // } , [] )

  const apigenerate = () => {
    
    const functions = getFunctions();
    const addMessage = httpsCallable(functions, 'summarize_paragraphe');
addMessage({ input: senddata })
  .then((result) => {
    // Read result of the Cloud Function.
    /** @type {any} */
    // const data = result.data;
    // const sanitizedMessage = data.text;
    setdata(result.data.result)
    console.log("api called");
  });
   
  }


 const handleChange = (e) => {
   setsenddata(e.target.value)
 }

    const router = useRouter();
  return (
    <> 
    <div className=' h-screen'>
      <img onClick={() => router.push('/Email_demo')} className=" z-50  cursor-pointer w-10 pt-24 sm:pt-64 sm:ml-20 ml-10  " src="/images/left_arrow.png" />

      <textarea value={senddata} onChange={handleChange}  className=' w-[700px] h-56 border' />
      
     <button onClick={apigenerate}>  generate para   </button>

      <h1 className=' font-Productsansbold mt-5 text-[40px] mx-6 sm:mx-0 sm:ml-[170px] '> Here you go!  </h1>
      <p className=' font-Productsansregular text-[#807d7d] mx-6 sm:mx-44 mt-5'>  {data}  </p>

     
<div className=' text-right mt-12 z-40 mr-56'>
      <button onClick={() => router.push('/Email_generate')} className=' py-2 px-12 rounded-full text-white font-Productsansbold bg-[#118AB2]'>  Generate </button>
      </div>
   
      
      </div>
      <img className=" sm:h-60 h-24   sm:w-[650px] z-0  absolute top-0 left-0  " src="/images/saturday/colour_doodle.png" />
      <img className=" sm:h-60 h-24 z-0  absolute top-0 right-0  " src="/images/saturday/colour_doodle.png" />
     
      </>
  )
}

export default Email_generate