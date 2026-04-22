import Section from "@/compoments/shared/Section";
import Footer from "@/compoments/shared/Footer";
import Menu from "@/compoments/shared/Menu";
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
            <Footer />
        </>
    );
}
