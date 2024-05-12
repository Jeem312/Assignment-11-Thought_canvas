import axios from 'axios';
import { Textarea } from 'flowbite-react';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const UpdateBlog = () => {
    const info = useLoaderData();
    // console.log(info);
 
  const handleUpdateBlog = e =>{
    e.preventDefault();
    const from = e.target;
    const title = from.tittle.value;
    const author_name = from.name.value;
    const author_email = from.Email.value;
    const image = from.img.value; 
    const category = from.img.category; 
    const short_description = from.Short_description.value;
    const long_description = from.Long_description.value;
    const data ={
      title,
      author_email,
      author_name,
     image,
     short_description,
     long_description,
     category
    }
 axios.put(`${import.meta.env.VITE_API_URL}/blogs/${info?._id}`,data)
     
    
    .then(data =>{
      console.log(data);
      if(data.modifiedCount>0){
        Swal.fire({
          title: 'success',
          text: 'Your Blog Updated Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
     })
//    console.log(data); 
  }
    return (
        <form
        onSubmit={handleUpdateBlog} className=''> <h2 className='flex mt-16 mb-6 justify-center items-center font-bold text-2xl text-blue-500'>Update Your Blog</h2>
         <div className='container mx-auto w-1/2 gap-4 my-6 grid grid-cols-1 md:grid-cols-2'>
           <label className="input input-bordered flex items-center gap-2">
             <input type="text" name='tittle' className=" grow w-full" placeholder="Tittle" defaultValue={info?.title} required />
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
           </label>
           <label className="input input-bordered flex items-center gap-2">
         
             <input type="text" name='name' className="grow w-full" placeholder="Name" defaultValue={info?.author_name } required />
           </label>
 
         </div>
         <div className='container mx-auto w-1/2 gap-4 my-6 grid grid-cols-1 md:grid-cols-2'>
           <label className="input input-bordered flex items-center gap-2">
             <input type="text" name='Email' className=" grow w-full" placeholder="Email" defaultValue={info?.author_email } required />
 
           </label>
           <label className="input input-bordered flex items-center gap-2">
             <input type="text" name='category' className=" grow w-full" placeholder="Category" defaultValue={info?.categoryValue } required />
 
           </label>
          
 
             
           
 
         </div>
         <div className='container mx-auto w-1/2 gap-4 my-6 grid grid-cols-1 '>
           
          
        
          
         <label className="input input-bordered flex items-center gap-2">
         
         <input type="text" name='img' defaultValue={info?. image} className="grow w-full" placeholder="Photo_url" required />
       </label>
         </div>
         <div className='container mx-auto w-1/2 gap-4 my-6 grid grid-cols-1 '>
           
          
         <Textarea id="comment" placeholder="Short_description" defaultValue={info?.short_description } required rows={4} name='Short_description' className='p-4 w-full'  />
          
        
         </div>
         <div className='container mx-auto w-1/2 gap-4 my-6 grid grid-cols-1 '>
           <Textarea id="comment" placeholder="Long_description" defaultValue={info?.long_description } required rows={4} name='Long_description' className='p-4 w-full' />
           
         </div>
         <div className='mt-3 w-1/2 container mx-auto'><button className='bg-blue-400 text-white p-2  rounded-lg btn-block'>Update Blog</button></div>
       </form>
    
    );
};

export default UpdateBlog;