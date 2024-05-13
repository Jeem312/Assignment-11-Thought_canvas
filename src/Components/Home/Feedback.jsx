import { Rating } from 'flowbite-react';
import React from 'react';
import Swal from 'sweetalert2';

const Feedback = () => {
   const handleFeedback= e =>{
    e.preventDefault();
    Swal.fire({
        icon: "success",
        title: "Thanks For Your Feedback",
        showConfirmButton: false,
        timer: 1500
      });
      e.target.reset();
   }
    return (
        <div className='container mx-auto'>
            <h1 className='text-yellow-400  mt-6 text-4xl font-bold flex justify-center items-center'> Your opinion matters!
            </h1>
            <div className=" container mx-auto my-14 flex flex-col border border-blue-500 max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
        <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-semibold text-center"> FeedBack</h2>
            <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-center text-blue-400">How was your experience?</span>
                <div className="flex space-x-3 text-yellow-500">
                <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
    </Rating>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <textarea rows="3" placeholder="Message..." className="p-4 border border-blue-600 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50 " required></textarea>
                <button onClick={handleFeedback} type="button" className="py-4 my-8 font-semibold rounded-md bg-blue-500 text-white dark:text-gray-50 dark:bg-violet-600">Leave feedback</button>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <a rel="noopener noreferrer" href="#" className="text-sm text-blue-500 underline dark:text-gray-600">Maybe later</a>
        </div>
    </div>
        </div>
    );
};

export default Feedback;