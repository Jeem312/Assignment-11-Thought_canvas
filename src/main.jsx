import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Router/router';
import Provider from './Provider/Provider';
import { ToastContainer } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='font- playfair container mx-auto'>
    <Provider>
    <RouterProvider router={router} />
    </Provider>
    <ToastContainer></ToastContainer>
     </div>
  </React.StrictMode>,
)
