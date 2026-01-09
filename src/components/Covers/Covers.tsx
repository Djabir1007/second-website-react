// Components
import CoversCard from "./CoversCard/CoversCard";

// Data
import coversCardData from "./CoversCard/coversCardData";

// Styles
import styles from "./Covers.module.scss";

const Covers = () => {
  return (
    <section className={styles.covers}>
      <h2 className={styles.title}>Чехлы</h2>
      <div className={styles.flex}>
        {coversCardData.map((el) => {
          return (
            <CoversCard key={el.id} src={el.src} alt={el.alt} desc={el.desc} />
          );
        })}
      </div>
    </section>
  );
};

export default Covers;
