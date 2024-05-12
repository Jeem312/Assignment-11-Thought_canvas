import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogsCard from './BlogsCard';

const Blogs = () => {
    const [data,setData] =useState([]);
    const url =`${import.meta.env.VITE_API_URL}/blogs`;
    
    
    useEffect(()=>{
     axios.get(url)
     .then(res =>{
        setData(res.data);
      
      })
    },[url])
    // console.log(data)
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