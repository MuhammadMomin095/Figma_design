'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';


const ContactPage = () => {
    return (
        <div>
          {/* Navbar */}
          <Navbar />
    
          {/* Contact Section */}

          <div className="w-[1170px] h-[558px]">
  <div className="flex justify-start items-center absolute left-[135px] top-[222px] gap-3">
  <Link href="/">
    <p className="flex-grow-0 flex-shrink-0 opacity-50 text-sm text-left text-black">Home</p>
    </Link>
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
        strokeOpacity="0.5"
      ></line>
    </svg>
    <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">Cantact</p>
  </div>
  <div
    className="w-[800px] h-[457px] absolute left-[505px] top-[323px] overflow-hidden rounded bg-white"
    style= {{boxShadow: " 0px 1px 13px 0 rgba(0,0,0,0.05)",}}
  >
    <div className="flex flex-col justify-start items-end absolute left-[31px] top-10 gap-8">
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
        <div className="flex-grow-0 flex-shrink-0 w-[235px] h-[50px] relative">
          <div
            className="w-[235px] h-[50px] absolute left-0 top-0 overflow-hidden rounded bg-neutral-100"
          ></div>
          <p className="absolute left-4 top-[13px] opacity-50 text-base text-left">
            <span className="opacity-50 text-base text-left text-black">Your Name </span
            ><span className="opacity-50 text-base text-left text-[#db4444]">*</span>
          </p>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-[235px] h-[50px] relative">
          <div
            className="w-[235px] h-[50px] absolute left-0 top-0 overflow-hidden rounded bg-neutral-100"
          ></div>
          <p className="absolute left-4 top-[13px] opacity-50 text-base text-left">
            <span className="opacity-50 text-base text-left text-black">Your Email </span
            ><span className="opacity-50 text-base text-left text-[#db4444]">*</span>
          </p>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-[235px] h-[50px] relative">
          <div
            className="w-[235px] h-[50px] absolute left-0 top-0 overflow-hidden rounded bg-neutral-100"
          ></div>
          <p className="absolute left-4 top-[13px] opacity-50 text-base text-left">
            <span className="opacity-50 text-base text-left text-black">Your Phone </span
            ><span className="opacity-50 text-base text-left text-[#db4444]">*</span>
          </p>
        </div>
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-[737px] h-[207px] relative">
        <div
          className="w-[737px] h-[207px] absolute left-0 top-0 overflow-hidden rounded bg-neutral-100"
        ></div>
        <p className="absolute left-4 top-[13px] opacity-50 text-base text-left text-black">
          Your Massage
        </p>
      </div>
      <div
        className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-12 py-4 rounded bg-[#db4444]"
      >
        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-neutral-50">
          Send Massage
        </p>
      </div>
    </div>
  </div>
  <div
    className="w-[340px] h-[457px] absolute left-[135px] top-[323px] overflow-hidden rounded bg-white"
    style={{
        boxShadow: "0px 1px 13px 0 rgba(0, 0, 0, 0.05)",
      }}
  >
    <div className="flex flex-col justify-start items-start absolute left-[35px] top-10 gap-8">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
            preserveAspectRatio="none"
          >
            <rect width="40" height="40" rx="20" fill="#DB4444"></rect>
            <path
              d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
            Call To Us
          </p>
        </div>
        <div
          className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4"
        >
          <p className="flex-grow-0 flex-shrink-0 w-[262px] text-sm text-left text-black">
            We are available 24/7, 7 days a week.
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">
            Phone: +8801611112222
          </p>
        </div>
      </div>
      <svg
        width="270"
        height="1"
        viewBox="0 0 270 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-[270px] h-0 relative"
        preserveAspectRatio="none"
      >
        <g opacity="0.5"><line y1="0.5" x2="270" y2="0.5" stroke="black"></line></g>
      </svg>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-10 h-10 relative"
            preserveAspectRatio="none"
          >
            <rect width="40" height="40" rx="20" fill="#DB4444"></rect>
            <path
              d="M10 13L20 20L30 13M10 27H30V13H10V27Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
            Write To US
          </p>
        </div>
        <div
          className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4"
        >
          <p className="flex-grow-0 flex-shrink-0 w-[250px] text-sm text-left text-black">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">
            Emails: customer@exclusive.com
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">
            Emails: support@exclusive.com
          </p>
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

export default ContactPage;
