
import React from 'react';
import Banner from './Banner';
import NewsLetter from './NewsLetter/NewsLetter';
import Blogs from './Blogs/Blogs';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Blogs></Blogs>
          <NewsLetter></NewsLetter>
         
        </div>
    );
};

export default Home;