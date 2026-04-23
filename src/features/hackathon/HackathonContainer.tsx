"use client";
import { useTranslation } from "@/contexts/TranslationContext";
import HackathonForm from "@/features/hackathon/HackathonForm";

const HackathonContainer = () => {
    const { t } = useTranslation();
    const videoUrl = "https://www.youtube.com/watch?v=6sEAe2aC9xM";

    return (
        <div>
            <HackathonForm videoUrl={videoUrl} t={t} />
        </div>
    );
};

export default HackathonContainer;
