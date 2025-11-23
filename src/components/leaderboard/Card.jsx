import React from "react";

const Card = () => {
    return (
        <div className="relative w-[200px] h-[240px] sm:w-[220px] sm:h-[265px] md:w-[235px] md:h-[283px] font-archivo hover:scale-105 cursor-pointer transition-all duration-300">
            <img src="/winner-card-bg.svg" alt="" className="w-full h-full" />
            <div className="absolute inset-0 height-full">
                <div className="flex flex-col items-center justify-around py-3 md:py-4 h-full relative">
                    <div className="absolute top-0 left-0 w-20 sm:w-[85px] md:w-[93px] text-center border-[#2F97D6] border py-0.5 border-l-0 border-t-0 bg-[#2277d857] rounded-tl-xl rounded-br-lg text-[9px] md:text-[10px]">
                        JAN 2025
                    </div>
                    <img src="/pig.svg" alt="" className="size-[70px] sm:size-[80px] md:size-[90px]" />
                    <div className="flex flex-col items-center gap-0">
                        <p className="uppercase font-bold text-xl sm:text-[22px] md:text-[24px] text-[#2277D8]">mr. piggy</p>
                        {/* winner */}
                        <div className="flex flex-row gap-1 items-baseline -mt-1">
                            <span className="size-[10px] sm:size-[11px] md:size-[12px]">
                                <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 13 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_3_1155)">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M6.0985 0.609804C4.98371 0.609804 3.88905 0.70067 2.82304 0.875084C2.71597 0.892588 2.61861 0.947584 2.54834 1.03025C2.47807 1.11292 2.43948 1.21787 2.43946 1.32637V1.56237C1.93512 1.65812 1.4381 1.77277 0.948396 1.90632C0.854195 1.93205 0.770699 1.98724 0.710127 2.06384C0.649555 2.14043 0.615086 2.2344 0.611764 2.33199C0.58441 3.10664 0.8531 3.86263 1.3632 4.44625C1.87331 5.02987 2.58654 5.39732 3.35787 5.47389C3.83448 6.01284 4.45939 6.39932 5.15446 6.58502C5.09719 7.05406 4.95589 7.50894 4.73733 7.92788H4.5739C4.33129 7.92788 4.09861 8.02426 3.92706 8.19581C3.75551 8.36736 3.65914 8.60003 3.65914 8.84264V10.3672H3.20176C2.78097 10.3672 2.43946 10.7088 2.43946 11.1295C2.43946 11.382 2.64436 11.5869 2.89684 11.5869H9.30016C9.42146 11.5869 9.5378 11.5387 9.62357 11.453C9.70935 11.3672 9.75754 11.2508 9.75754 11.1295C9.75754 10.7088 9.41603 10.3672 8.99524 10.3672H8.53786V8.84264C8.53786 8.60003 8.44148 8.36736 8.26993 8.19581C8.09838 8.02426 7.86571 7.92788 7.6231 7.92788H7.45966C7.24112 7.50893 7.09982 7.05405 7.04253 6.58502C7.73761 6.39932 8.36251 6.01284 8.83912 5.47389C9.61046 5.39732 10.3237 5.02987 10.8338 4.44625C11.3439 3.86263 11.6126 3.10664 11.5852 2.33199C11.5819 2.2344 11.5474 2.14043 11.4869 2.06384C11.4263 1.98724 11.3428 1.93205 11.2486 1.90632C10.7563 1.7721 10.2589 1.65736 9.75754 1.56237V1.32637C9.75751 1.21787 9.71892 1.11292 9.64865 1.03025C9.57839 0.947584 9.48102 0.892588 9.37395 0.875084C8.29111 0.698124 7.19569 0.609406 6.0985 0.609804ZM1.53994 2.69668C1.83693 2.62228 2.13697 2.55519 2.43946 2.49421V3.04916C2.43946 3.50045 2.52117 3.93221 2.67119 4.33166C2.3643 4.17131 2.10097 3.93877 1.9039 3.65406C1.70684 3.36934 1.58193 3.04038 1.53994 2.69668ZM10.6571 2.69668C10.6151 3.04032 10.4903 3.36863 10.2934 3.65334C10.0964 3.93805 9.83319 4.17063 9.52641 4.33105C9.67582 3.93282 9.75754 3.50045 9.75754 3.04916V2.49421C10.06 2.55458 10.3601 2.62228 10.6571 2.69668Z"
                                            fill="#51ADE5"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_1155">
                                            <rect width="12.1968" height="12.1968" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <p className="uppercase font-bold text-sm sm:text-[15px] md:text-[16px]">winner</p>
                        </div>
                    </div>
                    {/* button */}
                    <div className="rounded-xl overflow-clip w-[160px] sm:w-[175px] md:w-[191px]">
                        <div className="bg-[#212426] w-full">
                            <p className="flex flex-row justify-center gap-1 text-sm md:text-base">
                                <span className="text-[#51ADE5]">$</span>3000
                            </p>
                        </div>
                        <button className="uppercase font-medium text-[9px] md:text-[10px] bg-[#2277D8] w-full py-1">
                            total prize pool
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
