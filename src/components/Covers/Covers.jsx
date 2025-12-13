import CoversCard from "./CoversCard";
import CoversData from "./CoversData";
import styles from "./Covers.module.scss";

const Covers = () => {
  return (
    <section className={styles.covers}>
      <h2 className={styles.title}>Чехлы</h2>
      <div className={styles.flex}>
        {CoversData.map((el) => {
          return (
            <CoversCard key={el.id} src={el.src} alt={el.alt} desc={el.desc} />
          );
        })}
      </div>
    </section>
  );
};

export default Covers;
