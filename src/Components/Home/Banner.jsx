import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Typewriter } from 'react-simple-typewriter'
import './styles.css';
import { Slide } from "react-awesome-reveal";
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
      <div className='grid grid-cols-1 bg-blue-50 rounded-lg  md:grid-cols-2'>
        <div className='flex flex-col justify-center items-center p-16 my-4'>
        <Slide>
        <h1 className='text-4xl font-extrabold text-blue-400 mr-6 '>Welcome To <br /> <span className='ml-44'>ThoughtCanvas</span></h1>
      </Slide>
      <p className='text-blue-300 my-4'>
     <Typewriter
            words={['Start blogging and sharing your thoughts today. Unleash your creativity and join our vibrant community of writers. Lets paint the digital canvas together']}
            loop={5}
            
            typeSpeed={40}
            deleteSpeed={50}
            
           
          />
     </p>
        </div>
          <div className='my-20 ' style={{ borderRadius: '10px', overflow: 'hidden'}}>
        <Swiper  autoplay={{
 delay: 3500,
 disableOnInteraction: false,
}}
        pagination={true} modules={[Autoplay,Pagination]} className="mySwiper">
  
   <SwiperSlide><img src="https://i.postimg.cc/t49wjchV/aaron-burden-x-G8-IQMq-MITM-unsplash.jpg" alt="" /></SwiperSlide>
   <SwiperSlide><img src="https://i.postimg.cc/3R0b1QHz/marten-bjork-r-H8-O0-FHFpfw-unsplash.jpg" alt="" /></SwiperSlide>
   <SwiperSlide><img src="https://i.postimg.cc/BbW7w7Sb/retrosupply-j-Lw-VAUt-LOAQ-unsplash.jpg" alt="" /></SwiperSlide>
   <SwiperSlide><img src="https://i.postimg.cc/Rhcpr1hR/leone-venter-Vie-M9-Bd-ZKFo-unsplash.jpg" alt="" /></SwiperSlide>
  
  
 </Swiper>
   </div>
      </div>
    );
};

export default Banner;