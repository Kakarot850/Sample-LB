const bg1 = "/leaderboard/lbTable/assets/row-bg-1.svg";
const bg2 = "/leaderboard/lbTable/assets/row-bg-2.svg";
const bg3 = "/leaderboard/lbTable/assets/row-bg-3.svg";

function LBTable({ lbData }) {
    const bgImages = [bg1, bg2, bg3];
    const leaderboardData = [
        { place: "1ST", user: "USER", wagered: "52,856.95$", prize: "500.00" },
        { place: "2ND", user: "USER", wagered: "52,856.95$", prize: "300.00" },
        { place: "3RD", user: "USER", wagered: "52,856.95$", prize: "200.00" },
        { place: "4TH", user: "USER", wagered: "52,856.95$", prize: "250.00" },
        { place: "5TH", user: "USER", wagered: "52,856.95$", prize: "150.00" },
    ];

    return (
        <>
            <div className="w-full max-w-[778px] mx-auto text-white font-archivo px-4">
                <div className="grid grid-cols-4 font-bold px-2 sm:px-4 mb-2 uppercase text-xs sm:text-sm md:text-base">
                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-[15px] font-bold">
                        <img src="/leaderboard/lbTable/assets/hash.svg" alt="trophy" className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">PLACE</span>
                        <span className="sm:hidden">#</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-[15px] ml-1 sm:ml-2 font-bold">
                        <img src="/leaderboard/lbTable/assets/profile.svg" alt="user" className="w-3 h-3 sm:w-4 sm:h-4" />
                        USER
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-[15px] ml-0 sm:ml-0.5 font-bold">
                        <img src="/leaderboard/lbTable/assets/wager.svg" alt="wager" className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">WAGER</span>
                        <span className="sm:hidden">$</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 justify-end mr-4 sm:mr-6 md:mr-8 text-xs sm:text-sm md:text-[15px] font-bold">
                        <img src="/leaderboard/lbTable/assets/trophy.svg" alt="prize" className="w-3 h-3 sm:w-4 sm:h-4" />
                        PRIZE
                    </div>
                </div>

                <div className="space-y-2">
                    {lbData.slice(1, 5).map((entry, i) => {
                        const bg = bgImages[i % bgImages.length];
                        return (
                            <div
                                key={entry.place}
                                className="grid grid-cols-4 h-12 sm:h-[50px] md:h-[54px] items-center border border-gray-900 rounded-lg px-2 sm:px-3.5 py-2"
                                style={{
                                    backgroundImage: `url(${bg})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="font-bold w-12 sm:w-[58px] px-2 sm:px-3 py-0.5 bg-[#1F1F1F] text-xs sm:text-sm md:text-[16px]">
                                    {i + 4}TH
                                </div>
                                <div className="flex items-center gap-0.5 font-bold text-xs sm:text-sm md:text-[16px]">
                                    <div className="rounded-full flex items-center justify-center">
                                        <img
                                            src="/leaderboard/lbTable/assets/pig.svg"
                                            alt="pig"
                                            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                                        />
                                    </div>
                                    <span className="truncate">{entry.username}</span>
                                </div>
                                <div className="font-bold text-xs sm:text-sm md:text-[16px] truncate">
                                    {entry.wagered.toLocaleString()}$
                                </div>
                                {/* fourth col */}
                                <div className="text-right font-bold flex items-center justify-end gap-1 sm:gap-2 mr-3 sm:mr-4 md:mr-6">
                                    <div className="flex flex-row min-w-14 sm:min-w-16 md:min-w-17">
                                        <div className="rounded-full flex items-center justify-center text-xs sm:text-sm md:text-base">
                                            <img
                                                src="/leaderboard/lbTable/assets/dollar.svg"
                                                alt="dollar"
                                                className="w-3 h-3 sm:w-4 sm:h-4"
                                            />
                                            {entry.prize}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default LBTable;
