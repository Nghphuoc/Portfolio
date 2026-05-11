"use client";
import { useTranslation } from "@/contexts/TranslationContext";
import HackathonForm from "@/features/hackathon/HackathonForm";
import useHackathon from "@/features/hackathon/hook/useHackathon";

const HackathonContainer = () => {
    const { t } = useTranslation();
    const { videoUrl, relatedArticles } = useHackathon();

    return (
        <div>
            <HackathonForm videoUrl={videoUrl} t={t} articles={relatedArticles} />
        </div>
    );
};

export default HackathonContainer;
