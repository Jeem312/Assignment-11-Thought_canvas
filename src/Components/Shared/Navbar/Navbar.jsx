import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/Provider';


const Navbar = () => {
   
    const {logOut,user} = useContext(AuthContext)
  
   
   


    const links = <>
    <li className="font-bold text-blue-500 "> <NavLink to="/">Home</NavLink></li>
    <li className="font-bold text-blue-500"> <NavLink to="/featuredblog">Featured Blogs</NavLink> </li>
    <li className="font-bold text-blue-500"> <NavLink to="/allblog">All blogs</NavLink> </li>
    <li className="font-bold text-blue-500"> <NavLink to="/addblog">Add Blog</NavLink> </li>
    <li className="font-bold text-blue-500" > <NavLink to="/wishlist">Wishlist</NavLink> </li></>
    return (
        <div className='container mx-auto mb-10  '>
        <div className="navbar rounded-md">
<div className="navbar-start">
<div className="dropdown">
  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </div>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52">
   {
    links
   }
  </ul>
</div>
<Link to='/'  className=" text-2xl font-bold text-blue-500 ">
 <div className='flex h-8 w-10 '>
 <img src="https://i.postimg.cc/PrzBpHyq/blog.png" alt="" />
 ThoughtCanvas</div></Link>
</div>
<div className="navbar-center hidden lg:flex">
<ul className="menu menu-horizontal px-1">
 {links}
</ul>
</div>
<div className="navbar-end gap-2">

        {
                        user?  <div className="dropdown dropdown-end inline-flex">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <div>
                          <img src={user?.photoURL || "https://i.postimg.cc/q7V3Q9ZV/user-3177440.png" } />
                          </div>
                        </div>
                        <ul tabIndex={0} className="mt-20 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                          <li>
                            <a className="justify-between">
                            {user?.displayName||'user name not found'}

                             
                            </a>
                          </li>
          
                        </ul>
                        </div>
                        <div className='mt-2 border border-teal-400 btn btn-sm btn-ghost'>
                                     <button
                                     onClick={logOut}
                                        className="btn btn-sm   btn-ghost">Logout</button>

                        </div>
                      </div>
                        
                       
                            :
                            <div>
                            <Link to='/register'> <button className=' px-5 py-2 rounded-2xl bg-blue-400 text-blue-50 '>Register</button></Link>
                            <Link to='/login'> <button className=' px-5 py-2 rounded-2xl bg-blue-500 text-blue-50'>LogIn</button></Link>
                            </div>
                    }
</div>
</div>
    </div>
   
    );
};

export default Navbar;