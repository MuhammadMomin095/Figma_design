'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';




const CheckOut = () => {
    return (
        <div>
          {/* Navbar */}
          <Navbar />
    
          {/* CheckOut Section */}

          <div className="w-[1170px] h-[993px]">
  <div className="flex justify-start items-center absolute left-[135px] top-[222px] gap-3">
  <Link href="/Account">
    <p className="flex-grow-0 flex-shrink-0 opacity-50 text-sm text-left text-black">Account</p>
    </Link>
    <svg
      width="7"
      height="13"
      viewBox="0 0 7 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0 opacity-50"
      preserveAspectRatio="none"
    >
      <line
        opacity="0.5"
        x1="6.4453"
        y1="0.852389"
        x2="0.445304"
        y2="12.6024"
        stroke="black"
      ></line>
    </svg>
    <Link href="/Account">
    <p className="flex-grow-0 flex-shrink-0 opacity-50 text-sm text-left text-black">My Account</p>
    </Link>
    <svg
      width="7"
      height="13"
      viewBox="0 0 7 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0 opacity-50"
      preserveAspectRatio="none"
    >
      <line
        opacity="0.5"
        x1="6.4453"
        y1="0.852389"
        x2="0.445304"
        y2="12.6024"
        stroke="black"
      ></line>
    </svg>
    <Link href="/Wishlist">
    <p className="flex-grow-0 flex-shrink-0 opacity-50 text-sm text-left text-black">Product</p>
    </Link>
    <svg
      width="7"
      height="13"
      viewBox="0 0 7 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0 opacity-50"
      preserveAspectRatio="none"
    >
      <line
        opacity="0.5"
        x1="6.4453"
        y1="0.852389"
        x2="0.445304"
        y2="12.6024"
        stroke="black"
      ></line>
    </svg>
    <Link href="/Cart">
    <p className="flex-grow-0 flex-shrink-0 opacity-50 text-sm text-left text-black">View Cart</p>
    </Link>
    <svg
      width="7"
      height="13"
      viewBox="0 0 7 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0 opacity-50"
      preserveAspectRatio="none"
    >
      <line
        opacity="0.5"
        x1="6.4453"
        y1="0.852389"
        x2="0.445304"
        y2="12.6024"
        stroke="black"
      ></line>
    </svg>
    <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">CheckOut</p>
  </div>
  <div className="flex flex-col justify-start items-start absolute left-[135px] top-[323px] gap-6">
    <p className="flex-grow-0 flex-shrink-0 text-4xl font-medium text-left text-black">
      Billing Details
    </p>
  </div>
  <div className="flex flex-col justify-start items-start absolute left-[135px] top-[401px] gap-6">
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-8">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
        <p className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left">
          <span className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-black"
            >First Name</span
          ><span className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-[#db4444]"
            >*</span
          >
        </p>
        <div
          className="flex-grow-0 flex-shrink-0 w-[470px] h-[50px] relative overflow-hidden rounded bg-neutral-100"
        ></div>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
        <p className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-black">
          Company Name
        </p>
        <div
          className="flex-grow-0 flex-shrink-0 w-[470px] h-[50px] relative overflow-hidden rounded bg-neutral-100"
        ></div>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
        <p className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left">
          <span className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-black"
            >Street Address</span
          ><span className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-[#db4444]"
            >*</span
          >
        </p>
        <div
          className="flex-grow-0 flex-shrink-0 w-[470px] h-[50px] relative overflow-hidden rounded bg-neutral-100"
        ></div>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
        <p className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-black">
          Apartment, floor, etc. (optional)
        </p>
        <div
          className="flex-grow-0 flex-shrink-0 w-[470px] h-[50px] relative overflow-hidden rounded bg-neutral-100"
        ></div>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
        <p className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left">
          <span className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-black"
            >Town/City</span
          ><span className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-[#db4444]"
            >*</span
          >
        </p>
        <div
          className="flex-grow-0 flex-shrink-0 w-[470px] h-[50px] relative overflow-hidden rounded bg-neutral-100"
        ></div>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
        <p className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left">
          <span className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-black"
            >Phone Number</span
          ><span className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-[#db4444]"
            >*</span
          >
        </p>
        <div
          className="flex-grow-0 flex-shrink-0 w-[470px] h-[50px] relative overflow-hidden rounded bg-neutral-100"
        ></div>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
        <p className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left">
          <span className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-black"
            >Email Address</span
          ><span className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-[#db4444]"
            >*</span
          >
        </p>
        <div
          className="flex-grow-0 flex-shrink-0 w-[470px] h-[50px] relative overflow-hidden rounded bg-neutral-100"
        ></div>
      </div>
    </div>
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <rect width="24" height="24" rx="4" fill="#DB4444"></rect>
        <path
          d="M5 12L10.25 17L19 7"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
        Save this information for faster check-out next time
      </p>
    </div>
  </div>
  <div className="flex flex-col justify-start items-start absolute left-[778px] top-[433px] gap-8">
    <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 gap-8">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-6">
        <div className="flex-grow-0 flex-shrink-0 w-[54px] h-[54px] relative overflow-hidden">
          <img
            src="g92-2-500x500-1.png"
            className="w-[48.88px] h-[42.22px] absolute left-0.5 top-[5px] object-none"
          />
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[210px]">
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">LCD Monitor</p>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">$650</p>
        </div>
      </div>
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5">
        <div className="flex-grow-0 flex-shrink-0 w-[54px] h-[54px] relative overflow-hidden">
          <img
            src="g27cq4-500x500-1.png"
            className="w-[50px] h-[39px] absolute left-px top-[7px] object-none"
          />
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[204px]">
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">H1 Gamepad</p>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">$1100</p>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4"
          >
            <div
              className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[307px]"
            >
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Subtotal:</p>
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">$1750</p>
            </div>
            <svg
              width="422"
              height="1"
              viewBox="0 0 422 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[422px] h-0 relative"
              preserveAspectRatio="none"
            >
              <g opacity="0.4">
                <line x1="4.37114e-8" y1="0.5" x2="422" y2="0.500037" stroke="black"></line>
              </g>
            </svg>
          </div>
          <div
            className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[314px]"
          >
            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Shipping:</p>
            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Free</p>
          </div>
        </div>
        <svg
          width="422"
          height="1"
          viewBox="0 0 422 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-[422px] h-0 relative"
          preserveAspectRatio="none"
        >
          <g opacity="0.4">
            <line x1="4.37114e-8" y1="0.5" x2="422" y2="0.500037" stroke="black"></line>
          </g>
        </svg>
      </div>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[335px]">
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Total:</p>
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">$1750</p>
      </div>
    </div>
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-[155px]">
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="none"
        >
          <circle cx="12" cy="12" r="11.25" stroke="black" strokeWidth="1.5"></circle>
        </svg>
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Bank</p>
      </div>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
        <div className="flex-grow-0 flex-shrink-0 w-[42px] h-7 relative overflow-hidden">
          <img
            src="image-32.png"
            className="w-[37.8px] h-[16.8px] absolute left-[1.1px] top-[4.6px] object-none"
          />
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-[42px] h-7 relative overflow-hidden">
          <img
            src="image-30.png"
            className="w-[37.8px] h-[11.2px] absolute left-[1.1px] top-[7.4px] object-cover"
          />
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-[42px] h-7 relative overflow-hidden">
          <img
            src="image-31.png"
            className="w-[39.2px] h-[25.2px] absolute left-[0.4px] top-[0.4px] object-none"
          />
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-[42px] h-7 relative overflow-hidden">
          <img
            src="image-33.png"
            className="w-[39.2px] h-[18.2px] absolute left-[0.4px] top-[3.9px] object-none"
          />
        </div>
      </div>
    </div>
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <circle cx="12" cy="12" r="11.25" stroke="black" strokeWidth="1.5"></circle>
        <circle cx="12" cy="12" r="7" fill="black"></circle>
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Cash on delivery</p>
    </div>
    <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-4">
      <div
        className="flex-grow-0 flex-shrink-0 w-[300px] h-14 relative overflow-hidden rounded border border-black"
      >
        <p className="absolute left-6 top-4 opacity-50 text-base text-left text-black">Coupon Code</p>
      </div>
      <div
        className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-12 py-4 rounded bg-[#db4444]"
      >
        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-neutral-50">
          Apply Coupon
        </p>
      </div>
    </div>
    <div
      className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-12 py-4 rounded bg-[#db4444]"
    >
      <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-neutral-50">
        Place Order
      </p>
    </div>
  </div>
</div>




          
          {/* Footer */}
      <Footer />
    </div>
  );
};

export default CheckOut;
