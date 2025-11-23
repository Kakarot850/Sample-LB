import React from "react";

const ButtonRight = () => {
    return (
        <div className="relative hover:scale-105 transition-transform duration-200 cursor-pointer w-[160px] sm:w-[175px] md:w-[185px]">
            <div className="w-full">
                <svg width="100%" height="35" viewBox="0 0 185 35" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <g clip-path="url(#clip0_85_305)">
                        <mask id="path-1-inside-1_85_305" fill="white">
                            <path d="M0 5.7C0 2.55198 2.55198 0 5.7 0H179.3C182.448 0 185 2.55198 185 5.7V29.3C185 32.448 182.448 35 179.3 35H5.69999C2.55197 35 0 32.448 0 29.3V5.7Z" />
                        </mask>
                        <path
                            d="M0 5.7C0 2.55198 2.55198 0 5.7 0H179.3C182.448 0 185 2.55198 185 5.7V29.3C185 32.448 182.448 35 179.3 35H5.69999C2.55197 35 0 32.448 0 29.3V5.7Z"
                            fill="white"
                            fill-opacity="0.07"
                        />
                        <g opacity="0.24" filter="url(#filter0_f_85_305)">
                            <ellipse cx="99" cy="38.5" rx="57" ry="35" fill="#1375E1" />
                        </g>
                    </g>
                    <path
                        d="M0 0H185H0ZM185 29.3C185 33.0003 182 36 178.3 36H6.7C2.99969 36 0 33.0003 0 29.3C0 31.8957 2.55198 34 5.7 34H179.3C182.448 34 185 31.8957 185 29.3ZM0 35V0V35ZM185 0V35V0Z"
                        fill="url(#paint0_linear_85_305)"
                        fill-opacity="0.81"
                        mask="url(#path-1-inside-1_85_305)"
                    />
                    <defs>
                        <filter
                            id="filter0_f_85_305"
                            x="-10.3"
                            y="-48.8"
                            width="218.6"
                            height="174.6"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="26.15" result="effect1_foregroundBlur_85_305" />
                        </filter>
                        <linearGradient
                            id="paint0_linear_85_305"
                            x1="0"
                            y1="17.5"
                            x2="185"
                            y2="17.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#1E9CEA" stop-opacity="0.25" />
                            <stop offset="0.5" stop-color="#1E9CEA" />
                            <stop offset="1" stop-color="#1E9CEA" stop-opacity="0.25" />
                        </linearGradient>
                        <clipPath id="clip0_85_305">
                            <path
                                d="M0 5.7C0 2.55198 2.55198 0 5.7 0H179.3C182.448 0 185 2.55198 185 5.7V29.3C185 32.448 182.448 35 179.3 35H5.69999C2.55197 35 0 32.448 0 29.3V5.7Z"
                                fill="white"
                            />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="absolute inset-0 uppercase flex items-center justify-center gap-1 sm:gap-2 text-white text-[10px] sm:text-[11px] font-extrabold tracking-0 font-archivo">
                <svg width="8" height="12" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-2 h-3 sm:w-2.5 sm:h-3.5">
                    <path
                        d="M1.92144 4.26079C1.91377 2.27828 3.1809 1.17834 5.50729 1.17065C7.18094 1.16451 7.48008 2.26138 7.48008 2.66003C7.48008 3.42354 6.40164 4.23314 6.40164 4.23314C6.40164 4.23314 6.46147 4.7086 7.38727 4.70476C8.31307 4.70092 9.2151 4.08873 9.20973 2.55711C9.20513 0.79735 7.36426 -0.00686888 5.54487 4.41774e-05C4.02309 0.00465288 -0.0137712 0.218958 3.53266e-05 4.23237C0.0138418 7.7972 6.73146 8.11136 6.73683 10.3934C6.74604 12.8722 3.9694 13.5396 3.02979 13.5396C2.09018 13.5396 1.7082 12.8737 1.70667 12.5081C1.69977 10.501 3.6948 9.94179 3.6948 9.94179C3.6948 9.792 3.57822 9.12451 2.80582 9.12758C0.815385 9.13142 0.0230461 10.8451 0.0284153 12.518C0.0337845 13.9414 1.03782 14.8293 2.555 14.8232C5.4559 14.8124 8.7265 13.3952 8.71423 10.2483C8.70349 7.30484 1.92911 6.53595 1.92067 4.26002L1.92144 4.26079Z"
                        fill="white"
                    />
                </svg>
                <span className="text-xs sm:text-sm">join stake</span>
            </div>
        </div>
    );
};

export default ButtonRight;
