import React from "react";
import { NavLink, Link } from "react-router-dom";
import ButtonRight from "../leaderboard/ButtonRIght";
import { HiMiniTrophy } from "react-icons/hi2";
import { IoGift } from "react-icons/io5";
import { SiKick } from "react-icons/si";

const navItems = [
    {
        name: "leaderboard",
        to: "/",
        icon: <HiMiniTrophy className="size-[15px]" />,
    },
    {
        name: "bonus",
        to: "/bonus",
        icon: <IoGift className="size-[17px]" />,
    },
    {
        name: "stream",
        to: "/stream",
        icon: <SiKick className="size-[15px]" />,
    },
];

const Header = () => {
    return (
        <div className="w-full fixed top-0 z-50 py-3 md:py-4 px-4 md:px-8 border-b border-gray-800">
            <nav className="flex flex-row justify-between md:justify-around mx-auto max-w-7xl items-center gap-2">
                <Link to="/">
                    <div className="w-fit bg-[#1F1F1F] pl-3 pr-2 md:pl-6 md:pr-6 pt-1 pb-2 rounded-md">
                        <img src="/footer/logo.svg" alt="logo" className="w-16 md:w-auto" />
                    </div>
                </Link>

                <ul className="hidden md:flex flex-row uppercase gap-4 lg:gap-6 text-white font-bold text-xs lg:text-sm">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className="relative flex flex-row items-center gap-2 pb-1 transition-all text-white"
                        >
                            {({ isActive }) => (
                                <>
                                    {/* Text should ALWAYS be white */}
                                    <span>{item.name}</span>

                                    {/* Icon color changes only when active */}
                                    <span className={isActive ? "text-green-400" : "text-slate-500"}>{item.icon}</span>

                                    {/* Underline only when active */}
                                    {isActive && (
                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-b-2 border-green-400 w-6"></div>
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </ul>

                <div className="hidden md:block">
                    <ButtonRight />
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button className="text-white p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Header;
