import React from 'react';
import { Link } from 'react-router-dom';

const BlogTable = ({blog,index}) => {
    console.log(blog);
    
    return (
        <tr>
       <td></td>
       <td>{index}</td>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={blog.author_image} />
              </div>
            </div>
           
          </div>
        </td>
        <td>
         {blog?.title}
         
          
        </td>
        <td>
         {blog?.category}
        
          
        </td>
        <td>
         {blog?.author_name}
         
          
        </td>
        <td>
         <Link to={`/details/${blog?._id}`}><button className='btn btn-sm bg-blue-500 text-white'>Details</button></Link>
         
          
        </td>
        
      </tr>
    );
};

export default BlogTable;