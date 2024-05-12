import React from 'react';
import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    if(!user){
        return<Navigate to ='/login' state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;