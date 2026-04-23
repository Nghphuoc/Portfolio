"use client";
import React from "react";
import { useTranslation } from "@/contexts/TranslationContext";

const Footer = () => {
    const {t} = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-4 text-center">
            <p>&copy; {currentYear} {t("nameAuthor")}. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
