import styles from "./ProfileCard.module.scss";

type ProfileCardProps = {
  user: {
    fullName: string;
    email: string;
    phone: string;
  };
};

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <article className={styles.profileCard}>
      <div className={styles.profileCardTop}>
        <div className={styles.profileCardAvatar}>{user.fullName[0]}</div>

        <div className={styles.profileCardUser}>
          <h2 className={styles.profileCardName}>{user.fullName}</h2>
          <p className={styles.profileCardEmail}>{user.email}</p>
          <p className={styles.profileCardPhone}>{user.phone}</p>
        </div>
      </div>

      <div className={styles.profileCardInfo}>
        <div className={styles.profileCardInfoItem}>
          <div className={styles.profileCardInfoLabel}>
            <span className={styles.profileCardInfoIcon}>👤</span>
            <span>Имя</span>
          </div>
          <span className={styles.profileCardInfoValue}>{user.fullName}</span>
        </div>

        <div className={styles.profileCardInfoItem}>
          <div className={styles.profileCardInfoLabel}>
            <span className={styles.profileCardInfoIcon}>✉️</span>
            <span>Email</span>
          </div>
          <span className={styles.profileCardInfoValue}>{user.email}</span>
        </div>

        <div className={styles.profileCardInfoItem}>
          <div className={styles.profileCardInfoLabel}>
            <span className={styles.profileCardInfoIcon}>📞</span>
            <span>Телефон</span>
          </div>
          <span className={styles.profileCardInfoValue}>{user.phone}</span>
        </div>
      </div>
    </article>
  );
};

export default ProfileCard;
