import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';

const OurCourses = () => {
    const [courseInfo,setCourseInfo] =useState([]);

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/course`)
        .then(res=>
            setCourseInfo(res.data)
            
        )
    },[])
   console.log(courseInfo)
    return (
        <div className='container mx-auto my-12s'>
            <h1 className='flex justify-center items-center font-bold text-3xl text-blue-500'>Our Courses</h1>
            <p className='text-center mb-6  text-gray-600'>Are You Want To Be A Professional Bloger?This is the best Platform for you.Join our courses it will help you to become a Professional blogger! <span className='text-blue-500 text-xl  mt-4'>Let's Cracked It</span></p>
            <div className=' '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>
               {
                courseInfo?.map(info=><CourseCard key={info._id} info={info}></CourseCard>)
               }
                </div>
               
            </div>
        </div>
    );
};

export default OurCourses;