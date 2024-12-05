'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';




const AccountPage = () => {
    return (
        <div>
          {/* Navbar */}
          <Navbar />
    
          {/* Account Section */}

          <div className="w-[1170px] h-[731px]">
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
    <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">My Account</p>
  </div>
  <p className="absolute left-[1166px] top-[222px] text-sm text-left">
    <span className="text-sm text-left text-black">Welcome! </span
    ><span className="text-sm text-left text-[#db4444]">Md Rimel</span>
  </p>
  <p className="absolute left-[135px] top-[323px] text-base font-medium text-left text-black">
    Manage My Account
  </p>
  <p className="absolute left-[135px] top-[475px] text-base font-medium text-left text-black">
    My Orders
  </p>
  <p
    className="w-[93px] h-[23px] absolute left-[135px] top-[587px] text-base font-medium text-left text-black"
  >
    My WishList
  </p>
  <div className="flex flex-col justify-start items-start absolute left-[170px] top-[363px] gap-2">
    <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#db4444]">My Profile</p>
    <p className="flex-grow-0 flex-shrink-0 opacity-50 text-base text-left text-black">Address Book</p>
    <p className="flex-grow-0 flex-shrink-0 opacity-50 text-base text-left text-black">
      My Payment Options
    </p>
  </div>
  <div className="flex flex-col justify-start items-start absolute left-[170px] top-[515px] gap-2">
    <p className="flex-grow-0 flex-shrink-0 opacity-50 text-base text-left text-black">My Returns</p>
    <p className="flex-grow-0 flex-shrink-0 opacity-50 text-base text-left text-black">
      My Cancellations
    </p>
  </div>
  <div
    className="w-[870px] h-[630px] absolute left-[435px] top-[323px] overflow-hidden rounded bg-white"
    style={{boxShadow: "0px 1px 13px 0 rgba(0,0,0,0.05)",}}
  >
    <p className="absolute left-20 top-10 text-xl font-medium text-left text-[#db4444]">
      Edit Your Profile
    </p>
    <div className="flex justify-start items-start absolute left-20 top-[84px] gap-[50px]">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">First Name</p>
        <div className="flex-grow-0 flex-shrink-0 w-[330px] h-[50px] relative">
          <div
            className="w-[330px] h-[50px] absolute left-0 top-0 overflow-hidden rounded bg-neutral-100"
          ></div>
          <p className="absolute left-4 top-[13px] opacity-50 text-base text-left text-black">Md</p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Last Name</p>
        <div className="flex-grow-0 flex-shrink-0 w-[330px] h-[50px] relative">
          <div
            className="w-[330px] h-[50px] absolute left-0 top-0 overflow-hidden rounded bg-neutral-100"
          ></div>
          <p className="absolute left-4 top-[13px] opacity-50 text-base text-left text-black">Rimel</p>
        </div>
      </div>
    </div>
    <div className="flex justify-start items-start absolute left-20 top-[190px] gap-[50px]">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Email</p>
        <div className="flex-grow-0 flex-shrink-0 w-[330px] h-[50px] relative">
          <div
            className="w-[330px] h-[50px] absolute left-0 top-0 overflow-hidden rounded bg-neutral-100"
          ></div>
          <p className="absolute left-4 top-[13px] opacity-50 text-base text-left text-black">
            rimel1111@gmail.com
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Address</p>
        <div className="flex-grow-0 flex-shrink-0 w-[330px] h-[50px] relative">
          <div
            className="w-[330px] h-[50px] absolute left-0 top-0 overflow-hidden rounded bg-neutral-100"
          ></div>
          <p className="absolute left-4 top-[13px] opacity-50 text-base text-left text-black">
            Kingston, 5236, United State
          </p>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-start items-start absolute left-20 top-[296px] gap-4">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Password Changes</p>
        <div className="flex-grow-0 flex-shrink-0 w-[710px] h-[50px] relative">
          <div
            className="w-[710px] h-[50px] absolute left-0 top-0 overflow-hidden rounded bg-neutral-100"
          ></div>
          <p className="absolute left-4 top-[13px] opacity-50 text-base text-left text-black">
            Current Passwod
          </p>
        </div>
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-[710px] h-[50px] relative">
        <div
          className="w-[710px] h-[50px] absolute left-0 top-0 overflow-hidden rounded bg-neutral-100"
        ></div>
        <p className="absolute left-4 top-[13px] opacity-50 text-base text-left text-black">
          New Passwod
        </p>
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-[710px] h-[50px] relative">
        <div
          className="w-[710px] h-[50px] absolute left-0 top-0 overflow-hidden rounded bg-neutral-100"
        ></div>
        <p className="absolute left-4 top-[13px] opacity-50 text-base text-left text-black">
          Confirm New Passwod
        </p>
      </div>
    </div>
    <div className="flex justify-start items-center absolute left-[487px] top-[534px] gap-8">
      <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Cancel</p>
      <div
        className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-12 py-4 rounded bg-[#db4444]"
      >
        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-neutral-50">
          Save Changes
        </p>
      </div>
    </div>
  </div>
</div>

         


          {/* Footer */}
      <Footer />
    </div>
  );
};

export default AccountPage;
