"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkMode from "@/components/shared/DarkMode";
import Button from "@/components/shared/Button";
import { Menu as MenuIcon, X } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const Menu = () => {
    const { t } = useTranslation();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuItems = ["PROFILE", "SERVICES", "WORKS", "NOTES", "EXPERIENCE"];

    const glassNavClasses = `
    relative sticky top-6 mx-5 z-50 flex justify-between items-center py-4 px-4 sm:py-6 sm:px-6 max-w-full 
    font-['Montserrat',sans-serif] bg-white/20 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/90 dark:border-white/10
    transition-all duration-500 
    shadow-[0_15px_35px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.4),inset_0_4px_15px_rgba(255,255,255,0.8)]
    hover:shadow-[0_20px_40px_rgba(0,0,0,0.15),inset_0_0_0_1px_rgba(255,255,255,0.5),inset_0_4px_20px_rgba(255,255,255,0.8)]`;

    const neumorphismBtnClasses = `
    relative flex justify-center items-center w-10 h-10 sm:w-11 sm:h-11 
    bg-white/40 dark:bg-white/10 backdrop-blur-md rounded-full border border-white/60 dark:border-white/20 text-[#2D786D] 
    transition-all duration-300 hover:scale-105 hover:bg-white/60 dark:hover:bg-white/20
    shadow-[0_5px_15px_rgba(0,0,0,0.05),inset_0_2px_5px_rgba(255,255,255,0.8)] 
    hover:shadow-[0_8px_20px_rgba(45,120,109,0.2),inset_0_2px_5px_rgba(255,255,255,1)]`;

    const renderMenuText = (isActive: boolean, item: string) => {
        if (!isActive) return item;

        return (
            <>
                <span className="font-normal text-lg mb-0.5 dark:text-teal-400 drop-shadow-md">
                    [
                </span>
                {item}
                <span className="font-normal text-lg mb-0.5 dark:text-teal-400 drop-shadow-md">
                    ]
                </span>
            </>
        );
    };

    return (
        <nav className={glassNavClasses}>
            {/* Logo */}
            <div className="font-['Caveat',cursive] text-3xl sm:text-4xl font-semibold hover:text-teal-400 hover:border-white/90 dark:text-white tracking-wide cursor-pointer drop-shadow-sm">
                <Link href="/">Jayki</Link>
            </div>

            {/* Menu Links (Desktop / Tablet) */}
            <ul className="hidden lg:flex items-center gap-10 m-0 p-0 list-none">
                {menuItems.map((item) => {
                    const itemPath = `/${item.toLowerCase()}`;
                    const isActive =
                        pathname === itemPath ||
                        (pathname === "/" && item === "PROFILE");

                    return (
                        <li key={item} className="flex items-center">
                            <Link
                                href={itemPath}
                                className={`
                                  text-[14px] font-bold tracking-[0.5px] transition-all duration-300 flex items-center gap-1.5 drop-shadow-sm
                                  ${isActive ? "text-[#166357] dark:text-teal-400" : "hover:text-[#2D786D] dark:hover:text-teal-300 hover:-translate-y-0.5"}
                                `}
                            >
                                {renderMenuText(isActive, item)}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            {/* Contact Section & Mobile Controls */}
            <div className="flex items-center gap-2 sm:gap-5">
                <a
                    href={t("profile.infomation.contact.zalo")}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className={neumorphismBtnClasses}>
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-sm text-[#2D786D] dark:text-teal-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            ></path>
                        </svg>
                    </Button>
                </a>

                <DarkMode />

                {/* Hamburger Button (Mobile) */}
                <button
                    className="flex lg:hidden p-2 text-[#1c3240] dark:text-white transition-transform hover:scale-105"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X size={24} />
                    ) : (
                        <MenuIcon size={24} />
                    )}
                </button>
            </div>

            {/* Dropdown Menu (Mobile) */}
            {isMobileMenuOpen && (
                <div className="absolute top-[110%] left-0 w-full lg:hidden bg-white/80 dark:bg-black/80 backdrop-blur-2xl rounded-2xl border border-white/50 dark:border-gray-700 shadow-2xl p-5 z-50 animate-in fade-in slide-in-from-top-5 duration-300">
                    <ul className="flex flex-col items-center gap-6 m-0 p-0 list-none">
                        {menuItems.map((item) => {
                            const itemPath = `/${item.toLowerCase()}`;
                            const isActive =
                                pathname === itemPath ||
                                (pathname === "/" && item === "PROFILE");

                            return (
                                <li
                                    key={item}
                                    className="flex items-center w-full justify-center"
                                >
                                    <Link
                                        href={itemPath}
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                        className={`
                                          text-sm font-bold tracking-[1px] transition-all duration-300 flex items-center gap-1.5 drop-shadow-sm
                                          ${isActive ? "text-[#166357] dark:text-teal-400" : "text-[#4A555A] dark:text-gray-300 hover:text-[#2D786D] dark:hover:text-teal-300"}
                                        `}
                                    >
                                        {renderMenuText(isActive, item)}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Menu;
