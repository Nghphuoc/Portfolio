"use client";
import React from "react";
import Image from "next/image";
import PersionIcon from "@/assets/persion.png";
import Card from "@/compoments/ui/Card";
import { useTranslation } from "@/contexts/TranslationContext";
import BlockyCard, { CategoryData } from "@/compoments/ui/BlockyCard";

type ProfileFormProps = {
    stackCategories: CategoryData[];
};

const ProfileForm = ({ stackCategories }: ProfileFormProps) => {
  const { t } = useTranslation();

    return (
        <div className="min-h-screen dark:bg-[#0b0118] dark:text-white selection:bg-purple-500/30 font-sans px-8 flex flex-col items-center gap-3.5">
            <div className="max-w-5xl w-full">
                {/* SECTION 1: HERO AREA */}
                <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
                    {/* Avatar side with Glow effect */}
                    <div className="relative">
                        {/* Purple Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full"></div>

                        {/* Avatar Image */}
                        <div className="relative z-10 w-48 h-48 md:w-64 md:h-64">
                            <Image
                                src={PersionIcon}
                                alt="image persion"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Heading side */}
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-xl font-medium mb-2">
                            A Designer who
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                            Judges a book <br />
                            by its{" "}
                            <span className="relative inline-block px-4 text-indigo-500 dark:text-[#a855f7]">
                                cover
                                {/* Hand-drawn circle effect */}
                                <svg
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[140%] pointer-events-none opacity-60"
                                    viewBox="0 0 100 100"
                                    fill="none"
                                >
                                    <path
                                        d="M5,50 C5,20 30,5 60,10 C90,15 95,45 90,70 C85,95 40,98 15,85 C-5,75 2,45 10,30"
                                        stroke="#ffffff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                            ...
                        </h1>
                        <p className="mt-6 text-lg italic opacity-80 font-light">
                            Because if the cover does not impress you what else
                            can?
                        </p>
                    </div>
                </div>

                {/* SECTION 2: INTRO AREA */}
                <div className="max-w-3xl space-y-8">
                    <h2 className="text-5xl md:text-6xl font-bold flex items-center">
                        {t("profile.infomation.role")}
                    </h2>

                    <div className="flex items-center gap-2 text-xl md:text-2xl">
                        <span>
                            Currently, Im a Software Engineer at {t("profile.infomation.currentWork")}
                        </span>
                    </div>

                    <p className="text-lg md:text-2xl leading-relaxed font-light">
                        {t("profile.infomation.summary")}
                    </p>
                </div>
            </div>

            <div className="flex flex-row items-center gap-8 mt-20">
                {/* SECTION 3: HACKATHON EXPERIENCE */}
                <Card
                    title={t("profile.hackathon.title")}
                    description={t("profile.hackathon.description")}
                    imageSrc={PersionIcon}
                />
                <Card
                    title={t("profile.hackathon.title")}
                    description={t("profile.hackathon.description")}
                    imageSrc={PersionIcon}
                />
            </div>

            <BlockyCard categories={stackCategories} />
        </div>
    );
};

export default ProfileForm;
