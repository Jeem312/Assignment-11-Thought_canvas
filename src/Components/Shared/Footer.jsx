import React from 'react';


import { Footer, FooterDivider } from "flowbite-react";

import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Footerfinal = () => {
   
  return (
  
    <Footer className='container mt-24 p-10  '>
    <div className="w-full space-y-14 text-blue-700">
      <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div className='text-blue-700'>
          <Footer.Brand
          className='h-12 w-14'
            href="https://flowbite.com"
            src="https://i.postimg.cc/PrzBpHyq/blog.png"
            alt="Flowbite Logo"
            name="ThoughtCanvas"
          />
        </div>
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 text-blue-700 font-bold">
          <div className=''>
            <Footer.Title title="about" className='text-blue-700' />
            <Footer.LinkGroup col>
              <Footer.Link className='text-blue-700' href="#">ThoughtCanvas</Footer.Link>
              <Footer.Link className='text-blue-700' href="#">Bloging Site</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className='text-blue-700' title="Follow us" />
            <Footer.LinkGroup col>
              <Footer.Link className='text-blue-700' href="#">Github</Footer.Link>
              <Footer.Link className='text-blue-700' href="#">Discord</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" className='text-blue-700' />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className='text-blue-700'>Privacy Policy</Footer.Link>
              <Footer.Link href="#" className='text-blue-700'>Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
     <FooterDivider />
      <div className="w-full sm:flex text-blue-700 sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="Flowbite™" year={2022} className='text-blue-700' />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="#" className='text-blue-700' icon={BsFacebook} />
          <Footer.Icon href="#" className='text-blue-700' icon={BsInstagram} />
          <Footer.Icon href="#" className='text-blue-700' icon={BsTwitter} />
          <Footer.Icon href="#" className='text-blue-700' icon={BsGithub} />
          <Footer.Icon href="#" className='text-blue-700' icon={BsDribbble} />
        </div>
      </div>
    </div>
  </Footer>
    );
};

export default Footerfinal;