import styles from "./ProfileLogout.module.scss";

type ProfileLogoutProps = {
  onLogout: () => void;
};

const ProfileLogout = ({ onLogout }: ProfileLogoutProps) => {
  return (
    <button className={styles.profileLogout} type="button" onClick={onLogout}>
      <span className={styles.profileLogoutIcon}>↪</span>

      <span className={styles.profileLogoutContent}>
        <span className={styles.profileLogoutTitle}>Выйти из аккаунта</span>
        <span className={styles.profileLogoutText}>
          Вы выйдете из аккаунта на этом устройстве
        </span>
      </span>

      <span className={styles.profileLogoutArrow}>›</span>
    </button>
  );
};

export default ProfileLogout;
