import useProfile from "@/features/profile/hooks/useProfile";
import ProfileForm from "@/features/profile/ProfileForm";

const ProfileContainer = () => {
  const [categories] = useProfile();

  return (
    <>
      <ProfileForm stackCategories={categories} />
    </>
  );
}

export default ProfileContainer;