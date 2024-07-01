import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/Provider';
import axios from 'axios';
import WishCard from './WishCard';

const Wishlist = () => {
    const [info, setInfo] = useState([]);
    const {user} = useContext(AuthContext);
    // console.log(user)
    const url = `${import.meta.env.VITE_API_URL}/wishlist/${user?.email}`;
    useEffect(()=>{
       
        wishData()
      
    
    },[])
    const wishData=async()=>{
        axios.get(url,{withCredentials:true})
        .then(res => {
            setInfo(res.data);})
    }
 wishData();
    // console.log(info)
    return (
        <div>
            <h1 className='flex justify-center items-center font-bold text-3xl text-gray-500'>Hi! <span className='text-blue-400'>{user?.displayName}</span></h1>
            <p className='flex justify-center items-center font-bold text-xl text-gray-500'> Here Your WishList</p>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-3 lg:ml-14'>
           {info.map(item=><WishCard key={item._userEmail} item={item}></WishCard> )}
           </div>
        </div>
    );
};

export default Wishlist;