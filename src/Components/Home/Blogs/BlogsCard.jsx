import React from 'react';
"use client";

import { Card } from "flowbite-react";
const BlogsCard = ({blog}) => {
    const {image,short_description,title,category}=blog;
    return (
        <div className="container max-w-7xl border border-blue-500 rounded-lg  p-6 mx-auto  space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 my-16 lg:col-span-5">
				<h3 className="text-3xl font-bold sm:text-4xl ">{title}</h3>
				<h3 className="text-xl my-3 sm:text-4xl ">Category:{category}</h3>
				
				<p className='my-4'>{short_description}</p>
                <div className='flex justify-between mt-14'>
           <div className=''>
             <button className='flex text-xl text-yellow-500'>Read More  <img src="https://i.postimg.cc/BndSVC1y/right-arrow.png" alt=""  className='h-8 w-6'/></button>
           </div>
            <div className='flex '>
        <img src="https://i.postimg.cc/sDr5tp5M/shopping-cart.png" alt="" className='h-7 w-6' />
            <button className='text-pink-500 text-xl'>Wishlist</button>
            </div>
        </div>
			</div>
            
		</a>
       
        </div>
    );
};

export default BlogsCard;