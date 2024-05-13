import { Card } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const CourseDetails = () => {
    const details = useLoaderData();
    const {
        price,
        instructor,
        duration,
       deadline,
        description,
        category,
        title
    } = details
    const handleSubmit =()=>{
     toast('We Will Inform You Verry Soon');
    }
    return (
        <div>
            <Card
        className="md:max-w-screen-md container mx-auto rounded-lg "
        imgAlt="Meaningful alt text for an image that is not purely decorative"
      >
        
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> <span className='text-blue-400'> Tittle : </span>
          {title}
        </h5>
        <div className='border border-b-blue-300'></div>
        <div className='flex'>
                <img src="https://i.postimg.cc/fbpzswP8/shield.png" alt="" className=' h-5 w-5' />
                
               <p className='font-semibold  justify-center items-center'><span className='text-blue-400'> Instructor:</span>{instructor}</p></div>
       
        <div className='flex'>
                <img src="https://i.postimg.cc/vZP8P7tF/description.png" alt="" className=' h-5 w-5' />
                
               <p className='font-semibold  justify-center items-center'><span className='text-blue-400'> Category : </span>{category}</p></div>
       
        <div className='border border-b-blue-300'></div>
        <div className='flex'>
                <img src="https://i.postimg.cc/NGXG7b79/money.png" alt="" className=' h-5 w-5' />
                
               <p className='font-semibold  justify-center items-center'><span className='text-blue-400'>Course-Fees : </span>{price}</p></div>
       
        <div className='flex'>
                <img src="https://i.postimg.cc/W11PK7r7/stop-watch.png" alt="" className=' h-5 w-5' />
                
               <p className='font-semibold  justify-center items-center'><span className='text-blue-400'> Course-Deadline : </span>{duration}</p></div>
       
       
        <div className='border border-b-blue-300'></div>
        <div className='flex'>
                <img src="https://i.postimg.cc/JzhMBDVT/detail2.png" alt="" className=' h-5 w-5 mr-1' />
                
                <p><span className='text-blue-400 font-bold'> Detalis : </span>{description}</p>
              </div>
              <div className='flex justify-center items-center '>
       {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-blue-500 text-white " onClick={()=>document.getElementById('my_modal_1').showModal()}>Enroll Now</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box  bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
    <h3 className="font-bold text-lg">Sorry!</h3>
    <p className="py-4">Deadline is over.Wait for next Batch.Give Your email When Next Batch  Will Start We will inform you.</p>
   <form onSubmit={handleSubmit}>
   <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow text-gray-600" placeholder="Email" required />
</label>
<div className='mt-3 flex justify-center items-center'><button className='bg-blue-400 text-white p-2  rounded-lg p-4'>Submit</button></div>
   </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn border-whiteh-14 bg-gradient-to-r from-sky-500 to-indigo-500 ">Close</button>
      </form>
    </div>
  </div>
</dialog>
      </div>
      </Card>
     
        </div>
    );
};

export default CourseDetails;