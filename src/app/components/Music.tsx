import React from "react";

const Music: React.FC = () => {
  return (
    <div className="w-[1170px] h-[500px]">
  <div className="w-[1170px] h-[500px] absolute left-[135px] top-[2526px] overflow-hidden bg-black">
  <svg
  width="818"
  height="500"
  viewBox="0 0 818 500"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="opacity-30"
  preserveAspectRatio="xMidYMid meet"
>


  <g opacity="0.3" filter="url(#filter0_f_79_1203)">
    <ellipse cx="452" cy="250" rx="400" ry="250" fill="#D9D9D9"></ellipse>
  </g>
  <defs>
    <filter
      id="filter0_f_79_1203"
      x="0"
      y="-200"
      width="904"
      height="900"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
      <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_79_1203"></feGaussianBlur>
    </filter>
  </defs>
</svg>
<div className="w-[600px] h-[420px] overflow-hidden">
    <img
    src="images/Music.png"
    className="w-[568px] h-[330px] absolute left-[533px] top-20 object-none"
  />
</div>
    <p
      className="w-[443px] absolute left-14 top-[121px] text-5xl font-semibold text-left text-neutral-50"
    >
      Enhance Your Music Experience
    </p>
    <div className="flex justify-start items-start absolute left-14 top-[273px] gap-6">
      <div className="flex-grow-0 flex-shrink-0 w-[62px] h-[62px] relative">
        <svg
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[-1px] top-[-1px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle cx="31" cy="31" r="31" fill="white"></circle>
        </svg>
        <div
          className="flex flex-col justify-start items-center absolute left-[15px] top-3.5 space-y-[-4px]"
        >
          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-black">23</p>
          <p className="flex-grow-0 flex-shrink-0 w-8 text-[11px] text-left text-black">Hours</p>
        </div>
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-[62px] h-[62px] relative">
        <svg
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[-1px] top-[-1px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle cx="31" cy="31" r="31" fill="white"></circle>
        </svg>
        <div
          className="flex flex-col justify-start items-center absolute left-[17px] top-3.5 space-y-[-4px]"
        >
          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-black">05</p>
          <p className="flex-grow-0 flex-shrink-0 w-7 text-[11px] text-left text-black">Days</p>
        </div>
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-[62px] h-[62px] relative">
        <svg
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[-1px] top-[-1px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle cx="31" cy="31" r="31" fill="white"></circle>
        </svg>
        <div
          className="flex flex-col justify-start items-center w-[42px] absolute left-2.5 top-3.5 space-y-[-4px]"
        >
          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-black">59</p>
          <p className="flex-grow-0 flex-shrink-0 w-[43px] text-[11px] text-left text-black">Minutes</p>
        </div>
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-[62px] h-[62px] relative">
        <svg
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[-1px] top-[-1px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle cx="31" cy="31" r="31" fill="white"></circle>
        </svg>
        <div
          className="flex flex-col justify-start items-center w-12 absolute left-[7px] top-3.5 space-y-[-4px]"
        >
          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-black">35</p>
          <p className="flex-grow-0 flex-shrink-0 w-12 text-[11px] text-left text-black">Seconds</p>
        </div>
      </div>
    </div>
    <div
      className="flex justify-center items-center absolute left-14 top-[375px] gap-2.5 px-12 py-4 rounded bg-[#0f6]"
    >
      <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-neutral-50">
        Buy Now!
      </p>
    </div>
    <p className="absolute left-14 top-[69px] text-base font-semibold text-left text-[#0f6]">
      Categories
    </p>
   
  </div>
</div>
    );
};

export default Music;
