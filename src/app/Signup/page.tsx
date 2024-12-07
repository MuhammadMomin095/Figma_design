'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

const SignupPage = () => {

    return (
        <div>
          {/* Navbar */}
          <Navbar />
    
          {/* Signup Section */}
          <div className="w-[1305px] h-[781px]">
            <div className="flex justify-start items-center absolute left-0 top-[200px] gap-[129px]">
              <div className="flex-grow-0 flex-shrink-0 w-[805px] h-[781px] relative overflow-hidden rounded-tr rounded-br bg-[#cbe4e8]">
                <img
                  src="images/z.png"
                  className="w-[919px] h-[706px] absolute left-[-9px] top-[74px] object-none"
                />
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-12">
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
                  <p className="flex-grow-0 flex-shrink-0 text-4xl font-medium text-left text-black">
                    Create an account
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
                    Enter your details below
                  </p>
                </div>
                <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-10">
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-10">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                      <input className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-black" placeholder='Name'/>
                      <svg
                        width="371"
                        height="2"
                        viewBox="0 0 371 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-[370px] h-0 relative"
                        preserveAspectRatio="none"
                      >
                        <g opacity="0.5">
                          <line x1="0.5" y1="1" x2="370.5" y2="1" stroke="black"></line>
                        </g>
                      </svg>
                    </div>
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                      <input className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-black" placeholder='Email or Phone Number'/>
                      
                        
                        
                    
                      <svg
                        width="371"
                        height="2"
                        viewBox="0 0 371 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-[370px] h-0 relative"
                        preserveAspectRatio="none"
                      >
                        <g opacity="0.5">
                          <line x1="0.5" y1="1" x2="370.5" y2="1" stroke="black"></line>
                        </g>
                      </svg>
                    </div>
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                      <input className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-black" placeholder='Password'/>
                      
                     
        
                      <svg
                        width="371"
                        height="2"
                        viewBox="0 0 371 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-[370px] h-0 relative"
                        preserveAspectRatio="none"
                      >
                        <g opacity="0.5">
                          <line x1="0.5" y1="1" x2="370.5" y2="1" stroke="black"></line>
                        </g>
                      </svg>
                      
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-[122px] py-4 rounded group border border-black/50 hover:bg-[#db4444]">
                      <Link href="/">
                      <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left group-hover:text-neutral-50 text-black">
                        Create Account
                      </p>
                      </Link>
                    </div>
                    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-8">
                      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 px-[86px] py-4 rounded border border-black/40">
                        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                            preserveAspectRatio="none"
                          >
                            <g clipPath="url(#clip0_21815_3336)">
                              <path
                                d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z"
                                fill="#4285F4"
                              ></path>
                              <path
                                d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z"
                                fill="#34A853"
                              ></path>
                              <path
                                d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z"
                                fill="#FBBC04"
                              ></path>
                              <path
                                d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z"
                                fill="#EA4335"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_21815_3336">
                                <rect width="24" height="24" fill="white" transform="translate(0 0.5)"></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
                            Sign up with Google
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
                        <p className="flex-grow-0 flex-shrink-0 opacity-70 text-base text-left text-black">
                          Already have account?
                        </p>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                          <Link href="/Login">
                            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#707070]">
                              Login
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    










    
          {/* Footer */}
          
          <div className="w-[1440px] h-[440px]">
  <div className="w-[1440px] h-[440px] absolute left-0 top-[1121px] overflow-hidden bg-black">
        <div className="flex flex-col justify-start items-center absolute left-0 top-[376px] opacity-40 gap-4">
          <svg
            width={1440}
            height={1}
            viewBox="0 0 1440 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[1440px] h-0 relative"
            preserveAspectRatio="none"
          >
            <g opacity="0.5">
              <line opacity="0.4" y1="0.5" x2={1440} y2="0.5" stroke="white" />
            </g>
          </svg>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 opacity-60 gap-3">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5">
              <svg
                width={21}
                height={20}
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M10.5 18.3332C15.1024 18.3332 18.8334 14.6022 18.8334 9.99984C18.8334 5.39746 15.1024 1.6665 10.5 1.6665C5.89765 1.6665 2.16669 5.39746 2.16669 9.99984C2.16669 14.6022 5.89765 18.3332 10.5 18.3332Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 8.14799C13 8.14799 11.9706 6.6665 10.2549 6.6665C8.53924 6.6665 7.16669 8.14799 7.16669 9.99984C7.16669 11.8517 8.53924 13.3332 10.2549 13.3332C11.9706 13.3332 13 11.8517 13 11.8517"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-white">
                Copyright Rimel 2022. All right reserved
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-start absolute left-[135px] top-20 gap-[87px]">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
                <div className="flex-grow-0 flex-shrink-0 w-[118px] h-6 relative">
                  <p className="absolute left-0 top-0 text-2xl font-bold text-left text-neutral-50">
                    Exclusive
                  </p>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-neutral-50">
                  Subscribe
                </p>
              </div>
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-neutral-50">
                Get 10% off your first order
              </p>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[217px] relative gap-8 pl-0 py-3 rounded bg-black ">
              <input className=" text-black" placeholder="Enter your email"
              />
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M9.91199 11.9998H3.99999L2.02299 4.1348C2.01033 4.0891 2.00262 4.04216 1.99999 3.9948C1.97799 3.2738 2.77199 2.7738 3.45999 3.1038L22 11.9998L3.45999 20.8958C2.77999 21.2228 1.99599 20.7368 1.99999 20.0288C2.00201 19.9655 2.01313 19.9029 2.03299 19.8428L3.49999 14.9998"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
            <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-neutral-50">
              Support
            </p>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
              <p className="flex-grow-0 flex-shrink-0 w-[175px] text-base text-left text-neutral-50">
                Plaza Nazimabad, Karachi, Pakistan.
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-neutral-50">
                mominshykh7@gmail.com
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-neutral-50">
                +92 315 2309503
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
            <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-neutral-50">
              Account
            </p>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-neutral-50">
                My Account
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-neutral-50">
                Login / Register
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-neutral-50">Cart</p>
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-neutral-50">Wishlist</p>
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-neutral-50">Shop</p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
            <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-neutral-50">
              Quick Link
            </p>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-neutral-50">
                Privacy Policy
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-neutral-50">
                Terms Of Use
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-neutral-50">FAQ</p>
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-neutral-50">Contact</p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
              <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-neutral-50">
                Download App
              </p>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="flex-grow-0 flex-shrink-0 opacity-70 text-xs font-medium text-left text-neutral-50">
                  Save $3 with App New User Only
                </p>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                  <div className="flex-grow-0 flex-shrink-0 w-20 h-20 relative overflow-hidden bg-black">
                    <img
                      src="images/code.png"
                      className="w-[76px] h-[76px] absolute left-[0.25px] top-[0.25px] object-cover border-[2.5px] border-white"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                    <div className="flex-grow-0 flex-shrink-0 w-[110px] h-10 relative overflow-hidden bg-[#030406]">
                      <img
                        src="images/playstore.png"
                        className="w-[104px] h-[30px] absolute left-[2.2px] top-[4.2px] rounded object-none border-[0.6px] border-neutral-50"
                      />
                      <svg
                        width={3}
                        height={3}
                        viewBox="0 0 3 3"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-[98.39px] top-[21.24px]"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M1.9545 1.24463C1.83328 1.26195 1.72141 1.7928 1.64483 1.91533C1.57459 2.02771 1.50379 2.12399 1.39429 2.19699"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                      <svg
                        width={3}
                        height={6}
                        viewBox="0 0 3 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-[97.19px] top-[20.96px]"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M2.45028 0.964355C2.3818 1.10131 2.31512 1.23484 2.24487 1.36896C2.20438 1.44625 2.21093 1.54347 2.16862 1.62105C2.12388 1.70308 2.06189 1.72599 2.05813 1.83891C2.05582 1.90823 2.05813 1.97806 2.05813 2.04744C2.05813 2.40502 2.08984 2.76867 1.91963 3.08072C1.87766 3.15768 1.87023 3.26773 1.84649 3.35149C1.82526 3.42645 1.75807 3.5057 1.75001 3.57558C1.73727 3.68605 1.612 3.85532 1.5695 3.96462C1.52806 4.07117 1.54269 4.08634 1.4699 4.17626C1.39728 4.26597 1.31977 4.35948 1.25204 4.45325C1.17139 4.56493 1.1898 4.75322 1.1898 4.88586"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                      <svg
                        width={2}
                        height={2}
                        viewBox="0 0 2 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-[93.91px] top-[21.24px]"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M1.22072 1.30045C1.2101 1.2049 0.984506 1.24443 0.912598 1.24443"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                      <svg
                        width={4}
                        height={4}
                        viewBox="0 0 4 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-[97.39px] top-[21.71px]"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M2.55529 0.708008C2.55343 0.751718 2.53573 0.794429 2.52628 0.836968C2.52125 0.859588 2.51811 0.883291 2.51016 0.905133C2.50388 0.922364 2.49302 0.93747 2.48989 0.955796C2.48636 0.976467 2.47609 0.991763 2.47147 1.01153C2.46705 1.03041 2.4688 1.04942 2.46732 1.06864C2.46095 1.15144 2.4641 1.23517 2.4641 1.31827C2.4641 1.33613 2.46653 1.35642 2.46318 1.374C2.45865 1.39778 2.4472 1.41721 2.43923 1.43986C2.42325 1.48527 2.37958 1.52384 2.36968 1.57112C2.35387 1.64667 2.32239 1.71942 2.28816 1.78989C2.26619 1.83512 2.25681 1.88791 2.23197 1.93175C2.20119 1.98607 2.17734 2.05262 2.13087 2.09664C2.108 2.1183 2.09591 2.15534 2.07561 2.17954C2.05731 2.20133 2.03384 2.21788 2.01504 2.23918C2.00718 2.2481 2.00213 2.25914 1.99408 2.26843C1.98664 2.27702 1.98444 2.29041 1.98349 2.30136C1.98229 2.31521 1.97538 2.31978 1.97152 2.33268C1.96206 2.36418 1.96427 2.39268 1.94434 2.4218C1.92909 2.44409 1.91784 2.47558 1.89828 2.49411C1.87291 2.51815 1.86416 2.55655 1.8391 2.583C1.82227 2.60077 1.81778 2.62658 1.80295 2.6461C1.78362 2.67153 1.77539 2.70188 1.75505 2.72716C1.72309 2.76686 1.68658 2.80771 1.64658 2.83954C1.63798 2.84638 1.62017 2.86764 1.60812 2.86764C1.58357 2.86764 1.56512 2.80975 1.55838 2.79256C1.54277 2.75271 1.5383 2.71 1.53144 2.66798C1.5284 2.64935 1.51259 2.6129 1.5296 2.5959C1.55085 2.57464 1.56615 2.55002 1.58556 2.52819C1.60336 2.50817 1.6294 2.49806 1.64589 2.47776C1.66575 2.45332 1.67216 2.42821 1.68642 2.39969C1.69447 2.3836 1.69392 2.3654 1.70162 2.34903C1.71012 2.33096 1.72251 2.30882 1.72626 2.28916C1.72952 2.27205 1.73997 2.24726 1.74883 2.2325C1.76439 2.20656 1.78225 2.18178 1.79581 2.15467C1.80141 2.14347 1.79905 2.13231 1.80179 2.12059C1.80529 2.10565 1.81514 2.09263 1.8193 2.07729C1.83665 2.01332 1.87701 1.95973 1.89529 1.89675C1.90247 1.87201 1.91741 1.85271 1.92431 1.82628C1.92872 1.80937 1.94089 1.79753 1.94503 1.78022C1.9476 1.76947 1.95139 1.75659 1.95609 1.7466C1.96655 1.72437 1.96542 1.69805 1.9699 1.67383C1.97364 1.65367 1.98091 1.6337 1.98648 1.61396C1.99239 1.59304 1.99255 1.57149 1.998 1.5504C2.00406 1.52689 2.00134 1.50188 2.00491 1.47809C2.00788 1.4583 2.01681 1.42343 2.02886 1.40762C2.05107 1.37847 2.05129 1.32475 2.06432 1.29063C2.07777 1.25542 2.08021 1.21687 2.09426 1.18148C2.10229 1.16124 2.10345 1.13991 2.11176 1.11976C2.11929 1.10151 2.13038 1.07473 2.12834 1.05436C2.12819 1.05284 2.09942 1.09626 2.0938 1.10502C2.08582 1.11746 2.08334 1.13239 2.07676 1.14555C2.06976 1.15954 2.05959 1.17158 2.05189 1.18516C2.0306 1.22271 2.01136 1.2642 1.98602 1.29892C1.97425 1.31506 1.96061 1.339 1.95816 1.35857C1.95543 1.38043 1.95283 1.4035 1.94964 1.42581C1.94309 1.47166 1.91694 1.51482 1.91694 1.56214C1.91694 1.59223 1.91694 1.62232 1.91694 1.65241C1.91694 1.67532 1.90753 1.68837 1.90427 1.70952C1.90247 1.72122 1.89802 1.73233 1.89621 1.74407C1.8935 1.76167 1.8788 1.77361 1.87341 1.79035C1.86936 1.80296 1.8707 1.82106 1.86282 1.83158C1.85484 1.84222 1.85241 1.85191 1.84854 1.86428C1.83864 1.89597 1.8345 1.93068 1.82022 1.96054C1.80426 1.99391 1.78155 2.02115 1.77186 2.05749C1.76789 2.07235 1.76066 2.08088 1.75366 2.09433C1.7473 2.10658 1.748 2.12052 1.74215 2.13279C1.73174 2.15466 1.71669 2.1725 1.71406 2.1975C1.71273 2.2101 1.70872 2.22011 1.70553 2.23204C1.69705 2.26387 1.68613 2.29569 1.67606 2.32715C1.66151 2.37262 1.63082 2.41235 1.62701 2.46187C1.62403 2.50061 1.62046 2.53936 1.61641 2.57816C1.6126 2.6148 1.59512 2.64446 1.58786 2.67995C1.58447 2.69654 1.58166 2.71098 1.57105 2.72463C1.5625 2.73562 1.56118 2.75198 1.55216 2.76401C1.52207 2.80413 1.47959 2.82627 1.43955 2.85474C1.41952 2.86899 1.39547 2.8884 1.3905 2.91323"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-[110px] h-10 relative overflow-hidden bg-black">
                      <img
                        src="images/appstore.png"
                        className="w-[104px] h-[34px] absolute left-[2.2px] top-[2.2px] rounded object-none border-[0.6px] border-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M13 10H17.5L17 12H13V21H11V12H7V10H11V8.128C11 6.345 11.186 5.698 11.534 5.046C11.875 4.40181 12.4018 3.87501 13.046 3.534C13.698 3.186 14.345 3 16.128 3C16.65 3 17.108 3.05 17.5 3.15V5H16.128C14.804 5 14.401 5.078 13.99 5.298C13.686 5.46 13.46 5.686 13.298 5.99C13.078 6.401 13 6.804 13 8.128V10Z"
                  fill="white"
                />
              </svg>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <g clipPath="url(#clip0_34802_1563)">
                  <path
                    d="M12.905 8.84651L12.905 8.84646C12.9194 8.06035 13.2418 7.3113 13.8028 6.76049C14.3639 6.20969 15.1188 5.90116 15.905 5.90129L12.905 8.84651ZM12.905 8.84651L12.877 10.4213M12.905 8.84651L12.877 10.4213M4.75811 7.80857L4.89001 7.91846C6.76679 9.48211 8.71781 10.4182 10.7495 10.6952C10.7495 10.6952 10.7495 10.6952 10.7495 10.6952L12.3104 10.9072L4.75811 7.80857ZM4.75811 7.80857L4.72759 7.97751M4.75811 7.80857L4.72759 7.97751M4.72759 7.97751C4.42576 9.64819 4.5683 11.0709 5.1479 12.3018C5.72718 13.532 6.73827 14.5605 8.15577 15.4519L8.15579 15.452M4.72759 7.97751L8.15579 15.452M8.15579 15.452L9.90279 16.55L9.954 16.4685M8.15579 15.452L9.954 16.4685M9.954 16.4685L9.90279 16.55C9.97196 16.5934 10.0294 16.6532 10.0702 16.724C10.1109 16.7948 10.1337 16.8745 10.1365 16.9562C10.1392 17.0378 10.122 17.1189 10.0862 17.1924C10.0504 17.2658 9.99716 17.3294 9.93112 17.3775L9.93101 17.3775M9.954 16.4685L9.93101 17.3775M9.93101 17.3775L8.33901 18.5405L8.11542 18.7039M9.93101 17.3775L8.11542 18.7039M8.11542 18.7039L8.39178 18.7211M8.11542 18.7039L8.39178 18.7211M8.39178 18.7211C9.3449 18.7805 10.2529 18.7385 11.0095 18.5884L11.0096 18.5884M8.39178 18.7211L11.0096 18.5884M11.0096 18.5884C13.3886 18.1134 15.3745 16.9794 16.7652 15.2211M11.0096 18.5884L16.7652 15.2211M12.877 10.4213C12.8757 10.4918 12.8594 10.5612 12.8293 10.625C12.7993 10.6887 12.7561 10.7454 12.7026 10.7912C12.649 10.8371 12.5864 10.8712 12.5188 10.8911C12.4513 10.9111 12.3803 10.9166 12.3105 10.9072L12.877 10.4213ZM16.7652 15.2211C18.1557 13.463 18.945 11.0883 18.945 8.14229M16.7652 15.2211L18.945 8.14229M18.945 8.14229C18.945 7.99668 18.8714 7.78474 18.744 7.55722M18.945 8.14229L18.744 7.55722M18.744 7.55722C18.6142 7.32559 18.4215 7.06508 18.1673 6.82049M18.744 7.55722L18.1673 6.82049M18.1673 6.82049C17.6587 6.33088 16.8999 5.90129 15.905 5.90129L18.1673 6.82049ZM20.4978 5.53842C20.8818 5.48388 21.3285 5.34345 21.916 5.01105C21.6101 6.49526 21.4321 7.16764 20.7642 8.08336L20.745 8.10969V8.14229C20.745 11.9415 19.578 14.7567 17.8258 16.7397C16.0726 18.7238 13.7277 19.8813 11.3624 20.3532C9.74529 20.6759 7.7544 20.5728 5.99643 20.2106C5.11813 20.0296 4.30077 19.7846 3.61983 19.4974C3.03727 19.2517 2.56009 18.9775 2.22956 18.6904C2.66065 18.6482 3.4114 18.5535 4.24366 18.3598C5.24355 18.1272 6.37173 17.7494 7.20306 17.141L7.31918 17.056L7.19904 16.9768C7.15724 16.9492 7.11178 16.9196 7.06301 16.8879C6.30477 16.3938 4.74648 15.3786 3.73155 13.5166C2.66714 11.5637 2.19257 8.66295 3.91362 4.42592C5.57889 6.34347 7.2726 7.66001 8.99504 8.3668L8.99505 8.36681C9.57662 8.60536 9.94255 8.72373 10.2318 8.79141C10.4509 8.84265 10.6261 8.86463 10.8117 8.88794C10.8703 8.89529 10.93 8.90278 10.9924 8.91135L11.2872 8.95189L11.1059 8.77077C11.131 7.8414 11.4254 6.93895 11.9539 6.17331C12.4904 5.39606 13.2442 4.79434 14.1211 4.4435C14.9979 4.09265 15.9588 4.00828 16.8833 4.20093C17.8079 4.39359 18.6551 4.85471 19.3189 5.52657L19.3485 5.55658L19.3907 5.55628C19.4934 5.55556 19.5972 5.55908 19.7036 5.56269C19.9483 5.57098 20.2068 5.57974 20.4978 5.53842Z"
                    fill="white"
                    stroke="black"
                    strokeWidth="0.2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_34802_1563">
                    <rect width={24} height={24} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M17 3H7C5.93913 3 4.92172 3.42143 4.17157 4.17157C3.42143 4.92172 3 5.93913 3 7V17C3 18.0609 3.42143 19.0783 4.17157 19.8284C4.92172 20.5786 5.93913 21 7 21H17C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 7.5C17.7652 7.5 18.0196 7.39464 18.2071 7.20711C18.3946 7.01957 18.5 6.76522 18.5 6.5C18.5 6.23478 18.3946 5.98043 18.2071 5.79289C18.0196 5.60536 17.7652 5.5 17.5 5.5C17.2348 5.5 16.9804 5.60536 16.7929 5.79289C16.6054 5.98043 16.5 6.23478 16.5 6.5C16.5 6.76522 16.6054 7.01957 16.7929 7.20711C16.9804 7.39464 17.2348 7.5 17.5 7.5Z"
                  fill="white"
                />
              </svg>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

        </div>
      );
};

export default SignupPage;
