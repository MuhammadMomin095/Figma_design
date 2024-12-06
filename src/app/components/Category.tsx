import React from "react";

const Category : React.FC = () => {
  return (
    <div className="w-[1170px] h-[313px]">
    <div className="flex flex-col justify-start items-start absolute left-[135px] top-[1415px] gap-[60px]">
      <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 gap-[691px]">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
            <div className="flex-grow-0 flex-shrink-0 w-5 h-10 relative">
              <div className="w-5 h-10 absolute left-[-1px] top-[-1px] rounded bg-[#db4444]" />
            </div>
            <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#db4444]">
              Categories
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-4xl font-semibold text-left text-black">
            Browse By Category
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
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[30px]">
        <div className="flex-grow-0 flex-shrink-0 w-[170px] h-[145px] relative overflow-hidden rounded border border-black/30">
          <p className="absolute left-[55px] top-[97px] text-base text-left text-black">Phones</p>
          <svg
            width={56}
            height={56}
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 absolute left-[57px] top-[25px]"
            preserveAspectRatio="none"
          >
            <g clip-path="url(#clip0_34802_868)">
              <path
                d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.6667 7H31.1354"
                stroke="black"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 44.0052V44.0305"
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="15.1667"
                y1="39.8334"
                x2="40.8333"
                y2="39.8334"
                stroke="black"
                strokeWidth={2}
              />
            </g>
            <defs>
              <clipPath id="clip0_34802_868">
                <rect width={56} height={56} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-[170px] h-[145px] relative overflow-hidden rounded border border-black/30">
          <p className="absolute left-10 top-[97px] text-base text-left text-black">Computers</p>
          <svg
            width={56}
            height={56}
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 absolute left-[58px] top-[25px]"
            preserveAspectRatio="none"
          >
            <g clip-path="url(#clip0_34802_613)">
              <path
                d="M46.6667 9.33337H9.33333C8.04467 9.33337 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3334 9.33333 37.3334H46.6667C47.9553 37.3334 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33337 46.6667 9.33337Z"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.3333 46.6666H39.6667"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 37.3334V46.6667"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M35 37.3334V46.6667"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M8 32H48" stroke="black" strokeWidth={2} strokeLinecap="round" />
            </g>
            <defs>
              <clipPath id="clip0_34802_613">
                <rect width={56} height={56} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-[170px] h-[145px] relative overflow-hidden rounded border border-black/30">
          <p className="absolute left-[34px] top-[97px] text-base text-left text-black">SmartWatch</p>
          <div className="w-14 h-14 absolute left-[57px] top-[25px] overflow-hidden">
            <div className="absolute left-[-1.42px] top-[-1.42px]" />
            <svg
              width={30}
              height={30}
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[12.5px] top-[12.5px]"
              preserveAspectRatio="none"
            >
              <path
                d="M22 1H8C4.13401 1 1 4.13401 1 8V22C1 25.866 4.13401 29 8 29H22C25.866 29 29 25.866 29 22V8C29 4.13401 25.866 1 22 1Z"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width={16}
              height={9}
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[19.5px] top-[40.5px]"
              preserveAspectRatio="none"
            >
              <path
                d="M1 1V8H15V1"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width={16}
              height={9}
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[19.5px] top-[5.5px]"
              preserveAspectRatio="none"
            >
              <path
                d="M1 8V1H15V8"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex justify-start items-end w-2.5 h-[13px] absolute left-[23px] top-[22px] gap-1">
              <svg
                width={2}
                height={13}
                viewBox="0 0 2 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <line
                  x1={1}
                  y1={1}
                  x2={1}
                  y2={12}
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
              <svg
                width={2}
                height={8}
                viewBox="0 0 2 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <line
                  x1={1}
                  y1={1}
                  x2={1}
                  y2={7}
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
              <svg
                width={2}
                height={10}
                viewBox="0 0 2 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <line
                  x1={1}
                  y1={1}
                  x2={1}
                  y2={9}
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          className="flex-grow-0 flex-shrink-0 w-[170px] h-[145px] relative overflow-hidden rounded bg-[#db4444]"
          style={{ boxShadow: "0px 1px 13px 0 rgba(0,0,0,0.05)" }}
        >
          <p className="absolute left-[51px] top-[97px] text-base text-left text-neutral-50">
            Camera
          </p>
          <svg
            width={56}
            height={56}
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 absolute left-[57px] top-[25px]"
            preserveAspectRatio="none"
          >
            <g clip-path="url(#clip0_34802_6)">
              <path
                d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_34802_6">
                <rect width={56} height={56} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-[170px] h-[145px] relative overflow-hidden rounded border border-black/30">
          <p className="absolute left-[34px] top-[97px] text-base text-left text-black">HeadPhones</p>
          <svg
            width={56}
            height={56}
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 absolute left-[57px] top-[25px]"
            preserveAspectRatio="none"
          >
            <g clip-path="url(#clip0_34802_644)">
              <path
                d="M16.3333 30.3334H14C11.4227 30.3334 9.33331 32.4227 9.33331 35V42C9.33331 44.5774 11.4227 46.6667 14 46.6667H16.3333C18.9106 46.6667 21 44.5774 21 42V35C21 32.4227 18.9106 30.3334 16.3333 30.3334Z"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M42 30.3334H39.6667C37.0893 30.3334 35 32.4227 35 35V42C35 44.5774 37.0893 46.6667 39.6667 46.6667H42C44.5773 46.6667 46.6667 44.5774 46.6667 42V35C46.6667 32.4227 44.5773 30.3334 42 30.3334Z"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.33331 35V28C9.33331 23.0493 11.3 18.3014 14.8007 14.8007C18.3013 11.3 23.0493 9.33337 28 9.33337C32.9507 9.33337 37.6986 11.3 41.1993 14.8007C44.7 18.3014 46.6666 23.0493 46.6666 28V35"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_34802_644">
                <rect width={56} height={56} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-[170px] h-[145px] relative overflow-hidden rounded border border-black/30">
          <p className="absolute left-[53px] top-[97px] text-base text-left text-black">Gaming</p>
          <svg
            width={56}
            height={56}
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 absolute left-[57px] top-[25px]"
            preserveAspectRatio="none"
          >
            <g clip-path="url(#clip0_34802_809)">
              <path
                d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 28H23.3333M18.6667 23.3334V32.6667"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M35 25.6666V25.6908"
                stroke="black"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M42 30.3333V30.3574"
                stroke="black"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_34802_809">
                <rect width={56} height={56} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
    );
};

export default Category;