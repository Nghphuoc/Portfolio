import React from "react";
import Image from "next/image";

interface CardProps {
    title?: string;
    description?: string;
    linkText?: string;
    linkHref?: string;
    imageSrc?: import("../../../node_modules/next/dist/shared/lib/get-img-props.d.ts").StaticImageData;
    imageAlt?: string;
    onLinkClick?: () => void;
    className?: string;
}

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
            className={`relative overflow-hidden rounded-3xl border-t-2 border-indigo-400 dark:bg-[#080212] dark:border-purple-600/50 p-8 md:p-12 shadow-2xl transition-all hover:shadow-[#2D786D]/10 ${className}`}
        >
            {/* Background Gradient Effect */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-indigo-800/20 dark:bg-purple-900/20 blur-[100px] rounded-full"></div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 relative z-10">
                {/* Image/Icon Section */}
                <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 flex items-center justify-center">
                    {imageSrc ? (
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(168,85,247,0.4)]"
                        />
                    ) : (
                        /* Fallback */
                        <div className="w-full h-full bg-indigo-500/30 dark:bg-purple-900/30 rounded-2xl animate-pulse"></div>
                    )}
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center md:text-left space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                        {title}
                    </h3>

                    <p className="text-base md:text-lg leading-relaxed max-w-xl">
                        {description}
                    </p>

                    <div className="pt-4">
                        <a
                            href={linkHref}
                            onClick={onLinkClick}
                            className="inline-flex items-center gap-2 font-bold text-sm md:text-base tracking-widest hover:text-purple-400 transition-colors group"
                        >
                            {linkText}
                            <span className="text-xl transition-transform group-hover:translate-x-2">
                                →
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
