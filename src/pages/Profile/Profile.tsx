import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useProfile } from "./hooks/useProfile";
import styles from "./Profile.module.scss";
import ProfileCard from "./ProfileCard/ProfileCard";
import ProfileLogout from "./ProfileLogout/ProfileLogout";

type ProfileProps = {
  clearUserData: () => void;
};

const Profile = ({ clearUserData }: ProfileProps) => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useProfile();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      navigate("/auth");
    }
  }, [navigate]);

  useEffect(() => {
    if (isError) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      navigate("/auth");
    }
  }, [isError, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    clearUserData();
    navigate("/auth");
  };

  if (isLoading) {
    return <p>Загрузка профиля...</p>;
  }

  if (isError) {
    return <p>Не удалось загрузить профиль</p>;
  }

  if (!data) {
    return <p>Профиль не найден</p>;
  }

  return (
    <section className={styles.profile}>
      <h1 className={styles.profileTitle}>Личный кабинет</h1>
      <ProfileCard user={data.user} />
      <ProfileLogout onLogout={handleLogout} />
    </section>
  );
};

export default Profile;
