import Link from 'next/link';

const Navbar = () => {
  return (
<div className="w-[1440px] h-[334px]">
  <div className="w-[1440px] h-12 absolute left-0 top-0 overflow-hidden bg-black">
    <div className="flex justify-start items-start absolute left-[445px] top-3 gap-[231px]">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
        <p className="flex-grow-0 flex-shrink-0 w-[474px] h-[18px] text-sm text-left text-neutral-50">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link href="/Wishlist">
        <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-neutral-50">
          ShopNow
        </p>
        </Link>
      </div>
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-50">English</p>
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
            d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </div>
  </div>
  <div className="flex justify-start items-center absolute left-[135px] top-[88px] gap-[130px]">
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-40">
      <div className="flex-grow-0 flex-shrink-0 w-[118px] h-6 relative">
        <p className="absolute left-0 top-0 text-2xl font-bold text-left text-black">Exclusive</p>
      </div>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-12">
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative">
        <Link href="/">
          <p className="flex-grow-0 flex-shrink-0 text-base text-center text-black">Home</p>
          </Link>
          <svg
            width="48"
            height="1"
            viewBox="0 0 48 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-12 h-0 relative"
            preserveAspectRatio="none"
          >
            <g opacity="0.5"><line y1="0.5" x2="48" y2="0.5" stroke="black"></line></g>
          </svg>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-[66px] h-6 relative">
        <Link href="/Contact">
          <p className="absolute left-0 top-0 text-base text-center text-black">Contact</p>
          </Link>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-12 h-6 relative">
        <Link href="/About">
          <p className="absolute left-0 top-0 text-base text-center text-black">About</p>
          </Link>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-[61px] h-6 relative">
        <Link href="/Signup">
          <p className="absolute left-0 top-0 text-base text-center text-black">Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-6">
      <div
        className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-2.5 pl-5 pr-3 py-[7px] rounded bg-neutral-100"
      >
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[34px]">
          <p className="flex-grow-0 flex-shrink-0 opacity-50 text-xs text-left text-black">
            What are you looking for?
          </p>
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
              d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-4">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
          preserveAspectRatio="none"
        >
          <path
            d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <div className="flex-grow-0 flex-shrink-0 w-8 h-8 relative">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 absolute left-px top-2"
            preserveAspectRatio="none"
          >
            <path
              d="M8.25 20.25C8.66421 20.25 9 19.9142 9 19.5C9 19.0858 8.66421 18.75 8.25 18.75C7.83579 18.75 7.5 19.0858 7.5 19.5C7.5 19.9142 7.83579 20.25 8.25 20.25Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M18.75 20.25C19.1642 20.25 19.5 19.9142 19.5 19.5C19.5 19.0858 19.1642 18.75 18.75 18.75C18.3358 18.75 18 19.0858 18 19.5C18 19.9142 18.3358 20.25 18.75 20.25Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M2.25 3.75H5.25L7.5 16.5H19.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.5 12.5H19.1925C19.2792 12.5001 19.3633 12.4701 19.4304 12.4151C19.4975 12.3601 19.5434 12.2836 19.5605 12.1986L20.9105 5.44859C20.9214 5.39417 20.92 5.338 20.9066 5.28414C20.8931 5.23029 20.8679 5.18009 20.8327 5.13717C20.7975 5.09426 20.7532 5.05969 20.703 5.03597C20.6528 5.01225 20.598 4.99996 20.5425 5H6"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <div className="w-4 h-[17px]">
          <Link href="/Cart">

            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[14.5px] top-[1.5px]"
              preserveAspectRatio="xMidYMid meet"
            >
              
            </svg>
            </Link>
           
          </div>
        </div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
          preserveAspectRatio="none"
        >
          <rect width="32" height="32" rx="16" fill="#DB4444"></rect>
          <path
            d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  </div>
  <div className="w-[225px] h-52 absolute left-[1081px] top-[126px]">












    <div
      className="w-56 h-52 relative overflow-hidden rounded bg-gradient-to-br from-[#baa8ce] via-[#7d6797] to-[#2a2a2a] bg-opacity-90 backdrop-blur-[150px]"
    >
      <div className="flex flex-col justify-start items-start absolute left-5 top-[18px] gap-[13px]">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
            preserveAspectRatio="none"
          >
            <path
              d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-neutral-50">
            Manage My Account
          </p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
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
              d="M3 6.3V20.5C3 20.7652 3.10536 21.0196 3.29289 21.2071C3.48043 21.3946 3.73478 21.5 4 21.5H20C20.2652 21.5 20.5196 21.3946 20.7071 21.2071C20.8946 21.0196 21 20.7652 21 20.5V6.3H3Z"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinejoin="round"
            ></path>
            <path
              d="M21 6.3L18.1665 2.5H5.8335L3 6.3M15.7775 9.6C15.7775 11.699 14.0865 13.4 12 13.4C9.9135 13.4 8.222 11.699 8.222 9.6"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-neutral-50">My Order</p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
            preserveAspectRatio="none"
          >
            <g clipPath="url(#clip0_21815_491)">
              <path
                d="M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <circle cx="12" cy="12" r="11.25" stroke="white" strokeWidth="1.5"></circle>
            </g>
            <defs>
              <clipPath id="clip0_21815_491">
                <rect width="24" height="24" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-neutral-50">
            My Cancellations
          </p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
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
              d="M19.8284 9.93621C20.4517 9.93621 20.7176 10.7286 20.2205 11.1046L16.8905 13.6234C16.1688 14.1693 15.8661 15.1087 16.1334 15.9732L17.3864 20.0261C17.5735 20.6312 16.8729 21.1193 16.3701 20.7341L13.3075 18.3879C12.536 17.7969 11.464 17.7969 10.6925 18.3879L7.61357 20.7466C7.11152 21.1312 6.41161 20.645 6.59677 20.0403L7.83243 16.0046C8.09532 15.146 7.79694 14.2145 7.08413 13.6684L3.73432 11.1022C3.24111 10.7244 3.50831 9.93621 4.12961 9.93621H8.12744C9.07024 9.93621 9.90305 9.32198 10.1815 8.42125L11.379 4.5479C11.5678 3.93721 12.4322 3.93722 12.621 4.5479L13.8185 8.42124C14.0969 9.32198 14.9298 9.93621 15.8726 9.93621H19.8284Z"
              stroke="#FAFAFA"
              strokeWidth="1.5"
            ></path>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-neutral-50">My Reviews</p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
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
              d="M4 12H13.5M6 15L3 12L6 9M11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H13C12.4696 20 11.9609 19.7893 11.5858 19.4142C11.2107 19.0391 11 18.5304 11 18V17"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-neutral-50">Logout</p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Navbar;
