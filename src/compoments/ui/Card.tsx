import React from "react";
import Image, { StaticImageData } from "next/image";

export type CardProps = {
    title?: string;
    description?: string;
    linkText?: string;
    linkHref?: string;
    imageSrc?: StaticImageData | string; // Hỗ trợ cả object ảnh hoặc URL
    imageAlt?: string;
    onLinkClick?: () => void;
    className?: string;
};

const Card = ({
    title = "Title Here",
    description = "Description here...",
    linkText = "LEARN MORE",
    linkHref = "#",
    imageSrc,
    imageAlt = "icon",
    onLinkClick,
    className = "",
}: CardProps) => {
    return (
        <div
            className={`group relative overflow-hidden rounded-3xl border border-indigo-200 dark:border-purple-600/40 bg-white/50 dark:bg-[#080212] p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row gap-6 md:gap-8 ${className}`}
        >
            <div className="mx-auto md:mx-0 w-32 h-32 md:w-40 md:h-40 shrink-0 relative rounded-2xl overflow-hidden shadow-[0_8px_16px_rgba(168,85,247,0.3)]">
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        sizes="(max-width: 768px) 128px, 160px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full bg-indigo-500/10 dark:bg-purple-900/30 animate-pulse"></div>
                )}
            </div>

            <div className="flex flex-col flex-1 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3 md:mb-4">
                    {title}
                </h3>

                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-3 sm:line-clamp-4 wrap-break-word">
                    {description}
                </p>

                <div className="pt-6 mt-auto text-center md:text-right">
                    <a
                        href={linkHref}
                        onClick={onLinkClick}
                        className="inline-flex items-center gap-2 font-bold text-sm md:text-base tracking-widest text-indigo-600 dark:text-purple-400 hover:text-indigo-800 dark:hover:text-purple-300 transition-colors"
                    >
                        {linkText}
                        <span className="text-xl transition-transform group-hover:translate-x-2">
                            →
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
