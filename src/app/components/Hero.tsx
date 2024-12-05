import React from "react";
import Link from 'next/link';


const Hero: React.FC = () => {
  return (
    <div className="w-[1170px] h-96">
  <div className="w-[1170px] h-96">
    <svg
      width="1"
      height="384"
      viewBox="0 0 1 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[367.75px] top-[141.75px] opacity-30"
      preserveAspectRatio="none"
    >
      <line
        opacity="0.3"
        x1="0.25"
        y1="-1.09278e-8"
        x2="0.250017"
        y2="384"
        stroke="black"
        strokeWidth="0.5"
      ></line>
    </svg>
    <div className="flex flex-col justify-start items-start absolute left-[135px] top-[182px] gap-4">
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[51px]">
        <p className="flex-grow-0 flex-shrink-0 text-base text-center text-black">Woman’s Fashion</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="none"
        >
          <path
            d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
            fill="black"
          ></path>
        </svg>
      </div>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[81px]">
        <p className="flex-grow-0 flex-shrink-0 text-base text-center text-black">Men’s Fashion</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="none"
        >
          <path
            d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
            fill="black"
          ></path>
        </svg>
      </div>
      <p className="flex-grow-0 flex-shrink-0 text-base text-center text-black">Electronics</p>
      <p className="flex-grow-0 flex-shrink-0 text-base text-center text-black">
        Home &#x26; Lifestyle
      </p>
      <p className="flex-grow-0 flex-shrink-0 text-base text-center text-black">Medicine</p>
      <p className="flex-grow-0 flex-shrink-0 text-base text-center text-black">
        Sports &#x26; Outdoor
      </p>
      <p className="flex-grow-0 flex-shrink-0 text-base text-center text-black">Baby’s &#x26; Toys</p>
      <p className="flex-grow-0 flex-shrink-0 text-base text-center text-black">
        Groceries &#x26; Pets
      </p>
      <p className="flex-grow-0 flex-shrink-0 text-base text-center text-black">Health &#x26; Beauty</p>
    </div>
    <div className="w-[892px] h-[344px] absolute left-[413px] top-44 overflow-hidden bg-black">
      <img
        src="images/iphone.png"
        className="w-[496px] h-[352px] absolute left-[395px] top-[15px] object-cover"
      />
      <div className="flex justify-start items-center absolute left-16 top-[58px] gap-6">
        <img
          src="images/logo.png"
          className="flex-grow-0 flex-shrink-0 w-10 h-[49px] object-none"
        />
        <p className="flex-grow-0 flex-shrink-0 w-[126px] h-5 text-base text-center text-neutral-50">
          iPhone 14 Series
        </p>
      </div>
      <p
        className="w-[294px] absolute left-16 top-[127px] text-5xl font-semibold text-left text-neutral-50"
      >
        Up to 10% off Voucher
      </p>
      <div className="flex justify-start items-center absolute left-[67px] top-[269px] gap-2">
        <div
          className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1"
        >
        <Link href="/Wishlist">
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-neutral-50">
            Shop Now
          </p>
          </Link>
          <svg
            width="81"
            height="1"
            viewBox="0 0 81 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="none"
          >
            <line y1="0.5" x2="81" y2="0.5" stroke="#FAFAFA"></line>
          </svg>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="none"
        >
          <path
            d="M3.5 12H20M20 12L13 5M20 12L13 19"
            stroke="#FAFAFA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
      <div className="flex justify-start items-center absolute left-[353px] top-[319px] gap-3">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 opacity-50"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle opacity="0.5" cx="6" cy="6" r="6" fill="white"></circle></svg
        ><svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 opacity-50"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle opacity="0.5" cx="6" cy="6" r="6" fill="white"></circle></svg
        ><svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-3.5 h-3.5"
          preserveAspectRatio="none"
        >
          <circle cx="7" cy="7" r="5" fill="#DB4444"></circle>
          <circle cx="7" cy="7" r="6" stroke="white" strokeWidth="2"></circle></svg
        ><svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 opacity-50"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle opacity="0.5" cx="6" cy="6" r="6" fill="white"></circle></svg
        ><svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 opacity-50"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle opacity="0.5" cx="6" cy="6" r="6" fill="white"></circle>
        </svg>
      </div>
    </div>
  </div>
</div>
  
  );
};

export default Hero;
