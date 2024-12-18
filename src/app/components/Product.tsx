import React from "react";
import Link from 'next/link';


const Product: React.FC = () => {
  return (
    <div className="w-[1170px] h-[1016px]">
    <div className="flex flex-col justify-start items-center absolute left-[135px] top-[3097px] gap-[60px]">
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-[60px]">
        <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 gap-[672px]">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
              <div className="flex-grow-0 flex-shrink-0 w-5 h-10 relative">
                <div className="w-5 h-10 absolute left-[-1px] top-[-1px] rounded bg-[#db4444]" />
              </div>
              <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#db4444]">
                Our Products
              </p>
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-4xl font-semibold text-left text-black">
              Explore Our Products
            </p>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
            <svg
              width={46}
              height={46}
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[46px] h-[46px] relative"
              preserveAspectRatio="none"
            >
              <circle cx={23} cy={23} r={23} fill="#F5F5F5" />
              <path
                d="M22 16L15 23L22 30M15 23H31"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width={46}
              height={46}
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[46px] h-[46px] relative"
              preserveAspectRatio="none"
            >
              <circle cx={23} cy={23} r={23} fill="#F5F5F5" />
              <path
                d="M14.5 23H31M31 23L24 16M31 23L24 30"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[60px]">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[30px]">







            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
              <div className="flex-grow-0 flex-shrink-0 w-[270px] h-[250px] group relative overflow-hidden rounded bg-neutral-100">
              <div
            className="group w-[270px] h-[41px] absolute opacity-0 group-hover:opacity-100 left-[-1px] top-52 rounded-bl rounded-br bg-black"
          ></div>
          <Link href="/Cart">
          <button className="absolute left-[87px] top-[217px] text-base opacity-0 group-hover:opacity-100 font-medium text-left text-white">
            Add To Cart
          </button>
          </Link>
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
                    src="images/a.png"
                    className="w-[105px] h-[165px] absolute left-[37px] top-[-1px] object-none"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
                  Breed Dry Dog Food
                </p>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#db4444]">
                      $100
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
                        className="flex-grow-0 flex-shrink-0 opacity-25"
                        preserveAspectRatio="none"
                      >
                        <path
                          opacity="0.25"
                          d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                          fill="black"
                        />
                      </svg>
                      <svg
                        width={16}
                        height={15}
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 opacity-25"
                        preserveAspectRatio="none"
                      >
                        <path
                          opacity="0.25"
                          d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <p className="flex-grow-0 flex-shrink-0 w-8 h-5 opacity-50 text-sm font-semibold text-left text-black">
                      (35)
                    </p>
                  </div>
                </div>
              </div>
            </div>







            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
              <div className="flex-grow-0 flex-shrink-0 w-[270px] h-[250px] group relative overflow-hidden rounded bg-neutral-100">
              <div
            className="group w-[270px] h-[41px] absolute opacity-0 group-hover:opacity-100 left-[-1px] top-52 rounded-bl rounded-br bg-black"
          ></div>
          <Link href="/Cart">
          <button className="absolute left-[87px] top-[217px] text-base opacity-0 group-hover:opacity-100 font-medium text-left text-white">
            Add To Cart
          </button>
          </Link>
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
                <div className="w-[190px] h-[180px] absolute left-9 top-[15px] overflow-hidden">
                  <img
                    src="images/b.png"
                    className="w-[146px] h-[163px] absolute left-[21px] top-[7px] object-none"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
                  CANON EOS DSLR Camera
                </p>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
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
                        className="flex-grow-0 flex-shrink-0 opacity-25"
                        preserveAspectRatio="none"
                      >
                        <path
                          opacity="0.25"
                          d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <p className="flex-grow-0 flex-shrink-0 w-8 h-5 opacity-50 text-sm font-semibold text-left text-black">
                      (95)
                    </p>
                  </div>
                </div>
              </div>
            </div>





            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
              <div className="flex-grow-0 flex-shrink-0 w-[270px] h-[250px] group relative overflow-hidden rounded bg-neutral-100">
              <div
            className="group w-[270px] h-[41px] absolute opacity-0 group-hover:opacity-100 left-[-1px] top-52 rounded-bl rounded-br bg-black"
          ></div>
          <Link href="/Cart">
          <button className="absolute left-[87px] top-[217px] text-base opacity-0 group-hover:opacity-100 font-medium text-left text-white">
            Add To Cart
          </button>
          </Link>
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
                    src="images/c.png"
                    className="w-[172px] h-[170px] absolute left-2 top-[-1px] object-none"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
                  ASUS FHD Gaming Laptop
                </p>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#db4444]">
                      $700
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
                    <p className="flex-grow-0 flex-shrink-0 w-10 h-5 opacity-50 text-sm font-semibold text-left text-black">
                      (325)
                    </p>
                  </div>
                </div>
              </div>
            </div>




            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
              <div className="flex-grow-0 flex-shrink-0 w-[270px] h-[250px] group relative overflow-hidden rounded bg-neutral-100">
              <div
            className="group w-[270px] h-[41px] absolute opacity-0 group-hover:opacity-100 left-[-1px] top-52 rounded-bl rounded-br bg-black"
          ></div>
          <Link href="/Cart">
          <button className="absolute left-[87px] top-[217px] text-base opacity-0 group-hover:opacity-100 font-medium text-left text-white">
            Add To Cart
          </button>
          </Link>
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
                <div className="w-[190px] h-[180px] absolute left-10 top-[35px] overflow-hidden" />
                <img
                  src="images/d.png"
                  className="w-[172px] h-[159px] absolute left-12 top-[45px] object-none"
                />
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
                  Curology Product Set{" "}
                </p>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#db4444]">
                      $500
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
                        className="flex-grow-0 flex-shrink-0 opacity-25"
                        preserveAspectRatio="none"
                      >
                        <path
                          opacity="0.25"
                          d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <p className="flex-grow-0 flex-shrink-0 w-10 h-5 opacity-50 text-sm font-semibold text-left text-black">
                      (145)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[30px]">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
              <div className="flex-grow-0 flex-shrink-0 w-[270px] h-[250px] group relative overflow-hidden rounded bg-neutral-100">
              <div
            className="group w-[270px] h-[41px] absolute opacity-0 group-hover:opacity-100 left-[-1px] top-52 rounded-bl rounded-br bg-black"
          ></div>
          <Link href="/Cart">
          <button className="absolute left-[87px] top-[217px] text-base opacity-0 group-hover:opacity-100 font-medium text-left text-white">
            Add To Cart
          </button>
          </Link>
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
                <div className="flex justify-center items-center absolute left-3 top-3 gap-2.5 px-3 py-1 rounded bg-[#0f6]">
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-50">NEW</p>
                </div>
                <div className="w-[190px] h-[180px] absolute left-10 top-[35px] overflow-hidden">
                  <img
                    src="images/e.png"
                    className="w-[180px] h-[133px] absolute left-1 top-[23px] object-none"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
                  Kids Electric Car
                </p>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#db4444]">
                      $960
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
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-5 h-5"
                    preserveAspectRatio="none"
                  >
                    <circle cx={10} cy={10} r={6} fill="#FB1314" />
                    <circle cx={10} cy={10} r={9} stroke="black" strokeWidth={2} />
                  </svg>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle cx={10} cy={10} r={10} fill="#DB4444" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
              <div className="flex-grow-0 flex-shrink-0 w-[270px] group h-[250px] relative overflow-hidden rounded bg-neutral-100">
              <div
            className="group w-[270px] h-[41px] absolute opacity-0 group-hover:opacity-100 left-[-1px] top-52 rounded-bl rounded-br bg-black"
          ></div>
          <Link href="/Cart">
          <button className="absolute left-[87px] top-[217px] text-base opacity-0 group-hover:opacity-100 font-medium text-left text-white">
            Add To Cart
          </button>
          </Link>
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
                    src="images/f.png"
                    className="w-[186px] h-[164px] absolute left-px top-[7px] object-none"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
                  Jr. Zoom Soccer Cleats
                </p>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#db4444]">
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
                      (35)
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-5 h-5"
                    preserveAspectRatio="none"
                  >
                    <circle cx={10} cy={10} r={6} fill="#EEFF61" />
                    <circle cx={10} cy={10} r={9} stroke="black" strokeWidth={2} />
                  </svg>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle cx={10} cy={10} r={10} fill="#DB4444" />
                  </svg>
                </div>
              </div>
            </div>




            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
              <div className="flex-grow-0 flex-shrink-0 w-[270px] h-[250px] group relative overflow-hidden rounded bg-neutral-100">
              <div
            className="group w-[270px] h-[41px] absolute opacity-0 group-hover:opacity-100 left-[-1px] top-52 rounded-bl rounded-br bg-black"
          ></div>
          <Link href="/Cart">
          <button className="absolute left-[87px] top-[217px] text-base opacity-0 group-hover:opacity-100 font-medium text-left text-white">
            Add To Cart
          </button>
          </Link>
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
                <div className="flex justify-center items-center absolute left-3 top-3 gap-2.5 px-3 py-1 rounded bg-[#0f6]">
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-50">NEW</p>
                </div>
                <div className="w-[190px] h-[180px] absolute left-10 top-[35px] overflow-hidden">
                  <img
                    src="images/g.png"
                    className="w-[178px] h-[150px] absolute left-[5px] top-3.5 object-none"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
                  GP11 Shooter USB Gamepad
                </p>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#db4444]">
                      $660
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
                      (55)
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-5 h-5"
                    preserveAspectRatio="none"
                  >
                    <circle cx={10} cy={10} r={6} fill="black" />
                    <circle cx={10} cy={10} r={9} stroke="black" strokeWidth={2} />
                  </svg>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle cx={10} cy={10} r={10} fill="#DB4444" />
                  </svg>
                </div>
              </div>
            </div>




            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
              <div className="flex-grow-0 flex-shrink-0 w-[270px] h-[250px] group relative overflow-hidden rounded bg-neutral-100">
              <div
            className="group w-[270px] h-[41px] absolute opacity-0 group-hover:opacity-100 left-[-1px] top-52 rounded-bl rounded-br bg-black"
          ></div>
          <Link href="/Cart">
          <button className="absolute left-[87px] top-[217px] text-base opacity-0 group-hover:opacity-100 font-medium text-left text-white">
            Add To Cart
          </button>
          </Link>
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
                    src="images/h.png"
                    className="w-[182px] h-40 absolute left-[3px] top-px object-none"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-black">
                  Quilted Satin Jacket
                </p>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#db4444]">
                      $660
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
                          d="M9.99981 1.83329C9.7507 1.83145 9.50619 1.90032 9.29466 2.0319C9.08313 2.16348 8.91327 2.35236 8.80481 2.57662L6.95314 6.32995L2.8098 6.93162C2.56336 6.96713 2.33178 7.07094 2.1413 7.23129C1.95081 7.39163 1.80903 7.60212 1.73202 7.83889C1.655 8.07567 1.64582 8.32929 1.70552 8.57101C1.76522 8.81274 1.89141 9.03292 2.0698 9.20662L5.0698 12.1283L4.36147 16.255C4.31934 16.5001 4.34661 16.7521 4.4402 16.9825C4.53379 17.213 4.68997 17.4126 4.89108 17.559C5.0922 17.7053 5.33024 17.7925 5.5783 17.8106C5.82635 17.8287 6.07454 17.7771 6.29481 17.6616L9.99981 15.7133V1.83329Z"
                          fill="#FFAD33"
                        />
                        <path
                          opacity="0.25"
                          d="M10 1.83595C10.2492 1.83404 10.5001 2.00001 10.5001 2.00001C10.5001 2.00001 11.0866 2.20807 11.1951 2.44195L13.0468 6.35634L17.1902 6.98383C17.4366 7.02086 17.6682 7.12912 17.8587 7.29635C18.0492 7.46358 18.191 7.68309 18.268 7.93003C18.345 8.17697 18.3542 8.44147 18.2945 8.69357C18.2348 8.94567 18.1086 9.1753 17.9302 9.35645L14.9301 12.4035L15.6385 16.7072C15.6806 16.9629 15.6533 17.2257 15.5598 17.466C15.4662 17.7064 15.31 17.9146 15.1089 18.0672C14.9077 18.2198 14.6697 18.3107 14.4216 18.3296C14.1736 18.3486 13.9254 18.2947 13.7051 18.1743L10 16.1423V1.83595Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <p className="flex-grow-0 flex-shrink-0 w-8 h-5 opacity-50 text-sm font-semibold text-left text-black">
                      (55)
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-5 h-5"
                    preserveAspectRatio="none"
                  >
                    <circle cx={10} cy={10} r={6} fill="#184A48" />
                    <circle cx={10} cy={10} r={9} stroke="black" strokeWidth={2} />
                  </svg>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle cx={10} cy={10} r={10} fill="#DB4444" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-12 py-4 rounded group border border-black/50 hover:bg-[#db4444]">
      <Link href="/Wishlist">
        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left group-hover:text-neutral-50 text-black">
          View All Products
        </p>
        </Link>
      </div>
    </div>
  </div>
    );
};

export default Product;