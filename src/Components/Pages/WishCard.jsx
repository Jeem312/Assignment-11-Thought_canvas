import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const WishCard = ({item}) => {
    const [info ,setInfo]= useState(item);
   
    const handleDelete=(_id)=>{
        // console.log('deleted',_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             

           
                
             axios.delete(`${import.meta.env.VITE_API_URL}/wishlist/${_id}`)
             
                 
              .then(data =>{
                
                const remainingIteam = info?.filter(p=>p._id !== _id);
                setInfo(remainingIteam);
                console.log(data)
                 if(data.data.deletedCount > 0){
                  Swal.fire({
                    title: "Deleted!",
                    text: "This Blog Is Removed From Wishlist.",
                    icon: "success"
                  });
                 }
              })
            }
          });
    }

    return (
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={item?.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-blue-700">{item?.title}</h2>
    <h2 className="card-title text-blue-400">{item?. category}</h2>
    <p>{item?. short_description}</p>
    <div className="card-actions flex justify-between space-x-36">
  <div>
  <Link to={`/details/${item?._id}`}> <button className='flex font-semibold text-blue-500 underline'>Read More</button></Link>
  </div>
     <div>
     <button onClick={()=>handleDelete(item?._id)}><img src="https://i.postimg.cc/LsxJdKkX/trash.png" alt="" className='h-6 w-6' /></button>
     </div>
    </div>
  </div>
</div>  
        </div>
    );
};

export default WishCard;