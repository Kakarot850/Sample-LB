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
        <div className="w-full sticky top-0 z-20 bg-[#111111] py-4 px-8 border-b border-gray-800">
            <nav className="flex flex-row justify-around mx-auto max-w-7xl items-center">
                <Link to="/">
                    <img src="/footer/logo.svg" alt="logo" />
                </Link>

                <ul className="flex flex-row uppercase gap-6 text-white font-bold">
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

                <ButtonRight />
            </nav>
        </div>
    );
};

export default Header;
