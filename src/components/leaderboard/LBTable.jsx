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
            <div className="w-full max-w-[778px] mx-auto text-white font-archivo">
                <div class="grid grid-cols-4 font-bold px-4 mb-2 uppercase">
                    <div className="flex items-center gap-2 text-[15px] font-bold">
                        <img src="/leaderboard/lbTable/assets/hash.svg" alt="trophy" className="w-4 h-4" />
                        PLACE
                    </div>
                    <div class="flex items-center gap-2 text-[15px] ml-2 font-bold">
                        <img src="/leaderboard/lbTable/assets/profile.svg" alt="user" className="w-4 h-4" />
                        USER
                    </div>
                    <div class="flex items-center gap-2 text-[15px] ml-0.5 font-bold">
                        <img src="/leaderboard/lbTable/assets/wager.svg" alt="wager" className="w-4 h-4" />
                        WAGER
                    </div>
                    <div class="flex items-center gap-2 justify-end mr-8 text-[15px] font-bold">
                        <img src="/leaderboard/lbTable/assets/trophy.svg" alt="prize" className="w-4 h-4" />
                        PRIZE
                    </div>
                </div>

                <div class="space-y-2">
                    {lbData.slice(1, 5).map((entry, i) => {
                        const bg = bgImages[i % bgImages.length];
                        return (
                            <div
                                key={entry.place}
                                className="grid grid-cols-4 h-[54px] items-center border border-gray-900 rounded-lg px-3.5 py-2"
                                style={{
                                    backgroundImage: `url(${bg})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div class="font-bold w-[58px] px-3 py-0.5 bg-[#1F1F1F] text-[16px]">{i + 4}TH</div>
                                <div class="flex items-center gap-0.5 font-bold text-[16px]">
                                    <div class="rounded-full flex items-center justify-center">
                                        <img src="/leaderboard/lbTable/assets/pig.svg" alt="pig" className="w-8 h-8" />
                                    </div>
                                    {entry.username}
                                </div>
                                <div class="font-bold text-[16px]">{entry.wagered.toLocaleString()}$</div>
                                {/* fourth col */}
                                <div class="text-right font-bold  flex items-center justify-end  gap-2 mr-6">
                                    <div className=" flex flex-row min-w-17 ">
                                        <div class="rounded-full flex items-center justify-center ">
                                            <img
                                                src="/leaderboard/lbTable/assets/dollar.svg"
                                                alt="dollar"
                                                className="w-4 h-4"
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
