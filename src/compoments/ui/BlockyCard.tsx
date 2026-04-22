import React from "react";

export interface CategoryData {
    id: string;
    title: string;
    bgColor: string;
    techs: {
        name: string;
        color: string;
    }[];
}

export interface BlockyProps {
    categories: CategoryData[];
}

const BlockyCard: React.FC<BlockyProps> = ({ categories }) => {
    return (
        <div className="flex items-center justify-center font-sans">
            <div className="max-w-5xl w-full">
                <h2
                    className="text-4xl font-black text-shadow-purple-800 mb-10 uppercase tracking-tight text-center mt-20"
                >
                    My Tech Stack
                </h2>

                {/* Bento Box */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`
                                relative p-6 rounded-2xl border-4 border-gray-900 
                                ${category.bgColor}
                                shadow-[8px_8px_0_0_#111827]
                                transition-all duration-200 ease-out
                                hover:-translate-y-2 hover:translate-x-2 hover:shadow-[16px_16px_0_0_#111827]
                                ${category.id === "architecture" ? "md:col-span-2 lg:col-span-1" : ""}
                            `}
                        >

                            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b-4 border-gray-900 pb-2 inline-block">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.techs.map((tech) => (
                                    <span
                                        key={tech.name}
                                        className={`
                                            px-4 py-2 text-sm font-bold text-white rounded-lg
                                            border-2 border-gray-900 ${tech.color}
                                            shadow-[3px_3px_0_0_#111827]
                                            cursor-default hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-[1px_1px_0_0_#111827] transition-all
                                        `}
                                    >
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlockyCard;
