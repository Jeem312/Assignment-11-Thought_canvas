import React from 'react';
import Navbar from '../Components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

import Footerfinal from '../Components/Shared/Footer';

const Main = () => {
    return (
        <div className='container my-34 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footerfinal></Footerfinal>
            
        </div>
    );
};

export default Main;