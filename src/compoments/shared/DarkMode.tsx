"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

export const DarkModeTypes = {
    LIGHT: "light",
    DARK: "dark",
    SYSTEM: "system",
} as const;

export type DarkModeType = (typeof DarkModeTypes)[keyof typeof DarkModeTypes];

const DarkMode = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-32 h-10 bg-gray-200/50 dark:bg-gray-800/50 animate-pulse rounded-xl" />
        );
    }

    const themeOptions = [
        { value: DarkModeTypes.LIGHT, icon: <Sun size={18} />, label: "Light" },
        { value: DarkModeTypes.DARK, icon: <Moon size={18} />, label: "Dark" },
        {
            value: DarkModeTypes.SYSTEM,
            icon: <Monitor size={18} />,
            label: "System",
        },
    ];

    return (
        <div className="inline-flex items-center p-1 bg-black/5 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl shadow-inner">
            {themeOptions.map((opt) => {
                const isActive = theme === opt.value;

                return (
                    <button
                        key={opt.value}
                        onClick={() => setTheme(opt.value)}
                        aria-label={opt.label}
                        title={opt.label}
                        className={`
                          relative p-2 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out
                          ${
                              isActive
                                  ? "bg-white dark:bg-gray-800 text-[#2D786D] dark:text-teal-400 shadow-sm scale-100"
                                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-black/5 dark:hover:bg-white/5 scale-95 hover:scale-100"
                          }
                        `}>
                        {opt.icon}
                    </button>
                );
            })}
        </div>
    );
};

export default DarkMode;
