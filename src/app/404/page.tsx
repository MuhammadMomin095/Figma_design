'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';


const Custom404 = () => {
    return (
        <div>
          {/* Navbar */}
          <Navbar />
    
          {/* 404 not found */}

          <div className="w-[1000px] h-[476px]">
  <div className="flex justify-start items-center absolute left-[135px] top-[222px] gap-3">
    <p className="flex-grow-0 flex-shrink-0 opacity-50 text-sm text-left text-black">Home</p>
    <svg
      width="7"
      height="13"
      viewBox="0 0 7 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0"
      preserveAspectRatio="none"
    >
      <line
        x1="6.4453"
        y1="0.852389"
        x2="0.445304"
        y2="12.6024"
        stroke="black"
        stroke-opacity="0.5"
      ></line>
    </svg>
    <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">404 Error</p>
  </div>
  <div className="flex flex-col justify-start items-center absolute left-[306px] top-[383px] gap-10">
    <p className="flex-grow-0 flex-shrink-0 text-[110px] font-medium text-left text-black">
      404 Not Found
    </p>
    <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
      Your visited page not found. You may go home page.
    </p>
  </div>
  <div
    className="flex justify-center items-center absolute left-[572px] top-[642px] gap-2.5 px-12 py-4 rounded bg-[#db4444]"
  >
      <Link href="/">
    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-neutral-50">
      Back to home page
    </p>
    </Link>
  </div>
</div>



          

          {/* Footer */}
      <Footer />
    </div>
  );
};

export default Custom404;
