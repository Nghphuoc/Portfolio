import Section from "@/components/shared/Section";
import Footer from "@/components/shared/Footer";
import Menu from "@/components/shared/Menu";
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
