import axios from 'axios';
import { Button, Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
const CourseCard = ({info}) => {
   

   

    
    return (
        <div>
            <motion.div
             className="box"
             whileHover={{ scale: 1.2 }}
             whileTap={{ scale: 0.9 }}
             transition={{ type: "spring", stiffness: 400, damping: 17 }}>  <Card className="max-w-sm container mx-auto bg-gradient-to-r from-sky-500 to-indigo-500">
            
           
        
              <h5 className="text-2xl font-bold tracking-tight text-blue-700 dark:text-white">
                {info?.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
               {info?.description}
              </p>
              <Link  to={`/courseDetails/${info?._id}`}>
              <button className='text-white btn btn-block border border-white bg-gradient-to-r from-sky-500 to-indigo-500  rounded-md'>  Course Details</button>
                
               
              </Link>
            </Card>
            </motion.div>
        </div>
    );
};

export default CourseCard;