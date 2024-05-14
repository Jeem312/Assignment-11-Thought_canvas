import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card } from "flowbite-react";

"use client";

import { Label, Textarea } from "flowbite-react"; import { comment } from 'postcss';
import { AuthContext } from '../../../Provider/Provider';
import Comments from './Comments';
import { toast } from 'react-toastify';
"use client";


const BlogDetails = () => {
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const [comments, setComments] = useState([]);
  const { user } = useContext(AuthContext);
 
  // console.log(user)
  const url = `${import.meta.env.VITE_API_URL}/details/${id}`;
  const url2 = `${import.meta.env.VITE_API_URL}/comment/${id}`;
  // details 
  useEffect(() => {
    axios.get(url,{withCredentials:true})
      .then(res => {
        setInfo(res.data);

      })
  }, [url])
  // comment section
  useEffect(()=>{
    GetComment()
  },[])
  const handleComment = e => {
    e.preventDefault();
    const from = event.target;
    const blogComment = from.comment.value;
    const bloginfo = {
      id,
      blogUser:user?.displayName,
      blogComment,
      image: user?.photoURL
    }
    if (user.email === info?.author_email) {
      toast('You Cannot comment on own blog');
    }

   else{ axios.post(`${import.meta.env.VITE_API_URL}/comment`, bloginfo)
   toast('Comment added successfully')}
    

  }
 
  const GetComment =async()=>{
    axios.get(url2)
    .then(res => {
      // console.log(res.data)
     setComments(res.data);})
  }
      GetComment();
  return (
    <div>
      <Card
        className="md:max-w-screen-md container mx-auto rounded-lg "
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={info?.image}
      >
        
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> <span className='text-blue-400'> Tittle : </span>
          {info?.title}
        </h5>
        <div className='border border-b-blue-300'></div>
        <div className='flex'>
                <img src="https://i.postimg.cc/fbpzswP8/shield.png" alt="" className=' h-5 w-5' />
                
               <p className='font-semibold  justify-center items-center'><span className='text-blue-400'> Author:</span>{info?.author_name}</p></div>
       
        <div className='flex'>
                <img src="https://i.postimg.cc/vZP8P7tF/description.png" alt="" className=' h-5 w-5' />
                
               <p className='font-semibold  justify-center items-center'><span className='text-blue-400'> Short-Description : </span>{info?.short_description}</p></div>
       
       
        <div className='border border-b-blue-300'></div>
        <div className='flex'>
                <img src="https://i.postimg.cc/JzhMBDVT/detail2.png" alt="" className=' h-5 w-5 mr-1' />
                
                <p><span className='text-blue-400 font-bold'> Detalis : </span>{info?.long_description}</p>
              </div>
       
       <div className='flex justify-center items-center'>
       {user?.email === info?.author_email && (
         <Link to={`/update/${info._id}`} > <button  className='bg-blue-400 text-white p-2 rounded-lg mt-4'>
         Update Blog
       </button></Link>
        )}
       </div>
      </Card>

      <div className='grid grid-cols-1 gap-4 my-4'>
        <h1 className='flex justify-center items-center text-2xl text-blue-400 font-semibold'>Comments</h1>
        {
          comments.map(comment => <Comments key={comment._id} comment={comment}></Comments>)
        }
      </div>

      <form onSubmit={handleComment}
        className=''> <h2 className='flex mt-16 mb-6 justify-center items-center font-bold text-2xl text-gray-500'>Add a comment</h2>
       

        <div className="max-w-lg  container mx-auto  ">

          <Textarea id="comment" placeholder="Leave a comment..." required rows={4} name='comment' className='p-4' />
          <div className='mt-3'><button className='bg-blue-400 text-white p-2 rounded-lg btn-block'>Comment</button></div>
        </div>
      </form>
    </div>
  );
};

export default BlogDetails;