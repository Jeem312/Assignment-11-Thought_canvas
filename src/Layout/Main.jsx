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
        
 <Hourglass
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
  />
        </div> :  <Outlet></Outlet> 
       }
            <Footerfinal></Footerfinal>
            
        </div>
    );
};

export default Main;