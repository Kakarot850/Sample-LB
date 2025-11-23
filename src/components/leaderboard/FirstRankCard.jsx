import React from "react";
// import React from "react";
// import React from "react";

const FirstRankCard = () => {
    return (
        <div className="scale-90 sm:scale-95 md:scale-100">
            {/* CARD WRAPPER (relative) */}
            <div className="relative w-[180px] h-[265px] sm:w-[200px] sm:h-[295px] md:w-[222px] md:h-[325px]">
                {/* BACKGROUND HEX IMAGE */}
                <img src="/leaderboard/rankCards/rank-first.svg" alt="Rank card background" className="w-full h-full" />

                {/* CONTENT LAYER (absolute over the card) */}
                <div className="absolute top-0 left-[] flex flex-col items-center z-10 size-full pt-8 sm:pt-10 md:pt-12 gap-2 md:gap-3">
                    <div className="flex flex-col gap-0 items-center">
                        {/* AVATAR */}
                        <div className="rounded-full overflow-hidden">
                            <img
                                src="/leaderboard/lbTable/assets/pig.png"
                                alt="User avatar"
                                className="size-14 sm:size-16 md:size-18 object-cover"
                            />
                        </div>

                        {/* USER NAME */}
                        <p className="text-sm sm:text-base font-bold text-white">USER</p>
                    </div>
                    {/* PRIZE BOX */}
                    <div className="flex justify-center">
                        <div className="w-[120px] sm:w-[135px] md:w-[142px] py-0 flex items-center justify-center text-[10px] md:text-[11px] font-semibold uppercase text-white">
                            <img src="/leaderboard/rankCards/rank-first-prize.svg" alt="" className="" />
                            <div className="absolute">
                                <span className="mr-1 text-[#f4f4f4]">PRIZE:</span>
                                <span>250.00$</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-0 items-center">
                        {/* WAGER LABEL */}
                        <p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-300">WAGER</p>

                        {/* WAGER BOX */}
                        <div className="w-full flex justify-center">
                            <div className="w-[90%] flex items-center justify-center text-xs sm:text-sm font-semibold text-white">
                                <img src="/leaderboard/rankCards/rank-first-wager.svg" alt="" className="" />
                                <div className="absolute">2000$</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstRankCard;
