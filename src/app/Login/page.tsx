'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LoginPage = () => {
    return (
        <div>
          {/* Navbar */}
          <Navbar />
    
          {/* Login Section */}

          <div className="w-[1305px] h-[781px]">
  <div className="flex justify-start items-center absolute left-0 top-[200px] gap-[129px]">
    <div
      className="flex-grow-0 flex-shrink-0 w-[805px] h-[781px] relative overflow-hidden rounded-tr rounded-br bg-[#cbe4e8]"
    >
      <img
        src="images/z.png"
        className="w-[919px] h-[706px] absolute left-[-9px] top-[74px] object-none"
      />
    </div>
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-10">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-12">
        <div
          className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6"
        >
          <p className="flex-grow-0 flex-shrink-0 text-4xl font-medium text-left text-black">
            Log in to Exclusive
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
            Enter your details below
          </p>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-10">
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2"
          >
            <p className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-black">
              Email or Phone Number
            </p>
            <svg
              width="370"
              height="2"
              viewBox="0 0 370 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[370px] h-0 relative"
              preserveAspectRatio="none"
            >
              <g opacity="0.5"><line y1="1" x2="370" y2="1" stroke="black"></line></g>
            </svg>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2"
          >
            <p className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-black">
              Password
            </p>
            <svg
              width="370"
              height="2"
              viewBox="0 0 370 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[370px] h-0 relative"
              preserveAspectRatio="none"
            >
              <g opacity="0.5"><line y1="1" x2="370" y2="1" stroke="black"></line></g>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[87px]">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
          <div
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-12 py-4 rounded bg-[#db4444]"
          >
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-neutral-50">
              Log In
            </p>
          </div>
        </div>
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#db4444]">Forget Password?</p>
      </div>
    </div>
  </div>
</div>










          {/* Footer */}
      <Footer />
    </div>
  );
};

export default LoginPage;
