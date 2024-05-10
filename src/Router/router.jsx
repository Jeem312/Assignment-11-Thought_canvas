import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Home from '../Components/Home/Home';
import Wishlist from '../Components/Pages/Wishlist';


import Login from '../Components/Pages/Login';
import Allblogs from '../Components/Pages/Allblogs';
import FeaturedBlogs from '../Components/Pages/FeaturedBlogs';
import Register from '../Components/Pages/Register';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/wishlist',
            element:<Wishlist></Wishlist>
        },
        {
            path:'/allblog',
            element:<Allblogs></Allblogs>
        },
        {
            path:'/featuredblog',
            element:<FeaturedBlogs></FeaturedBlogs>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
      ]
    },
  ]);

export default router;