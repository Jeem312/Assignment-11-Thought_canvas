
import React from 'react';
import Banner from './Banner';
import NewsLetter from './NewsLetter/NewsLetter';
import Blogs from './Blogs/Blogs';
import Feedback from './Feedback';
import OurCourses from './Courses/OurCourses';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Blogs></Blogs>
          <Feedback></Feedback>
          <OurCourses></OurCourses>
          <NewsLetter></NewsLetter>
         
        </div>
    );
};

export default Home;