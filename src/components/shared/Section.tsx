import React, { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const Section = ({ children, className = "", id }: SectionProps) => {
    return (
        <section id={id} className={`w-full ${className}`}>
            <div className="gap-5 flex flex-col mt-14 px-6">{children}</div>
        </section>
    );
};

export default Section;
