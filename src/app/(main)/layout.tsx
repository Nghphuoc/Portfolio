import Menu from "@/compoments/Menu";
import React from "react";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Menu/>
            {children}
        </>
    );
}
