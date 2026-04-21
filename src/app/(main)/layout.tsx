import Section from "@/compoments/shared/Section";
import Menu from "@/compoments/ui/Menu";
import React from "react";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Menu />
            <Section>
                {children}
            </Section>
        </>
    );
}
