import React from "react";
import Link from 'next/link';


const Month: React.FC = () => {
  return (
    <div className="w-[1170px] h-[518px]">
  <div className="flex flex-col justify-start items-start absolute left-[135px] top-[1868px] gap-[60px]">
    <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 gap-[611px]">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
          <div className="flex-grow-0 flex-shrink-0 w-5 h-10 relative">
            <div className="w-5 h-10 absolute left-[-1px] top-[-1px] rounded bg-[#db4444]" />
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#db4444]">
            This Month
          </p>
        </div>
        <p className="flex-grow-0 flex-shrink-0 text-4xl font-semibold text-left text-black">
          Best Selling Products
        </p>
      </div>
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-12 py-4 rounded bg-[#db4444]">
      <Link href="/Wishlist">
        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-neutral-50">
          View All
        </p>
        </Link>
      </div>
    </div>
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[30px]">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
        <div className="flex-grow-0 flex-shrink-0 w-[270px] h-[250px] relative overflow-hidden rounded bg-neutral-100">
          <div className="flex flex-col justify-start items-start absolute left-56 top-3 gap-2">
            <svg
              width={34}
              height={34}
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[34px] h-[34px] relative"
              preserveAspectRatio="none"
            >
              <circle cx={17} cy={17} r={17} fill="white" />
              <path
                d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width={34}
              height={34}
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[34px] h-[34px] relative"
              preserveAspectRatio="none"
            >
              <circle cx={17} cy={17} r={17} fill="white" />
              <path
                d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="w-[190px] h-[180px] absolute left-10 top-[35px] overflow-hidden">
            <img
              src="images/1.png"
              className="w-[140px] h-[146px] absolute left-6 top-4 object-none"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
            The north coat
          </p>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#db4444]">
              $260
            </p>
            <p className="flex-grow-0 flex-shrink-0 opacity-50 text-base font-medium text-left text-black">
              $360
            </p>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
              <svg
                width={16}
                height={15}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                width={16}
                height={15}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                width={16}
                height={15}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                width={16}
                height={15}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                width={16}
                height={15}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
            </div>
            <p className="flex-grow-0 flex-shrink-0 w-8 h-5 opacity-50 text-sm font-semibold text-left text-black">
              (65)
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
        <div className="flex-grow-0 flex-shrink-0 w-[270px] h-[250px] relative overflow-hidden rounded bg-neutral-100">
          <div className="flex flex-col justify-start items-start absolute left-56 top-3 gap-2">
            <svg
              width={34}
              height={34}
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[34px] h-[34px] relative"
              preserveAspectRatio="none"
            >
              <circle cx={17} cy={17} r={17} fill="white" />
              <path
                d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width={34}
              height={34}
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[34px] h-[34px] relative"
              preserveAspectRatio="none"
            >
              <circle cx={17} cy={17} r={17} fill="white" />
              <path
                d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="w-[190px] h-[180px] absolute left-10 top-[35px] overflow-hidden">
            <img
              src="images/2.png"
              className="w-[178px] h-[129px] absolute left-[5px] top-[25px] object-none"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
            Gucci duffle bag
          </p>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#db4444]">
              $960
            </p>
            <p className="flex-grow-0 flex-shrink-0 opacity-50 text-base font-medium text-left text-black">
              $1160
            </p>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
              <svg
                width={16}
                height={15}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                width={16}
                height={15}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                width={16}
                height={15}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                width={16}
                height={15}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M9.99987 1.83329C9.75076 1.83145 9.50625 1.90032 9.29472 2.0319C9.08319 2.16348 8.91333 2.35236 8.80487 2.57662L6.9532 6.32995L2.80987 6.93162C2.56342 6.96713 2.33184 7.07094 2.14136 7.23129C1.95088 7.39163 1.8091 7.60212 1.73208 7.83889C1.65506 8.07567 1.64588 8.32929 1.70558 8.57101C1.76528 8.81274 1.89147 9.03292 2.06987 9.20662L5.06987 12.1283L4.36153 16.255C4.3194 16.5001 4.34667 16.7521 4.44026 16.9825C4.53385 17.213 4.69003 17.4126 4.89115 17.559C5.09226 17.7053 5.3303 17.7925 5.57836 17.8106C5.82642 17.8287 6.0746 17.7771 6.29487 17.6616L9.99987 15.7133V1.83329Z"
                  fill="#FFAD33"
                />
                <path
                  opacity="0.25"
                  d="M9.99998 1.83595C10.2491 1.83404 10.5001 2.00001 10.5001 2.00001C10.5001 2.00001 11.0865 2.20807 11.195 2.44195L13.0467 6.35634L17.1901 6.98383C17.4366 7.02086 17.6681 7.12912 17.8586 7.29635C18.0491 7.46358 18.1909 7.68309 18.2679 7.93003C18.3449 8.17697 18.3541 8.44147 18.2944 8.69357C18.2347 8.94567 18.1085 9.1753 17.9301 9.35645L14.9301 12.4035L15.6384 16.7072C15.6806 16.9629 15.6533 17.2257 15.5597 17.466C15.4661 17.7064 15.3099 17.9146 15.1088 18.0672C14.9077 18.2198 14.6696 18.3107 14.4216 18.3296C14.1735 18.3486 13.9253 18.2947 13.705 18.1743L9.99998 16.1423V1.83595Z"
                  fill="black"
                />
              </svg>
            </div>
            <p className="flex-grow-0 flex-shrink-0 w-8 h-5 opacity-50 text-sm font-semibold text-left text-black">
              (65)
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
        <div className="flex-grow-0 flex-shrink-0 w-[270px] h-[250px] relative overflow-hidden rounded bg-neutral-100">
          <div className="flex flex-col justify-start items-start absolute left-56 top-3 gap-2">
            <svg
              width={34}
              height={34}
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[34px] h-[34px] relative"
              preserveAspectRatio="none"
            >
              <circle cx={17} cy={17} r={17} fill="white" />
              <path
                d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width={34}
              height={34}
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[34px] h-[34px] relative"
              preserveAspectRatio="none"
            >
              <circle cx={17} cy={17} r={17} fill="white" />
              <path
                d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="w-[190px] h-[180px] absolute left-10 top-[35px] overflow-hidden">
            <img
              src="images/3.png"
              className="w-[191px] h-[95px] absolute left-[-1px] top-[46px] object-none"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
            RGB liquid CPU Cooler
          </p>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#db4444]">
              $160
            </p>
            <p className="flex-grow-0 flex-shrink-0 opacity-50 text-base font-medium text-left text-black">
              $170
            </p>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
              <svg
                width={16}
                height={15}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                width={16}
                height={15}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                width={16}
                height={15}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                width={16}
                height={15}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M9.99987 1.83329C9.75076 1.83145 9.50625 1.90032 9.29472 2.0319C9.08319 2.16348 8.91333 2.35236 8.80487 2.57662L6.9532 6.32995L2.80987 6.93162C2.56342 6.96713 2.33184 7.07094 2.14136 7.23129C1.95088 7.39163 1.8091 7.60212 1.73208 7.83889C1.65506 8.07567 1.64588 8.32929 1.70558 8.57101C1.76528 8.81274 1.89147 9.03292 2.06987 9.20662L5.06987 12.1283L4.36153 16.255C4.3194 16.5001 4.34667 16.7521 4.44026 16.9825C4.53385 17.213 4.69003 17.4126 4.89115 17.559C5.09226 17.7053 5.3303 17.7925 5.57836 17.8106C5.82642 17.8287 6.0746 17.7771 6.29487 17.6616L9.99987 15.7133V1.83329Z"
                  fill="#FFAD33"
                />
                <path
                  opacity="0.25"
                  d="M9.99998 1.83595C10.2491 1.83404 10.5001 2.00001 10.5001 2.00001C10.5001 2.00001 11.0865 2.20807 11.195 2.44195L13.0467 6.35634L17.1901 6.98383C17.4366 7.02086 17.6681 7.12912 17.8586 7.29635C18.0491 7.46358 18.1909 7.68309 18.2679 7.93003C18.3449 8.17697 18.3541 8.44147 18.2944 8.69357C18.2347 8.94567 18.1085 9.1753 17.9301 9.35645L14.9301 12.4035L15.6384 16.7072C15.6806 16.9629 15.6533 17.2257 15.5597 17.466C15.4661 17.7064 15.3099 17.9146 15.1088 18.0672C14.9077 18.2198 14.6696 18.3107 14.4216 18.3296C14.1735 18.3486 13.9253 18.2947 13.705 18.1743L9.99998 16.1423V1.83595Z"
                  fill="black"
                />
              </svg>
            </div>
            <p className="flex-grow-0 flex-shrink-0 w-8 h-5 opacity-50 text-sm font-semibold text-left text-black">
              (65)
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
        <div className="flex-grow-0 flex-shrink-0 w-[270px] h-[250px] relative overflow-hidden rounded bg-neutral-100">
          <div className="flex flex-col justify-start items-start absolute left-56 top-3 gap-2">
            <svg
              width={34}
              height={34}
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[34px] h-[34px] relative"
              preserveAspectRatio="none"
            >
              <circle cx={17} cy={17} r={17} fill="white" />
              <path
                d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width={34}
              height={34}
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[34px] h-[34px] relative"
              preserveAspectRatio="none"
            >
              <circle cx={17} cy={17} r={17} fill="white" />
              <path
                d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="w-[190px] h-[180px] absolute left-10 top-[35px] overflow-hidden">
            <img
              src="images/4.png"
              className="w-[140px] h-44 absolute left-6 top-0.5 object-none"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
            Small BookSelf
          </p>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#db4444]">
              $360
            </p>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
              <svg
                width={16}
                height={15}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                width={16}
                height={15}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                width={16}
                height={15}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                width={16}
                height={15}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                width={16}
                height={15}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
            </div>
            <p className="flex-grow-0 flex-shrink-0 w-8 h-5 opacity-50 text-sm font-semibold text-left text-black">
              (65)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Month;