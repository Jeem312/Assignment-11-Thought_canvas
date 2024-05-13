import React from 'react';
import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className='container mx-auto flex justify-center items-center'> 
        <span className="loading loading-dots loading-lg text-blue-500"></span></div>
    }
    if(user){ return children}
   else{return <Navigate to='/login' state={location.pathname} replace={true}/>}   
};

export default PrivateRoute;