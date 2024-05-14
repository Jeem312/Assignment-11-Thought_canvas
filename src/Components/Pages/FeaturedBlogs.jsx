import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogTable from './BlogTable';

const FeaturedBlogs = () => {
    const [featuredBlogData,setFeaturedBlogData]=useState([]);
    const url =`${import.meta.env.VITE_API_URL}/blogs`;

    useEffect(()=>{
        axios.get(url)
        .then(res=>{
            const sortedData=res.data.sort((a,b)=>{
                return b.long_description.length - a.long_description.length;

            })
            setFeaturedBlogData(sortedData);
        })

    },[url])
    console.log(featuredBlogData)
    return (
      <div className="overflow-x-auto w-full">
        <h1 className='justify-center items-center flex font-bold text-3xl text-blue-500 my-6'>Our Top 10 Blogs</h1>
      <table className="table w-full">
          {/* head */}
          <thead>
              <tr>
                 <th></th>
                  <th>Serial_Number</th>
                  <th>Author_Image</th>
                  <th>Blog_Tittle</th>
                  <th>Blog_Category</th>
                  <th>Author</th>
                  <th>Action</th>

                  
              </tr>
          </thead>
          <tbody>
          {featuredBlogData.slice(0, 10).map((blog, index) => (
                        <BlogTable key={blog._id} blog={blog} index={index + 1} />
                    ))}
          </tbody>

      </table>
  </div>
    );
};

export default FeaturedBlogs;