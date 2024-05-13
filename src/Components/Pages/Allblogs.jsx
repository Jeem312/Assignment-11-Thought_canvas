import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllBlogCard from './AllBlogCard';


const Allblogs = () => {
    const [data,setData] =useState([]);
    const [filter, setFilter]=useState('');
    const [search ,setSearch] =useState('');
   
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/blogsall?filter=${filter}& search=${search}`)
        .then(res =>{
          console.log(res.data);
           setData(res.data);
         
         })
       },[filter,search])
      //  console.log(data);

       const handlSearch=e=>{
        e.preventDefault()
      const text = e.target.value;
        setSearch(text);
       
       }
       
    return (
      <div className='space-y-3 '>
      <div className=''>
 <div className=' flex flex-col md:flex-row justify-around items-center gap-8 '>
  
 <div>
     <select
     onChange={e=>setFilter(e.target.value)}
     value={filter}
       name='category'
       id='category'
       className='border p-4 rounded-lg text-gray-700'
     >
       <option value=''>Filter By Category</option>
       <option value='Lifestyle'>Lifestyle</option>
       <option value='Photography'>Photography</option>
       <option value='Technology'>Technology</option>
       <option value='Digital Marketing'>Travel</option>
       <option value='Self-Improvement'>Self-Improvement</option>
     </select>
   </div>
   <form  onSubmit={handlSearch}>
     <div className='flex  overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
       <input
         className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
         type='text'
         name='search'
         placeholder='Enter Blog Title'
         aria-label='Enter Blog Title'
       />

       <button className='px-1 md:px-3 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform  rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none bg-blue-500'>
         Search
       </button>
     </div>
   </form>
</div></div>
     {
         data.map(item => <AllBlogCard key={item?._id} item={item}></AllBlogCard>)
     }
 </div>
    );
};

export default Allblogs;