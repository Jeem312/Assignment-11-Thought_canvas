import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllBlogCard from './AllBlogCard';

const Allblogs = () => {
    const [data,setData] =useState([]);
    const url =`${import.meta.env.VITE_API_URL}/blogs`;
    useEffect(()=>{
        axios.get(url)
        .then(res =>{
           setData(res.data);
         
         })
       },[url])
       console.log(data);
    return (
        <div className='space-y-3'>
            {
                data.map(item=><AllBlogCard key={item._id} item={item}></AllBlogCard>)
            }
        </div>
    );
};

export default Allblogs;