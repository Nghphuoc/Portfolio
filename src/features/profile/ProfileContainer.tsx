"use client";
import { useTranslation } from "@/contexts/TranslationContext";
import useProfile from "@/features/profile/hooks/useProfile";
import ProfileForm from "@/features/profile/ProfileForm";

const ProfileContainer = () => {
  const { t } = useTranslation();
  const { stackCategories, competitionParticipated } = useProfile(t);

  return (
      <>
          <ProfileForm categories={stackCategories} 
          competitionParticipated={competitionParticipated} />
      </>
  );
}

export default ProfileContainer;