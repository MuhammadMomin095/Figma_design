'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';


const SignupPage = () => {
    return (
        <div>
          {/* Navbar */}
          <Navbar />
    
          {/* Signup Section */}

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
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-12">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
        <p className="flex-grow-0 flex-shrink-0 text-4xl font-medium text-left text-black">
          Create an account
        </p>
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
          Enter your details below
        </p>
      </div>
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-10">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-10">
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2"
          >
            <p className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-black">Name</p>
            <svg
              width="371"
              height="2"
              viewBox="0 0 371 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[370px] h-0 relative"
              preserveAspectRatio="none"
            >
              <g opacity="0.5"><line x1="0.5" y1="1" x2="370.5" y2="1" stroke="black"></line></g>
            </svg>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2"
          >
            <p className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-black">
              Email or Phone Number
            </p>
            <svg
              width="371"
              height="2"
              viewBox="0 0 371 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[370px] h-0 relative"
              preserveAspectRatio="none"
            >
              <g opacity="0.5"><line x1="0.5" y1="1" x2="370.5" y2="1" stroke="black"></line></g>
            </svg>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2"
          >
            <p className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-black">
              Password
            </p>
            <svg
              width="371"
              height="2"
              viewBox="0 0 371 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[370px] h-0 relative"
              preserveAspectRatio="none"
            >
              <g opacity="0.5"><line x1="0.5" y1="1" x2="370.5" y2="1" stroke="black"></line></g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
          <div
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-[122px] py-4 rounded bg-[#db4444]"
          >
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-neutral-50">
              Create Account
            </p>
          </div>
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-8">
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 px-[86px] py-4 rounded border border-black/40"
            >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                  preserveAspectRatio="none"
                >
                  <g clipPath="url(#clip0_21815_3336)">
                    <path
                      d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z"
                      fill="#FBBC04"
                    ></path>
                    <path
                      d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z"
                      fill="#EA4335"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_21815_3336">
                      <rect width="24" height="24" fill="white" transform="translate(0 0.5)"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
                  Sign up with Google
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
              <p className="flex-grow-0 flex-shrink-0 opacity-70 text-base text-left text-black">
                Already have account?
              </p>
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1"
              >
                <Link href="/Login">
                <p
                  className="flex-grow-0 flex-shrink-0 opacity-70 text-base font-medium text-left text-black"               >   
                  Log in
                </p>
                </Link>
                <svg
                  width="48"
                  height="2"
                  viewBox="0 0 48 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[47px] h-0 relative"
                  preserveAspectRatio="none"
                >
                  <g opacity="0.5"><line x1="0.5" y1="1" x2="47.5" y2="1" stroke="black"></line></g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>










          {/* Footer */}
      <Footer />
    </div>
  );
};

export default SignupPage;
