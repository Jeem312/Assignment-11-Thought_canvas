"use client";

import axios from "axios";
import { Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const AddBlog = () => {

  const [categoryValue ,setCategoryValue] = useState([]);
  const handleCategory = e =>{
    const value=e.target.value;
   
    setCategoryValue(value);
   
   }
  const handleAddBlog = e =>{
    e.preventDefault();
    const from = e.target;
    const title = from.tittle.value;
    const author_name = from.name.value;
    const author_email = from.Email.value;
    const image = from.img.value; 
    const short_description = from.Short_description.value;
    const long_description = from.Long_description.value;
    const data ={
      title,
      author_email,
      author_name,
     image,
     short_description,
     long_description,
     categoryValue
    }
  axios.post(`${import.meta.env.VITE_API_URL}/blogs`,data)
  Swal.fire({
    title: 'success',
    text: 'Your Blog Added Successfully',
    icon: 'success',
    confirmButtonText: 'Success'
 
})
e.target.reset();
    
  }
 
  return (
    <div>
      <form
       onSubmit={handleAddBlog} className=''> <h2 className='flex mt-16 mb-6 justify-center items-center font-bold text-2xl text-blue-500'>Add Your Blog</h2>
        <div className='container mx-auto w-1/2 gap-4 my-6 grid grid-cols-1 md:grid-cols-2'>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" name='tittle' className=" grow w-full" placeholder="Tittle" required />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
          </label>
          <label className="input input-bordered flex items-center gap-2">
        
            <input type="text" name='name' className="grow w-full" placeholder="Name" required />
          </label>

        </div>
        <div className='container mx-auto w-1/2 gap-4 my-6 grid grid-cols-1 md:grid-cols-2'>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" name='Email' className=" grow w-full" placeholder="Email" required />

          </label>
         

            <select className="select select-bordered w-full max-w-xs"  onChange={handleCategory} required >
              <option disabled selected>Category</option>
              <option></option>
              <option>Lifestyle</option>
              <option>Photography</option>
              <option>Technology</option>
              <option>Travel</option>
              <option>Self-Improvement</option>
            </select>
          

        </div>
        <div className='container mx-auto w-1/2 gap-4 my-6 grid grid-cols-1 '>
          
         
       
         
        <label className="input input-bordered flex items-center gap-2">
        
        <input type="text" name='img' className="grow w-full" placeholder="Photo_url" required />
      </label>
        </div>
        <div className='container mx-auto w-1/2 gap-4 my-6 grid grid-cols-1 '>
          
         
        <Textarea id="comment" placeholder="Short_description" required rows={4} name='Short_description' className='p-4 w-full'  />
         
       
        </div>
        <div className='container mx-auto w-1/2 gap-4 my-6 grid grid-cols-1 '>
          <Textarea id="comment" placeholder="Long_description" required rows={4} name='Long_description' className='p-4 w-full' />
          
        </div>
        <div className='mt-3 w-1/2 container mx-auto'><button className='bg-blue-400 text-white p-2  rounded-lg btn-block'>Add Blog</button></div>
      </form>
    </div>
  );
};

export default AddBlog;