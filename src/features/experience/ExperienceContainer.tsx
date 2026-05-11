"use client";
import { useTranslation } from "@/contexts/TranslationContext";
import ExperienceForm from "@/features/experience/ExperienceForm";
import useExperience from "@/features/experience/hook/useExperience";

const ExperienceContainer = () => {

  const { experienceData } = useExperience();
  const { t } = useTranslation();

  return <ExperienceForm t={t} experienceData={experienceData} />;
}

export default ExperienceContainer;