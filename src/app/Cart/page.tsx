'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';




const CartPage = () => {
    return (
        <div>
          {/* Navbar */}
          <Navbar />
    
          {/* Cart Section */}

          <div className="w-[1170px] h-[941px]">
  <div className="flex flex-col justify-start items-start absolute left-[135px] top-[323px] gap-20">
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6">
      <div
        className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-10"
      >
        <div
          className="flex-grow-0 flex-shrink-0 w-[1170px] h-[72px] relative overflow-hidden rounded bg-white"
          style={{boxShadow: "0px 1px 13px 0 rgba(0,0,0,0.05)",}}
        >
          <div className="flex justify-start items-center absolute left-10 top-6 gap-[284px]">
            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Product</p>
            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Price</p>
            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Quantity</p>
            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Subtotal</p>
          </div>
        </div>
        <div
          className="flex-grow-0 flex-shrink-0 w-[1170px] h-[102px] relative overflow-hidden rounded bg-white"
          style={{boxShadow: "0px 1px 13px 0 rgba(0,0,0,0.05)",}}
        >
          <p className="absolute left-[387px] top-[39px] text-base text-left text-black">$650</p>
          <p className="absolute left-[1063px] top-[39px] text-base text-left text-black">$650</p>
          <div
            className="w-[72px] h-11 absolute left-[710px] top-[29px] overflow-hidden rounded border-[1.5px] border-black/40"
          >
            <div className="flex justify-start items-center w-12 absolute left-3 top-1.5 gap-4">
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">01</p>
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M7.75732 7.36666L4.45732 10.6667L3.51465 9.72399L7.75732 5.48132L12 9.72399L11.0573 10.6667L7.75732 7.36666Z"
                    fill="black"
                  ></path></svg
                ><svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M8.24268 8.63334L11.5427 5.33334L12.4854 6.27601L8.24268 10.5187L4.00002 6.27601L4.94268 5.33334L8.24268 8.63334Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-[54px] h-[54px] absolute left-10 top-6 overflow-hidden">
            <img
              src="images/k.png"
              className="w-[50px] h-[39px] absolute left-px top-[7px] object-none"
            />
          </div>
          <p className="absolute left-[114px] top-[39px] text-base text-left text-black">LCD Monitor</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 absolute left-[30px] top-5"
            preserveAspectRatio="none"
          >
            <circle cx="12" cy="12" r="9" fill="#DB4444"></circle>
            <path
              d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <div
          className="flex-grow-0 flex-shrink-0 w-[1170px] h-[102px] relative overflow-hidden rounded bg-white"
          style={{boxShadow: "0px 1px 13px 0 rgba(0,0,0,0.05)",}}
        >
          <p className="absolute left-[387px] top-[39px] text-base text-left text-black">$550</p>
          <p className="absolute left-[1063px] top-[39px] text-base text-left text-black">$1100</p>
          <div
            className="w-[72px] h-11 absolute left-[710px] top-[29px] overflow-hidden rounded border-[1.5px] border-black/40"
          >
            <div className="flex justify-start items-center w-12 absolute left-3 top-1.5 gap-3">
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">02</p>
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M7.75732 7.36669L4.45732 10.6667L3.51465 9.72402L7.75732 5.48135L12 9.72402L11.0573 10.6667L7.75732 7.36669Z"
                    fill="black"
                  ></path></svg
                ><svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M8.24268 8.63331L11.5427 5.33331L12.4854 6.27598L8.24268 10.5186L4.00002 6.27598L4.94268 5.33331L8.24268 8.63331Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-[54px] h-[54px] absolute left-10 top-6 overflow-hidden">
            <img
              src="images/i.png"
              className="w-[48.88px] h-[42.22px] absolute left-0.5 top-[5px] object-none"
            />
          </div>
          <p className="absolute left-[114px] top-[39px] text-base text-left text-black">H1 Gamepad</p>
        </div>
      </div>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[757px]">
        <div
          className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-12 py-4 rounded border border-black/50"
        >
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
            Return To Shop
          </p>
        </div>
        <div
          className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-12 py-4 rounded border border-black/50"
        >
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
            Update Cart
          </p>
        </div>
      </div>
    </div>
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[173px]">
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
        className="flex-grow-0 flex-shrink-0 w-[470px] h-[324px] relative overflow-hidden rounded border-[1.5px] border-black"
      >
        <p className="absolute left-6 top-8 text-xl font-medium text-left text-black">Cart Total</p>
        <div className="flex justify-start items-start absolute left-6 top-[84px] gap-[307px]">
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Subtotal:</p>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">$1750</p>
        </div>
        <div className="flex justify-start items-start absolute left-6 top-[140px] gap-[314px]">
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Shipping:</p>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Free</p>
        </div>
        <div className="flex justify-start items-start absolute left-6 top-[196px] gap-[335px]">
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Total:</p>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">$1750</p>
        </div>
        <div
          className="flex justify-center items-center absolute left-[89px] top-[236px] gap-2.5 px-12 py-4 rounded bg-[#db4444]"
        >
        <Link href="/CheckOut">
        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-neutral-50">
          Proceed to checkout
         </p>
        </Link>

        </div>
        <svg
          width="422"
          height="1"
          viewBox="0 0 422 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[422px] h-0 absolute left-6 top-[124px]"
          preserveAspectRatio="none"
        >
          <g opacity="0.4">
            <line x1="4.37114e-8" y1="0.5" x2="422" y2="0.500037" stroke="black"></line>
          </g></svg
        ><svg
          width="422"
          height="1"
          viewBox="0 0 422 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[422px] h-0 absolute left-6 top-[180px]"
          preserveAspectRatio="none"
        >
          <g opacity="0.4">
            <line x1="4.37114e-8" y1="0.5" x2="422" y2="0.500037" stroke="black"></line>
          </g>
        </svg>
      </div>
    </div>
  </div>
  <div className="flex justify-start items-center absolute left-[135px] top-[222px] gap-3">
    <p className="flex-grow-0 flex-shrink-0 opacity-50 text-sm text-left text-black">Home</p>
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
    <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">Cart</p>
  </div>
</div>

         


          {/* Footer */}
      <Footer />
    </div>
  );
};

export default CartPage;
