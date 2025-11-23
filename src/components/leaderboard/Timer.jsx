// components/Timer.jsx
import { useEffect } from "react";
import useTimerStore from "/src/store/useTimerStore";

const Timer = () => {
    const timeLeft = useTimerStore((state) => state.timeLeft);
    const initializeTimer = useTimerStore((state) => state.initializeTimer);

    useEffect(() => {
        initializeTimer(); // Start the timer on component mount
    }, [initializeTimer]);

    const { days, hours, minutes, seconds } = timeLeft;

    return (
        <div className="text-white text-center text-sm md:text-lg select-none">
            <div className="flex flex-row gap-3 sm:gap-4 md:gap-6 text-sm md:text-lg">
                <div className="relative">
                    <img src="/timer-bg.svg" alt="" className="w-14 h-16 sm:w-16 sm:h-[70px] md:w-[70px] md:h-[76px]" />
                    <span className="absolute inset-0 flex items-center justify-center size-full text-xs sm:text-sm md:text-base">{days}D</span>
                </div>
                <div className="relative">
                    <img src="/timer-bg.svg" alt="" className="w-14 h-16 sm:w-16 sm:h-[70px] md:w-[70px] md:h-[76px]" />
                    <span className="absolute inset-0 flex items-center justify-center size-full text-xs sm:text-sm md:text-base">{hours}H</span>
                </div>
                <div className="relative">
                    <img src="/timer-bg.svg" alt="" className="w-14 h-16 sm:w-16 sm:h-[70px] md:w-[70px] md:h-[76px]" />
                    <span className="absolute inset-0 flex items-center justify-center size-full text-xs sm:text-sm md:text-base">{minutes}M</span>
                </div>
                <div className="relative">
                    <img src="/timer-bg.svg" alt="" className="w-14 h-16 sm:w-16 sm:h-[70px] md:w-[70px] md:h-[76px]" />
                    <span className="absolute inset-0 flex items-center justify-center size-full text-xs sm:text-sm md:text-base">{seconds}S</span>
                </div>
            </div>
        </div>
    );
};

export default Timer;
