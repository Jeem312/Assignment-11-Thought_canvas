import React from 'react';

const Comments = ({comment}) => {
    console.log(comment)
    return (
        <div className=" flex flex-col border border-blue-400 rounded-lg  w-full md:max-w-7xl p-6 mx-auto divide-y dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
        <div className="flex justify-between p-4">
            <div className="flex space-x-4">
                <div>
                <img src={comment?.image || "https://i.postimg.cc/q7V3Q9ZV/user-3177440.png" }  className='object-cover w-12 h-12 rounded-full dark:bg-gray-500'/>
                </div>
                <div>
                    <h4 className="font-bold">{comment?.blogUser}</h4>
                    <span className="text-xs dark:text-gray-600">{comment?.blogComment}</span>
                </div>
            </div>
           
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-600">
            <p>{comment?.comment}</p>
            
        </div>
    </div>
    );
};

export default Comments;