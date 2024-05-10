import React from 'react';
import NewsLetterAnimation from './NewsLetterAnimation.json'
import Lottie from 'lottie-react';
const NewsLetter = () => {
    return (
       <div className='container mx-auto'>
       <h1 className="text-5xl text-blue-500 font-extrabold flex mt-10 underline justify-center items-center">Newsletter</h1> 
         <div className=' grid grid-cols-1  md:grid-cols-2'>
            
            <div>
            <Lottie  animationData={NewsLetterAnimation} />
            </div>
           <div className='flex flex-col md:mr-44 space-y-8 justify-center items-center'>
           <form>
    <h2 className="text-6xl text-blue-500">Get In Touch</h2> 
    
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-blue-500">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="User Email" className="input input-bordered join-item" /> 
        <button className="btn bg-blue-500 text-white join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
           </div>
        </div>
       </div>
    );
};

export default NewsLetter;