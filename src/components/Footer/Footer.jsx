import React from "react";

const Footer = () => {
    return (
        <div className="w-full px-4 md:px-8">
            <footer className="relative w-full bg-[#111111] text-white rounded-t-3xl mt-10 p-6 sm:p-8 md:p-10 border border-[#404c52] overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-0 relative z-10">
                    {/* LOGO + COPYRIGHT */}
                    <div className="space-y-2 text-center md:text-left">
                        <div className="w-24 sm:w-28 md:w-32 h-8 sm:h-9 md:h-10 scale-130 rounded-md flex items-center justify-center mx-auto md:mx-0">
                            <img src="/footer/logo.svg" alt="Footer Logo" />
                        </div>

                        <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-5 md:mt-6 font-semibold">© 2025 Voided.gg</p>
                        <p className="text-xs sm:text-sm text-gray-400 font-semibold">All Rights Reserved</p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-12 md:gap-20 lg:gap-40">
                        {/* PAGES */}
                        <div className="text-center sm:text-left">
                            <h3 className="text-white font-semibold mb-2 tracking-wide text-sm md:text-base">PAGES</h3>
                            <ul className="space-y-2">
                                <li className="text-green-400 cursor-pointer hover:text-green-300 transition font-semibold text-xs sm:text-sm">
                                    Leaderboard
                                </li>
                                <li className="text-gray-400 cursor-pointer hover:text-white font-semibold text-xs sm:text-sm">Bonuses</li>
                                <li className="text-gray-400 cursor-pointer hover:text-white flex items-center justify-center sm:justify-start gap-1 font-semibold text-xs sm:text-sm">
                                    Stream <img src="/footer/link.svg" alt="link" className="w-3 h-3" />
                                </li>
                            </ul>
                        </div>

                        {/* SOCIALS */}
                        <div className="text-center sm:text-left">
                            <h3 className="text-white font-semibold mb-2 tracking-wide text-sm md:text-base">SOCIALS</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center justify-center sm:justify-start gap-2 text-gray-400 font-semibold text-xs sm:text-sm">
                                    <img src="/footer/twitter.svg" alt="twitter" className="w-4 h-4" />
                                    Twitter
                                </li>

                                <li className="flex items-center justify-center sm:justify-start gap-2 text-gray-400 font-semibold text-xs sm:text-sm">
                                    <img src="/footer/discord.svg" alt="discord" className="w-4 h-4" />
                                    Discord
                                </li>

                                <li className="flex items-center justify-center sm:justify-start gap-2 text-gray-400 font-semibold text-xs sm:text-sm">
                                    <img src="/footer/twitter.svg" alt="twitter" className="w-4 h-4" />
                                    Twitter (Prizes)
                                </li>
                            </ul>
                        </div>

                        {/* PARTNERS */}
                        <div className="text-center sm:text-left">
                            <h3 className="text-white font-semibold mb-2 tracking-wide text-sm md:text-base">PARTNERS</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center justify-center sm:justify-start gap-1 text-gray-400 font-semibold text-xs sm:text-sm">
                                    Stake.com <img src="/footer/link.svg" alt="link" className="w-3 h-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
