"use client";

import { Label, TextInput, Textarea } from "flowbite-react";


const AddBlog = () => {
  return (
    <div>
      <form className=''> <h2 className='flex mt-16 mb-6 justify-center items-center font-bold text-2xl text-blue-500'>Add a Blog</h2>
        <div className='container mx-auto w-1/2 gap-4 my-6 grid grid-cols-1 md:grid-cols-2'>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" name='tittle' className=" grow w-full" placeholder="Tittle" required />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
          </label>
          <label className="input input-bordered flex items-center gap-2">
        
            <input type="text" name='img' className="grow w-full" placeholder="Photo_url" required />
          </label>

        </div>
        <div className='container mx-auto w-1/2 gap-4 my-6 grid grid-cols-1 md:grid-cols-2'>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" name='short_description' className=" grow w-full" placeholder="Short_description" required />

          </label>
         

            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>Category</option>
              <option></option>
              <option>Health & Wellness</option>
              <option>Lifestyle</option>
              <option>Photography</option>
              <option>Technology</option>
              <option>Travel</option>
              <option>Self-Improvement</option>
            </select>
          

        </div>


        <div className="max-w-lg  container mx-auto  ">

          <Textarea id="comment" placeholder="Leave a comment..." required rows={4} name='comment' className='p-4' />
          <div className='mt-3'><button className='bg-blue-400 text-white p-2 rounded-lg btn-block'>Comment</button></div>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;