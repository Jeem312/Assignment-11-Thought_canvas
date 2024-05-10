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
        <Slide  delay={1e3}  cascade damping={1e-1}>
        <h1 className='text-4xl font-extrabold text-blue-400 mr-6 '>Welcome To <br /> <span className='ml-44'>ThoughtCanvas</span></h1>
      </Slide>
      <Typewriter
            words={[<p className='text-blue-300 my-4'>Start blogging and sharing your thoughts today. Unleash your creativity and join our vibrant community of writers. Let's paint the digital canvas together!</p>]}
            loop={5}
            
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </div>
          <div className='my-20 ' style={{ borderRadius: '10px', overflow: 'hidden'}}>
        <Swiper  autoplay={{
 delay: 3500,
 disableOnInteraction: false,
}}
        pagination={true} modules={[Autoplay,Pagination]} className="mySwiper">
  
   <SwiperSlide><img src="https://i.postimg.cc/Y91bMsFj/roman-kraft-WOz-Vqzp-Scrk-unsplash.jpg" alt="" /></SwiperSlide>
   <SwiperSlide><img src="https://i.postimg.cc/ZRR5h12x/fallon-michael-IP59z0-FXBu-Y-unsplash.jpg" alt="" /></SwiperSlide>
   <SwiperSlide><img src="https://i.postimg.cc/J751t7c4/pexels-jadson-thomas-164235-542556.jpg" alt="" /></SwiperSlide>
   <SwiperSlide><img src="https://i.postimg.cc/rs6Kjc9m/pexels-dzeninalukac-1469902.jpg" alt="" /></SwiperSlide>
  
  
 </Swiper>
   </div>
      </div>
    );
};

export default Banner;