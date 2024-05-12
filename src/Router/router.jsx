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


import BlogDetails from '../Components/Pages/BlogDetails/BlogDetails';
import AddBlog from '../Components/Pages/AddBlog';
import UpdateBlog from '../Components/Pages/UpdateBlog';
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
            path:'/addblog',
            element:<AddBlog></AddBlog>,
        },
        {
            path:'/featuredblog',
            element:<FeaturedBlogs></FeaturedBlogs>
        },
        {
            path:'/details/:id',
            element:<BlogDetails></BlogDetails>,
         
        },
        {
            path:'/update/:id' ,
            element:<UpdateBlog></UpdateBlog>,
            loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/details/${params.id}`)
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