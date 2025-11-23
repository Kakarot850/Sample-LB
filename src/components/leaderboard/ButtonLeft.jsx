import React from "react";

const ButtonLeft = () => {
    return (
        <div className="relative hover:scale-105 transition-transform duration-200 cursor-pointer w-[160px] sm:w-[175px] md:w-[185px]">
            <div className="w-full">
                <svg
                    width="100%"
                    height="35"
                    viewBox="0 0 185 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <g clip-path="url(#clip0_85_300)">
                        <mask id="path-1-inside-1_85_300" fill="white">
                            <path d="M0 5.7C0 2.55198 2.55198 0 5.7 0H179.3C182.448 0 185 2.55198 185 5.7V29.3C185 32.448 182.448 35 179.3 35H5.69999C2.55197 35 0 32.448 0 29.3V5.7Z" />
                        </mask>
                        <path
                            d="M0 5.7C0 2.55198 2.55198 0 5.7 0H179.3C182.448 0 185 2.55198 185 5.7V29.3C185 32.448 182.448 35 179.3 35H5.69999C2.55197 35 0 32.448 0 29.3V5.7Z"
                            fill="white"
                            fill-opacity="0.07"
                        />
                        <g opacity="0.24" filter="url(#filter0_f_85_300)">
                            <ellipse cx="93" cy="38.5" rx="57" ry="35" fill="#EBF4EA" />
                        </g>
                    </g>
                    <path
                        d="M0 0H185H0ZM185 29.3C185 33.0003 182 36 178.3 36H6.7C2.99969 36 0 33.0003 0 29.3C0 31.8957 2.55198 34 5.7 34H179.3C182.448 34 185 31.8957 185 29.3ZM0 35V0V35ZM185 0V35V0Z"
                        fill="url(#paint0_linear_85_300)"
                        fill-opacity="0.56"
                        mask="url(#path-1-inside-1_85_300)"
                    />
                    <defs>
                        <filter
                            id="filter0_f_85_300"
                            x="-16.3"
                            y="-48.8"
                            width="218.6"
                            height="174.6"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="26.15" result="effect1_foregroundBlur_85_300" />
                        </filter>
                        <linearGradient id="paint0_linear_85_300" x1="0" y1="17.5" x2="185" y2="17.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#EBF4EA" stop-opacity="0.25" />
                            <stop offset="0.5" stop-color="#EBF4EA" />
                            <stop offset="1" stop-color="#EBF4EA" stop-opacity="0.25" />
                        </linearGradient>
                        <clipPath id="clip0_85_300">
                            <path
                                d="M0 5.7C0 2.55198 2.55198 0 5.7 0H179.3C182.448 0 185 2.55198 185 5.7V29.3C185 32.448 182.448 35 179.3 35H5.69999C2.55197 35 0 32.448 0 29.3V5.7Z"
                                fill="white"
                            />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="absolute inset-0 uppercase flex items-center justify-center gap-1 sm:gap-2 text-white text-[10px] sm:text-[11px] font-extrabold tracking-0 font-archivo">
                <div className="flex items-center gap-1 rounded-full px-3 sm:px-4 md:px-5 py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-200">
                    <span className="text-xs sm:text-sm">Code:</span>
                    <span className="font-semibold text-white text-xs sm:text-sm">Voided</span>
                    <div className="self-center pb-0.5">
                        <svg
                            width="10"
                            height="10"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                        >
                            <g clip-path="url(#clip0_85_292)">
                                <path
                                    d="M8.25 10.5V11.4375C8.25 11.7482 7.99816 12 7.6875 12H1.3125C1.00184 12 0.75 11.7482 0.75 11.4375V2.8125C0.75 2.50184 1.00184 2.25 1.3125 2.25H3V9.1875C3 9.91123 3.58877 10.5 4.3125 10.5H8.25ZM8.25 2.4375V0H4.3125C4.00184 0 3.75 0.251836 3.75 0.5625V9.1875C3.75 9.49816 4.00184 9.75 4.3125 9.75H10.6875C10.9982 9.75 11.25 9.49816 11.25 9.1875V3H8.8125C8.50313 3 8.25 2.74687 8.25 2.4375ZM11.0853 1.71026L9.53974 0.164742C9.43425 0.05926 9.29119 7.79991e-07 9.14201 0L9 0V2.25H11.25V2.10799C11.25 1.95881 11.1907 1.81575 11.0853 1.71026Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_85_292">
                                    <rect width="12" height="12" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ButtonLeft;
