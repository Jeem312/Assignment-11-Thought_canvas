import React from 'react';
import Navbar from '../Components/Shared/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';

import Footerfinal from '../Components/Shared/Footer';
import { Hourglass, RotatingLines } from 'react-loader-spinner';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div className='container my-34 mx-auto'>
            <Navbar></Navbar>
           
     
      
            {
        navigation.state === "loading"?  <div className='flex justify-center items-center' >
        <RotatingLines
visible={true}
height="96"
width="96"
color="#14B8A6"
strokeWidth="5"
animationDuration="0.75"
ariaLabel="rotating-lines-loading"
wrapperStyle={{}}
wrapperClass=""

/>
        </div> :  <Outlet></Outlet> 
       }
            <Footerfinal></Footerfinal>
            
        </div>
    );
};

export default Main;