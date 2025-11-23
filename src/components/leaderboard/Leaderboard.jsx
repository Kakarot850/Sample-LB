import FirstRankCard from "./FirstRankCard";
import SecondRankCard from "./SecondRankCard";
import ThirdRankCard from "./ThirdRankCard";
import Card from "./Card";
import Timer from "./Timer";
import LBTable from "./LBTable";
import ButtonRight from "./ButtonRIght";
import ButtonLeft from "./ButtonLeft";

// Synthetic leaderboard data
const leaderboardData = [
    { username: "ethan99", wagered: 2521000.75, prize: 2000 },
    { username: "zo**", wagered: 2315000.0, prize: 1500 },
    { username: "xi**", wagered: 2104000.25, prize: 1000 },
    { username: "ra**", wagered: 1989000.1, prize: 750 },
    { username: "mi**", wagered: 1873200.65, prize: 500 },
];

export const Leaderboard = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-[#111111] pb-10 gap-6 md:gap-10 font-archivo pt-16 md:pt-0">
            <section className="relative w-full min-h-[600px] sm:min-h-[650px] md:min-h-[700px] lg:min-h-[750px] overflow-visible">
                {/* BACKGROUND IMAGE */}
                <div className="absolute inset-0 w-full h-full">
                    <img src="/leaderboard/bg.png" alt="bg" className="w-full h-full object-cover" />
                </div>

                {/* CONTENT WRAPPER (on top of bg) */}
                <div className="relative z-10 flex flex-col items-center px-4 py-10 sm:py-12 md:py-16 lg:py-20 gap-6 md:gap-8 lg:gap-12 w-full">
                    <div className="flex flex-col items-center gap-2 md:gap-4">
                        {/* TITLE IMAGE */}
                        <div className="relative">
                            <div className="absolute w-[300px] sm:w-[500px] md:w-[698px] h-10 sm:h-[60px] md:h-[73px] bg-[#267EE3] opacity-35 blur-2xl sm:blur-[60px] md:blur-[75.12px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>

                            <img
                                src="/leaderboard/lb-title-text.svg"
                                alt="Leaderboard"
                                className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-auto relative z-10"
                            />
                        </div>

                        {/* CODE + JOIN STAKE ROW */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
                            <ButtonLeft />
                            <ButtonRight />
                        </div>
                    </div>
                    {/* RANK CARDS */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-10">
                        <div className="order-2 sm:order-1">
                            <SecondRankCard />
                        </div>
                        <div className="order-1 sm:order-2 sm:-mt-8 md:-mt-10">
                            <FirstRankCard />
                        </div>
                        <div className="order-3 sm:order-3">
                            <ThirdRankCard />
                        </div>
                    </div>

                    {/* TIMER SECTION */}
                    <div className="flex flex-col items-center gap-2 mt-2 md:mt-4">
                        <p className="text-xs sm:text-sm md:text-[17px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-300">
                            Leaderboard ends in
                        </p>
                        <Timer />
                    </div>
                </div>
            </section>
            {/* LEADERBOARD TABLE */}
            <LBTable lbData={leaderboardData} />

            {/* winner title and cards */}
            <div className="flex flex-col gap-6 md:gap-10 mt-6 md:mt-10 font-archivo px-4">
                <div className="flex flex-col uppercase items-center justify-center gap-0 leading-tight">
                    <h1 className="text-2xl sm:text-3xl md:text-[40px] lg:text-[51px] text-white font-extrabold font-outfit text-center">
                        recent <span className="text-[#2277D8]">winners</span>
                    </h1>
                    <p className="text-[#C4C4C4] text-xs sm:text-sm md:text-base lg:text-[20px] font-semibold text-center">
                        CLICK THE CARDS BELOW TO SEE THE FULL LIST OF WINNERS
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 text-white justify-center items-center">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};
