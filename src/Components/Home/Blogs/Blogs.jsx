import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogsCard from './BlogsCard';

const Blogs = () => {
    const [data,setData] =useState([]);
    const {date}=data;
   
    const url =`${import.meta.env.VITE_API_URL}/blogs`;
    
    
    useEffect(()=>{
      axios.get(url)
      .then(res => {
          const sortedData = res.data.sort((a, b) => {
              return new Date(b.date) - new Date(a.date); 
          });
          setData(sortedData);

      })
    },[url])
    console.log([data])
    return (
       <div className='container mx-auto'>
        <h1 className='flex justify-center my-4 items-center text-4xl font-extrabold text-blue-500 '>Recent Blogs</h1>
         <div className='grid grid-cols-1 gap-4 '>
            
            {
              data.slice(0,6).map(blog=><BlogsCard key={blog._id} blog={blog}></BlogsCard>)
            }  
          </div>
       </div>
    );
};

export default Blogs;